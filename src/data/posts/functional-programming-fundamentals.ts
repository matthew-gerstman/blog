import type { Post } from '../types/posts.types';

const post: Post = {
  id: 3,
  slug: 'functional-programming-fundamentals',
  title: 'Functional Programming Fundamentals',
  date: 'January 21, 2019',
  excerpt:
    'In this post, we’ll discuss the fundamentals of Functional Programming and how they apply to modern JavaScript. We’ll also avoid unnecessary jargon like monads and functors and stick to concepts that ',
  content: `
<p>In the past few years, React and Redux have generated a surge of Functional Programming which we often take for granted. However many of us never got a chance to learn the fundamentals.</p>
<p>In this post, we’ll cover the fundamentals of Functional Programming and how they apply to modern JavaScript. We’ll also avoid unnecessary jargon like monads and functors and stick to concepts that will make our code better.</p>
<p>If you'd like to learn all the unnecessary jargon, check out my other posts, <a href="__GHOST_URL__/what-the-functor/">What The Functor</a> and <a href="__GHOST_URL__/mary-had-a-little-lambda/">Mary Had a Little Lambda</a>. I also have an article on <a href="__GHOST_URL__/map-filter-reduce/">map, filter, and reduce.</a></p>
<p><em>Note: If you wanna see this post in talk form you can <a href="https://www.youtube.com/watch?v=kkRyjXDpYqg">here</a>.</em></p>
<hr>
<h1 id="none-of-this-is-new">None of this is new</h1>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/functional-programming-fundamentals/fp-concepts-diagram.png" class="kg-image" alt loading="lazy"><figcaption>https://xkcd.com/297/</figcaption></figure>
<p>Before we dive into actual concepts, I want to lead by saying that none of this is new. Functional Programming as existed for over 60 years. <a href="https://en.wikipedia.org/wiki/Lisp_(programming_language)">Lisp</a>, a popular FP programming language, was first developed in 1958.</p>
<p>What is new is the popularity of FP, which has surged in the past few years.</p>
<hr>
<h1 id="when-is-functional-programming-most-useful">When is Functional Programming most useful?</h1>
<p>Before we cover <em>what</em> functional programming is. I think it's helpful to define when we use it.</p>
<p>Functional Programming is most useful when we’re doing 1 to 1 data transformations.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/e1a796c632887ce0c1004824553f9542.js"></script>
<!--kg-card-end: html-->
<p>In the code snipped above we have some types listed for a data store, a component, and a functional layer in between them.</p>
<p>This functional layer, <code>convertUserMapToArray</code>, converts the data from a format that makes sense to the store to a format that makes sense for the UI. This is what we're going to zero in on today.</p>
<hr>
<h1 id="what-is-functional-programming">What is Functional Programming?</h1>
<p><strong>Functional programming </strong>(often abbreviated FP) is the process of building software by composing <strong>pure functions. </strong>A <strong>pure function </strong>is a function which given the same inputs, always returns the same output, and has no side-effects. <a href="https://jetpacmonkey.github.io/fp-slides/" rel="noreferrer nofollow noopener">[9]</a></p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://www.dropbox.com/s/wj4p4s1bvvzc9o4/image%20(12).png?raw=1" class="kg-image" alt loading="lazy"><figcaption><a href="https://www.fpcomplete.com/blog/2017/04/pure-functional-programming" rel="noreferrer nofollow noopener">[3]</a></figcaption></figure>
<p>For example, we can trust that 2 + 2 is always 4 and 3 x 3 is always 9.</p>
<hr>
<h1 id="side-effects">Side Effects</h1>
<p>The no side-effects bit is particularly important, because this is what allows us to trust that a function will always behave the same in any environment. This will help with future concepts.</p>
<p>Now side-effects aren't inherently bad, but you should isolate them to parts of your codebase where you can easily identify them.</p>
<p>Let's take a look a some examples of side effects.</p>
<h2 id="mutation">Mutation</h2>
<p>Modifying the argument that’s passed in <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" rel="noreferrer nofollow noopener">[1]</a>.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/73ef079b4f0d418938062615c601757f.js"></script>
<!--kg-card-end: html-->
<p>In this example above, we're changing the value of <code>arr</code> at the reference it lives at. As a result, we can't predict what this function will return at any point. What happens when <code>arr</code> runs out of values? </p>
<h2 id="shared-state">Shared State</h2>
<p>Using some form of global state <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" rel="noreferrer nofollow noopener">[1]</a>.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/6d0ca6210f3dc13a7ff031b8ab88fb0d.js"></script>
<!--kg-card-end: html-->
<p>In this example, we can't predict what these functions will return because they depend on some external value. The order of the function calls will matter.</p>
<p>Furthermore what happens if someone else changes the value of <code>i</code>? Do you feel like googling what <code>string++</code> is? </p>
<h2 id="asynchronous-code">Asynchronous Code</h2>
<p>Code that doesn't execute immediately <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" rel="noreferrer nofollow noopener">[1]</a>.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/4cdb5608124ab2e4ea3d1679ef89a63a.js"></script>
<!--kg-card-end: html-->
<p>This one deserves an extra mention because its a necessity. We have to do some things asynchronously. We have to hit APIs; we have to fetch data.</p>
<p>This brings me back to my earlier point. Side effects aren't inherently bad, but they should be properly isolated to make your code more predictable.</p>
<hr>
<h1 id="example-time">Example Time</h1>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/44a40f904f1e6016c9fd0682e9f60c5c.js"></script>
<!--kg-card-end: html-->
<p>Looking at the code above, we would expect it to produce the following:</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/b44e6a7990f0c96439b17ed94417c5d7.js"></script>
<!--kg-card-end: html-->
<p>Unfortunately, this isn't what we get. This is:</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/00d4010a7a5a1dde0b4f6449f65bb69f.js"></script>
<!--kg-card-end: html-->
<p>What happened?</p>
<p>Well the first function, <code>clone</code> is a pure function and works as expected. It produced a new object at a new reference.</p>
<p><code>killParents</code> is not a pure function. It mutates the given argument and marks the parent as dead. It does however return the object so it <em>appears</em> we're getting a new copy.</p>
<p><code>addScar</code> really doesn't care. It mutates the original object, and then returns nothing, so <code>addScar(c)</code> returns <code>undefined</code> even though it also modifies <code>c</code>.</p>
<p>As a result <code>a</code> is pointing to the original reference, <code>b</code> and <code>c</code> are pointing to the cloned copy (with dead parents and a scar), and <code>d</code> is pointing to nothing.</p>
<hr>
<h1 id="declarative-and-imperative">Declarative and Imperative</h1>
<p><strong>Declarative code describes what it does.</strong></p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/2998e01ec2f15a2fe5d63ebcda6609ac.js"></script>
<!--kg-card-end: html-->
<h3 id="imperative-code-describes-how-it-does-it-">Imperative code describes how it does it.</h3>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/5a7da58e7074d3168dcb63d80da86e52.js"></script>
<!--kg-card-end: html-->
<p>Looking at the two code samples above, we can see a stark contrast. The top block is written using React and just says "we want a counter on the page." This code trusts React, the declarative library, to get it right.</p>
<p>The bottom block is using vanilla JS. It explicitly finds a DOM node and updates it. While this is fine for such a simple example this won't scale well. What happens when we want multiple counters in multiple locations? React is ready for that, with vanilla JS we have a lot of work to do.</p>
<p>Now it's worth noting that declarative code will always end up either compiling down to or being processed by something imperative. What do I mean by that? Well <em>something</em> has to do the DOM mutation. In this case that's React. Even with functional languages like Lisp or Haskell they <em>eventually</em> get compiled to imperative machine code.</p>
<h2 id="example">Example</h2>
<h3 id="imperative">Imperative</h3>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/9fc233a7e7dcd880912a25f5fec938c0.js"></script>
<!--kg-card-end: html-->
<h3 id="declarative">Declarative</h3>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/f4b604ff5b55acda3300866195d4d0bf.js"></script>
<!--kg-card-end: html-->
<p>Now these two functions achieve the exact same thing. They take a list of <code>files</code> and return a dictionary of files where the key is <code>file.id</code>.</p>
<p>But the imperative one is sloppier. It's 8 lines of code instead of 3. It also leaves a lot of room for error.</p>
<p>What happens if a file doesn't have an <code>id</code>? What happens if we get our exit clause wrong? And fun fact, there are faster ways to do for loops (they're ugly), but we can trust lodash to do those under the hood.</p>
<hr>
<h1 id="functional-concepts">Functional Concepts</h1>
<p>It's now time to move onto functional concepts. Let's take these in pairs, the first two <strong>separation </strong>and <strong>composition.</strong></p>
<h2 id="separation">Separation</h2>
<blockquote><em>If you try to perform effects and logic at the same time, you may create hidden side effects which cause bugs in the logic. Keep functions small. Do one thing at a time, and do it well. </em><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd" rel="noreferrer nofollow noopener"><em>[4]</em></a></blockquote>
<h2 id="composition">Composition</h2>
<blockquote><em>Plan for composition. Write functions whose outputs will naturally work as inputs to many other functions. Keep function signatures as simple as possible. </em><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd" rel="noreferrer nofollow noopener"><em>[4]</em></a></blockquote>
<p>I pulled these quotes from an article called <em><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd">The Dao of Immutability</a>. </em>What we're saying here is we want small functions that easily chain together to make larger ones. Let's take a look at an example:</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/cb7622935829a6ce49badfdc1af3974e.js"></script>
<!--kg-card-end: html-->
<p>These three functions are all super simple. They take one argument and do a transformation on that argument. The first function sorts the list of files.</p>
<p>The second function is a <code>filter</code>. &nbsp;<code>filter</code> is an FP term for filtering in, as opposed to filtering out. So this code returning an array of files who's extensions are PDFs.</p>
<p>The last function is just a <code>map</code>. <code>map</code> is another FP term, a 1:1 transformation over a list to a new version of that list. In this case we're looping over the list of files and returning the key <code>name</code> from each of them.</p>
<p>Now we can combine them together:</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/e49ca9b4e211c8eda34ea078ee88645f.js"></script>
<!--kg-card-end: html-->
<p>Now both of these functions are equivalent. They take a list of files, filter for pdfs, get their names, and return a sorted list of file names.</p>
<p><code>lodash.flow</code> does have some optimizations under the hood, but the second syntax might be more readable to you. Do whatever you think is best.</p>
<p>Let's move on to the next set of concepts.</p>
<h2 id="immutability">Immutability</h2>
<blockquote><em>The true constant is change. Mutation hides change. Hidden change manifests chaos. Therefore, the wise embrace history. </em><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd" rel="noreferrer nofollow noopener"><em>[4]</em></a></blockquote>
<h2 id="memoization">Memoization</h2>
<blockquote><em>Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. </em><a href="https://en.wikipedia.org/wiki/Memoization" rel="noreferrer nofollow noopener"><em>[5]</em></a></blockquote>
<p>These pair really nicely. Immutability says we're never gonna mutate an argument only return a new one, and memoization allows us to remember outputs. Let's look at an example combining them.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/47fe2834b2da7bab88c705095db096de.js"></script>
<!--kg-card-end: html-->
<p>What's going on here? Well we have a function called <code>killSibling</code> (dark I know), that takes a wizard. It copies over the wizard and decrements the number of siblings that wizard has. Please ignore any glaring bugs here, I wanted to keep this simple.</p>
<p>We then pass <code>killSibling</code> to <code>lodash.memoize</code>, this produces a new function called <code>killSiblingMemoized</code>. Now when we call <code>killSiblingMemoized</code> on <code>ron</code>, it returns a brand new object. If we do a strict equality check it returns false. Of course it does, his brother died, he's a different person now.</p>
<p>Because we've memoized this, if we repeat this call to <code>killSiblingMemoized</code> we'll get the exact same version of <code>ron</code> we got after the first call.</p>
<p>We've covered a lot, now let's move onto some advanced topics.</p>
<hr>
<h1 id="higher-order-functions">Higher Order Functions</h1>
<p>In mathematics and computer science, a <strong>higher-order function </strong>is a function that does at least one of the following:</p>
<ul>
<li>takes one or more functions as arguments(i.e.,procedural parameters),</li>
<li>returns a function as its result. <a href="https://en.wikipedia.org/wiki/Higher-order_function" rel="noreferrer nofollow noopener">[6]</a></li>
</ul>
<p>This seems much more intimidating than it actually is. In fact I bet you've written some of these before without realizing it.</p>
<h2 id="function-that-takes-a-function">Function that takes a function</h2>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/ed44a6db0c48aaf8ca0da717154d4427.js"></script>
<!--kg-card-end: html-->
<p>These are just <strong>callbacks.</strong> In this case <code>then</code> is the higher order function that takes an anonymous function as its argument.</p>
<h2 id="function-that-returns-a-function">Function that returns a function</h2>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/3ccbd0608ba61e231d1a1858106d56d1.js"></script>
<!--kg-card-end: html-->
<p>Another thing you've probably done before, <strong>closures. </strong>In this case <code>counterGenerator</code> is the higher order function because it returns a function.</p>
<h2 id="function-that-takes-a-function-and-returns-a-function">Function that takes a function and returns a function</h2>
<p>Last, the final form, a function that does both. But you've already seen these.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/484c1aecc9e69ba39377afb4fd1f89d4.js"></script>
<!--kg-card-end: html-->
<p>Both <code>memoize</code> and <code>flow</code> were higher order functions that take a function (or several) as arguments and return a new function.</p>
<hr>
<h1 id="currying">Currying</h1>
<blockquote><em>Currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument. </em><a href="https://en.wikipedia.org/wiki/Currying" rel="noreferrer nofollow noopener"><em>[7]</em></a></blockquote>
<p>This seems a little intimidating but I think an example will help.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/d31c96725e9d1cbc76abc3b4a89b00e8.js"></script>
<!--kg-card-end: html-->
<p>We have a function <code>sum</code> which takes arguments <code>a</code>, <code>b</code>, and <code>c</code>. When we pass <code>sum</code> to <code>lodash.curry</code> (a higher order function), it becomes a new function that keeps returning functions until <code>a</code>, <code>b</code>, and <code>c</code> have all been filled.</p>
<p>If we give it arguments <code>1,2,3</code> then it executes immediately and returns 6. If we give it just <code>2,3</code> it returns a new function waiting for one more argument.</p>
<p>This works for all permutations of arguments.</p>
<hr>
<h1 id="partial-application">Partial Application</h1>
<blockquote><em>Partial application (or partial function application) refers to the process of fixing a number of arguments to a function, producing another function of smaller arity. </em><a href="https://en.wikipedia.org/wiki/Partial_application" rel="noreferrer nofollow noopener"><em>[8]</em></a></blockquote>
<p><em>Note: Arity is just a term for the number of arguments a function takes. <a href="https://github.com/hemanth/functional-programming-jargon" rel="noreferrer nofollow noopener">[2]</a></em></p>
<p>With partial application, we can take a function and bind arguments to it. Let's take a look at an example.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/79394bccde6191763a31f48c32f47f39.js"></script>
<!--kg-card-end: html-->
<p>In this case we have a function called <code>learnSpell</code> that takes a <code>spell</code> and a <code>wizard</code>. If we pass these functions to <code>lodash.partial</code> with a spell, it will create a new function that teaches a wizard a predefined spell. In this case we can generate <code>learnExpelliarmus</code> and <code>learnExpectoPatronum</code>.</p>
<p>We actually saw some examples of this earlier when we were talking about composition. </p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/bfb76754ceff4093a1511e13cf06e127.js"></script>
<!--kg-card-end: html-->
<p>All of these functions are partially applying an argument to a lodash function. In fact it's functionally equivalent to this block.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/2d72d421f0a81aecf3aa6399964ff7e5.js"></script>
<!--kg-card-end: html-->
<p>Much like with <code>flow</code> you should do what you're comfortable with here. Both methods works well.</p>
<hr>
<h1 id="what-are-we-optimizing-for">What Are We Optimizing For?</h1>
<ol>
<li>Make our code more readable</li>
<li>Make our code easier to reason about</li>
<li>Make our code easier to test</li>
<li>Make our users happier </li>
</ol>
<p>We're not trying to reduce lines of code.</p>
<hr>
<h1 id="thanks">Thanks</h1>
<p>Thanks so much for reading! If you'd like to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
<p>If you'd like to learn all the scary jargon check out my other posts <a href="__GHOST_URL__/what-the-functor/">What The Functor</a>, <a href="__GHOST_URL__/mary-had-a-little-lambda/">Mary Had a Little Lambda</a>, and <a href="__GHOST_URL__/map-filter-reduce/">Map, Filter, Reduce.</a></p>
<hr>
<h1 id="references">References</h1>
<ol>
<li><a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" rel="noreferrer nofollow noopener">https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0</a></li>
<li><a href="https://github.com/hemanth/functional-programming-jargon" rel="noreferrer nofollow noopener">https://github.com/hemanth/functional-programming-jargon</a></li>
<li><a href="https://www.fpcomplete.com/blog/2017/04/pure-functional-programming" rel="noreferrer nofollow noopener">https://www.fpcomplete.com/blog/2017/04/pure-functional-programming</a></li>
<li><a href="https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd" rel="noreferrer nofollow noopener">https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd</a></li>
<li><a href="https://en.wikipedia.org/wiki/Memoization" rel="noreferrer nofollow noopener">https://en.wikipedia.org/wiki/Memoization</a></li>
<li><a href="https://en.wikipedia.org/wiki/Higher-order_function" rel="noreferrer nofollow noopener">https://en.wikipedia.org/wiki/Higher-order_function</a></li>
<li><a href="https://en.wikipedia.org/wiki/Currying" rel="noreferrer nofollow noopener">https://en.wikipedia.org/wiki/Currying</a></li>
<li><a href="https://en.wikipedia.org/wiki/Partial_application" rel="noreferrer nofollow noopener">https://en.wikipedia.org/wiki/Partial_application</a></li>
<li><a href="https://jetpacmonkey.github.io/fp-slides/" rel="noreferrer nofollow noopener">https://jetpacmonkey.github.io/fp-slides/</a></li>
<li><a href="https://xkcd.com/297/" rel="noreferrer nofollow noopener">https://xkcd.com/297/</a></li>
<li><a href="https://xkcd.com/1270/" rel="noreferrer nofollow noopener">https://xkcd.com/1270/</a></li>
<li><a href="https://xkcd.com/1312/" rel="noreferrer nofollow noopener">https://xkcd.com/1312/</a></li>
</ol>
<h1></h1>
`.trim(),
  tags: ['Tech', 'functional-programming'],
  banner_img:
    '/images/blog/functional-programming-fundamentals/functional-programming-hero.jpg',
  heroImage: '',
  wordCount: 1983,
};

export default post;
