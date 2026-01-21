import { Button } from "@/app/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Header() {
  return (
    <header className="w-screen h-64 flex flex-col justify-center items-center bg-gradient-to-b from-mist-lavender to-dark-lavender">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex flex-col text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            <Link href="/">Kei Anana</Link>
          </h1>
          <p className="mt-3 text-pretty text-xl text-muted-foreground md:text-2xl">
            Software Developer
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/kana140"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/keitelanana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:keitelwinslet@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
