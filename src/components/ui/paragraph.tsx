import * as React from "react";
import { cn } from "@/lib/utils";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "lead" | "default" | "sm" | "muted";
}

export function Paragraph({
  className,
  size = "default",
  children,
  ...props
}: ParagraphProps) {
  const sizeStyles = {
    lead: "text-lg sm:text-xl text-slate-300 leading-relaxed font-normal",
    default: "text-base text-slate-400 leading-relaxed",
    sm: "text-sm text-slate-400 leading-normal",
    muted: "text-xs text-slate-400 leading-normal font-mono",
  };

  return (
    <p className={cn(sizeStyles[size], className)} {...props}>
      {children}
    </p>
  );
}
