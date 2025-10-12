import React from 'react';
import { Link } from 'react-router-dom';
import { GradientText } from '../../components/GradientText';
import type { AboutData } from '../../types/career';
import aboutData from '../../data/about.json';
import styles from './About.module.css';

const data = aboutData as AboutData;

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <GradientText as="h1">{data.hero.title}</GradientText>
        <p className={styles.subtitle}>{data.hero.subtitle}</p>
        <p className={styles.lead}>{data.hero.lead}</p>
      </header>

      <section className={styles.section}>
        <h2>Professional Summary</h2>
        <p>{data.professionalSummary.description}</p>
        
        <div className={styles.strengths}>
          <h3>Core Strengths</h3>
          <ul>
            {data.professionalSummary.coreStrengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Technical Expertise</h2>
        <div className={styles.techGrid}>
          {data.technicalExpertise.categories.map((category, index) => (
            <div key={index} className={styles.techCategory}>
              <h4>{category.title}</h4>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
        <Link to="/career/skills" className={styles.btn}>Full Skills & Philosophy →</Link>
      </section>

      <section className={styles.section}>
        <h2>Featured Projects</h2>
        {data.featuredProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p className={styles.projectCompany}>{project.company}, {project.year}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Origin Story</h2>
        {data.originStory.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className={styles.section}>
        <h2>Contact & Links</h2>
        <ul className={styles.contactLinks}>
          {data.contact.links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
