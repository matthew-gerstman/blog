import type { Post } from '../types/posts.types';

const post: Post = {
  id: 23,
  slug: 'what-ive-been-working-on',
  title: "What I've Been Working On",
  date: 'January 31, 2026',
  excerpt:
    "Last fall I joined a startup called Obvious. This is the most ambitious thing I've worked on and I'm so excited to share it.",
  content: `
<p>Last fall I joined a startup called Obvious. This is the most ambitious thing I've worked on and I'm so excited to share it.</p>
<p><em>Obvious creates things.</em> It reasons through complex problems, breaks them into steps, and produces real work: documents, images, websites, spreadsheets, whatever you need. It's an engine for building a business, a wedding, and day to day stuff around the house.</p>
<h2 id="what-does-that-actually-mean">What does that actually mean?</h2>
<p>Let me tell you what my family has been up to.</p>
<p>My mother-in-law teaches Hebrew school. She's been using Obvious to create learning materials—flash cards <em>in Hebrew</em> with AI-generated images, formatted as printable PDFs she sends to Staples. It builds her students <a href="https://prj_JIiGrCzH-8050.hosted.obvious.ai/jewish-communities-map.html">interactive maps</a>. It makes personalized study guides.</p>
<p>My wife opened an <a href="https://www.etsy.com/shop/SimsyWhimsy">Etsy store</a>, where she's selling greeting cards. The cards were made by Obvious.</p>
<p>Obvious is the tool that drives our kitchen renovation, our smart home, and all of the projects you can imagine an old house needs. When we planned our honeymoon, it searched for reviews in French and Italian and found restaurants.</p>
<p>You will be surprised by how many problems Obvious can solve for you.</p>
<h2 id="how-i-got-here">How I got here</h2>
<p>I got access to Obvious in early October. I was immediately blown away. I'd been using AI coding tools and had a rough sense of what a force multiplier AI could be—but I didn't have <em><span class="shimmer">the aha moment</span></em> until I tried this.</p>
<p>The team had figured out how to get an agent to break down complex problems and actually solve them. They'd figured out how to put this in a web interface anyone could use. The agent has access to a shell and it's incredibly creative when you ask it to solve a problem.</p>
<p>I visited my brother-in-law and he suggested an app that could check if a phone number is fraudulent. We built it in two hours—without reading or writing any code. I later learned Obvious is happy to take a GitHub token and push its work wherever you want.</p>
<p>I got addicted to the product. I knew I had to work on it. I modeled myself after Tony Fadell trying to get into <a href="https://www.generalmagicthemovie.com">General Magic</a>.</p>
<p>I rebuilt my blog with Obvious to prove I belonged there. I wrote an introduction, <a href="https://matthewgerstman.com/obvious">built a landing page</a> mapping my resume to the job requirements. It felt like interviewing to work on the iPhone or the Mac. Something that mattered.</p>
<h2 id="what-were-building">What we're building</h2>
<p>We're trying to do for AI what Apple did for the personal computer. We want to make AI accessible for everyone, we want it to be easy.</p>
<p>This is the most fun I've had working on something since Dance Marathon in college. If you know, you know.</p>
<h2 id="try-it">Try it</h2>
<p>We imagine a world of abundance, and I'm giving everything I've got to make that possible. If you try this product and feel the urge to spend 80 hours/week making this the best thing it can be, let me know. If you just enjoy using it, I wanna hear that too.</p>
<p><a href="https://obvious.ai">Click here to try Obvious</a></p>
`.trim(),
  wordCount: 508,
  tags: ['Personal', 'Obvious', 'AI'],
  banner_img: '/images/blog/what-ive-been-working-on/hero.png',
};

export default post;
