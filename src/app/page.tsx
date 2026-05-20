import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import Image from "next/image";
import { Section, SectionTitle } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  const sortedSkills = [...RESUME_DATA.skills].sort((a, b) => a.level - b.level);
  const sortedTinkering = [...RESUME_DATA.tinkering].sort(
    (a, b) => a.level - b.level,
  );

  return (
    <main className="relative min-h-screen w-full scroll-my-12 overflow-auto px-5 py-8 print:p-12 sm:px-8 md:px-12 md:py-12 lg:px-16 xl:px-20">
      <article className="cv-surface space-y-10 p-6 print:space-y-6 print:border-0 print:shadow-none md:p-10 lg:p-12">
        <header className="space-y-5 border-b border-primary/15 pb-8">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
            <Avatar className="size-20 border-2 border-primary/25 shadow-md shadow-primary/15 print:hidden">
              <AvatarFallback className="bg-primary text-xl font-semibold text-primary-foreground">
                {RESUME_DATA.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2 text-center sm:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                {RESUME_DATA.name}
              </h1>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {RESUME_DATA.about}
              </p>
              <a
                className="inline-flex items-center gap-1.5 text-sm text-primary/80 hover:text-primary hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
                rel="noreferrer"
              >
                <GlobeIcon className="size-3.5 shrink-0" />
                {RESUME_DATA.location}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 print:hidden sm:justify-start">
            {RESUME_DATA.contact.email ? (
              <Button
                className="border-primary/25 text-primary hover:bg-primary/10"
                variant="outline"
                size="icon"
                asChild
              >
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <MailIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {RESUME_DATA.contact.tel ? (
              <Button
                className="border-primary/25 text-primary hover:bg-primary/10"
                variant="outline"
                size="icon"
                asChild
              >
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <PhoneIcon className="size-4" />
                </a>
              </Button>
            ) : null}
            {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                className="border-primary/25 text-primary hover:bg-primary/10"
                variant="outline"
                size="icon"
                asChild
              >
                <a href={social.url} target="_blank" rel="noreferrer">
                  <social.icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>
        </header>

        <Section>
          <SectionTitle>About</SectionTitle>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <div className="flex flex-wrap gap-1.5">
            {sortedSkills.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </Section>

        {RESUME_DATA.tinkering.length > 0 && (
          <Section>
            <SectionTitle>Currently tinkering with</SectionTitle>
            <div className="flex flex-wrap gap-1.5">
              {sortedTinkering.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </Section>
        )}

        <Section>
          <SectionTitle>Proud moments</SectionTitle>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.moments.map((moment) => (
              <a
                key={moment.url}
                href={moment.url}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Badge variant="highlighted">{moment.Description}</Badge>
              </a>
            ))}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={"link" in project ? project.link.href : undefined}
                logo={project.logo}
              />
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle>Work experience</SectionTitle>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {RESUME_DATA.work.map((work) => (
              <Card
                className="overflow-hidden border border-primary/15 bg-gradient-to-br from-card to-primary/[0.04] transition-colors hover:border-primary/30 print:shadow-none"
                key={work.company}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-x-2 text-base">
                    <h3 className="inline-flex flex-wrap items-center gap-x-2 font-semibold leading-snug">
                      <a
                        className="inline-flex items-center gap-2 hover:text-primary hover:underline"
                        href={work.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src={work.logo}
                          alt=""
                          width={28}
                          height={28}
                          className="rounded-md"
                        />
                        {work.company}
                      </a>
                      <span className="inline-flex flex-wrap gap-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="text-xs font-normal"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="shrink-0 text-xs tabular-nums text-muted-foreground">
                      {work.start} – {work.end}
                    </div>
                  </div>
                  <h4 className="text-sm font-medium text-primary">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="pt-0 text-xs leading-relaxed">
                  {work.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {RESUME_DATA.education.map((education) => (
              <Card
                className="border border-primary/15 bg-gradient-to-br from-card to-primary/[0.04]"
                key={education.school}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-x-2 text-base">
                    <a
                      className="inline-flex items-center gap-2 font-semibold hover:text-primary hover:underline"
                      href={education.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={education.logo}
                        alt=""
                        width={28}
                        height={28}
                        className="rounded-md"
                      />
                      {education.school}
                    </a>
                    <div className="shrink-0 text-xs tabular-nums text-muted-foreground">
                      {education.start} – {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  {education.degree}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </article>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
