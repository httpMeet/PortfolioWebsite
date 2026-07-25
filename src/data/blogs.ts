import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    title: "Optimizing Laravel Database Queries: Composite Indexes & Query Logs",
    slug: "optimizing-laravel-database-queries",
    excerpt:
      "A deep dive into diagnosing slow Eloquent queries, analyzing EXPLAIN execution plans, and implementing composite database indexes in MySQL.",
    publishedAt: "2024-11-15",
    readTime: "6 min read",
    tags: ["Laravel", "MySQL", "Database Optimization", "PHP"],
    featured: true,
  },
  {
    title: "Designing Fail-Safe REST APIs in Laravel with Standardized JSON Contracts",
    slug: "designing-fail-safe-rest-apis-laravel",
    excerpt:
      "How to design predictable RESTful API response schemas, handle global exceptions gracefully, and enforce strict HTTP status contracts.",
    publishedAt: "2024-10-02",
    readTime: "5 min read",
    tags: ["Laravel", "REST API", "Software Architecture", "PHP"],
    featured: true,
  },
  {
    title: "Understanding Race Conditions & Database Isolation Levels in Financial Engines",
    slug: "race-conditions-database-isolation-levels",
    excerpt:
      "Preventing ledger balance corruption using atomic SQL transactions, row locking (`FOR UPDATE`), and strict isolation levels.",
    publishedAt: "2024-08-20",
    readTime: "8 min read",
    tags: ["MySQL", "Database Security", "Transactions", "Backend"],
    featured: false,
  },
];
