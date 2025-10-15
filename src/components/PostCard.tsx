import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Post } from '../types';
import { calculateReadingTime, getWordCount } from '../utils/reading';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const readingTime = calculateReadingTime(post.content);
  const wordCount = getWordCount(post.content);
  const banner = post.banner_img;

  // Handle page-link type posts
  const isPageLink = post.type === 'page-link';
  const linkTo =
    isPageLink && post.externalLink
      ? post.externalLink
      : `/writing/${post.slug}`;

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger animation based on index
            setTimeout(
              () => {
                entry.target.classList.add('animate-in');
              },
              Math.min(index * 50, 300)
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [index]);

  const handleClick = (e: React.MouseEvent) => {
    if (isPageLink && post.externalLink) {
      e.preventDefault();
      navigate(post.externalLink);
    }
  };

  return (
    <article ref={cardRef} className={styles.card}>
      <Link to={linkTo} className={styles.link} onClick={handleClick}>
        {banner && (
          <img src={banner} alt={post.title} className={styles.banner} />
        )}
        <div className={styles.content}>
          <h2 className={styles.title}>{post.title}</h2>
          {!isPageLink && (
            <div className={styles.metaBar}>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.badge}>{readingTime} min read</span>
              <span className={styles.badge}>
                {wordCount.toLocaleString()} words
              </span>
            </div>
          )}
          {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        </div>
      </Link>
    </article>
  );
}
