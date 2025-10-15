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
  type?: 'article' | 'page-link';
  externalLink?: string;
}
