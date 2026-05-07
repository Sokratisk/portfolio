export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Frameworks",
    skills: ["Angular", "Vue", "React"],
  },
  {
    name: "Frontend Technologies",
    skills: ["TypeScript", "JavaScript", "RxJS", "NgRx", "HTML5", "CSS / SCSS"],
  },
  {
    name: "Backend",
    skills: [".NET / C#", "Django / Python", "Node.js", "REST APIs"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "Azure", "Agile / Scrum"],
  },
  {
    name: "Game & XR",
    skills: ["Unity 3D", "C#", "Oculus / XR"],
  },
  {
    name: "AI Tools",
    skills: ["Claude", "GitHub Copilot"],
  },
];
