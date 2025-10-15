import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.lead}>
          I'm Matthew Gerstman, and I've been building things on the internet
          since I was 9 years old.
        </p>
      </div>

      <h2 className={styles.sectionTitle}>Early Programming</h2>

      <p className={styles.paragraph}>
        I got started when my friend's older brother was building a game called
        'Falldown' in C++. I thought it was the coolest thing in the world. He
        gave me a learn Visual Basic 5 CD set and I built my first program, a
        generic guest book for websites.
      </p>

      <p className={styles.paragraph}>
        At ten I started learning HTML and JavaScript to build websites to show
        people at school. I built interactive sites where users could enter
        their name and get personalized messages.
      </p>

      <p className={styles.paragraph}>
        My favorite site I built was a DBZ dance party site. It was like the{' '}
        <a
          href="https://originalhampster.ytmnd.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hamster dance
        </a>
        , but with Dragon Ball Z gifs and music from Ocarina of Time. I wish I
        still had that code.
      </p>

      <p className={styles.paragraph}>
        <a
          href="https://en.wikipedia.org/wiki/TechTV"
          target="_blank"
          rel="noopener noreferrer"
        >
          TechTV
        </a>{' '}
        had a huge impact on me. I loved{' '}
        <a
          href="https://en.wikipedia.org/wiki/The_Screen_Savers"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Screen Savers
        </a>{' '}
        and even called in a few times. I saw Kevin Mitnick talk about{' '}
        <a
          href="https://en.wikipedia.org/wiki/The_Art_of_Deception"
          target="_blank"
          rel="noopener noreferrer"
        >
          the art of deception
        </a>{' '}
        and how social engineering works. I watched{' '}
        <a
          href="https://en.wikipedia.org/wiki/Pirates_of_Silicon_Valley"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pirates of Silicon Valley
        </a>{' '}
        repeatedly. My childhood heroes were Jobs and Wozniak.
      </p>

      <p className={styles.paragraph}>
        Going into 8th grade a new school opened up, Don Estridge High Tech
        Middle. I was only there for one year, but it gave me opportunities I
        never would have dreamed of. I got to take programming in Pascal,
        Computer Hardware, and a class where I did IT support for teachers.
      </p>

      <p className={styles.paragraph}>
        I kept it up in high school. I charged adults to fix their computers and
        had about 10 clients. I had a job doing IT for a local medical company.
        I organized a team to QA their new website.
      </p>

      <p className={styles.paragraph}>
        In summer 2008 I was lucky enough to attend a program at Johns Hopkins
        University. I took two courses: Programming 1 and Philosophy.
        Programming 1 was a deeper dive into computer science fundamentals,
        solidifying my academic understanding. The Philosophy course,
        surprisingly, taught me critical thinking and logical reasoning skills
        that proved invaluable in approaching complex technical problems.
      </p>

      <h2 className={styles.sectionTitle}>College</h2>

      <p className={styles.paragraph}>
        From 2009 to 2013, I pursued a Computer Science degree at the University
        of Florida. I also continued to apply my skills by contracting WordPress
        websites for various clients.
      </p>

      <p className={styles.paragraph}>
        The highlight of my college career was Dance Marathon.
      </p>

      <p className={styles.paragraph}>
        Dance Marathon was an event where thousands of students would stand and
        stay awake for 26.2 hours. I got increasingly involved over a 4 year
        period. By my senior year I was running technology for the whole event.
        I got to write some cool stuff. I built a website to handle real life
        games of{' '}
        <a
          href="https://github.com/matthew-gerstman/dmassassins"
          target="_blank"
          rel="noopener noreferrer"
        >
          assassins
        </a>
        , an{' '}
        <a
          href="https://github.com/matthew-gerstman/DMatUF-iPhone-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          iOS app
        </a>{' '}
        for the event, and a{' '}
        <a
          href="https://github.com/matthew-gerstman/TweetTwoScreens"
          target="_blank"
          rel="noopener noreferrer"
        >
          tweet visualizer
        </a>{' '}
        for the jumbotron. This was the first time I got to write real software
        used by real people.
      </p>

      <h2 className={`${styles.sectionTitle} ${styles.zetta}`}>Zetta</h2>

      <p className={styles.paragraph}>
        My first internship and real job was at{' '}
        <a
          href="https://en.wikipedia.org/wiki/Zetta_(cloud_backup)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zetta
        </a>
        , a startup that did cloud backup for enterprise in Sunnyvale
        California. The most senior people came from Netscape and I got to hear
        lots of cool war stories from that era. I was hungry to learn and took
        time outside of work to learn Go and Backbone. I brought these
        technologies into work.
      </p>

      <p className={styles.paragraph}>
        The job was good, but I desperately wanted to live in New York City. I
        started the hunt for my next job.
      </p>

      <h2 className={styles.sectionTitle}>Interviewing</h2>

      <p className={styles.paragraph}>
        Going from Job #1 to Job #2 was one of the most intense periods of my
        career. I woke up at 5 AM every day to do practice problems in Cracking
        the Coding Interview. This was the whiteboard era, so I did them by hand
        in a notebook. Around 8AM I would take an east coast interview, and then
        head to my dayjob. I spoke to 50 companies over the phone, planned a
        week with 6 onsites, and moved myself to New York within 3 months.
      </p>

      <h2 className={`${styles.sectionTitle} ${styles.todaytix}`}>TodayTix</h2>

      <p className={styles.paragraph}>
        I was so excited to land at TodayTix. This was a consumer focused
        product, and something I could explain to non technical friends. I also
        got really into theater. During my 10 years in NYC I saw 250
        performances. I still have the playbills in binders.
      </p>

      <p className={styles.paragraph}>
        TodayTix is also where I learned frontend. In 2016 I got to work on a
        greenfield webapp using all the latest technologies of the time: React,
        Redux, and Lodash. We were really into functional programming and played
        code golf trying to get things down to as few lines as possible.
      </p>

      <p className={styles.paragraph}>
        Overall I had a great time there, but one day I saw an online ad for a
        Dropbox meetup.
      </p>

      <h2 className={`${styles.sectionTitle} ${styles.dropbox}`}>Dropbox</h2>

      <p className={styles.paragraph}>
        I loved Dropbox from the moment it was released. As a kid I wanted the
        ability to keep all my devices in sync. I envisioned a world where we
        could all pick up any device and it would show the same stuff on a
        different screen size. Dropbox was the first product to bring this
        vision to life in the cloud.
      </p>

      <p className={styles.paragraph}>
        I pitched myself as a frontend expert. The company was historically
        infra-heavy and they did not have a lot of in house frontend expertise.
        I had so much imposter syndrome when I joined. I remember my manager
        asked me how I wanted to grow and I was thinking "I just spent the last
        3 years trying to get a job at a big tech company." I had no idea what
        the next goalpost was. My manager taught me about levels and what a
        Staff Engineer was, that became the new goal.
      </p>

      <p className={styles.paragraph}>
        I worked on a lot of cool projects at Dropbox, but the thing I am still
        proudest of is the JS Guild. When I joined all of the frontend engineers
        were in silos and there was no community for them. Me and a couple of
        other people built it.
      </p>

      <p className={styles.paragraph}>
        After Covid, Dropbox went fully remote which I was not ready for. In
        2021 it was time for something new.
      </p>

      <h2 className={`${styles.sectionTitle} ${styles.bluecore}`}>Bluecore</h2>

      <p className={styles.paragraph}>
        I had a really ambitious mandate at Bluecore. "Go build out a frontend
        platform team." I got a lot done in the time I was there. I built
        features, wrote their frontend north star, migrated their component
        library to typescript, shipped an autogenerated API client, and began a
        migration from a python monolith to NextJS.
      </p>

      <p className={styles.paragraph}>
        Unfortunately there was a leadership shakeup. The person who recruited
        me was pushed out and I lost funding to hire for my team. I had a friend
        at Datadog and he pitched me on joining.
      </p>

      <h2 className={`${styles.sectionTitle} ${styles.datadog}`}>Datadog</h2>

      <p className={styles.paragraph}>
        I wanted this job so bad. Datadog is doing some of the best frontend
        work in the industry. The UI is incredibly complex, data-dense, and
        interactive. This was the first time I was nowhere near the best
        frontend engineer at the company. I was thrilled to be in the middle of
        the pack.
      </p>

      <p className={styles.paragraph}>
        I learned so much from so many brilliant people. The developer
        experience is magical and abstractions like Univiz around rendering
        graphs are brilliant.
      </p>

      <p className={styles.paragraph}>
        I spent 2.5 years in the graphing org. The first half of that was as an
        engineer on Dashboards, the second half learning to manage on Notebooks.
        I loved my team, but I realized at some point I wanted to go back to
        building things myself. I wrapped up Notebooks 2.0 and planned a massive
        Graphing Summit. I taught an IC1 class and made so many wonderful
        connections. But I needed to go remote.
      </p>

      <p className={styles.paragraph}>
        My wife and I decided to move to Syracuse, NY. In order to stay at
        Datadog I needed to join a remote friendly org. I wanted to go back to
        IC anyway so that helped. The new org was not the same. I went from
        shipping products to millions of users to working on internal tools that
        had gratuitous amounts of red tape. I was basically working for a
        different company.
      </p>

      <h2 className={styles.sectionTitle}>My Next Role</h2>

      <p className={styles.paragraph}>
        I'm so grateful to be taking a few months off. But I'm also restless, so
        I'm lining up the next thing. I want to build something important and
        work with amazing people.
      </p>

      <p className={styles.paragraph}>
        I want to own features end-to-end. Give me a problem, let me talk to
        users, and I will build and ship a solution that works. I thrive on
        impact, from conception to deployment.
      </p>

      <p className={styles.paragraph}>
        I care about craft: robust systems, modern tech, and interfaces that
        feel right. I want to set a high bar for UX, especially in emerging
        spaces like agent products where we define "good."
      </p>

      <p className={styles.paragraph}>
        I identify what is broken and fix it. Whether it is enabling
        multi-threaded workflows, adding iPad support, or just building dark
        mode.
      </p>

      <p className={styles.paragraph}>
        You can see all of my projects <Link to="/resume">here</Link> and I am
        excited to roll up my sleeves on the next thing.
      </p>
    </div>
  );
};
