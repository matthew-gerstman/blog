import React, { useEffect } from 'react';
import { CardHeader } from './CardHeader';
import { TagList } from './TagList';
import { LinkList } from './LinkList';
import type { Project, ContentItem } from '../data/types/resume.types';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  companyName: string;
  companyColor: string;
  onClose: () => void;
}

export function ProjectModal({
  project,
  companyName,
  companyColor,
  onClose,
}: ProjectModalProps) {
  const yearDisplay =
    project.startYear === project.endYear
      ? `${project.endYear}`
      : `${project.startYear}–${project.endYear}`;

  useModalKeyboardAndScroll(onClose);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClose={onClose} />
        <ModalHeader companyName={companyName} companyColor={companyColor} />
        <ModalContent
          project={project}
          yearDisplay={yearDisplay}
          companyColor={companyColor}
        />
      </div>
    </div>
  );
}

// Components
function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button
      className={styles.closeButton}
      onClick={onClose}
      aria-label="Close"
    >
      ×
    </button>
  );
}

function ModalHeader({
  companyName,
  companyColor,
}: {
  companyName: string;
  companyColor: string;
}) {
  return (
    <div className={styles.modalHeader}>
      <div
        className={styles.companyBadge}
        style={{ borderColor: companyColor }}
      >
        <span style={{ color: companyColor }}>{companyName}</span>
      </div>
    </div>
  );
}

function ModalContent({
  project,
  yearDisplay,
  companyColor,
}: {
  project: Project;
  yearDisplay: string;
  companyColor: string;
}) {
  return (
    <div className={styles.modalContent}>
      <CardHeader
        title={project.title}
        role={project.role}
        hasExpand={false}
        isExpanded={true}
        yearDisplay={yearDisplay}
      />

      <p className={styles.description}>{project.description}</p>

      {project.impact && (
        <ImpactSection impact={project.impact} />
      )}

      <LinkList links={project.links || []} />
      <TagList tags={project.technologies || []} className={styles.tags} />

      {project.belowTheFold && project.belowTheFold.length > 0 && (
        <DetailsSections sections={project.belowTheFold} />
      )}
    </div>
  );
}

function ImpactSection({ impact }: { impact: string }) {
  return (
    <div className={styles.impact}>
      <span className={styles.outcomeLabel}>Outcome:</span> {impact}
    </div>
  );
}

function DetailsSections({
  sections,
}: {
  sections: { title: string; content: ContentItem[] }[];
}) {
  return (
    <div className={styles.details}>
      {sections.map((section, index) => (
        <DetailSection key={index} section={section} />
      ))}
    </div>
  );
}

function DetailSection({
  section,
}: {
  section: { title: string; content: ContentItem[] };
}) {
  const isSingleString =
    section.content &&
    section.content.length === 1 &&
    typeof section.content[0] === 'string';

  return (
    <div className={styles.detailSection}>
      <h5>{section.title}</h5>
      {isSingleString ? (
        <p>{section.content[0]}</p>
      ) : (
        <ul>
          {section.content?.map((item, i) => (
            <li key={i}>
              <ContentItemRenderer item={item} />
            </li>
          ))}
        </ul>
      )}
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
function useModalKeyboardAndScroll(onClose: () => void) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);
}
