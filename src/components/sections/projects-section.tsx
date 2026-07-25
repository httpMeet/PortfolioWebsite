"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import { motion } from "framer-motion";
import { getFeaturedProjects, getOtherProjects } from "@/lib/content/projects";
import { Github, ExternalLink, Cpu, CheckCircle2, AlertCircle, Layers, ArrowUpRight, FolderGit2 } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();
  const otherProjects = getOtherProjects();

  return (
    <section id="projects" className="relative py-12 sm:py-20">
      {/* Background Visual: Subtle Grid & Gradient Accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[550px] h-[240px] sm:h-[550px] bg-rose-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[180px] sm:w-[450px] h-[180px] sm:h-[450px] bg-purple-900/10 blur-[110px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <Container size="lg" className="w-full">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-rose-400 backdrop-blur-sm">
            <Layers className="w-3.5 h-3.5 text-rose-500" />
            <span>Architecture &amp; Case Studies</span>
          </div>

          <Heading as="h2" size="h2" className="text-slate-100 font-bold tracking-tight">
            Featured Systems &amp; Projects
          </Heading>

          <Paragraph size="lead" className="text-slate-400 text-xs sm:text-base">
            Detailed engineering breakdowns of production-ready Laravel backends, microservice architectures, and relational database systems.
          </Paragraph>
        </div>

        {/* Featured Projects Stack (Top 3 Flagship Projects) */}
        <div className="space-y-6 sm:space-y-8 w-full mb-12 sm:mb-16">
          {featuredProjects.map((project, index) => {
            const isFlagship = index === 0;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0.9, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative rounded-2xl border transition-all duration-300 backdrop-blur-xl p-5 sm:p-7 w-full min-w-0 ${
                  isFlagship
                    ? "bg-slate-900/90 border-rose-900/50 hover:border-rose-700/60 shadow-xl shadow-rose-950/20"
                    : "bg-slate-900/80 border-slate-800/80 hover:border-slate-700/80 shadow-lg shadow-black/40"
                }`}
              >
                {/* Header Row: Title & Badges */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 w-full border-b border-white/10 pb-4">
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-rose-400 transition-colors"
                      >
                        <Heading
                          as="h3"
                          size="h3"
                          className="text-slate-100 font-bold text-base sm:text-xl tracking-tight break-words"
                        >
                          {project.title}
                        </Heading>
                      </Link>
                      {isFlagship && (
                        <Badge variant="laravel" className="text-[10px] sm:text-xs">
                          Flagship Project
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs font-mono text-slate-400 break-words">
                      {project.category}
                    </p>
                  </div>

                  {/* CTAs Header Links */}
                  <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 transition-all"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </Link>

                    {project.github && (
                      <CTAButton
                        href={project.github}
                        variant="secondary"
                        external
                        icon={<Github className="w-3.5 h-3.5 text-slate-400" />}
                      >
                        View GitHub
                      </CTAButton>
                    )}
                    {project.liveDemo && (
                      <CTAButton
                        href={project.liveDemo}
                        variant="primary"
                        external
                        icon={<ExternalLink className="w-3.5 h-3.5 text-slate-900" />}
                      >
                        Live Demo
                      </CTAButton>
                    )}
                  </div>
                </div>

                {/* Problem Statement Box */}
                <div className="mb-5 p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 w-full min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-rose-400 mb-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-words whitespace-normal">
                    {project.problem}
                  </p>
                </div>

                {/* Architecture Bullets */}
                <div className="mb-5 space-y-2.5 w-full min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Engineering Decisions &amp; Architecture</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {project.engineeringHighlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                        <span className="leading-relaxed break-words whitespace-normal flex-1">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges Footer */}
                <div className="pt-4 border-t border-white/10 w-full min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2.5">
                    <Cpu className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="slate"
                        className="text-[11px] sm:text-xs font-mono bg-slate-950/80 border-slate-800 text-slate-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Other Projects Grid (Remaining 4 Systems) */}
        <div className="space-y-6 w-full">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <FolderGit2 className="w-4 h-4 text-rose-500" />
            <span className="uppercase tracking-wider font-semibold">Other Systems &amp; Engineering Projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0.9, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-slate-700/80 flex flex-col justify-between w-full min-w-0"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="space-y-1 min-w-0">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-rose-400 transition-colors"
                      >
                        <Heading
                          as="h3"
                          size="h3"
                          className="text-slate-100 font-bold text-base tracking-tight break-words"
                        >
                          {project.title}
                        </Heading>
                      </Link>
                      <p className="text-[11px] font-mono text-slate-400 break-words">
                        {project.category}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                          title="View GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
                        title="View Case Study"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 break-words">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="slate"
                        className="text-[10px] font-mono bg-slate-950 border-slate-800 text-slate-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
