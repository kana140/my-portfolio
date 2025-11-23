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
