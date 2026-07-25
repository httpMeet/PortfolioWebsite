"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navItems = [
    { label: "Overview", href: "#hero", sectionId: "hero" },
    { label: "Projects", href: "#projects", sectionId: "projects" },
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Contact", href: "#contact", sectionId: "contact" },
  ];

  useEffect(() => {
    // 1. Initial Hash Jump Scroll Handling
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
          setActiveSection(hash);
        }, 100);
      }
    }

    // 2. Active Section Highlighting via Scroll Tracking
    const handleScroll = () => {
      const sections = ["hero", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 120; // 120px offset for top header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial invocation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between min-w-0">
        {/* Brand / Title */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-rose-500 font-mono font-bold group-hover:border-rose-500/50 transition-colors shrink-0">
            MG
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-slate-100 text-xs sm:text-sm tracking-tight group-hover:text-white transition-colors truncate">
              {siteConfig.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 hidden sm:block truncate">
              Laravel Backend Developer
            </span>
          </div>
        </a>

        {/* Navigation Links with Active Highlighting */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.sectionId}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.sectionId)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-rose-950/80 text-rose-200 shadow-sm border border-rose-800/80 font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Recruiter-focused CTAs */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
            title="View GitHub Profile"
          >
            <Github className="w-3.5 h-3.5 text-slate-400" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-slate-500" />
          </a>

          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-white transition-all shadow-sm hover:shadow shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-slate-900" />
            <span>View Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
