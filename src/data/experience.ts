export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  details?: string[];
}

export const experience: Experience[] = [
  {
    role: "Frontend Software Engineer",
    company: "ImprovIT",
    location: "Hybrid",
    period: "2025 — Present",
    description: [
      "Building customer-facing insurance platforms for enterprise clients including Allianz and Ethniki.",
      "Primary stack: Angular and Vue.",
    ],
    details: [
      "Working for Allianz Direct, a leading European online insurance provider, on revamping their customer portal to improve UX and performance.",
      "Staying current with the latest Angular versions, adopting new primitives such as signals and standalone components as they stabilise.",
      "End-to-end test coverage with Playwright across critical user journeys.",
      "Leveraging an in-house shared component library for state management and complex form handling, reducing boilerplate across teams.",
      "Contributed to a greenfield Vue project for Ethniki, taking it from initial setup to production.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Vimachem",
    location: "Remote",
    period: "2022 — 2025",
    description: [
      "Delivered production Angular applications for pharmaceutical and food industry clients.",
      "Primary stack: Angular and .NET.",
      "Owned frontend architecture, code quality standards, and deployment pipelines.",
    ],
    details: [
      "Built micro-frontend applications (Angular 13–19) deployed under a shell host, serving multiple enterprise pharmaceutical clients.",
      "Developed .NET microservices for backend data processing and API layers.",
      "Integrated Node-RED for IoT sensor scripting and real-time data pipelines.",
      "Managed CI/CD pipelines on Azure DevOps; handled both cloud and on-premise deployments tailored to each client's infrastructure.",
      "Acted as a client contact for bug triage, feature scoping, and production incident resolution.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "NIKI Ltd Digital Engineering",
    location: "",
    period: "2022",
    description: [
      "Contract Full-Stack Engineer for projects serving leading German automotive manufacturers, using React, Angular, and Java.",
    ],
    details: [
      "Short-term engagement that served as my first professional introduction to full-stack web development.",
      "Focused primarily on frontend work in React and Angular, with supporting contributions to Java and Python backend services.",
    ],
  },
  {
    role: "Game Developer — Unity 3D",
    company: "Tenebra Studios",
    location: "Athens",
    period: "Feb 2021 — Feb 2022",
    description: [
      "Contract developer building games and interactive VR experiences in Unity 3D, including an Oculus VR museum walkthrough and a music-driven Android game.",
      "Developed a turn-based RPG in RPG Maker for a non-profit client.",
    ],
  },
];
