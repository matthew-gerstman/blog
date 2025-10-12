import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.css';

export const Datadog: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/career" className={styles.backLink}>← Back to Career Overview</Link>
      
      <header className={styles.hero}>
        <h1>Datadog Projects</h1>
        <p className={styles.subtitle}>Senior Software Engineer | September 2022 - Present</p>
        <p className={styles.lead}>
          Leading development of collaborative data science tooling and dashboard infrastructure at one of 
          the world's leading observability platforms.
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.projectDetail}>
          <h2>Notebooks 2.0 (2024)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Complete rebuild of collaborative data science tooling to support real-time multi-user editing 
              and complex notebook interactions at scale.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            <ul>
              <li>Architected real-time collaboration system for data science notebooks</li>
              <li>Built complex state management for multi-user editing scenarios</li>
              <li>Implemented sophisticated UI for notebook cell interactions</li>
              <li>Designed for performance with large datasets and visualizations</li>
              <li>Created robust testing framework for complex UI interactions</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Technologies</h3>
            <div className={styles.techTags}>
              <span className={styles.techTag}>TypeScript</span>
              <span className={styles.techTag}>React</span>
              <span className={styles.techTag}>Real-time Collaboration</span>
              <span className={styles.techTag}>Complex State Management</span>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <ul>
              <li>Shipped production-ready collaborative editing platform</li>
              <li>Enabled data scientists to work together in real-time</li>
              <li>Established patterns for complex collaborative UI development</li>
              <li>Created foundation for future notebook features</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>PDF Reporting System (2023)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Legacy email-based widget snapshot system had ~70% success rate with flaky rendering and poor 
              user experience. Needed reliable, scalable solution for dashboard PDF generation.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Technical Approach</h3>
            
            <h4>Architecture Design</h4>
            <ul>
              <li>Built stateless, horizontally scalable Node.js/Puppeteer system</li>
              <li>Created report-printer service for PDF generation</li>
              <li>Designed print-shop orchestration service for queuing and job management</li>
              <li>Implemented pull-based job system with heartbeat monitoring</li>
            </ul>
            
            <h4>Complex Client/Server Handshake</h4>
            <ul>
              <li>Coordinated 50+ widget types across virtualized dashboards</li>
              <li>Built PrintModeAdapter component to aggregate render status</li>
              <li>Solved DOM flush detection using invisible button technique</li>
              <li>Handled edge cases like split graphs and non-fetching widgets</li>
            </ul>
            
            <h4>Performance Optimization</h4>
            <ul>
              <li>Reduced dev loop from 30 minutes to 1 minute</li>
              <li>Disabled expensive interaction logic in print mode</li>
              <li>Optimized rendering pipeline for dashboards with 10,000+ widgets</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Technologies</h3>
            <div className={styles.techTags}>
              <span className={styles.techTag}>Node.js</span>
              <span className={styles.techTag}>Puppeteer</span>
              <span className={styles.techTag}>TypeScript</span>
              <span className={styles.techTag}>React</span>
              <span className={styles.techTag}>gRPC</span>
              <span className={styles.techTag}>Python</span>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <div className={styles.impactStat}>Widget fidelity: 70% → 100% (~10x improvement)</div>
            <ul>
              <li>Horizontally scalable architecture supporting production load</li>
              <li>Infrastructure reused by 15+ services across organization</li>
              <li>Revenue-generating feature heavily used by customers</li>
              <li>Established Node.js as viable technology at Datadog</li>
            </ul>
          </div>

          <div className={styles.subsection}>
            <h3>Leadership</h3>
            <ul>
              <li>Drove technology selection and architecture decisions</li>
              <li>Led 6-week prototyping process with weekly stakeholder reviews</li>
              <li>Navigated organizational challenges around Node.js adoption</li>
              <li>Coordinated with multiple teams (backend, frontend, email platform)</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectDetail}>
          <h2>Dashboard Type Safety Initiative (2023-2024)</h2>
          
          <div className={styles.subsection}>
            <h3>The Challenge</h3>
            <p>
              Dashboards codebase had excessive TypeScript <code>any</code> usage, leading to runtime errors 
              and poor developer experience.
            </p>
          </div>

          <div className={styles.subsection}>
            <h3>Impact</h3>
            <div className={styles.impactStat}>Cut TypeScript 'any' usage by 50%</div>
            <ul>
              <li>Reduced runtime type errors</li>
              <li>Improved developer experience and code confidence</li>
              <li>Set standards for type safety across organization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Key Themes</h2>
        <ul className={styles.themesList}>
          <li><strong>Systems Thinking:</strong> Built scalable architectures that serve as organizational infrastructure</li>
          <li><strong>Performance Focus:</strong> Consistently optimized for speed without sacrificing maintainability</li>
          <li><strong>Technical Leadership:</strong> Drove major initiatives and established new technology standards</li>
          <li><strong>Quality Standards:</strong> Pioneered testing patterns and type safety initiatives</li>
        </ul>
      </section>
    </div>
  );
};
