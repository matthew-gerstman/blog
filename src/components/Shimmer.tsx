import React, { ReactNode, CSSProperties } from 'react';
import styles from './Shimmer.module.css';

export type ShimmerType = 'text' | 'border' | 'background';
export type ShimmerPosition = 'top' | 'bottom' | 'full';
export type ShimmerAnimationType = 'sweep' | 'pulse';

export interface ShimmerProps {
  children: ReactNode;
  type?: ShimmerType;
  duration?: number;
  colors?: string[];
  position?: ShimmerPosition;
  animationType?: ShimmerAnimationType;
  intensity?: 'subtle' | 'normal' | 'bold';
  className?: string;
}

const Shimmer: React.FC<ShimmerProps> = ({
  children,
  type = 'text',
  duration = 3,
  colors,
  position = 'top',
  animationType = type === 'text' ? 'sweep' : 'pulse',
  intensity = 'normal',
  className = '',
}) => {
  const getDefaultColors = (): string[] => {
    switch (intensity) {
      case 'subtle':
        return ['var(--text-muted)', 'var(--grappa)', 'var(--text-muted)'];
      case 'bold':
        return ['var(--text)', 'var(--grappa-bright)', 'var(--text)'];
      case 'normal':
      default:
        return ['var(--text)', 'var(--grappa-bright)', 'var(--text)'];
    }
  };

  const finalColors = colors || getDefaultColors();
  const gradientStops = finalColors
    .map((color, i) => `${color} ${(i / (finalColors.length - 1)) * 100}%`)
    .join(', ');

  const animationClass =
    type === 'text' && animationType === 'sweep'
      ? styles.shimmerTextSweep
      : animationType === 'pulse'
        ? styles.shimmerPulse
        : styles.shimmerSweep;

  const baseStyles: CSSProperties = {
    '--duration': `${duration}s`,
    '--shimmer-gradient': `linear-gradient(90deg, ${gradientStops})`,
  } as CSSProperties & { '--duration': string; '--shimmer-gradient': string };

  if (type === 'text') {
    return (
      <span className={`${animationClass} ${className}`} style={baseStyles}>
        {children}
      </span>
    );
  }

  if (type === 'border') {
    const borderContainerClass =
      position === 'full'
        ? styles.shimmerBorderFull
        : position === 'bottom'
          ? styles.shimmerBorderBottom
          : styles.shimmerBorderTop;

    return (
      <div
        className={`${borderContainerClass} ${className}`}
        style={baseStyles}
      >
        {children}
      </div>
    );
  }

  if (type === 'background') {
    return (
      <div className={`${animationClass} ${className}`} style={baseStyles}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
};

export default Shimmer;
