export interface Link {
  text: string;
  url: string;
}

// Content item can be a string or an object with optional prefix
export type ContentItem = string | { prefix?: string; text: string };

export interface BelowTheFoldSection {
  title: string;
  content: ContentItem[];
}

export interface Project {
  key: string; // Unique project identifier: {jobId}-{title-slug}
  title: string;
  year: string;
  startYear: number;
  endYear?: number;
  role?: string;
  description: string;
  impact?: string;
  technologies: string[];
  links?: Link[];
  belowTheFold?: BelowTheFoldSection[];
  emoji?: string; // Optional emoji for visual identification
  image?: string; // Optional image URL for visual identification
}

export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate?: string;
  description: string;
  color: string;
  projects: Project[];
}

export interface Hero {
  title: string;
  subtitle: string;
}

export interface ResumeData {
  hero: Hero;
  jobs: Job[];
}
