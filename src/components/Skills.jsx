import { skills } from '../data/skills.js'
import { AppBadge, AppCol, AppContainer, AppRow } from './ui/AppUI.jsx'

export function Skills() {
  return (
    <section className="skills-section content-section py-5" id="skills">
      <AppContainer>
        <p className="section-eyebrow mb-2">Skills</p>
        <h2 className="section-title mb-4">What I work with</h2>
        <div className="skills-groups">
          {skills.map((group) => (
            <AppRow className="align-items-center gy-2" key={group.category}>
              <AppCol md={3}>
                <h3 className="skill-category-title mb-0">{group.category}</h3>
              </AppCol>
              <AppCol md={9}>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <AppBadge pill key={skill}>
                      {skill}
                    </AppBadge>
                  ))}
                </div>
              </AppCol>
            </AppRow>
          ))}
        </div>
      </AppContainer>
    </section>
  )
}
