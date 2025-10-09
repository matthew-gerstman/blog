import type { Post, FuzzyMatchResult } from '../types';

export function fuzzyMatch(pattern: string, str: string): FuzzyMatchResult {
  pattern = pattern.toLowerCase();
  str = str.toLowerCase();
  
  let patternIdx = 0;
  let strIdx = 0;
  let score = 0;
  let consecutiveMatches = 0;
  
  while (patternIdx < pattern.length && strIdx < str.length) {
    if (pattern[patternIdx] === str[strIdx]) {
      score += 1 + consecutiveMatches;
      consecutiveMatches++;
      patternIdx++;
    } else {
      consecutiveMatches = 0;
    }
    strIdx++;
  }
  
  if (patternIdx !== pattern.length) {
    return { matched: false, score: 0 };
  }
  
  return { matched: true, score };
}

export function searchPosts(posts: Post[], searchTerm: string): Post[] {
  if (!searchTerm) return posts;
  
  interface ScoredResult {
    post: Post;
    matched: boolean;
    score: number;
  }
  
  return posts
    .map((post): ScoredResult => {
      const titleMatch = fuzzyMatch(searchTerm, post.title);
      const excerptMatch = post.excerpt ? fuzzyMatch(searchTerm, post.excerpt) : { matched: false, score: 0 };
      const totalScore = (titleMatch.matched ? titleMatch.score * 2 : 0) + (excerptMatch.matched ? excerptMatch.score : 0);
      return { post, matched: titleMatch.matched || excerptMatch.matched, score: totalScore };
    })
    .filter((r): r is ScoredResult => r.matched)
    .sort((a, b) => b.score - a.score)
    .map(r => r.post);
}
