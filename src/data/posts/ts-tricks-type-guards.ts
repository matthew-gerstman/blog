import type { Post } from '../types/posts.types';

const post: Post = {
  id: 4,
  slug: 'ts-tricks-type-guards',
  title: 'TS Tricks: Type Guards',
  date: 'January 23, 2019',
  excerpt:
    "With everyone getting excited about Typescript I thought it'd be fun to do a walkthrough of one of my favorite features, type guards. These are type-safe functions that allow us to assert that an argu",
  content: `
<p>With everyone getting excited about Typescript I thought it'd be fun to do a walkthrough of one of my favorite features, <strong>type guards. </strong>These are type-safe functions that allow us to assert that an argument matches a certain type. The best part is these work at runtime!</p>
<p>Let's start with a basic example below:</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/0e70421835c3fcc14c9151a8d34d1eed.js"></script>
<!--kg-card-end: html-->
<p>We've declared some interfaces here: <code>Person</code>, <code>Wizard</code>, and <code>Muggle</code>. <code>Wizard</code> and <code>Muggle</code> are both instances of <code>Person</code>, however they have an extra property. Pretty standard so far.</p>
<p>But now let's create a type guard!</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/9f079fa3524a9c9b0f78a0e82b6c2f23.js"></script>
<!--kg-card-end: html-->
<p>We now have functions called <code>isWizard</code> and <code>isMuggle</code>. These functions return a boolean at runtime, but in Typescript land they return <code>person is Wizard</code> or <code>person is Muggle</code>. &nbsp;At compile time we'll get static type checking on our instances.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/ea79189fee729dbfa5607ca4d1625a79.js"></script>
<!--kg-card-end: html-->
<p>These functions are all 100% type-safe. In fact, if we were to try to get spells off a <code>Muggle</code> we would get a type error.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/f07d362eb60a5981a4404a77b4e8400f.js"></script>
<!--kg-card-end: html-->
<p>These functions always return the right thing because we have validation at both runtime and compile time. It's basically a free unit test! </p>
<p>Note: It's <em>one</em> free unit test per function, you should write others.</p>
<p>Let's make this more complicated now, let's extend <code>Wizard</code>.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/f2899f9720f277f1c54a45ec528bd78d.js"></script>
<!--kg-card-end: html-->
<p>Now each <code>Wizard</code> has a <code>house</code> property for a Hogwarts house. Just like before we could make new interfaces for each house.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/231f405cb2d526e232102dc1113054d5.js"></script>
<!--kg-card-end: html-->
<p>And once again, we can make simple type guards for each house. But this time we'll also reuse our <code>isWizard</code> guard. After all, only wizards can go to Hogwarts!</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/b201ff33316b4dd51d0de74769f9f549.js"></script>
<!--kg-card-end: html-->
<p>Let's have some fun now, let's throw together a makeshift datastore and do some functional programming. If you're new to FP you can check out my <a href="http://matthewgerstman.com/functional-programming-fundamentals/">previous article here</a>.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/ee14f44a05c33d0b89d6ed45ccfd9e25.js"></script>
<!--kg-card-end: html-->
<p>Now we have an array of people. These people may or may not be Wizards and their Hogwarts houses vary. </p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/76ec3695c4cc6a5fb0bea0375f756f2a.js"></script>
<!--kg-card-end: html-->
<p>We can now make functions that <code>filter</code> over the list of people and return the ones that match a type.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/4ec5f1bf68038a83cf8dc1dbf835c4dc.js"></script>
<!--kg-card-end: html-->
<p>We can also combine these with a <code>map</code> to get data we care about.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/1f879a3c4b038e0875d6b7b09b2b1a20.js"></script>
<!--kg-card-end: html-->
<p>If these look like redux selectors, it's because this pattern is very commonly used to get data out of a typed redux store. If you want to know more about that, I wrote an article about <a href="http://matthewgerstman.com/redux-code-split-typecheck/">building a typed and code-split</a> redux store.</p>
`.trim(),
  tags: ['Tech', 'typescript'],
  banner_img: '/images/blog/ts-tricks-type-guards/type-guards-hero.jpg',
  heroImage: '',
  wordCount: 373,
};

export default post;
