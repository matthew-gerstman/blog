import type { Post } from '../types/posts.types';

const post: Post = {
  id: 7,
  slug: 'how-redux-works-2',
  title: 'How Redux Works - Part 2',
  date: 'January 30, 2019',
  excerpt:
    "In this post we'll cover the various other files in the library. While some of these contain simple utilities, others are much more complex. We'll also cover the infamous redux-thunk.",
  content: `
<p><em><em>This is part </em>two <em>of a two part series. For part </em>one<em> </em><a href="/writing/how-redux-works">see here.</a></em></p>
<p>In our <a href="/writing/how-redux-works">last post</a> we covered the bulk of how Redux works with <code><a href="https://www.matthewgerstman.com/how-redux-works/">createStore</a></code>. In this post we'll cover the various other files in the library. While some of these contain simple utilities, others are much more complex. We'll also cover the infamous redux-thunk. Before we get to redux-thunk though we need to cover <strong>applyMiddleware.</strong></p>
<p><em><em>A note on embedded source: The most up to date redux source is <a href="https://github.com/reduxjs/redux/tree/master/src">available here</a>. I'll be embedding source code as of when this post was written</em>.</em></p>
<h1 id="applymiddleware">applyMiddleware</h1>
<p>Now you might remember from <a href="/writing/how-redux-works"><a href="/writing/how-redux-works">part </a>one</a> that we have the notion of a store enhancer. These wrap the store and can modify it's exported functions. In this case, <code>applyMiddleware</code> is a store enhancer that wraps <code>dispatch</code>.</p>
<p>So when we create our store, we pass <code>applyMiddleware</code> with a middleware as the second argument.</p>
<pre><code class="language-javascript">import {createStore, applyMiddleware} from &#x27;redux&#x27;;
import thunk from &#x27;redux-thunk&#x27;;

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
</code></pre>
<p>This second argument triggers the following block from <code>createStore</code>:</p>
<pre><code class="language-javascript">if (typeof enhancer !== &#x27;undefined&#x27;) {
  if (typeof enhancer !== &#x27;function&#x27;) {
    throw new Error(&#x27;Expected the enhancer to be a function.&#x27;)
  }

  return enhancer(createStore)(reducer, preloadedState)
}</code></pre>
<p>Once again we're gonna be looking at functions all the way down. Enhancer is a function that takes <code>createStore</code> and returns a new version of <code>createStore</code>. </p>
<p>Upstream we've passed <code>applyMiddleware(thunk)</code> as the <code>enhancer</code>.</p>
<p>Let's take a look at just the function signature of <code>applyMiddleware</code>.</p>
<pre><code class="language-javascript">export default function applyMiddleware(...middlewares) {
  return createStore =&gt; (...args) =&gt; {</code></pre>
<p>The first layer of <code>applyMiddleware</code> takes a list of functions, or middleware, that we're going to apply. Here's how we might call <code>applyMiddleware</code> in our application.</p>
<p>In this case we're only passing <code>thunk</code> but in another application we may want to pass more. <code>applyMiddleware</code> then returns a new function that takes <code>createStore</code> as it's argument. </p>
<p>This then returns a third function which takes the arguments that we would pass to <code>createStore</code>. In the code sample above, that would be <code>reducer</code> and <code>preloadedState</code>.</p>
<p>As an aside, the process of returning functions that each require a single argument is called currying. You can read more about that in <a href="/writing/functional-programming-fundamentals">Functional Programming Fundamentals</a>.</p>
<p>Okay this third function is now the bulk of <code>applyMiddleware</code>. It has a bound copy of <code>middlewares</code> and <code>createStore</code> and takes whatever arguments we're going to pass to <code>createStore</code>.</p>
<p>Let's examine the body of this function, or at least the first half of it.</p>
<pre><code class="language-javascript">export default function applyMiddleware(...middlewares) {
  return createStore =&gt; (...args) =&gt; {
    const store = createStore(...args)
      let dispatch = () =&gt; {
        throw new Error(
          \`Dispatching while constructing your middleware is not allowed. \` +
            \`Other middleware would not be applied to this dispatch.\`
        )
      }</code></pre>
<p>The first thing it does is, surprise, calls <code>createStore</code> with these arguments. Then it temporarily overwrites <code>dispatch</code> to make sure our consumers don't accidentally call it while we're setting up the store. This pattern should look familiar from <a href="/writing/how-redux-works"><a href="/writing/how-redux-works">part </a>one</a>, we're validating before doing business logic.</p>
<p>Okay now let's look at the entire function.</p>
<pre><code class="language-javascript">import compose from &#x27;./compose&#x27;

export default function applyMiddleware(...middlewares) {
  return createStore =&gt; (...args) =&gt; {
    const store = createStore(...args)
    let dispatch = () =&gt; {
      throw new Error(
        \`Dispatching while constructing your middleware is not allowed. \` +
          \`Other middleware would not be applied to this dispatch.\`
      )
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) =&gt; dispatch(...args)
    }
    const chain = middlewares.map(middleware =&gt; middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}</code></pre>
<p>This function then loops over the list of middleware, which are functions, and calls them with the <code>middlewareAPI</code>. This gives those functions a bound reference to dispatch and <code>getState</code>. It then <code>composes</code> the list of middleware together (more on that later) and gives this new function access to the original <code>dispatch</code> that can only take a plain object.</p>
<p>Finally, it returns a new object with all the old methods on the store plus this new, wrapped dispatch.</p>
<h2 id="redux-thunk">Redux Thunk</h2>
<p>While we're composing middleware, this is a great time to take a look at my personal favorite, Redux Thunk.</p>
<pre><code class="language-javascript">function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) =&gt; next =&gt; action =&gt; {
    if (typeof action === &#x27;function&#x27;) {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;</code></pre>
<p>Wow, thats a dense 14 lines of code, and once again it's functions all the way down. Now might be a good time to refresh on <a href="/writing/functional-programming-fundamentals">currying</a>. Let's step through this line by line.</p>
<p>The first bit is <code>createThunkMiddleware</code>, this function allows us to bind an extra argument to all thunks. This can be used as a way to inject dependencies into all of your action creators at runtime. For example, you might want to only allow API calls from within an action creator. This would let you enforce that.</p>
<p>You'll notice that by default this function exports a thunk middleware with no extra argument. Most people just use thunk without an extra argument.</p>
<p>Lines 2-8 are the bulk of the logic here. We return a function that takes <code>{dispatch, getState</code>. This is the same <code>middlewareAPI</code> you saw above. So now we have a bound function with <code>dispatch</code>, <code>getState</code>, and maybe an <code>extraArgument</code>.</p>
<p>Two more functions to go. This returns a function that takes the <code>next</code> middleware to call. This is effectively calling a chain of middlewares until we get to the plain <code>dispatch</code>. Finally, this returns a function that takes an <code>action</code>.</p>
<p>Lines 3-7 are now the actual <code>thunk</code> logic. If the action is a function, we call it and pass it <code>dispatch</code>, <code>getState</code>, and <code>extraArgument</code>. If it's a plain action, we just pass &nbsp;that on to the next middleware or the original <code>dispatch</code>. </p>
<p>As an aside, this process is called trampolining in computer science.</p>
<h1 id="compose">Compose</h1>
<p>Okay we've now seen <code>applyMiddleware</code> and <code>redux-thunk</code>. Let's zero back in on a section of <code>applyMiddleware</code> that should make a little more sense now.</p>
<pre><code class="language-javascript">const middlewareAPI = {
  getState: store.getState,
  dispatch: (...args) =&gt; dispatch(...args)
}
const chain = middlewares.map(middleware =&gt; middleware(middlewareAPI))
dispatch = compose(...chain)(store.dispatch)</code></pre>
<p>This section calls each middleware with the <code>middlewareAPI</code> and then composes that chain together, with a final call to the original <code>store.dispatch</code>. Let's take a look at compose.</p>
<pre><code class="language-javascript">export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg =&gt; arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) =&gt; (...args) =&gt; a(b(...args)))
}</code></pre>
<p>What's this doing? Well compose takes a list of <strong>single argument </strong>functions and passes them to each other from right to left. So <code>compose(f, g, h)</code>would be the same as <code>(...args) =&gt; f(g(h(...args)))</code>.</p>
<p>You'll remember each middleware only takes a single argument at each phase, in this case that's <code>next</code>. </p>
<p>The first 8 lines are just optimizations. If we don't have any functions return an identity function and if we only have one function return that.</p>
<p>This last bit is the intimidating part:</p>
<p><code>return funcs.reduce((a, b) =&gt; (...args) =&gt; a(b(...args)))</code></p>
<p>What's going on here? Well, it's a reduce, another FP paradigm. It loops over <code>funcs</code> and then calls the function given to it with two arguments <code>accumulator</code> and <code>value</code>. In this case <code>a</code> is <code>accumulator</code> and <code>b</code> is <code>value</code>. <code>accumulator</code> is the return value of the previous function call.</p>
<p>Let's say we call <code>compose(f, g, h)</code>. First it loops over the array <code>[f, g, h]</code>. Then this logic happens <code>accumulator = (..args) = &gt; f(..args)</code>. Then we get to <code>g</code> and call <code>accumulator = accumulator(g)</code> or <code>accumulator = (...args) =&gt; f(g(..args))</code>. Finally it gets to <code>h</code> and calls <code>accumulator(h)</code> which is equivalent to <code>accumulator = (...args) =&gt; f(g(h(..args)))</code>.</p>
<p>If this is difficult to reason follow, don't stress. It took me a few hours to wrap my head around it.</p>
<h1 id="bindactioncreators">bindActionCreators</h1>
<p>While we're on the subject of actions. Let's talk about how our actions actually get access to <code>dispatch</code>. If you're using <code>react-redux</code> you probably just pass your action creators to <code>mapDispatchToProps</code> and let it take care of things for you. Well under the hood it's calling a function called <code>bindActionCreators</code>. Let's take a look:</p>
<pre><code class="language-javascript">export default function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === &#x27;function&#x27;) {
    return bindActionCreator(actionCreators, dispatch)
  }

  if (typeof actionCreators !== &#x27;object&#x27; || actionCreators === null) {
    throw new Error(
      \`bindActionCreators expected an object or a function, instead received \${
        actionCreators === null ? &#x27;null&#x27; : typeof actionCreators
      }. \` +
        \`Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?\`
    )
  }

  const keys = Object.keys(actionCreators)
  const boundActionCreators = {}
  for (let i = 0; i &lt; keys.length; i++) {
    const key = keys[i]
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === &#x27;function&#x27;) {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }
  return boundActionCreators
}</code></pre>
<p>Holy validation batman. Guess what, thats virtually all this function is doing. <code>bindActionCreators</code> either takes a map of action creators or a function that returns one. If it gets a function it just calls the singular <code>bindActionCreator</code> which we'll get to.</p>
<p>Otherwise it does a whole bunch of validation to make sure that our map is in the correct format.</p>
<p>Assuming that goes well, lines 15-23 loop over the map and create a new map with each function passed to <code>bindActionCreator</code>. Let's dig into that inner function now.</p>
<pre><code class="language-javascript">function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}</code></pre>
<p>Were you expecting something other than a closure? <code>bindActionCreator</code> returns an anonymous function that calls the original function <code>actionCreator</code> with whatever arguments the anonymous function got and then passes the result of <code>actionCreator</code> to dispatch. Crazy, huh?</p>
<h2 id="combinereducers">combineReducers</h2>
<p>There's one file left in <code>src</code> and that's <code>combineReducers.js</code>. It's a relatively big one, 178 lines, so we'll break it down. Much like the rest of redux, there's a lot of validation however it only exports one function <code>combineReducers</code>.</p>
<p>This function takes a map of keys to <code>reducer</code> and returns a new <code>rootReducer</code> that slices up the redux state amongst these keys. The callsite looks like this</p>
<pre><code class="language-javascript">import {combineReducers, createStore} from &#x27;redux&#x27;;
import {muggleReducer, wizardReducer} from &#x27;./reducers&#x27;;

const rootReducer = combineReducers({
  muggle: muggleReducer,
  wizard: wizardReducer, 
});

const store = createStore(rootReducer);</code></pre>
<p>In this case the <code>wizardReducer</code> will receive the slice of the store from the <code>wizard</code> key down and the <code>muggleReducer</code> will receive the slice of the store from the <code>muggle</code> key down.</p>
<p>Back to the actual redux source, let's take a look at the declaration for <code>combineReducers</code>.</p>
<pre><code class="language-javascript">export default function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)
  const finalReducers = {}
  for (let i = 0; i &lt; reducerKeys.length; i++) {
    const key = reducerKeys[i]

    if (process.env.NODE_ENV !== &#x27;production&#x27;) {
      if (typeof reducers[key] === &#x27;undefined&#x27;) {
        warning(\`No reducer provided for key "\${key}"\`)
      }
    }

    if (typeof reducers[key] === &#x27;function&#x27;) {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducerKeys = Object.keys(finalReducers)

  // This is used to make sure we don&#x27;t warn about the same
  // keys multiple times.
  let unexpectedKeyCache
  if (process.env.NODE_ENV !== &#x27;production&#x27;) {
    unexpectedKeyCache = {}
  }

  let shapeAssertionError
  try {
    assertReducerShape(finalReducers)
  } catch (e) {
    shapeAssertionError = e
  }</code></pre>
<p>These 29 lines are once again validation on our arguments. Redux loops over all the keys, makes sure they're all defined and point to a function. Interestingly, if it's not a function it doesn't bother complaining.</p>
<p>It also sets up the <code>unexpectedKeyCache</code> which is a reference to any unexpected keys we've warned about. </p>
<p>It then calls <code>assertReducerShape</code> our first big validation function.</p>
<pre><code class="language-javascript">function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(key =&gt; {
    const reducer = reducers[key]
    const initialState = reducer(undefined, { type: ActionTypes.INIT })

    if (typeof initialState === &#x27;undefined&#x27;) {
      throw new Error(
        \`Reducer "\${key}" returned undefined during initialization. \` +
          \`If the state passed to the reducer is undefined, you must \` +
          \`explicitly return the initial state. The initial state may \` +
          \`not be undefined. If you don&#x27;t want to set a value for this reducer, \` +
          \`you can use null instead of undefined.\`
      )
    }

    if (
      typeof reducer(undefined, {
        type: ActionTypes.PROBE_UNKNOWN_ACTION()
      }) === &#x27;undefined&#x27;
    ) {
      throw new Error(
        \`Reducer "\${key}" returned undefined when probed with a random type. \` +
          \`Don&#x27;t try to handle \${
            ActionTypes.INIT
          } or other actions in "redux/*" \` +
          \`namespace. They are considered private. Instead, you must return the \` +
          \`current state for any unknown actions, unless it is undefined, \` +
          \`in which case you must return the initial state, regardless of the \` +
          \`action type. The initial state may not be undefined, but can be null.\`
      )
    }
  })
}</code></pre>
<p>This is a pretty nifty function, it loops over each key and makes sure they handle an <code>INIT</code> action and a randomly generated <code>PROBE_UNKNOWN_ACTION</code> properly. This ensures that all reduces return a <code>defaultState</code> when given no <code>initialState</code> and return <em>something </em>when they get an unknown action.</p>
<p>Back to <code>combineReducers</code>, after the validation phase it returns our new <code>rootReducer</code>.</p>
<pre><code class="language-javascript">  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError
    }

    if (process.env.NODE_ENV !== &#x27;production&#x27;) {
      const warningMessage = getUnexpectedStateShapeWarningMessage(
        state,
        finalReducers,
        action,
        unexpectedKeyCache
      )
      if (warningMessage) {
        warning(warningMessage)
      }
    }
    </code></pre>
<p>But obviously, our <code>rootReducer</code> must do some validation of it's own! First off, if <code>assertReducerShape</code> threw an error, it throws that error on every single invocation. It doesn't allow us to fail silently here.</p>
<p>Second, if we're in dev mode it calls <code>getUnexpectedStateShapeWarningMessage</code>.</p>
<pre><code class="language-javascript">function getUnexpectedStateShapeWarningMessage(
  inputState,
  reducers,
  action,
  unexpectedKeyCache
) {
  const reducerKeys = Object.keys(reducers)
  const argumentName =
    action &amp;&amp; action.type === ActionTypes.INIT
      ? &#x27;preloadedState argument passed to createStore&#x27;
      : &#x27;previous state received by the reducer&#x27;

  if (reducerKeys.length === 0) {
    return (
      &#x27;Store does not have a valid reducer. Make sure the argument passed &#x27; +
      &#x27;to combineReducers is an object whose values are reducers.&#x27;
    )
  }

  if (!isPlainObject(inputState)) {
    return (
      \`The \${argumentName} has unexpected type of "\` +
      {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] +
      \`". Expected argument to be an object with the following \` +
      \`keys: "\${reducerKeys.join(&#x27;", "&#x27;)}"\`
    )
  }

  const unexpectedKeys = Object.keys(inputState).filter(
    key =&gt; !reducers.hasOwnProperty(key) &amp;&amp; !unexpectedKeyCache[key]
  )

  unexpectedKeys.forEach(key =&gt; {
    unexpectedKeyCache[key] = true
  })

  if (action &amp;&amp; action.type === ActionTypes.REPLACE) return

  if (unexpectedKeys.length &gt; 0) {
    return (
      \`Unexpected \${unexpectedKeys.length &gt; 1 ? &#x27;keys&#x27; : &#x27;key&#x27;} \` +
      \`"\${unexpectedKeys.join(&#x27;", "&#x27;)}" found in \${argumentName}. \` +
      \`Expected to find one of the known reducer keys instead: \` +
      \`"\${reducerKeys.join(&#x27;", "&#x27;)}". Unexpected keys will be ignored.\`
    )
  }
}
</code></pre>
<p>This is a big function but the bulk of the logic is right here.</p>
<pre><code class="language-javascript">const unexpectedKeys = Object.keys(inputState).filter(
  key =&gt; !reducers.hasOwnProperty(key) &amp;&amp; !unexpectedKeyCache[key]
)</code></pre>
<p>Basically, loop over the reducer keys and make sure they're identical to the state keys. Also remember any keys we've warned about in the past so we don't warn about the same issue repeatedly.</p>
<p>Finally, we get to the real logic below.</p>
<pre><code class="language-javascript">return function combination(state = {}, action) {
  /* Validation */

  let hasChanged = false
  const nextState = {}
  for (let i = 0; i &lt; finalReducerKeys.length; i++) {
    const key = finalReducerKeys[i]
    const reducer = finalReducers[key]
    const previousStateForKey = state[key]
    const nextStateForKey = reducer(previousStateForKey, action)
    if (typeof nextStateForKey === &#x27;undefined&#x27;) {
      const errorMessage = getUndefinedStateErrorMessage(key, action)
      throw new Error(errorMessage)
    }
    nextState[key] = nextStateForKey
    hasChanged = hasChanged || nextStateForKey !== previousStateForKey
  }
  return hasChanged ? nextState : state
}</code></pre>
<p>This loop takes every action and passes it to each reducer with the state it previously generated. It then does a simple reference check on each reducer's new state. If any of them are different, it returns a new object. Otherwise it just returns the previous state so upstream functions can memoize.</p>
<p>And that's redux! I hope you enjoyed this.</p>
`.trim(),
  tags: ['Tech', 'redux'],
  banner_img: '/images/blog/hero-mountain-valley.jpg',
  wordCount: 2575,
};

export default post;
