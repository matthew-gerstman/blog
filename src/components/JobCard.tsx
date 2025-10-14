import React from 'react';
import { ProjectCard } from './ProjectCard';
import type { Job } from '../types/resume';
import styles from './JobCard.module.css';

interface JobCardProps {
  job: Job;
  expandAll?: boolean;
  targetProject?: string | null;
}

export function JobCard({
  job,
  expandAll = false,
  targetProject,
}: JobCardProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.jobInfo}>
        <h2 className={styles.companyName} style={{ color: job.color }}>
          {job.company}
        </h2>
        <p className={styles.role}>{job.role}</p>
        <span className={styles.period}>{job.period}</span>
        <p className={styles.companyDescription}>{job.description}</p>
      </div>

      <div className={styles.projects}>
        {job.projects.map((project, index) => {
          const projectKey = project.key || `${job.id}-${index}`;
          const isTargetProject = targetProject === projectKey;

          return (
            <ProjectCard
              key={projectKey}
              projectKey={projectKey}
              title={project.title}
              year={project.year}
              startYear={project.startYear}
              endYear={project.endYear}
              description={project.description}
              belowTheFold={project.belowTheFold}
              impact={project.impact}
              technologies={project.technologies || []}
              role={project.role}
              links={project.links || []}
              shouldExpand={isTargetProject || expandAll}
              shouldScroll={isTargetProject}
            />
          );
        })}
      </div>
    </div>
  );
}
