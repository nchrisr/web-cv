import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  icon: LucideIcon;
  title: string;
  summary: string;
  topics: readonly string[];
  highlight?: { label: string; text: string; href?: string };
  children?: React.ReactNode;
  className?: string;
}

export function FocusAreaCard({
  icon: Icon,
  title,
  summary,
  topics,
  highlight,
  children,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col border border-primary/15 bg-gradient-to-br from-card to-primary/[0.06]",
        className,
      )}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-2 text-primary">
          <Icon className="size-5 shrink-0" aria-hidden />
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        </div>
        {highlight ? (
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
              {highlight.label}
            </Badge>
            {highlight.href ? (
              <Link
                href={highlight.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                {highlight.text}
              </Link>
            ) : (
              <span className="text-sm font-medium text-foreground">
                {highlight.text}
              </span>
            )}
          </div>
        ) : null}
        <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
        <div className="flex flex-wrap gap-1.5">
          {topics.map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="text-xs font-normal"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </CardHeader>
      {children ? <CardContent className="pt-0">{children}</CardContent> : null}
    </Card>
  );
}
