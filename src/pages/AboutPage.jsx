import { Certifications } from '../components/Certifications.jsx'
import { Education } from '../components/Education.jsx'
import { Experience } from '../components/Experience.jsx'
import { profile } from '../data/profile.js'
import { AppCol, AppContainer, AppRow } from '../components/ui/AppUI.jsx'
import aboutPreview from '../assets/Thoughtful Developer’s Faith Workspace.png'

export function AboutPage() {
  return (
    <>
      <section className="about-section content-section py-5">
        <AppContainer>
          <AppRow className="justify-content-center align-items-center gy-4">
            <AppCol lg={7}>
              <p className="section-eyebrow mb-2">Profile</p>
              <h1 className="section-title mb-4">More about me</h1>
              {profile.about.map((paragraph) => (
                <p className="about-copy mb-3" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </AppCol>
            <AppCol className="text-center" lg={5}>
              <img
                alt="Illustrated portrait of Abed Khan Noori at a developer workspace"
                className="about-profile-image"
                src={aboutPreview}
              />
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
