import { skillCategories } from '../data/skills'
import { SkillCategoryCard } from './SkillCard'

export function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="skill-grid">
          {skillCategories.map(cat => (
            <SkillCategoryCard key={cat.name} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
