import React, { useState } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  challenge?: string;
  approach?: string[];
  impact?: string;
  technologies?: string[];
  leadership?: string[];
}

export function ProjectCard({ 
  title, 
  year, 
  description, 
  challenge,
  approach,
  impact, 
  technologies,
  leadership
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasDetails = challenge || approach || leadership;

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
            {challenge && (
              <div className={styles.detailSection}>
                <h5>The Challenge</h5>
                <p>{challenge}</p>
              </div>
            )}
            
            {approach && approach.length > 0 && (
              <div className={styles.detailSection}>
                <h5>Technical Approach</h5>
                <ul>
                  {approach.map((item, i) => (
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
