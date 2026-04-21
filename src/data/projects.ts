import greekCity360MainMenu from "../assets/greekCity360/mainMenu.png";
import greekCity360Gameplay1 from "../assets/greekCity360/gameplay1.png";
import greekCity360Gameplay2 from "../assets/greekCity360/gameplay2.png";
import greekCity360Gameplay3 from "../assets/greekCity360/gameplay3.png";
import greekCity360Gameplay4 from "../assets/greekCity360/gameplay4.png";
import greekCity360Gameplay5 from "../assets/greekCity360/gameplay5.png";

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
  //     "Co-developed a full-stack back-office web application for helicopter rental management. Handles scheduling, fleet tracking, and operational workflows for aviation clients.",
  //   tags: ["React", "Django", "Python", "REST API"],
  // },
  // {
  //   title: "VR Experience of Museums",
  //   description:
  //     "Full Oculus VR experience for Museums developed at Tenebra Studios. Built as a reusable framework adopted by various Greek museums to deliver immersive cultural experiences.",
  //   tags: ["Unity 3D", "C#", "Oculus VR", "XR"],
  // },
  {
    title: "Greek City 360 RPG",
    description:
      "An RPG designed to help migrants and refugees navigate real-life situations in Greece — finding housing, employment, and education. Players interact with NPCs in a fictional Greek city to complete everyday tasks. Developed at Tenebra Studios for HumanRights360.",
    tags: ["RPG Maker MV", "JavaScript", "Android", "Game Dev"],
    github: "https://github.com/Sokratisk/Greek-City-360-RPG",
    images: [
      greekCity360Gameplay1,
      greekCity360Gameplay2,
      greekCity360Gameplay3,
      greekCity360Gameplay4,
      greekCity360Gameplay5,
    ],
  },
  // {
  //   title: "Android Music Game",
  //   description:
  //     "Created the engine for a mobile game based on music with both 3D and 2D environments. Developed at Tenebra Studios as a rhythm-driven gameplay experience.",
  //   tags: ["Unity 3D", "C#", "Android", "Mobile"],
  // },
];
