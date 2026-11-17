import { certifications } from '../data/certifications.js'
import { AppCard, AppCol, AppContainer, AppRow } from './ui/AppUI.jsx'

export function Certifications() {
  return (
    <section
      className="certifications-section content-section py-5"
      id="certifications"
    >
      <AppContainer>
        <p className="section-eyebrow mb-2">Certifications</p>
        <h2 className="section-title mb-4">Certificates &amp; diplomas</h2>
        <AppRow className="g-4">
          {certifications.map((certification) => (
            <AppCol key={`${certification.title}-${certification.date}`} md={6} lg={4}>
              <AppCard className="resume-card h-100">
                <h3 className="card-title h5 mb-2">{certification.title}</h3>
                <p className="text-muted mb-3">{certification.issuer}</p>
                <span className="resume-period">{certification.date}</span>
              </AppCard>
            </AppCol>
          ))}
        </AppRow>
      </AppContainer>
    </section>
  )
}
