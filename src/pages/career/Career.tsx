import React from 'react';
import { GradientText } from '../../components/GradientText';
import { ProjectEntry } from '../../components/ProjectEntry';
import type { CareerData } from '../../types/career';
import careerData from '../../data/career.json';
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
            <div className={styles.jobHeader}>
              <h2 className={styles.companyName} style={{ color: job.color }}>
                {job.company}
              </h2>
              <div className={styles.jobMeta}>
                <p className={styles.role}>{job.role}</p>
                <span className={styles.period}>{job.period}</span>
              </div>
              <p className={styles.companyDescription}>{job.description}</p>
            </div>

            <div className={styles.projects}>
              {job.projects.map((project, index) => (
                <ProjectEntry
                  key={`${job.id}-${index}`}
                  title={project.title}
                  year={project.year}
                  description={project.description}
                  technologies={project.technologies}
                  impact={project.impact}
                  isLast={index === job.projects.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
