import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  logo?: StaticImageData;
}

export function ProjectCard({ title, description, tags, link, logo }: Props) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border border-primary/15 bg-gradient-to-br from-card to-primary/[0.05] transition-colors hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 print:shadow-none">
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <CardTitle className="text-base font-semibold">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary hover:underline"
              >
                {logo != null && (
                  <Image
                    src={logo}
                    alt=""
                    width={28}
                    height={28}
                    className="rounded-md"
                  />
                )}
                {title}
                <span
                  className="size-1.5 rounded-full bg-primary"
                  aria-hidden
                />
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs text-primary/70 underline print:visible">
            {link
              ?.replace("https://", "")
              .replace("www.", "")
              .replace(/\/$/, "")}
          </div>
          <CardDescription className="text-xs leading-relaxed">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex pt-0">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1.5 py-0 text-[10px] font-normal"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
