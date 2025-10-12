import React from 'react';
import { GradientText } from '../../components/GradientText';
import { ProjectCard } from '../../components/ProjectCard';
import styles from './Career.module.css';

export const Career: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <GradientText as="h1">Career Timeline</GradientText>
        <p className={styles.subtitle}>12+ years building systems that scale</p>
      </header>

      <div className={styles.timeline}>
        {/* Datadog */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot} style={{ backgroundColor: 'var(--grappa-bright)' }} />
          <div className={styles.timelineContent}>
            <div className={styles.companyHeader}>
              <h2>Datadog</h2>
              <span className={styles.period}>September 2022 - Present</span>
            </div>
            <p className={styles.role}>Senior Software Engineer</p>
            <p className={styles.companyDescription}>
              Leading development of collaborative data science tooling and dashboard infrastructure at one of the world's leading observability platforms.
            </p>

            <div className={styles.projects}>
              <ProjectCard
                title="Notebooks 2.0"
                year="2024"
                description="Complete rebuild of collaborative data science tooling to support real-time multi-user editing and complex notebook interactions at scale."
                challenge="Build production-ready collaborative editing platform for data science notebooks with complex state management for multi-user scenarios."
                approach={[
                  "Architected real-time collaboration system for data science notebooks",
                  "Built complex state management for multi-user editing scenarios",
                  "Implemented sophisticated UI for notebook cell interactions",
                  "Designed for performance with large datasets and visualizations",
                  "Created robust testing framework for complex UI interactions"
                ]}
                technologies={["TypeScript", "React", "Real-time Collaboration"]}
              />

              <ProjectCard
                title="PDF Reporting System"
                year="2023"
                description="Built horizontally scalable Node.js/Puppeteer system for dashboard PDF generation."
                impact="Widget fidelity: 70% → 100% (~10x improvement)"
                challenge="Legacy email-based widget snapshot system had ~70% success rate with flaky rendering and poor user experience."
                approach={[
                  "Built stateless, horizontally scalable Node.js/Puppeteer system",
                  "Created report-printer service for PDF generation",
                  "Coordinated 50+ widget types across virtualized dashboards",
                  "Built PrintModeAdapter component to aggregate render status",
                  "Reduced dev loop from 30 minutes to 1 minute"
                ]}
                leadership={[
                  "Drove technology selection and architecture decisions",
                  "Led 6-week prototyping process with weekly stakeholder reviews",
                  "Navigated organizational challenges around Node.js adoption"
                ]}
                technologies={["Node.js", "Puppeteer", "TypeScript", "gRPC"]}
              />

              <ProjectCard
                title="Dashboard Type Safety Initiative"
                year="2023-2024"
                description="Systematic TypeScript migration across dashboards codebase."
                impact="Cut TypeScript 'any' usage by 50%"
                technologies={["TypeScript", "React", "Redux"]}
              />

              <ProjectCard
                title="Integration Testing Framework"
                year="2023"
                description="Pioneered integration testing approach for complex UI interactions in dashboards."
                technologies={["TypeScript", "React", "Testing"]}
              />
            </div>
          </div>
        </div>

        {/* Bluecore */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot} style={{ backgroundColor: 'var(--grappa)' }} />
          <div className={styles.timelineContent}>
            <div className={styles.companyHeader}>
              <h2>Bluecore</h2>
              <span className={styles.period}>June 2021 - September 2022</span>
            </div>
            <p className={styles.role}>Staff Engineer</p>
            <p className={styles.companyDescription}>
              Led frontend platform architecture, TypeScript migration, and component library modernization for marketing technology platform.
            </p>

            <div className={styles.projects}>
              <ProjectCard
                title="TypeScript Migration & Component Library"
                year="2021-2022"
                description="Led migration of entire component library to TypeScript with modern CSS architecture and design system principles."
                approach={[
                  "Led migration of entire component library to TypeScript",
                  "Standardized component library with modern CSS patterns",
                  "Implemented CSS variables for theming",
                  "Created responsive layout systems"
                ]}
                technologies={["TypeScript", "React", "Modern CSS", "Design Systems"]}
              />

              <ProjectCard
                title="Autogenerated API Client"
                year="2021"
                description="Built autogenerated API client system with gRPC/HTTP transcoding."
                impact="Eliminated manual API client maintenance"
                approach={[
                  "Architected autogenerated API client system",
                  "Implemented gRPC/HTTP transcoding for seamless protocol translation",
                  "Created code generation pipeline from API definitions"
                ]}
                technologies={["TypeScript", "gRPC", "Code Generation"]}
              />

              <ProjectCard
                title="Weekly TypeScript & React Training"
                year="2021-2022"
                description="Designed and taught comprehensive training curriculum for entire engineering team."
                technologies={["Teaching", "TypeScript", "React"]}
              />
            </div>
          </div>
        </div>
        {/* Dropbox */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot} style={{ backgroundColor: '#7B61FF' }} />
          <div className={styles.timelineContent}>
            <div className={styles.companyHeader}>
              <h2>Dropbox</h2>
              <span className={styles.period}>June 2017 - June 2021</span>
            </div>
            <p className={styles.role}>Software Engineer → Senior Software Engineer</p>
            <p className={styles.companyDescription}>
              Architected Redux state management systems, led frontend architecture for greenfield applications, and founded JavaScript Guild for organizational best practices.
            </p>

            <div className={styles.projects}>
              <ProjectCard
                title="Redux State Management System"
                year="2018"
                description="Designed comprehensive Redux architecture with TypeScript type-safe patterns adopted across the organization."
                impact="Adopted by ~10 teams across ~25 features"
                approach={[
                  "Designed comprehensive Redux architecture with TypeScript",
                  "Created reusable patterns for common state operations",
                  "Built extensive documentation and training materials",
                  "Systematic rollout across organization with team support"
                ]}
                technologies={["TypeScript", "Redux", "React"]}
              />

              <ProjectCard
                title="Plus Plus: Family Plans & Life Vault"
                year="2020"
                description="Led end-to-end frontend architecture for new product line with complex family sharing features."
                impact="Created new revenue stream"
                approach={[
                  "Led end-to-end frontend architecture from ideation to launch",
                  "Designed complex state management for family account relationships",
                  "Built intuitive UI for family plan management"
                ]}
                technologies={["TypeScript", "React", "Redux"]}
              />

              <ProjectCard
                title="File Viewer SDK"
                year="2018"
                description="Led architecture and bootstrapping of cross-platform SDK for file preview functionality."
                technologies={["TypeScript", "React", "SDK Development"]}
              />

              <ProjectCard
                title="JavaScript Guild"
                year="2017-2021"
                description="Founded JavaScript Guild and organized 100+ attendee technical summits for frontend engineers."
                technologies={["Community", "Leadership"]}
              />
            </div>
          </div>
        </div>

        {/* TodayTix */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot} style={{ backgroundColor: '#FF6B6B' }} />
          <div className={styles.timelineContent}>
            <div className={styles.companyHeader}>
              <h2>TodayTix</h2>
              <span className={styles.period}>January 2016 - June 2017</span>
            </div>
            <p className={styles.role}>Software Engineer</p>
            <p className={styles.companyDescription}>
              Full-stack development for theater ticketing platform. Achieved 95% page load reduction and built complete React + Redux application from scratch.
            </p>

            <div className={styles.projects}>
              <ProjectCard
                title="Page Load Optimization"
                year="2016"
                description="Comprehensive performance profiling and systematic optimization of mobile-first theater ticketing app."
                impact="95% reduction: 8 seconds → 400ms"
                approach={[
                  "Comprehensive performance profiling to identify bottlenecks",
                  "Systematic bundle strategy optimization and code splitting",
                  "Asset delivery improvements (compression, CDN, caching)",
                  "Critical path optimization for above-the-fold content"
                ]}
                technologies={["JavaScript", "Webpack", "Performance"]}
              />

              <ProjectCard
                title="Web 2.0: React + Redux Rebuild"
                year="2016"
                description="Built production-ready React + Redux application from scratch with comprehensive component library."
                technologies={["React", "Redux", "Node.js", "ES6+"]}
              />

              <ProjectCard
                title="Special Offers Feature"
                year="2016"
                description="End-to-end feature design converting users who lost lottery into alternative sales."
                impact="New revenue stream from lost sales"
                technologies={["Groovy", "React", "SQL", "Full-Stack"]}
              />
            </div>
          </div>
        </div>

        {/* Zetta.net */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot} style={{ backgroundColor: '#4ECDC4' }} />
          <div className={styles.timelineContent}>
            <div className={styles.companyHeader}>
              <h2>Zetta.net</h2>
              <span className={styles.period}>June 2012 - December 2015</span>
            </div>
            <p className={styles.role}>Intern → Software Engineer</p>
            <p className={styles.companyDescription}>
              Cloud storage platform development. Led SVN → Git migration, established CI/CD practices, and built core data lifecycle features.
            </p>

            <div className={styles.projects}>
              <ProjectCard
                title="Backbone + RESTful APIs Migration"
                year="2015"
                description="Led complete backend migration to RESTful architecture and frontend migration to Backbone.js."
                impact="First major technical leadership role"
                approach={[
                  "Led complete backend migration to RESTful resource architecture",
                  "Migrated frontend to Backbone.js for better structure",
                  "Established API design standards and conventions"
                ]}
                technologies={["Backbone.js", "RESTful APIs", "JavaScript"]}
              />

              <ProjectCard
                title="SVN → Git Migration"
                year="2015"
                description="Planned and executed organizational migration with team training and code review processes."
                leadership={[
                  "Planned and executed organizational migration from SVN to Git",
                  "Established branching strategies and PR processes",
                  "Created Git training materials and documentation"
                ]}
                technologies={["Git", "Version Control"]}
              />

              <ProjectCard
                title="Data Restore Flow"
                year="2014"
                description="Built complete data restore flow with intuitive UI for version history and conflict resolution."
                impact="Core revenue-driving feature"
                technologies={["Full-Stack", "UI/UX", "Product Engineering"]}
              />

              <ProjectCard
                title="CI + Sentry Implementation"
                year="2015"
                description="Set up continuous integration pipeline and Sentry for production error tracking."
                technologies={["CI/CD", "Sentry", "Testing"]}
              />
            </div>
          </div>
        </div>

        {/* Dance Marathon */}
        <div className={styles.timelineItem}>
          <div className={styles.timelineDot} style={{ backgroundColor: '#FFD93D' }} />
          <div className={styles.timelineContent}>
            <div className={styles.companyHeader}>
              <h2>Dance Marathon at University of Florida</h2>
              <span className={styles.period}>September 2010 - April 2013</span>
            </div>
            <p className={styles.role}>Technology Captain → Technology Overall Director</p>
            <p className={styles.companyDescription}>
              Led technology strategy for one of the largest student-run philanthropies. Built engagement apps used by thousands of participants for 5+ years.
            </p>

            <div className={styles.projects}>
              <ProjectCard
                title="DMAssassins"
                year="2012"
                description="Real-life 'assassins' game with target assignment system keeping thousands engaged throughout 26.6-hour marathon."
                impact="Used by thousands for 5+ years"
                approach={[
                  "Designed real-life 'assassins' game with target assignment system",
                  "Built pin verification system for 'hits'",
                  "Implemented automatic target reassignment upon elimination",
                  "Created MySQL backend for game state management"
                ]}
                technologies={["PHP", "MySQL", "jQuery", "Game Design"]}
              />

              <ProjectCard
                title="Tweet Two Screens"
                year="2013"
                description="Custom tweet visualizers optimized for Jumbotron display with real-time aggregation."
                approach={[
                  "Built custom tweet visualizers optimized for Jumbotron display",
                  "Implemented real-time tweet aggregation via Twitter API",
                  "Created visual design specifically for large-screen viewing"
                ]}
                technologies={["Twitter API", "jQuery", "Real-time"]}
              />

              <ProjectCard
                title="DMatUF iPhone App"
                year="2013"
                description="Native iOS event app with schedule, song requests, and arena map for offline-first usage."
                technologies={["iOS", "Objective-C", "Native Mobile"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
