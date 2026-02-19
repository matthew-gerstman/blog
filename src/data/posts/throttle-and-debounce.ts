import type { Post } from '../types/posts.types';

const post: Post = {
  id: 12,
  slug: 'throttle-and-debounce',
  title: 'Throttle and Debounce',
  date: 'March 03, 2019',
  excerpt:
    "In this article, we're going to talk about two of the most important functions in frontend development, throttle and debounce.",
  content: `
<p>In this article, we're going to talk about two of the most important functions in frontend development, throttle and debounce.</p>
<p>Both of these functions are commonly used to deal with situations where a user is causing an event handler to fire on repeat and we want to slow down the underlying function call. Think scroll handlers, keyboard events, or even just clicking a button rapidly.</p>
<h1 id="throttle">Throttle</h1>
<p>Throttle is a <a href="http://matthewgerstman.com/functional-programming-fundamentals/">higher order function</a> that takes a function and a timeout and only allows that function at most once per the amount of time specified.</p>
<p>Before we use throttle. Let's start with an example.</p>
<pre><code class="language-tsx">export class CastSpellsBasic extends Component&lt;{}, {numSpells: number}&gt; {
  state = {numSpells: 0};

  castSpell = () =&gt; this.setState({numSpells: this.state.numSpells + 1});

  render() {
    return (
      &lt;div className="spells-wrapper"&gt;
        {this.state.numSpells} Spells Cast!
        &lt;div&gt;
          &lt;button onClick={this.castSpell}&gt;Cast Spell!&lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
}
</code></pre>
<p>In this example above we have a piece of state <code>numSpells</code> and a function that can increment this state <code>castSpell</code>. We have a button we can click that increments <code>numSpells</code>. You can play with it below.</p>
<!--kg-card-begin: html-->
<div data-demo="throttle-debounce-basic"></div>
<!--kg-card-end: html-->
<p>Now you can click this button as quickly as you want and it will increment the number of spells cast. Now spells take some time to recharge, so we can use throttle to slow down the user.</p>
<pre><code class="language-tsx">export class CastSpellsThrottle extends Component&lt;{}, {numSpells: number}&gt; {
  state = {numSpells: 0};

  castSpell = () =&gt; this.setState({numSpells: this.state.numSpells + 1});
  castSpellThrottled = throttle(this.castSpell, timeout);

  render() {
    return (
      &lt;div className="spells-wrapper"&gt;
        {this.state.numSpells} Spells Cast!
        &lt;div&gt;
          &lt;button onClick={this.castSpell}&gt;Cast Spell!&lt;/button&gt;
          &lt;button onClick={this.castSpellThrottled}&gt;
            Cast Spell Throttled!
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
}</code></pre>
<p>We now have a button that call <code>castSpellThrottled</code> when the user clicks it. Try it out below.</p>
<!--kg-card-begin: html-->
<div data-demo="throttle-debounce-throttle"></div>
<!--kg-card-end: html-->
<p>Now that we understand what it does, lets dive into the source of throttle.</p>
<pre><code class="language-typescript">function throttle(func, timeout) {
  let ready: boolean = true;
  return (...args) =&gt; {
    if (!ready) {
      return;
    }

    ready = false;
    func(...args);
    setTimeout(() =&gt; {
      ready = true;
    }, timeout);
  };
}
</code></pre>
<p>What's going on here? Throttle is a function that takes a function and a timeout. Throttle returns a new function that forms a closure around the original one.</p>
<p>We keep track of a <code>boolean</code> called <code>ready</code> that stops the inner function from firing unless the timeout has elapsed. If we fire the function we also fire a timeout that will set <code>ready</code> to true when the timeout has elapsed. Pretty cool, huh?</p>
<h1 id="debounce">Debounce</h1>
<p>Debounce is a bit different from throttle. With throttle we slow down function calls as they happen, with debounce we don't fire at all until the user has stopped calling it.</p>
<p>This is really useful if you want to perform a computation or hit an api when the user is done typing or done scrolling. Let's play with another example.</p>
<!--kg-card-begin: html-->
<div data-demo="throttle-debounce-debounce"></div>
<!--kg-card-end: html-->
<p>You'll notice, you can click Cast Spell Debounced as many times as you'd like, but it will only fire after you've stopped clicking it. The source for this is similar to the previous component.</p>
<pre><code class="language-tsx">export class CastSpells extends Component&lt;{}, {numSpells: number}&gt; {
  state = {numSpells: 0};

  castSpell = () =&gt; this.setState({numSpells: this.state.numSpells + 1});
  castSpellThrottled = throttle(this.castSpell, timeout);
  castSpellDebounced = debounce(this.castSpell, timeout);

  render() {
    return (
      &lt;div className="spells-wrapper"&gt;
        {this.state.numSpells} Spells Cast!
        &lt;div&gt;
          &lt;button onClick={this.castSpell}&gt;Cast Spell!&lt;/button&gt;
          &lt;button onClick={this.castSpellThrottled}&gt;
            Cast Spell Throttled!
          &lt;/button&gt;
          &lt;button onClick={this.castSpellDebounced}&gt;
            Cast Spell Debounced!
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  }
}</code></pre>
<p>Now that we know what it does, let's see how it works.</p>
<pre><code class="language-typescript">export function debounce(func: Function, timeout: number) {
  let timer: NodeJS.Timeout;
  return (...args: any) =&gt; {
    clearTimeout(timer);
    timer = setTimeout(() =&gt; {
      func(...args);
    }, timeout);
  };
}
</code></pre>
<p>While the last one relied on a simple boolean, with this one we need to maintain access to the timer. We do this because we need to clear the previous timeout every time the function gets called again. We then set a new timeout to call the inner function.</p>
<h1 id="real-world">Real World</h1>
<p>Now these implementations of throttle and debounce were both very naive. If you take a look at the <a href="https://github.com/lodash/lodash/blob/master/debounce.js">lodash source</a> you can see a much more advanced version of debounce that considers things like calling the function before or after we set the timeout.</p>
<p>It also allows fancy things like a <code>maxWait</code> and a <code>cancel</code>. They even implement <a href="https://github.com/lodash/lodash/blob/master/throttle.js">throttle with debounce.</a></p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>Hopefully you've learned a bit about debounce and throttle. For more real world code, check out some of my other articles <a href="http://matthewgerstman.com/functional-programming-fundamentals/"><strong>Functional Programming Fundamental</strong></a><strong> </strong>or <a href="/writing/map-filter-reduce"><strong>Map, Filter, Reduce</strong></a><strong>.</strong></p>
<p>If you're looking for more abstract stuff check out <a href="/writing/what-the-functor"><strong>What the Functor?</strong></a><strong> </strong>and <strong><a href="/writing/mary-had-a-little-lambda">Mary Had a Little Lambda.</a> </strong></p>
<p>Also if you feel the need to buy me a drink you can do so <a href="http://cash.me/$MatthewGerstman">here</a> or follow me on twitter <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a>.</p>
`.trim(),
  tags: ['Tech'],
  banner_img: '/images/blog/throttle-and-debounce/throttle-debounce-hero.jpg',
  heroImage: '',
  wordCount: 769,
};

export default post;
