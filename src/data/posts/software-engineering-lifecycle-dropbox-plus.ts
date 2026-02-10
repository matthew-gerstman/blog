import type { Post } from '../types/posts.types';

const post: Post = {
  id: 22,
  slug: 'software-engineering-lifecycle-dropbox-plus',
  title:
    'The Software Engineering Lifecycle: How We Built the New Dropbox Plus',
  date: 'September 15, 2020',
  excerpt:
    'A behind-the-scenes look at building Dropbox Plus, from problem scoping through launch, covering team dynamics, technical decisions, and lessons learned.',
  content: `
<p><em>Originally published on the <a href="https://dropbox.tech/frontend/the-software-engineering-lifecycle--how-we-built-the-new-dropbox">Dropbox Tech Blog</a></em></p>



<p><strong>By Matthew Gerstman • September 15, 2020</strong></p>



<p>A few weeks ago, we released <a href="https://blog.dropbox.com/topics/product-tips/new-dropbox-helps-manage-work-and-home">a whole bunch of new features</a> to Dropbox Plus, our paid plan for personal users. While we started as a storage company, we've grown to be a hub to manage your digital life. About 150 people worked on this launch: engineers, product managers, designers, copywriters, and many more.</p>



<p>Through a combination of luck and happenstance, I was fortunate enough to touch almost every part of this launch. I got to see how different teams work, as I joined each at different stages of the software engineering lifecycle.</p>



<p>In this post I'll distill my experience working on different parts of the launch, and discuss how we think about building software. I'll go into a few technical details, but mostly focus on how teams organize and operate.</p>



<h2>Problem Scoping</h2>



<p>Toward the end of 2019 we had a realization: while we had built incredible new products for our professional users like the <a href="https://blog.dropbox.com/topics/product-tips/new-dropbox">new Dropbox</a> and <a href="https://www.dropbox.com/transfer">Dropbox Transfer</a>, it had been a while since we delivered new value to our personal users.</p>



<p>We set out to change that. We put together a team focused exclusively on helping personal users manage their digital lives. At the time we didn't know how much those lives and needs would change the year to come, but in hindsight our timing was great.</p>



<p>Our contract with our customers is simple: We build products that people like so much that millions of them pay for it. As a rule, we aspire to be worthy of trust in all situations. You are our customer, not our product.</p>



<p>Merging our mission and our values, we came up with a simple plan: ship a bunch of timely, useful features to our most loyal users. After a lot of discussion about what to build, we came up with the new Dropbox Plus.</p>



<p>We knew our users wanted <a href="https://www.dropbox.com/features/cloud-storage/computer-backup">computer backup</a>. This was finally possible thanks to our <a href="https://dropbox.tech/infrastructure/rewriting-the-heart-of-our-sync-engine">brand new sync engine</a>, which we had just finished rolling out in June.</p>



<p>We did weeks of customer research and learned that users wanted a handful of specific new features from us. They wanted a special folder where they could store their most important files, this became <strong>Vault</strong>. They wanted to be able to rewind their entire Dropbox to recover from ransomware or accidental deletion, this became <strong>Rewind</strong>. They wanted a way to track down and free up space on their computer, this became <strong>Computer Backup</strong>.</p>



<h3>Family</h3>



<p>One feature stood out as particularly important: <strong>Family</strong>. We learned that many of our users were sharing their personal Dropbox accounts with family members. They'd share credentials, which was both insecure and inconvenient.</p>



<p>We decided to build a proper family plan. Each family member would get their own account with their own space, but they'd all be on one subscription. We'd build a special shared folder that the whole family could access.</p>



<h2>Plan Before Coding</h2>



<p>Before writing any code, we spent significant time in planning. This is critical for large projects with many dependencies.</p>



<p>We held design reviews where designers presented mockups and gathered feedback. We held technical design reviews where engineers proposed architectures and discussed tradeoffs. We wrote detailed specs outlining exactly what we'd build.</p>



<p>This upfront investment paid off. When we finally started coding, everyone knew what they were building and why.</p>



<h3>Team Dynamics</h3>



<p>Large projects require careful coordination between many teams. For Dropbox Plus, we had:</p>



<ul>

<li><strong>Desktop client team</strong>: Building the backup and sync features</li>


<li><strong>Web team</strong>: Building the web UI for all features</li>


<li><strong>API team</strong>: Building the backend services</li>


<li><strong>Vault team</strong>: Building the secure folder feature</li>


<li><strong>Rewind team</strong>: Building the recovery feature</li>


<li><strong>Family team</strong>: Building the family plan feature</li>

</ul>



<p>Each team had its own engineering lead, product manager, and designer. We held weekly syncs to keep everyone aligned.</p>



<h2>Speeding Up Development</h2>



<p>One of the biggest challenges in large projects is maintaining velocity. As teams grow and dependencies multiply, it's easy to slow down.</p>



<p>We used several strategies to stay fast:</p>



<ol>

<li><strong>Clear ownership</strong>: Each feature had a single team responsible for it</li>


<li><strong>Parallel workstreams</strong>: Teams worked independently where possible</li>


<li><strong>Integration points</strong>: We defined clear interfaces between systems early</li>


<li><strong>Regular demos</strong>: Teams showed progress weekly to catch issues early</li>


<li><strong>Automated testing</strong>: Comprehensive test coverage gave us confidence to move fast</li>

</ol>



<h3>Milestones</h3>



<p>We broke the project into clear milestones:</p>



<ol>

<li><strong>Internal Alpha</strong>: Get it working for Dropbox employees</li>


<li><strong>External Beta</strong>: Invite a small group of users to test</li>


<li><strong>Gradual Rollout</strong>: Slowly expand to all users</li>


<li><strong>General Availability</strong>: Launch to everyone</li>

</ol>



<p>Each milestone had specific success criteria. We wouldn't move to the next phase until we met them.</p>



<h2>Internal Alpha: Dogfooding</h2>



<p>Before releasing to users, we released to Dropbox employees. We call this "dogfooding" - eating our own dog food.</p>



<p>This was incredibly valuable. Employees found bugs, suggested improvements, and stress-tested the features in real-world scenarios. We got feedback from hundreds of internal users before a single external user saw the product.</p>



<p>The feedback was sometimes brutal but always helpful. Engineers on other teams would file detailed bug reports. Executives would question design decisions. Everyone had opinions, and we listened to all of them.</p>



<h3>Onboarding a new teammate</h3>



<p>Midway through the project, I joined the Vault team. Vault was the secure folder feature - a special folder that required an additional PIN to access.</p>



<p>The very first thing I did was set up a 1:1 with each and every person with whom I'd be working. We had engineers working on locking/unlocking the folder, serving APIs, updating the desktop app, and working on the existing frontend. We also had a product manager and a designer.</p>



<p>I knew it was important to establish these relationships early on if I were to become an effective member of the team.</p>



<h3>Joining Vault</h3>



<p>When I joined Vault, the team had already been working for months. They had working prototypes, clear designs, and a solid technical plan.</p>



<p>My job was to build the web frontend. I needed to create the UI for setting up Vault, accessing it, and managing it.</p>



<p>I started by reviewing all the existing design docs and technical specs. I attended the team's daily standups and weekly planning meetings. I paired with other engineers to understand the codebase.</p>



<p>Within two weeks, I had shipped my first feature: the Vault setup flow. Within a month, I was a fully productive member of the team.</p>



<h2>Class Dismissed</h2>



<p>By this point in the project, we were deep into implementation. The initial planning phase was over. Now it was all about execution.</p>



<p>We held these 1:1s over Zoom as soon as the company had sent us all to work from home, rather than waiting until April. It was a shift for everyone but it worked. Over time I figured out who I'd be working with the most. I set up weekly 1:1s with them to make sure we stayed in sync from afar.</p>



<h3>Shipping Our Team Coding Standards</h3>



<p>As I worked on Vault, I noticed our team had different coding styles. Some engineers preferred functional programming, others object-oriented. Some wrote detailed comments, others preferred self-documenting code.</p>



<p>I proposed we establish team coding standards. We held a meeting where everyone shared their preferences, then we voted on contentious points.</p>



<p>The result was a document outlining our team's conventions. It wasn't perfect, but it gave us consistency. New code looked like it was written by one person, not five.</p>



<h3>Nothing's Perfect</h3>



<p>During Vault development, we experimented with a new internal technology called API-QL, a GraphQL-like query language for our internal APIs.</p>



<p>It worked well in theory, but in practice it added complexity without enough benefit for our use case. After a few weeks, we decided to switch back to our standard REST APIs.</p>



<p>There was an important lesson here: Ideas that work flawlessly on one project might not transfer to another. API-QL is a fantastic technology and we're continuing to invest in it, but it wasn't the right fit for this project at this time.</p>



<h3>Reflecting</h3>



<p>Looking back, the key to our success was balance:</p>



<ul>

<li>Balance between planning and execution</li>


<li>Balance between speed and quality</li>


<li>Balance between individual autonomy and team coordination</li>


<li>Balance between shipping fast and getting it right</li>

</ul>



<p>We didn't always get the balance right, but we kept adjusting until we did.</p>



<h2>Entrypoints</h2>



<p>One technical challenge worth highlighting: entrypoints.</p>



<p>Dropbox has a massive web codebase. To keep page load times fast, we split our JavaScript into many small bundles. Each page loads only the code it needs.</p>



<p>For Dropbox Plus, we added many new pages: Vault setup, Rewind UI, Family management, etc. Each needed its own entrypoint.</p>



<p>We used Webpack's code splitting to create these entrypoints automatically. When a user navigated to a new page, we'd load just the code for that page. This kept our bundle sizes small and our app fast.</p>



<p>We also used dynamic imports to load code on-demand. For example, the Vault PIN entry dialog was loaded only when a user tried to access their Vault. This saved bandwidth for users who never used the feature.</p>



<p>The result: despite adding significant new functionality, our page load times actually improved.</p>



<h2>Conclusion</h2>



<p>Building Dropbox Plus was a massive undertaking. It required coordination between dozens of teams, careful planning, and disciplined execution.</p>



<p>The key lessons I learned:</p>



<ol>

<li><strong>Plan thoroughly before coding</strong>: The upfront investment pays off</li>


<li><strong>Break large projects into milestones</strong>: Celebrate progress along the way</li>


<li><strong>Dogfood your own products</strong>: Internal testing catches issues early</li>


<li><strong>Establish clear team norms</strong>: Consistency makes collaboration easier</li>


<li><strong>Stay flexible</strong>: Be willing to change course when something isn't working</li>


<li><strong>Build relationships</strong>: 1:1s and regular communication are critical</li>


<li><strong>Optimize for speed</strong>: Technical decisions should enable fast iteration</li>

</ol>



<p>If you're working on a large software project, I hope these lessons help you ship something great.</p>



<hr>



<p><em>Read the original article on the <a href="https://dropbox.tech/frontend/the-software-engineering-lifecycle--how-we-built-the-new-dropbox">Dropbox Tech Blog</a></em></p>
`.trim(),
  tags: ['Tech', 'dropbox', 'product'],
  banner_img:
    '/images/blog/software-engineering-lifecycle-dropbox-plus/dropbox-plus-hero.jpg',
  wordCount: 1639,
};

export default post;
