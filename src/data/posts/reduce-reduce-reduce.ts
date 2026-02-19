import type { Post } from '../types/posts.types';

const post: Post = {
  id: 13,
  slug: 'reduce-reduce-reduce',
  title: 'Reduce, Reduce, Reduce',
  date: 'March 18, 2019',
  excerpt:
    'After my last article on map, filter, and reduce there was an outpour of requests to do an article on just reduce. This time let’s dive into all the fun things you can do with reduce.',
  content: `
<p>After my last article on <a href="http://matthewgerstman.com/map-filter-reduce/" rel="noreferrer nofollow noopener">map, filter, and reduce</a> there was an outpour of requests to do an article on just reduce. This time let’s dive into all the fun things you can do with reduce. Before we do that though, let’s make sure we really understand how it works.</p>
<h1 id="why-s-it-called-reduce">Why’s it Called Reduce?</h1>
<p>I find it helpful if we look at the dictionary definition for the word reduce <a href="https://www.merriam-webster.com/dictionary/reduce" rel="noreferrer nofollow noopener"><strong>[1]</strong></a></p>
<blockquote><strong><em>a: </em></strong><em>To draw together or cause to converge, or consolidate</em>
<br>Example: reduce all the questions to one
<br>
<br><strong><em>b: </em></strong><em>To diminish in size, amount, extent, or number</em>
<br>Example: reduce taxes
<br>Example: reduce the likelihood of war
<br>
<br><strong>c: </strong>To<em> decrease the volume and concentrate the flavor of by boiling</em>
<br>Example: add the wine and <em>reduce </em>the sauce for two minutes</blockquote>
<p>In all three of these, we’re taking a group of things and consolidating, or shrinking them through some process.</p>
<p>In programming it’s the same. We’re taking a <strong>list</strong> of <strong>items</strong> and consolidating the list into to one new <strong>value</strong> using an <strong>accumulator</strong>.</p>
<h1 id="function-signature">Function Signature</h1>
<p>Now let’s take look at the function signature for reduce.</p>
<pre><code class="language-javascript">list.reduce(callback, initialValue)</code></pre>
<p>This part is pretty straightforward, reduce takes a <strong>callback</strong>, and an <strong>initialValue</strong> to seed the <strong>accumulator</strong>. Most of the complexity here is in the function signature for the callback. Let’s dive into that.</p>
<pre><code class="language-javascript">const callback = (accumulator, currentValue, currentIndex, list) =&gt; accumulator;</code></pre>
<p>This is a bit more intimidating, so let’s break it down.</p>
<p>The <strong>accumulator </strong>is thing we’re trying to reduce our list down to. It <em>accumulates </em>the list of items into one value. That value could be an object or even a new array, but it’s considered one value.</p>
<p>Whatever gets returned from the callback is passed in as the <strong>accumulator </strong>to the next iteration. When we're done, the final state of the <strong>accumulator </strong>is returned as the <strong>value.</strong></p>
<p><strong>currentValue </strong>is less scary, it’s the current item in the list we’re iterating over. This might be more familiar if we use <code>for loop</code> syntax.</p>
<pre><code class="language-javascript">for (let i = 0; i &lt; list.length; i++) {
  currentValue = list[i];
}</code></pre>
<p>Next is <strong>currentIndex</strong>. In the example above this would be <code>i</code>. We can make this a bit more explicit though.</p>
<pre><code class="language-javascript">for (let currentIndex = 0; currentIndex &lt; list.length; currentIndex++) {
  currentValue = list[currentIndex];
}</code></pre>
<p>Lastly, <strong>list. </strong>This is the entire list we’re iterating over. This can be useful if you want to access some other element in the original list. To be honest, I’ve never needed to access the original <strong>list</strong>, but it’s available.</p>
<h1 id="implementation">Implementation</h1>
<p>Now that we understand the function signature, let’s implement it from scratch. </p>
<p>One caveat, to avoid complexity this implementation takes the list as an argument as opposed to adding it to the prototype of array. You can see a proper polyfill at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce">MDN [2].</a></p>
<pre><code class="language-javascript">function reduce(list, callback, initialValue) {
  if (list == null || !Array.isArray(list)) {
    throw new TypeError("list is not a valid array");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (initialValue === undefined &amp;&amp; list.length === 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = initialValue;
  for (let currentIndex = 0; currentIndex &lt; list.length; currentIndex++) {
    currentValue = list[currentIndex];
    accumulator = callback(accumulator, currentValue, currentIndex, list);
  }
  return accumulator;
}
</code></pre>
<p>As you can see, the bulk of this function is error checking. We check to make sure we have a valid <strong>list </strong>and <strong>callback</strong>. We also ensure the user has either provided an <strong>initialValue</strong> or we can derive one from the list.</p>
<p>In fact if we assume that the user always provides valid input this is the entire function.</p>
<pre><code class="language-javascript">function reduce(list, callback, initialValue) {
  let accumulator = initialValue;
  for (let currentIndex = 0; currentIndex &lt; list.length; currentIndex++) {
    currentValue = list[currentIndex];
    accumulator = callback(accumulator, currentValue, currentIndex, list);
  }
  return accumulator;
}
</code></pre>
<p>This function takes a <strong>list</strong>, iterates over it, and calls a <strong>callback</strong> on the previous value along with each item in the list. it then returns the final <strong>value</strong>.</p>
<h1 id="all-of-the-examples">All of The Examples</h1>
<p>Hopefully you now understand <strong>how </strong>reduce works, but it may not be clear <strong>why </strong>you would want to use it. First, let’s get the sample data out of the way. This is the same <a href="/writing/map-filter-reduce" rel="noreferrer nofollow noopener">data as last time.</a></p>
<pre><code class="language-javascript">const HarryPotter = {
  name: "Harry Potter",
  house: "Gryffindor",
  points: 40
};
const HermioneGranger = {
  name: "Hermione Granger",
  house: "Gryffindor",
  points: 140
};
const DracoMalfoy = {
  name: "Draco Malfoy",
  house: "Slytherin",
  points: -20
};
const TaylorSwift = {
  name: "Taylor Swift",
  house: "Slytherin",
  points: 100
};
const LinManuelMiranda = {
  name: "Lin Manuel Miranda",
  house: "Slytherin",
  points: 5000
};
const CedricDiggory = {
  name: "Cedric Diggory",
  house: "Hufflepuff",
  points: 12
};
const SallyPerks = {
  name: "Sally Perks",
  house: "Hufflepuff",
  points: 15
};
const LunaLovegood = {
  name: "Luna Lovegood",
  house: "Ravenclaw",
  points: 100
};
const ChoChang = {
  name: "Cho Chang",
  house: "Ravenclaw",
  points: 100
};
const wizards = [
  HarryPotter,
  HermioneGranger,
  DracoMalfoy,
  LinManuelMiranda,
  TaylorSwift,
  CedricDiggory,
  SallyPerks,
  LunaLovegood,
  ChoChang
];</code></pre>
<h2 id="keyby">keyBy</h2>
<p>Now that we have the sample data out of the way, let’s look at our first example, <code>keyBy</code>.</p>
<pre><code class="language-javascript">function keyBy(list, key) {
  return list.reduce((acc, item) =&gt; {
    const index = item[key];
    acc[index] = item;
    return acc;
  }, {});
}</code></pre>
<p>This function takes a list of objects and a key, and keys those objects by a property on them. In this example our <strong>initialValue </strong>is <code>{}</code>.We iterate over each item in the list, get <code>item[key]</code> and use it as our key in the accumulator.</p>
<p>As an aside, this implementation is naive and will overwrite on conflict.</p>
<p>Given the list of <code>wizards</code> above, we could call <code>keyBy(wizards, 'name')</code> and get the following output.</p>
<pre><code class="language-javascript">{
  "Harry Potter": {name: "Harry Potter", house: "Gryffindor", points: 40},
  "Hermione Granger": {name: "Hermione Granger", house: "Gryffindor", points: 140},
  "Draco Malfoy": {name: "Draco Malfoy", house: "Slytherin", points: -20},
  "Lin Manuel Miranda": {name: "Lin Manuel Miranda", house: "Slytherin", points: 5000},
  "Taylor Swift": {name: "Taylor Swift", house: "Slytherin", points: 100},
  "Cedric Diggory": {name: "Cedric Diggory", house: "Hufflepuff", points: 12},
  "Sally Perks": {name: "Sally Perks", house: "Hufflepuff", points: 15},
  "Luna Lovegood": {name: "Luna Lovegood", house: "Ravenclaw", points: 100},
  "Cho Chang": {name: "Cho Chang", house: "Ravenclaw", points: 10 }
}</code></pre>
<h2 id="groupby">groupBy</h2>
<p>Next up is <code>groupBy</code>, this function takes a <strong>list</strong> and groups the <strong>items</strong> by the output of a given function<strong>,</strong> or <code>iteratee</code>.</p>
<pre><code class="language-javascript">function groupBy(list, iteratee) {
  return list.reduce((acc, item) =&gt; {
    const index = iteratee(item);
    if (!acc[index]) {
      acc[index] = [];
    }
    acc[index].push(item);
    return acc;
  }, {});
}
</code></pre>
<p>Again, we take a list, but this time we take a function, or <code>iteratee</code>. We call <code>iteratee</code> on each <code>item</code> in the list and use this to determine what key on the <strong>accumulator,</strong> or <code>acc</code>, we place the item in.</p>
<p>We then make sure there’s an array allocated at the key and push the item onto that array.</p>
<p>If we call <code>groupBy(wizards, wizard =&gt; wizard.house)</code>, we’ll get the following output.</p>
<pre><code class="language-javascript">{
  Gryffindor: [
    { name: "Harry Potter", house: "Gryffindor", points: 40 },
    { name: "Hermione Granger", house: "Gryffindor", points: 140 }
  ],
  Slytherin: [
    { name: "Draco Malfoy", house: "Slytherin", points: -20 },
    { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
    { name: "Taylor Swift", house: "Slytherin", points: 100 }
  ],
  Hufflepuff: [
    { name: "Cedric Diggory", house: "Hufflepuff", points: 12 },
    { name: "Sally Perks", house: "Hufflepuff", points: 15 }
  ],
  Ravenclaw: [
    { name: "Luna Lovegood", house: "Ravenclaw", points: 100 },
    { name: "Cho Chang", house: "Ravenclaw", points: 100 }
  ]
};</code></pre>
<h2 id="chunk">chunk</h2>
<p>Another popular example, <code>chunk</code>. In this case we want to take a big <strong>list</strong> and split it into a <strong>list</strong> of smaller lists.</p>
<pre><code class="language-javascript">function chunk(list, size) {
  return list.reduce(
    (acc, item) =&gt; {
      let lastIndex = acc.length - 1;
      if (acc[lastIndex].length &gt;= size) {
        acc.push([]);
        lastIndex++;
      }
      acc[lastIndex].push(item);
      return acc;
    },
    [[]]
  );
}</code></pre>
<p>Above, we take a <code>list</code> and a <code>size</code> for our sub-lists. Our <strong>initialValue </strong>is an array with a single empty array inside of it.</p>
<p>We then iterate over the list and make our smaller lists. Every time one of our sub-lists reaches <code>size</code>, we move on to the next one.</p>
<p>If we call const <code>chunkedWizards = chunk(wizards, 3)</code>, we’ll get the following value for <code>chunkedWizards</code>.</p>
<pre><code class="language-javascript">[
  [
    { name: "Harry Potter", house: "Gryffindor", points: 40 },
    { name: "Hermione Granger", house: "Gryffindor", points: 140 },
    { name: "Draco Malfoy", house: "Slytherin", points: -20 }
  ],
  [
    { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
    { name: "Taylor Swift", house: "Slytherin", points: 100 },
    { name: "Cedric Diggory", house: "Hufflepuff", points: 12 }
  ],
  [
    { name: "Sally Perks", house: "Hufflepuff", points: 15 },
    { name: "Luna Lovegood", house: "Ravenclaw", points: 100 },
    { name: "Cho Chang", house: "Ravenclaw", points: 100 }
  ]
];</code></pre>
<p>We now have 3 lists of 3 wizards. It’s worth noting that this worked out nicely because we had exactly 9 wizards. If we had 8 total wizards, our final list would be of size 2. If we had 10 total wizards, our final list would be of size 1.</p>
<h1 id="flatten">flatten</h1>
<p>We’ve chunked <code>wizards</code> into <code>chunkedWizards</code>, but what if we want to undo that? Well that’s what flatten is for.</p>
<pre><code class="language-javascript">function flatten(list) {
  return list.reduce((acc, item) =&gt; {
    if (Array.isArray(item)) {
      acc = acc.concat(item);
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}</code></pre>
<p>In this example we take a <code>list</code> and iterate over it. Whenever we see an array, we <code>concat</code> it with the <strong>accumulator, </strong>or <code>acc</code>. Whenever we see anything else we push it onto the <strong>accumulator</strong>. Our <strong>initialValue </strong>for our <strong>accumulator</strong> this time is an empty array or <code>[]</code>.</p>
<p>If we call <code>flatten(chunkedWizards)</code> we get our original list.</p>
<pre><code class="language-javascript">[
  { name: "Harry Potter", house: "Gryffindor", points: 40 },
  { name: "Hermione Granger", house: "Gryffindor", points: 140 },
  { name: "Draco Malfoy", house: "Slytherin", points: -20 },
  { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
  { name: "Taylor Swift", house: "Slytherin", points: 100 },
  { name: "Cedric Diggory", house: "Hufflepuff", points: 12 },
  { name: "Sally Perks", house: "Hufflepuff", points: 15 },
  { name: "Luna Lovegood", house: "Ravenclaw", points: 100 },
  { name: "Cho Chang", house: "Ravenclaw", points: 100 }
];</code></pre>
<h2 id="flatmap">flatMap</h2>
<p>We can take this a step further with flatMap. This <a href="/writing/map-filter-reduce"><strong>maps</strong></a> over the list and flattens any results from the given function.</p>
<pre><code class="language-javascript">function flatMap(list, func) {
  return list.reduce((acc, item) =&gt; {
    const mappedItem = func(item);
    if (Array.isArray(mappedItem)) {
      acc = acc.concat(mappedItem);
    } else {
      acc.push(mappedItem);
    }
    return acc;
  }, []);
}</code></pre>
<p>Hopefully by now you’re getting the hang of it. We iterate over the <code>list</code> and call <code>func</code> on each item. We then <code>flatten</code> the output of <code>func</code>.</p>
<p>Let’s look at a function call:</p>
<p><code>flatMap(wizards, wizard =&gt; [wizard.name, wizard.house, wizard.points])</code></p>
<p>This takes a wizard and returns all of it’s properties as items in an array. The output of this is one big array.</p>
<pre><code class="language-javascript">[
  "Harry Potter",
  "Gryffindor",
  40,
  "Hermione Granger",
  "Gryffindor",
  140,
  "Draco Malfoy",
  "Slytherin",
  -20,
  "Lin Manuel Miranda",
  "Slytherin",
  5000,
  "Taylor Swift",
  "Slytherin",
  100,
  "Cedric Diggory",
  "Hufflepuff",
  12,
  "Sally Perks",
  "Hufflepuff",
  15,
  "Luna Lovegood",
  "Ravenclaw",
  100,
  "Cho Chang",
  "Ravenclaw",
  100
];</code></pre>
<h1 id="map-and-filter">Map and Filter</h1>
<p>One last fun fact, we can implement <a href="/writing/map-filter-reduce" rel="noreferrer nofollow noopener"><strong>map</strong></a><strong> </strong>and <a href="/writing/map-filter-reduce" rel="noreferrer nofollow noopener"><strong>filter</strong></a><strong> </strong>with reduce.</p>
<pre><code class="language-javascript">function map(list, func) {
  return list.reduce((acc, item) =&gt; {
    acc.push(func(item));
    return acc;
  }, []);
}</code></pre>
<pre><code class="language-javascript">function filter(list, predicate) {
  return list.reduce((acc, item) =&gt; {
    if (predicate(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}</code></pre>
<p>If you're looking for reasons to use map or filter, check out my previous article, <a href="/writing/map-filter-reduce">map, filter, reduce</a>.</p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>Reduce is one of the most powerful functions built into JavaScript. While most of the functions above are available in <a href="http://lodash.com/" rel="noreferrer nofollow noopener">lodash</a> <a href="http://lodash.com/" rel="noreferrer nofollow noopener">[3]</a>, they’re good examples of when you may want to use reduce. Give them a try and feel free to tweet questions <a href="https://twitter.com/MatthewGerstman" rel="noreferrer nofollow noopener">@MatthewGerstman.</a></p>
<hr>
<h1 id="references">References</h1>
<ol>
<li><a href="https://www.merriam-webster.com/dictionary/reduce" rel="noreferrer nofollow noopener">https://www.merriam-webster.com/dictionary/reduce</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" rel="noreferrer nofollow noopener">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce</a></li>
<li><a href="http://lodash.com/" rel="noreferrer nofollow noopener">http://lodash.com</a></li>
</ol>
`.trim(),
  tags: ['Tech', 'functional-programming'],
  banner_img: '/images/blog/reduce-reduce-reduce/reduce-function-hero.jpg',
  heroImage: '',
  wordCount: 1959,
};

export default post;
