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
<pre><code class="language-typescript">type TomRiddleProps = {
  isEvil: boolean;
};

const TomRiddle: React.FunctionComponent&lt;TomRiddleProps&gt; = ({ isEvil }) =&gt; {
  return (
    &lt;div&gt;
      {isEvil ? &lt;h1&gt;Tom Marvolo Riddle&lt;/h1&gt; : &lt;h1&gt;I am Lord Voldemort&lt;/h1&gt;}
    &lt;/div&gt;
  );
};</code></pre>
<p>We start with a super basic component, <code>TomRiddle</code>. Now it matters not what someone is born, but what they chose to be. <code>TomRiddle</code> takes an <code>isEvil</code> prop that determines if it renders "Tom Marvolo Riddle" or "I am Lord Voldemort".</p>
<p>Tom isn't such a great guy and wants to learn how to make horcruxes. How do we teach him? Well we could make him into a class component and add some state. Let's see what that looks like.</p>
<pre><code class="language-typescript">type TomRiddleProps = {
  isEvil: boolean;
};

type TomRiddleState = {
  numHorcruxes: number;
};

class TomRiddle extends React.Component&lt;TomRiddleProps, TomRiddleState&gt; {
  state = {
    numHorcruxes: 0
  };
  makeHorcrux = () =&gt; {
    this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
  };
  render() {
    const { isEvil } = this.props;
    const { numHorcruxes } = this.state;
    return (
      &lt;div&gt;
        {isEvil ? &lt;h1&gt;Tom Marvolo Riddle&lt;/h1&gt; : &lt;h1&gt;I am Lord Voldemort&lt;/h1&gt;}
        &lt;span&gt;I have {numHorcruxes} Horcruxes!&lt;/span&gt;
        &lt;button onClick={this.makeHorcrux}&gt;Make Horcrux&lt;/button&gt;
      &lt;/div&gt;
    );
  }
}</code></pre>
<p>This totally works. We've taught Tom how to make horcruxes. Now Tom wants to recruit some followers, he calls those Death Eaters. Let's add another prop for those. While we're at it, let's derive <code>isEvil</code> &nbsp;from the number of horcruxes the wizard has. </p>
<pre><code class="language-typescript">import * as React from "react";

type TomRiddleProps = {
  deathEaters: string[];
};

type TomRiddleState = {
  numHorcruxes: number;
};

