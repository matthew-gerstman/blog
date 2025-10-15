export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  banner_img: string;
  heroImage?: string;
  type?: 'blog' | 'page'; // New: differentiate article types
  pageUrl?: string; // New: for page articles that link to other pages
}

export type PostsData = Post[];
