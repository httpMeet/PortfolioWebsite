import Link from "next/link";
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand & Role */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-rose-500 font-mono text-xs font-bold shrink-0">
              MG
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-slate-100">{siteConfig.name}</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-slate-400">Laravel Backend Developer</span>
            </div>
          </div>

          {/* Social Icons & Recruiter Links */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="View GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/gandhimeet1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${siteConfig.links.email}`}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright & Credit Line */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© 2026 Meet Gandhi. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-600">
            Built with Next.js 15, Tailwind v4 &amp; Laravel-inspired design
          </p>
        </div>
      </div>
    </footer>
  );
}
