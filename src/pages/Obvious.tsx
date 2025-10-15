import React, { useState } from 'react';
import { GradientText } from '../components/GradientText';
import { ProjectGridCard } from '../components/ProjectGridCard';
import { ProjectModal } from '../components/ProjectModal';
import type { Project } from '../data/types/resume.types';
import { projectsMap } from '../data/projects';
import styles from './Obvious.module.css';

// Requirements will be filtered here
const REQUIREMENTS = [
  'Requirement 1',
  'Requirement 2',
  'Requirement 3',
  'Requirement 4',
  'Requirement 5',
];

export const Obvious: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<{
    project: Project;
    companyName: string;
    companyColor: string;
  } | null>(null);

  // For now, we'll show all projects - will filter based on requirements later
  const relevantProjects = Object.entries(projectsMap).map(
    ([key, project]) => ({
      key,
      project,
      // Extract company info from the key or project data
      companyName: getCompanyName(key),
      companyColor: getCompanyColor(key),
    })
  );

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <GradientText as="h1">Why I'm Right for Obvious</GradientText>
        <p className={styles.subtitle}>
          Matching my experience to what you're looking for
        </p>
      </header>

      <section className={styles.requirements}>
        <h2>Key Requirements</h2>
        <ul className={styles.requirementsList}>
          {REQUIREMENTS.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </section>

      <section className={styles.projectsSection}>
        <h2>Relevant Projects</h2>
        <div className={styles.projectGrid}>
          {relevantProjects.map(
            ({ key, project, companyName, companyColor }) => (
              <ProjectGridCard
                key={key}
                project={project}
                companyName={companyName}
                companyColor={companyColor}
                onClick={() =>
                  setSelectedProject({ project, companyName, companyColor })
                }
              />
            )
          )}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject.project}
          companyName={selectedProject.companyName}
          companyColor={selectedProject.companyColor}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

// Helper functions to extract company info from project keys
function getCompanyName(projectKey: string): string {
  if (projectKey.startsWith('datadog-')) return 'Datadog';
  if (projectKey.startsWith('bluecore-')) return 'Bluecore';
  if (projectKey.startsWith('dropbox-')) return 'Dropbox';
  if (projectKey.startsWith('todaytix-')) return 'TodayTix';
  if (projectKey.startsWith('zetta-')) return 'Zetta.net';
  if (projectKey.startsWith('dance-marathon-')) return 'Dance Marathon';
  return 'Other';
}

function getCompanyColor(projectKey: string): string {
  if (projectKey.startsWith('datadog-')) return '#632CA6';
  if (projectKey.startsWith('bluecore-')) return '#00254a';
  if (projectKey.startsWith('dropbox-')) return '#0061FF';
  if (projectKey.startsWith('todaytix-')) return '#FF6B6B';
  if (projectKey.startsWith('zetta-')) return '#4A90E2';
  if (projectKey.startsWith('dance-marathon-')) return '#FFD700';
  return '#666666';
}
