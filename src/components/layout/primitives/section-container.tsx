import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  bordered?: boolean;
}

export function SectionContainer({
  id,
  className,
  bordered = false,
  children,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24 relative",
        bordered && "border-t border-white/5",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
