import type { Skill, SkillCategory } from '../data/skills'

const LEVEL_ORDER = ['Familiar', 'Intermediate', 'Advanced', 'Expert'] as const

function SkillDots({ level }: { level: Skill['level'] }) {
  const filled = LEVEL_ORDER.indexOf(level) + 1
  return (
    <div className="skill-dots" aria-label={level}>
      {LEVEL_ORDER.map((_, i) => (
        <span key={i} className={`skill-dot${i < filled ? ' skill-dot--filled' : ''}`} />
      ))}
    </div>
  )
}

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="skill-row">
      <span className="skill-name">{skill.name}</span>
      <SkillDots level={skill.level} />
    </div>
  )
}

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  if (category.featured && category.subcategories) {
    return (
      <div className="skill-block skill-category skill-block--featured">
        <h3 className="skill-block-title">{category.name}</h3>
        <div className="skill-subcategories">
          {category.subcategories.map(sub => (
            <div key={sub.name} className="skill-subcat">
              <h4 className="skill-subcat-title">{sub.name}</h4>
              {sub.skills.map(skill => (
                <SkillRow key={skill.name} skill={skill} />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (category.subcategories) {
    return (
      <div className="skill-block skill-category">
        <h3 className="skill-block-title">{category.name}</h3>
        {category.subcategories.map((sub, i) => (
          <div key={sub.name} className={i > 0 ? 'skill-subcat-stacked' : undefined}>
            <h4 className="skill-subcat-title">{sub.name}</h4>
            {sub.skills.map(skill => (
              <SkillRow key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="skill-block skill-category">
      <h3 className="skill-block-title">{category.name}</h3>
      {category.skills?.map(skill => (
        <SkillRow key={skill.name} skill={skill} />
      ))}
    </div>
  )
}
