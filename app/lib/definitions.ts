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

export type OpenWindow = {
  id: string;
  appId: string;
  app: App;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
};

export type App = {
  title: string;
  component: ComponentType | undefined;
  defaultSize: { w: number; h: number };
  image: string;
  animate?: boolean;
  externalLink?: string;
  link?: string;
};

export type IconsProp = {
  open: (id: string, app: App) => void;
};

export type WindowProps = {
  title: string;
  defaultSize: { w: number; h: number };
  onClose: () => void;
  children: React.ReactNode;
  closeOnBackdropClick?: boolean;
  onFocus: () => void;
  onMinimize: () => void;
  onMove: (x: number, y: number) => void;
  x: number;
  y: number;
  z: number;
  link?: string;
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
