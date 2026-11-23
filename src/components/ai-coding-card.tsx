import {
  BotIcon,
  MousePointer2Icon,
  SparklesIcon,
  TerminalSquareIcon,
} from "lucide-react";

const toolIcons = {
  terminal: TerminalSquareIcon,
  agent: BotIcon,
  editor: MousePointer2Icon,
};

interface Props {
  title: string;
  summary: string;
  tools: readonly { name: string; kind: keyof typeof toolIcons }[];
}

export function AiCodingCard({ title, summary, tools }: Props) {
  return (
    <div className="rounded-xl bg-gradient-to-r from-violet-500/60 via-sky-400/50 to-primary/60 p-px print:bg-none">
      <div className="flex flex-col gap-4 rounded-[11px] bg-gradient-to-br from-card via-card to-violet-500/[0.06] p-5 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-primary text-white shadow-md shadow-violet-500/20">
              <SparklesIcon className="size-4" aria-hidden />
            </span>
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              Proficient
            </span>
          </div>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            {summary}
          </p>
        </div>
        <ul className="flex shrink-0 flex-wrap gap-2 sm:flex-col">
          {tools.map((tool) => {
            const Icon = toolIcons[tool.kind];
            return (
              <li
                key={tool.name}
                className="inline-flex items-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/[0.06] px-3 py-1.5 text-sm font-medium text-foreground"
              >
                <Icon className="size-4 text-violet-600" aria-hidden />
                {tool.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
