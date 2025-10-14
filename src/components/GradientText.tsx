import React from 'react';
import styles from './GradientText.module.css';

interface GradientTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  className?: string;
}

export function GradientText({
  children,
  as: Component = 'span',
  className = '',
}: GradientTextProps) {
  return (
    <Component className={`${styles.gradientText} ${className}`}>
      {children}
    </Component>
  );
}
