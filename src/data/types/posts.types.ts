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
  externalLink?: string; // Optional field for linking to arbitrary pages
}

export type PostsData = Post[];
