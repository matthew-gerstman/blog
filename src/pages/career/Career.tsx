import React, { useState } from 'react';
import { GradientText } from '../../components/GradientText';
import type { CareerData } from '../../types/career';
import careerData from '../../data/career.json';
import styles from './Career.module.css';

const data = careerData as CareerData;

export const Career: React.FC = () => {
  const [activeJob, setActiveJob] = useState<string>(data.jobs[0]?.id || '');
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());

  const currentJob = data.jobs.find(job => job.id === activeJob);

  const toggleProject = (projectTitle: string) => {
    setExpandedProjects(prev => {
      const next = new Set(prev);
      if (next.has(projectTitle)) {
        next.delete(projectTitle);
      } else {
        next.add(projectTitle);
      }
      return next;
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <GradientText as="h1">{data.hero.title}</GradientText>
        <p className={styles.subtitle}>{data.hero.subtitle}</p>
      </header>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <nav className={styles.jobNav}>
            {data.jobs.map((job) => (
              <button
                key={job.id}
                className={`${styles.jobButton} ${activeJob === job.id ? styles.active : ''}`}
                onClick={() => setActiveJob(job.id)}
                style={{
                  '--job-color': job.color
                } as React.CSSProperties}
              >
                <div className={styles.jobButtonContent}>
                  <span className={styles.jobCompany}>{job.company}</span>
                  <span className={styles.jobPeriod}>{job.period}</span>
                </div>
              </button>
            ))}
          </nav>
        </aside>

        <main className={styles.main}>
          {currentJob && (
            <div className={styles.jobContent}>
              <div className={styles.jobHeader}>
                <h2 className={styles.companyName} style={{ color: currentJob.color }}>
                  {currentJob.company}
                </h2>
                <p className={styles.role}>{currentJob.role}</p>
                <p className={styles.companyDescription}>{currentJob.description}</p>
              </div>

              <div className={styles.projects}>
                {currentJob.projects.map((project, index) => {
                  const isExpanded = expandedProjects.has(project.title);
                  const hasDetails = project.approach || project.challenge || project.leadership;

                  return (
                    <div key={`${currentJob.id}-${index}`} className={styles.project}>
                      <div className={styles.projectHeader}>
                        <div className={styles.projectTitle}>
                          <h3>{project.title}</h3>
                          {project.year && <span className={styles.year}>{project.year}</span>}
                        </div>
                        {hasDetails && (
                          <button
                            className={styles.expandButton}
                            onClick={() => toggleProject(project.title)}
                            aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              className={isExpanded ? styles.expandedIcon : ''}
                            >
                              <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      <p className={styles.description}>{project.description}</p>

                      {project.technologies && project.technologies.length > 0 && (
                        <div className={styles.technologies}>
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className={styles.tech}>
                              {typeof tech === 'string' ? tech : tech.name}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.impact && (
                        <div className={styles.impact}>
                          <span className={styles.impactIcon}>⚡</span>
                          <span className={styles.impactText}>{project.impact}</span>
                        </div>
                      )}

                      {hasDetails && isExpanded && (
                        <div className={styles.details}>
                          {project.challenge && (
                            <div className={styles.detailSection}>
                              <h4>Challenge</h4>
                              <p>{project.challenge}</p>
                            </div>
                          )}

                          {project.approach && project.approach.length > 0 && (
                            <div className={styles.detailSection}>
                              <h4>Technical Approach</h4>
                              <ul>
                                {project.approach.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {project.leadership && project.leadership.length > 0 && (
                            <div className={styles.detailSection}>
                              <h4>Leadership & Impact</h4>
                              <ul>
                                {project.leadership.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
