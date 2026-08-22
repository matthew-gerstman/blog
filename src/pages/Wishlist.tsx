import { useMemo, useState } from 'react';
import { wishlist } from '../data/wishlist';
import type { WishlistItem, WishlistPriority } from '../data/wishlist';
import styles from './WishlistPage.module.css';

const PRIORITY_LABEL: Record<WishlistPriority, string> = {
  high: 'High Priority',
  medium: 'Medium Priority',
  low: 'Low Priority',
};

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function WishlistCard({ item }: { item: WishlistItem }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.category}>{item.category}</span>
        <span className={`${styles.priority} ${styles[item.priority]}`}>
          {PRIORITY_LABEL[item.priority]}
        </span>
      </div>

      {item.image && (
        <div className={styles.imageWrap}>
          <img src={item.image} alt={item.name} />
        </div>
      )}

      <h3 className={styles.name}>{item.name}</h3>
      <p className={styles.description}>{item.description}</p>

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewLink}
        >
          <ExternalLinkIcon />
          View
        </a>
      )}
    </div>
  );
}

export function Wishlist() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(wishlist.map((item) => item.category))),
    []
  );

  const visibleItems = activeCategory
    ? wishlist.filter((item) => item.category === activeCategory)
    : wishlist;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Wishlist</h1>
        <p className={styles.subtitle}>
          I collect a lot of things, and this page tracks what's currently on
          the hunt list.
        </p>
      </header>

      <div className={styles.filters}>
        <button
          className={`${styles.chip} ${activeCategory === null ? styles.chipActive : ''}`}
          onClick={() => setActiveCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.chip} ${activeCategory === category ? styles.chipActive : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visibleItems.map((item) => (
          <WishlistCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
