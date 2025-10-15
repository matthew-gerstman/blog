import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { Post } from '../types';
import type { Project } from '../data/types/resume.types';
import type { Talk } from '../data/talks';
import { searchPosts, searchProjects, searchTalks } from '../utils/search';
import { calculateReadingTime } from '../utils/reading';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
  projects?: Project[];
  talks?: Talk[];
}

type SearchResult =
  | { type: 'post'; item: Post }
  | { type: 'project'; item: Project }
  | { type: 'talk'; item: Talk };

export function SearchModal({
  isOpen,
  onClose,
  posts,
  projects = [],
  talks = [],
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

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

    // Determine current page context
    const isWritingPage = location.pathname.startsWith('/writing');
    const isTalksPage = location.pathname.startsWith('/talks');

    // Search all content types
    const filteredPosts = searchPosts(posts, query);
    const filteredProjects = searchProjects(projects, query);
    const filteredTalks = searchTalks(talks, query);

    // Create result arrays with type information
    const postResults: SearchResult[] = filteredPosts.map((post) => ({
      type: 'post' as const,
      item: post,
    }));
    const projectResults: SearchResult[] = filteredProjects.map((project) => ({
      type: 'project' as const,
      item: project,
    }));
    const talkResults: SearchResult[] = filteredTalks.map((talk) => ({
      type: 'talk' as const,
      item: talk,
    }));

    // Prioritize based on current page context
    let combined: SearchResult[];
    if (isWritingPage) {
      // Prioritize articles on writing page
      combined = [
        ...postResults.slice(0, 5),
        ...talkResults.slice(0, 2),
        ...projectResults.slice(0, 2),
      ];
    } else if (isTalksPage) {
      // Prioritize talks on talks page
      combined = [
        ...talkResults.slice(0, 5),
        ...postResults.slice(0, 2),
        ...projectResults.slice(0, 2),
      ];
    } else {
      // Default: prioritize projects everywhere else
      combined = [
        ...projectResults.slice(0, 5),
        ...postResults.slice(0, 2),
        ...talkResults.slice(0, 2),
      ];
    }

    // Limit to 8 total results
    setResults(combined.slice(0, 8));
    setSelectedIndex(0);
  }, [query, posts, projects, talks, location.pathname]);

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
        navigate(`/writing/${result.item.slug}`);
      } else if (result.type === 'project') {
        navigate(`/resume?project=${result.item.key}`);
      } else if (result.type === 'talk') {
        navigate(`/talks/${result.item.id}`);
      }
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (result: SearchResult) => {
    if (result.type === 'post') {
      navigate(`/writing/${result.item.slug}`);
    } else if (result.type === 'project') {
      navigate(`/resume?project=${result.item.key}`);
    } else if (result.type === 'talk') {
      navigate(`/talks/${result.item.id}`);
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
          placeholder="Search articles, talks, and projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <div className={styles.results}>
          {!query && (
            <div className={styles.empty}>
              Type to search articles, talks, and projects...
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
            } else if (result.type === 'talk') {
              const talk = result.item;
              return (
                <div
                  key={`talk-${talk.id}`}
                  className={`${styles.resultItem} ${index === selectedIndex ? styles.selected : ''}`}
                  onClick={() => handleSelect(result)}
                >
                  <div className={`${styles.icon} ${styles.placeholder}`}>
                    🎤
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      {talk.title}
                      {talk.subtitle && ` - ${talk.subtitle}`}
                    </div>
                    <div className={styles.meta}>
                      Talk · {talk.date} · {talk.venue}
                      {talk.tags.length > 0 &&
                        ` · ${talk.tags.slice(0, 2).join(', ')}`}
                    </div>
                  </div>
                </div>
              );
            } else {
              const project = result.item;
              // Use project image if available, otherwise use emoji, otherwise default icon
              const iconContent = project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.icon}
                />
              ) : project.emoji ? (
                <div className={`${styles.icon} ${styles.placeholder}`}>
                  {project.emoji}
                </div>
              ) : (
                <div className={`${styles.icon} ${styles.placeholder}`}>💼</div>
              );

              return (
                <div
                  key={`project-${project.key}`}
                  className={`${styles.resultItem} ${index === selectedIndex ? styles.selected : ''}`}
                  onClick={() => handleSelect(result)}
                >
                  {iconContent}
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
