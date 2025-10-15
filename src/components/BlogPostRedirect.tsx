import { useParams, Navigate } from 'react-router-dom';
import posts from '../data/posts';

export function BlogPostRedirect() {
  const { slug } = useParams<{ slug: string }>();
  const isValidPost = useValidPost(slug);

  if (isValidPost) {
    return <Navigate to={`/writing/${slug}`} replace />;
  }

  return <Navigate to="/" replace />;
}

// Custom Hooks
function useValidPost(slug: string | undefined): boolean {
  return posts.some((post) => post.slug === slug);
}
