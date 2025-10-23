import { useEffect, useState, useCallback } from 'react';

/**
 * Hook to enable j/k keyboard navigation for project cards on the resume page
 */
export function useProjectNavigation() {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const getProjectCards = useCallback(() => {
    return Array.from(
      document.querySelectorAll('[data-project-key]')
    ) as HTMLElement[];
  }, []);

  const scrollToProject = useCallback((element: HTMLElement) => {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 125; // offset for sticky header

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, []);

  const focusProject = useCallback(
    (index: number) => {
      const projects = getProjectCards();
      if (index < 0 || index >= projects.length) return;

      const project = projects[index];

      // Remove focus from all projects
      projects.forEach((p) => p.classList.remove('keyboard-focused'));

      // Add focus to selected project
      project.classList.add('keyboard-focused');

      // Scroll to project
      scrollToProject(project);

      setFocusedIndex(index);
    },
    [getProjectCards, scrollToProject]
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
