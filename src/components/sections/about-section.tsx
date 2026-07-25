"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Code2,
  Terminal,
  GraduationCap,
  Briefcase,
  UserCheck,
  Cpu,
  Sparkles,
  Calendar,
  Building2,
} from "lucide-react";

export function AboutSection() {
  const bentoSkills = [
    {
      category: "Backend & Frameworks",
      icon: Server,
      isPrimary: true,
      description: "Primary specialization — enterprise REST APIs, service layers & security",
      skills: [
        "Laravel 12",
        "PHP",
        "RESTful APIs",
        "MVC",
        "Eloquent ORM",
        "Sanctum",
        "Blade",
        "Artisan CLI",
      ],
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      color: "from-rose-950/60 to-rose-900/30 border-rose-800/60",
      accentColor: "text-rose-400",
    },
    {
      category: "Databases",
      icon: Database,
      isPrimary: false,
      description: "Relational schema design & indexing",
      skills: ["MySQL", "PostgreSQL", "SQLite"],
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      color: "from-slate-900/90 to-slate-900/60 border-slate-800/80",
      accentColor: "text-blue-400",
    },
    {
      category: "Frontend",
      icon: Code2,
      isPrimary: false,
      description: "Interactive client UIs & state management",
      skills: ["JavaScript", "AJAX", "React.js", "Bootstrap", "Tailwind CSS"],
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      color: "from-slate-900/90 to-slate-900/60 border-slate-800/80",
      accentColor: "text-purple-400",
    },
    {
      category: "DevOps & Tools",
      icon: Terminal,
      isPrimary: false,
      description: "Containerization, web servers & caching",
      skills: ["Docker", "Nginx", "Redis", "Git/GitHub", "Linux"],
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      color: "from-slate-900/90 to-slate-900/60 border-slate-800/80",
      accentColor: "text-emerald-400",
    },
  ];

  const timelineItems = [
    {
      title: "Simform Software LLP",
      role: "Trainee Engineer",
      period: "Jan 2026 – Present",
      type: "Experience",
      icon: Briefcase,
      description:
        "Trainee Engineer focusing on enterprise backend architecture, Laravel framework standards, clean code practices, and scalable software solutions.",
    },
    {
      title: "B.E. Computer Science",
      role: "Gujarat Technological University (GTU)",
      period: "May 2026",
      type: "Education",
      icon: GraduationCap,
      description:
        "Bachelor of Engineering in Computer Science focusing on relational database management, data structures, algorithms, and web engineering.",
    },
    {
      title: "Diploma in Computer Engineering",
      role: "Gujarat Technological University (GTU)",
      period: "May 2023",
      type: "Education",
      icon: GraduationCap,
      description:
        "Diploma in Computer Engineering covering core computer science principles, networking, object-oriented programming, and web development fundamentals.",
    },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-20">
      {/* Background Visual Accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-rose-600/10 blur-[110px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <Container size="lg" className="w-full">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-rose-400 backdrop-blur-sm">
            <UserCheck className="w-3.5 h-3.5 text-rose-500" />
            <span>Engineering Background</span>
          </div>

          <Heading as="h2" size="h2" className="text-slate-100 font-bold tracking-tight">
            About &amp; Technical Capabilities
          </Heading>

          {/* Short Narrative */}
          <Paragraph size="lead" className="text-slate-300 text-xs sm:text-base leading-relaxed break-words whitespace-normal">
            Backend Engineer specializing in Laravel, clean system architecture, and robust relational database design. I focus on crafting secure REST APIs, scalable service layers, and efficient data processing workflows that solve real business problems.
          </Paragraph>
        </div>

        {/* Skills Bento Grid */}
        <div className="space-y-4 mb-12 sm:mb-16 w-full">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <Cpu className="w-4 h-4 text-rose-500" />
            <span className="uppercase tracking-wider font-semibold">Technical Stack Bento Grid</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 w-full">
            {bentoSkills.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0.9, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`rounded-2xl border bg-gradient-to-br p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 ${item.color} ${item.colSpan} w-full min-w-0`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-2 rounded-xl bg-slate-900/90 border border-white/10 shrink-0">
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.accentColor}`} />
                      </div>
                      <Heading
                        as="h3"
                        size="h3"
                        className="text-slate-100 font-bold text-sm sm:text-base tracking-tight truncate"
                      >
                        {item.category}
                      </Heading>
                    </div>
                    {item.isPrimary && (
                      <Badge variant="laravel" className="text-[10px] shrink-0">
                        Primary Focus
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 font-mono mb-4 break-words">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {item.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant={item.isPrimary ? "laravel" : "slate"}
                        className={`text-[11px] font-mono ${
                          item.isPrimary
                            ? "bg-rose-950/80 border-rose-800/80 text-rose-200"
                            : "bg-slate-950/80 border-slate-800 text-slate-300"
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Compact Career & Education Timeline */}
        <div className="space-y-4 w-full">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <Building2 className="w-4 h-4 text-rose-500" />
            <span className="uppercase tracking-wider font-semibold">Career &amp; Education Timeline</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0.9, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:border-slate-700/80 w-full min-w-0"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
                      <Icon className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{item.type}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800 shrink-0">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <Heading
                    as="h3"
                    size="h3"
                    className="text-slate-100 font-bold text-sm sm:text-base tracking-tight mb-1 break-words"
                  >
                    {item.title}
                  </Heading>

                  <p className="text-xs font-mono text-slate-400 mb-2.5 break-words">
                    {item.role}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed break-words whitespace-normal">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
