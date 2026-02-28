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
import Image from "next/image";
import { PROJECTS } from "../lib/content";

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video w-full bg-muted">
              {project.video ? (
                <Video src={project.video}></Video>
              ) : (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  width={100}
                  height={100}
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
                {project.liveUrl ? (
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
                ) : (
                  <div></div>
                )}

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
