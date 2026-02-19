import type { Post } from '../types/posts.types';

const post: Post = {
  id: 11,
  slug: 'map-filter-reduce',
  title: 'Map, Filter, Reduce',
  date: 'March 03, 2019',
  excerpt:
    "In this article we'll go back to basics and cover three of the most important functions in functional programming, map, filter, and reduce.",
  content: `
<p>In this article we'll go <a href="/writing/functional-programming-fundamentals">back to basics</a> and cover three of the most important functions in <a href="/writing/functional-programming-fundamentals">functional programming</a>, map, filter, and reduce.</p>
<p>All three of these are useful functions for iterating over a list (or array) and doing some kind of transformation or computation. This will then produce a new list or the result of the computation done across the previous list.</p>
<h1 id="types">Types</h1>
<p>Before we dive into map, filter, and reduce, let's set up the list.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const enum House {
  Gryffindor = "Gryffindor",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
  Slytherin = "Slytherin"
}

type Wizard = {
  name: string;
  house: House;
  points: number;
};</code></pre>
<!--kg-card-end: html-->
<p>As per usual, we're going to be operating on wizards. Each wizard object has a name, a house, and the number of points they've earned for their house. Let's declare a bunch of wizards and put them in a list.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const HarryPotter: Wizard = {
  name: "Harry Potter",
  house: House.Gryffindor,
  points: 40
};

const HermioneGranger: Wizard = {
  name: "Hermione Granger",
  house: House.Gryffindor,
  points: 140
};

const DracoMalfoy: Wizard = {
  name: "Draco Malfoy",
  house: House.Slytherin,
  points: -20
};

const TaylorSwift: Wizard = {
  name: "Taylor Swift",
  house: House.Slytherin,
  points: 100
};

const LinManuelMiranda: Wizard = {
  name: "Lin Manuel Miranda",
  house: House.Slytherin,
  points: 5000
};

const CedricDiggory: Wizard = {
  name: "Cedric Diggory",
  house: House.Hufflepuff,
  points: 12
};

const SallyPerks: Wizard = {
  name: "Sally Perks",
  house: House.Hufflepuff,
  points: 15
};

const LunaLovegood: Wizard = {
  name: "Luna Lovegood",
  house: House.Ravenclaw,
  points: 100
};

const ChoChang: Wizard = {
  name: "Cho Chang",
  house: House.Ravenclaw,
  points: 100
};

const wizards: Wizard[] = [
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
<!--kg-card-end: html-->
<h1 id="map-function map() { [native code] }1">Map</h1>
<p>Now that we've got the boilerplate out of the way, let's dive in. The first function is the simplest one, map. Map iterates (or loops) over a list, applies a function to each item in that list and then returns a new list of the transformed items. Let's look at an example.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const wizardNames = wizards.map(wizard => wizard.name);</code></pre>
<!--kg-card-end: html-->
<p>This function iterates over the list of wizards, gets their name, and puts it into a new array. The result of this looks something like this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">[
  "Harry Potter",
  "Hermione Granger",
  "Draco Malfoy",
  "Lin Manuel Miranda",
  "Taylor Swift",
  "Cedric Diggory",
  "Sally Perks",
  "Luna Lovegood",
  "Cho Chang"
];</code></pre>
<!--kg-card-end: html-->
<p>Now in this example we were using a <a href="/writing/mary-had-a-little-lambda">lambda</a> (aka an anonymous function), but we can also use a named function.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">function wizardToString({ name, house, points }: Wizard) {
  return \`\${name}, \${house}, \${points}\`;
}
const wizardStrings = wizards.map(wizardToString);
</code></pre>
<!--kg-card-end: html-->
<p>In this example we have a function called <code>wizardToString</code> and we pass that directly to map. It will then return a new list that looks like this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">[
  "Harry Potter, Gryffindor, 40",
  "Hermione Granger, Gryffindor, 140",
  "Draco Malfoy, Slytherin, -20",
  "Lin Manuel Miranda, Slytherin, 5000",
  "Taylor Swift, Slytherin, 100",
  "Cedric Diggory, Hufflepuff, 12",
  "Sally Perks, Hufflepuff, 15",
  "Luna Lovegood, Ravenclaw, 100",
  "Cho Chang, Ravenclaw, 100"
];</code></pre>
<!--kg-card-end: html-->
<h1 id="filter-function filter() { [native code] }1">Filter</h1>
<p>Next up is filter. Filter behaves like map in that it iterates over the list, but it instead of transforming each item, it transforms the whole list. Filter takes a function that returns true or false or <a href="/writing/mary-had-a-little-lambda">predicate</a>. It then returns a new list with items where the predicate returns <code>true</code>. Let's look at an example.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const slytherins = wizards.filter(wizard => wizard.house === House.Slytherin);</code></pre>
<!--kg-card-end: html-->
<p>In this example we filter over the list and only include wizards who are in the house Slytherin. The result would be this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">[
  { name: "Draco Malfoy", house: "Slytherin", points: -20 },
  { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
  { name: "Taylor Swift", house: "Slytherin", points: 100 }
];</code></pre>
<!--kg-card-end: html-->
<p>As an aside, Taylor and Lin are two of the most acclaimed Slytherins of our day.</p>
<p>Just like with map, we don't need to use a <a href="/writing/mary-had-a-little-lambda">lambda</a>, we can also use a predefined function.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">function isWinner({ points }: Wizard) {
  return points > 0;
}
function isLoser(wizard: Wizard) {
  return !isWinner(wizard);
}
const winners = slytherins.filter(isWinner);
const losers = slytherins.filter(isLoser);
</code></pre>
<!--kg-card-end: html-->
<p>In this example we make two lists, the list of Slytherins who have earned points (winners), and the list of Slytherins who have lost points (losers). We can see those results below.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const winnersResult = [
  { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
  { name: "Taylor Swift", house: "Slytherin", points: 100 }
];
const losersResult = [
  { name: "Draco Malfoy", house: "Slytherin", points: -20 }
];</code></pre>
<!--kg-card-end: html-->
<h1 id="reduce-function reduce() { [native code] }1">Reduce</h1>
<p>Now we get to the most interesting function, reduce. Reduce iterates over a list and produces a single value. Let's look at an example.</p>
<p>Suppose we want to get the total number of points across all wizards. We can use reduce to do that.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const totalPoints = wizards.reduce(
  (accumulator, { points }) => accumulator + points,
  0
);</code></pre>
<!--kg-card-end: html-->
<p>What's going on here? Well reduce is a function that takes two arguments, a function and an initial value for the accumulator. The accumulator is the name of the thing reduce returns. In this case we start our point count at 0.</p>
<p>Now the function takes the current state of the accumulator and the item in the list it's supposed to process. For the first wizard, it will pass 0 for the accumulator. This function then returns <code>accumulator + points</code>. This will eventually sum up all the points. If you're curious, the result is 5487.</p>
<p>Now the accumulator can be anything, we can even use reduce to produce an object. Let's look at an example where we add up the points for each house.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const pointsPerHouse = wizards.reduce((acc, { house, points }) => {
  if (!acc[house]) {
    acc[house] = 0;
  }
  acc[house] += points;
  return acc;
}, {});</code></pre>
<!--kg-card-end: html-->
<p>In this case, we initialize our accumulator or <code>acc</code> with <code>{}</code>. Then for each wizard we call a function that adds the number of points that wizard has earned for their house. If you're curious that result looks like this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">{
  Gryffindor: 180,
  Slytherin: 5080,
  Hufflepuff: 27,
  Ravenclaw: 200
};</code></pre>
<!--kg-card-end: html-->
<p>Let's look at one more example, let's say we want the best wizard for each house. We can tweak our previous function to use the best wizard for each house.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const bestPerHouse = wizards.reduce((acc, wizard) => {
  const { house, points } = wizard;
  if (!acc[house]) {
    acc[house] = wizard;
  }

  if (acc[house].points < points) {
    acc[house] = wizard;
  }

  return acc;
}, {});</code></pre>
<!--kg-card-end: html-->
<p>If you're curious, the result of that looks like this.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">{
  Gryffindor: { name: "Hermione Granger", house: "Gryffindor", points: 140 },
  Slytherin: { name: "Lin Manuel Miranda", house: "Slytherin", points: 5000 },
  Hufflepuff: { name: "Sally Perks", house: "Hufflepuff", points: 15 },
  Ravenclaw: { name: "Luna Lovegood", house: "Ravenclaw", points: 100 }
};</code></pre>
<!--kg-card-end: html-->
<p>Just a little more fun now, we can use <code>Object.values</code> to transform this map.</p>
<!--kg-card-begin: html-->
<pre><code class="language-typescript">const bestNamesPerHouse = Object.values(bestPerHouse).map(wizardToString);
[
  "Hermione Granger, Gryffindor, 140",
  "Lin Manuel Miranda, Slytherin, 5000",
  "Sally Perks, Hufflepuff, 15",
  "Luna Lovegood, Ravenclaw, 100"
];
</code></pre>
<!--kg-card-end: html-->
<p>Now we have nice strings for the best person in each house.</p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>Hopefully you're more comfortable with map, filter, and reduce now. If you'd like a deeper dive into practical FP check out my article, <a href="http://matthewgerstman.com/functional-programming-fundamentals/"><strong>Functional Programming Fundamentals</strong></a>.</p>
<p>If you're looking for more abstract stuff check out <a href="/writing/what-the-functor"><strong>What the Functor?</strong></a><strong> </strong>and <strong><a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda.</a> </strong></p>
<p>Also if you feel the need to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
`.trim(),
  tags: ['Tech', 'functional-programming'],
  banner_img: '/images/blog/map-filter-reduce/map-filter-reduce-hero.jpg',
  heroImage: '',
  wordCount: 1227,
};

export default post;
