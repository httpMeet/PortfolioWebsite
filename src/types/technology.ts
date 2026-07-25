export type TechCategory = 
  | "language"
  | "framework"
  | "database"
  | "architecture"
  | "security"
  | "devops"
  | "tooling";

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  icon?: string;
  level?: "Core" | "Proficient" | "Familiar";
}
