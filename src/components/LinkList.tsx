import styles from './LinkList.module.css';

interface LinkListProps {
  links?: { text: string; url: string }[];
}

export function LinkList({ links }: LinkListProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className={styles.linkList}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}
