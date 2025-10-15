import { useEffect } from 'react';
import type { KeyboardHandlers } from '../types';

export function useKeyboard(handlers: KeyboardHandlers): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;

      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        if (e.key === 'Escape') {
          handlers.onEscape?.();
          return;
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          handlers.onSearch?.();
          return;
        }
        return;
      }

      // Cmd+K / Ctrl+K - Search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        handlers.onSearch?.();
        return; // Don't continue to plain 'k' handler
      }

      // Slash - Find in page
      if (e.key === '/') {
        e.preventDefault();
        handlers.onFindInPage?.();
        return;
      }

      // Escape
      if (e.key === 'Escape') {
        handlers.onEscape?.();
        return;
      }

      // j - Next (only if not modified by Cmd/Ctrl)
      if (e.key === 'j' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        handlers.onNext?.();
        return;
      }

      // k - Previous (only if not modified by Cmd/Ctrl)
      if (e.key === 'k' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        handlers.onPrevious?.();
        return;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handlers]);
}
