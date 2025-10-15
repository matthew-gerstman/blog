import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../data/types/posts.types';
import { OptimizedImage } from './OptimizedImage';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
}

export function SearchModal({ isOpen, onClose, posts }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filteredPosts = posts.filter((post) => {
    const searchText = query.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchText) ||
      post.excerpt.toLowerCase().includes(searchText) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchText))
    );
  });

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          Math.min(prev + 1, filteredPosts.length - 1)
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && filteredPosts[selectedIndex]) {
        e.preventDefault();
        const post = filteredPosts[selectedIndex];
        const linkTo = post.externalLink || `/writing/${post.slug}`;
        navigate(linkTo);
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredPosts, navigate, onClose]);

  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.searchBox}>
          <svg
            className={styles.searchIcon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
          />
          <button onClick={onClose} className={styles.closeButton}>
            <kbd className={styles.kbd}>ESC</kbd>
          </button>
        </div>

        <div className={styles.results} ref={resultsRef}>
          {filteredPosts.length === 0 ? (
            <div className={styles.noResults}>
              <p>No posts found</p>
            </div>
          ) : (
            filteredPosts.map((post, index) => {
              const wordCount = post.wordCount || 0;
              const readingTime = Math.max(1, Math.ceil(wordCount / 200));
              const banner = post.banner_img;
              const bannerPosition = post.banner_position || 'center';
              const linkTo = post.externalLink || `/writing/${post.slug}`;

              return (
                <button
                  key={post.id}
                  className={`${styles.result} ${
                    index === selectedIndex ? styles.selected : ''
                  }`}
                  onClick={() => {
                    navigate(linkTo);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  {banner ? (
                    <OptimizedImage
                      src={banner}
                      alt={post.title}
                      size="small"
                      className={styles.thumbnail}
                      style={{ objectPosition: bannerPosition }}
                    />
                  ) : (
                    <div className={styles.placeholderThumbnail} />
                  )}
                  <div className={styles.resultContent}>
                    <h3 className={styles.resultTitle}>{post.title}</h3>
                    <div className={styles.resultMeta}>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{readingTime} min read</span>
                    </div>
                    {post.excerpt && (
                      <p className={styles.resultExcerpt}>{post.excerpt}</p>
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.shortcuts}>
            <span>
              <kbd className={styles.kbd}>↑</kbd>
              <kbd className={styles.kbd}>↓</kbd>
              Navigate
            </span>
            <span>
              <kbd className={styles.kbd}>↵</kbd>
              Select
            </span>
            <span>
              <kbd className={styles.kbd}>ESC</kbd>
              Close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
