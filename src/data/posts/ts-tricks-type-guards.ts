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
<pre><code class="language-typescript">enum PersonType {
  Muggle = &#x27;Muggle&#x27;,
  Wizard = &#x27;Wizard&#x27;,
}

interface Person {
  type: PersonType;
  name: string;
}

interface Wizard extends Person {
  type: PersonType.Wizard;
  spells: string[];
}

interface Muggle extends Person {
  type: PersonType.Muggle;
  dursley: boolean;
}
</code></pre>
<p>We've declared some interfaces here: <code>Person</code>, <code>Wizard</code>, and <code>Muggle</code>. <code>Wizard</code> and <code>Muggle</code> are both instances of <code>Person</code>, however they have an extra property. Pretty standard so far.</p>
<p>But now let's create a type guard!</p>
<pre><code class="language-typescript">function isWizard(person: Person): person is Wizard {
  return person.type === PersonType.Wizard;
}

function isMuggle(person: Person): person is Muggle {
  return person.type === PersonType.Muggle;
}
</code></pre>
<p>We now have functions called <code>isWizard</code> and <code>isMuggle</code>. These functions return a boolean at runtime, but in Typescript land they return <code>person is Wizard</code> or <code>person is Muggle</code>. &nbsp;At compile time we'll get static type checking on our instances.</p>
<pre><code class="language-typescript">function getSpellsForPerson(person: Person) {
  if (!isWizard(person)) {
    return [];
  }
  return person.spells;
}

