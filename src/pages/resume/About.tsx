import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GradientText } from '../../components/GradientText';
import aboutData from '../../data/about';
import styles from './About.module.css';

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <GradientText as="h1">{children}</GradientText>
          ),
          h2: ({ children }) => (
            <h2 className={styles.sectionTitle}>{children}</h2>
          ),
          p: ({ children }) => (
            <p className={styles.paragraph}>{children}</p>
          ),
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {aboutData.content}
      </ReactMarkdown>
    </div>
  );
};
