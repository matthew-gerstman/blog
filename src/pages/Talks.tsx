import { useNavigate, useParams } from 'react-router-dom';
import { talks } from '../data/talks';
import type { Talk } from '../data/talks';
import { CardHeader } from '../components/CardHeader';
import { MetaInfo } from '../components/MetaInfo';
import { TalkModal } from '../components/TalkModal';
import styles from './Talks.module.css';

export function Talks() {
  const navigate = useNavigate();
  const { talkId } = useParams<{ talkId: string }>();

  const selectedTalk = talkId
    ? talks.find((talk) => talk.id === parseInt(talkId, 10))
    : null;

  const openTalk = (id: number) => {
    navigate(`/talks/${id}`);
  };

  const closeTalk = () => {
    navigate('/talks');
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
          return (
            <div key={talk.id} className={styles.talkCard}>
              <div className={styles.videoSection}>
                <div
                  className={styles.thumbnail}
                  onClick={() => openTalk(talk.id)}
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
              </div>

              <div className={styles.content}>
                <MetaInfo items={[talk.date, talk.venue]} />

                <CardHeader
                  title={talk.title}
                  subtitle={talk.subtitle}
                  hasExpand={false}
                />

                <p className={styles.description}>{talk.description}</p>

                <div className={styles.actions}>
                  <button
                    className={styles.watchButton}
                    onClick={() => openTalk(talk.id)}
                  >
                    Watch Talk
                  </button>

                  {(talk.slidesUrl || talk.demoUrl) && (
                    <div className={styles.cardLinks}>
                      {talk.slidesUrl && (
                        <a
                          href={talk.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardLink}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                          </svg>
                          Slides
                        </a>
                      )}
                      {talk.demoUrl && (
                        <a
                          href={talk.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardLink}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polygon points="10 8 16 12 10 16 10 8" />
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedTalk && <TalkModal talk={selectedTalk} onClose={closeTalk} />}
    </div>
  );
}
