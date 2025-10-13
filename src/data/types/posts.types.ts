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
}

export type PostsData = Post[];
