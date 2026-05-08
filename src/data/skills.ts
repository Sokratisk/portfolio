export type SkillLevel = "Familiar" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SubCategory {
  name: string;
  skills: Skill[];
}

export interface SkillCategory {
  name: string;
  featured?: boolean;
  subcategories?: SubCategory[];
  skills?: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    featured: true,
    subcategories: [
      {
        name: "Frameworks & Libraries",
        skills: [
          { name: "Angular 13-21", level: "Expert" },
          { name: "React", level: "Advanced" },
          { name: "Vue", level: "Intermediate" },
        ],
      },
      {
        name: "Languages",
        skills: [
          { name: "TypeScript", level: "Expert" },
          { name: "JavaScript", level: "Expert" },
          { name: "HTML5", level: "Advanced" },
          { name: "CSS / SCSS", level: "Advanced" },
        ],
      },
      {
        name: "Testing",
        skills: [
          { name: "Karma / Jasmine", level: "Advanced" },
          { name: "Playwright", level: "Intermediate" },
        ],
      },
      {
        name: "State Management",
        skills: [
          { name: "NgRx", level: "Expert" },
          { name: "RxJS", level: "Expert" },
        ],
      },
    ],
  },
  {
    name: "Backend",
    subcategories: [
      {
        name: "Technologies",
        skills: [
          { name: ".NET / C#", level: "Advanced" },
          { name: "Node.js", level: "Intermediate" },
          { name: "Django / Python", level: "Intermediate" },
          { name: "REST APIs", level: "Advanced" },
        ],
      },
      {
        name: "Database",
        skills: [
          { name: "SQL", level: "Intermediate" },
          { name: "MongoDB", level: "Familiar" },
        ],
      },
    ],
  },
  {
    name: "DevOps & Tools",
    subcategories: [
      {
        name: "DevOps",
        skills: [
          { name: "Git", level: "Advanced" },
          { name: "Azure Pipelines", level: "Familiar" },
        ],
      },
      {
        name: "AI Tools",
        skills: [
          { name: "Claude", level: "Advanced" },
          { name: "GitHub Copilot", level: "Advanced" },
        ],
      },
    ],
  },
  {
    name: "Game Development",
    skills: [
      { name: "Unity 3D", level: "Advanced" },
      { name: "RPG Maker IV", level: "Intermediate" },
      { name: "Android Studio", level: "Intermediate" },
    ],
  },
];
