import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Theme } from '../types';
import { onStickyJobTitle, type StickyJobData } from '../utils/stickyJobTitle';
import styles from './Header.module.css';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const location = useLocation();
  const stickyJob = useStickyJobTitle();
  const isActive = useActiveRoute(location.pathname);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Matthew Gerstman
        </Link>
        <Navigation isActive={isActive} theme={theme} onToggleTheme={onToggleTheme} />
        {stickyJob && <StickyJobTitle stickyJob={stickyJob} />}
      </div>
    </header>
  );
}

// Components
function Navigation({
  isActive,
  theme,
  onToggleTheme,
}: {
  isActive: (path: string) => boolean;
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <nav className={styles.nav}>
      <Link
        to="/resume"
        className={isActive('/resume') || isActive('/') ? styles.active : ''}
      >
        Resume
      </Link>
      <Link to="/writing" className={isActive('/writing') ? styles.active : ''}>
        Writing
      </Link>
      <Link to="/talks" className={isActive('/talks') ? styles.active : ''}>
        Talks
      </Link>
      <Link to="/about" className={isActive('/about') ? styles.active : ''}>
        About
      </Link>
      <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
    </nav>
  );
}

function ThemeToggle({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <button
      className={styles.themeToggle}
      onClick={onToggleTheme}
      aria-label="Toggle theme"
    >
      <span className={styles.themeIcon}>{theme === 'dark' ? '🌙' : '☀️'}</span>
    </button>
  );
}

function StickyJobTitle({ stickyJob }: { stickyJob: StickyJobData }) {
  return (
    <div
      className={`${styles.stickyTitle} ${styles.visible}`}
      style={{ color: stickyJob.color }}
    >
      {stickyJob.title}
    </div>
  );
}

// Custom Hooks
function useStickyJobTitle(): StickyJobData | null {
  const [stickyJob, setStickyJob] = useState<StickyJobData | null>(null);

  useEffect(() => {
    const cleanup = onStickyJobTitle((data) => {
      setStickyJob(data.visible ? data : null);
    });

    return cleanup;
  }, []);

  return stickyJob;
}

function useActiveRoute(pathname: string) {
  return (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path === '/resume' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };
}
