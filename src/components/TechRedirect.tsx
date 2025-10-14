import { useParams, Navigate } from 'react-router-dom';

export function TechRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/writing/${slug}`} replace />;
}
