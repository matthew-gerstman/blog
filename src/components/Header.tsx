import { Link, useLocation } from 'react-router-dom';
import type { Theme } from '../types';
import styles from './Header.module.css';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/' || path === '/resume') return 'Resume';
    if (path === '/writing') return 'Writing';
    if (path === '/talks') return 'Talks';
    if (path === '/about') return 'About';
    return null;
  };

  const pageTitle = getPageTitle();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.leftSection}>
          <Link to="/" className={styles.logo}>
            Matthew Gerstman
          </Link>
          {pageTitle && (
            <span className={styles.pageTitle}>{pageTitle}</span>
          )}
        </div>
        <nav className={styles.nav}>
          <Link to="/resume">Resume</Link>
          <Link to="/writing">Writing</Link>
          <Link to="/talks">Talks</Link>
          <Link to="/about">About</Link>
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
