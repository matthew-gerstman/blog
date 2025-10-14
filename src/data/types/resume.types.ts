export interface Hero {
  title: string;
  subtitle: string;
}

export interface Link {
  text: string;
  url: string;
}

export interface BelowTheFoldSection {
  title: string;
  content: string[];
}

export interface Project {
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

export interface ResumeData {
  hero: Hero;
  jobs: Job[];
}
