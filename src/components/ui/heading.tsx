import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Heading({
  className,
  as = "h2",
  size,
  children,
  ...props
}: HeadingProps) {
  const Component = as;
  const headingSize = size || as;

  const sizeStyles: Record<"h1" | "h2" | "h3" | "h4" | "h5" | "h6", string> = {
    h1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-slate-100",
    h2: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100",
    h3: "text-xl sm:text-2xl font-semibold tracking-tight text-slate-100",
    h4: "text-lg font-semibold text-slate-200",
    h5: "text-base font-semibold text-slate-200",
    h6: "text-sm font-semibold text-slate-300",
  };

  return (
    <Component
      className={cn(sizeStyles[headingSize], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
