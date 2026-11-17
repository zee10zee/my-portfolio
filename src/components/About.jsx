import { Link as RouterLink } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { AppButton, AppCol, AppContainer, AppRow } from './ui/AppUI.jsx'

export function About() {
  return (
    <section className="about-section content-section py-5" id="about">
      <AppContainer>
        <AppRow className="justify-content-center">
          <AppCol lg={8}>
            <p className="section-eyebrow mb-2">About</p>
            <h2 className="section-title mb-4">A little about me</h2>
            {profile.about.map((paragraph) => (
              <p className="about-copy mb-3" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <AppButton
              className="mt-2"
              color="outline-primary"
              tag={RouterLink}
              to="/about"
            >
              Read more about me
            </AppButton>
          </AppCol>
        </AppRow>
      </AppContainer>
    </section>
  )
}
