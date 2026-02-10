import type { Post } from '../types/posts.types';

const post: Post = {
  id: 9,
  slug: 'what-the-functor',
  title: 'What the Functor?',
  date: 'February 24, 2019',
  excerpt:
    "A monad is just a monoid in the category of endofunctors, what's the problem? Hopefully, you'll understand this when we're done.",
  content: `
<p>My <a href="/writing/functional-programming-fundamentals">last post</a> aimed to make <a href="/writing/functional-programming-fundamentals">functional programming</a> as straightforward as possible. An explicit goal of that article was to <em>avoid unnecessary jargon like monads and functors and stick to concepts that will make our code better. </em></p>
<p>This time around let's dive into all the scary terms and make them not so scary. While knowing these terms might not make your code better, they're fun to know. </p>
<p>The one thing we skip in this article is <a href="/writing/mary-had-a-little-lambda">lambda calculus</a>, check out <a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda</a> for more on that. I also have an article called <a href="/writing/map-filter-reduce">Map, Filter, Reduce</a> that is more practical.</p>
<p>As a warning, we're gonna be diving into some abstract mathematics. This XKCD is now more relevant than ever.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/what-the-functor/xkcd-functional-programming.png" class="kg-image" alt loading="lazy"><figcaption>Functional programming combines the flexibility and power of abstract mathematics with the intuitive clarity of abstract mathematics.<a href="https://xkcd.com/1270/" rel="noreferrer nofollow noopener">[11]</a></figcaption></figure>
<p>A monad is just a monoid in the category of endofunctors, what's the problem? <a href="http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html">[7]</a> <a href="https://stackoverflow.com/questions/3870088/a-monad-is-just-a-monoid-in-the-category-of-endofunctors-whats-the-problem/3870310#3870310">[8]</a>. Hopefully, you'll understand this when we're done.</p>
<p>One final disclaimer, I didn't know any of this when I set out to write this article. I've heavily annotated this post with resources I used to learn this stuff as I was going. If you're already knowledgeable on category theory, please be gentle when correcting me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
<hr>
<h1 id="functors">Functors</h1>
<p>What fun would it be if we didn't start with the titular term, functor.</p>
<p>A <em>functor </em>is anything that can be mapped over. This is most commonly a list, but really it's any object that can be mapped over.</p>
<p>For example, we can make a <code>Wizard</code> that can be mapped over.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/4f20482a242e565ea455ebb78f0a617a.js"></script>
<!--kg-card-end: html-->
<p><em>Note: in most practical situations, a functor would be parametric (containing a type parameter like <code>String</code> in <code>Array&lt;String&gt;</code>), but <code>Wizard</code> does fulfill the basic definition of a functor.</em></p>
<p>Now the <code>map</code> function also needs to meet the following criteria.</p>
<h2 id="identity-law-1-">Identity Law &nbsp;<a href="https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6">[1]</a></h2>
<p>If map is given an identity function it must return the exact same object. Like so:</p>
<p><code>functor.map(x =&gt; x) === functor</code></p>
<p>This one is hopefully straightforward.</p>
<h2 id="composition-law-1-">Composition Law &nbsp;<a href="https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6">[1]</a></h2>
<p><code>functor.map(x =&gt; f(g(x))) === functor.map(g).map(f)</code></p>
<p>Woah that's intimidating. What does this actually mean? Let's look at an example.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/a9a6c8392e87e7a936a3e383fa0f2be5.js"></script>
<!--kg-card-end: html-->
<p>We have <code>joinGryffindor</code> and <code>learnExpelliarmous</code>. If we call </p>
<p><code>wizard.map(joinGryffindor).map(learnExpelliarmous)</code> it needs to be equivalent to &nbsp;<code>wizard.map(w =&gt; learnExpelliarmous(joinGryffindor(w)))</code>. </p>
<p>Now it's worth calling out, it needs to be functionally equivalent. In abstract mathematics we're not worried about pointers and references so we can consider this good enough. This is also known as "Fast and Loose Reasoning is morally correct." <a href="http://www.cse.chalmers.se/~nad/publications/danielsson-et-al-popl2006.html">[13]</a></p>
<hr>
<h1 id="category">Category</h1>
<p>The next term we need to dive into is a category. A category is an algebraic structure that models objects and their relationships with each other.</p>
<p>Below we can see a category of int, string, and float. </p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/what-the-functor/category-diagram.png" class="kg-image" alt loading="lazy"><figcaption>Taken from article by Nikolay Grozev <a href="https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/">[5]</a>.</figcaption></figure>
<p>The category is the entire chart. It's how we convert from int to string, float to string, or int to float, or float to int. </p>
<p>Now while in practice, a functor is just a thing we can map over, it has a more advanced explanation. In category theory, a functor is a transformation between two categories <a href="https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/">[5]</a>. This is a transformation of the <strong>entire category.</strong> </p>
<p>For example, we can transform the entire category above with a <code>List</code> functor. The relationships between all of the types goes from a function like <code>toString</code> to <code>map(func)</code> or &nbsp;<code>map(toString)</code>. This also applies to <code>toFloat</code>, <code>round</code>, and any other functions in our category.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/what-the-functor/functor-diagram.png" class="kg-image" alt loading="lazy"><figcaption>Taken from article by Nikolay Grozev <a href="https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/">[5].</a></figcaption></figure>
<hr>
<h1 id="endofunctor">Endofunctor</h1>
<p>Now that we have functors and categories, let's discuss endofunctors. An endofunctor is a functor that transforms a category into itself. </p>
<p>I spent several hours trying to grok this, and more importantly, understand how it's relevant in software. After reading <em>many</em> articles I stumbled on <a href="https://www.youtube.com/watch?v=8XGFFMPHG0o"><a href="https://www.youtube.com/watch?v=8XGFFMPHG0o">this talk [6]</a> </a>by <a href="https://twitter.com/DanielaSfregola">@<a href="https://twitter.com/DanielaSfregola">DanielaSfregola</a></a> and it clicked.</p>
<p>For all intents and purposes, all functors in programming are endofunctors. A functor is really just metadata around a value that allows us to map over it.</p>
<p>The objects in our category are our types, and the arrows are the relationships between those types. These relationships are fundamental to the language so we can't just create a wrapper (functor) that changes how these types are interrelated. </p>
<p>We can't change how types are related unless we change the definition of the type altogether. Even in JavaScript, which has gnarly behaviors around <code>NaN</code>, <code>undefined</code>, and other types, the relationship between them is still defined in the spec and can't be changed with a simple functor.</p>
<p>Practically speaking, all functors in programming are endofunctors. There are all sorts of nuanced exceptions to this rule but those are out of scope here. Think of it like physics 101 when we pretended friction wasn't a thing.</p>
<p>Seriously though, watch <a href="https://www.youtube.com/watch?v=8XGFFMPHG0o">that talk</a>, I closed so many tabs after watching that talk.</p>
<hr>
<h1 id="monoid">Monoid</h1>
<p>Cool cool, cool cool cool. We've defined some of the scariest terms in functional programming, let's move on to monoids. </p>
<p>A monoid is a category with one object. A monoid has three important rules: identity, composition, and associativity. In programming, it's a wrapper around an object that enforces these rules.</p>
<ul>
<li><strong>Identity: </strong>This states that there must be a way to use the monoid such that it returns itself.</li>
<li><strong>Composition: </strong>This states that we must be able to combine values using the monoid.</li>
<li><strong>Associative: </strong>This states that the order of operations remains constant so <code>(a +b) + c === a + (b + c)</code>.</li>
</ul>
<p>If these seem vague and generalized, well thats how abstract math works. Let's look at a practical example, a string monoid. <a href="http://s3.amazonaws.com/erlang-conferences-production/media/files/000/000/760/original/Daniela_Sfregola_-_A_Pragmatic_Introduction_to_Category_Theory.pdf?1510238446">[9]</a></p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/3f97a78df599085a01bd8663e80cc9ec.js"></script>
<!--kg-card-end: html-->
<p>Above, we can see our <code>StringMonoid</code> with an <code>identity</code> value and a <code>compose</code> function.</p>
<p>We can use the compose function to produce a new string.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/5a095ebd187f2be8098bd5ba2a05c2fa.js"></script>
<!--kg-card-end: html-->
<p>If we compose with the identity value we get the same value.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/571a8bab94ee65d77013aef7913b9c23.js"></script>
<!--kg-card-end: html-->
<p>Finally, if we call compose on the same arguments it doesn't matter which pair we do first.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/7f76d38e33fbed7a2a82c7a303fec776.js"></script>
<!--kg-card-end: html-->
<p>Here are some other examples of monoids in JavaScript:</p>
<ul>
<li>Adding and multiplying numbers (with 0 and 1 as the identity value respectively).</li>
<li>Joining multiple arrays.</li>
<li>Composing multiple functions together.</li>
</ul>
<hr>
<h1 id="monads">Monads</h1>
<p>We did it! We made it to Monads.</p>
<p>Before we dive in let's take a step back. Functors and monoids were both wrappers around a value that allow us to execute operations on them. In the case of functors it was <code>map</code> in the case of monoids it was <code>compose</code>, where compose is a single operation.</p>
<p>Now monads. Monad's are both a functor and a monoid. That doesn't make this any simpler though. Let's define this in simpler terms.</p>
<p>A monad is a wrapper around some value that makes it easier to compose functions around it. This is often used to abstract away things like API calls or IO. In fact a <code>Promise</code> is a monad.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/b5d20d2d6c2dace042376db4810336dd.js"></script>
<!--kg-card-end: html-->
<p>If we look at these &nbsp;types above, we have a <code>Wizard</code> and a function that returns a <code>Promise&lt;Wizard&gt;</code>. This promise allows us to compose functions on top of it without worrying about the underlying IO needed to go fetch a <code>Wizard</code> from the server.</p>
<p>Lets break down further.</p>
<p>A monad is based on a simple symmetry — A way to wrap a value into a context, and a way to unwrap the value from the context <a href="https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8">[10]</a>.</p>
<h3 id="lift">Lift</h3>
<p>A monad allows us to <em>lift</em> a type into the monad context. In this case we're going from <code>Wizard</code> to <code>Promise&lt;Wizard&gt;</code>. The process of wrapping the <code>Wizard</code> in a <code>Promise</code> is called lifting.</p>
<h3 id="map-function map() { [native code] }1">Map</h3>
<p>A monad also allows us to map from one wrapped type to another. So we can call <code>wizardPromise.then(joinGryffindor).then(learnExpelliarmous)</code> to update the underlying wizard in the promise. </p>
<p>I should mention that the monad <code>map</code> is the same <code>map</code> we get with a functor. This is because monads are a type of functor.</p>
<p>Now it's worth noting that Promises don't explicitly provide a <code>map</code> function, but <code>then</code> gets us close enough.</p>
<h3 id="flatmap">FlatMap</h3>
<p>Finally, monads give us a way of going from <code>Promise&lt;Promise&lt;Wizard&gt;&gt;</code> to <code>Promise&lt;Wizard&gt;</code>. We should be able to have an arbitrarily nested monad and get to the original underlying value. We should also be able to do a <code>flatMap</code> on it. This is commonly done with a <code>chain</code> function.</p>
<h2 id="back-to-monads">Back to Monads</h2>
<p>Now it's worth noting that Promises don't perfectly map to monads, but they're close enough to understand the data type.</p>
<p>This also seems like a good time to reiterate, monads are an advanced abstract mathematical type. We're bringing these into our understanding of programming. They don't always line up perfectly with every construct in JavaScript. That's okay! </p>
<p>The point here isn't to make our code perfectly mathematical, we're just trying to understand some of the advanced math that powers our languages.</p>
<hr>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>I'm going to admit. This article was challenging to write. I learned a lot in the process. I'd like to reiterate, none of this is important to your day to day code. But if you were curious what all those scary FP terms mean hopefully this satisfied that curiosity.</p>
<p>If you'd like something that will make your code better, check out <a href="http://matthewgerstman.com/functional-programming-fundamentals/">Functional Programming Fundamentals</a>. You can also check out <a href="/writing/map-filter-reduce">Map, Filter, Reduce.</a> If you want to learn about <a href="/writing/mary-had-a-little-lambda">lambda calculus</a> check out <a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda</a>.</p>
<p>Special thank you to <a href="https://twitter.com/glittershark1">@glittershark1</a> and <a href="https://twitter.com/jetpacmonkey">@<a href="https://twitter.com/jetpacmonkey">jetpacmonkey</a></a> for reviewing this.</p>
<p>Thank you to <a href="https://twitter.com/drboolean">@drboolean</a> for correcting my functor <a href="https://twitter.com/drboolean/status/1104145856452677633">example on Twitter.</a></p>
<p>Also if you feel the need to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
<hr>
<h1 id="references">References</h1>
<p><em>Note: I didn't end up quoting all of these directly, but I consulted all of them while writing this article.</em></p>
<ol>
<li><a href="https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6">https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6</a></li>
<li><a href="https://medium.com/javascript-scene/functors-categories-61e031bac53f">https://medium.com/javascript-scene/functors-categories-61e031bac53f</a></li>
<li><a href="https://medium.com/@l.mugnaini/functors-applicatives-and-monads-in-pictures-784c2b5786f7">https://medium.com/@l.mugnaini/functors-applicatives-and-monads-in-pictures-784c2b5786f7</a></li>
<li><a href="https://medium.com/@lettier/your-easy-guide-to-monads-applicatives-functors-862048d61610">https://medium.com/@lettier/your-easy-guide-to-monads-applicatives-functors-862048d61610</a></li>
<li><a href="https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/">https://nikgrozev.com/2016/03/14/functional-programming-and-category-theory-part-1-categories-and-functors/</a></li>
<li><a href="https://www.youtube.com/watch?v=8XGFFMPHG0o">https://www.youtube.com/watch?v=8XGFFMPHG0o</a></li>
<li><a href="http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html">http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html</a></li>
<li><a href="https://stackoverflow.com/questions/3870088/a-monad-is-just-a-monoid-in-the-category-of-endofunctors-whats-the-problem/3870310#3870310">https://stackoverflow.com/questions/3870088/a-monad-is-just-a-monoid-in-the-category-of-endofunctors-whats-the-problem/</a></li>
<li><a href="http://s3.amazonaws.com/erlang-conferences-production/media/files/000/000/760/original/Daniela_Sfregola_-_A_Pragmatic_Introduction_to_Category_Theory.pdf?1510238446">http://s3.amazonaws.com/erlang-conferences-production/media/files/000/000/760/original/Daniela_Sfregola_-_A_Pragmatic_Introduction_to_Category_Theory.pdf?1510238446</a></li>
<li><a href="https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8">https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8</a></li>
<li><a href="https://xkcd.com/1270/">https://xkcd.com/1270/</a></li>
<li><a href="https://gist.github.com/ericelliott/ea925c58410f0ae74aef">https://gist.github.com/ericelliott/ea925c58410f0ae74aef</a></li>
<li><a href="http://www.cse.chalmers.se/~nad/publications/danielsson-et-al-popl2006.html">http://www.cse.chalmers.se/~nad/publications/danielsson-et-al-popl2006.html</a></li>
</ol>
`.trim(),
  tags: ['Tech', 'functional-programming'],
  banner_img: '/images/blog/what-the-functor/functor-hero.jpg',
  heroImage: '',
  wordCount: 1596,
};

export default post;
