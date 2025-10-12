import React from 'react';
import { Link } from 'react-router-dom';
import { GradientText } from '../../components/GradientText';
import styles from './Career.module.css';

export const Career: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <GradientText as="h1">Matthew Gerstman</GradientText>
        <p className={styles.subtitle}>Software Engineer</p>
        <p className={styles.lead}>
          Over 12 years building complex, performant systems that make sophisticated technology feel simple. 
          I specialize in bridging powerful capabilities with production-ready interfaces, with a proven track 
          record of leading technical initiatives from concept to full rollout at scale companies.
        </p>
      </header>

      <section className={styles.section}>
        <h2>Professional Summary</h2>
        <p>
          Frontend Product Engineer with deep full-stack experience, focused on building systems that scale 
          across teams and organizations. I thrive at the intersection of complex technical challenges and 
          user experience, with particular expertise in making non-deterministic systems feel reliable and trustworthy.
        </p>
        
        <div className={styles.strengths}>
          <h3>Core Strengths</h3>
          <ul>
            <li>Systems thinking and scalable architecture design</li>
            <li>Performance engineering and optimization</li>
            <li>Technical leadership and knowledge sharing</li>
            <li>End-to-end product ownership</li>
            <li>Migration expertise and organizational change management</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Career Timeline</h2>
        
        <div className={styles.job}>
          <h3>Datadog</h3>
          <p className={styles.jobTitle}>Senior Software Engineer | September 2022 - Present</p>
          <p>
            Leading development of collaborative data science tooling and dashboard infrastructure. 
            Focus on real-time collaboration, PDF reporting systems, and frontend platform improvements.
          </p>
          <Link to="/career/datadog" className={styles.btn}>View Datadog Projects →</Link>
        </div>

        <div className={styles.job}>
          <h3>Bluecore</h3>
          <p className={styles.jobTitle}>Staff Engineer | June 2021 - September 2022</p>
          <p>
            Led frontend platform architecture, TypeScript migration, and component library modernization 
            for marketing technology platform.
          </p>
          <Link to="/career/bluecore" className={styles.btn}>View Bluecore Projects →</Link>
        </div>

        <div className={styles.job}>
          <h3>Dropbox</h3>
          <p className={styles.jobTitle}>Software Engineer → Senior Software Engineer | June 2017 - June 2021</p>
          <p>
            Architected Redux state management systems, led frontend architecture for greenfield applications, 
            and founded JavaScript Guild for organizational best practices.
          </p>
          <Link to="/career/dropbox" className={styles.btn}>View Dropbox Projects →</Link>
        </div>

        <div className={styles.job}>
          <h3>TodayTix</h3>
          <p className={styles.jobTitle}>Software Engineer | January 2016 - June 2017</p>
          <p>
            Full-stack development for theater ticketing platform. Achieved 95% page load reduction 
            (8s → 400ms) and built complete React + Redux application from scratch.
          </p>
          <Link to="/career/todaytix" className={styles.btn}>View TodayTix Projects →</Link>
        </div>

        <div className={styles.job}>
          <h3>Zetta.net</h3>
          <p className={styles.jobTitle}>Intern → Software Engineer | June 2012 - December 2015</p>
          <p>
            Cloud storage platform development. Led SVN → Git migration, established CI/CD practices, 
            and built core data lifecycle features.
          </p>
          <Link to="/career/zetta" className={styles.btn}>View Zetta.net Projects →</Link>
        </div>

        <div className={styles.job}>
          <h3>Dance Marathon at University of Florida</h3>
          <p className={styles.jobTitle}>Technology Captain → Technology Overall Director | September 2010 - April 2013</p>
          <p>
            Led technology strategy for one of the largest student-run philanthropies. Built engagement 
            apps used by thousands of participants for 5+ years.
          </p>
          <Link to="/career/dance-marathon" className={styles.btn}>View Dance Marathon Projects →</Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Technical Expertise</h2>
        <div className={styles.techGrid}>
          <div className={styles.techCategory}>
            <h4>Languages & Frameworks</h4>
            <p>TypeScript, JavaScript, React, Redux, Node.js, Python, PHP, SQL</p>
          </div>
          <div className={styles.techCategory}>
            <h4>Specializations</h4>
            <p>Real-time collaboration systems, Complex UI, Performance optimization, State management at scale, API architecture</p>
          </div>
          <div className={styles.techCategory}>
            <h4>Leadership & Process</h4>
            <p>Technical mentorship, Migration planning, Community building, Cross-functional coordination</p>
          </div>
        </div>
        <Link to="/career/skills" className={styles.btn}>Full Skills & Philosophy →</Link>
      </section>

      <section className={styles.section}>
        <h2>Featured Projects</h2>
        
        <div className={styles.projectCard}>
          <h3>Notebooks 2.0</h3>
          <p className={styles.projectCompany}>Datadog, 2024</p>
          <p>Complete rebuild of collaborative data science tooling with real-time multi-user editing.</p>
        </div>

        <div className={styles.projectCard}>
          <h3>PDF Reporting System</h3>
          <p className={styles.projectCompany}>Datadog, 2023</p>
          <p>Built horizontally scalable Node.js/Puppeteer system, improving widget fidelity from ~70% to near 100%.</p>
        </div>

        <div className={styles.projectCard}>
          <h3>Redux State Management</h3>
          <p className={styles.projectCompany}>Dropbox, 2018</p>
          <p>Designed Redux architecture adopted by ~10 teams across ~25 features, becoming company standard.</p>
        </div>

        <div className={styles.projectCard}>
          <h3>Page Load Optimization</h3>
          <p className={styles.projectCompany}>TodayTix, 2016</p>
          <p>Achieved 95% reduction in page load time (8 seconds → 400ms) through systematic optimization.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Origin Story</h2>
        <p>
          Started programming at age 11 with Visual Basic, driven by curiosity about how programs work. 
          Built websites at 12, explored networking protocols at 13, and ran a freelance tech support 
          business in high school.
        </p>
        <p>
          Won the Don Estridge Award for technical achievement in middle school. Formal CS education 
          covered algorithms, data structures, and hardware fundamentals. Early experiences emphasized 
          deep technical understanding, strong communication, and user empathy—principles that continue 
          to shape my work today.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Contact & Links</h2>
        <ul className={styles.contactLinks}>
          <li><a href="https://matthewgerstman.com">Blog: matthewgerstman.com</a></li>
          <li><a href="https://github.com/matthewgerstman">GitHub: github.com/matthewgerstman</a></li>
          <li><a href="https://linkedin.com/in/matthewgerstman">LinkedIn: linkedin.com/in/matthewgerstman</a></li>
        </ul>
      </section>
    </div>
  );
};
