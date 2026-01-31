import React from 'react';
import Shimmer from '../components/Shimmer';
import styles from './ShimmerShowcase.module.css';

export const ShimmerShowcase: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shimmer Component Showcase</h1>

      {/* Text Shimmers */}
      <div className={styles.shimmerLine}>
        <label>Text - Normal</label>
        <Shimmer type="text" animationType="sweep">
          Text shimmer effect with sweep animation
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Text - Bold</label>
        <Shimmer type="text" intensity="bold">
          Bold text shimmer effect
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Text - Subtle</label>
        <Shimmer type="text" intensity="subtle">
          Subtle text shimmer effect
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Text - 1s Duration</label>
        <Shimmer type="text" duration={1}>
          Fast shimmer animation
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Text - 6s Duration</label>
        <Shimmer type="text" duration={6}>
          Slow shimmer animation
        </Shimmer>
      </div>

      {/* Border Shimmers */}
      <div className={styles.shimmerLine}>
        <label>Border - Top</label>
        <Shimmer type="border" position="top" className={styles.borderLine}>
          Top border shimmer
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Border - Bottom</label>
        <Shimmer type="border" position="bottom" className={styles.borderLine}>
          Bottom border shimmer
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Border - Full</label>
        <Shimmer type="border" position="full" className={styles.borderLine}>
          Full border shimmer
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Border - Top Bold</label>
        <Shimmer
          type="border"
          position="top"
          intensity="bold"
          className={styles.borderLine}
        >
          Bold top border
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Border - Top Subtle</label>
        <Shimmer
          type="border"
          position="top"
          intensity="subtle"
          className={styles.borderLine}
        >
          Subtle top border
        </Shimmer>
      </div>

      {/* Background Shimmers */}
      <div className={styles.shimmerLine}>
        <label>Background - Sweep</label>
        <Shimmer
          type="background"
          animationType="sweep"
          className={styles.bgLine}
        >
          Background sweep shimmer
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Background - Pulse</label>
        <Shimmer
          type="background"
          animationType="pulse"
          className={styles.bgLine}
        >
          Background pulse shimmer
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Background - Bold</label>
        <Shimmer
          type="background"
          animationType="pulse"
          intensity="bold"
          className={styles.bgLine}
        >
          Bold background shimmer
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Background - Subtle</label>
        <Shimmer
          type="background"
          animationType="pulse"
          intensity="subtle"
          className={styles.bgLine}
        >
          Subtle background shimmer
        </Shimmer>
      </div>

      {/* Heading Shimmers */}
      <div className={styles.shimmerLine}>
        <label>Heading h1</label>
        <Shimmer type="text" as="h1" duration={2}>
          This is an H1 Heading
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Heading h2 - Bold</label>
        <Shimmer type="text" as="h2" intensity="bold" duration={2}>
          This is an H2 Heading
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Heading h3 - Subtle</label>
        <Shimmer type="text" as="h3" intensity="subtle" duration={2}>
          This is an H3 Heading
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Heading h4 - Border</label>
        <Shimmer
          type="border"
          as="h4"
          position="top"
          className={styles.borderLine}
          duration={2}
        >
          This is an H4 with Border
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Heading h5 - Background</label>
        <Shimmer
          type="background"
          as="h5"
          animationType="pulse"
          className={styles.bgLine}
          duration={2}
        >
          This is an H5 with Background
        </Shimmer>
      </div>

      {/* Random Shimmers */}
      <div className={styles.shimmerLine}>
        <label>Random #1</label>
        <Shimmer random className={styles.randomLine}>
          Random configuration
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Random #2</label>
        <Shimmer random className={styles.randomLine}>
          Random configuration
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Random #3</label>
        <Shimmer random className={styles.randomLine}>
          Random configuration
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Random #4</label>
        <Shimmer random className={styles.randomLine}>
          Random configuration
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Random #5</label>
        <Shimmer random className={styles.randomLine}>
          Random configuration
        </Shimmer>
      </div>

      {/* Pause on Idle Shimmers */}
      <div className={styles.shimmerLine}>
        <label>Text - Hover to play</label>
        <Shimmer type="text" pauseOnIdle>
          Hover to see animation
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Text Bold - Hover to play</label>
        <Shimmer type="text" intensity="bold" pauseOnIdle>
          Hover to see animation
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Border - Hover to play</label>
        <Shimmer
          type="border"
          position="top"
          pauseOnIdle
          className={styles.borderLine}
        >
          Hover to see animation
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Background - Hover to play</label>
        <Shimmer
          type="background"
          animationType="pulse"
          pauseOnIdle
          className={styles.bgLine}
        >
          Hover to see animation
        </Shimmer>
      </div>

      {/* Combined Features */}
      <div className={styles.shimmerLine}>
        <label>Random + Pause</label>
        <Shimmer random pauseOnIdle className={styles.randomLine}>
          Hover to animate random config
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>H1 + Pause</label>
        <Shimmer type="text" as="h1" pauseOnIdle duration={2}>
          H1 with Pause
        </Shimmer>
      </div>

      <div className={styles.shimmerLine}>
        <label>Random + H2 + Pause</label>
        <Shimmer random as="h2" pauseOnIdle className={styles.randomLine}>
          All Features Combined
        </Shimmer>
      </div>
    </div>
  );
};
