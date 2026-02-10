import type { Post } from '../types/posts.types';

const post: Post = {
  id: 10,
  slug: 'mary-had-a-little-lambda',
  title: 'Mary Had a Little Lambda',
  date: 'February 24, 2019',
  excerpt: `Originally I set out to write a sequel to Functional Programming Fundamentals that covered all of the scary jargon.  This quickly evolved into What the Functor? 

In that article I covered monads, mon`,
  content: `
<p>Originally I set out to write a sequel to <a href="http://matthewgerstman.com/functional-programming-fundamentals/"><strong>Functional Programming Fundamentals</strong></a> that covered all of the scary jargon. &nbsp;This quickly evolved into <strong><a href="__GHOST_URL__/what-the-functor/">What the Functor?</a> </strong></p>
<p>In that article I covered monads, monoids, and functors. Now we have one last bit of scary functional jargon, lambdas.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/mary-had-a-little-lambda/lambda-diagram.png" class="kg-image" alt loading="lazy"></figure>
<h1 id="lambda">Lambda</h1>
<p>A lambda is an anonymous function that can be treated like a value.<a href="https://github.com/hemanth/functional-programming-jargon"> [2]</a></p>
<p>We actually saw some of these in the <a href="__GHOST_URL__/what-the-functor/">previous post</a>. These were <code>learnExpelliarmous</code> and <code>joinGryffindor</code>. </p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/82876b9911bc8b1bba5c5cc733b2427d.js"></script>
<!--kg-card-end: html-->
<p>In this case we create an anonymous function and assign it to the variable <code>joinGryffindor</code>. We then pass this as an argument to <code>map</code>. We could also just pass this anonymous function directly like so:</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/61fb080c43c384ecc6d34bc7fba30ce3.js"></script>
<!--kg-card-end: html-->
<p>This is a common pattern, passing a lambda, or an anonymous function to a <a href="http://matthewgerstman.com/functional-programming-fundamentals/">higher order function</a>.</p>
<h1 id="lambda-calculus">Lambda Calculus</h1>
<p>Now the scarier term Lambda Calculus. Let's break this down. Lambdas are anonymous functions, we just learned that. </p>
<p>Why don't we define calculus now? If we pull up the dictionary definition we get the following</p>
<blockquote><em>A method of computation or calculation in a special notation (as of logic or symbolic logic. <a href="https://www.merriam-webster.com/dictionary/calculus">[3]</a></em></blockquote>
<p><strong>Lambda Calculus is just a formal way of defining functions using special notation. Less scary now, right?</strong></p>
<p>Let's dive just a little more into it. Lambda Calculus, or the formal notation for defining functions, is composed of three elements <strong>variables, functions, </strong>and <strong>applications</strong>. <a href="https://learnxinyminutes.com/docs/lambda-calculus/">[4]</a></p>
<p>I'm going to go ahead and heavily paraphrase <a href="https://learnxinyminutes.com/docs/lambda-calculus/">this great article from learn x in y minutes</a>.</p>
<h2 id="variables">Variables </h2>
<p>We know these, variables are used in programming all the time, and we can name them anything. Lets go with one named <code>x</code>. <a href="https://learnxinyminutes.com/docs/lambda-calculus/">[4]</a></p>
<h2 id="function">Function</h2>
<p>We know these too! We use functions in our code, and that's why you're reading an article on functional programming. In lambda calculus they use a special syntax: <code>λ&lt;parameters&gt;.&lt;body&gt;</code>. As an example <code>λx.x</code> is the identity function. <a href="https://learnxinyminutes.com/docs/lambda-calculus/">[4]</a></p>
<h2 id="application">Application</h2>
<p>This is a new word, but we see this all the time too. This is the act of calling a function. So if a function is the function declaration, this is the actual function call.</p>
<p>The syntax for this even involves parentheses! <code>(λx.x)a</code> calls the identity function with the argument <code>a</code>.</p>
<p>Here's a useful table taken from the <a href="https://learnxinyminutes.com/docs/lambda-calculus/">article mentioned above.</a> <a href="https://learnxinyminutes.com/docs/lambda-calculus/">[4]</a></p>
<!--kg-card-begin: html-->
<table>
<thead>

<tr>

<th>Name</th>


<th>Syntax</th>


<th>Example</th>


<th>Explanation</th>

</tr>

</thead>
<tbody>

<tr>

<td>Variable</td>


<td><code>&lt;name&gt;</code></td>


<td><code>x</code></td>


<td>a variable named “x”</td>

</tr>


<tr>

<td>Function</td>


<td><code>λ&lt;parameters&gt;.&lt;body&gt;</code></td>


<td><code>λx.x</code></td>


<td>a function with parameter “x” and body “x”</td>

</tr>


<tr>

<td>Application</td>


<td><code>&lt;function&gt;&lt;variable or function&gt;</code></td>


<td><code>(λx.x)a</code></td>


<td>calling the function “λx.x” with argument “a”</td>

</tr>

</tbody>
</table>
<!--kg-card-end: html-->
<p>This took me a while to grok. If you're looking for more resources I recommend Computerphiles <a href="https://www.youtube.com/watch?v=eis11j_iGMs">excellent video on Lambda Calculus</a> and the sequel on <a href="https://www.youtube.com/watch?v=9T8A89jgeTI">Y Combinators.</a></p>
<hr>
<h1 id="predicate">Predicate</h1>
<p>Let's finish up with a comparatively straightforward term. What is a predicate? A predicate is just a function that returns true or false [<a href="https://stackoverflow.com/questions/3230944/what-does-predicate-mean-in-the-context-of-computer-science">5</a>]. It's most commonly used as criteria for a filter.</p>
<p>Here's a predicate:</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/3951b37d8edeb0ee55153a2d76d0655c.js"></script>
<!--kg-card-end: html-->
<hr>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>I'd like to reiterate, none of this is important to your day to day code. But if you were curious what all those scary FP terms mean hopefully this satisfied that curiosity.</p>
<p>If you'd like something that will make your code better, check out <a href="http://matthewgerstman.com/functional-programming-fundamentals/"><strong>Functional Programming Fundamentals</strong></a>. If you want even scarier terms check out <strong><a href="__GHOST_URL__/what-the-functor/">What the Functor?</a></strong></p>
<p>Also if you feel the need to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
<hr>
<h1 id="ads">Ads</h1>
<p>These ads help me pay to keep this site up. Feel free to buy, watch, listen or ignore these like any other ad.</p>
<!--kg-card-begin: html-->
<div id="amzn-assoc-ad-28dd1412-99f1-4930-a348-0d0afedbb7ce"></div>
<script async src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=28dd1412-99f1-4930-a348-0d0afedbb7ce"></script>
<!--kg-card-end: html-->
<hr>
<h1 id="references">References</h1>
<ol>
<li><a href="https://www.youtube.com/watch?v=eis11j_iGMs">https://www.youtube.com/watch?v=eis11j_iGMs</a></li>
<li><a href="https://github.com/hemanth/functional-programming-jargon">https://github.com/hemanth/functional-programming-jargon</a></li>
<li><a href="https://www.merriam-webster.com/dictionary/calculus">https://www.merriam-webster.com/dictionary/calculus</a></li>
<li><a href="https://learnxinyminutes.com/docs/lambda-calculus/">https://learnxinyminutes.com/docs/lambda-calculus/</a></li>
<li><a href="https://stackoverflow.com/questions/3230944/what-does-predicate-mean-in-the-context-of-computer-science">https://stackoverflow.com/questions/3230944/what-does-predicate-mean-in-the-context-of-computer-science</a></li>
</ol>
`.trim(),
  tags: ['Tech', 'functional-programming'],
  banner_img: '/images/blog/mary-had-a-little-lambda/lambda-calculus-hero.jpg',
  heroImage: '',
  wordCount: 580,
};

export default post;
