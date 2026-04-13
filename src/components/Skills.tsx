import { skills } from "../data/skills";
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
