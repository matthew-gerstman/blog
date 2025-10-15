import type { Post } from '../types';
import { PostCard } from '../components/PostCard';
import styles from './Home.module.css';

interface HomeProps {
  posts: Post[];
}

export function Home({ posts }: HomeProps) {
  // Sort posts by newest first
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className={styles.container}>
      <main className={styles.posts}>
        {sortedPosts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </main>
    </div>
  );
}
