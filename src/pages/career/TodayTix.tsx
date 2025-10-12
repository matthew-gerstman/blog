import { GradientText } from '../../components/GradientText';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.css';

export const TodayTix: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/career" className={styles.backLink}>← Back to Career Overview</Link>
      
      <header className={styles.hero}>
        <GradientText as="h1">TodayTix Projects</GradientText>
        <p className={styles.subtitle}>Software Engineer | January 2016 - June 2017</p>
        <p className={styles.lead}>
          Full-stack development for mobile-first theater ticketing platform, delivering dramatic performance 
          improvements and building greenfield React applications from scratch.
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.projectDetail}>
          <h2>Page Load Optimization (2016)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Mobile page load times of 8 seconds for a mobile-first theater ticketing app were killing 
              conversion rates and revenue.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Comprehensive performance profiling to identify bottlenecks</li>
              <li>Systematic bundle strategy optimization and code splitting</li>
              <li>Asset delivery improvements (compression, CDN, caching)</li>
              <li>Render path performance enhancements</li>
              <li>Critical path optimization for above-the-fold content</li>
              <li>Eliminated render-blocking resources</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Technologies</h3>
            <div className={styles.techTags}>
              <span className={styles.techTag}>JavaScript</span>
              <span className={styles.techTag}>Webpack</span>
              <span className={styles.techTag}>Performance Optimization</span>
              <span className={styles.techTag}>Asset Delivery</span>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <div className={styles.impactStat}>95% reduction: 8 seconds → 400ms</div>
            <ul>
              <li>Direct positive impact on conversion rates and revenue</li>
              <li>Dramatically improved user experience</li>
              <li>Established performance culture and monitoring</li>
              <li>Created patterns for future optimization work</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>Web 2.0: Complete React + Redux Rebuild (Q3-Q4 2016)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Build production-ready React + Redux application from scratch to replace legacy system.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Complete application architecture design</li>
              <li>Built comprehensive component library</li>
              <li>Implemented Redux state management patterns</li>
              <li>Created Node.js authentication layer</li>
              <li>Designed and built checkout flow</li>
              <li>Production deployment and monitoring</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Technologies</h3>
            <div className={styles.techTags}>
              <span className={styles.techTag}>React</span>
              <span className={styles.techTag}>Redux</span>
              <span className={styles.techTag}>Node.js</span>
              <span className={styles.techTag}>ES6+</span>
              <span className={styles.techTag}>Webpack</span>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Shipped production app serving real customers</li>
              <li>Established scalable patterns for team</li>
              <li>Modern architecture enabling faster feature development</li>
              <li>Improved developer experience and velocity</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>Special Offers Feature (Q2 2016)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Users losing lottery for popular shows were leaving the app without purchasing alternatives, 
              representing lost revenue.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>End-to-end feature design from user research to implementation</li>
              <li>Built Groovy APIs with complex SQL queries for offer matching</li>
              <li>Designed frontend experience for offer selection</li>
              <li>Implemented business logic for offer eligibility</li>
              <li>Created compelling UI to convert disappointed users</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Created new revenue stream from previously lost sales</li>
              <li>Turned user disappointment into conversion opportunity</li>
              <li>Demonstrated end-to-end product engineering capability</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>Sentry Rollout & Ansible Deployment (2016-2017)</h2>
          
          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Dramatically improved production visibility</li>
              <li>Proactive error detection before user reports</li>
              <li>Faster, more reliable deployments</li>
              <li>Established operational excellence culture</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Key Themes</h2>
        <ul className={styles.themesList}>
          <li><strong>Performance Engineering:</strong> Achieved dramatic improvements (95% reduction) through systematic optimization</li>
          <li><strong>Full-Stack Capability:</strong> Worked effectively across React, Node.js, Groovy, SQL, and infrastructure</li>
          <li><strong>Product Engineering:</strong> End-to-end ownership from user research to business impact</li>
          <li><strong>Operational Excellence:</strong> Established monitoring, automation, and reliability practices</li>
        </ul>
      </section>
    </div>
  );
};
