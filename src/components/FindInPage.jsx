import { useState, useEffect, useRef } from 'react';
import styles from './FindInPage.module.css';

export function FindInPage({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [currentMatch, setCurrentMatch] = useState(0);
  const [totalMatches, setTotalMatches] = useState(0);
  const [matchElements, setMatchElements] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setCurrentMatch(0);
      setTotalMatches(0);
      setMatchElements([]);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.querySelectorAll('.find-match').forEach(el => {
        el.classList.remove('find-match', 'find-current');
      });
    }
  }, [isOpen]);

  useEffect(() => {
    document.querySelectorAll('.find-match').forEach(el => {
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
      scrollToMatch(matches, 0);
    }
  }, [query]);

  const highlightMatches = (searchText) => {
    const article = document.querySelector('.article-body');
    if (!article) return [];

    const matches = [];
    const searchLower = searchText.toLowerCase();
    
    const walker = document.createTreeWalker(
      article,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          if (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE') {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent.toLowerCase().includes(searchLower)) {
        textNodes.push(node);
      }
    }

    textNodes.forEach(textNode => {
      const parent = textNode.parentElement;
      if (!parent) return;
      
      if (parent.textContent.toLowerCase().includes(searchLower)) {
        if (!parent.classList.contains('find-match')) {
          parent.classList.add('find-match');
          matches.push(parent);
        }
      }
    });

    return matches;
  };

  const scrollToMatch = (matches, index) => {
    if (!matches[index]) return;
    
    matches.forEach(el => el.classList.remove('find-current'));
    matches[index].classList.add('find-current');
    
    const element = matches[index];
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const nextMatch = () => {
    if (matchElements.length === 0) return;
    const next = currentMatch >= matchElements.length ? 1 : currentMatch + 1;
    setCurrentMatch(next);
    scrollToMatch(matchElements, next - 1);
  };

  const prevMatch = () => {
    if (matchElements.length === 0) return;
    const prev = currentMatch <= 1 ? matchElements.length : currentMatch - 1;
    setCurrentMatch(prev);
    scrollToMatch(matchElements, prev - 1);
  };

  const handleKeyDown = (e) => {
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
        <div className={styles.matches}>{currentMatch} / {totalMatches}</div>
      )}
      <div className={styles.controls}>
        <button className={styles.button} onClick={prevMatch} disabled={totalMatches === 0} title="Previous" onMouseDown={(e) => e.preventDefault()}>↑</button>
        <button className={styles.button} onClick={nextMatch} disabled={totalMatches === 0} title="Next" onMouseDown={(e) => e.preventDefault()}>↓</button>
        <button className={styles.button} onClick={onClose} title="Close" onMouseDown={(e) => e.preventDefault()}>✕</button>
      </div>
    </div>
  );
}
