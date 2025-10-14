import React from 'react';
import { GradientText } from '../../components/GradientText';
import { ProjectCard } from '../../components/ProjectCard';
import type { ResumeData } from '../../types/resume';
import resumeData from '../../data/resume';
import { projectsMap } from '../../data/projects';
import styles from './Resume.module.css';

const data = resumeData as ResumeData;

export const Resume: React.FC = () => {
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
              {job.projects.map((project, index) => (
                <ProjectCard
                  key={`${job.id}-${index}`}
                  title={projectsMap[project].title}
                  year={projectsMap[project].year}
                  startYear={projectsMap[project].startYear}
                  endYear={projectsMap[project].endYear}
                  description={projectsMap[project].description}
                  belowTheFold={projectsMap[project].belowTheFold}
                  impact={projectsMap[project].impact}
                  technologies={projectsMap[project].technologies || []}
                  role={projectsMap[project].role}
                  links={projectsMap[project].links || []}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
