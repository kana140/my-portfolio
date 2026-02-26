import { LucideIcon, LucideProps } from "lucide-react";
import { ComponentType, RefAttributes } from "react";

export type Post = {
  id: string;
  title: string;
  tags: [string];
  date: string;
  projectId?: string; //may or may not be linked to a project
};

export type Project = {
  id: string;
  dateStarted: string;
  dateCompleted?: string;
  description: string;
  status:
    | "Started"
    | "Research Phase"
    | "In Progress"
    | "I'm stuck"
    | "COMPLETED YIPPIEE";
};

export type App = {
  title: string;
  component: ComponentType | undefined;
  defaultSize: { w: number | string; h: number | string };
  image: string;
  animate?: boolean;
  externalLink?: string;
};

export type WindowProps = {
  title: string;
  defaultSize: { w: number | string; h: number | string };
  onClose: () => void;
  children: React.ReactNode;
  closeOnBackdropClick?: boolean;
};

export type HoverableSpriteProp = {
  image: string;
};

export type SocialLinks = {
  icon: LucideIcon;
  link?: string;
  contact?: string;
  title: string;
};
