import React from 'react';
import { TagList } from './TagList';
import type { Project } from '../data/types/resume.types';
import styles from './ProjectGridCard.module.css';

interface ProjectGridCardProps {
  project: Project;
  companyName: string;
  companyColor: string;
  onClick: () => void;
}

export function ProjectGridCard({
  project,
  companyName,
  companyColor,
  onClick,
}: ProjectGridCardProps) {
  const yearDisplay =
    project.startYear === project.endYear
      ? `${project.endYear}`
      : `${project.startYear}–${project.endYear}`;

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardHeader}>
        <div
          className={styles.companyBadge}
          style={{ borderColor: companyColor }}
        >
          <span style={{ color: companyColor }}>{companyName}</span>
        </div>
        <span className={styles.year}>{yearDisplay}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>

      {project.role && <p className={styles.role}>{project.role}</p>}

      <p className={styles.description}>{project.description}</p>

      {project.impact && (
        <div className={styles.impact}>
          <span className={styles.impactLabel}>Impact:</span> {project.impact}
        </div>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <TagList tags={project.technologies} className={styles.tags} />
      )}

      <div className={styles.clickHint}>
        <span>View Details →</span>
      </div>
    </div>
  );
}
