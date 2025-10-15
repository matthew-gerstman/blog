import React, { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import type { Job } from '../types/resume';
import {
  emitStickyJobTitle,
  clearStickyJobTitle,
} from '../utils/stickyJobTitle';
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
  const jobInfoRef = useRef<HTMLDivElement>(null);
  const isSticky = useStickyObserver(jobInfoRef, job.company, job.color);

  return (
    <div className={styles.timelineItem}>
      <JobInfo job={job} jobInfoRef={jobInfoRef} isSticky={isSticky} />
      <ProjectList job={job} expandAll={expandAll} targetProject={targetProject} />
    </div>
  );
}

// Components
function JobInfo({
  job,
  jobInfoRef,
  isSticky,
}: {
  job: Job;
  jobInfoRef: React.RefObject<HTMLDivElement>;
  isSticky: boolean;
}) {
  return (
    <div
      ref={jobInfoRef}
      className={`${styles.jobInfo} ${isSticky ? styles.sticky : ''}`}
    >
      <h2 className={styles.companyName} style={{ color: job.color }}>
        {job.company}
      </h2>
      <p className={styles.role}>{job.role}</p>
      <span className={styles.period}>{job.period}</span>
      <p className={styles.companyDescription}>{job.description}</p>
    </div>
  );
}

function ProjectList({
  job,
  expandAll,
  targetProject,
}: {
  job: Job;
  expandAll: boolean;
  targetProject: string | null | undefined;
}) {
  return (
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
  );
}

// Custom Hooks
function useStickyObserver(
  ref: React.RefObject<HTMLDivElement>,
  company: string,
  color: string
): boolean {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const stuck = entry.intersectionRatio < 1;
        setIsSticky(stuck);

        emitStickyJobTitle({
          title: company,
          color: color,
          visible: stuck,
        });
      },
      {
        threshold: [1],
        rootMargin: '-100px 0px 0px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      clearStickyJobTitle();
    };
  }, [company, color, ref]);

  return isSticky;
}
