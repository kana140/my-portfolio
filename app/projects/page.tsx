import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { Badge } from "@/app/ui/badge";
import { Button } from "@/app/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Page() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured online store with cart management, payment integration, and admin dashboard.",
      image: "/modern-ecommerce-website.png",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task manager with real-time updates, team workspaces, and deadline tracking.",
      image: "/task-management-dashboard.png",
      tags: ["React", "Firebase", "TypeScript", "Drag & Drop"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather app showing current conditions, forecasts, and interactive maps.",
      image: "/weather-app-interface.png",
      tags: ["Vue.js", "Weather API", "Charts", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio Generator",
      description:
        "Tool for creating stunning portfolio websites with customizable themes and templates.",
      image: "/portfolio-website-builder.png",
      tags: ["Next.js", "MDX", "CMS", "Analytics"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
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
