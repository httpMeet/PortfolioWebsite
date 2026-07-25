export interface Blog {
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}
