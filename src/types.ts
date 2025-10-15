export interface Talk {
  id: string;
  title: string;
  subtitle: string;
  video: string;
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export interface FuzzyMatchResult {
  matched: boolean;
  score: number;
}

export type Theme = 'dark' | 'light';

export interface KeyboardHandlers {
  onEscape?: () => void;
  onEnter?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
}
