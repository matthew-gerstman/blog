import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './JobCard.module.css';

interface Project {
  title: string;
  year: string;
  description: string;
  impact?: string;
  tags?: string[];
}

interface JobCardProps {
  company: string;
  title: string;
  period: string;
  description: string;
  projects: Project[];
  detailsLink: string;
  color?: string;
}

export function JobCard({ company, title, period, description, projects, detailsLink, color = 'var(--grappa-bright)' }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${styles.jobCard} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.jobHeader} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.jobHeaderContent}>
          <div className={styles.companyRow}>
            <h3 className={styles.company} style={{ color }}>{company}</h3>
            <span className={styles.expandIcon}>{isExpanded ? '−' : '+'}</span>
          </div>
          <p className={styles.jobTitle}>{title} | {period}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className={styles.projectsContainer}>
        <div className={styles.projectsContent}>
          <h4 className={styles.projectsTitle}>Key Projects</h4>
          <div className={styles.projectsList}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectItem} style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
                <div className={styles.projectHeader}>
                  <h5 className={styles.projectTitle}>{project.title}</h5>
                  <span className={styles.projectYear}>{project.year}</span>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                {project.impact && (
                  <div className={styles.projectImpact} style={{ borderColor: color }}>
                    <span className={styles.impactIcon}>⚡</span>
                    {project.impact}
                  </div>
                )}
                {project.tags && (
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.projectTag} style={{ backgroundColor: color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link to={detailsLink} className={styles.detailsLink} style={{ color }}>
            View All {company} Projects →
          </Link>
        </div>
      </div>
    </div>
  );
}
