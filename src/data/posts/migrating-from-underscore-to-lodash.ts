import type { Post } from '../types/posts.types';

const post: Post = {
  id: 21,
  slug: 'migrating-from-underscore-to-lodash',
  title: 'Migrating from Underscore to Lodash',
  date: 'September 5, 2018',
  excerpt:
    'How we successfully migrated the Dropbox web application from Underscore to Lodash, a comprehensive guide to large-scale JavaScript library migrations.',
  content: `
<p><em>Originally published on the <a href="https://dropbox.tech/frontend/migrating-from-underscore-to-lodash">Dropbox Tech Blog</a></em></p>



<p><strong>By Matthew Gerstman and Stacey Sern • September 5, 2018</strong></p>



<p>The core Dropbox web application is 10 years old and used by millions of users per day. Hundreds of front-end engineers across multiple cities actively work on it. Unsurprisingly, our codebase is very large and somewhat irregular. Recently written parts have thorough test coverage, other parts haven't been updated in years.</p>



<p>Over the past two years we've worked to modernize our front-end stack. We've successfully moved from CoffeeScript to TypeScript, from jQuery to React, and from a custom Flux implementation to Redux. Having completed these migrations we identified our utility library, Underscore, as one more candidate for migration.</p>



<h2>Why migrate?</h2>



<p>When we began our research, Underscore hadn't seen an update in 3 years. Newer developers were hesitant to use a deprecated library. We wanted to fill that need.</p>



<h3>Benefits of Lodash</h3>



<p>Lodash is a utility library composed of many individual modules. It can be used as a complete library, as individual modules, or as a custom build consisting of just the necessary functions. It's the single most used utility library on the web, and as a result is extremely battle tested. It heavily optimizes for front-end CPU performance in a way that Underscore doesn't. For example, Lodash is implemented to take advantage of JIT in JavaScript engines.</p>



<p>It also offers new features that promote functional programming. For example, it's well suited for building a functional selector layer between React and Redux, two technologies we use in our front-end codebase. Finally, Lodash is actively maintained, which is critical to long-term support of the library.</p>



<h2>Setting a strategy for migration</h2>



<p>We wanted to use a strategic migration approach. By gathering consensus from our internal community, doing research first, and constructing a bespoke build for our environment before migrating our entire codebase, we hoped to avoid surprises and ensure a smooth transition.</p>



<h3>Getting alignment with a Web Enhancement Proposal</h3>



<p>At Dropbox we have a process called Web Enhancement Proposals (WEPs). Similar to Python's PEPs or JavaScript's TC39 process, WEPs are a way to propose large-scale changes to our web infrastructure. They provide a forum for discussion and help us reach consensus before making major technical decisions.</p>



<p>We wrote a WEP proposing the migration from Underscore to Lodash. This gave the broader engineering team a chance to provide feedback and raise concerns. The proposal outlined our reasoning, the benefits we expected, and our migration strategy.</p>



<h3>Doing the research first</h3>



<p>Before writing any code, we did extensive research. We needed to understand:</p>



<ul>

<li>Which Underscore functions were actually being used in our codebase</li>


<li>How those functions mapped to Lodash equivalents</li>


<li>Whether any functions had different behavior between libraries</li>


<li>What our final bundle size would look like</li>

</ul>



<p>We wrote scripts to analyze our codebase and identify all Underscore usage. This gave us a complete picture of what we'd need to migrate.</p>



<h3>Choosing the right tools</h3>



<p>We evaluated several approaches for the migration:</p>



<ol>

<li><strong>Manual find-and-replace</strong>: Too error-prone and time-consuming</li>


<li><strong>Automated codemods</strong>: Promising, but needed careful testing</li>


<li><strong>Aliasing Underscore to Lodash</strong>: Quick but risky</li>

</ol>



<p>We ultimately chose a hybrid approach: automated codemods for the bulk of the work, with manual review for edge cases.</p>



<h3>Building the bundle</h3>



<p>One of our key concerns was bundle size. We didn't want to ship the entire Lodash library if we were only using a subset of functions.</p>



<p>We used Webpack to create a custom Lodash build containing only the functions we actually needed. This required some experimentation to get right.</p>



<p>We should note that the unminified Webpack bundle came with a fair amount of Webpack cruft: comments, dependency resolution, and other snippets Webpack needs to do its job. However we decided that letting Bazel minify and remove most of this was a reasonable tradeoff to make.</p>



<h2>Migrating the Codebase</h2>



<p>It was finally time for the big scary part: migrating the codebase. Everything until now had been implemented in a vacuum; we hadn't yet gone out and touched anyone else's code.</p>



<p>We constructed a comprehensive mapping table showing how each Underscore function mapped to its Lodash equivalent. Some functions had direct 1:1 mappings, others required slight modifications, and a few had no direct equivalent.</p>



<h3>Splitting the work</h3>



<p>Rather than attempt a big-bang migration, we split the work into phases:</p>



<ol>

<li><strong>Phase 1</strong>: Migrate functions with direct 1:1 mappings</li>


<li><strong>Phase 2</strong>: Migrate functions requiring slight modifications</li>


<li><strong>Phase 3</strong>: Handle edge cases and custom wrappers</li>


<li><strong>Phase 4</strong>: Remove Underscore entirely</li>

</ol>



<p>Each phase was deployed separately, giving us time to catch and fix any issues before moving on.</p>



<h3>Exactly one bug</h3>



<p>Despite migrating thousands of lines of code, we only encountered a single bug in production. It was related to a subtle difference in how Underscore and Lodash handle empty arrays in their <code>_.compact</code> function.</p>



<p>This speaks to the thoroughness of our preparation and testing. The research phase paid off.</p>



<h2>Conclusion</h2>



<p>Migrating from Underscore to Lodash was a significant undertaking, but it was worth it. We now have a modern, well-maintained utility library that's better suited to our needs.</p>



<p>The key lessons we learned:</p>



<ol>

<li><strong>Do your research first</strong>: Understanding the problem space saved us countless hours later</li>


<li><strong>Get organizational buy-in</strong>: The WEP process helped us build consensus</li>


<li><strong>Migrate incrementally</strong>: Phased rollouts are safer than big-bang changes</li>


<li><strong>Test thoroughly</strong>: Our extensive testing caught issues before they reached production</li>

</ol>



<p>If you're considering a similar migration, we hope our experience helps guide your approach.</p>



<hr>



<p><em>Read the original article on the <a href="https://dropbox.tech/frontend/migrating-from-underscore-to-lodash">Dropbox Tech Blog</a></em></p>
`.trim(),
  tags: ['Tech', 'javascript', 'dropbox'],
  banner_img:
    '/images/blog/migrating-from-underscore-to-lodash/underscore-lodash-train.jpg',
  wordCount: 909,
};

export default post;
