export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  details?: string[];
  tech?: string[];
}

export const experience: Experience[] = [
  {
    role: "Frontend Software Engineer",
    company: "ImprovIT",
    location: "Hybrid",
    period: "2025 — Present",
    description: [
      "Creating the new Allianz Direct customer portal for Italy using Angular 21.",
      "Building insurance platforms for enterprise clients, primarily Allianz and Ethniki.",
    ],
    details: [
      "End-to-end test coverage with Playwright across critical user journeys.",
      "Using an in-house shared component library for state management and complex form handling, reducing boilerplate across teams.",
      "Contributed to a greenfield Vue project for Ethniki, taking it from initial setup to production.",
    ],
    tech: ["Angular 21", "Vue", "TypeScript", "NgRx", "RxJS", "Playwright"],
  },
  {
    role: "Full-Stack Engineer",
    company: "Vimachem",
    location: "Remote",
    period: "2022 — 2025",
    description: [
      "Delivered production Angular applications for pharmaceutical and food industry clients.",
      "Led frontend architecture decisions, code quality standards, and deployment pipelines.",
    ],
    details: [
      "Built micro-frontend applications deployed under a shell host, serving multiple enterprise pharmaceutical clients.",
      "Developed .NET microservices for backend data processing and API layers.",
      "Integrated Node-RED for IoT sensor scripting and real-time data pipelines.",
      "Managed CI/CD pipelines on Azure DevOps; handled both cloud and on-premise deployments tailored to each client's infrastructure.",
      "Acted as a client contact for bug triage, feature scoping, and production incident resolution.",
    ],
    tech: [
      "Angular 13-19",
      "PrimeNg",
      "Highcharts js",
      ".NET / C#",
      "NgRx - RxJS",
      "Azure DevOps",
      "SQL & mongoDB",
      "keycloak",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "NIKI Ltd Digital Engineering",
    location: "Contract",
    period: "2022",
    description: [
      "Worked on projects for major German automotive manufacturers, using React, Angular, and Java.",
    ],
    details: [
      "Focused primarily on frontend work in React and Angular, with supporting contributions to Java and Python backend services.",
    ],
    tech: ["React", "Angular", "TypeScript", "Java", "Python"],
  },
  {
    role: "Game Developer — Unity 3D",
    company: "Tenebra Studios",
    location: "Contract",
    period: "Feb 2021 — Feb 2022",
    description: [
      "Game Developer building games and interactive VR experiences in Unity 3D, including an Oculus VR museum walkthrough and a music-driven Android game.",
      "Developed a turn-based RPG in RPG Maker for a non-profit client.",
    ],
    tech: ["Unity 3D", "C#", "Oculus / XR", "RPG Maker MV", "Android"],
  },
];
