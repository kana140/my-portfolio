import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";

export default function Page() {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Leading frontend development and architecting scalable solutions for enterprise applications.",
      skills: ["React", "TypeScript", "Next.js", "Node.js"],
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description:
        "Built and shipped multiple products from concept to production.",
      skills: ["JavaScript", "Python", "PostgreSQL", "AWS"],
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description:
        "Developed responsive websites and web applications for diverse clients.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University Name",
      period: "2014 - 2018",
    },
  ];
  return (
    <div className="space-y-12">
      <section>
        <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          About
        </h2>
        <p className="text-pretty text-lg leading-relaxed">
          I'm a passionate developer focused on creating beautiful, functional,
          and user-centered digital experiences. With expertise in modern web
          technologies, I bring ideas to life through clean code and thoughtful
          design.
        </p>
      </section>
      <section>
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="mt-1 text-base">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="mt-1 text-base">
                      {edu.institution}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
