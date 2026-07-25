import { projects, getAllProjects, getFeaturedProjects, getProjectBySlug } from "@/data/projects";
import { Project } from "@/types/project";

export { projects, getAllProjects, getFeaturedProjects, getProjectBySlug };

export function getOtherProjects(): Project[] {
  return getAllProjects().filter((p) => !p.featured);
}
