import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Theme } from '../types';
import styles from './Header.module.css';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const location = useLocation();
  const [stickyJobTitle, setStickyJobTitle] = useState<string | null>(null);

  useEffect(() => {
    // Listen for sticky job title events from JobCard
    const handleStickyJob = (
      event: CustomEvent<{ title: string; visible: boolean }>
    ) => {
      setStickyJobTitle(event.detail.visible ? event.detail.title : null);
    };

    window.addEventListener('stickyJobTitle' as any, handleStickyJob);
    return () =>
      window.removeEventListener('stickyJobTitle' as any, handleStickyJob);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/resume' && location.pathname === '/') return true; // Resume is home
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.nameSection}>
          <Link to="/" className={styles.logo}>
            Matthew Gerstman
          </Link>
          {stickyJobTitle && (
            <span className={`${styles.stickyTitle} ${styles.visible}`}>
              {stickyJobTitle}
            </span>
          )}
        </div>
        <nav className={styles.nav}>
          <Link
            to="/resume"
            className={
              isActive('/resume') || isActive('/') ? styles.active : ''
            }
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
      </div>
    </header>
  );
}
