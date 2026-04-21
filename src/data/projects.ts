import greekCity360Gameplay2 from "../assets/greekCity360/gameplay2.png";
import greekCity360Gameplay3 from "../assets/greekCity360/gameplay3.png";
import greekCity360Gameplay4 from "../assets/greekCity360/gameplay4.png";
import greekCity360Gameplay5 from "../assets/greekCity360/gameplay5.png";

import georankings1 from "../assets/georankings/main.png";

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
    title: "Greek City 360 RPG",
    description:
      "An RPG designed to help migrants and refugees navigate real-life situations in Greece — finding housing, employment, and education. Players interact with NPCs in a fictional Greek city to complete everyday tasks. Developed at Tenebra Studios for HumanRights360.",
    tags: ["RPG Maker MV", "JavaScript", "Android", "Game Dev"],
    github: "https://github.com/Sokratisk/Greek-City-360-RPG",
    images: [
      greekCity360Gameplay3,
      greekCity360Gameplay2,
      greekCity360Gameplay4,
      greekCity360Gameplay5,
    ],
  },
  {
    title: "GeoRankings",
    description:
      "A full-stack score tracking app for a friend group competing on GeoGrid, a geography-based puzzle game. Tracks scores across seasons and grids, highlights personal bests, and visualizes seasonal performance with bar charts. Includes user management and season/grid creation.",
    tags: ["Angular 19", "NgRx", "Node.js", "Express", "TypeScript", "SQLite"],
    github: "https://github.com/Sokratisk/georankings",
    images: [georankings1],
  },
];
