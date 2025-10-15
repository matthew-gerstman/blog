import { useState, useEffect } from 'react';
import styles from './OptimizedImage.module.css';
import manifest from '../../public/images/optimized/manifest.json';

interface OptimizedImageProps {
  src: string;
  alt: string;
  size?: 'thumbnail' | 'medium' | 'large' | 'full';
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function OptimizedImage({
  src,
  alt,
  size = 'large',
  className = '',
  loading = 'lazy',
}: OptimizedImageProps) {
  const relativePath = src.replace('/images/blog/', '');
  const imageData = manifest[relativePath as keyof typeof manifest];
  const { currentSrc, isLoaded } = useProgressiveImage(src, size, imageData);

  if (!imageData) {
    return <img src={src} alt={alt} className={className} loading={loading} />;
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        className={`${styles.image} ${isLoaded ? styles.loaded : styles.loading}`}
      />
    </div>
  );
}

// Custom Hooks
function useProgressiveImage(
  src: string,
  size: 'thumbnail' | 'medium' | 'large' | 'full',
  imageData: any
): { currentSrc: string; isLoaded: boolean } {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  useEffect(() => {
    if (!imageData) {
      setCurrentSrc(src);
      setIsLoaded(true);
      return;
    }

    const thumbnailSrc = imageData.sizes.thumbnail;
    if (thumbnailSrc) {
      setCurrentSrc(thumbnailSrc);
    }

    const targetSrc = imageData.sizes[size] || imageData.original;
    const img = new Image();
    img.src = targetSrc;
    img.onload = () => {
      setCurrentSrc(targetSrc);
      setIsLoaded(true);
    };
  }, [src, size, imageData]);

  return { currentSrc, isLoaded };
}
