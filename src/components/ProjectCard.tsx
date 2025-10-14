import React, { useState } from 'react';
import { CardHeader } from './CardHeader';
import { TagList } from './TagList';
import { LinkList } from './LinkList';
import styles from './ProjectCard.module.css';

interface BelowTheFoldSection {
  title: string;
  content: string[];
}

interface ProjectCardProps {
  title: string;
  year: string;
  startYear: number;
  endYear: number;
  description: string;
  belowTheFold?: BelowTheFoldSection[];
  impact?: string;
  role?: string;
  technologies?: string[];
  links?: { text: string; url: string; }[];
}

export function ProjectCard({ 
  title, 
  startYear,
  endYear,
  description, 
  belowTheFold,
  impact,
  role,
  technologies,
  links
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasDetails = belowTheFold && belowTheFold.length > 0;
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
          role={role}
          hasExpand={hasDetails}
          isExpanded={isExpanded}
          yearDisplay={yearDisplay}
        />
        
        <p className={styles.projectDescription}>
          {description}
        </p>
        
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
            {belowTheFold?.map((section, index) => (
              <div key={index} className={styles.detailSection}>
                <h5>{section.title}</h5>
                {section.content && section.content.length === 1 && !Array.isArray(section.content) ? (
                  <p>{section.content[0]}</p>
                ) : (
                  <ul>
                    {section.content?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
