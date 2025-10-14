import { Link } from 'react-router-dom';
import type { Theme } from '../types';
import styles from './Header.module.css';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Matthew Gerstman
        </Link>
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
