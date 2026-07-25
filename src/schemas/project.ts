import { z } from "zod";

export const ProjectStatusSchema = z.enum([
  "production",
  "completed",
  "in-development",
  "archived",
]);

export const ProjectMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  category: z.string(),
  featured: z.boolean(),
  year: z.string(),
  role: z.string(),
  teamSize: z.string(),
  duration: z.string(),
  status: ProjectStatusSchema,

  tagline: z.string(),
  shortDescription: z.string(),
  overview: z.string(),

  problem: z.string(),
  solution: z.string(),

  engineeringHighlights: z.array(z.string()),
  architectureHighlights: z.array(z.string()),
  keyFeatures: z.array(z.string()),

  challenges: z.array(z.string()),
  lessonsLearned: z.array(z.string()),
  futureImprovements: z.array(z.string()),

  metrics: z.array(ProjectMetricSchema),

  techStack: z.array(z.string()),

  github: z.string().optional(),
  liveDemo: z.string().optional(),

  coverImage: z.string(),
  gallery: z.array(z.string()).optional(),
  documentation: z.string().optional(),
});

export type ProjectSchemaType = z.infer<typeof ProjectSchema>;
