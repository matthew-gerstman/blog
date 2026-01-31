import React, { ReactNode, CSSProperties } from 'react';
import styles from './Shimmer.module.css';

export type ShimmerType = 'text' | 'border' | 'background';
export type ShimmerPosition = 'top' | 'bottom' | 'full' | 'rotating';
export type ShimmerAnimationType =
  | 'sweep'
  | 'pulse'
  | 'wave'
  | 'glow'
  | 'flicker'
  | 'rainbow'
  | 'bounce';
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
  style?: CSSProperties;
  as?: ShimmerElement;
  random?: boolean;
  autoplay?: boolean;
}

type RandomConfig = {
  type: ShimmerType;
  animationType: ShimmerAnimationType;
  intensity: 'subtle' | 'normal' | 'bold';
  duration: number;
  position: ShimmerPosition;
};

function generateRandomConfig(): RandomConfig {
  const types: ShimmerType[] = ['text'];
  const animationTypes: ShimmerAnimationType[] = [
    'sweep',
    'pulse',
    'wave',
    'glow',
    'flicker',
    'rainbow',
    'bounce',
  ];
  const intensities = ['subtle', 'normal', 'bold'] as const;
  const positions: ShimmerPosition[] = ['top', 'bottom', 'full', 'rotating'];

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
  style,
  as,
  random = false,
  autoplay = false,
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
    // Use paused variants by default, unpause if autoplay is true
    const usePaused = !autoplay;

    if (finalType === 'text') {
      switch (finalAnimationType) {
        case 'sweep':
          return usePaused
            ? styles.shimmerTextSweepPaused
            : styles.shimmerTextSweep;
        case 'wave':
          return usePaused
            ? styles.shimmerTextWavePaused
            : styles.shimmerTextWave;
        case 'glow':
          return usePaused
            ? styles.shimmerTextGlowPaused
            : styles.shimmerTextGlow;
        case 'flicker':
          return usePaused
            ? styles.shimmerTextFlickerPaused
            : styles.shimmerTextFlicker;
        case 'rainbow':
          return usePaused
            ? styles.shimmerTextRainbowPaused
            : styles.shimmerTextRainbow;
        case 'bounce':
          return usePaused
            ? styles.shimmerTextBouncePaused
            : styles.shimmerTextBounce;
        case 'pulse':
          return usePaused
            ? styles.shimmerTextPulsePaused
            : styles.shimmerTextPulse;
      }
    }

    if (finalAnimationType === 'pulse') {
      return usePaused ? styles.shimmerPulsePaused : styles.shimmerPulse;
    }

    return usePaused ? styles.shimmerSweepPaused : styles.shimmerSweep;
  };

  const baseStyles: CSSProperties = {
    ...style,
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
    // Use paused variants by default, unpause if autoplay is true
    const usePaused = !autoplay;

    const borderContainerClass =
      finalPosition === 'rotating'
        ? usePaused
          ? styles.shimmerBorderRotatingPaused
          : styles.shimmerBorderRotating
        : finalPosition === 'full'
          ? usePaused
            ? styles.shimmerBorderFullPaused
            : styles.shimmerBorderFull
          : finalPosition === 'bottom'
            ? usePaused
              ? styles.shimmerBorderBottomPaused
              : styles.shimmerBorderBottom
            : usePaused
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
