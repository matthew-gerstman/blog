import type { Post } from '../types/posts.types';

const post: Post = {
  id: 17,
  slug: 'performance-testing-anonymous-functions',
  title: 'Performance Testing React With Anonymous Functions',
  date: 'September 26, 2019',
  excerpt: `Over the past couple of years, anonymous functions have really taken off the React community.

There have been a lot of claims of "this might affect performance." Up until now I haven't seen any real `,
  content: `
<p>Over the past couple of years, anonymous functions have really taken off the React community. A few days ago, I was on twitter and saw the following exchange:</p>
<figure class="kg-card kg-embed-card">
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">inline functions <a href="https://t.co/ISOsnigUtg">pic.twitter.com/ISOsnigUtg</a></p>
&mdash; Kitze (@thekitze) <a href="https://twitter.com/thekitze/status/1175822194565361665?ref_src=twsrc%5Etfw">September 22, 2019</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</figure>
<p>Kitze was kidding (I hope), but for a while this was a very real debate. Especially when render props were first taking off. Since then, Hooks have made anonymous (inline) functions even more popular.</p>
<p>There have been a lot of claims of "this might affect performance" which is often countered with "well that's a micro-optimization." Up until now I haven't seen any real numbers, so I decided to get them on my own.</p>
<p>At first, I did this just by running a simple node script with various numbers for NUM_EXECUTIONS.</p>
<pre><code class="language-Javascript">function runAnonymous() {
  for (let i = 0; i &lt; NUM_EXECUTIONS; i++) {
    (() =&gt; {
      // noop
    })();
  }
}

function named() {
  // noop
}

function runNamed() {
  for (let i = 0; i &lt; NUM_EXECUTIONS; i++) {
    named();
  }
}

const startNamed = new Date();
runNamed();
const endNamed = new Date();
const diffNamed = endNamed - startNamed;
console.log(\`Named took \${diffNamed} ms\`);

const startAnonymous = new Date();
runAnonymous();
const endAnonymous = new Date();
const diffAnonymous = endAnonymous - startAnonymous;
console.log(\`Anonymous took \${diffAnonymous} ms\`);

const factor = diffAnonymous / diffNamed;
console.log(\`Thats a factor of \${factor.toFixed(2)}x!\`);
</code></pre>
<p>This code is hopefully straightforward. First it runs a loop where it generates an anonymous function and executes it, second it creates a named function then loops over it and runs it the same number of times.</p>
<p>For anything less than 10,000 executions I couldn't profile a difference. Both the named and anonymous executions took 0 ms.</p>
<p>At 10,000 executions we start to get some results</p>
<pre><code>Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 0 ms
Anonymous took 4 ms
Thats a factor of Infinityx!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 0 ms
Anonymous took 4 ms
Thats a factor of Infinityx!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 0 ms
Anonymous took 3 ms
Thats a factor of Infinityx!</code></pre>
<p>Creating an anonymous function 10,000 times took about 3-4 ms to execute. I decided to crank it up a notch and see how many executions it took to see a real difference.</p>
<p>At a million executions I was able to see the named function actually take some time to run.</p>
<pre><code>Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 1 ms
Anonymous took 3 ms
Thats a factor of 3.00x!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 2 ms
Anonymous took 4 ms
Thats a factor of 2.00x!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 2 ms
Anonymous took 3 ms
Thats a factor of 1.50x!</code></pre>
<p>These results were pretty inconsistent ranging from 1.5x to 3.0x. Just for fun, I decided to crank it up to a billion.</p>
<pre><code>Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 1240 ms
Anonymous took 4117 ms
Thats a factor of 3.32x!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 1053 ms
Anonymous took 4153 ms
Thats a factor of 3.94x!

Matthew at Matthews-iMac in ~/src/react-perf/src on master
$ node anonymous.js 
Named took 1054 ms
Anonymous took 3798 ms
Thats a factor of 3.60x!</code></pre>
<p>Now we're getting some meaningful data. Creating an anonymous function and executing it takes roughly 3.5 times as long as calling a function that already exists.</p>
<p>This initial data tells me that anonymous functions don't make a meaningful difference to the performance of your application. In the above example we're averaging around 3 <strong>nanoseconds </strong>to allocate an anonymous function. For that to matter, we need to be operating at an unimaginably large scale.</p>
<h1 id="moving-on-to-react">Moving On To React</h1>
<p>The above example is pretty contrived. In a vacuum we see that anonymous functions have a negligible impact on performance, but what about in a real React application?</p>
<p>I decided to throw together a simple React application to see if anonymous functions made any difference to rendering a simple component. That looks roughly like this</p>
<pre><code class="language-Javascript">function AnonymousNumberList({count}) {
  let list = [];
  for (let i = 0; i &lt; count; i++) {
    list.push(&lt;Number getNumber={() =&gt; i} key={i} /&gt;);
  }
  return list;
}

function NumberList({count}) {
  let list = [];
  for (let i = 0; i &lt; count; i++) {
    list.push(&lt;Number number={i} key={i} /&gt;);
  }
  return list;
}

function Number({number, getNumber}) {
  return (
    &lt;h1 style={{color: number != null ? 'red' : 'blue'}}&gt;
      {number != null ? number : getNumber()}
    &lt;/h1&gt;
  );
}</code></pre>
<p>In this example, we can render a large number of <code>h1</code> tags and see if using an anonymous function makes any difference from just passing a raw prop. I opened up the React DevTools and profiled how long it took to render each set of elements.</p>
<h3 id="without-anonymous-functions">Without Anonymous Functions</h3>
<!--kg-card-begin: html-->
<table>
    
<thead>
    
<th>Number of Elements</th>

        
<th>Time to Render</th>

    </thead>


<tr>
<td>100</td>
<td>5.1 ms</td>
</tr>


<tr>
<td>1000</td>
<td>41.7ms</td>
</tr>


<tr>
<td>10000</td>
<td>201.8ms</td>
</tr>


<tr>
<td>25000</td>
<td>518ms</td>
</tr>

</table>
<!--kg-card-end: html-->
<h3 id="with-anonymous-functions">With Anonymous Functions</h3>
<!--kg-card-begin: html-->
<table>
    
<thead>
    
<th>Number of Elements</th>

        
<th>Time to Render</th>

    </thead>

    
<tr>
<td>100</td>
<td>6.1 ms</td>
</tr>


<tr>
<td>1000</td>
<td>43 ms</td>
</tr>


<tr>
<td>10000</td>
<td>210.9 ms</td>
</tr>


<tr>
<td>25000</td>
<td>453 ms</td>
</tr>

</table>
<!--kg-card-end: html-->
<p>This data is not at all scientific, but it was pretty representative of what I've found. Having a single anonymous function as a prop makes no meaningful difference to React performance.</p>
<p>I did have one serious takeaway though.</p>
<figure class="kg-card kg-embed-card">
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">FWIW I was trying  to profile if anonymous functions in a render make any difference to performance.
<br>
<br>The short answer I found was &quot;not until you&#39;ve reached a scale where you have a lot of other lower hanging fruit to fix&quot;</p>
&mdash; Matthew Trevor Gerstman (@MatthewGerstman) <a href="https://twitter.com/MatthewGerstman/status/1175897335378927621?ref_src=twsrc%5Etfw">September 22, 2019</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</figure>
<p>I thought my experiment was over, but Rick Hanlon had other thoughts.</p>
<h1 id="let-s-play-with-react-memo">Let's Play With React.memo</h1>
<figure class="kg-card kg-embed-card">
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">I was thinking about doing the same today
<br>
<br>What about
<br>
<br>&lt;Root&gt;
<br>&lt;Parent&gt; &lt;-- anon function
<br>&lt;ExpensiveChild&gt; &lt;-- expensive render
<br>
<br>Child should be pure/memo, the expensive render could be sorting a large array of todo items. Compare with/without passing anon function into the child</p>
&mdash; Ricky (@rickhanlonii) <a href="https://twitter.com/rickhanlonii/status/1175907744299327489?ref_src=twsrc%5Etfw">September 22, 2019</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</figure>
<p>I thought this was pretty interesting and decided to take this experiment a step further. How does React behave when you give it a really expensive component to render?</p>
<pre><code class="language-Javascript">function sleep(seconds) {
  const startTime = new Date();
  const endTime = startTime.setSeconds(startTime.getSeconds() + seconds);
  console.log({startTime, endTime});
  while (new Date() &lt; endTime) {
    // wait;
    continue;
  }

  return;
}

const ExpensiveComponent = React.memo(() =&gt; {
  sleep(1);
  return 'expensive';
});
</code></pre>
<p>To do this, I made a sleep function that blocks the main thread for a full second and a component that calls it. I then memoized that component.</p>
<p>I quickly discovered that React.memo is memoization per instance as opposed to per set of props for that component. For 10 components, this code will always take roughly 10 seconds for the first render.</p>
<pre><code class="language-Javascript">function NumberList({count}) {
  let list = [];
  for (let i = 0; i &lt; count; i++) {
    list.push(&lt;Number number={i} key={i} /&gt;);
  }
  return list;
}

function Number({number, getNumber}) {
  return (
    &lt;h1 style={{color: number != null ? 'red' : 'blue'}}&gt;
      {number != null ? number : getNumber()}
      &lt;ExpensiveComponent  /&gt;
    &lt;/h1&gt;
  );
}</code></pre>
<p>We haven't learned anything new yet, or at least nothing that isn't mentioned in the React docs.</p>
<p>Next up was profiling the overhead of React.memo. I decided to generate a big object with the following code.</p>
<pre><code>const bigObject = {};
for (let i = 0; i &lt; n; i++) {
  bigObject[\`\${i}\`] = \`\${i}\`;
}

&lt;ExpensiveComponent {...bigObject} /&gt;</code></pre>
<!--kg-card-begin: html-->
<table>
    
<thead>
<th>Value of n</th>
<th>Overhead for React.memo</th>
</thead>

    
<tr>
<td>100</td>
<td>0.1 ms</td>
</tr>


<tr>
<td>1,000</td>
<td>0.5 ms</td>
</tr>


<tr>
<td>10,000</td>
<td>3 ms</td>
</tr>


<tr>
<td>100,000</td>
<td>100 ms</td>
</tr>


<tr>
<td>1,000,000</td>
<td>675 ms</td>
</tr>

</table>
<!--kg-card-end: html-->
<p>These results were promising. I can't imagine a production scenario with more than 1,000 individual props. The overhead for memo is negligible for reasonable quantities.</p>
<p>In fact, I quickly realized that this isn't just the overhead for React.memo, <strong>this is also the overhead for prop spreading on the component.</strong></p>
<p>As a sanity check I ran the 1,000,000 prop approach again on a non memoized component. It took roughly 300ms to render that component. We can approximate that it takes 375 ms for React.memo to check 1,000,000 props.</p>
<h1 id="combining-with-anonymous-functions">Combining With Anonymous Functions</h1>
<p>As a final followup, I rendered my expensive, memoized component with an anonymous function as a prop</p>
<pre><code class="language-javascript">&lt;ExpensiveComponent anon={() =&gt; {}} /&gt;</code></pre>
<p>This did what I expected, it broke memoization. It once again took a full second for each render of each <code>ExpensiveComponent</code>.</p>
<p>While the overhead of using React.memo is negligible, this is a footgun to watch out for. An inexperienced developer could easily break memoization without realizing it.</p>
<p>To be clear, this has nothing to do with the anonymous function. This is because we're passing a new reference on each render to a memoized component. This code would also cause repeated rerenders.</p>
<pre><code class="language-javascript">&lt;ExpensiveComponent obj={{ foo: 'bar'}} /&gt;</code></pre>
<h2 id="a-note-on-science">A Note On Science</h2>
<p>This data isn't terribly scientific. I ran this experiment a small number of times on a single machine. In order to really collect data, we would need to run this code in a wide variety of environments many many times. I'm not a statistician, so I'll leave it to the experts to run a truly conclusive experiment.</p>
<h2 id="conclusions">Conclusions</h2>
<p>That said, I am very comfortable with the statement that <strong>inline anonymous functions have a negligible impact on application performance. </strong>Use all the hooks and render props you'd like.</p>
<p>You can see my full source <a href="http://github.com/matthew-gerstman/react-perf">here</a>. Also feel free to tweet me <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a> with questions.</p>
`.trim(),
  tags: ['Tech', 'react'],
  banner_img: '/images/blog/hero-mountains-night.jpg',
  wordCount: 1579,
};

export default post;
