import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header({ theme, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>Matthew Gerstman</Link>
        <nav className={styles.nav}>
          <Link to="/">Writing</Link>
          <Link to="/talks">Talks</Link>
          <a href="https://www.matthewgerstman.com" target="_blank" rel="noopener noreferrer">About</a>
          <button className={styles.themeToggle} onClick={onToggleTheme} aria-label="Toggle theme">
            <span className={styles.themeIcon}>{theme === 'dark' ? '🌙' : '☀️'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
