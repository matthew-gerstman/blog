import { useState, useEffect, useRef } from 'react';
import styles from './FindInPage.module.css';

interface FindInPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FindInPage({ isOpen, onClose }: FindInPageProps) {
  const [query, setQuery] = useState('');
  const [currentMatch, setCurrentMatch] = useState(0);
  const [totalMatches, setTotalMatches] = useState(0);
  const [matchElements, setMatchElements] = useState<HTMLElement[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useResetOnOpen(isOpen, inputRef, setQuery, setCurrentMatch, setTotalMatches, setMatchElements);
  useHighlightMatches(query, setMatchElements, setTotalMatches, setCurrentMatch);

  const nextMatch = () => {
    if (matchElements.length === 0) return;
    const next = currentMatch >= matchElements.length ? 1 : currentMatch + 1;
    setCurrentMatch(next);
    scrollToMatch(matchElements, next - 1, inputRef);
  };

  const prevMatch = () => {
    if (matchElements.length === 0) return;
    const prev = currentMatch <= 1 ? matchElements.length : currentMatch - 1;
    setCurrentMatch(prev);
    scrollToMatch(matchElements, prev - 1, inputRef);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.shiftKey) prevMatch();
      else nextMatch();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder="Find in page..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      {totalMatches > 0 && (
        <MatchCounter currentMatch={currentMatch} totalMatches={totalMatches} />
      )}
      <NavigationControls
        prevMatch={prevMatch}
        nextMatch={nextMatch}
        onClose={onClose}
        disabled={totalMatches === 0}
      />
    </div>
  );
}

// Components
function MatchCounter({
  currentMatch,
  totalMatches,
}: {
  currentMatch: number;
  totalMatches: number;
}) {
  return (
    <div className={styles.matches}>
      {currentMatch} / {totalMatches}
    </div>
  );
}

function NavigationControls({
  prevMatch,
  nextMatch,
  onClose,
  disabled,
}: {
  prevMatch: () => void;
  nextMatch: () => void;
  onClose: () => void;
  disabled: boolean;
}) {
  return (
    <div className={styles.controls}>
      <button
        className={styles.button}
        onClick={prevMatch}
        disabled={disabled}
        title="Previous"
        onMouseDown={(e) => e.preventDefault()}
      >
        ↑
      </button>
      <button
        className={styles.button}
        onClick={nextMatch}
        disabled={disabled}
        title="Next"
        onMouseDown={(e) => e.preventDefault()}
      >
        ↓
      </button>
      <button
        className={styles.button}
        onClick={onClose}
        title="Close"
        onMouseDown={(e) => e.preventDefault()}
      >
        ✕
      </button>
    </div>
  );
}

// Custom Hooks
function useResetOnOpen(
  isOpen: boolean,
  inputRef: React.RefObject<HTMLInputElement>,
  setQuery: (query: string) => void,
  setCurrentMatch: (match: number) => void,
  setTotalMatches: (total: number) => void,
  setMatchElements: (elements: HTMLElement[]) => void
) {
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setCurrentMatch(0);
      setTotalMatches(0);
      setMatchElements([]);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.querySelectorAll('.find-match').forEach((el) => {
        el.classList.remove('find-match', 'find-current');
      });
    }
  }, [isOpen, inputRef, setQuery, setCurrentMatch, setTotalMatches, setMatchElements]);
}

function useHighlightMatches(
  query: string,
  setMatchElements: (elements: HTMLElement[]) => void,
  setTotalMatches: (total: number) => void,
  setCurrentMatch: (match: number) => void
) {
  useEffect(() => {
    document.querySelectorAll('.find-match').forEach((el) => {
      el.classList.remove('find-match', 'find-current');
    });

    if (!query) {
      setTotalMatches(0);
      setCurrentMatch(0);
      setMatchElements([]);
      return;
    }

    const matches = highlightMatches(query);
    setMatchElements(matches);
    setTotalMatches(matches.length);

    if (matches.length > 0) {
      setCurrentMatch(1);
      scrollToMatch(matches, 0, null);
    }
  }, [query, setMatchElements, setTotalMatches, setCurrentMatch]);
}

// Helper Functions
function highlightMatches(searchText: string): HTMLElement[] {
  const article = document.querySelector('.article-body');
  if (!article) return [];

  const matches: HTMLElement[] = [];
  const searchLower = searchText.toLowerCase();

  const walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT, {
    acceptNode: (node: Node) => {
      const parent = (node as Text).parentElement;
      if (
        parent &&
        (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (
      node.textContent &&
      node.textContent.toLowerCase().includes(searchLower)
    ) {
      textNodes.push(node as Text);
    }
  }

  textNodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    if (!parent) return;

    if (
      parent.textContent &&
      parent.textContent.toLowerCase().includes(searchLower)
    ) {
      if (!parent.classList.contains('find-match')) {
        parent.classList.add('find-match');
        matches.push(parent);
      }
    }
  });

  return matches;
}

function scrollToMatch(
  matches: HTMLElement[],
  index: number,
  inputRef: React.RefObject<HTMLInputElement> | null
) {
  if (!matches[index]) return;

  matches.forEach((el) => el.classList.remove('find-current'));
  matches[index].classList.add('find-current');

  const element = matches[index];
  const yOffset = -100;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
  if (inputRef) {
    setTimeout(() => inputRef.current?.focus(), 100);
  }
}
