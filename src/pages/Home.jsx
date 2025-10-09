import { useState } from 'react';
import { PostCard } from '../components/PostCard';
import styles from './Home.module.css';

export function Home({ posts }) {
  const [sortOrder, setSortOrder] = useState('newest');

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
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
