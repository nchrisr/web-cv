import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import Image from 'next/image';
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA, SkillLevel } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-center text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
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
                  className="size-8"
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
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {
              RESUME_DATA.skills.sort((a, b) => {
                return a.level - b.level;
              }).map((skill) => {
                let backgroundColor = "";
                let textColor="text-black";
                if (skill.level == SkillLevel.High){
                  backgroundColor="bg-green-500";
                }
                else if (skill.level == SkillLevel.Mid){
                  backgroundColor ="bg-amber-500";
                }
                else if (skill.level == SkillLevel.Low){
                  backgroundColor = "bg-gray-500"
                  textColor="text-white"
                }
                return <Badge className={`${backgroundColor} ${textColor}`} key={skill.name}>{skill.name}</Badge>;
              })
            }
          </div>
        </Section>

        {RESUME_DATA.tinkering.length > 0 && 
          <Section>
            <h2 className="text-xl font-bold">Currently Tinkering with</h2>
            <div className="flex flex-wrap gap-1">
              {
                RESUME_DATA.tinkering.sort((a, b) => {
                  return a.level - b.level;
                }).map((skill) => {
                  let backgroundColor = "";
                  let textColor="text-black";
                  if (skill.level == SkillLevel.High){
                    backgroundColor="bg-green-500";
                  }
                  else if (skill.level == SkillLevel.Mid){
                    backgroundColor ="bg-amber-500";
                  }
                  else if (skill.level == SkillLevel.Low){
                    backgroundColor = "bg-gray-500";
                    textColor="text-white";
                  }
                  return <Badge className={`${backgroundColor} ${textColor}`} key={skill.name}>{skill.name}</Badge>;
                })
              }
            </div>
          </Section>
        }      
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  logo={project.logo}
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card className="mb-2" key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">

                      <a className="hover:underline flex gap-2 items-center justify-center" href={work.link}>
                        <Image src={work.logo} alt="Logo" width={30} height={30}/>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none font-semibold">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <a className="hover:underline flex gap-2 items-center justify-center" href={education.link}>
                      <Image src={education.logo} alt="Logo" width={30} height={30}/>
                      <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    </a>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>

        <Section>
            <h2 className="text-xl font-bold">Proud moments :)</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.moments.map((moment) => {
                return(
                  <div className="hover:underline flex gap-2 items-center text-blue" key={moment.url}>
                    <a href={moment.url}>
                      {<Badge variant="highlighted" key={moment.url}>{moment.Description}</Badge>}
                    </a>
                  </div>
                );
              })}
            </div>
          </Section>
      </section>

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
