import type { Post } from '../types/posts.types';

const post: Post = {
  id: 14,
  slug: 'hello-there',
  title: 'Hello There',
  date: 'January 15, 2019',
  excerpt:
    "I have a habit of rambling on the internet and thought it'd be nice to consolidate all these ramblings into one place.",
  content: `
<p>My name is Matthew Gerstman, I'm a software engineer with a bunch of hobbies. What hobbies you ask? Well, I see a lot of theater, give tech talks regularly, and travel so much I'm writing this from an airplane. I'm also a Harry Potter enthusiast, long time Green Day listener, and I adore New York City.</p>
<p>I have a habit of rambling on the internet and thought it'd be nice to consolidate all these ramblings into one place. </p>
<h1 id="theater">Theater</h1>
<p>Last year I saw about 50 shows. On Broadway, off Broadway, everything from tiny one-person shows to Hamilton in London. If the show has something that looks like a Playbill I'll probably get around to seeing it. In fact here's a gif of everything I have that looks like a Playbill from 2018.</p>
<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/images/blog/hello-there/hello-there-kenobi.gif" class="kg-image" alt loading="lazy"><figcaption>For those wondering, I use this <a href="https://amzn.to/2DgdXok">playbill binder</a> with <a href="https://amzn.to/2suwkzL">these sheets</a>.</figcaption></figure>
<p>I'm hoping to do reviews of the shows I see on here, and if a miracle occurs, get asked to write them.</p>
<h1 id="tech">Tech</h1>
<p>By day I'm a software engineer at Dropbox. Now would be a good time to note opinions on this blog are mine, not theirs. I also spend a lot of time in the greater JavaScript community.</p>
<p>I'm hella active on Twitter and enjoy external validation quite a bit. Please follow me <a href="https://twitter.com/MatthewGerstman">@MatthewGerstman. </a></p>
<figure class="kg-card kg-embed-card">
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">This guy says follow me on Twitter. <a href="https://twitter.com/ken_wheeler?ref_src=twsrc%5Etfw">@ken_wheeler</a> <a href="https://t.co/lLX3nAw2M6">pic.twitter.com/lLX3nAw2M6</a></p>
&mdash; Matthew Gerstman (Slytherin) (@MatthewGerstman) <a href="https://twitter.com/MatthewGerstman/status/1075207374552662016?ref_src=twsrc%5Etfw">December 19, 2018</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</figure>
<p>I also give tech talks on everything ranging from <a href="https://www.youtube.com/watch?v=m1XdasrstCc&amp;t=2s">salary negotiation</a> to <a href="https://www.youtube.com/watch?v=kkRyjXDpYqg&amp;t=534s">functional programming</a>. Last year I got the opportunity to speak at <a href="https://www.youtube.com/watch?v=Pjc1AnBLG8c">ReactNext in Tel Aviv</a> and this summer you can catch me at React Norway.</p>
<p>One more thing! I'm a co-host on the popular podcast <a href="https://theconsolelog.com">The Console Log!</a> Every week we talk about the latest in the JavaScript world and make some pretty great puns (if I do say so myself).</p>
<h1 id="travel">Travel</h1>
<p>I imagine I'll blog the least about this but Theater, Tech, and Travel sounds much better with the third T. Or maybe this will be the unexpected star of the blog. Anything is possible on the internet!</p>
<p>I get on an airplane about 15 times a year and go somewhere. Most of the time its San Francisco (work) or Florida (family), but I'm known to pick random spots in the US. Once or twice a year I feel adventurous and hop over the Atlantic or Pacific. This year it might be more.</p>
<p>Being on a plane inspired me to write this blog so really it's earned this mention.</p>
<h1 id="harry-potter">Harry Potter</h1>
<p>Harry Potter has had a profound impact on my life. So much that I've been sitting on a very personal letter to JK Rowling I've never had the courage to send. One day I'll get to it.</p>
<p>Aside from that I collect copies of the series, I have about 90 books these days. I've also seen <a href="https://amzn.to/2suNvRI">Puffs</a> 10ish times, and even <em>liked</em> Cursed Child when I saw it on stage. MuggleNet is a long standing member of my bookmarks bar and I find nothing more soothing than the voice of Jim Dale reading the series.</p>
<p>Here's a picture of me at Hogwarts in Japan.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/hello-there/matthew-speaking-1.jpg" class="kg-image" alt loading="lazy"></figure>
<h1 id="green-day">Green Day</h1>
<p>When I was eight years old I decided Green Day was going to be my favorite band. I'm very good at keeping my commitments. 20 years later and nothing makes me happier than hearing Green Day when I'm not expecting it.</p>
<p>I actually love music as a whole though. My record collection is around 250 records now, and my day to day listening is mostly <a href="https://www.amazon.com/Frank-Turner/e/B001LHXD5K/digital/ref=ntt_mp3_rdr?_encoding=UTF8&amp;amp;sn=d&amp;_encoding=UTF8&amp;tag=mtg06-20&amp;linkCode=ur2&amp;linkId=754e625d523c4b3cbad801b972e21d7e&amp;camp=1789&amp;creative=9325">Frank Turner</a>, <a href="https://www.amazon.com/Taylor-Swift/e/B0017PE36O/digital/ref=ntt_mp3_rdr?_encoding=UTF8&amp;amp;sn=d&amp;_encoding=UTF8&amp;tag=mtg06-20&amp;linkCode=ur2&amp;linkId=44320b27d000550fcda6add6243d1363&amp;camp=1789&amp;creative=9325">Taylor Swift</a>, and showtunes.</p>
<p>Last year I met Billie Joe Armstrong for the first time; we made extremely awkward small talk.</p>
<figure class="kg-card kg-image-card"><img src="/images/blog/hello-there/matthew-speaking-2.jpg" class="kg-image" alt loading="lazy"></figure>
<p>Surprisingly less awkward, dancing on stage with <a href="https://www.amazon.com/Frank-Turner/e/B001LHXD5K/digital/ref=ntt_mp3_rdr?_encoding=UTF8&amp;amp;sn=d&amp;_encoding=UTF8&amp;tag=mtg06-20&amp;linkCode=ur2&amp;linkId=754e625d523c4b3cbad801b972e21d7e&amp;camp=1789&amp;creative=9325">Frank Turner.</a></p>
<figure class="kg-card kg-embed-card"><iframe width="459" height="344" src="https://www.youtube.com/embed/HlLkJ_YDFkU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>
<h1 id="new-york">New York</h1>
<p>Finally, I'd be remise not to mention that I adore New York City. I moved here in December of 2015 and I immediately realized I was home. I'm never moving, please don't ask me to consider it.</p>
<h1 id="thanks-">Thanks!</h1>
<p>I'm shocked anyone made it this far in a self-indulgent blog post where I talk about all the things I love, but thanks for reading. I hope to start blogging regularly about all the things I mentioned above and we'll see what comes of it. ‌‌</p>
`.trim(),
  tags: ['Tech', 'Theater', 'Travel'],
  banner_img: '/images/blog/hello-there/bay-bridge-sf.jpg',
  heroImage: '',
  wordCount: 708,
};

export default post;
