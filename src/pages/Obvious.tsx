import React, { useState } from 'react';
import { GradientText } from '../components/GradientText';
import { ProjectGridCard } from '../components/ProjectGridCard';
import { ProjectModal } from '../components/ProjectModal';
import type { Project } from '../data/types/resume.types';
import { projectsMap } from '../data/projects';
import styles from './Obvious.module.css';

// Requirements with their matched project keys
interface Requirement {
  text: string;
  projectKeys: string[];
}

const REQUIREMENTS: Requirement[] = [
  {
    text: 'Requirement 1',
    projectKeys: [
      'datadog-frontend-platform',
      'dropbox-desktop-client',
      'bluecore-email-builder',
    ],
  },
  {
    text: 'Requirement 2',
    projectKeys: [
      'datadog-ci-visibility',
      'todaytix-mobile-web',
      'dropbox-capture',
    ],
  },
  {
    text: 'Requirement 3',
    projectKeys: [
      'datadog-frontend-platform',
      'bluecore-email-builder',
      'todaytix-mobile-web',
    ],
  },
  {
    text: 'Requirement 4',
    projectKeys: [
      'dropbox-desktop-client',
      'datadog-ci-visibility',
      'bluecore-email-builder',
    ],
  },
  {
    text: 'Requirement 5',
    projectKeys: [
      'datadog-frontend-platform',
      'dropbox-capture',
      'todaytix-mobile-web',
    ],
  },
];

export const Obvious: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<{
    project: Project;
    companyName: string;
    companyColor: string;
  } | null>(null);

  const getProjectData = (projectKey: string) => {
    const project = projectsMap[projectKey];
    if (!project) return null;

    return {
      key: projectKey,
      project,
      companyName: getCompanyName(projectKey),
      companyColor: getCompanyColor(projectKey),
    };
  };

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <GradientText as="h1">Why I'm Right for Obvious</GradientText>
        <p className={styles.subtitle}>
          Matching my experience to what you're looking for
        </p>
      </header>

      <div className={styles.requirementsContainer}>
        {REQUIREMENTS.map((requirement, index) => {
          const projects = requirement.projectKeys
            .map(getProjectData)
            .filter((p): p is NonNullable<typeof p> => p !== null);

          return (
            <section key={index} className={styles.requirementSection}>
              <h2 className={styles.requirementTitle}>{requirement.text}</h2>

              <div className={styles.projectsRow}>
                {projects.map(({ key, project, companyName, companyColor }) => (
                  <ProjectGridCard
                    key={key}
                    project={project}
                    companyName={companyName}
                    companyColor={companyColor}
                    onClick={() =>
                      setSelectedProject({ project, companyName, companyColor })
                    }
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

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
