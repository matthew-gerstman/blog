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
      {data.hero && <ResumeHero hero={data.hero} />}
      <JobTimeline
        jobs={data.jobs}
        expandAll={expandAll}
        targetProject={targetProject}
      />
    </div>
  );
};

// Components
function ResumeHero({ hero }: { hero: { title: string; subtitle: string } }) {
  return (
    <header className={styles.hero}>
      <GradientText as="h1">{hero.title}</GradientText>
      <p className={styles.subtitle}>{hero.subtitle}</p>
    </header>
  );
}

function JobTimeline({
  jobs,
  expandAll,
  targetProject,
}: {
  jobs: ResumeData['jobs'];
  expandAll: boolean;
  targetProject: string | null;
}) {
  return (
    <div className={styles.timeline}>
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          expandAll={expandAll}
          targetProject={targetProject}
        />
      ))}
    </div>
  );
}
