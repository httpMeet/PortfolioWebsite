import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: "sm" | "md" | "lg";
}

export function ContentWrapper({
  className,
  spacing = "md",
  children,
  ...props
}: ContentWrapperProps) {
  const spacingStyles = {
    sm: "space-y-4",
    md: "space-y-6 sm:space-y-8",
    lg: "space-y-10 sm:space-y-12",
  };

  return (
    <div className={cn(spacingStyles[spacing], className)} {...props}>
      {children}
    </div>
  );
}
