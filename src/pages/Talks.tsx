import { useState } from 'react';
import { talks } from '../data/talks';
import type { Talk } from '../data/talks';
import { CardHeader } from '../components/CardHeader';
import { MetaInfo } from '../components/MetaInfo';
import styles from './Talks.module.css';

export function Talks() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Talks</h1>
        <p className={styles.subtitle}>
          Conference talks and presentations on TypeScript, React, career
          growth, and software engineering.
        </p>
      </header>

      <div className={styles.talksGrid}>
        {talks.map((talk: Talk) => {
          const isExpanded = expandedId === talk.id;

          return (
            <div
              key={talk.id}
              className={`${styles.talkCard} ${isExpanded ? styles.expanded : ''}`}
            >
              <div className={styles.videoSection}>
                {isExpanded ? (
                  <div className={styles.videoWrapper}>
                    <iframe
                      src={`https://www.youtube.com/embed/${talk.video}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={talk.title}
                    />
                  </div>
                ) : (
                  <div
                    className={styles.thumbnail}
                    onClick={() => toggleExpand(talk.id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${talk.video.split('?')[0]}/maxresdefault.jpg`}
                      alt={talk.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://img.youtube.com/vi/${talk.video.split('?')[0]}/hqdefault.jpg`;
                      }}
                    />
                    <div className={styles.playOverlay}>
                      <svg width="68" height="48" viewBox="0 0 68 48">
                        <path
                          d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                          fill="#f00"
                        ></path>
                        <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.content}>
                <MetaInfo items={[talk.date, talk.venue]} />

                <CardHeader
                  title={talk.title}
                  subtitle={talk.subtitle}
                  hasExpand={false}
                />

                <p className={styles.description}>{talk.description}</p>

                <button
                  className={styles.watchButton}
                  onClick={() => toggleExpand(talk.id)}
                >
                  {isExpanded ? 'Close Video' : 'Watch Talk'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
