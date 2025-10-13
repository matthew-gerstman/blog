import React from 'react';
import styles from './MetaInfo.module.css';

interface MetaInfoProps {
  items: (string | null | undefined)[];
  className?: string;
}

export function MetaInfo({ items, className }: MetaInfoProps) {
  const validItems = items.filter(Boolean);
  if (validItems.length === 0) return null;

  return (
    <div className={`${styles.meta} ${className || ''}`}>
      {validItems.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className={styles.separator}>•</span>}
          <span className={styles.item}>{item}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
