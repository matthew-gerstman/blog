import React, { useState, useEffect, useRef, useCallback } from 'react';
import { projectsOrder, projectsMap } from '../data/projects';
import styles from './Timeline.module.css';

interface WorkStream {
  id: string;
  title: string;
  startYear: number;
  endYear: number;
  color: string;
}

interface ProjectWorkStreams {
  [projectKey: string]: WorkStream[];
}

// Generate initial placeholder workstreams
const generatePlaceholderWorkstreams = (): ProjectWorkStreams => {
  const workstreams: ProjectWorkStreams = {};

  projectsOrder.forEach((key) => {
    const project = projectsMap[key];
    if (!project) return;

    const colors = [
      '#3b82f6',
      '#10b981',
      '#f59e0b',
      '#ef4444',
      '#8b5cf6',
      '#ec4899',
    ];
    const numStreams = Math.floor(Math.random() * 3) + 2; // 2-4 workstreams

    workstreams[key] = Array.from({ length: numStreams }, (_, i) => {
      const duration = Math.random() * 2 + 0.5; // 0.5-2.5 years
      const start =
        project.startYear +
        Math.random() *
          (project.endYear ? project.endYear - project.startYear : 0);

      return {
        id: `${key}-stream-${i}`,
        title: `Workstream ${i + 1}`,
        startYear: start,
        endYear: Math.min(
          start + duration,
          project.endYear || start + duration
        ),
        color: colors[i % colors.length],
      };
    });
  });

  return workstreams;
};

const STORAGE_KEY = 'timeline-workstreams';

export const Timeline: React.FC = () => {
  const [workstreams, setWorkstreams] = useState<ProjectWorkStreams>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse stored workstreams:', e);
      }
    }
    return generatePlaceholderWorkstreams();
  });

  const [dragging, setDragging] = useState<{
    projectKey: string;
    streamId: string;
    startX: number;
    originalStartYear: number;
    originalEndYear: number;
  } | null>(null);

  const [yearRange, setYearRange] = useState<{ min: number; max: number }>(
    () => {
      const sortedProjects = [...projectsOrder]
        .map((key) => projectsMap[key])
        .filter(Boolean);
      const minYear = Math.min(...sortedProjects.map((p) => p.startYear)) - 5;
      const maxYear =
        Math.max(
          ...sortedProjects.map((p) => p.endYear || new Date().getFullYear())
        ) + 5;
      return { min: minYear, max: maxYear };
    }
  );

  const timelineRef = useRef<HTMLDivElement>(null);

  // Persist to localStorage whenever workstreams change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workstreams));
  }, [workstreams]);

  // Sort projects chronologically (earliest first)
  const sortedProjects = [...projectsOrder]
    .map((key) => projectsMap[key])
    .filter(Boolean)
    .sort((a, b) => {
      if (a.startYear !== b.startYear) {
        return a.startYear - b.startYear;
      }
      return (a.endYear || 9999) - (b.endYear || 9999);
    });

  const yearWidth = 120; // pixels per year
  const years = Array.from(
    { length: yearRange.max - yearRange.min + 1 },
    (_, i) => yearRange.min + i
  );

  const handleMouseDown = (
    e: React.MouseEvent,
    projectKey: string,
    stream: WorkStream
  ) => {
    e.preventDefault();
    setDragging({
      projectKey,
      streamId: stream.id,
      startX: e.clientX,
      originalStartYear: stream.startYear,
      originalEndYear: stream.endYear,
    });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;

      const deltaX = e.clientX - dragging.startX;
      const deltaYears = deltaX / yearWidth;

      const newStartYear = dragging.originalStartYear + deltaYears;
      const newEndYear = dragging.originalEndYear + deltaYears;

      // Dynamically expand the timeline if dragging beyond current range
      setYearRange((prev) => {
        const expandBuffer = 5; // Add 5 years buffer when expanding
        let newMin = prev.min;
        let newMax = prev.max;

        if (newStartYear < prev.min) {
          newMin = Math.floor(newStartYear) - expandBuffer;
        }
        if (newEndYear > prev.max) {
          newMax = Math.ceil(newEndYear) + expandBuffer;
        }

        // Only update if changed
        if (newMin !== prev.min || newMax !== prev.max) {
          return { min: newMin, max: newMax };
        }
        return prev;
      });

      setWorkstreams((prev) => {
        const newWorkstreams = { ...prev };
        const projectStreams = newWorkstreams[dragging.projectKey];
        if (!projectStreams) return prev;

        const streamIndex = projectStreams.findIndex(
          (s) => s.id === dragging.streamId
        );
        if (streamIndex === -1) return prev;

        const newStreams = [...projectStreams];
        newStreams[streamIndex] = {
          ...newStreams[streamIndex],
          startYear: newStartYear,
          endYear: newEndYear,
        };

        newWorkstreams[dragging.projectKey] = newStreams;
        return newWorkstreams;
      });
    },
    [dragging, yearWidth]
  );

  const handleMouseUp = useCallback(() => {
    setDragging(null);
  }, []);

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragging, handleMouseMove, handleMouseUp]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Project Timeline</h1>
        <p className={styles.subtitle}>
          Drag workstreams to adjust timing • Timeline expands automatically •
          Automatically saved
        </p>
      </div>

      <div
        className={styles.timelineWrapper}
        ref={timelineRef}
        style={{ cursor: dragging ? 'grabbing' : 'default' }}
      >
        <div className={styles.timeline}>
          {/* Left column: Project names */}
          <div className={styles.projectNames}>
            <div className={styles.yearHeaderSpacer} />
            {sortedProjects.map((project) => (
              <div key={project.key} className={styles.projectName}>
                {project.emoji && (
                  <span className={styles.projectEmoji}>{project.emoji}</span>
                )}
                <div className={styles.projectTitle}>{project.title}</div>
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
                  style={{ width: `${yearWidth}px` }}
                >
                  {year}
                </div>
              ))}
            </div>

            {/* Timeline grid */}
            <div
              className={styles.timelineGrid}
              style={{ width: `${years.length * yearWidth}px` }}
            >
              {/* Project rows */}
              {sortedProjects.map((project) => (
                <div
                  key={project.key}
                  className={styles.projectRow}
                  style={{ height: '60px' }}
                >
                  {/* Workstreams */}
                  {workstreams[project.key]?.map((stream) => {
                    const left = (stream.startYear - yearRange.min) * yearWidth;
                    const width =
                      (stream.endYear - stream.startYear) * yearWidth;
                    const isDragging = dragging?.streamId === stream.id;

                    return (
                      <div
                        key={stream.id}
                        className={styles.workstream}
                        style={{
                          left: `${left}px`,
                          width: `${width}px`,
                          backgroundColor: stream.color,
                          opacity: isDragging ? 0.7 : 0.9,
                          zIndex: isDragging ? 30 : 1,
                          cursor: isDragging ? 'grabbing' : 'grab',
                        }}
                        onMouseDown={(e) =>
                          handleMouseDown(e, project.key, stream)
                        }
                      >
                        <div className={styles.workstreamLabel}>
                          {stream.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
