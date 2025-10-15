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
  const linkTo = post.externalLink || `/writing/${post.slug}`;

  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${Math.min(index * 0.05, 0.3)}s` }}
    >
      <Link to={linkTo} className={styles.link}>
        {banner && (
          <PostBanner banner={banner} title={post.title} />
        )}
        <PostContent post={post} readingTime={readingTime} wordCount={wordCount} />
      </Link>
    </article>
  );
}

// Components
function PostBanner({ banner, title }: { banner: string; title: string }) {
  return (
    <OptimizedImage
      src={banner}
      alt={title}
      size="large"
      className={styles.banner}
      loading="lazy"
    />
  );
}

function PostContent({
  post,
  readingTime,
  wordCount,
}: {
  post: Post;
  readingTime: number;
  wordCount: number;
}) {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{post.title}</h2>
      <MetaBar date={post.date} readingTime={readingTime} wordCount={wordCount} />
      {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
    </div>
  );
}

function MetaBar({
  date,
  readingTime,
  wordCount,
}: {
  date: string;
  readingTime: number;
  wordCount: number;
}) {
  return (
    <div className={styles.metaBar}>
      <span className={styles.date}>{date}</span>
      <span className={styles.badge}>{readingTime} min read</span>
      <span className={styles.badge}>{wordCount.toLocaleString()} words</span>
    </div>
  );
}
