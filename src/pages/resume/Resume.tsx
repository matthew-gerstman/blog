import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GradientText } from '../../components/GradientText';
import { ProjectCard } from '../../components/ProjectCard';
import type { ResumeData } from '../../types/resume';
import resumeData from '../../data/resume';
import styles from './Resume.module.css';

const data = resumeData as ResumeData;

export const Resume: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [targetProject, setTargetProject] = useState<string | null>(null);

  useEffect(() => {
    const projectKey = searchParams.get('project');
    if (projectKey) {
      setTargetProject(projectKey);
      // Clear the target after a delay to allow re-triggering if needed
      const timer = setTimeout(() => setTargetProject(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <GradientText as="h1">{data.hero.title}</GradientText>
        <p className={styles.subtitle}>{data.hero.subtitle}</p>
      </header>

      <div className={styles.timeline}>
        {data.jobs.map((job) => (
          <div key={job.id} className={styles.timelineItem}>
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
                    shouldExpand={isTargetProject}
                    shouldScroll={isTargetProject}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
