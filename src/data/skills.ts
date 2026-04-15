export interface Skill {
  name: string
  level: 1 | 2 | 3 | 4 | 5
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export const levelLabel: Record<number, string> = {
  5: 'Expert',
  4: 'Advanced',
  3: 'Proficient',
  2: 'Familiar',
  1: 'Learning',
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Angular', level: 5 },
      { name: 'Vue', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'RxJS', level: 4 },
      { name: 'NgRx', level: 4 },
      { name: 'HTML5 / CSS / SCSS', level: 4 },
      { name: 'React', level: 3 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'REST APIs', level: 4 },
      { name: '.NET / C#', level: 3 },
      { name: 'Django / Python', level: 3 },
      { name: 'Node.js', level: 2 },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 4 },
      { name: 'Agile / Scrum', level: 3 },
      { name: 'Azure', level: 2 },
    ],
  },
  {
    name: 'Game & XR',
    skills: [
      { name: 'Unity 3D', level: 4 },
      { name: 'C#', level: 4 },
      { name: 'Oculus / XR', level: 3 },
    ],
  },
]
