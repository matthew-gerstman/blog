import { useParams, Navigate } from 'react-router-dom';
import posts from '../data/posts';

export function BlogPostRedirect() {
  const { slug } = useParams<{ slug: string }>();

  // Check if this slug matches a valid blog post
  const isValidPost = posts.some((post) => post.slug === slug);

  if (isValidPost) {
    return <Navigate to={`/writing/${slug}`} replace />;
  }

  // If not a valid post, let it fall through to the Resume (404 handler)
  return <Navigate to="/" replace />;
}
