import React from "react";
import styles from "./ProjectEntry.module.css";

interface Technology {
  name: string;
}

interface ProjectEntryProps {
  title: string;
  year: string;
  description: string;
  technologies?: string[] | Technology[];
  impact?: string;
  isLast?: boolean;
}

export const ProjectEntry: React.FC<ProjectEntryProps> = ({
  title,
  year,
  description,
  technologies,
  impact,
  isLast = false,
}) => {
  // Normalize technologies to array of strings
  const techList = technologies?.map((tech) =>
    typeof tech === "string" ? tech : tech.name
  );

  return (
    <div className={styles.entry}>
      <div className={styles.timeline}>
        <div className={styles.dot} />
        {!isLast && <div className={styles.line} />}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.year}>{year}</span>
        </div>

        <p className={styles.description}>{description}</p>

        {techList && techList.length > 0 && (
          <div className={styles.technologies}>
            {techList.map((tech, index) => (
              <span key={index} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        )}

        {impact && (
          <div className={styles.impact}>
            <span className={styles.impactLabel}>Impact:</span> {impact}
          </div>
        )}
      </div>
    </div>
  );
};
