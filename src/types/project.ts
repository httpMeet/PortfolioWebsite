export type ProjectStatus = "production" | "completed" | "in-development" | "archived";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  featured: boolean;
  year: string;
  role: string;
  teamSize: string;
  duration: string;
  status: ProjectStatus;

  tagline: string;
  shortDescription: string;
  overview: string;

  problem: string;
  solution: string;

  engineeringHighlights: string[];
  architectureHighlights: string[];
  keyFeatures: string[];

  challenges: string[];
  lessonsLearned: string[];
  futureImprovements: string[];

  metrics: ProjectMetric[];

  techStack: string[];

  github?: string;
  liveDemo?: string;

  coverImage: string;
  gallery?: string[];
  documentation?: string;
}
