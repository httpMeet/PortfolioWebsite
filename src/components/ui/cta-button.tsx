import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "laravel";
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  icon,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold text-xs sm:text-sm rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-slate-100 text-slate-900 hover:bg-white px-4 sm:px-5 py-2.5 shadow-sm hover:shadow",
    secondary:
      "bg-slate-900 text-slate-200 hover:bg-slate-800 border border-slate-800 px-4 sm:px-5 py-2.5",
    outline:
      "border border-slate-700/80 text-slate-300 hover:bg-slate-800/60 hover:text-white px-4 sm:px-5 py-2.5",
    laravel:
      "bg-[#FF2D20] text-white hover:bg-[#e02619] px-4 sm:px-5 py-2.5 shadow-sm shadow-rose-950/40",
  };

  const content = (
    <>
      {icon ? <span className="mr-2">{icon}</span> : null}
      <span>{children}</span>
      {external ? (
        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-current opacity-70 group-hover:opacity-100 transition-opacity" />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, variantStyles[variant], "group", className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], "group", className)}
    >
      {content}
    </Link>
  );
}
