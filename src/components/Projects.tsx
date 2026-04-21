import { projects } from '../data/projects'
import { ProjectSection } from './ProjectSection'

export function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-list">
        {projects.map((project, i) => (
          <ProjectSection key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
