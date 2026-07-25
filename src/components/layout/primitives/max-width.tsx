import * as React from "react";
import { cn } from "@/lib/utils";

export interface MaxWidthProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "prose" | "narrow" | "wide" | "full";
}

export function MaxWidth({
  className,
  size = "wide",
  children,
  ...props
}: MaxWidthProps) {
  const sizeStyles = {
    prose: "max-w-2xl",
    narrow: "max-w-4xl",
    wide: "max-w-6xl",
    full: "max-w-7xl",
  };

  return (
    <div className={cn("mx-auto w-full", sizeStyles[size], className)} {...props}>
      {children}
    </div>
  );
}
