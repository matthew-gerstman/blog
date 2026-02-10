import type { Post } from '../types/posts.types';

const post: Post = {
  id: 19,
  slug: 'history-of-the-web',
  title: 'History of the Web: Part 1',
  date: 'June 01, 2021',
  excerpt:
    "Today I'm going to share twenty years of context on the web. We'll talk about how the web evolved into what we have today, and why it makes building web applications so hard in 2021. ",
  content: `
<p>Hey Technical Friends! It's been a while since I wrote anything. 2020 was well, 2020. Anyway, I started working at Bluecore! I've been tasked with leading frontend. As a result, I've been teaching a whole lot of people about the web.</p>
<p>If you didn't know, I've been toying with the web for over twenty years now. I started as a kid sometime around the year 2000. I remember learning about HTML 4 when it was brand new. As a teenager, I built websites for local businesses.</p>
<p>I started in the industry in 2012, working for <a href="https://blogs.gartner.com/martin-kihn/cookies-chaos-and-the-browser-meet-lou-montulli/">Lou Montulli</a> and I've been doing one thing or another on the web ever since.</p>
<p>As I get ramped up on a new job, I keep thinking about the sheer number of tools we take the time to configure. I've been writing proposals for frontend architecture and laying out a vision for a north star.</p>
<p>In the process of this, I've realized how important all this context on the web is. Knowing where we came from can help us figure out where we should go. It's also a mountain of technical debt, and we're collectively building on top of it.</p>
<p>Forgive me if I skip the wonderful stories of Macromedia Flash, Java in the browser, or whatever other detour you can think of. While those were important to development of the web, most of us will never run into them again.</p>
<hr>
<h1 id="back-to-basics">Back to Basics</h1>
<p>The first <strong>Hyper Text Markup Language (HTML)</strong> spec was released in <strong>1993</strong> as a way to represent web pages, then documents. Initially, HTML was completely static, requiring a full page reload to change. </p>
<pre><code class="language-html">&lt;!-- An entire web page could look like this: --&gt;
&lt;form action="/api/doctor"&gt;
  &lt;div class="row"&gt;
      &lt;label for="actor"&gt;Actor: &lt;/label&gt;
      &lt;input id="actor" placeholder="David Tennant"/&gt;
  &lt;/div&gt;
  &lt;div class="row"&gt;
      &lt;label for="companions"&gt;Companions: &lt;/label&gt;
      &lt;input id="companions" placeholder="Rose, Martha, Donna"/&gt;
  &lt;/div&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;!-- Note: Many of these tags were unavailable in HTML 1.0 --&gt;</code></pre>
<p><strong>JavaScript </strong>appeared in <strong>1995</strong> and provided a weakly typed scripting language for handling events. It was only occasionally used to change the contents of the page. </p>
<p><strong>CSS</strong> arrived in <strong>1996</strong> and provided a new way of declaring the look and feel of a website, separate from the primary content in the document.</p>
<p>For dynamically rendered pages, we would use a language like <strong>PHP (1995)</strong> that could provide a server generated HTML document in response to a request. JavaScript was mostly sprinkled in to add interactivity to the page.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/mosaic-browser.png" class="kg-image" alt loading="lazy" width="550" height="518"><figcaption><em>Mosaic, One of the first browsers</em></figcaption></figure>
<h2 id="the-dom">The DOM</h2>
<p>Things really got interesting when the<strong> Document Object Model (DOM)</strong> was introduced in <strong>1998. </strong>The DOM<strong> </strong>is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure. Each node is an object representing a part of the document. (<em><a href="https://en.wikipedia.org/wiki/Document_Object_Model">Thanks Wikipedia</a>)</em></p>
<p>This provided a <em>mostly</em> consistent interface across browsers for JavaScript based applications to make changes to the content being displayed in the browser. Before the DOM, we had similar tree-based structures, but they weren't yet standardized across browsers. As a result, the APIs were wildly inconsistent. The function <code>getElementById</code> wasn't standardized until 2000. Keyboard event handling wasn't standard until 2004.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/dom-tree.png" class="kg-image" alt loading="lazy" width="500" height="600"></figure>
<h2 id="s-websites-web-applications-g">s/Websites/Web Applications/g</h2>
<p>In the early 2000s websites began to go from simple pages to complex applications. Some of the most notable first web applications were Myspace (2003), Gmail (2004), Digg (2004), Google Maps (2005), </p>
<p>These were some of the first applications to use AJAX (<a href="https://web.archive.org/web/20050222032831/http://www.adaptivepath.com/publications/essays/archives/000385.php">Asynchronous JavaScript and XML</a>). This was a watershed moment for the web, as we were finally able to update an app without reloading the whole page.</p>
<p>Each browser implemented the JavaScript spec, <strong>ECMAScript (1997), </strong>slightly differently.<em> Aside, If you must know, it was previously the European Computer Manufacturers Association, but now its just Ecma.</em></p>
<p>This meant that application developers were constantly writing hacks like this:</p>
<pre><code>if (isIE()) {
  // ie.stuff()
} else {
  alert("Sorry, please use Internet Explorer");
}</code></pre>
<p>You can bet that <code>// ie.stuff()</code> was a thousand lines of code inside of an if else block.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/netscape-navigator.png" class="kg-image" alt loading="lazy" width="450" height="300"></figure>
<h2 id="browser-history">Browser History</h2>
<p>To understand how fragmented the web was, we need to discuss some browser history.</p>
<p>Netscape was the original market leader in 1994.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/netscape-ask-jeeves.png" class="kg-image" alt loading="lazy" width="1023" height="576" srcset="/images/blog/size/w600/2021/05/image-4.png 600w, /images/blog/size/w1000/2021/05/image-4.png 1000w, /images/blog/history-of-the-web/netscape-ask-jeeves.png 1023w" sizes="(min-width: 720px) 720px"><figcaption>Netscape showing the Ask Jeeves homepage.</figcaption></figure>
<p></p>
<p>Internet Explorer gained relevance in 1996 with their plugin architecture ActiveX.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/ie-browser.png" class="kg-image" alt loading="lazy" width="920" height="576" srcset="/images/blog/size/w600/2021/05/image-6.png 600w, /images/blog/history-of-the-web/ie-browser.png 920w" sizes="(min-width: 720px) 720px"></figure>
<p>Internet explorer was the clear leader for a very long time. Its market share didn't go under 50% until 2010!</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://cdn.statcdn.com/Infographic/images/normal/1438.jpeg" class="kg-image" alt loading="lazy"><figcaption><em>Taken from <a href="https://www.statista.com/chart/1438/browser-market-share-since-2008/">Statista</a></em></figcaption></figure>
<p>Even the Mac ran Internet Explorer until 2003 when Apple released Safari.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/safari-mac-os.png" class="kg-image" alt loading="lazy" width="770" height="433" srcset="/images/blog/size/w600/2021/05/image-10.png 600w, /images/blog/history-of-the-web/safari-mac-os.png 770w" sizes="(min-width: 720px) 720px"><figcaption>Safari 1.0 on Mac OS</figcaption></figure>
<p>Internet Explorer's demise began when Netscape was reborn as Mozilla Firefox in 2004. Firefox was considered much more secure than Internet Explorer and included features like tabs and an integrated pop-up blocker.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/firefox-windows-xp.png" class="kg-image" alt loading="lazy" width="410" height="293"><figcaption>Mozilla Firefox 1.0 on Windows XP</figcaption></figure>
<p>We didn't see Chrome until 2008 – amusingly, it was considered a big deal that Google was creating a browser. </p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/chrome-announcement.png" class="kg-image" alt loading="lazy" width="770" height="526" srcset="/images/blog/size/w600/2021/05/image-8.png 600w, /images/blog/history-of-the-web/chrome-announcement.png 770w" sizes="(min-width: 720px) 720px"></figure>
<p>For a while we had four browsers with meaningful marketshare. This meant the web had to standardize on the open source ECMAScript as opposed to something proprietary. </p>
<h2 id="web-2-0">Web 2.0</h2>
<p>While all this browser nonsense was happening, application complexity was going up. Web 2.0 brought about new expectations with regards to interactivity. Instead of statically generated sites, users uploaded their own content. This required lots of client-side business logic that was previously unnecessary.</p>
<p>Two of my favorite Web 2.0 era sites were Digg and Meebo.</p>
<p>Digg was one of the first social news sites, featuring user submitted stories and upvotes. It even spun off one of the very first podcasts, Diggnation.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/digg-website.png" class="kg-image" alt loading="lazy" width="400" height="300"></figure>
<p>Meebo was a popular messaging app that allowed users to sign into multiple messaging services at once, from anywhere.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/history-of-the-web/meebo-messenger.png" class="kg-image" alt loading="lazy" width="560" height="460"></figure>
<hr>
<h2 id="jquery">jQuery</h2>
<p>We now have increasing feature requirements built on a language spec that no one could agree to. This meant application developers were left to deal with it.</p>
<p>jQuery abstracted that problem away. Instead of writing different code for two or three browsers, you could write once using a simple library. jQuery 1.0 was a decent amount of code, but we weren't concerned about bundle size yet, and we needed our stuff to work.</p>
<p>Code looked like this:</p>
<pre><code>var doctor = $('.doctor').attr('data-actor').value()
if (doctor === "David Tennant") {
  callRoseTyler();
} else if (doctor === "Matt Smith") {
  callAmyPond();
}</code></pre>
<p>Furthermore it provided a simple interface for making API requests against a server, now we could do things like make API requests and issue callbacks in response to those requests.</p>
<p>This was revolutionary, and kicked off the next wave of complex web applications. Here's what the source of one of those applications might look like.</p>
<figure class="kg-card kg-code-card">
<pre><code>var companions = [];
var enemies = [];
var number = 10;

$.get("/api/companion/1", function (companion) {
  $('.name', companion.name); // Rose Tyler
  $('.seasons', companion.seasons); // Seasons 1 and 2
  companions.push(companion);
});

$(document).on("click", ".display_tardis", function (e) {
  e.preventDefault();
  $(".container").html("&lt;img src=/tardis /&gt;");
});

// Another thousand lines of code that looks like this.</code></pre>
<figcaption>f</figcaption></figure>
<p>We're now hitting APIs, storing state, and changing page markup – sometimes at the response of a button. As these apps grew in size we had to figure out how to provide some structure. From there, we started to see MVC frameworks.</p>
<h2 id="mvc">MVC</h2>
<p>The Model View Controller pattern was widely popular on the backend and it seemed logical to bring it to the frontend. Most engineers were used to working with a backend MVC framework, and they could reason with the way frontend worked.</p>
<p>The two most popular frontend frameworks were Backbone and Angular.</p>
<p>In an MVC world we have a model for storing data, a view for presenting it, and a controller for the business logic in between. MVC is object oriented, with different objects having different functions. For example, models could sync their state against a REST api.</p>
<p><em>Aside: we were collectively really into the full REST pattern for a while, but we're mostly back to GETs and POSTs.</em></p>
<p>These frameworks were very much a precursor to the modern React ecosystem. They featured built in templating languages and separated the logic of updating the DOM and manipulating application state.</p>
<p>That said, state management was still difficult. Different models were constantly falling out of sync with each other and imperative DOM mutations meant race-conditions galore.</p>
<h2 id="bundle-size">Bundle Size</h2>
<p>This is when bundle size became a problem. While the dependencies weren't huge, we were writing so much code on top of it. We also weren't consistently serving minified or even gzipped files. It was also expensive to make a round trip to the server to serve some JS only to fetch some more.</p>
<p>To solve this, we needed to concatenate the files to reduce requests, minify them to reduce file size, and gzip them to reduce size over the wire. &nbsp;This would often lower the payload size by 5x.</p>
<p>However the client still had to parse it! A few years ago, I profiled this and it took roughly 1 millisecond per uncompressed kilobyte of javascript to parse it and run it for the first time. Even with modern frameworks, each file has to execute at least once before the page is interactive to put all the functions in place.</p>
<p>Regardless. We focused on reducing the amount of code sent over the wire. That could mean shrinking it, or optimizing when we loaded it. It's important to remember that before this, we would serve each unminified source file separately.</p>
<p><strong>This was how we became obsessed with tooling.</strong> We needed to do a bunch of things to our code before we shipped it down. We needed to concatenate source files into bundles grouped by functionality, minify them, and put a hash in the filename for cache busting. It got complicated, and this lead to an entire ecosystem of tools: npm, grunt, gulp, and eventually webpack.</p>
<h2 id="language">Language</h2>
<p>After we introduced a build step, we were able to begin tweaking the language itself. In 2009 CoffeeScript was released. It was a brand new langauge that compiled to JavaScript and had new features like arrow functions, optional chaining, and modern string interpolation.</p>
<p>Much like jQuery ascended into modern DOM apis, CoffeeScript ascended into JavaScript. Many of its more novel features made their way into ECMAScript and we moved off of it.</p>
<p>In addition, we had libraries like underscore and lodash influencing JavaScript. ES6 gave us map, filter, and reduce right in the language. This rendered the bulk of these libraries obsolete.</p>
<p>In 2014, 6to5 (later babel) was introduced. This allowed us to write source code using the new ES6 (ECMAScript 6) spec without dropping support for older browsers. It worked by transpiling newer ES6 into ES5. </p>
<p>This was one of the biggest developments the web has ever seen. The ability to improve the language without worrying about old browsers. Development on ES6 was accelerated and <a href="/writing/es-everything">TC39</a> were able to move to yearly releases.</p>
<p>CSS and HTML evolved as well. HTML 5 was released in 2014 and brought about a whole set of new tags we could implement against. CSS saw new dialects like SASS (2006) and LESS (2009) that were supported by the same build tooling we used for JavaScript.</p>
<h1 id="almost-there">Almost There</h1>
<p>We've reached the point where the JavaScript ecosystem looked a lot like the modern web. Let's take a look at a very common stack in 2015.</p>
<ul>
<li><strong>Language: </strong>ES6 was new and CoffeeScript was still heavily in use. New codebases were using babel, but many were still in CoffeeScript or even ES5.</li>
<li><strong>Libraries: </strong>jQuery was evolving into everyone's favorite piece of tech debt. Lodash was still very popular.</li>
<li><strong>Tooling: </strong>Build tools like Grunt and Gulp were largely task runners. One was config heavy the other was code heavy.</li>
<li><strong>Performance: </strong>Serving had gotten faster, but we were still doing DOM mutations by hand which was slow and error prone.</li>
<li><strong>Styling: </strong>LESS and SASS were actually pretty good for their time.</li>
</ul>
<h1 id="modules">Modules</h1>
<p>We haven't discussed modules yet. For a very long time we would include JavaScript on a page via a series of <code>&lt;script /&gt;</code> tags and make sure to load it in the right order.</p>
<p>For a while there were two competing standards/tools for modularizing JavaScript: commonJS, and AMD (asynchronous module definition). ESModules weren't <a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/">standard until 2018.</a></p>
<p>There were also a number of tools that shipped between 2009-2013, most notably requireJS. These tools provided a mechanism for isolating JavaScript and declaring dependencies within projects.</p>
<p>The problem was it was a nightmare to write. Here's what a standard file looked like with requireJS.</p>
<pre><code>requirejs(["jQuery", "underscore", "backbone"], function($, _, Backbone) {
  // This function is called when all of its dependencies have loaded.
  // Above, we have a 1:1 mapping of path to module export.
});</code></pre>
<p>These require statements got sufficiently large and they were written by hand for a long time. </p>
<p>Webpack was first released in 2014 and it was the first mainstream tool to combine building and dependency management all-in-one. It included the new <code>import</code> statement which compiled down to whatever <code>require</code> statement was necessary.</p>
<p>We haven't even discussed Node, but around this time isomorphic JavaScript was becoming popular (running the same code on the client and the server).</p>
<h1 id="react">React</h1>
<p>Seemingly out of nowhere, Facebook released React at the end of 2013. There were a bunch of problems with the current state of web development and React aimed to solve them:</p>
<ol>
<li>We were intermingling business logic with DOM mutations.</li>
<li>We were storing data on actual DOM nodes.</li>
<li>Reading/writing to the DOM was expensive.</li>
<li>State management was a nightmare, everything was constantly falling out of sync with everything.</li>
</ol>
<p>In 2014 Facebook gave a now legendary talk titled: <em>Hacker Way: Rethinking Web App Development at Facebook. </em></p>
<figure class="kg-card kg-embed-card"><iframe width="200" height="113" src="https://www.youtube.com/embed/nYkdrAPrdcw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>
<p>This talk detailed how they introduced React and adopted the Flux pattern to simplify web development. React made one simple promise, UI is a function of state.</p>
<p>The flux pattern works as follows. We have a datastore sitting at the top of our application, React would read from that datastore and render UI, whenever it needed a state change it would issue an action that updated the data store. This would trigger a rerender of the entire application.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/flux-data-flow.png" class="kg-image" alt loading="lazy" width="1280" height="866" srcset="/images/blog/size/w600/2021/05/image-15.png 600w, /images/blog/size/w1000/2021/05/image-15.png 1000w, /images/blog/history-of-the-web/flux-data-flow.png 1280w" sizes="(min-width: 720px) 720px"><figcaption><em>Taken from the<a href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts"> Redux Docs</a></em></figcaption></figure>
<p>But there was magic! React introduced the virtual DOM which effectively eliminated the imperative DOM mutation problem.</p>
<p>React provides an interface for writing declarative components. This means you tell React <em>take this state and turn it into this UI. </em>What it doesn't do is tell you how to get from (State A, UI A) to (State B, UI B); React did all of that under the hood.</p>
<p>React would do a full render of State A, later it would do a full render of State B and then it would do a diff on two virtual DOMs (as opposed to the slow real DOM) and determine the minimum set of changes to make to the DOM.</p>
<p>React also introduced a syntax called JSX, a way to write html-like markup directly inside a JavaScript module. This allowed developers to create components with business logic adjacent to markup, without actually putting HTML strings in code.</p>
<p>This made applications both faster and more predictable, a win for everyone. Eventually, Redux became the most popular flux implementation. This led to the popularity of &nbsp;<a href="/writing/functional-programming-fundamentals">functional programming</a> on the web.</p>
<p>Here's what some React code might look like.</p>
<pre><code class="language-javascript">import React from "react";

function TheDoctor({ number, actor, companions }) {
  return (
    &lt;div&gt;
      &lt;h1&gt;The {number} Doctor&lt;/h1&gt;
      &lt;h2&gt;Played by {actor}&lt;/h2&gt;
      &lt;div className="companions"&gt;
        {companions.map((companion) =&gt; (
          &lt;Companion {...companion} /&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
&lt;TheDoctor
  number="Twelfth"
  actor="Peter Capaldi"
  companions={["Clara Oswald", "Nardole", "Bill Potts"]}
/&gt;;
</code></pre>
<h1 id="typescript">TypeScript</h1>
<p>Over the years JavaScript kept getting better. We moved from big releases like ES6 to iterative yearly releases like ES2021. It only made sense that someone would add types.</p>
<p>TypeScript is a statically typed language that compiles down to traditional JavaScript. It enforces type checking at compile time however the runtime code is still untyped. This works well enough even if it's not perfect.</p>
<p>While TypeScript was first released in 2008, it didn't get mainstream adoption until a decade later, in 2019. As far as I'm aware, Dropbox was one of the first companies to adopt <a href="https://dropbox.tech/frontend/the-great-coffeescript-to-typescript-migration-of-2017">TypeScript at scale in 2015</a>, or maybe I'm just really proud of the migration we did.</p>
<p>TypeScript started to get good during the 2.x phase. These versions brought strict null checks, async functions, enums, <code>Pick</code>, and a whole range of utilities we take for granted today. Since then, it's become more and more powerful, and has quickly rose to be the most popular dialect of Javascript.</p>
<p>With the advent of types, we could now enforce contracts between different parts of the codebase.</p>
<pre><code>type DoctorProps = {
  number: string;
  actor: string;
  companions: string[];
}

function TheDoctor({ number, actor, companions }: DoctorProps) {
  // Function Body
}

&lt;TheDoctor
  // Type 'number' is not assignable to type 'string'. ts(2322)
  number={13}
  actor="Jodie Whittaker"
  companions={["Graham", "Ryan", "Yasmin"]}
 /&gt;</code></pre>
<p>If you're curious, I once gave a talk on why TypeScript is amazing.</p>
<figure class="kg-card kg-embed-card"><iframe width="200" height="113" src="https://www.youtube.com/embed/KdvEGPiULAQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>
<hr>
<h1 id="the-mountain-of-technical-debt">The Mountain of Technical Debt</h1>
<p>All of that history, and we've reached web development in 2021. We also skipped a lot: GraphQL, advancements in CSS (modules, styled components, etc), and the entire node ecosystem.</p>
<p>When looked through the lens that <a href="https://blog.professorbeekums.com/all-code-is-debt/">all code is technical debt</a>, there's a mountain. We're still building web applications using fundamentally the same tools we were 20 years ago: JavaScript, HTML, and CSS.</p>
<p>They've evolved quite a bit, but they continue to maintain support for every website ever built. Furthermore, any sufficiently large codebase will include artifacts from its past. How many of us claim to be running TypeScript + React, but secretly have some backbone, some jQuery, or some checked-in-decaffeinated CoffeeScript? And that's just the stuff I can think of.</p>
<p>Even with the latest features in ES2021, the vast majority of websites are still targeting ES5, a language released in 2009. We can add types and declarative runtimes, but it will eventually execute in a typeless and imperative environment.</p>
<p>Our obsession with tools has reached new heights. Let's take a look at a pretty standard setup for a modern application:</p>
<ul>
<li><strong>TypeScript </strong>- Adds support for types and newer ES features. Usually compiles to ES5.</li>
<li><strong>React 17 + React DOM &nbsp;- </strong>About 35kb gzipped runtime that allows for declarative programming.</li>
<li><strong>Apollo - </strong>Popular graphql library for API requests. About 33kb gzipped.</li>
<li><strong>NPM - </strong>Package manager, supports pulling in third party dependencies (including the ones listed here).</li>
<li><strong>Webpack - </strong>Build tool, runs the underlying TypeScript compiler and handles minification, bundle splitting, etc.</li>
<li><strong>ESLint - </strong>Lints code for style and potentially runtime errors.</li>
<li><strong>Prettier </strong>- Code formatter, standardizes whitespace, quotes, and semicolons.</li>
<li><strong>CSS Modules - </strong>Allows importing CSS directly in JavaScript files.</li>
<li><strong>Jest - </strong>Unit test runner.</li>
<li><strong>Cypress - </strong>End to end test runner.</li>
</ul>
<p>That's a lot of tools! Today's web developers need to know about all of them, how they interact with each other, and how they interact with all that <em>legacy</em> code that isn't going anywhere.</p>
<p>The list keeps going, and the worst part, all of these tools are written in JavaScript, which leads to extended build times, test runtimes, and one dragged out feedback loop.</p>
<p>In fact, most of the recent developments in performance have been achieved by writing JavaScript tooling in other languages! The esbuild team saw 150x performance gains over webpack 5 by writing their bundler in go.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/history-of-the-web/esbuild-benchmark.png" class="kg-image" alt loading="lazy" width="800" height="150" srcset="/images/blog/size/w600/2021/05/image-16.png 600w, /images/blog/history-of-the-web/esbuild-benchmark.png 800w" sizes="(min-width: 720px) 720px"><figcaption>Taken from the <a href="l">esbuild docs</a></figcaption></figure>
<h2 id="page-loads">Page Loads</h2>
<p>This is just in our terminal! Even if we fix the tools, we still have to ship code down to the browser. Here's what an average pageload might look like.</p>
<ul>
<li>Http requests comes in to server</li>
<li>Server provides initial HTML markup</li>
<li>HTML is scanned, <code>&lt;script /&gt;</code> tags are loaded.</li>
<li>JavaScript comes down over the wire, is parsed and executed for the first time.</li>
<li>JavaScript code makes a network request for content over a JSON API.</li>
<li>API request comes back, JavaScript renders page, the page is finally interactive.</li>
<li>Lazy loaded code begins loading.</li>
<li>Modules pop into the page as we fetch and render code/content asyncronously.</li>
</ul>
<p>There are tons and tons of performance optimizations we can do here, but at the end of the day we either have to pay this cost in the form of time or complexity. Any performance optimization we do makes serving more complex and creates more places for our stuff to break.</p>
<hr>
<h1 id="the-future">The Future</h1>
<p>The two projects I find most interesting are <a href="https://svelte.dev/">Svelte</a> and <a href="https://deno.land/">Deno</a>. There are a number of competitors to React, most notably Vue and Angular 2. While they have their own approaches to application development, they still ship a runtime down to the browser.</p>
<p>Svelte is different, it has no runtime. It does all of its work at compile time so that you can send down as little code as possible. While Svelte hasn't been meaningfully adopted at scale, I believe whatever takes the throne from React won't have a runtime.</p>
<p>Deno is a secure runtime for TypeScript. Its built in rust and totally overhauls how we run v8 in the server. While it still runs V8, they've largely abstracted that away from the user, allowing it to be swapped out in the future.</p>
<p>I believe we've found the correct interfaces for web development. TypeScript and React provide an incredible developer experience with the constraints they're built on. What if we took TypeScript and React and honest-to-god compiled it. What if we could ship the React runtime as part of the browser? What if we took advantage of type data at runtime?</p>
<p>If we started to do this, we would take the existing paradigms frontend engineers are familiar with, but turbocharge their implementation. Until then, we're going to keep executing our code in the same environment we were in 1998.</p>
`.trim(),
  tags: ['Tech', 'frontend', 'javascript', 'typescript'],
  banner_img: '/images/blog/hero-northern-lights.jpg',
  heroImage: '',
  wordCount: 3583,
};

export default post;
