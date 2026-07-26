import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Laravel Backend Developer & Software Engineer",
    company: "Systems & Backend Development",
    location: "Ahmedabad, India",
    period: "2024 - 2026",
    description:
      "Engineered backend web infrastructure specializing in Laravel, relational MySQL database architecture, and REST APIs for complex business domains.",
    responsibilities: [
      "Architected AMRV (Automated Medical Resource Validation) system API backend.",
      "Optimized MySQL relational queries using index strategies, query caching, and Eloquent model tuning.",
      "Designed secure REST API endpoints with Sanctum token authentication and role-based permissions.",
      "Implemented double-entry ledger calculation routines and AES credential encryption.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "Redis", "Git", "Composer"],
  },
  {
    id: "exp-2",
    role: "Web Application Developer",
    company: "Independent Projects",
    location: "Ahmedabad, India",
    period: "2023 - 2024",
    description:
      "Developed web applications focusing on data flow, session security, and workflow automation.",
    responsibilities: [
      "Built complaint routing state machine for civic management platform.",
      "Integrated authentication logic and CRUD interfaces across custom PHP/MySQL projects.",
      "Constructed responsive UI clients consuming backend REST services.",
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "React"],
  },
];
