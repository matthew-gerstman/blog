import type { Post } from '../types/posts.types';

const post: Post = {
  id: 1,
  slug: 'redux-code-split-typecheck',
  title: 'Redux with Code-Splitting and Type Checking',
  date: 'January 17, 2019',
  excerpt:
    'How do you code-split your store so you’re not serving unnecessary JavaScript on a single page? And while you’re working on code splitting, how do you get it to play nicely with TypeScript so that you',
  content: `
<h1 id="before-we-get-started">Before We Get Started</h1>
<p>This article assumes a working knowledge of Redux, React, React-Redux, TypeScript, and uses a little bit of Lodash for convenience. If you’re not familiar with those subjects, you might need to do some Googling. You can find the final version of all the code <a href="https://github.com/matthew-gerstman/redux-codesplit-typechecl-example/tree/master" rel="noopener">here</a>. Also, follow me on Twitter <a href="https://twitter.com/matthewgerstman" rel="noopener">@MatthewGerstman.</a></p>
<h1 id="introduction">Introduction</h1>
<p>Redux has become the go-to state management system for React applications. While plenty of material exists about Redux best practices in Single Page Applications (SPAs), there isn’t a lot of material on putting together a store for a large, monolithic application.</p>
<p>What happens when you only need a few reducers on each page, but it could be any permutation of the total number of reducers you support? How do you code-split your store so you’re not serving unnecessary JavaScript on a single page? And while you’re working on code splitting, how do you get it to play nicely with TypeScript so that you can trust what’s going in and coming out of the store?</p>
<h1 id="the-architecture">The Architecture</h1>
<p>Before we dive into code, let’s outline the architecture we’re about to build.</p>
<p><strong>We need to create the store in such a way that we can register reducers asynchronously. </strong>This allows us to async load code associated with those reducers.</p>
<p><strong>We need to type the store in such a way that it knows about all possible reducers we can register. </strong>This allows us to ensure static typing of all components at runtime.</p>
<h1 id="creating-the-store">Creating the Store</h1>
<p>In order to code split, we need to instantiate the store in a way that allows us to register reducers after store creation. We start with the following code:</p>
<pre><code class="language-typescript">// redux-utils/store.ts

import { combineReducers, createStore, Store } from "redux";
import { ReducerMap, StoreShape } from "./types";

let reducerMap: ReducerMap = {};
const store = createStore(combineReducers(reducerMap));

export function getStore() {
  return store;
}

export function registerReducer(newReducers: ReducerMap): Store&lt;StoreShape&gt; {
  reducerMap = { ...reducerMap, ...newReducers };
  // We probably want to validate we're not replacing reducers that already
  // exist here but that exercise is left up to the reader.
  store.replaceReducer(combineReducers(reducerMap));
  return store;
}</code></pre>
<p>What’s going on here? We’re instantiating the store with the file and we’ve also exported two functions. One called <code>getStore</code>, which is simply a wrapper around the store and doesn’t need much further explanation, and <code>registerReducer</code>.</p>
<p><code>registerReducer</code> is the more interesting function. We maintain a map of existing reducers internal to the module and then replace add new ones as they come in. We then call <code><a href="https://redux.js.org/api/store#replaceReducer" rel="noopener">replaceReducer</a></code> on the store and replace it wholesale. <code><a href="https://redux.js.org/api/store#replaceReducer" rel="noopener">replaceReducer</a></code> is smart enough to maintain the state of the reducers that were previously there and fires an <code>INIT</code> action for the new ones to populate their default state.</p>
<p>This is what makes code-splitting possible. We don’t care when the reducer is registered and all of that code can be loaded after the store is created.</p>
<h1 id="type-safety">Type Safety</h1>
<p>Now let’s dig into what makes this type safe. Well, let’s dig into our <code>types.ts</code> file.</p>
<pre><code class="language-typescript">// redux-utils/types.ts

import { MuggleNamespaceShape } from "../data/muggles/types";
import { WizardNamespaceShape } from "../data/wizards/types";
import { Reducer } from "redux";
export const MUGGLE_NAMESPACE_KEY = "MUGGLE_NAMESPACE";
export const WIZARD_NAMESPACE_KEY = "WIZARD_NAMESPACE";

export type FullStoreShape = {
  [MUGGLE_NAMESPACE_KEY]: MuggleNamespaceShape;
  [WIZARD_NAMESPACE_KEY]: WizardNamespaceShape;
};
export type StoreShape = Partial&lt;FullStoreShape&gt;;
export type NamespaceKey = keyof StoreShape;
export type ReducerMap = Partial&lt;
  { [k in NamespaceKey]: Reducer&lt;FullStoreShape[k]&gt; }
&gt;;</code></pre>
<p>You’ll notice we import <code>MuggleNamespaceShape</code> and <code>WizardNamespaceShape</code>from elsewhere in the codebase. This is okay. Because these are type-only imports, most build systems won’t actually bundle them in when building packages. This is where the statically typed code splitting magic happens.</p>
<p>We then export types <code>StoreShape</code> and <code>ReducerMap</code>, which allow us to register all possible types on the actual state object in advance. Because we colocate the namespace keys in the types file, our developers can ensure that there are no key conflicts.</p>
<p>You’ll notice these types are both <code>Partial</code>, so how do we enforce that a reducer is actually registered? Well, we do that in the selector layer.</p>
<h1 id="selectors">Selectors</h1>
<p>Our selector layer is what ensures that we always have the reducers registered that we need. We can do this with a simple helper function.</p>
<pre><code class="language-typescript">// redux-utils/selectors.ts

import { FullStoreShape, NamespaceKey, StoreShape } from "./types";
export function getStateAtNamespaceKey&lt;T extends NamespaceKey&gt;(
  state: StoreShape,
  namespace: T
): FullStoreShape[T] {
  const namespaceState = state[namespace];
  if (!namespaceState) {
    throw new Error(
      \`Attempted to access state for an unregistered namespace at key \${namespace}\`
    );
  }
  // We need to explicitly say this is not undefined because TypeScript doesn't 
  // recognize the thrown error will prevent us from ever getting here.
  return namespaceState!;
}</code></pre>
<p>In short, <code>getStateAtNamespaceKey</code> complains <strong>very loudly </strong>if you attempt to access a namespace that hasn’t been registered yet. This is the only way we should access our data. As long as you call <code>registerReducer</code> in the same part of your tree as your <code><a href="https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store" rel="noopener">&lt;Provider /&gt;</a></code> component, your namespace should be registered by the time you get down to a <code><a href="https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options]" rel="noopener">connect</a></code>. We’ll elaborate on this in a moment.</p>
<h1 id="writing-actual-product-code">Writing Actual Product Code</h1>
<p>This is is all well and good, but let’s talk about what our product code looks like.</p>
<pre><code class="language-tsx">// wizards.tsx

import * as React from "react";
import { connect, Provider } from "react-redux";
import { getStoreForWizardApp } from "./data/wizards/store";
import { Wizard } from "./data/wizards/types";
import { getWizards } from "./data/wizards/selectors";
export function WizardApp() {
  return (
    &lt;Provider store={getStoreForWizardApp()}&gt;
      &lt;ConnectedWizards /&gt;
    &lt;/Provider&gt;
  );
}
function Wizard({ name, spells, parentsAlive }: Wizard) {
  return (
    &lt;&gt;
      &lt;span&gt;Name: {name}&lt;/span&gt;
      &lt;span&gt;Parents: {parentsAlive ? "Alive" : "Dead"}&lt;/span&gt;
      &lt;span&gt;Learned Spells: {spells.map(spell =&gt; \`\${spell} \`)}&lt;/span&gt;
    &lt;/&gt;
  );
}
type WizardsProps = { wizards: Wizard[] };
function Wizards({ wizards }: WizardsProps) {
  return (
    &lt;&gt;
      {wizards.map(wizardProps =&gt; (
        &lt;Wizard {...wizardProps} /&gt;
      ))}
    &lt;/&gt;
  );
}
const mapStateToProps = state =&gt; ({
  wizards: getWizards(state)
});
const ConnectedWizards = connect&lt;WizardsProps, {}, {}&gt;(mapStateToProps)(
  Wizards
);</code></pre>
<p>The code above is (hopefully) straightforward. We connect to the Redux store using <code>react-redux</code>and use the <code><a href="https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store" rel="noopener">&lt;Provider /</a>&gt;</code>and <code><a href="https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options" rel="noopener">connect</a></code>component/HOC respectively. We take a list of wizards and render them out to the screen, along with information about what spells they know and the status of their parents. Spoiler: We’re getting to a certain boy wizard with a lightning scar.</p>
<p>The two novel bits of code here are <code>getStoreForWizardApp</code>and <code>getWizards</code>. Let’s dig into them both.</p>
<h2 id="getstoreforwizardapp">getStoreForWizardApp</h2>
<pre><code class="language-typescript">// data/wizards/store.ts

import { getStore, registerReducer } from "../../redux-utils/store";
import { WIZARD_NAMESPACE_KEY } from "../../redux-utils/types";
import { once } from "lodash";
import wizardReducer from "./reducer";
export const getStoreForWizardApp = once(() =&gt; {
  registerReducer({ [WIZARD_NAMESPACE_KEY]: wizardReducer });
  return getStore();
});</code></pre>
<p>In the above code, you saw what we call the <code>registerReducer</code>and <code>getStore</code>functions that we declared before. We pass <code>registerReducer</code>a map with the key for the Wizard namespace and the Wizard reducer. Another important note: if we try to pass the wrong key or even the wrong reducer to <code>registerReducer</code>, type checking will complain about it.</p>
<p>One last but crucial bit. We wrap <code>getStoreForWizardApp</code> in <code><a href="https://lodash.com/docs/4.17.10#once" rel="noopener">lodash.once</a></code>. This ensures that we only register the reducer once and then always return the same instance of the store. While this isn’t <em>strictly</em>required, <code>replaceReducer</code>is an expensive noop, if called repeatedly.</p>
<h2 id="getwizards">getWizards</h2>
<pre><code class="language-typescript">// data/wizards/selectors.ts

import { getStateAtNamespaceKey } from "../../redux-utils/selectors";
import { StoreShape, WIZARD_NAMESPACE_KEY } from "../../redux-utils/types";
import { mapValues } from "lodash";
import { Wizard } from "./types";

const getWizards = (state: StoreShape) =&gt; (
  getStateAtNamespaceKey(state, WIZARD_NAMESPACE_KEY)
);</code></pre>
<p>This one is much more straightforward. We call <code>getStateAtNamespaceKey</code>and spit out the wizards to the user.</p>
<h2 id="actions">Actions</h2>
<p>Sweet! We’ve set up the store, registered our reducer, and even built some components. Now let’s talk about how we can strongly type our actions. We do this in both the action layer and the reducer layer.</p>
<pre><code class="language-typescript">// data/wizards/actions.ts

import { AnyAction } from "redux";
export type Wizard = {
  name: string;
  parentsAlive: boolean;
  spells: string[];
};
export const enum WizardActionTypes {
  LearnSpell = "WIZARD/LEARN_SPELL",
  KillParents = "WIZARD/KILL_PARENTS"
}
export type WizardNamespaceShape = {
  [id: string]: Wizard;
};
export interface LearnSpellAction extends AnyAction {
  type: WizardActionTypes.LearnSpell;
  payload: { id: string; spell: string };
}
export interface KillParentsAction extends AnyAction {
  type: WizardActionTypes.KillParents;
  payload: { id: string };
}
export type WizardAction = LearnSpellAction | KillParentsAction;</code></pre>
<p>You’ll notice that we have two action types: <code>LearnSpellAction</code>and <code>KillParentsAction</code>. These actions each have a strongly-typed payload and their type is a predetermined string enum. We also export <code>WizardAction</code>, which is useful in our reducer.</p>
<pre><code class="language-typescript">// data/wizards/reducer.ts

import { WizardAction, WizardActionTypes, WizardNamespaceShape } from "./types";
const defaultState: WizardNamespaceShape = {
  harryPotter: {
    name: "Harry Potter",
    parentsAlive: false,
    spells: []
  }
};
export default function reducer(
  state: WizardNamespaceShape,
  action: WizardAction
) {
  switch (action.type) {
    case WizardActionTypes.KillParents: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          parentsAlive: false
        }
      };
    }
    case WizardActionTypes.LearnSpell: {
      const { id, spell } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          spells: [...state[id].spells, spell]
        }
      };
    }
    default: {
      return state;
    }
  }
}</code></pre>
<p>This is one of those occasions where TypeScript is truly brilliant. Our given action type is any of the <code>WizardActionTypes</code>. Because each of them has their own defined <code>type</code>property, our switch statement will actually strongly type <code>action.payload</code>after we determine its type. If we were to put any invalid code here, TypeScript would complain.</p>
<h2 id="store-hydration">Store Hydration</h2>
<p>The last question to answer here is: “How do we get initial data into the store?” That’s done through a process called store hydration. What this means is that we’re going to dispatch an action that sets the state. Let’s take a look at this code.</p>
<p>First, we update our <code>actions.ts</code>file as shown.</p>
<pre><code class="language-typescript">export const enum WizardActionTypes {
  Hydrate = "WIZARD/HYDRATE",
  LearnSpell = "WIZARD/LEARN_SPELL",
  KillParents = "WIZARD/KILL_PARENTS"
}

export interface HydrateWizardsAction extends AnyAction {
  type: WizardActionTypes.Hydrate;
  payload: WizardNamespaceShape;
}
export type WizardAction =
  | HydrateWizardsAction
  | LearnSpellAction
  | KillParentsAction;
</code></pre>
<p>Second, we add another switch statement to our reducer.</p>
<pre><code class="language-typescript">switch (action.type) {
  case WizardActionTypes.Hydrate: {
    return {
      ...action.payload
    };
  }
  case WizardActionTypes.KillParents: {</code></pre>
<p>Third, we need to make an action creator.</p>
<pre><code class="language-typescript">// data/wizards/actions.ts

import { WizardActionTypes, WizardNamespaceShape } from "./types";

export function hydrateWizardNamespace(initialData: WizardNamespaceShape) {
  return {
    type: WizardActionTypes.Hydrate,
    payload: initialData
  };
}
// LearnSpell and KillParents are exercises left up to the reader</code></pre>
<p>Finally, we dispatch the hydration action from our store creation function.</p>
<pre><code class="language-typescript">import { getStore, registerReducer } from "../../redux-utils/store";
import { WIZARD_NAMESPACE_KEY } from "../../redux-utils/types";
import { once } from "lodash";
import wizardReducer from "./reducer";
import { WizardNamespaceShape } from "./types";
import { hydrateWizardNamespace } from "./actions";
export const getStoreForWizardApp = once(
  (initialData?: WizardNamespaceShape) =&gt; {
    registerReducer({ [WIZARD_NAMESPACE_KEY]: wizardReducer });
    const store = getStore();
    if (initialData) {
      store.dispatch(hydrateWizardNamespace(initialData));
    }
    return store;
  }
);
</code></pre>
<p>The <code><a href="https://lodash.com/docs/4.17.10#once" rel="noopener">lodash.once</a></code>is now extra useful because we will only ever populate the store once.</p>
<h1 id="conclusions">Conclusions</h1>
<p>I hope this article helped you get started with Redux. At compile time, our store is strongly typed and has knowledge of the entire system. At runtime, we can code split however we’d like.</p>
<h1 id="glossary-of-functions">Glossary of Functions</h1>
<p>This is a list of the core functions and types and the roles they serve in this architecture.</p>
<h2 id="types">Types</h2>
<ul>
<li><strong>NamespaceKey </strong>— A key for a reducer or namespace within the state object.</li>
<li><strong>ReducerMap </strong>— Object of all possible keys we can have on our store and their matching reducers. Is declared as a partial because it is not guaranteed that any given namespace is on the store.</li>
<li><strong>StoreShape </strong>— Object of all possible keys we can have on our store and their state shapes. Is declared as a partial because it is not guaranteed that any given namespace is on the store.</li>
</ul>
<h2 id="functions">Functions</h2>
<ul>
<li><strong>hydrateWizardNamespace </strong>— Product layer function that provides initial state for the wizard namespace after the reducer is registered.</li>
<li><strong>getStoreForWizardApp </strong>— Product layer function that registers the “wizard” namespace within the store.</li>
<li><strong>getStateAtNamespaceKey </strong>— Function that grabs a namespace from the state object and fails quickly if that namespace is unregistered. Used to make our selectors type safe.</li>
<li><strong>registerReducer</strong> — Function that injects a reducer into the store after page load. Ensures that we only register known reducers at the typing layer.</li>
</ul>
<h1 id="thanks">Thanks</h1>
<p>Publishing an article like this takes a village. I want thank a whole bunch of people for their contributions.</p>
<p><a href="https://twitter.com/acemarke" rel="noopener">@acemarke</a> — For maintaining Redux and inspiring me to write this article.</p>
<p><a href="https://twitter.com/brianlink" rel="noopener">@brianlink</a> — Typo patrol.</p>
<p><a href="https://twitter.com/donavon" rel="noopener">@donavon</a> — For adding and removing commas like a boss.</p>
<p><a href="https://twitter.com/goingglacial" rel="noopener">@goingglacial</a> — For a thorough code review before merging the source this is based on.</p>
<p><a href="https://twitter.com/hswolff" rel="noopener">@hswolff</a> — For teaching me Redux in the first place.</p>
<p><a href="https://twitter.com/jetpacmonkey" rel="noopener">@jetpacmonkey</a> — For finding a bug in this article.</p>
<p><a href="https://twitter.com/peterpme" rel="noopener">@peterpme</a> — For code reviewing the article.</p>
<p><a href="https://twitter.com/swyx" rel="noopener">@swyx</a> — For providing technical feedback on this article.</p>
<p>Andrew H — For article feedback</p>
<p>Justin K — For copy editing and fixing my atrocious grammar.</p>
<p>Matt S — For relevant life advice.</p>
<p>Yoeun P — For pair programming with me when I wrote the source this is based on.</p>
<h1></h1>
`.trim(),
  tags: ['Tech', 'redux', 'typescript', 'code-splitting'],
  banner_img: '/images/blog/hero-mountain-lake.jpg',
  wordCount: 2127,
};

export default post;
