export interface Experience {
  role: string
  company: string
  location: string
  period: string
  description: string[]
}

export const experience: Experience[] = [
  {
    role: 'Frontend Software Engineer',
    company: 'ImprovIT',
    location: 'Hybrid',
    period: '2025 — Present',
    description: [
      'Developing complex, customer-facing insurance platforms for enterprise clients including Allianz and Ethniki.',
      'Primary stack: Angular and Vue.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Vimachem',
    location: 'Remote',
    period: '2022 — 2025',
    description: [
      'Delivered production-ready Angular applications for pharmaceutical and food industry clients.',
      'Built backend services with .NET; owned frontend version control, code quality, and deployments.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'NIKI Ltd Digital Engineering',
    location: '',
    period: '2022',
    description: [
      'Contracted as a Full-Stack Engineer specialising in React, Angular, and Java for leading German automobile manufacturers.',
    ],
  },
  {
    role: 'Game Developer — Unity 3D',
    company: 'Tenebra Studios',
    location: 'Athens',
    period: 'Feb 2021 — Feb 2022',
    description: [
      'Contracted developer for games and VR applications using Unity 3D, including an Oculus VR museum experience and a music-based Android game.',
    ],
  },
]
