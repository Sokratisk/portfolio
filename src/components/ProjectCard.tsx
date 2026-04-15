import type { Project } from '../data/projects'
import placeholderImg from '../assets/placeholder.png'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="project-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
    >
      <img
        src={project.image ?? placeholderImg}
        alt={project.title}
        className="project-image"
      />
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-footer">
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <span className="project-expand-hint">Click to view details →</span>
      </div>
    </div>
  )
}
