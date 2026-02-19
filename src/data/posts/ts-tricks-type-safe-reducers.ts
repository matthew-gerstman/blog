import type { Post } from '../types/posts.types';

const post: Post = {
  id: 5,
  slug: 'ts-tricks-type-safe-reducers',
  title: 'TS Tricks: Type-safe Reducers',
  date: 'January 23, 2019',
  excerpt:
    " We're going to talk about how to build a type-safe reducer. Now, I use these for redux reducers, but these principles could apply to any function.",
  content: `
<p>If you enjoyed my post on <a href="/writing/ts-tricks-type-guards">type guards</a>, this one might tickle your fancy. We're going to talk about how to build a type-safe reducer. Now, I use these for redux reducers, but these principles could apply to any function.</p>
<p>Let's start by typing some actions.</p>
<pre><code class="language-typescript">enum ActionTypes {
  MakeFriend = &#x27;MakeFriend&#x27;,
  LearnSpell = &#x27;LearnSpell&#x27;,
}
interface MakeFriend {
  type: ActionTypes.MakeFriend;
  payload: {friend: string};
}

interface LearnSpell {
  type: ActionTypes.LearnSpell;
  payload: {spell: string};
}

type WizardActions = MakeFriend | LearnSpell;
</code></pre>
<p>You'll notice we've created two action types <code>MakeFriend</code> and <code>LearnSpell</code>. Each of these has a <code>type</code> and a <code>payload</code>. The <code>payload</code> of each however is a different shape. In this case it's an object with a single key, but you can imagine a much more complex scenario.</p>
<p>Now at the bottom we have a type called <code>WizardActions</code>. This is what's called a <em>discriminated union. </em>What this means is that we can take an argument of type <code>WizardActions</code> and it will be exactly <em>one</em> the types in the union. Let's look at some more code to elaborate.</p>
<pre><code class="language-typescript">interface StateShape {
  name: string;
  friends: string[];
  spells: string[];
}

const initialState = {
  name: &#x27;Harry Potter&#x27;,
  friends: [],
  spells: [],
};

function reducer(state: StateShape = initialState, action: WizardActions) {
  return state;
}
</code></pre>
<p>We now have a reducer that takes a <code>state</code> and an <code>action</code> and returns the current state. Don't worry, we'll handle these actions later. Now the <code>action</code> argument is of type <code>WizardActions</code> which means it's going to be of type <code>MakeFriend</code> or of type <code>LearnSpell</code>.</p>
<p>Let's expand on our reducer and keep going.</p>
<pre><code class="language-typescript">function reducer(state: StateShape, action: WizardActions) {
  switch (action.type) {
    case ActionTypes.MakeFriend: {
      return {...state, friends: [...state.friends, action.payload.friend]};
    }
    case ActionTypes.LearnSpell: {
      return {...state, spells: [...state.spells, action.payload.spell]};
    }
    default: {
      return state;
    }
  }
}
</code></pre>
<p>If you're used to redux, this should look familiar. We have a switch statement on the action type and we're handling each payload differently. For <code>MakeFriend</code> actions we append a friend to the list of friends. For <code>LearnSpell</code> actions we append a spell to the list of spells.</p>
<p>We actually don't need the default case because this is an exhaustive type-check, but it's still good to be defensive in case someone upstream uses an <code>any</code>. It's also necessary if we integrate this with redux.</p>
<p>How does this work? Well Typescript is pretty smart. It figures out on it's own that checking <code>type</code> will guarantee the payload is a certain shape. When we go to access that payload, it knows what properties to expect. If we attempted to check the <code>spell</code> of a <code>MakeFriend</code> action we would get a type error.</p>
<p>Let's have some fun now and call our reducer. First let's make some friends.</p>
<pre><code class="language-typescript">const MeetRon: MakeFriend = {
  type: ActionTypes.MakeFriend,
  payload: {friend: &#x27;Ronald Weasley&#x27;},
};
const HarryOnTheTrain = reducer(undefined, MeetRon);
// {
//   name: "Harry Potter",
//   friends: ["Ronald Weasley"],
//   spells: [],
// }

const MeetHermione: MakeFriend = {
  type: ActionTypes.MakeFriend,
  payload: {friend: &#x27;Hermione Granger&#x27;},
};
const HarryFiveMinutesLater = reducer(HarryOnTheTrain, MeetHermione);
// {
//   name: "Harry Potter",
//   friends: ["Ronald Weasley", "Hermione Granger"],
//   spells: [],
// }
</code></pre>
<p>This reducer works how we expect at runtime; Harry meets Ron, then he meets Hermione. Let's learn some spells.</p>
<pre><code class="language-typescript">const LearnExpelliarmus: LearnSpell = {
  type: ActionTypes.LearnSpell,
  payload: {spell: &#x27;Expelliarmus&#x27;},
};
const HarryInDuelingClub = reducer(HarryFiveMinutesLater, LearnExpelliarmus);
// {
//   name: "Harry Potter",
//   friends: ["Ronald Weasley", "Hermione Granger"],
//   spells: ["Expelliarmus"],
// }

const LearnExpectoPatronum: LearnSpell = {
  type: ActionTypes.LearnSpell,
  payload: {spell: &#x27;Expecto Patronum&#x27;},
};
const HarryWithLupin = reducer(HarryInDuelingClub, LearnExpectoPatronum);
// {
//   name: "Harry Potter",
//   friends: ["Ronald Weasley", "Hermione Granger"],
//   spells: ["Expelliarmus", "Expecto Patronum"],
// }
</code></pre>
<p>Now Harry learns <em>Expelliarmus </em>and <em>Expecto Patronum!</em></p>
<p>If you want to know more about typing redux, I wrote an article about <a href="http://matthewgerstman.com/redux-code-split-typecheck/">building a typed and code-split</a> redux store.</p>
`.trim(),
  tags: ['Tech', 'typescript', 'redux'],
  banner_img:
    '/images/blog/ts-tricks-type-safe-reducers/type-safe-reducers-hero.jpg',
  heroImage: '',
  wordCount: 632,
};

export default post;
