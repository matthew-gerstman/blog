import { Link } from 'react-router-dom';
import { useState, useRef, MouseEvent } from 'react';
import { OptimizedImage } from './OptimizedImage';
import Shimmer from './Shimmer';
import type { Post } from '../data/types/posts.types';
import type { ShimmerPosition } from './Shimmer';
import { calculateReadingTime } from '../utils/reading';
import styles from './PostCard.module.css';

interface PostCardProps {
  post: Post;
  index: number;
}

// Cycle through different shimmer configurations for visual variety
function getShimmerConfig(index: number) {
  const intensities = ['subtle', 'normal', 'bold'] as const;
  const durations = [2, 3, 4];

  return {
    position: 'rotating' as ShimmerPosition,
    intensity: intensities[index % intensities.length],
    duration: durations[index % durations.length],
    direction: index % 2 === 0 ? 'clockwise' : 'counter-clockwise',
  };
}

export function PostCard({ post, index }: PostCardProps) {
  const wordCount = post.wordCount || 0;
  const readingTime = calculateReadingTime(wordCount);
  const banner = post.banner_img;
  const bannerPosition = post.banner_position || 'center';
  const cardRef = useRef<HTMLDivElement>(null);
  const [startAngle, setStartAngle] = useState(0);

  // Use externalLink if available, otherwise default to blog post slug
  const linkTo = post.externalLink || `/writing/${post.slug}`;

  const shimmerConfig = getShimmerConfig(index);

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate angle from center to mouse position
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    // Normalize angle to 0-360 range
    const normalizedAngle = (angle + 360) % 360;
    setStartAngle(normalizedAngle);
  };

  return (
    <Shimmer
      type="border"
      position={shimmerConfig.position}
      intensity={shimmerConfig.intensity}
      duration={shimmerConfig.duration}
      as="article"
      className={styles.card}
      style={{
        ['--start-angle' as string]: `${startAngle}deg`,
        ['--rotation-direction' as string]:
          shimmerConfig.direction === 'clockwise' ? 'normal' : 'reverse',
      }}
    >
      <div
        ref={cardRef}
        className={styles.cardInner}
        style={{
          animationDelay: `${Math.min(index * 0.05, 0.3)}s`,
        }}
        onMouseEnter={handleMouseEnter}
      >
        <Link to={linkTo} className={styles.link}>
          {banner && (
            <OptimizedImage
              src={banner}
              alt={post.title}
              size="large"
              className={styles.banner}
              loading="lazy"
              style={{ objectPosition: bannerPosition }}
            />
          )}
          <div className={styles.content}>
            <Shimmer type="text" random as="h2" className={styles.title}>
              {post.title}
            </Shimmer>
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
      </div>
    </Shimmer>
  );
}
