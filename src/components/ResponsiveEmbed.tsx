import React from 'react';
import styles from './ResponsiveEmbed.module.css';

interface ResponsiveEmbedProps {
  children: React.ReactNode;
  aspectRatio?: '16/9' | '4/3' | '1/1';
}

export function ResponsiveEmbed({ children, aspectRatio = '16/9' }: ResponsiveEmbedProps) {
  return (
    <div className={styles.container} data-aspect={aspectRatio}>
      {children}
    </div>
  );
}
