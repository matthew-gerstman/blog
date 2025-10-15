import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { Post } from '../types';
import type { Project } from '../data/types/resume.types';
import type { Talk } from '../data/talks';
import { searchPosts, searchProjects, searchTalks } from '../utils/search';
import { calculateReadingTime } from '../utils/reading';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  posts: Post[];
  projects?: Project[];
  talks?: Talk[];
}

interface TopLevelPage {
  title: string;
  path: string;
  icon: string;
  description: string;
}

const TOP_LEVEL_PAGES: TopLevelPage[] = [
  {
    title: 'Resume',
    path: '/resume',
    icon: '💼',
    description: 'Experience, projects, and skills',
  },
  {
    title: 'Writing',
    path: '/writing',
    icon: '✍️',
    description: 'Technical articles and blog posts',
  },
  {
    title: 'Talks',
    path: '/talks',
    icon: '🎤',
    description: 'Conference talks and presentations',
  },
  {
    title: 'About',
    path: '/about',
    icon: '👋',
    description: 'About me and contact information',
  },
];

type SearchResult =
  | { type: 'page'; item: TopLevelPage }
  | { type: 'post'; item: Post }
  | { type: 'project'; item: Project }
  | { type: 'talk'; item: Talk };

export function SearchModal({
  isOpen,
  onClose,
  posts,
  projects = [],
  talks = [],
}: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useResetOnOpen(isOpen, setQuery, setResults, setSelectedIndex, inputRef);
  useSearchResults(query, posts, projects, talks, location.pathname, setResults, setSelectedIndex);
  useKeyboardNavigation(results, selectedIndex, setSelectedIndex, onClose, navigate);

  const handleSelect = (result: SearchResult) => {
    navigateToResult(result, navigate);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <SearchInput
          inputRef={inputRef}
          query={query}
          setQuery={setQuery}
          onClose={onClose}
        />
        <SearchResults
          results={results}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}

// Components
function SearchInput({
  inputRef,
  query,
  setQuery,
  onClose,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  query: string;
  setQuery: (query: string) => void;
  onClose: () => void;
}) {
  return (
    <div className={styles.searchBox}>
      <SearchIcon />
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder="Search posts, projects, talks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
      <CloseButton onClose={onClose} />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      className={styles.searchIcon}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <button className={styles.closeButton} onClick={onClose}>
      ✕
    </button>
  );
}

function SearchResults({
  results,
  selectedIndex,
  onSelect,
}: {
  results: SearchResult[];
  selectedIndex: number;
  onSelect: (result: SearchResult) => void;
}) {
  if (results.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.results}>
      {results.map((result, index) => (
        <SearchResultItem
          key={getResultKey(result, index)}
          result={result}
          isSelected={index === selectedIndex}
          onClick={() => onSelect(result)}
        />
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <p>No results found. Try different keywords.</p>
    </div>
  );
}

function SearchResultItem({
  result,
  isSelected,
  onClick,
}: {
  result: SearchResult;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${styles.result} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {result.type === 'page' && <PageResult item={result.item} />}
      {result.type === 'post' && <PostResult item={result.item} />}
      {result.type === 'project' && <ProjectResult item={result.item} />}
      {result.type === 'talk' && <TalkResult item={result.item} />}
    </div>
  );
}

function PageResult({ item }: { item: TopLevelPage }) {
  return (
    <>
      <div className={styles.resultIcon}>{item.icon}</div>
      <div className={styles.resultContent}>
        <div className={styles.resultTitle}>{item.title}</div>
        <div className={styles.resultMeta}>{item.description}</div>
      </div>
    </>
  );
}

function PostResult({ item }: { item: Post }) {
  const readingTime = calculateReadingTime(item.wordCount || 0);

  return (
    <>
      <div className={styles.resultIcon}>✍️</div>
      <div className={styles.resultContent}>
        <div className={styles.resultTitle}>{item.title}</div>
        <div className={styles.resultMeta}>
          {item.date} • {readingTime} min read
        </div>
      </div>
    </>
  );
}

function ProjectResult({ item }: { item: Project }) {
  return (
    <>
      <div className={styles.resultIcon}>🚀</div>
      <div className={styles.resultContent}>
        <div className={styles.resultTitle}>{item.title}</div>
        <div className={styles.resultMeta}>{item.description}</div>
      </div>
    </>
  );
}

function TalkResult({ item }: { item: Talk }) {
  return (
    <>
      {item.youtubeId && (
        <TalkThumbnail youtubeId={item.youtubeId} title={item.title} />
      )}
      <div className={styles.resultContent}>
        <div className={styles.resultTitle}>{item.title}</div>
        <div className={styles.resultMeta}>
          {item.event} • {item.year}
        </div>
      </div>
    </>
  );
}

function TalkThumbnail({ youtubeId, title }: { youtubeId: string; title: string }) {
  return (
    <img
      src={getYouTubeThumbnail(youtubeId)}
      alt={title}
      className={styles.talkThumbnail}
    />
  );
}

// Custom Hooks
function useResetOnOpen(
  isOpen: boolean,
  setQuery: (query: string) => void,
  setResults: (results: SearchResult[]) => void,
  setSelectedIndex: (index: number) => void,
  inputRef: React.RefObject<HTMLInputElement>
) {
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, setQuery, setResults, setSelectedIndex, inputRef]);
}

function useSearchResults(
  query: string,
  posts: Post[],
  projects: Project[],
  talks: Talk[],
  pathname: string,
  setResults: (results: SearchResult[]) => void,
  setSelectedIndex: (index: number) => void
) {
  useEffect(() => {
    if (!query) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const filteredPages = TOP_LEVEL_PAGES.filter(
      (page) =>
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.description.toLowerCase().includes(query.toLowerCase())
    );

    const isWritingPage = pathname.startsWith('/writing');
    const isTalksPage = pathname.startsWith('/talks');

    const filteredPosts = searchPosts(posts, query);
    const filteredProjects = searchProjects(projects, query);
    const filteredTalks = searchTalks(talks, query);

    const pageResults: SearchResult[] = filteredPages.map((page) => ({
      type: 'page' as const,
      item: page,
    }));
    const postResults: SearchResult[] = filteredPosts.map((post) => ({
      type: 'post' as const,
      item: post,
    }));
    const projectResults: SearchResult[] = filteredProjects.map((project) => ({
      type: 'project' as const,
      item: project,
    }));
    const talkResults: SearchResult[] = filteredTalks.map((talk) => ({
      type: 'talk' as const,
      item: talk,
    }));

    let combined: SearchResult[];
    if (isWritingPage) {
      combined = [
        ...pageResults,
        ...postResults.slice(0, 5),
        ...talkResults.slice(0, 2),
        ...projectResults.slice(0, 2),
      ];
    } else if (isTalksPage) {
      combined = [
        ...pageResults,
        ...talkResults.slice(0, 5),
        ...postResults.slice(0, 2),
        ...projectResults.slice(0, 2),
      ];
    } else {
      combined = [
        ...pageResults,
        ...projectResults.slice(0, 5),
        ...postResults.slice(0, 2),
        ...talkResults.slice(0, 2),
      ];
    }

    setResults(combined.slice(0, 10));
    setSelectedIndex(0);
  }, [query, posts, projects, talks, pathname, setResults, setSelectedIndex]);
}

function useKeyboardNavigation(
  results: SearchResult[],
  selectedIndex: number,
  setSelectedIndex: (index: number) => void,
  onClose: () => void,
  navigate: ReturnType<typeof useNavigate>
) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        navigateToResult(results[selectedIndex], navigate);
        onClose();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [results, selectedIndex, setSelectedIndex, onClose, navigate]);
}

// Helper Functions
function getYouTubeThumbnail(videoId: string): string {
  const cleanId = videoId.split('?')[0];
  return `https://img.youtube.com/vi/${cleanId}/hqdefault.jpg`;
}

function getResultKey(result: SearchResult, index: number): string {
  if (result.type === 'page') return `page-${result.item.path}`;
  if (result.type === 'post') return `post-${result.item.slug}`;
  if (result.type === 'project') return `project-${result.item.key || index}`;
  if (result.type === 'talk') return `talk-${result.item.slug}`;
  return `result-${index}`;
}

function navigateToResult(
  result: SearchResult,
  navigate: ReturnType<typeof useNavigate>
) {
  if (result.type === 'page') {
    navigate(result.item.path);
  } else if (result.type === 'post') {
    navigate(`/writing/${result.item.slug}`);
  } else if (result.type === 'project') {
    navigate(`/resume?project=${result.item.key}`);
  } else if (result.type === 'talk') {
    navigate(`/talks?talk=${result.item.slug}`);
  }
}
