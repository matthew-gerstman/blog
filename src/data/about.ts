export interface AboutData {
  content: string;
}

const aboutData: AboutData = {
  content: `# About Me

I'm Matthew Gerstman, and I've been building things on the internet since I was 9 years old.

## Early Programming

I got started when my friend's older brother was building a game called 'Falldown' in C++. I thought it was the coolest thing in the world. He gave me a learn Visual Basic 5 CD set and I built my first program, a generic guest book for websites.

At ten I started learning HTML and JavaScript to build websites to show people at school. I built interactive sites where users could enter their name and get personalized messages.

My favorite site I built was a DBZ dance party site. It was like the [hamster dance](https://originalhampster.ytmnd.com/), but with Dragon Ball Z gifs and music from Ocarina of Time. I wish I still had that code.

[TechTV](https://en.wikipedia.org/wiki/TechTV) had a huge impact on me. I loved [The Screen Savers](https://en.wikipedia.org/wiki/The_Screen_Savers) and even called in a few times. I saw Kevin Mitnick [talked about](https://en.wikipedia.org/wiki/The_Art_of_Deception) the art of deception and how social engineering works. I watched [Pirates of Silicon Valley](https://en.wikipedia.org/wiki/Pirates_of_Silicon_Valley) repeatedly. My childhood heroes were Jobs and Wozniak.

Going into 8th grade a new school opened up, Don Estridge High Tech Middle. I was only there for one year, but it gave me opportunities I never would have dreamed of. I got to take programming in Pascal, Computer Hardware, and a class where I did IT support for teachers.

I kept it up in high school. I charged adults to fix their computers and had about 10 clients. I had a job doing IT for a local medical company. I organized a team to QA their new website.

In summer 2008 I was lucky enough to attend a program at Johns Hopkins University. I took two courses: Programming 1 and Philosophy. Programming 1 was a deeper dive into computer science fundamentals, solidifying my academic understanding. The Philosophy course, surprisingly, taught me critical thinking and logical reasoning skills that proved invaluable in approaching complex technical problems.

## College

From 2009 to 2013, I pursued a Computer Science degree at the University of Florida. I also continued to apply my skills by contracting WordPress websites for various clients.

The highlight of my college career was Dance Marathon.

Dance Marathon was an event where thousands of students would stand and stay awake for 26.2 hours. I got increasingly involved over a 4 year period. By my senior year I was running technology for the whole event. I got to write some cool stuff. I built a website to handle real life games of [assassins](https://github.com/matthew-gerstman/dmassassins), an [iOS app](https://github.com/matthew-gerstman/DMatUF-iPhone-App) for the event, and a [tweet visualizer](https://github.com/matthew-gerstman/TweetTwoScreens) for the jumbotron. This was the first time I got to write real software used by real people.

## Zetta

My first internship and real job was at [Zetta](https://en.wikipedia.org/wiki/Zetta_(cloud_backup)), a startup that did cloud backup for enterprise in Sunnyvale California. The most senior people came from Netscape and I got to hear lots of cool war stories from that era. I was hungry to learn and took time outside of work to learn Go and Backbone. I brought these technologies into work.

The job was good, but I desperately wanted to live in New York City. I started the hunt for my next job.

## Interviewing

Going from Job #1 to Job #2 was one of the most intense periods of my career. I woke up at 5 AM every day to do practice problems in Cracking the Coding Interview. This was the whiteboard era, so I did them by hand in a notebook. Around 8AM I would take an east coast interview, and then head to my dayjob. I spoke to 50 companies in I got myself to New York in 3 months.

## TodayTix

I was so excited to land at TodayTix. This was a consumer focused product, and something I could explain to non technical friends. I also got really into theater. During my 10 years in NYC I saw 250 performances. I still have the playbills in binders.

TodayTix is also where I learned frontend. In 2016 I got to work on a greenfield webapp using all the latest technologies of the time: React, Redux, and Lodash. We were really into functional programming and played code golf trying to get things down to as few lines as possible.

Overall I had a great time there, but one day I saw an online ad for a Dropbox meetup.

## Dropbox

I loved Dropbox from the moment it was released. As a kid I wanted the ability to keep all my devices in sync. I envisioned a world where we could all pick up any device and it would show the same stuff on a different screen size. Dropbox was the first product to bring this vision to life in the cloud.

I pitched myself as a frontend expert. The company was historically infra-heavy and they did not have a lot of in house frontend expertise. I had so much imposter syndrome when I joined. I remember my manager asked me how I wanted to grow and I was thinking "I just spent the last 3 years trying to get a job at a big tech company." I had no idea what the next goalpost was. My manager taught me about levels and what a Staff Engineer was, that became the new goal.

I worked on a lot of cool projects at Dropbox, but the thing I am still proudest of is the JS Guild. When I joined all of the frontend engineers were in silos and there was no community for them. Me and a couple of other people built it.

After Covid, Dropbox went fully remote which I was not ready for. In 2021 it was time for something new.

## Bluecore

I had a really ambitious mandate at Bluecore. "Go build out a frontend platform team." I got a lot done in the time I was there. I built features, wrote their frontend north star, migrated their component library to typescript, shipped an autogenerated API client, and began a migration from a python monolith to NextJS.

Unfortunately there was a leadership shakeup. The person who recruited me was pushed out and I lost funding to hire for my team. I had a friend at Datadog and he pitched me on joining.

## Datadog

I wanted this job so bad. Datadog is doing some of the best frontend work in the industry. The UI is incredibly complex, data-dense, and interactive. This was the first time I was nowhere near the best frontend engineer at the company. I was thrilled to be in the middle of the pack.

I learned so much from so many brilliant people. The developer experience is magical and abstractions like Univiz around rendering graphs are brilliant.

I spent 2.5 years in the graphing org. The first half of that was as an engineer on Dashboards, the second half learning to manage on Notebooks. I loved my team, but I realized at some point I wanted to go back to building things myself. I wrapped up Notebooks 2.0 and planned a massive Graphing Summit. I taught an IC1 class and made so many wonderful connections. But I needed to go remote.

My wife and I decided to move to Syracuse, NY. In order to stay at Datadog I needed to join a remote friendly org. I wanted to go back to IC anyway so that helped. The new org was not the same. I went from shipping products to millions of users to working on internal tools that had gratuitous amounts of red tape. I was basically working for a different company.

## My Next Role

This year I got to celebrate all of the Jewish holidays, which does not happen often. I am grateful to be taking a few months off. But I am also restless, so I am lining up the next thing. I want to build something important and work with amazing people.

I want to own features end-to-end. Give me a problem, let me talk to users, and I will build and ship a solution that works. I thrive on impact, from conception to deployment.

I care about craft: robust systems, modern tech, and interfaces that feel right. I want to set a high bar for UX, especially in emerging spaces like agent products where we define "good."

I identify what is broken and fix it. Whether it is enabling multi-threaded workflows, adding iPad support, or just building dark mode.

You can see all of my projects here and I am excited to roll up my sleeves on the next thing.`,
};

export default aboutData;
