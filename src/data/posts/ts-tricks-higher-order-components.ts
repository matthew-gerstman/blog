import type { Post } from '../types/posts.types';

const post: Post = {
  id: 6,
  slug: 'ts-tricks-higher-order-components',
  title: 'TS Tricks: Higher Order Components',
  date: 'January 27, 2019',
  excerpt: '',
  content: `
<p>Higher order components are a useful pattern for creating composable logic within a React application. While they're not as popular as other tools like render props or hooks, they're still worth knowing.</p>
<p>How do higher order components work? Well as we discussed in <a href="/writing/functional-programming-fundamentals">Functional Programming Fundamentals</a>, higher order functions take a function as an argument and/or returns an argument as it's result.</p>
<p>In this case, higher order components are functions that take a component as an argument and return a new supercharged component as a result. This poses an interesting problem for typing.</p>
<p>We want to expose a component that only needs require the props <em>not</em> provided by the HOC, but we still want to be able to access the original uncomposed component.</p>
<p>Let's walk through an example.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/343b3bb2726bb1b63c80406ecca419c8.js"></script>
<!--kg-card-end: html-->
<p>We start with a super basic component, <code>TomRiddle</code>. Now it matters not what someone is born, but what they chose to be. <code>TomRiddle</code> takes an <code>isEvil</code> prop that determines if it renders "Tom Marvolo Riddle" or "I am Lord Voldemort".</p>
<p>Tom isn't such a great guy and wants to learn how to make horcruxes. How do we teach him? Well we could make him into a class component and add some state. Let's see what that looks like.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/1fa3633692b86a5be34229777d0cae1d.js"></script>
<!--kg-card-end: html-->
<p>This totally works. We've taught Tom how to make horcruxes. Now Tom wants to recruit some followers, he calls those Death Eaters. Let's add another prop for those. While we're at it, let's derive <code>isEvil</code> &nbsp;from the number of horcruxes the wizard has. </p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/008edec62ba9f1a661910071327e554e.js"></script>
<!--kg-card-end: html-->
<p>Now this component is doing a bit too much. It's rendering to the DOM and it's managing state. Also, anyone can learn to make horcruxes, what if we take that functionality and make it into a higher order component. </p>
<p>Before we get to typing this, let's take a look at what this would look like in vanilla JS.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/9f09e9aed1cc76125902ddbf58e1ad37.js"></script>
<!--kg-card-end: html-->
<p><code>EvilWizard</code> is a function that takes a component, <code>Wizard</code>, and passes that component the following props <code>numHorcruxes</code>, and <code>makeHorcrux</code>. It also manages this state for them.</p>
<p>Now, two minor gotchas with HOCs, we need to set the <code>displayName</code> and <code>hoistNonReactStatics</code>.</p>
<p>Okay now let's type this thing. </p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/984fd1a6f9473dca0bb9004ee66b5438.js"></script>
<!--kg-card-end: html-->
<p>What's going on here? A lot actually. Let's break it down. We export a type called <code>WithEvilWizardProps</code>. This type takes <code>T</code>, a generic, and returns an intersection type of <code>T</code> and <code>EvilWizardInnerProps</code>.</p>
<p>The function <code>EvilWizard</code> takes a <code>Wizard</code> that is either a <code>ComponentClass</code> or a <code>FunctionComponent</code>. The props of this component is of type <code>EvilWizardInnerProps &amp; T</code>. Now here's the real magic. The component we're returning is a class of type <code>React.ComponentClass&lt;T&gt;</code>. </p>
<p>What does this mean? Well because we're using an intersection type, Typescript is smart enough to unpack this and return a component that only requires the props <strong>not</strong> provided by the HOC.</p>
<p>One last thing, let's update <code>TomRiddle</code> to use this new HOC.</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/12e3e8ed7234df320490df373841a091.js"></script>
<!--kg-card-end: html-->
<p>We've now extracted all that state back out and we're using <code>WithEvilWizardProps</code> when declaring <code>TomRiddleProps</code>. Now let's use our components!</p>
<!--kg-card-begin: html-->
<script src="https://gist.github.com/matthew-gerstman/f63c4028e796863f55f991bb815b5ce0.js"></script>
<!--kg-card-end: html-->
<p>As you can see above, we have the option of using <code>LordVoldemort</code> the output of <code>EvilWizard(TomRiddle)</code> or we can just call <code>TomRiddle</code> directly. This is particularly useful if you want to test the behavior of the inner component without the HOC.</p>
`.trim(),
  tags: ['Tech'],
  banner_img:
    '/images/blog/ts-tricks-higher-order-components/higher-order-components-hero.jpg',
  heroImage: '',
  wordCount: 529,
};

export default post;
