import { useState, useEffect, useRef } from 'react';
import { CardHeader } from './CardHeader';
import { TagList } from './TagList';
import { LinkList } from './LinkList';
import type { ContentItem } from '../data/types/resume.types';
import styles from './ProjectCard.module.css';

interface BelowTheFoldSection {
  title: string;
  content: ContentItem[];
}

interface ProjectCardProps {
  title: string;
  year: string;
  startYear: number;
  endYear?: number;
  description: string;
  belowTheFold?: BelowTheFoldSection[];
  impact?: string;
  role?: string;
  technologies: string[];
  links: { text: string; url: string }[];
  projectKey?: string;
  shouldExpand?: boolean;
  shouldScroll?: boolean;
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
  links,
  projectKey,
  shouldExpand = false,
  shouldScroll = false,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const hasDetails = belowTheFold && belowTheFold.length > 0;
  const yearDisplay =
    startYear === endYear ? `${endYear}` : `${startYear}–${endYear}`;

  // Handle external expansion and scrolling from URL parameters
  useEffect(() => {
    if (shouldExpand && hasDetails) {
      setIsExpanded(true);

      if (shouldScroll && cardRef.current) {
        // Wait for expansion animation to start, then scroll with header offset
        setTimeout(() => {
          if (cardRef.current) {
            const elementPosition = cardRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset for sticky header

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    }
  }, [shouldExpand, shouldScroll, hasDetails]);

  const renderContentItem = (item: ContentItem) => {
    if (typeof item === 'string') {
      return item;
    }

    return (
      <>
        {item.prefix && (
          <>
            <span className={styles.contentPrefix}>{item.prefix}</span>
            {' — '}
          </>
        )}
        {item.text}
      </>
    );
  };

  return (
    <div
      ref={cardRef}
      data-project-key={projectKey}
      className={`${styles.projectCard} ${isExpanded ? styles.expanded : ''}`}
    >
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
            {belowTheFold?.map((section, index) => (
              <div key={index} className={styles.detailSection}>
                <h5>{section.title}</h5>
                {section.content &&
                section.content.length === 1 &&
                typeof section.content[0] === 'string' ? (
                  <p>{section.content[0]}</p>
                ) : (
                  <ul>
                    {section.content?.map((item, i) => (
                      <li key={i}>{renderContentItem(item)}</li>
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
