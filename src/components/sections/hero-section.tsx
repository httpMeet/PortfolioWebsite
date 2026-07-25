"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/paragraph";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ArchitectureDiagram } from "./architecture-diagram";
import { FileText, Github, ArrowDown, Award, Code2, Layers, Cpu } from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const realStats = [
    { label: "Projects", count: "8+", icon: Code2 },
    { label: "Major Systems", count: "3", icon: Layers },
    { label: "Tech Stack", count: "15+", icon: Cpu },
    { label: "Hackathons", count: "2", icon: Award },
  ];

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center py-6 sm:py-12"
    >
      {/* Background Visual: Mouse Spotlight & Soft Red/Purple Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none w-full">
        {/* Interactive Mouse Spotlight Glow */}
        <div
          className="absolute w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] bg-rose-600/10 rounded-full blur-[90px] sm:blur-[120px] transition-transform duration-300 ease-out motion-reduce:hidden"
          style={{
            left: `${mousePosition.x - 130}px`,
            top: `${mousePosition.y - 130}px`,
          }}
        />

        {/* Ambient Red & Purple Gradient Backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[650px] h-[180px] sm:h-[380px] bg-gradient-to-r from-rose-600/15 via-purple-600/10 to-rose-900/10 blur-[80px] sm:blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[180px] sm:w-[450px] h-[140px] sm:h-[280px] bg-purple-900/15 blur-[70px] sm:blur-[130px] rounded-full" />
        
        {/* Subtle Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <Container size="lg" className="w-full">
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">
          {/* Left Column: Content, Headline & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left w-full min-w-0">
            {/* Badge & Trust Label */}
            <motion.div
              initial={{ opacity: 0.8, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap items-center gap-2 w-full"
            >
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] sm:text-xs font-mono text-emerald-400 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="break-words">Open to Backend Developer Opportunities</span>
              </div>
              <Badge variant="slate" className="text-[11px] sm:text-xs break-words">
                Available for Full-Time Opportunities
              </Badge>
            </motion.div>

            {/* Name & Primary Headline */}
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="space-y-2.5 sm:space-y-3 w-full"
            >
              <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                {siteConfig.name}
              </div>
              <h1 className="text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-100 leading-[1.2] sm:leading-[1.1] break-words w-full">
                Building Secure &amp; Scalable
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-rose-400 to-rose-600">
                  Backend Systems with Laravel.
                </span>
              </h1>

              {/* Secondary Text */}
              <div className="space-y-2 max-w-xl text-slate-300 text-xs sm:text-base leading-relaxed w-full break-words whitespace-normal">
                <p className="break-words whitespace-normal w-full">
                  Laravel Backend Developer focused on building secure APIs, authentication systems, database-driven applications, AI integrations, queues, caching, and cloud-powered solutions.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm break-words whitespace-normal w-full">
                  I enjoy designing backend architectures that are maintainable, performant, and production-ready.
                </p>
              </div>
            </motion.div>

            {/* Primary, Secondary, and Third CTAs */}
            <motion.div
              initial={{ opacity: 0.8, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2 w-full">
                <CTAButton
                  href="#projects"
                  variant="laravel"
                  className="shadow-lg shadow-rose-950/50 hover:shadow-rose-900/60 font-semibold w-full sm:w-auto"
                >
                  Explore My Work
                </CTAButton>

                <CTAButton
                  href={siteConfig.links.resume}
                  variant="primary"
                  external
                  icon={<FileText className="w-4 h-4 text-slate-900" />}
                  className="w-full sm:w-auto"
                >
                  Download Resume
                </CTAButton>

                <CTAButton
                  href={siteConfig.links.github}
                  variant="secondary"
                  external
                  icon={<Github className="w-4 h-4 text-slate-400" />}
                  className="w-full sm:w-auto"
                >
                  View GitHub
                </CTAButton>
              </div>
            </motion.div>

            {/* Factual Statistics Grid */}
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="pt-2 sm:pt-4 w-full"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-3 sm:pt-6 border-t border-white/10 w-full">
                {realStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="p-2 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left min-w-0 w-full overflow-hidden"
                    >
                      <div className="flex items-center gap-1 text-[10px] sm:text-xs font-mono text-slate-400 mb-0.5 truncate">
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500 shrink-0" />
                        <span className="truncate">{stat.label}</span>
                      </div>
                      <div className="text-base sm:text-2xl font-bold font-mono text-slate-100 truncate">
                        {stat.count}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Animated Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0.8, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5 pt-2 lg:pt-0 w-full min-w-0"
          >
            <ArchitectureDiagram />
          </motion.div>
        </div>

        {/* Scroll Cue Indicator */}
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="pt-6 sm:pt-10 flex justify-center w-full"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-rose-500 rounded p-1"
          >
            <span>Scroll to view systems</span>
            <ArrowDown className="w-3.5 h-3.5 text-rose-500 animate-bounce motion-reduce:animate-none" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
