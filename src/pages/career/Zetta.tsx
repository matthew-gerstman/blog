import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.css';

export const Zetta: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/career" className={styles.backLink}>← Back to Career Overview</Link>
      
      <header className={styles.hero}>
        <h1>Zetta.net Projects</h1>
        <p className={styles.subtitle}>Intern → Software Engineer | June 2012 - December 2015</p>
        <p className={styles.lead}>
          Cloud storage platform development with rapid progression from intern to technical leader. Led major 
          migrations, established engineering best practices, and built core product features.
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.projectDetail}>
          <h2>Backbone + RESTful APIs Migration (Q1 2015)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Legacy backend was non-RESTful with inconsistent patterns, making development slow and error-prone.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Led complete backend migration to RESTful resource architecture</li>
              <li>Migrated frontend to Backbone.js for better structure</li>
              <li>Established API design standards and conventions</li>
              <li>Created documentation and training materials</li>
              <li>Coordinated organization-wide adoption</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Modernized entire API layer</li>
              <li>Improved maintainability and developer experience</li>
              <li>Reduced API-related bugs</li>
              <li>First major technical leadership role</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>SVN → Git Migration (Q2 2015)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Team using outdated SVN version control needed migration to modern Git workflows.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Planned and executed organizational migration from SVN to Git</li>
              <li>Established branching strategies and PR processes</li>
              <li>Created Git training materials and documentation</li>
              <li>Provided hands-on training for team members</li>
              <li>Set up code review practices</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Modernized development workflow</li>
              <li>Improved collaboration through PR reviews</li>
              <li>Enabled better branching and experimentation</li>
              <li>Led change management for entire team</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>Data Restore Flow (Q4 2014)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Users needed intuitive way to restore deleted or previous versions of data.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Built complete data restore flow</li>
              <li>Created file selection and restoration UI</li>
              <li>Integrated backend restore operations</li>
              <li>Designed user experience for complex operations</li>
              <li>Handled version history and conflict resolution</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <div className={styles.impactStat}>Core revenue-driving feature</div>
            <ul>
              <li>Critical differentiator for cloud storage product</li>
              <li>Excellent user experience for complex operation</li>
              <li>Demonstrated product engineering capability</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>CI + Sentry Implementation (Q3 2015)</h2>
          
          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Caught bugs before production deployment</li>
              <li>Improved system visibility and reliability</li>
              <li>Reduced customer-impacting incidents</li>
              <li>Established operational excellence practices</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Growth Trajectory</h2>
        <ul className={styles.themesList}>
          <li><strong>Q2-Q3 2012 (Intern):</strong> Learning professional development, implementing structured logging</li>
          <li><strong>2014 (Solid Contributor):</strong> Multiple feature and infrastructure projects, demonstrating full-stack capability</li>
          <li><strong>2015 (Technical Leader):</strong> Leading migrations, training engineers, establishing organizational standards</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Key Themes</h2>
        <ul className={styles.themesList}>
          <li><strong>Early Technical Leadership:</strong> Led major migrations and trained engineers just 2 years out of college</li>
          <li><strong>Full-Stack Development:</strong> Worked across backend APIs, frontend UI, build systems, and deployment infrastructure</li>
          <li><strong>Migration Expertise:</strong> Successfully led organizational changes requiring technical execution and change management</li>
          <li><strong>Rapid Growth:</strong> Progression from intern to technical leader in 3.5 years</li>
        </ul>
      </section>
    </div>
  );
};
