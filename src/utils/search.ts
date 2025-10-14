export function searchPosts(posts: any[], query: string) {
  if (!query) return posts;

  const lowerQuery = query.toLowerCase();
  return posts.filter((post) => {
    return (
      post.title?.toLowerCase().includes(lowerQuery) ||
      post.excerpt?.toLowerCase().includes(lowerQuery) ||
      post.tags?.some((tag: string) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}

export function highlightSearchTerm(text: string, query: string): string {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}
