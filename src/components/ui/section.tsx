import { cn } from "@/lib/utils";
import React from "react";

export function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("flex min-h-0 flex-col gap-y-3", className)}
      {...props}
    />
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <h2 className="shrink-0 text-sm font-semibold uppercase tracking-wider text-primary">
        {children}
      </h2>
      <div
        className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"
        aria-hidden
      />
    </div>
  );
}