class TomRiddle extends React.Component&lt;TomRiddleProps, TomRiddleState&gt; {
  state = {
    numHorcruxes: 0
  };
  makeHorcrux = () =&gt; {
    this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
  };
  render() {
    const { deathEaters } = this.props;
    const { numHorcruxes } = this.state;

    const isEvil = numHorcruxes &gt; 0;
    return (
      &lt;div&gt;
        {isEvil ? &lt;h1&gt;Tom Marvolo Riddle&lt;/h1&gt; : &lt;h1&gt;I am Lord Voldemort&lt;/h1&gt;}
        &lt;span&gt;I have {numHorcruxes} Horcruxes!&lt;/span&gt;
        &lt;button onClick={this.makeHorcrux}&gt;Make Horcrux&lt;/button&gt;
        {deathEaters != null ? (
          &lt;&gt;
            &lt;h2&gt;These are my Death Eaters&lt;/h2&gt;
            &lt;ul&gt;
              {deathEaters.map(deathEater =&gt; (
                &lt;li key={deathEater}&gt;{deathEater}&lt;/li&gt;
              ))}
            &lt;/ul&gt;
          &lt;/&gt;
        ) : null}
      &lt;/div&gt;
    );
  }
}</code></pre>
<p>Now this component is doing a bit too much. It's rendering to the DOM and it's managing state. Also, anyone can learn to make horcruxes, what if we take that functionality and make it into a higher order component. </p>
<p>Before we get to typing this, let's take a look at what this would look like in vanilla JS.</p>
<pre><code class="language-typescript">function EvilWizard(Wizard) {
  class WithEvilWizard extends React.Component {
    displayName = \`WithEvilWizard(\${Wizard.displayName})\`;
    state = {
      numHorcruxes: 0
    };
    makeHorcrux = () =&gt; {
      this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
    };
    render() {
      const { numHorcruxes } = this.state;
      return (
        &lt;Wizard
          isEvil={numHorcruxes &gt; 0}
          numHorcruxes={numHorcruxes}
          makeHorcrux={this.makeHorcrux}
          {...this.props}
        /&gt;
      );
    }
  }
  return hoistNonReactStatics(WithEvilWizard, Wizard);
}</code></pre>
<p><code>EvilWizard</code> is a function that takes a component, <code>Wizard</code>, and passes that component the following props <code>numHorcruxes</code>, and <code>makeHorcrux</code>. It also manages this state for them.</p>
<p>Now, two minor gotchas with HOCs, we need to set the <code>displayName</code> and <code>hoistNonReactStatics</code>.</p>
<p>Okay now let's type this thing. </p>
<pre><code class="language-typescript">import * as React from "react";
import hoistNonReactStatics = require("hoist-non-react-statics");

type WithEvilWizardProps&lt;T&gt; = T &amp; EvilWizardInnerProps;

type EvilWizardInnerProps = {
  numHorcruxes: number;
  makeHorcrux: () =&gt; void;
};

type EvilWizardState = {
  numHorcruxes: number;
};

function EvilWizard&lt;T&gt;(
  Wizard:
    | React.ComponentClass&lt;WithEvilWizardProps&lt;T&gt;, {}&gt;
    | React.FunctionComponent&lt;WithEvilWizardProps&lt;T&gt;&gt;,
): React.ComponentClass&lt;T&gt; {
  class WithEvilWizard extends React.Component&lt;T, EvilWizardState&gt; {
    displayName = \`WithEvilWizard(\${Wizard.displayName})\`;
    state = {
      numHorcruxes: 0,
    };
    makeHorcrux = () =&gt; {
      this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
    };
    render() {
      return (
        &lt;Wizard
          {...this.props}
          numHorcruxes={this.state.numHorcruxes}
          makeHorcrux={this.makeHorcrux}
        /&gt;
      );
    }
  }
  return hoistNonReactStatics(WithEvilWizard, Wizard);
}</code></pre>
<p>What's going on here? A lot actually. Let's break it down. We export a type called <code>WithEvilWizardProps</code>. This type takes <code>T</code>, a generic, and returns an intersection type of <code>T</code> and <code>EvilWizardInnerProps</code>.</p>
<p>The function <code>EvilWizard</code> takes a <code>Wizard</code> that is either a <code>ComponentClass</code> or a <code>FunctionComponent</code>. The props of this component is of type <code>EvilWizardInnerProps &amp; T</code>. Now here's the real magic. The component we're returning is a class of type <code>React.ComponentClass&lt;T&gt;</code>. </p>
<p>What does this mean? Well because we're using an intersection type, Typescript is smart enough to unpack this and return a component that only requires the props <strong>not</strong> provided by the HOC.</p>
<p>One last thing, let's update <code>TomRiddle</code> to use this new HOC.</p>
<pre><code class="language-typescript">type TomRiddleProps = WithEvilWizardProps&lt;{
  deathEaters: string[];
}&gt;;

const TomRiddle: React.FunctionComponent&lt;TomRiddleProps&gt; = ({
  deathEaters,
  numHorcruxes,
  makeHorcrux,
}) =&gt; {
  const isEvil = numHorcruxes &gt; 0;
  return (
    &lt;div&gt;
      {isEvil ? &lt;h1&gt;Tom Marvolo Riddle&lt;/h1&gt; : &lt;h1&gt;I am Lord Voldemort&lt;/h1&gt;}
      &lt;span&gt;I have {numHorcruxes} Horcruxes!&lt;/span&gt;
      &lt;button onClick={makeHorcrux}&gt;Make Horcrux&lt;/button&gt;
      {deathEaters != null ? (
        &lt;&gt;
          &lt;h2&gt;These are my Death Eaters&lt;/h2&gt;
          &lt;ul&gt;
            {deathEaters.map(deathEater =&gt; (
              &lt;li key={deathEater}&gt;{deathEater}&lt;/li&gt;
            ))}
          &lt;/ul&gt;
        &lt;/&gt;
      ) : null}
    &lt;/div&gt;
  );
};

const LordVoldemort = EvilWizard(TomRiddle);</code></pre>
<p>We've now extracted all that state back out and we're using <code>WithEvilWizardProps</code> when declaring <code>TomRiddleProps</code>. Now let's use our components!</p>
<pre><code class="language-typescript">function BothRiddles() {
  return (
    &lt;div&gt;
      &lt;TomRiddle
        deathEaters={[]}
        numHorcruxes={0}
        makeHorcrux={() =&gt; undefined}
      /&gt;
      &lt;LordVoldemort deathEaters={["Bellatrix Lestrange", "Lucius Malfoy"]} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
<p>As you can see above, we have the option of using <code>LordVoldemort</code> the output of <code>EvilWizard(TomRiddle)</code> or we can just call <code>TomRiddle</code> directly. This is particularly useful if you want to test the behavior of the inner component without the HOC.</p>
`.trim(),
  tags: ['Tech'],
  banner_img:
    '/images/blog/ts-tricks-higher-order-components/higher-order-components-hero.jpg',
  heroImage: '',
  wordCount: 986,
};

export default post;
