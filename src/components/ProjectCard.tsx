import React, { useState } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  context?: string;
  execution?: string[];
  impact?: string;
  role?: string;
  technologies?: string[];
  leadership?: string[];
}

export function ProjectCard({ 
  title, 
  year, 
  description, 
  context,
  execution,
  impact,
  role,
  technologies,
  leadership
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasDetails = context || execution || leadership;

  return (
    <div className={`${styles.projectCard} ${isExpanded ? styles.expanded : ''}`}>
      <div 
        className={styles.projectHeader}
        onClick={() => hasDetails && setIsExpanded(!isExpanded)}
        style={{ cursor: hasDetails ? 'pointer' : 'default' }}
      >
        <div className={styles.projectTop}>
          <h4 className={styles.projectTitle}>{title}</h4>
          <span className={styles.projectYear}>{year}</span>
          {hasDetails && (
            <span className={styles.expandIcon}>{isExpanded ? '−' : '+'}</span>
          )}
        </div>
        {role && (
          <div className={styles.projectRole}>{role}</div>
        )}
        <p className={styles.projectDescription}>{description}</p>
        {impact && (
          <div className={styles.projectImpact}>
            <span className={styles.impactIcon}>⚡</span>
            {impact}
          </div>
        )}
        {technologies && technologies.length > 0 && (
          <div className={styles.projectTags}>
            {technologies.map((tech, i) => (
              <span key={i} className={styles.projectTag}>{tech}</span>
            ))}
          </div>
        )}
      </div>

      {hasDetails && (
        <div className={styles.projectDetails}>
          <div className={styles.projectDetailsContent}>
            {context && (
              <div className={styles.detailSection}>
                <h5>Context</h5>
                <p>{context}</p>
              </div>
            )}
            
            {execution && execution.length > 0 && (
              <div className={styles.detailSection}>
                <h5>Execution</h5>
                <ul>
                  {execution.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {leadership && leadership.length > 0 && (
              <div className={styles.detailSection}>
                <h5>Leadership</h5>
                <ul>
                  {leadership.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
