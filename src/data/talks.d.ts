export interface Talk {
  id: number;
  title: string;
  subtitle: string;
  video: string;
  date: string;
  venue: string;
  description: string;
  tags: string[];
}

export const talks: Talk[];
