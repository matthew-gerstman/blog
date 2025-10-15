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
  const textContent = typeof children === 'string' ? children : '';
  
  return (
    <Component 
      className={`${styles.text} ${className}`}
      data-text={textContent}
    >
      {children}
    </Component>
  );
}
