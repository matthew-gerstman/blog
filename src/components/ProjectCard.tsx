import React, { useState } from 'react';
import { CardHeader } from './CardHeader';
import { TagList } from './TagList';
import { LinkList } from './LinkList';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  year: string;
  startYear: number;
  endYear: number;
  description: string;
  context?: string;
  execution?: string[];
  impact?: string;
  role?: string;
  technologies?: string[];
  leadership?: string[];
  links?: { text: string; url: string; }[];
}

export function ProjectCard({ 
  title, 
  startYear,
  endYear,
  description, 
  context,
  execution,
  impact,
  role,
  technologies,
  leadership,
  links
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasDetails = context || execution || leadership;
  const yearDisplay = startYear === endYear ? `${endYear}` : `${startYear}–${endYear}`;

  return (
    <div className={`${styles.projectCard} ${isExpanded ? styles.expanded : ''}`}>
      <div 
        className={styles.projectHeader}
        onClick={() => hasDetails && setIsExpanded(!isExpanded)}
        style={{ cursor: hasDetails ? 'pointer' : 'default' }}
      >
        <CardHeader
          title={title}
          year={yearDisplay}
          role={role}
          hasExpand={hasDetails}
          isExpanded={isExpanded}
        />
        
        <p className={styles.projectDescription}>{description}</p>
        
        {impact && (
          <div className={styles.projectImpact}>
            <span className={styles.outcomeLabel}>Outcome:</span> {impact}
          </div>
        )}
        
        <LinkList links={links} />
        <TagList tags={technologies} className={styles.projectTags} />
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
          </div>
        </div>
      )}
    </div>
  );
}
