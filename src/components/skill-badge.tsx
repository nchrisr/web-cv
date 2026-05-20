import { Badge } from "@/components/ui/badge";
import { SkillLevel } from "@/data/resume-data";
import { cn } from "@/lib/utils";

const levelStyles: Record<number, string> = {
  [SkillLevel.High]: "border-transparent bg-green-500 text-black",
  [SkillLevel.Mid]: "border-transparent bg-amber-500 text-black",
  [SkillLevel.Low]: "border-transparent bg-gray-500 text-white",
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
