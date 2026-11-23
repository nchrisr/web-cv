import { ArrowUpRightIcon, CircleDotIcon, GitMergeIcon } from "lucide-react";

interface Props {
  kind: "pull-request" | "issue";
  label: string;
  repo: string;
  description: string;
  url: string;
}

export function ContributionCard({ kind, label, repo, description, url }: Props) {
  const Icon = kind === "pull-request" ? GitMergeIcon : CircleDotIcon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full gap-3 rounded-xl border border-primary/15 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 print:shadow-none"
    >
      <span
        className={
          kind === "pull-request"
            ? "flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600"
            : "flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600"
        }
      >
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="flex items-center justify-between gap-2">
          <span className="truncate font-mono text-xs font-semibold text-foreground">
            {repo}
          </span>
          <ArrowUpRightIcon
            className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            aria-hidden
          />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-wider text-primary">
          {label}
        </span>
        <span className="text-pretty text-xs leading-relaxed text-muted-foreground">
          {description}
        </span>
      </span>
    </a>
  );
}
