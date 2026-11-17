import { education } from '../data/education.js'
import { AppCard, AppCol, AppContainer, AppRow } from './ui/AppUI.jsx'

export function Education() {
  return (
    <section className="education-section content-section py-5" id="education">
      <AppContainer>
        <p className="section-eyebrow mb-2">Education</p>
        <h2 className="section-title mb-4">Education</h2>
        <AppRow className="g-4">
          {education.map((item) => (
            <AppCol key={item.qualification} md={6}>
              <AppCard className="resume-card h-100">
                <h3 className="card-title h5 mb-2">{item.qualification}</h3>
                <p className="text-muted mb-3">{item.institution}</p>
                <span className="resume-period">{item.period}</span>
              </AppCard>
            </AppCol>
          ))}
        </AppRow>
      </AppContainer>
    </section>
  )
}
