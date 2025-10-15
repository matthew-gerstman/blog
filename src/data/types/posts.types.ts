export interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  banner_img: string;
  banner_position?: string; // CSS object-position value (e.g., 'center', 'top', 'bottom', '50% 30%')
  heroImage?: string;
  externalLink?: string; // Optional field for linking to arbitrary pages
  wordCount?: number;
}

export type PostsData = Post[];
