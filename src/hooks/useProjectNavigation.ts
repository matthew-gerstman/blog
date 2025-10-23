import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Hook to enable j/k keyboard navigation for project cards on the resume page
 * Integrates with existing ?project=key query parameter behavior
 */
export function useProjectNavigation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const getProjectCards = useCallback(() => {
    return Array.from(
      document.querySelectorAll('[data-project-key]')
    ) as HTMLElement[];
  }, []);

  const getProjectKey = useCallback((element: HTMLElement): string | null => {
    return element.getAttribute('data-project-key');
  }, []);

  const scrollToProject = useCallback((element: HTMLElement) => {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 125; // offset for sticky header

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  const expandProject = useCallback((element: HTMLElement) => {
    // Click the project header to expand it if it has details
    const projectHeader = element.querySelector(
      '[class*="projectHeader"]'
    ) as HTMLElement;
    if (projectHeader && projectHeader.style.cursor === 'pointer') {
      // Check if not already expanded
      const isExpanded =
        element.classList.contains('expanded') ||
        element.className.includes('expanded');
      if (!isExpanded) {
        projectHeader.click();
      }
    }
  }, []);

  const focusProject = useCallback(
    (index: number) => {
      const projects = getProjectCards();
      if (index < 0 || index >= projects.length) return;

      const project = projects[index];
      const projectKey = getProjectKey(project);

      // Remove focus from all projects
      projects.forEach((p) => p.classList.remove('keyboard-focused'));

      // Add focus to selected project
      project.classList.add('keyboard-focused');

      // Update URL with project query param (preserves expandAll if present)
      if (projectKey) {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('project', projectKey);
        setSearchParams(newParams, { replace: true });
      }

      // Expand the project
      expandProject(project);

      // Scroll to project (with delay to allow expansion animation)
      setTimeout(() => {
        scrollToProject(project);
      }, 100);

      setFocusedIndex(index);
    },
    [
      getProjectCards,
      getProjectKey,
      scrollToProject,
      expandProject,
      searchParams,
      setSearchParams,
    ]
  );

  const handleNext = useCallback(() => {
    const projects = getProjectCards();
    if (projects.length === 0) return;

    const nextIndex = focusedIndex + 1;
    if (nextIndex < projects.length) {
      focusProject(nextIndex);
    }
  }, [focusedIndex, getProjectCards, focusProject]);

  const handlePrevious = useCallback(() => {
    const projects = getProjectCards();
    if (projects.length === 0) return;

    const prevIndex = focusedIndex === -1 ? 0 : focusedIndex - 1;
    if (prevIndex >= 0) {
      focusProject(prevIndex);
    }
  }, [focusedIndex, getProjectCards, focusProject]);

  // Sync focused index with query param on mount
  useEffect(() => {
    const targetProject = searchParams.get('project');
    if (targetProject) {
      const projects = getProjectCards();
      const index = projects.findIndex(
        (p) => getProjectKey(p) === targetProject
      );
      if (index !== -1) {
        setFocusedIndex(index);
      }
    }
  }, [searchParams, getProjectCards, getProjectKey]);

  // Cleanup focus when component unmounts
  useEffect(() => {
    return () => {
      const projects = getProjectCards();
      projects.forEach((p) => p.classList.remove('keyboard-focused'));
    };
  }, [getProjectCards]);

  return {
    handleNext,
    handlePrevious,
    focusedIndex,
  };
}
