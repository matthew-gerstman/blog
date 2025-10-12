import { GradientText } from '../../components/GradientText';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.css';

export const DanceMarathon: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/career" className={styles.backLink}>← Back to Career Overview</Link>
      
      <header className={styles.hero}>
        <GradientText as="h1">Dance Marathon at University of Florida</GradientText>
        <p className={styles.subtitle}>Technology Captain → Technology Overall Director | September 2010 - April 2013</p>
        <p className={styles.lead}>
          Led technology strategy for Dance Marathon at UF, one of the largest student-run philanthropies in the country. 
          Built engagement applications used by thousands of participants that continued running for 5+ years after handoff.
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.projectDetail}>
          <h2>DMAssassins (Q3 2012)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Keep thousands of sleep-deprived students engaged and energized throughout the entire 26.6-hour marathon.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Designed real-life "assassins" game with target assignment system</li>
              <li>Built pin verification system for "hits" (silly string tag = elimination)</li>
              <li>Implemented automatic target reassignment upon successful elimination</li>
              <li>Created MySQL backend for game state management</li>
              <li>Built jQuery frontend for game interface</li>
              <li>Designed game mechanics to encourage movement and interaction</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Technologies</h3>
            <div className={styles.techTags}>
              <span className={styles.techTag}>PHP</span>
              <span className={styles.techTag}>MySQL</span>
              <span className={styles.techTag}>jQuery</span>
              <span className={styles.techTag}>Game Mechanics</span>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <div className={styles.impactStat}>Used by thousands for 5+ years</div>
            <ul>
              <li>Massive success keeping thousands engaged throughout marathon</li>
              <li>Created competitive atmosphere that maintained energy levels</li>
              <li>Participants actively sought targets instead of sitting idle</li>
              <li>Memorable experience that became event highlight</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>Tweet Two Screens (Q1 2013)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Enable 26-hour event attendees to share content and see their messages displayed on massive Jumbotron 
              screens, creating shared experiences and boosting engagement.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Built custom tweet visualizers optimized for Jumbotron display</li>
              <li>Implemented real-time tweet aggregation via Twitter API</li>
              <li>Created visual design specifically for large-screen viewing</li>
              <li>Built content moderation system for appropriate messaging</li>
              <li>Designed for high-energy, fast-moving event environment</li>
              <li>Optimized for readability from arena seating</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Technologies</h3>
            <div className={styles.techTags}>
              <span className={styles.techTag}>Twitter API</span>
              <span className={styles.techTag}>Real-time Processing</span>
              <span className={styles.techTag}>jQuery</span>
              <span className={styles.techTag}>Large Display Design</span>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Created powerful shared experiences with messages visible to thousands</li>
              <li>Significantly boosted engagement and event energy</li>
              <li>Participants felt connected to larger event community</li>
              <li>Memorable moments seeing personal messages on Jumbotron</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>DMatUF iPhone App (Q1 2013)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Provide thousands of participants with easy access to essential event information during 26-hour 
              marathon in basketball arena.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Built native iOS event app (pre-widespread adoption era)</li>
              <li>Implemented event schedule and timing features</li>
              <li>Created song request functionality</li>
              <li>Designed locally hosted basketball arena map</li>
              <li>Built real-time event information and updates system</li>
              <li>Optimized for offline-first usage in arena with spotty connectivity</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Technologies</h3>
            <div className={styles.techTags}>
              <span className={styles.techTag}>iOS</span>
              <span className={styles.techTag}>Objective-C</span>
              <span className={styles.techTag}>Native Mobile</span>
              <span className={styles.techTag}>Offline-First</span>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Practical tool that improved participant experience</li>
              <li>Reduced confusion and questions during event</li>
              <li>Enabled easy song requests and schedule checking</li>
              <li>Demonstrated early mobile development capability</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Scale & Impact</h2>
        <ul className={styles.themesList}>
          <li><strong>Usage Scale:</strong> Apps used by thousands of participants during each event</li>
          <li><strong>Longevity:</strong> All apps continued use for 5 subsequent years after handoff</li>
          <li><strong>High-Energy Environment:</strong> Systems handled sleep-deprived users requiring intuitive interfaces</li>
          <li><strong>Critical Infrastructure:</strong> Technology infrastructure for one of largest student-run philanthropies</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Key Themes</h2>
        <ul className={styles.themesList}>
          <li><strong>Early Product Engineering:</strong> Demonstrated product thinking and user empathy early in career</li>
          <li><strong>Full-Stack Capability:</strong> Built complete systems across web, mobile, and backend</li>
          <li><strong>Engaging User Experiences:</strong> Created applications that kept thousands engaged for 26 hours</li>
          <li><strong>Technical Leadership:</strong> Led technology strategy for major student organization</li>
          <li><strong>Lasting Impact:</strong> Built maintainable systems that continued serving users for 5+ years</li>
        </ul>
      </section>
    </div>
  );
};
