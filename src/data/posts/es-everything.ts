import type { Post } from '../types/posts.types';

const post: Post = {
  id: 18,
  slug: 'es-everything',
  title: 'ES-Everything: an ECMA Explainer',
  date: 'January 06, 2020',
  excerpt: `Whats ES6? What about ESNext? TC39? ECMA? Transpilers? 

There's an entire ecosystem around shipping new-ish JavaScript to older browsers and how we decide what features get added to JavaScript in the`,
  content: `
<p>You've done it, you've built your first web application. It does everything you expect. You've tested it rigorously. It works everywhere, your Macbook, your iPhone, your friend's android. You're so proud of yourself, you send it to your parents; they tell you it's just a blank page.</p>
<p>You poke around and realize they're still using that Dell desktop they bought in 2006. It's running Windows 7. They're using Internet Explorer 10. Your web-app doesn't work on this machine.</p>
<p>So you Google how to make your app work in IE 10, or 11, or whatever. You're quickly flooded with acronyms and terms you've never heard before ES5, ES6, ESNext, ES2020, TC39, ECMA. What's a transpiler? People are debating about polyfills and ponyfills; is there a difference?</p>
<p>If you're overwhelmed, that's okay, it's a lot. This article will attempt to cover the entire ecosystem around shipping new-ish JavaScript to older browsers and how the community decides what features get added to JavaScript in the first place; let's dive in.</p>
<h1 id="let-s-talk-about-ecma">Let's Talk About ECMA</h1>
<p>ECMA is the European Computer Manufacturers Association. They have many committees that handle many things. One of these committees is TC39 or Technical Committee 39. They maintain a specification, or spec, called ECMAScript. Whenever you hear ES5, ES6, or ESAnything, the ES refers to ECMAScript.</p>
<p>ECMAScript is the spec which JavaScript is built upon. It's a formal in-writing agreement of how JavaScript should work. Each browser has their own implementation of JavaScript but they all conform to the same spec (or they do their best). This is why your code may run slightly differently in Safari or Firefox or Chrome. The browser vendors are implementing an engine that takes your JavaScript and runs it on the machine.</p>
<h2 id="es5-es6-esnext">ES5, ES6, ESNext</h2>
<p>Now, this underlying spec is constantly changing. JavaScript gets new features and browsers evolve. In 2009, ES5 was standardized across browsers. This was the largest release for a long time. If you've ever read <a href="https://amzn.to/2MWOggZ">JavaScript: The Good Parts</a> it was based on ES5. </p>
<p>It wasn't until 2015 that ES6 was released with major changes to the language. Some of the bigger features in ES6 included Promises, Arrow Functions, and Classes.</p>
<p>ES6 was a massive release. It was so big, and took so long, that TC39 decided to stop numbering ECMAScript altogether. At this point they decided to rebrand ES6 as ES2015 and brand all future versions by year. Examples include ES2016, ES2017, etc.</p>
<p>They also introduced the concept of ESNext, a living breathing version of the latest JavaScript. ESNext includes all the features that have been formally agreed upon by the committee.</p>
<h3 id="a-note-on-es6">A Note On ES6</h3>
<p>You may be thinking: I thought ES6 was the latest version of JavaScript. This is a misnomer. For a number of reasons, people often refer to anything after ES5 as ES6. This is mostly due to the fact that ES6 was a very large release, and the last one to have a simple version number.</p>
<p>If you hear someone say ES6, they likely mean ESNext.</p>
<h2 id="tc39">TC39</h2>
<p>Technical Committee 39 meet semi-regularly, usually on the West Coast of the United States, but sometimes elsewhere. You can see all their meeting agendas <a href="https://github.com/tc39/agendas">here</a>. They're made up of individuals from major tech companies who are members of ECMA. For most large companies, for example Google or Facebook, it costs about $70,000 for membership. There are significant discounts for very small or non-profit companies. You can see the full list of members <a href="https://www.ecma-international.org/memento/members.htm">here</a>.</p>
<h2 id="new-javascript-features">New JavaScript Features</h2>
<p>Anybody can submit a proposal for a new JavaScript feature, but every proposal eventually needs a "champion" from the committee in order to be adopted. Proposals are submitted by opening a pull request on the <a href="https://github.com/tc39/proposals">proposals repo</a>.</p>
<p>Features go through stages from 0 to 4. At the end of the year, all features in Stage 4 are considered in that year's version of ECMAScript. You can see the full list of finished proposals <a href="https://github.com/tc39/proposals/blob/master/finished-proposals.md">here</a>.</p>
<h3 id="stage-0-strawperson">Stage 0: Strawperson</h3>
<p>These are strawperson proposals. This is the idea stage. The only requirement to get to Stage 0 is the initial PR.</p>
<h3 id="stage-1-proposal">Stage 1: Proposal</h3>
<p>This is the stage where the committee agrees they will spend time discussing on the feature. They assign a champion to the proposal, determine the high level API, and potentially implement a demo. It is expected that a feature will spend a good chunk of time being worked on in Stage 1 before reaching Stage 2.</p>
<h3 id="stage-2-draft">Stage 2: Draft</h3>
<p>At this point, a there should be a formal specification for the feature. It may still have lots of TODOs and room for improvement, but it's mostly there. If a significant issue is discovered, the feature may have to go back to Stage 1.</p>
<h3 id="stage-3-candidate">Stage 3: Candidate</h3>
<p>This is when the feature is mostly complete. The committee agrees that they are unable to find any issues until someone attempts to implement the feature. If a browser vendor attempts to implement the feature and finds an issue, the feature may go back to Stage 2.</p>
<h3 id="stage-4-finished">Stage 4: Finished</h3>
<p>A feature is considered done when it's been implemented in not one, but two different browsers. For example, if a feature becomes stable in both Firefox and Chrome, it's considered finished. The committee will then merge in a pull request to the ECMAScript spec.</p>
<p>The full ECMAScript spec is available <a href="https://tc39.es/ecma262/">here</a>.</p>
<h1 id="running-your-code">Running Your Code</h1>
<p>We often want to use the latest features in our code, but older browsers won't support them. To do this, we use transpilers and polyfills.</p>
<h2 id="transpilers">Transpilers</h2>
<p>A transpiler is a type of compiler that takes source code written in a high level language and produces equivalent source code in another high level language. This is in contrast to a compiler, which takes source code written in a high level language and compiles it to a low level language like assembly.</p>
<p>Transpilers can also be used to convert from one version of a language to another one. This is how we can write JavaScript using the newest features but still execute our code in browsers that don't support them natively.</p>
<p>For example we can compile an arrow function to a traditional one.</p>
<pre><code class="language-javascript">const func = () =&gt; {
  console.log('foo');
}

const func = function () {
  console.log('foo');
}
</code></pre>
<h3 id="babel">Babel</h3>
<p>One of the most popular transpilers is <a href="https://babeljs.io">Babel</a>. Babel is the go-to test environment for early JavaScript features. It does this by implementing a rich plugin architecture that allows developers to test syntax while it is still in it's earliest stages.</p>
<h3 id="typescript">TypeScript</h3>
<p>TypeScript goes a step further and adds type-checking to JavaScript. As part of this, it offers a built in transpiler to build your ESNext code for older browsers. While Babel has the ecosystem to support Stage 2 and below features, Typescript does not.</p>
<p>Sometimes developers will chose to use both so they can get type-checking and the latest features.</p>
<h3 id="targets">Targets</h3>
<p>When building our code we'll pick a target version of JavaScript. This is most commonly ES5 however we could compile to any arbitrary version of the ECMAScript spec. The tradeoff is that older targets generate more source code, but newer targets will run in fewer browsers.</p>
<p>The reason we often want to generate less source is performance. Fewer bytes means less to send over the network, less to parse, and less to execute.</p>
<h2 id="polyfills">Polyfills</h2>
<p>Transpiling is enough for syntax changes, but what about new functions and classes? That's where polyfills come in. A polyfill is the implementation of a newer feature written in an older version of ES. The polyfill usually check if the browser has it's own version of the feature and if not inject it.</p>
<p>For example a fetch polyfill might look like this:</p>
<pre><code class="language-javascript">if (window.fetch === undefined) {
  window.fetch = function() {
   // Implementation of fetch here
  }
}
</code></pre>
<p>Babel and Typescript will support a configuration to automatically include any necessary polyfills in your source code.</p>
<p>Under the hood, most most polyfills rely on a project called <a href="https://github.com/zloirock/core-js">core-js</a>.</p>
<h3 id="ponyfill">Ponyfill</h3>
<p>While polyfills automatically inject an implementation of the feature, ponyfills will treat them as any other dependency. There are a few advantages to this. Ponyfills don't polute the global scope. In addition, the implementation of a feature may vary between browsers and the polyfill. This allows engineers to use a consistent implementation of a feature.</p>
<p>For example a fetch ponyfill might look like this:</p>
<pre><code class="language-javascript">const fetch = window.fetch || require('fetch-ponyfill');
</code></pre>
<p>It is commonly debated which approach is better. I'll leave that exercise up to the reader.</p>
<h2 id="where-you-run-your-code-matters">Where You Run Your Code Matters</h2>
<p>When deciding what version of ES to target and what polyfills to include, it's important to consider where your code is running.</p>
<p>We often focus on which browsers and which versions of those browsers we support, but JavaScript can run many places. For example, if you're building an Electron application, you may not need to transpile/polyfill at all. The same thing applies to node applications. If you're building for one specific environment, you only need to worry about how your code runs in that environment.</p>
<h1 id="thanks">Thanks</h1>
<p>I hope this post was useful! Follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a> for more content like this.</p>
<h1 id="references">References</h1>
<ul>
<li><a href="https://www.ecma-international.org/memento/tc39-m.htm">https://www.ecma-international.org/memento/tc39-m.htm</a></li>
<li><a href="https://github.com/tc39/proposals/blob/master/finished-proposals.md">https://github.com/tc39/proposals/blob/master/finished-proposals.md</a></li>
<li><a href="https://en.wikipedia.org/wiki/ECMAScript#ES2019">https://en.wikipedia.org/wiki/ECMAScript</a></li>
<li><a href="https://tc39.es/process-document/">https://tc39.es/process-document/</a></li>
<li><a href="https://en.wikipedia.org/wiki/Source-to-source_compiler">https://en.wikipedia.org/wiki/Source-to-source_compiler</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Polyfill">https://developer.mozilla.org/en-US/docs/Glossary/Polyfill</a></li>
</ul>
`.trim(),
  tags: ['javascript', 'tc39', 'ecmascript', 'Tech'],
  banner_img: '/images/blog/hero-mountain-sunset.jpg',
  wordCount: 1523,
};

export default post;
