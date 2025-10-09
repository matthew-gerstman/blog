import { useState } from 'react';
import type { Post } from '../types';
import { PostCard } from '../components/PostCard';
import styles from './Home.module.css';

interface HomeProps {
  posts: Post[];
}

type SortOrder = 'newest' | 'oldest';

export function Home({ posts }: HomeProps) {
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.sortControls}>
        <button
          className={`${styles.sortButton} ${sortOrder === 'newest' ? styles.active : ''}`}
          onClick={() => setSortOrder('newest')}
        >
          Newest First
        </button>
        <button
          className={`${styles.sortButton} ${sortOrder === 'oldest' ? styles.active : ''}`}
          onClick={() => setSortOrder('oldest')}
        >
          Oldest First
        </button>
      </div>
      <main className={styles.posts}>
        {sortedPosts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </main>
    </div>
  );
}
