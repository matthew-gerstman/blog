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
  const readingTime = calculateReadingTime(post.content);
  const wordCount = getWordCount(post.content);
  const banner = post.banner_img;
  
  // Determine the link URL based on post type
  const linkUrl = post.type === 'page' && post.pageUrl 
    ? post.pageUrl 
    : `/writing/${post.slug}`;

  // Check if banner is an external URL (starts with http/https)
  const isExternalImage = banner?.startsWith('http://') || banner?.startsWith('https://');

  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${Math.min(index * 0.05, 0.3)}s` }}
    >
      <Link to={linkUrl} className={styles.link}>
        {banner && (
          isExternalImage ? (
            <img src={banner} alt={post.title} className={styles.banner} />
          ) : (
            <OptimizedImage 
              src={banner} 
              alt={post.title} 
              size="medium"
              className={styles.banner}
              loading={index < 3 ? 'eager' : 'lazy'}
            />
          )
        )}
        <div className={styles.content}>
          <h2 className={styles.title}>{post.title}</h2>
          <div className={styles.metaBar}>
            <span className={styles.date}>{post.date}</span>
            {post.type !== 'page' && (
              <>
                <span className={styles.badge}>{readingTime} min read</span>
                <span className={styles.badge}>
                  {wordCount.toLocaleString()} words
                </span>
              </>
            )}
          </div>
          {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        </div>
      </Link>
    </article>
  );
}
