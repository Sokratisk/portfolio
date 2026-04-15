import { useEffect } from 'react'
import type { Project } from '../data/projects'
import placeholderImg from '../assets/placeholder.png'

interface Props {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <img
          src={project.image ?? placeholderImg}
          alt={project.title}
          className="modal-img"
        />
        <div className="modal-body">
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-desc">{project.description}</p>
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          {(project.github || project.live) && (
            <div className="modal-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  GitHub →
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Live →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
