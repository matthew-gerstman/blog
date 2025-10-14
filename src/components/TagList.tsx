import styles from './TagList.module.css';

interface TagListProps {
  tags?: string[];
  className?: string;
}

export function TagList({ tags, className = '' }: TagListProps) {
  if (!tags || tags.length === 0) return null;
  
  return (
    <div className={`${styles.tagList} ${className}`}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
