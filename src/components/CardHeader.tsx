import React from 'react';
import styles from './CardHeader.module.css';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  yearDisplay?: string;
  role?: string;
  hasExpand?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
}

export function CardHeader({ 
  title, 
  subtitle, 
  yearDisplay, 
  role,
  hasExpand, 
  isExpanded,
  onClick 
}: CardHeaderProps) {
  return (
    <>
      <div className={styles.top}>
        <h4 className={styles.title}>{title}</h4>
        {hasExpand && (
          <span className={styles.expandIcon}>{isExpanded ? '−' : '+'}</span>
        )}
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      {role && <div className={styles.role}>{role} - {yearDisplay}</div>}      
      </div>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
    </>
  );
}
