import type { Post } from '../types/posts.types';

const post: Post = {
  id: 15,
  slug: 'how-i-prepare-a-talk',
  title: 'How I Prepare A Tech Talk',
  date: 'April 01, 2019',
  excerpt:
    "Almost weekly someone will ask me how do I put together a tech talk. I'd like to think I've gotten pretty good at answering. In fact I've gotten so used to sharing The Matthew Gerstman Method that it ",
  content: `
<p>Almost weekly someone will ask me <em>how do I put together a tech talk.</em> I'd like to think I've gotten pretty good at answering. In fact I've gotten so used to sharing <em>The Matthew Gerstman Method </em>that it might as well be it's own talk.</p>
<p>That's too meta for me, so I went with a blog post. This probably isn't that different from anyone else's strategy, but it works for me.</p>
<h1 id="figuring-out-the-topic">Figuring Out The Topic</h1>
<p>The very first step is figuring out what I actually want to talk about. Different talks will come from variou sources of inspiration.</p>
<p>My <a href="https://www.youtube.com/watch?v=kkRyjXDpYqg">Functional Programming talk</a> came out of a desire to evangelize Lodash after we migrated from <a href="https://blogs.dropbox.com/tech/2018/09/migrating-from-underscore-to-lodash/">Underscore at Dropbox</a>. I gave a talk on <a href="https://www.youtube.com/watch?v=m1XdasrstCc">Salary Negotiation </a>that is filled with advice I've given on repeat.</p>
<p>Currently I'm developing three talks. Building a Typed and Code Split React App, TypeScript: Seeing Past The Hype, and Nothing Generic About It. All three of these came directly out things I've learned at Dropbox. More importantly, these are things I'm passionate about and that should come through when I'm delivering them.</p>
<h1 id="outlining">Outlining</h1>
<p>The next step is the rough technical outline. I usually do this offline, walking around Manhattan, running errands, or cleaning my apartment. I generally try to get myself into a headspace where my thoughts can run wild and I can think about the general structure for the talk.</p>
<p>I might think a little bit about how I want to handle certain subjects, and ideas for code samples may come up, but overall it's high level.</p>
<p>When I get home I start to type it up. I plug away into <a href="http://paper.dropbox.com">Paper</a> and build a proper outline. Seeing it in front of me, I can reorganize topics and start to add more detail as it comes to me.</p>
<h1 id="research">Research</h1>
<p>This is often the hardest part of the talk. Researching the topic.</p>
<p>I try to learn everything I can about the subject I'm talking about and I make sure to cite sources. At this point it's more of a blog post than a tech talk. It's a lot of information in a Paper doc that I can share.</p>
<p>At this point I'm generally just copy pasting from articles I find into Paper and saving where I got the info.</p>
<p>Slowly this mass of content will become actual slides. I'll put in line breaks and figure out the flow of my talk. This is also where I write any relevant sample code.</p>
<p>Also, this is when jokes usually start coming to me. I might start stockpiling gifs, although that's not necessarily important yet.</p>
<h1 id="starting-the-slides">Starting The Slides</h1>
<p>At this stage I export from Paper to markdown and switch over to <a href="https://github.com/jxnblk/mdx-deck">mdx-deck</a>. It's a really nice project that lets you write your slides in markdown and include live code samples. If you're curious, I host my slides on Netlify.</p>
<p>I'm not terribly concerned about getting my slides perfect. The most important thing for now is the content itself. Secondly, I like to make sure theres comic relief when things get too technical.</p>
<p>Arguably, you should avoid spending time refining your slides here because they're so likely to change. Fonts, colors, and alignment can all wait. </p>
<p>Instead, I start running through the slides at home. I time myself on each practice run. More often than not, I need to cut content rather than add more, but your mileage may vary.</p>
<h1 id="workshopping">Workshopping</h1>
<p>This is one of my favorite parts, testing the talk out with friends. I usually find a couple of co-workers and give the talk to them in private. This allows me to see how the talk flows when someone is listening, how they respond to various things I might say, and most importantly, gather feedback.</p>
<p>Often I'll get feedback that something was confusing, or a few slides could have been rearranged. I might also get feedback like <em>this is irrelevant,</em> or <em>you need to expand on this</em>. Most importantly, I get to see if my jokes are funny.</p>
<p>When I was first getting started, I would have someone count my <em>ums</em>. This is a really useful exercise, because it gets you in the habit of breaking your awkward mannerisms. We all have them, and it takes practice to fix them.</p>
<p>I also recommend timing yourself, and asking your friend(s) to hold feedback until the end. I usually give them a pen and paper to take notes that I can hold onto afterwards.</p>
<h1 id="refining">Refining</h1>
<p>After two or three of these one on one sessions I'm in refinement mode. Getting the talk down to a science, and making sure I have all my points together.</p>
<p>This is the stage when I start trying to make my slides perfect. I check that everything is aligned properly. I also start adding speaker notes. </p>
<p>There's one thing I don't do though; I don't memorize anything. I make it a point to speak naturally every time I give the talk. This makes the delivery feel much more organic. I avoid writing down full sentences in my speaker notes and stick to bullet points. If I miss something during any given speech it's not that big a deal.</p>
<p>I also make sure my gif game is on point. To be honest, I spend hours on Google images looking for the perfect gifs.</p>
<h1 id="practicing-in-public">Practicing In Public</h1>
<p>The talk is 90% done now, but it still hasn't been given to an audience. I'll set a date with a local meetup and give the talk to a smaller group, usually 50-100 people. This is my first chance to give the talk in public and see how it lands. Usually people will come up to me after the talk and ask questions or give feedback. This is very helpful for the final version.</p>
<p>From here on, I'll update my slides as necessary, change up any jokes that didn't get laughs, and really hone my delivery. These tend to be minor tweaks, but they make a difference.</p>
<h1 id="the-big-event">The Big Event</h1>
<p>The week of the conference or event I'm speaking at I'll practice my talk every day to stay fresh. In the hours before I give it for real, I'll practice it two-three times by myself just to make sure I'm on point. I tend to get pretty nervous the day of so I just keep practicing in my hotel room to fight my nerves.</p>
<h1 id="reusing-a-talk">Reusing a Talk</h1>
<p>Giving a talk multiple times is totally okay. You've done all that work, you should get as much out of it as you can. However, you should ask yourself the question, <em>is this audience different from the one I originally spoke to?</em></p>
<p>There are a lot of reasons that answer could be yes. There are React conferences, TypeScript conferences, and vanilla JavaScript conferences. It's a safe bet that those audiences will all have different levels of familiarity with parts of your talk.</p>
<p>You should also consider cultural differences. Last year I gave my Functional Programming talk in Israel. I made it a point to replace all my Taylor Swift references with Natalie Portman to localize.</p>
<h1 id="wrapping-up">Wrapping Up</h1>
<p>If this sounds like a lot of work, it is. I estimate I spend one to two hours on every minute I'm speaking. The point of this is to know how to spend those fourty to sixty hours and get the most for your time.</p>
<p>Good luck with your talk! Feel free to tweet <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman</a> with questions.</p>
<h2></h2>
`.trim(),
  tags: ['Tech', 'public-speaking'],
  banner_img: '/images/blog/public-speaking.jpg',
  wordCount: 1239,
};

export default post;
