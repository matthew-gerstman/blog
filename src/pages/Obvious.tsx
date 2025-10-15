import React, { useState } from 'react';
import { GradientText } from '../components/GradientText';
import { ProjectGridCard } from '../components/ProjectGridCard';
import { ProjectModal } from '../components/ProjectModal';
import type { Project } from '../data/types/resume.types';
import { projectsMap } from '../data/projects';
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
      'bluecore-customer-360-revamp',
      'dropbox-showcase',
      'todaytix-web-2-0-react-redux-rebuild',
    ],
  },
  {
    title: 'Performance Optimization & System-Level Thinking',
    description:
      'Bundle strategy, render paths, memoization, concurrent features, asset pipelines, code-splitting, hydration strategies, and profiling',
    projectKeys: [
      'bluecore-frontend-north-star-architecture-modernization',
      'bluecore-tti-dashboard-frontend-monitoring',
      'dropbox-redux-state-management-system',
      'todaytix-web-2-0-react-redux-rebuild',
    ],
  },
  {
    title: 'Full-Stack Feature Development & Product Ownership',
    description:
      'End-to-end ownership from conception to deployment, talking directly to users, and driving key product initiatives',
    projectKeys: [
      'datadog-notebooks-2-0',
      'datadog-dashboard-reporting-pdf-export',
      'dropbox-showcase',
      'todaytix-special-offers-feature',
    ],
  },
  {
    title: 'Modern Frontend Technologies & Architecture',
    description:
      'Deep expertise in TypeScript, JavaScript, React, CSS (modern layout, animations, variables), and scalable web applications',
    projectKeys: [
      'bluecore-frontend-north-star-architecture-modernization',
      'bluecore-typescript-adoption-strict-types',
      'dropbox-redux-state-management-system',
      'todaytix-web-2-0-react-redux-rebuild',
      'datadog-typescript-cleanup-initiative',
    ],
  },
  {
    title: 'Cross-Browser/Device Testing & Reliability',
    description:
      'Establishing state-of-the-art testing, operational excellence, and making experiences "just work" every time',
    projectKeys: [
      'datadog-integration-testing-framework',
      'dropbox-previews-mobile-web',
      'todaytix-web-2-0-react-redux-rebuild',
      'bluecore-tti-dashboard-frontend-monitoring',
    ],
  },
  {
    title: 'Technical Leadership & Standards',
    description:
      'Raising the bar for technical standards, performance, reliability, and influencing decisions across the organization',
    projectKeys: [
      'datadog-notebooks-2-0',
      'bluecore-frontend-north-star-architecture-modernization',
      'dropbox-javascript-guild',
      'bluecore-typescript-adoption-strict-types',
    ],
  },
  {
    title: 'High Velocity & Autonomy',
    description:
      'Operating at an unreasonable pace, doing large amounts of meaningful work quickly with little oversight, and defaulting to simple designs that scale',
    projectKeys: [
      'datadog-dashboard-reporting-pdf-export',
      'todaytix-special-offers-feature',
      'dropbox-zip-file-previews',
      'bluecore-component-library-consolidation',
    ],
  },
  {
    title: 'Design Partnership & User Experience',
    description:
      'Sweating the details (type, motion, density, affordances, empty states), collaborating on design, and protecting quality',
    projectKeys: [
      'datadog-notebooks-2-0',
      'bluecore-customer-360-revamp',
      'dropbox-showcase',
      'todaytix-web-2-0-react-redux-rebuild',
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

      <section className={styles.personalStatement}>
        <div className={styles.statementBlock}>
          <p className={styles.statementText}>
            I knew Obvious had a culture of excellence before I knew it was
            Obvious. The Flatfile API docs made that clear—the quality, the
            attention to detail, the respect for craft.
          </p>
        </div>

        <div className={styles.highlightMetrics}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>40+</span>
            <span className={styles.metricLabel}>hours using Obvious</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>3</span>
            <span className={styles.metricLabel}>unicorn companies</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>1</span>
            <span className={styles.metricLabel}>production bug</span>
          </div>
        </div>

        <div className={styles.experienceHighlights}>
          <div className={styles.highlight}>
            <h3 className={styles.highlightTitle}>Real-Time Collaboration</h3>
            <p className={styles.highlightText}>
              Managed Notebooks 2.0 at Datadog—a highly collaborative real-time
              editing product with ProseMirror, CRDTs, and multiplayer features
            </p>
          </div>
          <div className={styles.highlight}>
            <h3 className={styles.highlightTitle}>Technology Leadership</h3>
            <p className={styles.highlightText}>
              Picked the frontend technologies that took Bluecore to unicorn
              status and led the transformation
            </p>
          </div>
          <div className={styles.highlight}>
            <h3 className={styles.highlightTitle}>Systems Architecture</h3>
            <p className={styles.highlightText}>
              Designed Redux patterns at Dropbox that became the org standard
              and co-led a massive utility library migration
            </p>
          </div>
          <div className={styles.highlight}>
            <h3 className={styles.highlightTitle}>Culture Building</h3>
            <p className={styles.highlightText}>
              Founded JavaScript guilds, organized technical summits, designed
              interview loops, taught IC1 classes
            </p>
          </div>
        </div>
      </section>

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
