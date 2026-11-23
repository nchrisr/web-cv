import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import Image from "next/image";
import { Section, SectionTitle } from "@/components/ui/section";
import {
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  LineChartIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { FocusAreaCard } from "@/components/focus-area-card";
import { ThesisList } from "@/components/thesis-list";
import { ContributionCard } from "@/components/contribution-card";
import { AiCodingCard } from "@/components/ai-coding-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  const sortedSkills = [...RESUME_DATA.skills].sort(
    (a, b) => a.level - b.level,
  );
  const sortedTinkering = [...RESUME_DATA.tinkering].sort(
    (a, b) => a.level - b.level,
  );

  return (
    <main className="relative min-h-screen w-full scroll-my-12 overflow-auto py-0 print:p-12 sm:px-6 sm:py-10 md:px-10 md:py-14">
      <article className="cv-surface print:border-0 print:shadow-none">
        <header className="cv-hero relative px-6 pb-8 pt-10 text-white print:bg-none print:px-0 print:pt-0 print:text-foreground md:px-10 md:pt-12 lg:px-12">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
            <Avatar className="size-24 rounded-2xl border border-white/25 bg-white/10 shadow-xl shadow-black/20 ring-4 ring-white/10 print:hidden">
              <AvatarFallback className="rounded-2xl bg-gradient-to-br from-sky-400 to-primary text-2xl font-bold tracking-tight text-white">
                {RESUME_DATA.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3 text-center sm:text-left">
              <div className="space-y-1">
                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  {RESUME_DATA.name}
                </h1>
                <a
                  className="inline-flex items-center gap-1.5 text-sm text-sky-200 hover:text-white hover:underline print:text-primary"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPinIcon className="size-3.5 shrink-0" />
                  {RESUME_DATA.location}
                </a>
              </div>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-slate-200 print:text-muted-foreground md:text-[15px]">
                {RESUME_DATA.about}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 print:hidden sm:justify-start">
            {RESUME_DATA.contact.email ? (
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-sky-100"
              >
                <MailIcon className="size-4" />
                Email me
              </a>
            ) : null}
            {RESUME_DATA.contact.tel ? (
              <a
                href={`tel:${RESUME_DATA.contact.tel}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20"
              >
                <PhoneIcon className="size-4" />
                Call
              </a>
            ) : null}
            {RESUME_DATA.contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20"
              >
                <social.icon className="size-4" />
                {social.name}
              </a>
            ))}
          </div>
        </header>

        <div className="space-y-12 p-6 print:space-y-6 print:px-0 md:p-10 lg:p-12">
          <div className="space-y-2">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-left">
              Core stack
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 sm:justify-start">
              {RESUME_DATA.coreStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="border-primary/20 bg-primary/10 px-2.5 py-1 text-sm font-semibold text-primary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Section>
            <SectionTitle>Education</SectionTitle>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {RESUME_DATA.education.map((education) => (
                <Card
                  className="border border-primary/15 bg-gradient-to-br from-card to-primary/[0.04]"
                  key={education.school}
                >
                  <CardHeader>
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
                      <div className="shrink-0 text-xs text-muted-foreground">
                        {education.end}
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

          <Section>
            <SectionTitle>
              Proud moments &amp; open source contributions
            </SectionTitle>
            <div className="grid grid-cols-1 gap-3 print:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3">
              {RESUME_DATA.moments.map((moment) => (
                <ContributionCard key={moment.url} {...moment} />
              ))}
            </div>
          </Section>

          <Section>
            <SectionTitle>Projects</SectionTitle>
            <div className="grid grid-cols-1 gap-4 print:grid-cols-3 print:gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {RESUME_DATA.projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  openSource={"openSource" in project && project.openSource}
                  logo={project.logo}
                />
              ))}
            </div>
          </Section>

          <Section>
            <SectionTitle>Areas of interest</SectionTitle>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <FocusAreaCard
                icon={LineChartIcon}
                title={RESUME_DATA.finance.title}
                summary={RESUME_DATA.finance.summary}
                topics={RESUME_DATA.finance.topics}
              >
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    Theses & write-ups
                  </p>
                  <ThesisList
                    theses={RESUME_DATA.finance.theses}
                    emptyMessage={RESUME_DATA.finance.thesesEmptyMessage}
                  />
                </div>
              </FocusAreaCard>
              <FocusAreaCard
                icon={ShieldCheckIcon}
                title={RESUME_DATA.zeroKnowledge.title}
                summary={RESUME_DATA.zeroKnowledge.summary}
                topics={RESUME_DATA.zeroKnowledge.topics}
                highlight={{
                  label: RESUME_DATA.zeroKnowledge.bootcamp.label,
                  text: RESUME_DATA.zeroKnowledge.bootcamp.name,
                  href: RESUME_DATA.zeroKnowledge.bootcamp.url,
                }}
              />
            </div>
          </Section>

          <Section>
            <SectionTitle>Skills</SectionTitle>
            <AiCodingCard {...RESUME_DATA.aiCoding} />
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm border border-primary/20 bg-primary/30" />
                Proficient
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm border border-dashed border-primary/50" />
                Working knowledge
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sortedSkills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
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

          <Section className="print-force-new-page scroll-mb-16">
            <SectionTitle>Work experience</SectionTitle>
            <ol className="relative space-y-6 border-l border-primary/20 pl-6 print:space-y-3 sm:pl-8">
              {RESUME_DATA.work.map((work) => (
                <li key={`${work.company}-${work.start}`} className="relative">
                  <span
                    className="absolute -left-[33px] top-1 flex size-4 items-center justify-center rounded-full border-2 border-primary bg-card sm:-left-[41px]"
                    aria-hidden
                  >
                    <span className="size-1.5 rounded-full bg-primary" />
                  </span>
                  <div className="rounded-xl border border-primary/10 bg-gradient-to-br from-card to-primary/[0.03] p-5 transition-colors hover:border-primary/30">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <h3 className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-base font-semibold leading-snug">
                        <a
                          className="inline-flex items-center gap-2 hover:text-primary hover:underline"
                          href={work.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {"logo" in work && work.logo ? (
                            <Image
                              src={work.logo}
                              alt=""
                              width={28}
                              height={28}
                              className="rounded-md bg-white"
                            />
                          ) : null}
                          {work.company}
                        </a>
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="text-[10px] font-normal"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </h3>
                      <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-xs tabular-nums text-muted-foreground">
                        {work.start} – {work.end}
                      </span>
                    </div>
                    <h4 className="mt-1.5 text-sm font-medium text-primary">
                      {work.title}
                    </h4>
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-muted-foreground marker:text-primary/50">
                      {work.highlights.map((item) => (
                        <li key={item} className="text-pretty">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        </div>
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
