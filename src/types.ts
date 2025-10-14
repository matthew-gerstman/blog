export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  featureImage?: string;
  banner_img?: string;
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
  onSearch?: () => void;
  onEscape?: () => void;
  onFindInPage?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}
