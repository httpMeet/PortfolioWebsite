export type TimelineCategory = "Work" | "Education" | "Project" | "Milestone";

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  achievements?: string[];
  skills?: string[];
  category: TimelineCategory;
}
