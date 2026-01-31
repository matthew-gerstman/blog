import React, { ReactNode, CSSProperties } from 'react';
import styles from './Shimmer.module.css';

export type ShimmerType = 'text' | 'border' | 'background';
export type ShimmerPosition = 'top' | 'bottom' | 'full';
export type ShimmerAnimationType = 'sweep' | 'pulse';
export type ShimmerElement =
  | 'span'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export interface ShimmerProps {
  children: ReactNode;
  type?: ShimmerType;
  duration?: number;
  colors?: string[];
  position?: ShimmerPosition;
  animationType?: ShimmerAnimationType;
  intensity?: 'subtle' | 'normal' | 'bold';
  className?: string;
  as?: ShimmerElement;
  random?: boolean;
  pauseOnIdle?: boolean;
}

type RandomConfig = {
  type: ShimmerType;
  animationType: ShimmerAnimationType;
  intensity: 'subtle' | 'normal' | 'bold';
  duration: number;
  position: ShimmerPosition;
};

function generateRandomConfig(): RandomConfig {
  const types: ShimmerType[] = ['text', 'border', 'background'];
  const animationTypes: ShimmerAnimationType[] = ['sweep', 'pulse'];
  const intensities = ['subtle', 'normal', 'bold'] as const;
  const positions: ShimmerPosition[] = ['top', 'bottom', 'full'];

  return {
    type: types[Math.floor(Math.random() * types.length)],
    animationType:
      animationTypes[Math.floor(Math.random() * animationTypes.length)],
    intensity: intensities[Math.floor(Math.random() * intensities.length)],
    duration: Math.random() * 4 + 2, // 2-6 seconds
    position: positions[Math.floor(Math.random() * positions.length)],
  };
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
  as,
  random = false,
  pauseOnIdle = false,
}) => {
  // Generate random config once on mount
  const [randomConfig] = React.useState<RandomConfig | null>(() =>
    random ? generateRandomConfig() : null
  );

  // Use random config values if available, otherwise use props
  const finalType = randomConfig?.type ?? type;
  const finalDuration = randomConfig?.duration ?? duration;
  const finalAnimationType =
    randomConfig?.animationType ??
    (animationType || (finalType === 'text' ? 'sweep' : 'pulse'));
  const finalIntensity = randomConfig?.intensity ?? intensity;
  const finalPosition = randomConfig?.position ?? position;

  const getDefaultColors = (): string[] => {
    switch (finalIntensity) {
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

  const getAnimationClass = (): string => {
    const pausedSuffix = pauseOnIdle ? 'Paused' : '';

    if (finalType === 'text' && finalAnimationType === 'sweep') {
      return pausedSuffix
        ? styles.shimmerTextSweepPaused
        : styles.shimmerTextSweep;
    }

    if (finalAnimationType === 'pulse') {
      return pausedSuffix ? styles.shimmerPulsePaused : styles.shimmerPulse;
    }

    return pausedSuffix ? styles.shimmerSweepPaused : styles.shimmerSweep;
  };

  const baseStyles: CSSProperties = {
    '--duration': `${finalDuration}s`,
    '--shimmer-gradient': `linear-gradient(90deg, ${gradientStops})`,
  } as CSSProperties & { '--duration': string; '--shimmer-gradient': string };

  // Determine the HTML element to render
  const defaultElement = finalType === 'text' ? 'span' : 'div';
  const element = (as || defaultElement) as ShimmerElement;

  if (finalType === 'text') {
    const animationClass = getAnimationClass();

    return React.createElement(
      element,
      {
        className: `${animationClass} ${className}`,
        style: baseStyles,
      },
      children
    );
  }

  if (finalType === 'border') {
    const borderContainerClass =
      finalPosition === 'full'
        ? pauseOnIdle
          ? styles.shimmerBorderFullPaused
          : styles.shimmerBorderFull
        : finalPosition === 'bottom'
          ? pauseOnIdle
            ? styles.shimmerBorderBottomPaused
            : styles.shimmerBorderBottom
          : pauseOnIdle
            ? styles.shimmerBorderTopPaused
            : styles.shimmerBorderTop;

    return React.createElement(
      element,
      {
        className: `${borderContainerClass} ${className}`,
        style: baseStyles,
      },
      children
    );
  }

  if (finalType === 'background') {
    const animationClass = getAnimationClass();

    return React.createElement(
      element,
      {
        className: `${animationClass} ${className}`,
        style: baseStyles,
      },
      children
    );
  }

  return <>{children}</>;
};

export default Shimmer;
