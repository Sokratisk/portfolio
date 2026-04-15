import { levelLabel, type Skill } from '../data/skills'

const DOTS = [1, 2, 3, 4, 5]

export function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="skill-row">
      <span className="skill-row-name">{skill.name}</span>
      <div className="skill-meta">
        <span className="skill-level-label">{levelLabel[skill.level]}</span>
        <div className="skill-dots" aria-label={`${levelLabel[skill.level]} — ${skill.level} of 5`}>
          {DOTS.map(i => (
            <span key={i} className={`skill-dot${i <= skill.level ? ' filled' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
