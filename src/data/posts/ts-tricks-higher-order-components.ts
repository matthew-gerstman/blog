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
<!--kg-card-begin: code-->
```
type TomRiddleProps = {
  isEvil: boolean;
};

const TomRiddle: React.FunctionComponent<TomRiddleProps> = ({ isEvil }) => {
  return (
    <div>
      {isEvil ? <h1>Tom Marvolo Riddle</h1> : <h1>I am Lord Voldemort</h1>}
    </div>
  );
};
```
<!--kg-card-end: code-->
<p>We start with a super basic component, <code>TomRiddle</code>. Now it matters not what someone is born, but what they chose to be. <code>TomRiddle</code> takes an <code>isEvil</code> prop that determines if it renders "Tom Marvolo Riddle" or "I am Lord Voldemort".</p>
<p>Tom isn't such a great guy and wants to learn how to make horcruxes. How do we teach him? Well we could make him into a class component and add some state. Let's see what that looks like.</p>
<!--kg-card-begin: code-->
```
type TomRiddleProps = {
  isEvil: boolean;
};

type TomRiddleState = {
  numHorcruxes: number;
};

class TomRiddle extends React.Component<TomRiddleProps, TomRiddleState> {
  state = {
    numHorcruxes: 0
  };
  makeHorcrux = () => {
    this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
  };
  render() {
    const { isEvil } = this.props;
    const { numHorcruxes } = this.state;
    return (
      <div>
        {isEvil ? <h1>Tom Marvolo Riddle</h1> : <h1>I am Lord Voldemort</h1>}
        <span>I have {numHorcruxes} Horcruxes!</span>
        <button onClick={this.makeHorcrux}>Make Horcrux</button>
      </div>
    );
  }
}
```
<!--kg-card-end: code-->
<p>This totally works. We've taught Tom how to make horcruxes. Now Tom wants to recruit some followers, he calls those Death Eaters. Let's add another prop for those. While we're at it, let's derive <code>isEvil</code> &nbsp;from the number of horcruxes the wizard has. </p>
<!--kg-card-begin: code-->
```
import * as React from "react";

type TomRiddleProps = {
  deathEaters: string[];
};

type TomRiddleState = {
  numHorcruxes: number;
};

class TomRiddle extends React.Component<TomRiddleProps, TomRiddleState> {
  state = {
    numHorcruxes: 0
  };
  makeHorcrux = () => {
    this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
  };
  render() {
    const { deathEaters } = this.props;
    const { numHorcruxes } = this.state;

    const isEvil = numHorcruxes > 0;
    return (
      <div>
        {isEvil ? <h1>Tom Marvolo Riddle</h1> : <h1>I am Lord Voldemort</h1>}
        <span>I have {numHorcruxes} Horcruxes!</span>
        <button onClick={this.makeHorcrux}>Make Horcrux</button>
        {deathEaters != null ? (
          <>
            <h2>These are my Death Eaters</h2>
            <ul>
              {deathEaters.map(deathEater => (
                <li key={deathEater}>{deathEater}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    );
  }
}
```
<!--kg-card-end: code-->
<p>Now this component is doing a bit too much. It's rendering to the DOM and it's managing state. Also, anyone can learn to make horcruxes, what if we take that functionality and make it into a higher order component. </p>
<p>Before we get to typing this, let's take a look at what this would look like in vanilla JS.</p>
<!--kg-card-begin: code-->
```
function EvilWizard(Wizard) {
  class WithEvilWizard extends React.Component {
    displayName = `WithEvilWizard(${Wizard.displayName})`;
    state = {
      numHorcruxes: 0
    };
    makeHorcrux = () => {
      this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
    };
    render() {
      const { numHorcruxes } = this.state;
      return (
        <Wizard
          isEvil={numHorcruxes > 0}
          numHorcruxes={numHorcruxes}
          makeHorcrux={this.makeHorcrux}
          {...this.props}
        />
      );
    }
  }
  return hoistNonReactStatics(WithEvilWizard, Wizard);
}
```
<!--kg-card-end: code-->
<p><code>EvilWizard</code> is a function that takes a component, <code>Wizard</code>, and passes that component the following props <code>numHorcruxes</code>, and <code>makeHorcrux</code>. It also manages this state for them.</p>
<p>Now, two minor gotchas with HOCs, we need to set the <code>displayName</code> and <code>hoistNonReactStatics</code>.</p>
<p>Okay now let's type this thing. </p>
<!--kg-card-begin: code-->
```
import * as React from "react";
import hoistNonReactStatics = require("hoist-non-react-statics");

type WithEvilWizardProps<T> = T & EvilWizardInnerProps;

type EvilWizardInnerProps = {
  numHorcruxes: number;
  makeHorcrux: () => void;
};

type EvilWizardState = {
  numHorcruxes: number;
};

function EvilWizard<T>(
  Wizard:
    | React.ComponentClass<WithEvilWizardProps<T>, {}>
    | React.FunctionComponent<WithEvilWizardProps<T>>,
): React.ComponentClass<T> {
  class WithEvilWizard extends React.Component<T, EvilWizardState> {
    displayName = `WithEvilWizard(${Wizard.displayName})`;
    state = {
      numHorcruxes: 0,
    };
    makeHorcrux = () => {
      this.setState({ numHorcruxes: this.state.numHorcruxes + 1 });
    };
    render() {
      return (
        <Wizard
          {...this.props}
          numHorcruxes={this.state.numHorcruxes}
          makeHorcrux={this.makeHorcrux}
        />
      );
    }
  }
  return hoistNonReactStatics(WithEvilWizard, Wizard);
}
```
<!--kg-card-end: code-->
<p>What's going on here? A lot actually. Let's break it down. We export a type called <code>WithEvilWizardProps</code>. This type takes <code>T</code>, a generic, and returns an intersection type of <code>T</code> and <code>EvilWizardInnerProps</code>.</p>
<p>The function <code>EvilWizard</code> takes a <code>Wizard</code> that is either a <code>ComponentClass</code> or a <code>FunctionComponent</code>. The props of this component is of type <code>EvilWizardInnerProps &amp; T</code>. Now here's the real magic. The component we're returning is a class of type <code>React.ComponentClass&lt;T&gt;</code>. </p>
<p>What does this mean? Well because we're using an intersection type, Typescript is smart enough to unpack this and return a component that only requires the props <strong>not</strong> provided by the HOC.</p>
<p>One last thing, let's update <code>TomRiddle</code> to use this new HOC.</p>
<!--kg-card-begin: code-->
```
type TomRiddleProps = WithEvilWizardProps<{
  deathEaters: string[];
}>;

const TomRiddle: React.FunctionComponent<TomRiddleProps> = ({
  deathEaters,
  numHorcruxes,
  makeHorcrux,
}) => {
  const isEvil = numHorcruxes > 0;
  return (
    <div>
      {isEvil ? <h1>Tom Marvolo Riddle</h1> : <h1>I am Lord Voldemort</h1>}
      <span>I have {numHorcruxes} Horcruxes!</span>
      <button onClick={makeHorcrux}>Make Horcrux</button>
      {deathEaters != null ? (
        <>
          <h2>These are my Death Eaters</h2>
          <ul>
            {deathEaters.map(deathEater => (
              <li key={deathEater}>{deathEater}</li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

const LordVoldemort = EvilWizard(TomRiddle);
```
<!--kg-card-end: code-->
<p>We've now extracted all that state back out and we're using <code>WithEvilWizardProps</code> when declaring <code>TomRiddleProps</code>. Now let's use our components!</p>
<!--kg-card-begin: code-->
```
function BothRiddles() {
  return (
    <div>
      <TomRiddle
        deathEaters={[]}
        numHorcruxes={0}
        makeHorcrux={() => undefined}
      />
      <LordVoldemort deathEaters={["Bellatrix Lestrange", "Lucius Malfoy"]} />
    </div>
  );
}
```
<!--kg-card-end: code-->
<p>As you can see above, we have the option of using <code>LordVoldemort</code> the output of <code>EvilWizard(TomRiddle)</code> or we can just call <code>TomRiddle</code> directly. This is particularly useful if you want to test the behavior of the inner component without the HOC.</p>
`.trim(),
  tags: ['Tech'],
  banner_img:
    '/images/blog/ts-tricks-higher-order-components/higher-order-components-hero.jpg',
  heroImage: '',
  wordCount: 529,
};

export default post;
