import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.css';

export const Dropbox: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/career" className={styles.backLink}>← Back to Career Overview</Link>
      
      <header className={styles.hero}>
        <h1>Dropbox Projects</h1>
        <p className={styles.subtitle}>Software Engineer → Senior Software Engineer | June 2017 - June 2021</p>
        <p className={styles.lead}>
          Architected state management systems, led frontend development for major product launches, and founded 
          organizational best practices initiatives at one of the world's leading collaboration platforms.
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.projectDetail}>
          <h2>Redux State Management System (Q1 2018)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Inconsistent state management patterns across teams led to bugs, poor performance, and difficult maintenance.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Designed comprehensive Redux architecture with TypeScript type-safe patterns</li>
              <li>Created reusable patterns for common state operations</li>
              <li>Built extensive documentation and training materials</li>
              <li>Systematic rollout across organization with team-by-team support</li>
              <li>Established best practices and code review guidelines</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Technologies</h3>
            <div className={styles.techTags}>
              <span className={styles.techTag}>TypeScript</span>
              <span className={styles.techTag}>Redux</span>
              <span className={styles.techTag}>React</span>
              <span className={styles.techTag}>State Management</span>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Adopted by ~10 teams across ~25 features</li>
              <li>Became company standard for state management</li>
              <li>Reduced state-related bugs significantly</li>
              <li>Improved developer velocity and code maintainability</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>Plus Plus: Family Plans & Life Vault (2020)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Launch new product line with complex family sharing features, requiring sophisticated state 
              management and user experience design.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Led end-to-end frontend architecture from ideation to launch</li>
              <li>Designed complex state management for family account relationships</li>
              <li>Built intuitive UI for family plan management</li>
              <li>Coordinated cross-functional teams (design, product, backend)</li>
              <li>Implemented Life Vault feature for important document storage</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Successfully launched new product line</li>
              <li>Created new revenue stream for Dropbox</li>
              <li>Established patterns for complex multi-user features</li>
              <li>Delivered sophisticated family sharing experience</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>File Viewer SDK (Q4 2018)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Multiple Dropbox surfaces needed consistent file preview functionality across web and desktop platforms.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Led architecture and bootstrapping of cross-platform SDK</li>
              <li>Owned build pipeline and asset optimization</li>
              <li>Designed API for embedding file previews</li>
              <li>Coordinated between web and desktop teams</li>
              <li>Built extensible system for adding new file types</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Infrastructure used across multiple Dropbox surfaces</li>
              <li>Consistent file preview experience across platforms</li>
              <li>Reusable component for future products</li>
              <li>Optimized asset delivery and performance</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>JavaScript Guild (Founded Q3 2017)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              No centralized frontend knowledge sharing or best practices coordination across growing engineering organization.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Founded JavaScript Guild as community for frontend engineers</li>
              <li>Organized regular knowledge-sharing sessions</li>
              <li>Published newsletters with tips and updates</li>
              <li>Coordinated cross-team initiatives</li>
              <li>Established forum for discussing frontend challenges</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Improved frontend culture and standards organization-wide</li>
              <li>Created community of practice across teams</li>
              <li>Facilitated knowledge transfer and collaboration</li>
              <li>Influenced organizational frontend direction</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>JavaScript Guild Summit (2019-2020)</h2>
          
          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Brought together 100+ frontend engineers from across company</li>
              <li>Strengthened cross-team relationships</li>
              <li>Enabled deeper technical collaboration</li>
              <li>Created lasting organizational connections</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Key Themes</h2>
        <ul className={styles.themesList}>
          <li><strong>Systems Thinking:</strong> Built architectures that scale across teams and become organizational standards</li>
          <li><strong>Product Engineering:</strong> Led end-to-end development from concept to launch for revenue-driving features</li>
          <li><strong>Community Building:</strong> Founded and nurtured communities that improve organizational culture</li>
          <li><strong>Technical Leadership:</strong> Shaped frontend direction through architecture and knowledge sharing</li>
        </ul>
      </section>
    </div>
  );
};
