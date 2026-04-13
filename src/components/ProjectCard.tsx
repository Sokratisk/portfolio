import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-footer">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} className="project-link">
              GitHub →
            </a>
          )}
          {project.live && (
            <a href={project.live} className="project-link">
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
