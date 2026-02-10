import type { Post } from '../types/posts.types';

const post: Post = {
  id: 5,
  slug: 'ts-tricks-type-safe-reducers',
  title: 'TS Tricks: Type-safe Reducers',
  date: 'January 23, 2019',
  excerpt:
    " We're going to talk about how to build a type-safe reducer. Now, I use these for redux reducers, but these principles could apply to any function.",
  content: `
<p>If you enjoyed my post on <a href="__GHOST_URL__/ts-tricks-type-guards/">type guards</a>, this one might tickle your fancy. We're going to talk about how to build a type-safe reducer. Now, I use these for redux reducers, but these principles could apply to any function.</p>
<p>Let's start by typing some actions.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/e44f3e0a9181aa543480a23b0c18409b.js"></script>
<!--kg-card-end: html-->
<p>You'll notice we've created two action types <code>MakeFriend</code> and <code>LearnSpell</code>. Each of these has a <code>type</code> and a <code>payload</code>. The <code>payload</code> of each however is a different shape. In this case it's an object with a single key, but you can imagine a much more complex scenario.</p>
<p>Now at the bottom we have a type called <code>WizardActions</code>. This is what's called a <em>discriminated union. </em>What this means is that we can take an argument of type <code>WizardActions</code> and it will be exactly <em>one</em> the types in the union. Let's look at some more code to elaborate.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/075e46c391c59d48b1ee8dc6977c9606.js"></script>
<!--kg-card-end: html-->
<p>We now have a reducer that takes a <code>state</code> and an <code>action</code> and returns the current state. Don't worry, we'll handle these actions later. Now the <code>action</code> argument is of type <code>WizardActions</code> which means it's going to be of type <code>MakeFriend</code> or of type <code>LearnSpell</code>.</p>
<p>Let's expand on our reducer and keep going.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/bfc303ff9ca54f1bdaba392a1e2d470b.js"></script>
<!--kg-card-end: html-->
<p>If you're used to redux, this should look familiar. We have a switch statement on the action type and we're handling each payload differently. For <code>MakeFriend</code> actions we append a friend to the list of friends. For <code>LearnSpell</code> actions we append a spell to the list of spells.</p>
<p>We actually don't need the default case because this is an exhaustive type-check, but it's still good to be defensive in case someone upstream uses an <code>any</code>. It's also necessary if we integrate this with redux.</p>
<p>How does this work? Well Typescript is pretty smart. It figures out on it's own that checking <code>type</code> will guarantee the payload is a certain shape. When we go to access that payload, it knows what properties to expect. If we attempted to check the <code>spell</code> of a <code>MakeFriend</code> action we would get a type error.</p>
<p>Let's have some fun now and call our reducer. First let's make some friends.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/a3829b4e82aa81ba62bf73c6fcda7c26.js"></script>
<!--kg-card-end: html-->
<p>This reducer works how we expect at runtime; Harry meets Ron, then he meets Hermione. Let's learn some spells.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/dec12d44c109ac5142d862c93eb5d2ba.js"></script>
<!--kg-card-end: html-->
<p>Now Harry learns <em>Expelliarmus </em>and <em>Expecto Patronum!</em></p>
<p>If you want to know more about typing redux, I wrote an article about <a href="http://matthewgerstman.com/redux-code-split-typecheck/">building a typed and code-split</a> redux store.</p>
`.trim(),
  tags: ['Tech', 'typescript', 'redux'],
  banner_img:
    '/images/blog/ts-tricks-type-safe-reducers/type-safe-reducers-hero.jpg',
  heroImage: '',
  wordCount: 396,
};

export default post;
