import { contributions } from '../data/contributions.js'
import {
  AppBadge,
  AppButton,
  AppCard,
  AppCol,
  AppContainer,
  AppRow,
} from './ui/AppUI.jsx'

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
                <AppButton
                  className="mt-auto"
                  color="outline-primary"
                  href={contribution.link}
                >
                  View details
                </AppButton>
              </AppCard>
            </AppCol>
          ))}
        </AppRow>
      </AppContainer>
    </section>
  )
}
