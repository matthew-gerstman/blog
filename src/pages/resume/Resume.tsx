import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { GradientText } from '../../components/GradientText';
import { JobCard } from '../../components/JobCard';
import type { ResumeData } from '../../types/resume';
import resumeData from '../../data/resume';
import styles from './Resume.module.css';

const data = resumeData as ResumeData;

export const Resume: React.FC = () => {
  const [searchParams] = useSearchParams();
  const expandAll = searchParams.has('expandAll');
  const targetProject = searchParams.get('project');

  return (
    <div className={styles.container}>
      {data.hero && (
        <header className={styles.hero}>
          <GradientText as="h1">{data.hero.title}</GradientText>
          <p className={styles.subtitle}>{data.hero.subtitle}</p>
        </header>
      )}

      <div className={styles.timeline}>
        {data.jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            expandAll={expandAll}
            targetProject={targetProject}
          />
        ))}
      </div>
    </div>
  );
};
