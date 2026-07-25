import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Backend & Frameworks",
    description: "Primary backend stack for building enterprise application logic.",
    items: [
      {
        id: "php",
        name: "PHP 8.x",
        category: "language",
        description: "Modern OOP PHP, strict typing, attributes, and asynchronous execution.",
        level: "Core",
      },
      {
        id: "laravel",
        name: "Laravel 10 / 11",
        category: "framework",
        description: "Eloquent ORM, Service Providers, Artisan, Queues, Middleware, Sanctum.",
        level: "Core",
      },
      {
        id: "python",
        name: "Python / Django",
        category: "language",
        description: "Backend scripting, REST framework APIs, and microservices.",
        level: "Proficient",
      },
    ],
  },
  {
    title: "Database & Caching",
    description: "Relational schema design, query optimization, and memory cache stores.",
    items: [
      {
        id: "mysql",
        name: "MySQL 8.0",
        category: "database",
        description: "Normalized schema design, composite indexing, transactions, triggers.",
        level: "Core",
      },
      {
        id: "redis",
        name: "Redis",
        category: "database",
        description: "In-memory caching, session storage, queue pub/sub handling.",
        level: "Proficient",
      },
      {
        id: "eloquent",
        name: "Eloquent ORM",
        category: "architecture",
        description: "Advanced relationship modeling, eager loading optimization, query builders.",
        level: "Core",
      },
    ],
  },
  {
    title: "API Architecture & Security",
    description: "Building resilient RESTful interfaces and secure authentication flows.",
    items: [
      {
        id: "rest",
        name: "RESTful API Design",
        category: "architecture",
        description: "Standardized HTTP status codes, JSON API schemas, rate limiting.",
        level: "Core",
      },
      {
        id: "sanctum",
        name: "Laravel Sanctum / JWT",
        category: "security",
        description: "Token authentication, API access tokens, and RBAC authorization.",
        level: "Core",
      },
      {
        id: "encryption",
        name: "AES-256 Encryption",
        category: "security",
        description: "Data-at-rest encryption, secure payload handling, hashing routines.",
        level: "Proficient",
      },
    ],
  },
  {
    title: "DevOps & Tooling",
    description: "Development workflow, version control, and cloud platform deployment.",
    items: [
      {
        id: "git",
        name: "Git & GitHub",
        category: "devops",
        description: "Branching strategies, code review workflows, pull requests.",
        level: "Core",
      },
      {
        id: "postman",
        name: "Postman",
        category: "tooling",
        description: "API testing, automated collection runners, contract verification.",
        level: "Core",
      },
      {
        id: "composer",
        name: "Composer",
        category: "tooling",
        description: "PHP dependency management, package publishing, autoloading.",
        level: "Core",
      },
      {
        id: "vercel",
        name: "Vercel / Deployment",
        category: "devops",
        description: "Serverless deployments, environment variable management, CI/CD.",
        level: "Proficient",
      },
    ],
  },
];
