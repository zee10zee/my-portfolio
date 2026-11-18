import { certifications } from '../data/certifications.js'
import { Download } from 'lucide-react'
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
                {certification.file ? (
                  <img
                    alt={`${certification.title} from ${certification.issuer}`}
                    className="certificate-preview mb-3"
                    loading="lazy"
                    src={certification.file}
                  />
                ) : (
                  <div className="certificate-unavailable mb-3">
                    Original certificate scan not found.
                  </div>
                )}
                <h3 className="card-title h5 mb-2">{certification.title}</h3>
                <p className="text-muted mb-3">{certification.issuer}</p>
                <div className="d-flex align-items-center justify-content-between gap-3 mt-auto">
                  <span className="resume-period">{certification.date}</span>
                  {certification.file && (
                    <a
                      className="certificate-download"
                      download
                      href={certification.pdf}
                    >
                      <Download aria-hidden="true" size={16} />
                      <span>Download certificate</span>
                    </a>
                  )}
                </div>
              </AppCard>
            </AppCol>
          ))}
        </AppRow>
      </AppContainer>
    </section>
  )
}
