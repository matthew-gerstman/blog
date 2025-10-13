import React, { useState, useEffect } from 'react';
import styles from './OptimizedImage.module.css';

// Import the manifest at build time
import manifest from '../../public/images/optimized/manifest.json';

interface OptimizedImageProps {
  src: string; // Original image filename (e.g., "image-10.png")
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
  loading = 'lazy'
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  // Extract filename from src (handle both /images/blog/file.png and just file.png)
  const filename = src.includes('/') ? src.split('/').pop() || src : src;
  const imageData = manifest[filename as keyof typeof manifest];

  useEffect(() => {
    if (!imageData) {
      // Fallback to original if not in manifest
      setCurrentSrc(src);
      return;
    }

    // Start with thumbnail for instant loading
    const thumbnailSrc = imageData.sizes.thumbnail;
    if (thumbnailSrc) {
      setCurrentSrc(thumbnailSrc);
    }

    // Load the requested size in the background
    const targetSrc = imageData.sizes[size] || imageData.original;
    const img = new Image();
    img.src = targetSrc;
    img.onload = () => {
      setCurrentSrc(targetSrc);
      setIsLoaded(true);
    };
  }, [src, size, imageData]);

  if (!imageData) {
    // Fallback to original image if not in manifest
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        loading={loading}
      />
    );
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
