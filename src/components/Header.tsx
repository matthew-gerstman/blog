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
  const [stickyJob, setStickyJob] = useState<StickyJobData | null>(null);

  useEffect(() => {
    const cleanup = onStickyJobTitle((data) => {
      setStickyJob(data.visible ? data : null);
    });

    return cleanup;
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/writing' && location.pathname === '/') return true; // Writing is home
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Matthew Gerstman
        </Link>
        <nav className={styles.nav}>
          <Link
            to="/resume"
            className={isActive('/resume') ? styles.active : ''}
          >
            Resume
          </Link>
          <Link
            to="/writing"
            className={isActive('/writing') ? styles.active : ''}
          >
            Writing
          </Link>
          <Link to="/talks" className={isActive('/talks') ? styles.active : ''}>
            Talks
          </Link>
          <Link to="/about" className={isActive('/about') ? styles.active : ''}>
            About
          </Link>
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <span className={styles.themeIcon}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
          </button>
        </nav>
        {stickyJob && (
          <div
            className={`${styles.stickyTitle} ${styles.visible}`}
            style={{ color: stickyJob.color }}
          >
            {stickyJob.title}
          </div>
        )}
      </div>
    </header>
  );
}
