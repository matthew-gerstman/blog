import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../types';
import type { Project } from '../data/types/resume.types';
import { searchPosts, searchProjects } from '../utils/search';
import { calculateReadingTime } from '../utils/reading';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
  projects?: Project[];
}

type SearchResult =
  | { type: 'post'; item: Post }
  | { type: 'project'; item: Project };

export function SearchModal({
  isOpen,
  onClose,
  posts,
  projects = [],
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
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

    // Search both posts and projects
    const filteredPosts = searchPosts(posts, query).slice(0, 5);
    const filteredProjects = searchProjects(projects, query).slice(0, 5);

    // Combine results with type tags
    const combined: SearchResult[] = [
      ...filteredPosts.map((post) => ({ type: 'post' as const, item: post })),
      ...filteredProjects.map((project) => ({
        type: 'project' as const,
        item: project,
      })),
    ].slice(0, 8);

    setResults(combined);
    setSelectedIndex(0);
  }, [query, posts, projects]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      const result = results[selectedIndex];
      if (result.type === 'post') {
        navigate(`/tech/${result.item.slug}`);
      } else {
        navigate(`/resume?project=${result.item.key}`);
      }
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (result: SearchResult) => {
    if (result.type === 'post') {
      navigate(`/tech/${result.item.slug}`);
    } else {
      navigate(`/resume?project=${result.item.key}`);
    }
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
          placeholder="Search articles and projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <div className={styles.results}>
          {!query && (
            <div className={styles.empty}>
              Type to search articles and projects...
            </div>
          )}
          {query && results.length === 0 && (
            <div className={styles.empty}>No results found</div>
          )}
          {results.map((result, index) => {
            if (result.type === 'post') {
              const post = result.item;
              const banner = post.banner_img;
              const readingTime = calculateReadingTime(post.content);
              return (
                <div
                  key={`post-${post.id}`}
                  className={`${styles.resultItem} ${index === selectedIndex ? styles.selected : ''}`}
                  onClick={() => handleSelect(result)}
                >
                  {banner ? (
                    <img
                      src={banner}
                      alt={post.title}
                      className={styles.icon}
                    />
                  ) : (
                    <div className={`${styles.icon} ${styles.placeholder}`}>
                      📝
                    </div>
                  )}
                  <div className={styles.content}>
                    <div className={styles.title}>{post.title}</div>
                    <div className={styles.meta}>
                      Article · {post.date} · {readingTime} min read
                    </div>
                  </div>
                </div>
              );
            } else {
              const project = result.item;
              return (
                <div
                  key={`project-${project.key}`}
                  className={`${styles.resultItem} ${index === selectedIndex ? styles.selected : ''}`}
                  onClick={() => handleSelect(result)}
                >
                  <div className={`${styles.icon} ${styles.placeholder}`}>
                    💼
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>{project.title}</div>
                    <div className={styles.meta}>
                      Project · {project.year}
                      {project.technologies.length > 0 &&
                        ` · ${project.technologies.slice(0, 3).join(', ')}`}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
