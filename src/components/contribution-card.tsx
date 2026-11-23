import {
  ArrowUpRightIcon,
  CheckIcon,
  CircleDotIcon,
  GitMergeIcon,
} from "lucide-react";

interface Point {
  text: string;
  url?: string;
  badge?: string;
}

interface Props {
  kind: "pull-request" | "issue";
  label: string;
  repo: string;
  description: string;
  url: string;
  points?: readonly Point[];
}

const cardClass =
  "group flex h-full gap-3 rounded-xl border border-primary/15 bg-card p-4 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 print:shadow-none";

export function ContributionCard({
  kind,
  label,
  repo,
  description,
  url,
  points,
}: Props) {
  const Icon = kind === "pull-request" ? GitMergeIcon : CircleDotIcon;

  const icon = (
    <span
      className={
        kind === "pull-request"
          ? "flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600"
          : "flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600"
      }
    >
      <Icon className="size-4" aria-hidden />
    </span>
  );

  const heading = (
    <>
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
    </>
  );

  if (!points || points.length === 0) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`${cardClass} hover:-translate-y-0.5`}
      >
        {icon}
        <span className="flex min-w-0 flex-1 flex-col gap-1">{heading}</span>
      </a>
    );
  }

  return (
    <div className={cardClass}>
      {icon}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col gap-1"
        >
          {heading}
        </a>
        <ul className="mt-2 space-y-2 border-t border-primary/10 pt-2">
          {points.map((point) => {
            const marker = point.url ? (
              <span className="mt-0.5 w-12 shrink-0 font-mono text-[11px] font-semibold text-primary">
                #{point.url.split("/").pop()}
              </span>
            ) : (
              <span className="flex w-12 shrink-0 pt-[7px]" aria-hidden>
                <span className="size-1.5 rounded-full bg-primary/40" />
              </span>
            );
            const body = (
              <span className="flex-1 text-pretty">
                {point.text}
                {point.badge ? (
                  <span className="ml-1.5 inline-flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-1.5 align-middle text-[10px] font-semibold text-emerald-700">
                    <CheckIcon className="size-2.5" aria-hidden />
                    {point.badge}
                  </span>
                ) : null}
              </span>
            );
            const rowClass =
              "flex items-start gap-2 text-xs leading-relaxed text-muted-foreground";
            return (
              <li key={point.text}>
                {point.url ? (
                  <a
                    href={point.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${rowClass} hover:text-foreground`}
                  >
                    {marker}
                    {body}
                  </a>
                ) : (
                  <div className={rowClass}>
                    {marker}
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
