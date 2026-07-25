"use client";

import React from "react";
import {
  Smartphone,
  Server,
  ShieldCheck,
  Database,
  Layers,
  Cloud,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export function ArchitectureDiagram() {
  const pipeline = [
    {
      step: "01",
      title: "Flutter / React",
      subtitle: "Client Interfaces & Apps",
      icon: Smartphone,
      color: "text-sky-400",
      bgColor: "bg-sky-950/40 border-sky-800/50",
    },
    {
      step: "02",
      title: "Laravel API",
      subtitle: "REST Controllers & Router",
      icon: Server,
      color: "text-rose-400",
      bgColor: "bg-rose-950/50 border-rose-800/60",
    },
    {
      step: "03",
      title: "Authentication",
      subtitle: "Sanctum Tokens & Auth",
      icon: ShieldCheck,
      color: "text-emerald-400",
      bgColor: "bg-emerald-950/40 border-emerald-800/50",
    },
    {
      step: "04",
      title: "PostgreSQL",
      subtitle: "Relational DB & Indexing",
      icon: Database,
      color: "text-blue-400",
      bgColor: "bg-blue-950/40 border-blue-800/50",
    },
    {
      step: "05",
      title: "Redis Queue",
      subtitle: "Async Background Jobs",
      icon: Layers,
      color: "text-amber-400",
      bgColor: "bg-amber-950/40 border-amber-800/50",
    },
    {
      step: "06",
      title: "Azure Blob Storage",
      subtitle: "Cloud Asset Storage",
      icon: Cloud,
      color: "text-cyan-400",
      bgColor: "bg-cyan-950/40 border-cyan-800/50",
    },
    {
      step: "07",
      title: "AI Service",
      subtitle: "LLM Pipeline & Models",
      icon: Sparkles,
      color: "text-purple-400",
      bgColor: "bg-purple-950/40 border-purple-800/50",
    },
    {
      step: "08",
      title: "Response",
      subtitle: "Structured JSON Output",
      icon: CheckCircle2,
      color: "text-emerald-400",
      bgColor: "bg-emerald-950/50 border-emerald-700/60",
    },
  ];

  return (
    <div className="relative w-full max-w-full rounded-2xl border border-white/10 bg-slate-900/85 p-3.5 sm:p-5 backdrop-blur-xl shadow-2xl shadow-rose-950/20 overflow-hidden">
      {/* Visual Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3.5 w-full">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono text-slate-400 font-medium truncate">
            system_architecture.pipeline
          </span>
        </div>
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 text-[10px] sm:text-[11px] font-mono text-rose-400 border border-rose-900/50 shrink-0">
          <span>Laravel Backend Flow</span>
        </div>
      </div>

      {/* Pipeline Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 relative w-full">
        {pipeline.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className={`flex items-start gap-2.5 p-2.5 rounded-xl border transition-all w-full min-w-0 ${item.bgColor}`}
            >
              <div className="p-1.5 rounded-lg bg-slate-900/80 border border-white/10 shrink-0 mt-0.5">
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${item.color}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-1 w-full">
                  <span className="text-xs font-semibold text-slate-100 leading-snug break-words whitespace-normal">
                    {item.title}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 shrink-0 ml-1">
                    {item.step}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 leading-normal break-words whitespace-normal mt-0.5">
                  {item.subtitle}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Visual Pipeline Footer */}
      <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-slate-400 w-full">
        <span className="flex items-center gap-1.5 text-emerald-400 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Production Architecture
        </span>
        <span className="text-slate-400 shrink-0">Cloud &amp; Microservices</span>
      </div>
    </div>
  );
}
