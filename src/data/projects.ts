export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
  images?: string[];
}

export const projects: Project[] = [
  // {
  //   title: "Rotor Command",
  //   description:
  //     "A full-stack back-office platform for helicopter rental management, built to streamline operations across booking workflows, fleet tracking, and user management with role-based access control. Co-built with Django (Python) and React.",
  //   tags: ["Django", "Python", "React", "TypeScript", "REST API"],
  // },
  {
    title: "GeoRankings",
    description:
      "A full-stack score tracking app for GeoGrid, a geography-based puzzle game. Features user management, seasonal leaderboards, personal bests, and performance visualisations with bar charts. Built with Angular 19, NgRx, Node.js/Express, and SQLite.",
    tags: ["Angular 19", "NgRx", "Node.js", "Express", "TypeScript", "SQLite"],
    github: "https://github.com/Sokratisk/georankings",
    images: ["/assets/georankings/main.png"],
  },
  {
    title: "VR Museum",
    description:
      "A white-label immersive museum platform built in Unity 3D with Oculus/XR. Visitors explore a digital exhibition space, view dynamically loaded artwork and displays, and listen to spatial audio descriptions. Deployed by the Teloglion Fine Arts Museum in Thessaloniki.",
    tags: ["Unity 3D", "C#", "Oculus/XR", "VR"],
    images: ["/assets/vr%20museum/67.jpg", "/assets/vr%20museum/68.jpg"],
  },
  {
    title: "Greek City 360 RPG",
    description:
      "An educational RPG helping migrants and refugees navigate real-life situations in Greece — finding housing, employment, and education. Players interact with NPCs in a fictional Greek city to complete everyday tasks. Shipped at Tenebra Studios for HumanRights360.",
    tags: ["RPG Maker MV", "JavaScript", "Android", "Game Dev"],
    github: "https://github.com/Sokratisk/Greek-City-360-RPG",
    images: [
      "/assets/greekCity360/gameplay3.png",
      "/assets/greekCity360/gameplay2.png",
      "/assets/greekCity360/gameplay4.png",
      "/assets/greekCity360/gameplay5.png",
    ],
  },
  {
    title: "Portfolio",
    description:
      "My personal single-page app built with React 19, TypeScript, and Vite. Deployed on Cloudflare Workers with automatic redeploy on push.",
    tags: ["React 19", "TypeScript", "Vite", "CSS", "Cloudflare Workers"],
    github: "https://github.com/Sokratisk/portfolio",
    live: "https://skelemidis.com",
    images: ["/assets/portfolio.jpg"],
  },
];
