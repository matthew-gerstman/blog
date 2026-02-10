import type { Post } from '../types/posts.types';

const post: Post = {
  id: 11,
  slug: 'map-filter-reduce',
  title: 'Map, Filter, Reduce',
  date: 'March 03, 2019',
  excerpt:
    "In this article we'll go back to basics and cover three of the most important functions in functional programming, map, filter, and reduce.",
  content: `
<p>In this article we'll go <a href="__GHOST_URL__/functional-programming-fundamentals/">back to basics</a> and cover three of the most important functions in <a href="__GHOST_URL__/functional-programming-fundamentals/">functional programming</a>, map, filter, and reduce.</p>
<p>All three of these are useful functions for iterating over a list (or array) and doing some kind of transformation or computation. This will then produce a new list or the result of the computation done across the previous list.</p>
<h1 id="types">Types</h1>
<p>Before we dive into map, filter, and reduce, let's set up the list.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/ad7693f7583a07cf038bd38ab931152a.js"></script>
<!--kg-card-end: html-->
<p>As per usual, we're going to be operating on wizards. Each wizard object has a name, a house, and the number of points they've earned for their house. Let's declare a bunch of wizards and put them in a list.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/44860c22b93656ab0391243e8f579666.js"></script>
<!--kg-card-end: html-->
<h1 id="map-function map() { [native code] }1">Map</h1>
<p>Now that we've got the boilerplate out of the way, let's dive in. The first function is the simplest one, map. Map iterates (or loops) over a list, applies a function to each item in that list and then returns a new list of the transformed items. Let's look at an example.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/c02b0634780f0e6c6ef00d5390e6ec42.js"></script>
<!--kg-card-end: html-->
<p>This function iterates over the list of wizards, gets their name, and puts it into a new array. The result of this looks something like this.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/29ebae139d7839eb981fb110e9c1723f.js"></script>
<!--kg-card-end: html-->
<p>Now in this example we were using a <a href="__GHOST_URL__/mary-had-a-little-lambda/">lambda</a> (aka an anonymous function), but we can also use a named function.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/3d64ba545ca863db2fc3c6abd558abe7.js"></script>
<!--kg-card-end: html-->
<p>In this example we have a function called <code>wizardToString</code> and we pass that directly to map. It will then return a new list that looks like this.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/bf416ade6e4e95b9ce568a2df5449754.js"></script>
<!--kg-card-end: html-->
<h1 id="filter-function filter() { [native code] }1">Filter</h1>
<p>Next up is filter. Filter behaves like map in that it iterates over the list, but it instead of transforming each item, it transforms the whole list. Filter takes a function that returns true or false or <a href="__GHOST_URL__/mary-had-a-little-lambda/">predicate</a>. It then returns a new list with items where the predicate returns <code>true</code>. Let's look at an example.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/fe6468ae65e0e7a1e11c9d726b09b0ca.js"></script>
<!--kg-card-end: html-->
<p>In this example we filter over the list and only include wizards who are in the house Slytherin. The result would be this.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/048d64ccc3719ba07a2b52a886bf6437.js"></script>
<!--kg-card-end: html-->
<p>As an aside, Taylor and Lin are two of the most acclaimed Slytherins of our day.</p>
<p>Just like with map, we don't need to use a <a href="__GHOST_URL__/mary-had-a-little-lambda/">lambda</a>, we can also use a predefined function.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/884e4116282875442d860d44cb97eac3.js"></script>
<!--kg-card-end: html-->
<p>In this example we make two lists, the list of Slytherins who have earned points (winners), and the list of Slytherins who have lost points (losers). We can see those results below.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/496b2fa8c97d505d79f2aacaa1cb155e.js"></script>
<!--kg-card-end: html-->
<h1 id="reduce-function reduce() { [native code] }1">Reduce</h1>
<p>Now we get to the most interesting function, reduce. Reduce iterates over a list and produces a single value. Let's look at an example.</p>
<p>Suppose we want to get the total number of points across all wizards. We can use reduce to do that.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/39da3b9782f8f3e4a59315c28a3523c9.js"></script>
<!--kg-card-end: html-->
<p>What's going on here? Well reduce is a function that takes two arguments, a function and an initial value for the accumulator. The accumulator is the name of the thing reduce returns. In this case we start our point count at 0.</p>
<p>Now the function takes the current state of the accumulator and the item in the list it's supposed to process. For the first wizard, it will pass 0 for the accumulator. This function then returns <code>accumulator + points</code>. This will eventually sum up all the points. If you're curious, the result is 5487.</p>
<p>Now the accumulator can be anything, we can even use reduce to produce an object. Let's look at an example where we add up the points for each house.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/49909068b01b9285c0f18d6177a36b19.js"></script>
<!--kg-card-end: html-->
<p>In this case, we initialize our accumulator or <code>acc</code> with <code>{}</code>. Then for each wizard we call a function that adds the number of points that wizard has earned for their house. If you're curious that result looks like this.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/e4b620c523337b30cb44075b8be2bdd8.js"></script>
<!--kg-card-end: html-->
<p>Let's look at one more example, let's say we want the best wizard for each house. We can tweak our previous function to use the best wizard for each house.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/5428d9c0713e7ddab3dfa3a8beb675c6.js"></script>
<!--kg-card-end: html-->
<p>If you're curious, the result of that looks like this.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/fdac1cee43ba855a48af1abe0ba86629.js"></script>
<!--kg-card-end: html-->
<p>Just a little more fun now, we can use <code>Object.values</code> to transform this map.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/98890f863a695769975f6eafebd2480b.js"></script>
<!--kg-card-end: html-->
<p>Now we have nice strings for the best person in each house.</p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>Hopefully you're more comfortable with map, filter, and reduce now. If you'd like a deeper dive into practical FP check out my article, <a href="http://matthewgerstman.com/functional-programming-fundamentals/"><strong>Functional Programming Fundamentals</strong></a>.</p>
<p>If you're looking for more abstract stuff check out <a href="__GHOST_URL__/what-the-functor/"><strong>What the Functor?</strong></a><strong> </strong>and <strong><a href="__GHOST_URL__/mary-had-a-little-lambda/">Mary Had a Little Lambda.</a> </strong></p>
<p>Also if you feel the need to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
`.trim(),
  tags: ['Tech', 'functional-programming'],
  banner_img: '/images/blog/map-filter-reduce/map-filter-reduce-hero.jpg',
  heroImage: '',
  wordCount: 733,
};

export default post;
