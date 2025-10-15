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
  return (
    <div className={styles.card} onClick={onClick}>
      <h3 className={styles.title} style={{ color: companyColor }}>
        <span className={styles.companyName}>{companyName}</span>
        {' — '}
        {project.title}
      </h3>

      {project.role && (
        <p className={styles.role} style={{ color: companyColor }}>
          {project.role}
        </p>
      )}

      <p className={styles.description}>{project.description}</p>

      {project.technologies && project.technologies.length > 0 && (
        <TagList tags={project.technologies} className={styles.tags} />
      )}

      <div className={styles.clickHint}>
        <span>View Details →</span>
      </div>
    </div>
  );
}
