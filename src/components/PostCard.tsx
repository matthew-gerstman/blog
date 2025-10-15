import { Link } from 'react-router-dom';
import type { Post } from '../types';
import { calculateReadingTime, getWordCount } from '../utils/reading';
import { OptimizedImage } from './OptimizedImage';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const wordCount = post.wordCount || getWordCount(post.content);
  const readingTime = calculateReadingTime(wordCount);
  const banner = post.banner_img;

  // Use externalLink if available, otherwise default to blog post slug
  const linkTo = post.externalLink || `/writing/${post.slug}`;

  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${Math.min(index * 0.05, 0.3)}s` }}
    >
      <Link to={linkTo} className={styles.link}>
        {banner && (
          <OptimizedImage
            src={banner}
            alt={post.title}
            size="large"
            className={styles.banner}
            loading="lazy"
          />
        )}
        <div className={styles.content}>
          <h2 className={styles.title}>{post.title}</h2>
          <div className={styles.metaBar}>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.badge}>{readingTime} min read</span>
            <span className={styles.badge}>
              {wordCount.toLocaleString()} words
            </span>
          </div>
          {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        </div>
      </Link>
    </article>
  );
}
