import React from 'react';
import styles from './LinkList.module.css';

interface LinkListProps {
  links: { text: string; url: string; }[];
  className?: string;
}

export function LinkList({ links, className }: LinkListProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className={`${styles.linkList} ${className || ''}`}>
      {links.map((link, i) => (
        <a 
          key={i} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
          onClick={(e) => e.stopPropagation()}
        >
          {link.text} →
        </a>
      ))}
    </div>
  );
}
