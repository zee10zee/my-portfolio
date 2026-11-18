import { contributions } from '../data/contributions.js'
import {
  AppBadge,
  AppButton,
  AppCard,
  AppCol,
  AppContainer,
  AppRow,
} from './ui/AppUI.jsx'
import { ExternalLink } from 'lucide-react'

export function Contributions() {
  return (
    <section className="contributions-section content-section py-5" id="work">
      <AppContainer>
        <p className="section-eyebrow mb-2">Selected work</p>
        <h2 className="section-title mb-4">Projects &amp; contributions</h2>
        <AppRow className="g-4">
          {contributions.map((contribution) => (
            <AppCol md={6} lg={4} key={contribution.title}>
              <AppCard
                className="contribution-card h-100"
                bodyClassName="d-flex flex-column align-items-start"
              >
                <img
                  alt={`${contribution.title} app preview`}
                  className="contribution-image"
                  loading="lazy"
                  src={contribution.image}
                />
                <h3 className="card-title h5 mb-3">{contribution.title}</h3>
                <p className="card-text contribution-description">
                  {contribution.desc}
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {contribution.tags.map((tag) => (
                    <AppBadge color="light" key={tag}>
                      {tag}
                    </AppBadge>
                  ))}
                </div>
                <div className="d-flex flex-wrap gap-2 mt-auto">
                  <AppButton
                    color="outline-primary"
                    href={contribution.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View details
                  </AppButton>
                  <AppButton
                    color="primary"
                    href={contribution.appLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <ExternalLink aria-hidden="true" className="me-2" size={16} />
                    Check app
                  </AppButton>
                </div>
              </AppCard>
            </AppCol>
          ))}
        </AppRow>
      </AppContainer>
    </section>
  )
}
