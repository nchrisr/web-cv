import { cn } from "@/lib/utils";
import React from "react";

export function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("flex min-h-0 flex-col gap-y-4", className)}
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
      <span
        className="h-5 w-1 shrink-0 rounded-full bg-gradient-to-b from-sky-400 to-primary"
        aria-hidden
      />
      <h2 className="shrink-0 text-base font-bold tracking-tight text-foreground">
        {children}
      </h2>
      <div
        className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"
        aria-hidden
      />
    </div>
  );
}
