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
  {
    title: "GeoRankings",
    description:
      "A full-stack score tracking app for a friend group competing on GeoGrid, a geography-based puzzle game. Tracks scores across seasons and grids, highlights personal bests, and visualizes seasonal performance with bar charts. Includes user management and season/grid creation.",
    tags: ["Angular 19", "NgRx", "Node.js", "Express", "TypeScript", "SQLite"],
    github: "https://github.com/Sokratisk/georankings",
    images: ["/assets/georankings/main.png"],
  },
  {
    title: "VR Museum",
    description:
      "An immersive VR museum platform built in Unity 3D. Visitors explore a digital exhibition space, view dynamically loaded artwork and displays, and listen to audio descriptions alongside real-life reference photos. Designed as a white-label platform any museum can integrate — currently deployed by the Teloglion Fine Arts Museum in Thessaloniki.",
    tags: ["Unity 3D", "C#", "Oculus / XR", "VR"],
    images: ["/assets/vr%20museum/67.jpg", "/assets/vr%20museum/68.jpg"],
  },
  {
    title: "Greek City 360 RPG",
    description:
      "An RPG designed to help migrants and refugees navigate real-life situations in Greece — finding housing, employment, and education. Players interact with NPCs in a fictional Greek city to complete everyday tasks. Developed at Tenebra Studios for HumanRights360.",
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
      "My personal single-page app built with React 19, TypeScript, and Vite.",
    tags: ["React 19", "TypeScript", "Vite", "CSS", "Cloudflare Workers"],
    github: "https://github.com/Sokratisk/portfolio",
    live: "https://skelemidis.com",
    images: ["/assets/portfolio.jpg"],
  },
];
