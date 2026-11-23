import { Badge } from "@/components/ui/badge";
import { SkillLevel } from "@/data/resume-data";
import { cn } from "@/lib/utils";

const levelStyles: Record<number, string> = {
  [SkillLevel.High]:
    "border-primary/20 bg-primary/10 px-2.5 py-1 font-medium text-primary",
  [SkillLevel.Mid]:
    "border-dashed border-primary/30 bg-transparent px-2.5 py-1 font-medium text-muted-foreground",
  [SkillLevel.Low]:
    "border-border bg-muted px-2.5 py-1 font-medium text-muted-foreground",
};

export function SkillBadge({
  name,
  level,
}: {
  name: string;
  level: number;
}) {
  return <Badge className={cn(levelStyles[level])}>{name}</Badge>;
}
