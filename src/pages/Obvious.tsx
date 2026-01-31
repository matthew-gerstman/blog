import React, { useState } from 'react';
import { GradientText } from '../components/GradientText';
import { ProjectGridCard } from '../components/ProjectGridCard';
import { ProjectModal } from '../components/ProjectModal';
import Shimmer from '../components/Shimmer';
import type { Project } from '../data/types/resume.types';
import { projectsMap } from '../data/projects';
import { jobsMap } from '../data/resume';
import styles from './Obvious.module.css';

// Requirements with their matched project keys
interface Requirement {
  title: string;
  description: string;
  projectKeys: string[];
}

const REQUIREMENTS: Requirement[] = [
  {
    title: 'Complex React Components & Real-Time Collaboration',
    description:
      'Virtualized tables/lists, drag-and-drop editors, real-time collaborative cursors, rich text co-authoring, and low-latency conflict-aware UX',
    projectKeys: [
      'datadog-notebooks-2-0',
      'datadog-dashboard-reporting-pdf-export',
      'dropbox-zip-file-previews',
    ],
  },
  {
    title: 'Performance Optimization & System-Level Thinking',
    description:
      'Bundle strategy, render paths, memoization, concurrent features, asset pipelines, code-splitting, hydration strategies, and profiling',
    projectKeys: [
      'bluecore-frontend-north-star-architecture-modernization',
      'dropbox-underscore-lodash-migration',
      'zetta-performance-optimization-grunt-build-system',
    ],
  },
  {
    title: 'Full-Stack Feature Development & Product Ownership',
    description:
      'End-to-end ownership from conception to deployment, talking directly to users, and driving key product initiatives',
    projectKeys: [
      'datadog-dashboard-reporting-pdf-export',
      'dropbox-plus-plus-family-plans-life-vault',
      'todaytix-special-offers-feature',
    ],
  },
  {
    title: 'Modern Frontend Technologies & Architecture',
    description:
      'Deep expertise in TypeScript, JavaScript, React, CSS (modern layout, animations, variables), and scalable web applications',
    projectKeys: [
      'bluecore-typescript-adoption-strict-types',
      'dropbox-redux-state-management-system',
      'todaytix-web-2-0-react-redux-rebuild',
    ],
  },
  {
    title: 'Cross-Browser/Device Testing & Reliability',
    description:
      'Establishing state-of-the-art testing, operational excellence, and making experiences "just work" every time',
    projectKeys: [
      'datadog-integration-testing-framework',
      'dropbox-previews-mobile-web',
      'todaytix-sentry-rollout',
    ],
  },
  {
    title: 'Technical Leadership & Standards',
    description:
      'Raising the bar for technical standards, performance, reliability, and influencing decisions across the organization',
    projectKeys: [
      'datadog-graphing-summit',
      'dropbox-javascript-guild',
      'bluecore-frontend-interview-loop-design',
    ],
  },
  {
    title: 'High Velocity & Autonomy',
    description:
      'Operating at an unreasonable pace, doing large amounts of meaningful work quickly with little oversight, and defaulting to simple designs that scale',
    projectKeys: [
      'datadog-typescript-cleanup-initiative',
      'bluecore-component-library-consolidation',
      'todaytix-ansible-deployment-automation',
    ],
  },
  {
    title: 'Design Partnership & User Experience',
    description:
      'Sweating the details (type, motion, density, affordances, empty states), collaborating on design, and protecting quality',
    projectKeys: [
      'datadog-notebooks-2-0',
      'dropbox-file-viewer-sdk',
      'zetta-user-enrollment-flow-refactor',
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
    if (!project) {
      console.warn(`Project not found: ${projectKey}`);
      return null;
    }

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
        <GradientText as="h1">Why Obvious</GradientText>
        <p className={styles.subtitle}>
          Building ambitious products with rigor and craft
        </p>
      </header>

      <Shimmer
        type="border"
        position="top"
        animationType="pulse"
        className={styles.personalStatement}
      >
        <p className={styles.statementText}>
          I've haven't been able to stop using Obvious since I got it. The
          product is thoughtfully designed and genuinely useful. Its so much fun
          to work with.
        </p>
        <p className={styles.statementText}>
          I bring the technical depth and leadership this role needs. At
          Datadog, I managed Notebooks 2.0 — a highly collaborative real-time
          editing product—and built the dashboard reporting service from
          scratch. At Bluecore, I picked the frontend technologies that set
          direction for years to come. At Dropbox, I designed patterns that
          became the org standard and co-led a massive utility library
          migration.
        </p>
        <p className={styles.statementText}>
          Beyond the code, I've built the connective tissue that makes teams
          better: founding JavaScript guilds, organizing technical summits,
          designing interview loops, teaching classes.
        </p>
        <p className={styles.statementText}>
          I want to work on Obvious because you're building something that
          matters. This is the coolest product I've seen in a very long time. I
          want to be part of that.
        </p>
        <p className={styles.statementText}>
          I hope this website demonstrates what it looks like when I sweat the
          details. It was built with Obvious.
        </p>
      </Shimmer>

      <div className={styles.requirementsContainer}>
        <h2 className={styles.sectionTitle}>
          Experience Mapped to Requirements
        </h2>
        {REQUIREMENTS.map((requirement, index) => {
          const projects = requirement.projectKeys
            .map(getProjectData)
            .filter((p): p is NonNullable<typeof p> => p !== null);

          return (
            <section key={index} className={styles.requirementSection}>
              <div className={styles.requirementHeader}>
                <h3 className={styles.requirementTitle}>{requirement.title}</h3>
                <p className={styles.requirementDescription}>
                  {requirement.description}
                </p>
              </div>

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
  const jobId = getJobIdFromProjectKey(projectKey);
  return jobId ? jobsMap[jobId]?.company : 'Other';
}

function getCompanyColor(projectKey: string): string {
  const jobId = getJobIdFromProjectKey(projectKey);
  return jobId ? jobsMap[jobId]?.color : '#666666';
}

function getJobIdFromProjectKey(projectKey: string): string | null {
  if (projectKey.startsWith('datadog-')) return 'datadog';
  if (projectKey.startsWith('bluecore-')) return 'bluecore';
  if (projectKey.startsWith('dropbox-')) return 'dropbox';
  if (projectKey.startsWith('todaytix-')) return 'todaytix';
  if (projectKey.startsWith('zetta-')) return 'zetta';
  if (projectKey.startsWith('dance-marathon-')) return 'dance-marathon';
  if (projectKey.startsWith('early-programming-')) return 'early-programming';
  return null;
}
