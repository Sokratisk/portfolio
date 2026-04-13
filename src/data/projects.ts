export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Rotor Command",
    description:
      "Co-developed a full-stack back-office web application for helicopter rental management. Handles scheduling, fleet tracking, and operational workflows for aviation clients.",
    tags: ["React", "Django", "Python", "REST API"],
  },
  {
    title: "VR Experience of Museums",
    description:
      "Full Oculus VR experience for Museums developed at Tenebra Studios. Built as a reusable framework adopted by various Greek museums to deliver immersive cultural experiences.",
    tags: ["Unity 3D", "C#", "Oculus VR", "XR"],
  },
  {
    title: "Android Music Game",
    description:
      "Created the engine for a mobile game based on music with both 3D and 2D environments. Developed at Tenebra Studios as a rhythm-driven gameplay experience.",
    tags: ["Unity 3D", "C#", "Android", "Mobile"],
  },
];
