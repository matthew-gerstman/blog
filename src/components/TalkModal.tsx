import { useEffect } from 'react';
import { Talk } from '../data/talks';
import { CardHeader } from './CardHeader';
import { MetaInfo } from './MetaInfo';
import styles from './TalkModal.module.css';

interface TalkModalProps {
  talk: Talk;
  onClose: () => void;
}

export function TalkModal({ talk, onClose }: TalkModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.videoWrapper}>
          <iframe
            src={`https://www.youtube.com/embed/${talk.video}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={talk.title}
          />
        </div>

        <div className={styles.content}>
          <MetaInfo items={[talk.date, talk.venue]} />

          <CardHeader
            title={talk.title}
            subtitle={talk.subtitle}
            hasExpand={false}
          />

          <p className={styles.description}>{talk.description}</p>

          {talk.tags && talk.tags.length > 0 && (
            <div className={styles.tags}>
              {talk.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
