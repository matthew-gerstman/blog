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

  // Close on escape key
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
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className={styles.modalHeader}>
          <div
            className={styles.companyBadge}
            style={{ borderColor: companyColor }}
          >
            <span style={{ color: companyColor }}>{companyName}</span>
          </div>
        </div>

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
            <div className={styles.impact}>
              <span className={styles.outcomeLabel}>Outcome:</span>{' '}
              {project.impact}
            </div>
          )}

          <LinkList links={project.links || []} />
          <TagList tags={project.technologies || []} className={styles.tags} />

          {project.belowTheFold && project.belowTheFold.length > 0 && (
            <div className={styles.details}>
              {project.belowTheFold.map((section, index) => (
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
          )}
        </div>
      </div>
    </div>
  );
}
