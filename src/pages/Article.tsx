import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import type { Post } from '../types';
import { calculateReadingTime, getWordCount } from '../utils/reading';
import { useKeyboard } from '../hooks/useKeyboard';
import { TwitterEmbed } from '../components/TwitterEmbed';
import {
  BasicDemo,
  ThrottleDemo,
  DebounceDemo,
} from '../demos/ThrottleDebounceDemo';
import { OptimizedImage } from '../components/OptimizedImage';
import styles from './Article.module.css';

interface ArticleProps {
  posts: Post[];
}

export function Article({ posts }: ArticleProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [hasTwitterEmbed, setHasTwitterEmbed] = useState(false);

  useEffect(() => {
    if (!slug) {
      navigate('/');
      return;
    }

    const foundPost = posts.find((p) => p.slug === slug);
    if (!foundPost) {
      navigate('/');
      return;
    }

    setPost(foundPost);

    // Check if post has Twitter embeds
    const hasTwitter =
      foundPost.content.includes('twitter-tweet') ||
      foundPost.content.toLowerCase().includes('twitter.com');
    setHasTwitterEmbed(hasTwitter);

    window.scrollTo(0, 0);

    setTimeout(() => {
      // Syntax highlighting
      if (window.hljs) {
        document.querySelectorAll('pre code').forEach((block) => {
          const text = block.textContent || '';
          if (
            !block.className &&
            (text.includes('$ ') || text.includes('Matthew at '))
          ) {
            block.classList.add('language-bash');
          }
          (window.hljs as any).highlightElement(block);

          const pre = block.parentElement;
          if (pre && !pre.querySelector('.copy-button')) {
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';
            button.onclick = () => {
              navigator.clipboard.writeText(block.textContent || '');
              button.textContent = 'Copied!';
              setTimeout(() => (button.textContent = 'Copy'), 2000);
            };
            pre.style.position = 'relative';
            pre.insertBefore(button, pre.firstChild);
          }
        });
      }

      // Heading IDs
      document
        .querySelectorAll('.article-body h2')
        .forEach((heading, index) => {
          heading.id = `heading-${index}`;
        });

      // Make YouTube embeds responsive
      document
        .querySelectorAll('.article-body iframe[src*="youtube"]')
        .forEach((iframe) => {
          const wrapper = document.createElement('div');
          wrapper.className = 'responsive-embed';
          wrapper.style.position = 'relative';
          wrapper.style.paddingBottom = '56.25%';
          wrapper.style.height = '0';
          wrapper.style.overflow = 'hidden';
          wrapper.style.margin = '2rem 0';
          wrapper.style.borderRadius = '8px';

          iframe.parentNode?.insertBefore(wrapper, iframe);
          wrapper.appendChild(iframe);

          (iframe as HTMLIFrameElement).style.position = 'absolute';
          (iframe as HTMLIFrameElement).style.top = '0';
          (iframe as HTMLIFrameElement).style.left = '0';
          (iframe as HTMLIFrameElement).style.width = '100%';
          (iframe as HTMLIFrameElement).style.height = '100%';
          (iframe as HTMLIFrameElement).style.border = 'none';
        });

      // Hydrate throttle/debounce demos
      document.querySelectorAll('[data-demo]').forEach((container) => {
        const demoType = container.getAttribute('data-demo');
        let DemoComponent;

        switch (demoType) {
          case 'throttle-debounce-basic':
            DemoComponent = BasicDemo;
            break;
          case 'throttle-debounce-throttle':
            DemoComponent = ThrottleDemo;
            break;
          case 'throttle-debounce-debounce':
            DemoComponent = DebounceDemo;
            break;
          default:
            return;
        }

        const root = createRoot(container);
        root.render(<DemoComponent />);
      });

      // Replace content images with OptimizedImage components
      document.querySelectorAll('.article-body img').forEach((img) => {
        const src = img.getAttribute('src') || '';
        const alt = img.getAttribute('alt') || '';

        // Skip if already processed
        if (img.classList.contains('optimized-processed')) return;

        // Create wrapper div for React component
        const wrapper = document.createElement('div');
        wrapper.className = 'optimized-image-wrapper';
        img.parentNode?.insertBefore(wrapper, img);

        // Render OptimizedImage component
        const root = createRoot(wrapper);
        root.render(
          <OptimizedImage
            src={src}
            alt={alt}
            size="large"
            loading="lazy"
            className={img.className}
          />
        );

        // Remove original img
        img.remove();
      });
    }, 100);
  }, [slug, posts, navigate]);

  const currentIndex = post ? posts.findIndex((p) => p.id === post.id) : -1;
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  useKeyboard({
    onNext: () => {
      if (nextPost) navigate(`/tech/${nextPost.slug}`);
    },
    onPrevious: () => {
      if (prevPost) navigate(`/tech/${prevPost.slug}`);
    },
  });

  if (!post) return null;

  const readingTime = calculateReadingTime(post.content);
  const wordCount = getWordCount(post.content);
  const banner = post.banner_img;

  return (
    <article className={styles.article}>
      {hasTwitterEmbed && <TwitterEmbed />}

      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.metaBar}>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.badge}>{readingTime} min read</span>
          <span className={styles.badge}>
            {wordCount.toLocaleString()} words
          </span>
        </div>
        {banner && (
          <OptimizedImage
            src={banner}
            alt={post.title}
            className={styles.banner}
            size="full"
            loading="eager"
          />
        )}
      </header>

      <div
        className={`${styles.body} article-body`}
        data-reading-time={readingTime}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className={styles.authorBio}>
        <div className={styles.authorName}>Matthew Gerstman</div>
        <div className={styles.authorTitle}>
          Software Engineer & Tech Writer
        </div>
        <p className={styles.authorText}>
          Matthew is a software engineer with over a decade of experience
          building web applications. He's passionate about JavaScript,
          TypeScript, React, and teaching others about web development.
          Previously at Dropbox and Bluecore, he now writes about the web and
          gives talks at conferences.
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
