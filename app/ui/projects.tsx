import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { Badge } from "./badge";
import Video from "next-video";
import { Button } from "./button";
import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Little Calendars",
      description:
        "An interactive, customisable online gift calendar that allows users to surprise friends or partners with daily digital “gifts” released over time",
      image: "/weather-app-interface.png",
      tags: ["Next.js", "TypeScript"],
      liveUrl: "https://12-days-of.vercel.app/",
      githubUrl: "https://github.com/kana140/12-days-of",
    },
    {
      title: "Forseti",
      description:
        "A full-featured online store with cart management, payment integration, and admin dashboard.",
      image: "/forseti.jpeg",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/kana140/Forseti",
    },
    {
      title: "Poopey Valentines",
      description:
        "Collaborative task manager with real-time updates, team workspaces, and deadline tracking.",
      image: "/task-management-dashboard.png",
      video: "/videos/peanut-fishing.mov",
      tags: ["React", "Firebase", "JavaScript"],
      liveUrl: "https://poopey-valentines.vercel.app/",
      githubUrl: "https://github.com/kana140/poopey-valentines",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video w-full bg-muted">
              {project.video ? (
                <Video src={project.video}></Video>
              ) : (
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              )}
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-pretty leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="default" size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
