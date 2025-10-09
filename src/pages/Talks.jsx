import { talks } from '../data/talks';
import styles from './Talks.module.css';

export function Talks() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Talks</h1>
      </header>
      <div className={styles.talks}>
        {talks.map(talk => (
          <div key={talk.id} className={styles.talkItem}>
            <h2 className={styles.title}>{talk.title}</h2>
            {talk.subtitle && <div className={styles.subtitle}>{talk.subtitle}</div>}
            <div className={styles.videoWrapper}>
              <iframe src={`https://www.youtube.com/embed/${talk.video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={talk.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
