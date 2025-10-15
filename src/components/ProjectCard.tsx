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
  const yearDisplay = startYear === endYear ? `${endYear}` : `${startYear}–${endYear}`;

  useScrollToProject(shouldExpand, shouldScroll, hasDetails, cardRef, setIsExpanded);

  return (
    <div
      ref={cardRef}
      data-project-key={projectKey}
      className={`${styles.projectCard} ${isExpanded ? styles.expanded : ''}`}
    >
      <ProjectHeader
        title={title}
        yearDisplay={yearDisplay}
        role={role}
        hasDetails={hasDetails}
        isExpanded={isExpanded}
        onToggle={() => hasDetails && setIsExpanded(!isExpanded)}
      />
      <ProjectBody
        description={description}
        impact={impact}
        technologies={technologies}
        links={links}
      />
      {hasDetails && isExpanded && (
        <BelowTheFoldContent sections={belowTheFold} />
      )}
    </div>
  );
}

// Components
function ProjectHeader({
  title,
  yearDisplay,
  role,
  hasDetails,
  isExpanded,
  onToggle,
}: {
  title: string;
  yearDisplay: string;
  role?: string;
  hasDetails: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={styles.projectHeader}
      onClick={onToggle}
      style={{ cursor: hasDetails ? 'pointer' : 'default' }}
    >
      <CardHeader
        title={title}
        yearDisplay={yearDisplay}
        role={role}
        hasExpand={hasDetails}
        isExpanded={isExpanded}
      />
    </div>
  );
}

function ProjectBody({
  description,
  impact,
  technologies,
  links,
}: {
  description: string;
  impact?: string;
  technologies: string[];
  links: { text: string; url: string }[];
}) {
  return (
    <div className={styles.projectBody}>
      <p className={styles.description}>{description}</p>
      {impact && (
        <div className={styles.impact}>
          <strong>Impact:</strong> {impact}
        </div>
      )}
      <TagList tags={technologies} />
      <LinkList links={links} />
    </div>
  );
}

function BelowTheFoldContent({ sections }: { sections: BelowTheFoldSection[] }) {
  return (
    <div className={styles.belowTheFold}>
      {sections.map((section, sectionIndex) => (
        <BelowTheFoldSection key={sectionIndex} section={section} />
      ))}
    </div>
  );
}

function BelowTheFoldSection({ section }: { section: BelowTheFoldSection }) {
  return (
    <div className={styles.section}>
      <h4 className={styles.sectionTitle}>{section.title}</h4>
      <ul className={styles.sectionList}>
        {section.content.map((item, itemIndex) => (
          <li key={itemIndex} className={styles.sectionItem}>
            <ContentItemRenderer item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContentItemRenderer({ item }: { item: ContentItem }) {
  if (typeof item === 'string') {
    return <>{item}</>;
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
}

// Custom Hooks
function useScrollToProject(
  shouldExpand: boolean,
  shouldScroll: boolean,
  hasDetails: boolean,
  cardRef: React.RefObject<HTMLDivElement>,
  setIsExpanded: (expanded: boolean) => void
) {
  useEffect(() => {
    if (shouldExpand && hasDetails) {
      setIsExpanded(true);

      if (shouldScroll && cardRef.current) {
        setTimeout(() => {
          if (cardRef.current) {
            const elementPosition = cardRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 125;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      }
    }
  }, [shouldExpand, shouldScroll, hasDetails, cardRef, setIsExpanded]);
}
