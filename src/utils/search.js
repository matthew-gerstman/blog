export function fuzzyMatch(pattern, str) {
  pattern = pattern.toLowerCase();
  str = str.toLowerCase();
  let patternIdx = 0, strIdx = 0, score = 0, consecutiveMatches = 0;
  
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
  
  return patternIdx === pattern.length ? { matched: true, score } : { matched: false, score: 0 };
}

export function searchPosts(posts, searchTerm) {
  if (!searchTerm) return posts;
  
  return posts.map(post => {
    const titleMatch = fuzzyMatch(searchTerm, post.title);
    const excerptMatch = post.excerpt ? fuzzyMatch(searchTerm, post.excerpt) : { matched: false, score: 0 };
    const totalScore = (titleMatch.matched ? titleMatch.score * 2 : 0) + (excerptMatch.matched ? excerptMatch.score : 0);
    return { post, matched: titleMatch.matched || excerptMatch.matched, score: totalScore };
  })
  .filter(r => r.matched)
  .sort((a, b) => b.score - a.score)
  .map(r => r.post);
}
