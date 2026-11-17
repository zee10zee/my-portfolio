import { Certifications } from '../components/Certifications.jsx'
import { Education } from '../components/Education.jsx'
import { Experience } from '../components/Experience.jsx'
import { profile } from '../data/profile.js'
import { AppCol, AppContainer, AppRow } from '../components/ui/AppUI.jsx'

export function AboutPage() {
  return (
    <>
      <section className="about-section content-section py-5">
        <AppContainer>
          <AppRow className="justify-content-center">
            <AppCol lg={8}>
              <p className="section-eyebrow mb-2">Profile</p>
              <h1 className="section-title mb-4">More about me</h1>
              {profile.about.map((paragraph) => (
                <p className="about-copy mb-3" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </AppCol>
          </AppRow>
        </AppContainer>
      </section>
      <Experience />
      <Education />
      <Certifications />
    </>
  )
}
