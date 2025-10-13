import React from 'react';
import { GradientText } from '../../components/GradientText';
import { ProjectCard } from '../../components/ProjectCard';
import type { CareerData } from '../../types/career';
import careerData from '../../data/career';
import styles from './Career.module.css';

const data = careerData as CareerData;

export const Career: React.FC = () => {
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
              <h2 className={styles.companyName} style={{ color: job.color }}>{job.company}</h2>
              <p className={styles.role}>{job.role}</p>
              <span className={styles.period}>{job.period}</span>
              <p className={styles.companyDescription}>{job.description}</p>
            </div>

            <div className={styles.projects}>
              {job.projects.map((project, index) => (
                <ProjectCard
                  key={`${job.id}-${index}`}
                  title={project.title}
                  year={project.year}
                  startYear={project.startYear}
                  endYear={project.endYear}
                  description={project.description}
                  belowTheFold={project.belowTheFold}
                  impact={project.impact}
                  technologies={project.technologies}
                  role={project.role}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
