import type { Post, FuzzyMatchResult } from '../types';
import type { Project } from '../data/types/resume.types';
import type { Talk } from '../data/talks';

export function fuzzyMatch(pattern: string, str: string): FuzzyMatchResult {
  pattern = pattern.toLowerCase();
  str = str.toLowerCase();

  // For very short patterns, require substring match or word boundary match
  if (pattern.length <= 3) {
    if (str.includes(pattern)) {
      // Exact substring found - high score
      const index = str.indexOf(pattern);
      // Bonus for word boundary
      const atWordBoundary = index === 0 || /\s/.test(str[index - 1]);
      return { 
        matched: true, 
        score: 100 * (atWordBoundary ? 2 : 1) / (index + 1)
      };
    }
    // For short patterns, no fuzzy matching - too many false positives
    return { matched: false, score: 0 };
  }

  let patternIdx = 0;
  let strIdx = 0;
  let score = 0;
  let consecutiveMatches = 0;
  let lastMatchIdx = -1;
  const maxGap = 2; // Reduced from 3 - characters must be very close

  while (patternIdx < pattern.length && strIdx < str.length) {
    if (pattern[patternIdx] === str[strIdx]) {
      // Check if gap is too large (unless this is the first match)
      if (lastMatchIdx !== -1 && strIdx - lastMatchIdx > maxGap + 1) {
        return { matched: false, score: 0 };
      }
      
      score += 1 + consecutiveMatches;
      consecutiveMatches++;
      lastMatchIdx = strIdx;
      patternIdx++;
    } else {
      consecutiveMatches = 0;
    }
    strIdx++;
  }

  if (patternIdx !== pattern.length) {
    return { matched: false, score: 0 };
  }

  // Penalize matches based on how spread out they are
  const spreadPenalty = str.length / pattern.length;
  score = score / Math.max(1, spreadPenalty * 0.5);

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
      const excerptMatch = post.excerpt
        ? fuzzyMatch(searchTerm, post.excerpt)
        : { matched: false, score: 0 };
      const totalScore =
        (titleMatch.matched ? titleMatch.score * 2 : 0) +
        (excerptMatch.matched ? excerptMatch.score : 0);
      return {
        post,
        matched: titleMatch.matched || excerptMatch.matched,
        score: totalScore,
      };
    })
    .filter((r): r is ScoredResult => r.matched)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.post);
}

export function searchProjects(
  projects: Project[],
  searchTerm: string
): Project[] {
  if (!searchTerm) return projects;

  interface ScoredResult {
    project: Project;
    matched: boolean;
    score: number;
  }

  return projects
    .map((project): ScoredResult => {
      // Search in title (highest weight)
      const titleMatch = fuzzyMatch(searchTerm, project.title);

      // Search in technologies/tags (medium weight)
      const techMatches = project.technologies.map((tech) =>
        fuzzyMatch(searchTerm, tech)
      );
      const bestTechMatch = techMatches.reduce(
        (best, current) => (current.score > best.score ? current : best),
        { matched: false, score: 0 }
      );

      // Search in description (lower weight)
      const descMatch = project.description
        ? fuzzyMatch(searchTerm, project.description)
        : { matched: false, score: 0 };

      // Calculate total score with weights
      const totalScore =
        (titleMatch.matched ? titleMatch.score * 3 : 0) +
        (bestTechMatch.matched ? bestTechMatch.score * 2 : 0) +
        (descMatch.matched ? descMatch.score : 0);

      return {
        project,
        matched:
          titleMatch.matched || bestTechMatch.matched || descMatch.matched,
        score: totalScore,
      };
    })
    .filter((r): r is ScoredResult => r.matched)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.project);
}

export function searchTalks(talks: Talk[], searchTerm: string): Talk[] {
  if (!searchTerm) return talks;

  interface ScoredResult {
    talk: Talk;
    matched: boolean;
    score: number;
  }

  return talks
    .map((talk): ScoredResult => {
      // Search in title (highest weight)
      const titleMatch = fuzzyMatch(searchTerm, talk.title);

      // Search in subtitle (medium-high weight)
      const subtitleMatch = talk.subtitle
        ? fuzzyMatch(searchTerm, talk.subtitle)
        : { matched: false, score: 0 };

      // Search in tags (medium weight)
      const tagMatches = talk.tags.map((tag) => fuzzyMatch(searchTerm, tag));
      const bestTagMatch = tagMatches.reduce(
        (best, current) => (current.score > best.score ? current : best),
        { matched: false, score: 0 }
      );

      // Search in description (lower weight)
      const descMatch = talk.description
        ? fuzzyMatch(searchTerm, talk.description)
        : { matched: false, score: 0 };

      // Search in venue (lower weight)
      const venueMatch = talk.venue
        ? fuzzyMatch(searchTerm, talk.venue)
        : { matched: false, score: 0 };

      // Calculate total score with weights
      const totalScore =
        (titleMatch.matched ? titleMatch.score * 3 : 0) +
        (subtitleMatch.matched ? subtitleMatch.score * 2.5 : 0) +
        (bestTagMatch.matched ? bestTagMatch.score * 2 : 0) +
        (descMatch.matched ? descMatch.score : 0) +
        (venueMatch.matched ? venueMatch.score * 0.5 : 0);

      return {
        talk,
        matched:
          titleMatch.matched ||
          subtitleMatch.matched ||
          bestTagMatch.matched ||
          descMatch.matched ||
          venueMatch.matched,
        score: totalScore,
      };
    })
    .filter((r): r is ScoredResult => r.matched)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.talk);
}
