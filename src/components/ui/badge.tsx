import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "emerald" | "laravel" | "cyan" | "outline" | "slate";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide transition-colors";

  const variantStyles = {
    default:
      "bg-slate-800/80 text-slate-300 border border-slate-700/60",
    emerald:
      "bg-emerald-950/60 text-emerald-400 border border-emerald-800/50",
    laravel:
      "bg-rose-950/60 text-rose-400 border border-rose-800/50",
    cyan:
      "bg-cyan-950/60 text-cyan-400 border border-cyan-800/50",
    outline:
      "border border-slate-700 text-slate-400",
    slate:
      "bg-slate-900 text-slate-400 border border-slate-800",
  };

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
