import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { cv } from "../lib/cv-json";

export default function Page() {
  const experiences = [
    {
      title: "Software Developer",
      company: "StayinFront",
      period: "Oct, 2024 - Current",
      description:
        "Leading frontend development and architecting scalable solutions for enterprise applications.",
      skills: ["C#/.NET", "JavaScript", "SQL"],
    },
    {
      title: "Product Technical Support Developer",
      company: "StayinFront",
      period: "Jan, 2023 - Oct, 2024",
      description:
        "Built and shipped multiple products from concept to production.",
      skills: ["C#/.NET", "JavaScript", "SQL"],
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

  return (
    <div className="space-y-12">
      <section>
        <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          About
        </h2>
        <p className="text-pretty text-lg leading-relaxed">
          {cv.summary.professional}
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
          {cv.education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="mt-1 text-base">
                      {edu.university}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {edu.dates}
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
