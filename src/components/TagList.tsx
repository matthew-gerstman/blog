import React from 'react';
import styles from './TagList.module.css';

interface TagListProps {
  tags: string[];
  onTagClick?: (tag: string) => void;
  className?: string;
}

export function TagList({ tags, onTagClick, className }: TagListProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className={`${styles.tagList} ${className || ''}`}>
      {tags.map((tag, i) => (
        <span 
          key={i} 
          className={styles.tag}
          onClick={onTagClick ? () => onTagClick(tag) : undefined}
          style={{ cursor: onTagClick ? 'pointer' : 'default' }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
