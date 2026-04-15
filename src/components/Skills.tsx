import { skillCategories } from '../data/skills'
import { SkillRow } from './SkillCard'

export function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="skill-categories">
          {skillCategories.map(cat => (
            <div key={cat.name} className="skill-category">
              <h3 className="skill-category-name">{cat.name}</h3>
              <div className="skill-rows">
                {cat.skills.map(skill => (
                  <SkillRow key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
