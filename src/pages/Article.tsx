import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import type { Post } from '../types';
import { calculateReadingTime, getWordCount } from '../utils/reading';
import { bannerImages } from '../data/banners';
import { useKeyboard } from '../hooks/useKeyboard';
import styles from './Article.module.css';

interface ArticleProps {
  posts: Post[];
}

export function Article({ posts }: ArticleProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!slug) {
      navigate('/');
      return;
    }
    
    const foundPost = posts.find(p => p.slug === slug);
    if (!foundPost) {
      navigate('/');
      return;
    }
    
    setPost(foundPost);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      if (window.hljs) {
        document.querySelectorAll('pre code').forEach((block) => {
          const text = block.textContent || '';
          if (!block.className && (text.includes('$ ') || text.includes('Matthew at '))) {
            block.classList.add('language-bash');
          }
          window.hljs.highlightElement(block);
          
          const pre = block.parentElement;
          if (pre && !pre.querySelector('.copy-button')) {
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';
            button.onclick = () => {
              navigator.clipboard.writeText(block.textContent || '');
              button.textContent = 'Copied!';
              setTimeout(() => button.textContent = 'Copy', 2000);
            };
            pre.style.position = 'relative';
            pre.insertBefore(button, pre.firstChild);
          }
        });
      }
      
      document.querySelectorAll('.article-body h2').forEach((heading, index) => {
        heading.id = `heading-${index}`;
      });
    }, 100);
  }, [slug, posts, navigate]);

  const currentIndex = post ? posts.findIndex(p => p.id === post.id) : -1;
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  useKeyboard({
    onNext: () => { if (nextPost) navigate(`/tech/${nextPost.slug}`); },
    onPrevious: () => { if (prevPost) navigate(`/tech/${prevPost.slug}`); }
  });

  if (!post) return null;

  const readingTime = calculateReadingTime(post.content);
  const wordCount = getWordCount(post.content);
  const banner = bannerImages[post.slug];

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.metaBar}>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.badge}>{readingTime} min read</span>
          <span className={styles.badge}>{wordCount.toLocaleString()} words</span>
        </div>
        {banner && <img src={banner} alt={post.title} className={styles.banner} />}
      </header>
      
      <div className={`${styles.body} article-body`} data-reading-time={readingTime} dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className={styles.authorBio}>
        <div className={styles.authorName}>Matthew Gerstman</div>
        <div className={styles.authorTitle}>Software Engineer & Tech Writer</div>
        <p className={styles.authorText}>
          Matthew is a software engineer with over a decade of experience building web applications. 
          He's passionate about JavaScript, TypeScript, React, and teaching others about web development.
          Previously at Dropbox and Bluecore, he now writes about the web and gives talks at conferences.
        </p>
      </div>

      <div className={styles.navigation}>
        {prevPost && (
          <Link to={`/tech/${prevPost.slug}`} className={styles.navPost}>
            <div className={styles.navLabel}>← Previous (k)</div>
            <div className={styles.navTitle}>{prevPost.title}</div>
          </Link>
        )}
        {nextPost && (
          <Link to={`/tech/${nextPost.slug}`} className={styles.navPost}>
            <div className={styles.navLabel}>Next (j) →</div>
            <div className={styles.navTitle}>{nextPost.title}</div>
          </Link>
        )}
      </div>
    </article>
  );
}
