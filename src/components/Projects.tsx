import { useState } from 'react'
import { projects, type Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
