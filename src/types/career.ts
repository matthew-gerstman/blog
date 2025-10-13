export interface BelowTheFoldSection {
  title: string;
  content: string[];
}

export interface Project {
  title: string;
  year: string;
  startYear: number;
  endYear: number;
  description: string;
  belowTheFold?: BelowTheFoldSection[];
  impact?: string;
  role?: string;
  technologies?: string[];
}

export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate?: string;
  description: string;
  projects: Project[];
  color?: string;
}

export interface CareerData {
  hero: {
    title: string;
    subtitle: string;
  };
  jobs: Job[];
}

export interface AboutData {
  hero: {
    title: string;
    subtitle: string;
    lead: string;
  };
  professionalSummary: {
    description: string;
    coreStrengths: string[];
  };
  technicalExpertise: {
    categories: {
      title: string;
      description: string;
    }[];
  };
  featuredProjects: {
    title: string;
    company: string;
    year: string;
    description: string;
  }[];
  originStory: {
    paragraphs: string[];
  };
  contact: {
    links: {
      label: string;
      url: string;
    }[];
  };
}
