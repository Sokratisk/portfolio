export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-featured Angular application. Describe what problem it solves and what you built here.",
    tags: ["Angular", "TypeScript", "RxJS", "NgRx"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description:
      "A React application built with modern hooks and clean state management. Describe what it does.",
    tags: ["React", "TypeScript", "CSS Modules"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description:
      "Another frontend project showcasing your skills. Add a short, impactful description here.",
    tags: ["Angular", "TypeScript", "REST API"],
    github: "#",
  },
];
