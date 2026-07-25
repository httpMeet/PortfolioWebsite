import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageContainer({
  className,
  children,
  ...props
}: PageContainerProps) {
  return (
    <div
      className={cn("min-h-[calc(100vh-4rem)] pb-16 sm:pb-24", className)}
      {...props}
    >
      {children}
    </div>
  );
}
