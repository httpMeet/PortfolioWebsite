import React from "react";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/content/projects";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Layers,
  Calendar,
  Clock,
  Users,
  Shield,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Meet Gandhi",
    };
  }

  return {
    title: `${project.title} | Meet Gandhi Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="relative py-12 sm:py-16">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-rose-600/10 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem]" />
      </div>

      <Container size="lg" className="w-full space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-rose-500" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-rose-400">
              {project.category}
            </span>
            {project.featured && (
              <Badge variant="laravel" className="text-xs">
                Flagship Case Study
              </Badge>
            )}
            <Badge variant="slate" className="text-xs">
              {project.year}
            </Badge>
          </div>

          <Heading as="h1" size="h1" className="text-slate-100 font-bold text-3xl sm:text-5xl tracking-tight">
            {project.title}
          </Heading>

          <Paragraph size="lead" className="text-slate-300 text-base sm:text-xl leading-relaxed">
            {project.tagline}
          </Paragraph>
        </div>

        {/* Project Meta Bar Card */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
              <Shield className="w-3.5 h-3.5 text-rose-500" />
              <span>Role</span>
            </div>
            <p className="text-sm font-semibold text-slate-200">{project.role}</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
              <Users className="w-3.5 h-3.5 text-rose-500" />
              <span>Team Size</span>
            </div>
            <p className="text-sm font-semibold text-slate-200">{project.teamSize}</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span>Duration</span>
            </div>
            <p className="text-sm font-semibold text-slate-200">{project.duration}</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-1">
              <Calendar className="w-3.5 h-3.5 text-rose-500" />
              <span>Status</span>
            </div>
            <p className="text-sm font-semibold text-slate-200 capitalize">{project.status}</p>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3">
          {project.github && (
            <CTAButton href={project.github} variant="secondary" external icon={<Github className="w-4 h-4 text-slate-400" />}>
              View Repository on GitHub
            </CTAButton>
          )}
          {project.liveDemo && (
            <CTAButton href={project.liveDemo} variant="primary" external icon={<ExternalLink className="w-4 h-4 text-slate-900" />}>
              Live Demo
            </CTAButton>
          )}
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-3 font-semibold">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Problem Statement</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Engineering Solution</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Engineering Highlights */}
        <div className="space-y-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Layers className="w-4 h-4 text-rose-500" />
            <span className="uppercase font-semibold tracking-wider">Engineering Decisions &amp; Architecture</span>
          </div>

          <ul className="space-y-3">
            {project.engineeringHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Cpu className="w-4 h-4 text-rose-500" />
            <span className="uppercase font-semibold tracking-wider">Technologies Used</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="slate" className="text-xs font-mono bg-slate-950 border-slate-800">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
