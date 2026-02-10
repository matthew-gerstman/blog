import type { Post } from '../types/posts.types';

const post: Post = {
  id: 16,
  slug: 'surviving-the-technical-interview',
  title: 'Surviving The Technical Interview',
  date: 'September 25, 2019',
  excerpt: `I've found myself giving a bunch of advise on technical interviews lately and thought it'd make for a good blog post. 

Here's my guide to surviving interviews.`,
  content: `
<p>I've found myself giving a bunch of advise on technical interviews lately and thought it'd make for a good blog post. While most of us acknowledge that technical interviews have a lot of false negatives, the industry as a whole hasn't come up with a better alternative. Here's my guide to surviving interviews.</p>
<h1 id="practice">Practice</h1>
<p>This one seems obvious, but I need to say it up front. Practice, practice, practice. <em>Proper planning prevents poor performance</em>. I've personally done almost every problem in <a href="https://amzn.to/2l8CeGG">Cracking The Coding Interview</a> and I can't recommend that book enough. It helps you get into the mindset of interviewing.</p>
<p>A big failure mode with this book though is how it's organized. The problems are all neatly organized by what tool you need to solve them. For example theres a chapter with array problems and a chapter with tree problems. Real interviews won't be like this. You'll have to identify what tools to use on the problem when it's given to you.</p>
<p>The advanced chapters in the back are really helpful here because they don't provide any context, they're just problems to solve.</p>
<h1 id="turn-your-inner-monologue-inside-out">Turn Your Inner Monologue Inside Out</h1>
<p>This is so important. As an interviewer I need to get a sense of how you solve the problem. If you silently struggle, I can't give you the hint you need to succeed. Talk to yourself as you work through the practice problems. It may feel silly at first, but you need to practice saying out loud what's going through your head. Really say out loud everything going through your head.</p>
<p>Even say out loud the bad ideas and why they won't work. During the interview, I'm looking for <strong>signal</strong>, either positive or negative that we should hire you. If you mention something that won't work and why, that's really positive signal. It shows me that you can think through multiple solutions and know their tradeoffs.</p>
<p>It's also important to state your assumptions. Sometimes it might seem like you intuitively figured out a key part of the problem, but I need to verify that. Often if a candidate seems to just know something I'll ask some followup questions that seem really simple, just to confirm we're on the same page.</p>
<h1 id="if-you-re-stuck-make-a-magic-function">If You're Stuck, Make a Magic Function</h1>
<p>This one took me years to learn. When you're stuck on part of a problem, for example you don't know how to sort something, or organize a data structure, just pretend you have a function that does it for you. You will need to implement that magic function later, but this will help you get unstuck for the time being.</p>
<p>In fact, this is really positive signal for me. It shows me you can break down the problem into multiple steps, and that you can write clean code. It's often difficult to parse giant single-function solutions.</p>
<h1 id="take-a-deep-breath">Take a Deep Breath</h1>
<p>During some interview somewhere, you'll probably get stuck and flustered. Don't go into panic mode. Getting stuck on a small part of the problem is totally okay, and expected. Take a deep breath and go back to the basics to wrap your head around it.</p>
<p>For on-sites, you'll often do several interviews back to back. Remember that each interview has no bearing on the next one. You can fail one interview, pass the rest, and that interview becomes an outlier. When you finish an interview put it in the past, and move onto the next one.</p>
<h1 id="i-m-taking-notes">I'm Taking Notes</h1>
<p>This is important. I take notes throughout the whole interview to make sure I'm giving a fair evaluation. Here's what they might look like. </p>
<blockquote>5:06 PM Explained question
<br>5:08 PM Candidate asked if they can assume a type of input, I say yes.
<br>5:10 PM Candidate started writing error checking, i told them to assume it's valid input.
<br>5:13 PM Candidate has the first part of the implementation.
<br>5:14 PM Asked candidate to walk me through at a high level.
<br>5:14 PM Candidates solution works like this ____________________
<br>5:16 PM I asked what their data structure looks like.
<br>5:18 PM They showed me they know what it looks like, now I can give them a sample input.
<br>5:19 PM They're very caught up on this section. I'm asking them what would happen if they had a magic function to do it for them.
<br>5:24 PM I asked what the code looks like for this simpler case.
<br>5:29 PM Algo works for simple case, I told them I see a bug.
<br>5:31 PM I told them "I would wager they could make this function work for the advanced case"
<br>5:31 PM They figured out the advanced case.
<br>5:35 PM There's a bug on line 33.
<br>5:36 PM They found the bug on line 33 on their own.
<br>5:40 PM I suggest a big scary edge case.
<br>5:43 PM Candidate has a high level solution for edge case.
<br>5:48 PM Candidate has implemented psuedocode around this.
<br>5:53 PM We hit a good stopping point for questions.</blockquote>
<p>These are intentionally vague, but it's encapsulates the things I need to remember:</p>
<ol>
<li>How long did each part of the problem take the candidate?</li>
<li>When did they get stuck?</li>
<li>Were they able to figure it out the bugs on their own?</li>
</ol>
<p>After doing the same question dozens (or sometimes hundreds) of times, I have a pretty good sense of how the interview should go, what types of solutions a candidate may have, and when they're likely to get stuck.</p>
<h1 id="be-honest">Be Honest</h1>
<p>It's very likely at some point you'll be asked a question you've seen before. There are only so many interview questions out there. When this happens, tell the interviewer! I can usually tell if a candidate knows the question in advance and it feels like I'm being lied to. When this happens, I have to flag this suspicion and recommend we reinterview them.</p>
<h1 id="it-s-a-numbers-game">It's a Numbers Game</h1>
<p>Interviewing is it's own skill you need to hone; it can take years of practice. When I was going from my first to my second job I talked to 50 tech companies (and failed a lot of interviews). The more interviews you do, the better you'll get at it.</p>
<p>If you're just ramping up on a job search, consider scheduling the companies you're less excited about earlier. This will help you practice with less pressure. You'll feel more ready when you get to the interview you really care about.</p>
`.trim(),
  tags: ['Tech'],
  banner_img: '/images/blog/hero-technical-interview.jpg',
  heroImage: '',
  wordCount: 1067,
};

export default post;
