import { useEffect } from 'react';
import type { KeyboardHandlers } from '../types';

export function useKeyboard(handlers: KeyboardHandlers): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        if (e.key === 'Escape') { handlers.onEscape?.(); return; }
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); handlers.onSearch?.(); return; }
        return;
      }
      
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); handlers.onSearch?.(); }
      if (e.key === '/') { e.preventDefault(); handlers.onFindInPage?.(); }
      if (e.key === 'Escape') { handlers.onEscape?.(); }
      if (e.key === 'j') { e.preventDefault(); handlers.onNext?.(); }
      if (e.key === 'k') { e.preventDefault(); handlers.onPrevious?.(); }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handlers]);
}
