import { App } from "./definitions";
import Profile from "../ui/profile";
import Projects from "../ui/projects";
import MyExperiences from "../ui/my-experience";
import DogMail from "../ui/dog-mail";

export const apps: App[] = [
  {
    title: "FakeBook",
    component: Profile,
    defaultSize: { w: 400, h: 500 },
    image: "/pictures/fakebook.png",
  },
  {
    title: "Experience",
    component: MyExperiences,
    defaultSize: { w: 500, h: 700 },
    image: "/pictures/cv.png",
  },
  {
    title: "Projects",
    component: Projects,
    defaultSize: { w: 800, h: 700 },
    image: "/pictures/projects.png",
  },
];

export const taskBarApps: App[] = [
  {
    title: "GitHub",
    component: undefined,
    defaultSize: { w: 500, h: 500 },
    image: "/pictures/github-external.png",
    externalLink: "https://github.com/kana140",
  },
  {
    title: "LinkedIn",
    component: undefined,
    defaultSize: { w: 500, h: 500 },
    image: "/pictures/linkedin.png",
    externalLink: "https://www.linkedin.com/in/keitelanana/",
  },
  {
    title: "DogMail",
    component: DogMail,
    defaultSize: { w: 500, h: 300 },
    image: "/pictures/dog-mail.png",
    animate: true,
  },
];
