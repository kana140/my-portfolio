import { App } from "./definitions";
import Profile from "../ui/profile";
import Projects from "../ui/projects";
import MyExperiences from "../ui/my-experience";
import DogMail from "../ui/dog-mail";
import Updates from "../ui/updates";
import { GraduationCap, FileCode, BugOff, NotebookPen } from "lucide-react";

export const APPS = {
  fakebook: {
    title: "FakeBook",
    component: Profile,
    defaultSize: { w: 500, h: 500 },
    image: "/pictures/fakebook.png",
    link: "https://www.facebook.com/keitel.anana/",
  },
  experience: {
    title: "Experience",
    component: MyExperiences,
    defaultSize: { w: 700, h: 700 },
    image: "/pictures/cv.png",
  },
  projects: {
    title: "Projects",
    component: Projects,
    defaultSize: { w: 800, h: 700 },
    image: "/pictures/projects.png",
  },
  updates: {
    title: "updates.txt",
    component: Updates,
    defaultSize: { w: 250, h: 250 },
    image: "/pictures/text-file.png",
  },
};

export const TASKBARAPPS = {
  github: {
    title: "GitHub",
    component: undefined,
    defaultSize: { w: 500, h: 500 },
    image: "/pictures/github-external.png",
    externalLink: "https://github.com/kana140",
  },
  linkedin: {
    title: "LinkedIn",
    component: undefined,
    defaultSize: { w: 500, h: 500 },
    image: "/pictures/linkedin.png",
    externalLink: "https://www.linkedin.com/in/keitelanana/",
  },
  dogmail: {
    title: "DogMail",
    component: DogMail,
    defaultSize: { w: 500, h: 300 },
    image: "/pictures/dog-mail.png",
    animate: true,
  },
};

export const PROJECTS = [
  {
    title: "Little Calendars",
    description:
      "An interactive, customisable online gift calendar that allows users to surprise friends or partners with daily digital “gifts” released over time",
    image: "/pictures/little-calendars.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://12-days-of.vercel.app/",
    githubUrl: "https://github.com/kana140/12-days-of",
  },
  {
    title: "Forseti",
    description:
      "A full-featured online store with cart management, payment integration, and admin dashboard.",
    image: "/pictures/forseti.jpeg",
    tags: ["Next.js", "Tailwind", "Python", "BeautifulSoup"],
    // liveUrl: "https://example.com",
    githubUrl: "https://github.com/kana140/Forseti",
  },
  {
    title: "Poopey Valentines",
    description:
      "A playful React mini-app featuring pixel-animated characters, timed interactions, and event-based UI changes.",
    video: "/videos/peanut-fishing.mov",
    tags: ["React", "Firebase", "JavaScript"],
    liveUrl: "https://poopey-valentines.vercel.app/",
    githubUrl: "https://github.com/kana140/poopey-valentines",
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    company: "StayinFront",
    role: "Software Developer - Feature Patch Team",
    timeframe: "September, 2024",
    description:
      "Successfully delivered key features, collaborated effectively across cross-functional teams and contributed significantly to system design and documentation efforts",
    icon: FileCode,
    tech: ["C#/.NET", "JavaScript", "SQL Server"],
  },
  {
    company: "StayinFront",
    role: "Product Technical Support Developer",
    timeframe: "January, 2023",
    description:
      "Started career maintaining a Data Warehouse product where I learned strong technical skills in debugging and problem-solving high-priority production issues.",
    icon: BugOff,
    tech: ["C#/.NET", "JavaScript", "AWS Redshift", "ETL", "Data Warehouse"],
  },
  {
    company: "StayinFront",
    role: "",
    timeframe: "March, 2023",
    description:
      "Graduated with a Bachelors of Science degree, Majoring in Computer Science",
    icon: GraduationCap,
  },
  {
    company: "University of Auckland",
    role: "Teaching Assistant",
    timeframe: "March, 2023",
    description: "Assisted students in lab sessions",
    icon: NotebookPen,
    tech: ["Python", "Flask"],
  },
];
