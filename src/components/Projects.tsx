import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
