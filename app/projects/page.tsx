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
import Video from "next-video";
import Image from "next/image";
import valentinesGif from "@/public/gif.gif";

export default function Page() {
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
      image: "/modern-ecommerce-website.png",
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
              {/* <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              /> */}
              {project.video ? (
                <Video src={project.video}></Video>
              ) : (
                // <></>
                // <></>
                // <Image
                //   src={project.video}
                //   alt="peanut"
                //   width={500}
                //   height={500}
                // ></Image>
                // <video width="320" height="240" controls preload="none">
                //   <source src="/path/to/video.mp4" type="video/mp4" />
                //   <track
                //     src={project.video}
                //     kind="subtitles"
                //     srcLang="en"
                //     label="English"
                //   />
                //   Your browser does not support the video tag.
                // </video>
                <></>
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
