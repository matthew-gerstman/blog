import styles from './GradientText.module.css';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: string;
}

export function GradientText({
  children,
  gradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
}: GradientTextProps) {
  return (
    <span
      className={styles.gradientText}
      style={{
        backgroundImage: gradient,
      }}
    >
      {children}
    </span>
  );
}
