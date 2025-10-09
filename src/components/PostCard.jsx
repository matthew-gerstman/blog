import { Link } from 'react-router-dom';
import { calculateReadingTime, getWordCount } from '../utils/reading';
import { bannerImages } from '../data/banners';
import styles from './PostCard.module.css';

export function PostCard({ post, index }) {
  const readingTime = calculateReadingTime(post.content);
  const wordCount = getWordCount(post.content);
  const banner = bannerImages[post.slug];

  return (
    <article className={styles.card} style={{ animationDelay: `${Math.min(index * 0.1, 0.5)}s` }}>
      <Link to={`/tech/${post.slug}`} className={styles.link}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.metaBar}>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.badge}>{readingTime} min read</span>
          <span className={styles.badge}>{wordCount.toLocaleString()} words</span>
        </div>
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        {banner && <img src={banner} alt={post.title} className={styles.banner} />}
      </Link>
    </article>
  );
}