function isDursley(person: Person) {
  if (!isMuggle(person)) {
    return false;
  }
  return person.dursley;
}
</code></pre>
<p>These functions are all 100% type-safe. In fact, if we were to try to get spells off a <code>Muggle</code> we would get a type error.</p>
<pre><code class="language-typescript">const HarryPotter: Wizard = {
  type: PersonType.Wizard,
  name: &#x27;Harry Potter&#x27;,
  spells: [&#x27;Expelliarmus&#x27;, &#x27;Expecto Patronum&#x27;, &#x27;Imperio&#x27;],
};

const DudleyDursely: Muggle = {
  type: PersonType.Muggle,
  name: &#x27;Dudley Dursley&#x27;,
  dursley: true,
};

getSpellsForPerson(HarryPotter);
// [&#x27;Expelliarmus&#x27;, &#x27;Expecto Patronum&#x27;, &#x27;Imperio&#x27;]
getSpellsForPerson(DudleyDursely);
// []

isDursley(HarryPotter);
// false
isDursley(DudleyDursely);
// true
</code></pre>
<p>These functions always return the right thing because we have validation at both runtime and compile time. It's basically a free unit test! </p>
<p>Note: It's <em>one</em> free unit test per function, you should write others.</p>
<p>Let's make this more complicated now, let's extend <code>Wizard</code>.</p>
<pre><code class="language-typescript">enum HogwartsHouse {
  &#x27;Slytherin&#x27;,
  &#x27;Ravenclaw&#x27;,
  &#x27;Hufflepuff&#x27;,
  &#x27;Gryffindor&#x27;,
}

interface Wizard extends Person {
  type: PersonType.Wizard;
  spells: string[];
  house: HogwartsHouse;
}
</code></pre>
<p>Now each <code>Wizard</code> has a <code>house</code> property for a Hogwarts house. Just like before we could make new interfaces for each house.</p>
<pre><code class="language-typescript">interface Slytherin extends Wizard {
  house: HogwartsHouse.Slytherin;
  darkArts: string[];
}

interface Ravenclaw extends Wizard {
  house: HogwartsHouse.Ravenclaw;
  extraKnowledge: string[];
}

interface Hufflepuff extends Wizard {
  house: HogwartsHouse.Hufflepuff;
  badgerFriends: string[];
}

interface Gryffindor extends Wizard {
  house: HogwartsHouse.Gryffindor;
  peopleLoyalTo: string[];
}
</code></pre>
<p>And once again, we can make simple type guards for each house. But this time we'll also reuse our <code>isWizard</code> guard. After all, only wizards can go to Hogwarts!</p>
<pre><code class="language-typescript">function isGryffindor(person: Person): person is Gryffindor {
  return isWizard(person) &amp;&amp; person.house === HogwartsHouse.Gryffindor;
}

function isRavenclaw(person: Person): person is Ravenclaw {
  return isWizard(person) &amp;&amp; person.house === HogwartsHouse.Ravenclaw;
}

function isSlytherin(person: Person): person is Slytherin {
  return isWizard(person) &amp;&amp; person.house === HogwartsHouse.Slytherin;
}

function isHufflepuff(person: Person): person is Hufflepuff {
  return isWizard(person) &amp;&amp; person.house === HogwartsHouse.Hufflepuff;
}
</code></pre>
<p>Let's have some fun now, let's throw together a makeshift datastore and do some functional programming. If you're new to FP you can check out my <a href="http://matthewgerstman.com/functional-programming-fundamentals/">previous article here</a>.</p>
<pre><code class="language-typescript">const HarryPotter: Gryffindor = {
  type: PersonType.Wizard,
  name: &#x27;Harry Potter&#x27;,
  spells: [&#x27;Expelliarmus&#x27;, &#x27;Expecto Patronum&#x27;, &#x27;Imperio&#x27;],
  house: HogwartsHouse.Gryffindor,
  peopleLoyalTo: [&#x27;Ronald Weasley&#x27;, &#x27;Hermione Granger&#x27;],
};

const DracoMalfoy: Slytherin = {
  type: PersonType.Wizard,
  name: &#x27;Draco Malfoy&#x27;,
  spells: [&#x27;Serpensortia&#x27;],
  house: HogwartsHouse.Slytherin,
  darkArts: [&#x27;Crucio&#x27;, &#x27;Avada Kedavra&#x27;],
};

const CedricDiggory: Hufflepuff = {
  type: PersonType.Wizard,
  name: &#x27;Cedric Diggory&#x27;,
  spells: [&#x27;Transfiguring Things&#x27;],
  house: HogwartsHouse.Hufflepuff,
  badgerFriends: [&#x27;Wayne&#x27;],
};

const LunaLovegood: Ravenclaw = {
  type: PersonType.Wizard,
  name: &#x27;Luna Lovegood&#x27;,
  spells: [&#x27;Expecto Patronum&#x27;],
  house: HogwartsHouse.Ravenclaw,
  extraKnowledge: [&#x27;&#x27;],
};

const DudleyDursely: Muggle = {
  type: PersonType.Muggle,
  name: &#x27;Dudley Dursley&#x27;,
  dursley: true,
};

const PetuniaDursely: Muggle = {
  type: PersonType.Muggle,
  name: &#x27;Petunia Dursley&#x27;,
  dursley: true,
};

const FrankBryce: Muggle = {
  type: PersonType.Muggle,
  name: &#x27;Frank Bryce&#x27;,
  dursley: false,
};

const people: Person[] = [
  CedricDiggory,
  DracoMalfoy,
  DudleyDursely,
  FrankBryce,
  HarryPotter,
  LunaLovegood,
  PetuniaDursely,
];
</code></pre>
<p>Now we have an array of people. These people may or may not be Wizards and their Hogwarts houses vary. </p>
<pre><code class="language-typescript">function getGryffindors(people: Person[]) {
  return people.filter(isGryffindor);
}
function getRavenclaws(people: Person[]) {
  return people.filter(isRavenclaw);
}
function getHufflepuffs(people: Person[]) {
  return people.filter(isHufflepuff);
}
function getSlytherins(people: Person[]) {
  return people.filter(isSlytherin);
}
</code></pre>
<p>We can now make functions that <code>filter</code> over the list of people and return the ones that match a type.</p>
<pre><code class="language-typescript">getGryffindors(people);
// [{
//   type: PersonType.Wizard,
//   name: &#x27;Harry Potter&#x27;,
//   spells: [&#x27;Expelliarmus&#x27;, &#x27;Expecto Patronum&#x27;, &#x27;Imperio&#x27;],
//   house: HogwartsHouse.Gryffindor,
//   peopleLoyalTo: [&#x27;Ronald Weasley&#x27;, &#x27;Hermione Granger&#x27;],
// }]
getRavenclaws(people);
// [{
//   type: PersonType.Wizard,
//   name: &#x27;Luna Lovegood&#x27;,
//   spells: [&#x27;Expecto Patronum&#x27;],
//   house: HogwartsHouse.Ravenclaw,
//   extraKnowledge: [&#x27;&#x27;],
// }]

getHufflepuffs(people);
// [{
//   type: PersonType.Wizard,
//   name: &#x27;Cedric Diggory&#x27;,
//   spells: [&#x27;Transfiguring Things&#x27;],
//   house: HogwartsHouse.Hufflepuff,
//   badgerFriends: [&#x27;Wayne&#x27;],
// }]
getSlytherins(people);
// [{
//   type: PersonType.Wizard,
//   name: &#x27;Draco Malfoy&#x27;,
//   spells: [&#x27;Serpensortia&#x27;],
//   house: HogwartsHouse.Slytherin,
//   darkArts: [&#x27;Crucio&#x27;, &#x27;Avada Kedavra&#x27;],
// }]
</code></pre>
<p>We can also combine these with a <code>map</code> to get data we care about.</p>
<pre><code class="language-typescript">function getName(person: Person) {
  return person.name;
}

function getNamesOfWizards(people: Person[]) {
  return people.filter(isWizard).map(getName);
}

function getNamesOfMuggles(people: Person[]) {
  return people.filter(isMuggle).map(getName);
}

getNamesOfWizards(people);
// [&#x27;Harry Potter&#x27;, &#x27;Cedric Diggory&#x27;, &#x27;Draco Malfoy&#x27;, &#x27;Luna Lovegood&#x27;]
getNamesOfMuggles(people);
// [&#x27;Dudley Dursely&#x27;, &#x27;Petunia Dursely&#x27;, &#x27;Frank Bryce&#x27;]
</code></pre>
<p>If these look like redux selectors, it's because this pattern is very commonly used to get data out of a typed redux store. If you want to know more about that, I wrote an article about <a href="http://matthewgerstman.com/redux-code-split-typecheck/">building a typed and code-split</a> redux store.</p>
`.trim(),
  tags: ['Tech', 'typescript'],
  banner_img: '/images/blog/ts-tricks-type-guards/type-guards-hero.jpg',
  heroImage: '',
  wordCount: 912,
};

export default post;
