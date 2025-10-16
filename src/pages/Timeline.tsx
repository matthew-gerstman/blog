import React, { useState, useEffect, useRef, useCallback } from 'react';
import { projectsOrder, projectsMap } from '../data/projects';

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

  // Calculate year range with buffer for infinite dragging
  const minYear = Math.min(...sortedProjects.map((p) => p.startYear)) - 5;
  const maxYear =
    Math.max(
      ...sortedProjects.map((p) => p.endYear || new Date().getFullYear())
    ) + 5;
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => minYear + i
  );

  const yearWidth = 120; // pixels per year

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
          startYear: dragging.originalStartYear + deltaYears,
          endYear: dragging.originalEndYear + deltaYears,
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
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 pb-12">
      <div className="max-w-full px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Project Timeline
        </h1>

        <div
          ref={timelineRef}
          className="relative overflow-x-auto overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-lg"
          style={{
            height: 'calc(100vh - 200px)',
            cursor: dragging ? 'grabbing' : 'default',
          }}
        >
          <div className="flex">
            {/* Sticky project names column */}
            <div className="sticky left-0 z-20 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
              {/* Header */}
              <div className="h-12 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 font-semibold text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800">
                Project
              </div>

              {/* Project rows */}
              {sortedProjects.map((project) => (
                <div
                  key={project.key}
                  className="h-24 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 bg-white dark:bg-gray-900"
                >
                  <div className="min-w-[200px] max-w-[200px]">
                    <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {project.emoji && (
                        <span className="mr-2">{project.emoji}</span>
                      )}
                      {project.title}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {project.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scrollable timeline area */}
            <div
              className="relative"
              style={{ minWidth: `${years.length * yearWidth}px` }}
            >
              {/* Year headers */}
              <div className="h-12 border-b border-gray-200 dark:border-gray-700 flex bg-gray-50 dark:bg-gray-800 sticky top-0 z-10">
                {years.map((year) => (
                  <div
                    key={year}
                    className="flex-shrink-0 flex items-center justify-center font-semibold text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700"
                    style={{ width: `${yearWidth}px` }}
                  >
                    {year}
                  </div>
                ))}
              </div>

              {/* Project rows with workstreams */}
              {sortedProjects.map((project) => (
                <div
                  key={project.key}
                  className="h-24 border-b border-gray-200 dark:border-gray-700 relative"
                >
                  {/* Year grid lines */}
                  {years.map((year) => (
                    <div
                      key={year}
                      className="absolute top-0 bottom-0 border-r border-gray-100 dark:border-gray-800"
                      style={{
                        left: `${(year - minYear) * yearWidth}px`,
                        width: `${yearWidth}px`,
                      }}
                    />
                  ))}

                  {/* Workstreams */}
                  {workstreams[project.key]?.map((stream) => {
                    const left = (stream.startYear - minYear) * yearWidth;
                    const width =
                      (stream.endYear - stream.startYear) * yearWidth;
                    const isDragging = dragging?.streamId === stream.id;

                    return (
                      <div
                        key={stream.id}
                        className="absolute rounded px-2 py-1 text-white text-xs font-medium transition-all cursor-grab active:cursor-grabbing"
                        style={{
                          left: `${left}px`,
                          width: `${width}px`,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          backgroundColor: stream.color,
                          opacity: isDragging ? 0.7 : 0.9,
                          zIndex: isDragging ? 30 : 1,
                          boxShadow: isDragging
                            ? '0 4px 6px rgba(0,0,0,0.3)'
                            : '0 2px 4px rgba(0,0,0,0.1)',
                        }}
                        onMouseDown={(e) =>
                          handleMouseDown(e, project.key, stream)
                        }
                      >
                        <div className="truncate">{stream.title}</div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          💡 Drag workstreams left or right to adjust timing. Changes are saved
          automatically.
        </div>
      </div>

      <style>{`
        /* Custom scrollbar styling */
        .overflow-x-auto::-webkit-scrollbar,
        .overflow-y-auto::-webkit-scrollbar {
          height: 12px;
          width: 12px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track,
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgb(243 244 246);
        }
        
        .dark .overflow-x-auto::-webkit-scrollbar-track,
        .dark .overflow-y-auto::-webkit-scrollbar-track {
          background: rgb(31 41 55);
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb,
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgb(209 213 219);
          border-radius: 6px;
        }
        
        .dark .overflow-x-auto::-webkit-scrollbar-thumb,
        .dark .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgb(75 85 99);
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb:hover,
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgb(156 163 175);
        }
        
        .dark .overflow-x-auto::-webkit-scrollbar-thumb:hover,
        .dark .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgb(107 114 128);
        }
      `}</style>
    </div>
  );
};
