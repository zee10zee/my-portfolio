import { workExperience } from '../data/experience.js'
import { AppCard, AppCol, AppContainer, AppRow } from './ui/AppUI.jsx'

export function Experience() {
  return (
    <section
      className="experience-section content-section py-5"
      id="experience"
    >
      <AppContainer>
        <p className="section-eyebrow mb-2">Experience</p>
        <h2 className="section-title mb-4">Work experience</h2>
        <AppRow className="g-3">
          {workExperience.map((role) => (
            <AppCol key={role.title} xs={12}>
              <AppCard className="resume-card">
                <div className="d-flex flex-column flex-md-row justify-content-between gap-2 mb-3">
                  <div>
                    <h3 className="card-title h5 mb-1">{role.title}</h3>
                    <p className="mb-0 text-muted">{role.organization}</p>
                  </div>
                  <span className="resume-period">{role.period}</span>
                </div>
                <ul className="experience-responsibilities mb-0">
                  {role.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </AppCard>
            </AppCol>
          ))}
        </AppRow>
      </AppContainer>
    </section>
  )
}
