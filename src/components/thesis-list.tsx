import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FileTextIcon, ExternalLinkIcon } from "lucide-react";

export type Thesis = {
  title: string;
  description?: string;
  type: "Equity" | "Options" | "Other";
  /** Omit until the write-up is hosted; card renders as coming soon when absent */
  url?: string;
  status?: "published" | "draft";
};

interface Props {
  theses: readonly Thesis[];
  emptyMessage: string;
}

export function ThesisList({ theses, emptyMessage }: Props) {
  if (theses.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-primary/25 bg-primary/[0.03] px-6 py-6">
        <div className="flex items-start gap-3">
          <FileTextIcon className="mt-0.5 size-4 shrink-0 text-primary/70" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {emptyMessage}
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {theses.map((thesis) => (
        <li key={thesis.title}>
          <Card className="h-full border border-primary/15 transition-colors hover:border-primary/30">
            <CardHeader className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="text-xs font-normal">
                  {thesis.type}
                </Badge>
                {thesis.status === "draft" ? (
                  <Badge variant="outline" className="text-xs font-normal">
                    Draft
                  </Badge>
                ) : null}
              </div>
              {thesis.url ? (
                <a
                  href={thesis.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-1.5 text-sm font-semibold leading-snug hover:text-primary hover:underline"
                >
                  {thesis.title}
                  <ExternalLinkIcon className="mt-0.5 size-3.5 shrink-0" />
                </a>
              ) : (
                <p className="text-sm font-semibold leading-snug">{thesis.title}</p>
              )}
            </CardHeader>
            {thesis.description ? (
              <CardContent className="pt-0 text-xs leading-relaxed text-muted-foreground">
                {thesis.description}
              </CardContent>
            ) : null}
          </Card>
        </li>
      ))}
    </ul>
  );
}
