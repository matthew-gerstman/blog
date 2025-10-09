import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchPosts } from '../utils/search';
import { calculateReadingTime } from '../utils/reading';
import { bannerImages } from '../data/banners';
import styles from './SearchModal.module.css';

export function SearchModal({ isOpen, onClose, posts }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }
    const filtered = searchPosts(posts, query).slice(0, 8);
    setResults(filtered);
    setSelectedIndex(0);
  }, [query, posts]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      navigate(`/tech/${results[selectedIndex].slug}`);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (post) => {
    navigate(`/tech/${post.slug}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <div className={styles.results}>
          {!query && <div className={styles.empty}>Type to search articles...</div>}
          {query && results.length === 0 && <div className={styles.empty}>No articles found</div>}
          {results.map((post, index) => {
            const banner = bannerImages[post.slug];
            const readingTime = calculateReadingTime(post.content);
            return (
              <div
                key={post.id}
                className={`${styles.resultItem} ${index === selectedIndex ? styles.selected : ''}`}
                onClick={() => handleSelect(post)}
              >
                {banner ? (
                  <img src={banner} alt={post.title} className={styles.icon} />
                ) : (
                  <div className={`${styles.icon} ${styles.placeholder}`}>📝</div>
                )}
                <div className={styles.content}>
                  <div className={styles.title}>{post.title}</div>
                  <div className={styles.meta}>{post.date} · {readingTime} min read</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
