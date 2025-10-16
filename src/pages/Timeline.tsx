import React, { useMemo } from 'react';
import { projectsMap, projectsOrder } from '../data/projects';
import styles from './Timeline.module.css';

interface WorkStream {
  id: string;
  name: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  color: string;
}

// Placeholder workstreams for each project
const generatePlaceholderWorkstreams = (projectKey: string): WorkStream[] => {
  const project = projectsMap[projectKey];
  if (!project) return [];

  const duration =
    (project.endYear || new Date().getFullYear()) - project.startYear;
  const streams: WorkStream[] = [];

  // Generate 2-4 workstreams per project based on duration
  const streamCount = Math.min(Math.max(2, Math.floor(duration * 1.5)), 4);

  const colors = [
    '#3b82f6',
    '#8b5cf6',
    '#ec4899',
    '#f59e0b',
    '#10b981',
    '#06b6d4',
  ];

  for (let i = 0; i < streamCount; i++) {
    const startMonth = Math.floor(Math.random() * 12);
    const durationMonths = Math.floor(Math.random() * 12) + 3;
    const startYear =
      project.startYear + Math.floor((i * duration) / streamCount);
    const endYear = startYear + Math.floor(durationMonths / 12);
    const endMonth = (startMonth + durationMonths) % 12;

    streams.push({
      id: `${projectKey}-stream-${i}`,
      name: `Workstream ${i + 1}`,
      startYear,
      startMonth,
      endYear: Math.min(endYear, project.endYear || new Date().getFullYear()),
      endMonth,
      color: colors[i % colors.length],
    });
  }

  return streams;
};

export const Timeline: React.FC = () => {
  const projects = useMemo(() => {
    return projectsOrder.map((key) => projectsMap[key]).filter(Boolean);
  }, []);

  // Calculate date range
  const { minYear, maxYear } = useMemo(() => {
    const years = projects.flatMap((p) => [
      p.startYear,
      p.endYear || new Date().getFullYear(),
    ]);
    return {
      minYear: Math.min(...years),
      maxYear: Math.max(...years),
    };
  }, [projects]);

  const years = useMemo(() => {
    const yearList = [];
    for (let year = minYear; year <= maxYear; year++) {
      yearList.push(year);
    }
    return yearList;
  }, [minYear, maxYear]);

  // Generate workstreams for all projects
  const projectWorkstreams = useMemo(() => {
    return projectsOrder.reduce(
      (acc, key) => {
        acc[key] = generatePlaceholderWorkstreams(key);
        return acc;
      },
      {} as Record<string, WorkStream[]>
    );
  }, []);

  const YEAR_WIDTH = 120; // pixels per year
  const ROW_HEIGHT = 60; // pixels per project row

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Project Timeline</h1>
        <p className={styles.subtitle}>
          A horizontal view of all projects and their workstreams
        </p>
      </div>

      <div className={styles.timelineWrapper}>
        <div className={styles.timeline}>
          {/* Left column: Project names */}
          <div className={styles.projectNames}>
            <div className={styles.yearHeaderSpacer} />
            {projects.map((project) => (
              <div key={project.key} className={styles.projectName}>
                <span className={styles.projectEmoji}>{project.emoji}</span>
                <span className={styles.projectTitle}>{project.title}</span>
              </div>
            ))}
          </div>

          {/* Right side: Scrollable timeline */}
          <div className={styles.timelineScroll}>
            {/* Year headers */}
            <div className={styles.yearHeaders}>
              {years.map((year) => (
                <div
                  key={year}
                  className={styles.yearHeader}
                  style={{ width: YEAR_WIDTH }}
                >
                  {year}
                </div>
              ))}
            </div>

            {/* Timeline grid */}
            <div className={styles.timelineGrid}>
              {/* Vertical year lines */}
              <div className={styles.yearLines}>
                {years.map((year) => (
                  <div
                    key={year}
                    className={styles.yearLine}
                    style={{ left: (year - minYear) * YEAR_WIDTH }}
                  />
                ))}
              </div>

              {/* Project rows with workstreams */}
              {projects.map((project) => {
                const workstreams = projectWorkstreams[project.key] || [];

                return (
                  <div
                    key={project.key}
                    className={styles.projectRow}
                    style={{ height: ROW_HEIGHT }}
                  >
                    {workstreams.map((stream) => {
                      const startOffset =
                        (stream.startYear - minYear) * YEAR_WIDTH +
                        (stream.startMonth / 12) * YEAR_WIDTH;
                      const endOffset =
                        (stream.endYear - minYear) * YEAR_WIDTH +
                        (stream.endMonth / 12) * YEAR_WIDTH;
                      const width = endOffset - startOffset;

                      return (
                        <div
                          key={stream.id}
                          className={styles.workstream}
                          style={{
                            left: startOffset,
                            width: Math.max(width, 20),
                            backgroundColor: stream.color,
                          }}
                          title={stream.name}
                        >
                          <span className={styles.workstreamLabel}>
                            {stream.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
