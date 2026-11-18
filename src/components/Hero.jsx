import { useState } from 'react'
import { profile } from '../data/profile.js'
import { Download } from 'lucide-react'
import { AppButton, AppCol, AppContainer, AppRow } from './ui/AppUI.jsx'

export function Hero() {
  const [hasProfileImage, setHasProfileImage] = useState(true)

  return (
    <section className="hero-section min-vh-75 d-flex align-items-center py-5">
      <AppContainer>
        <AppRow className="align-items-center gy-5">
          <AppCol md={6}>
            <p className="hero-kicker mb-3">A little introduction</p>
            <h1 className="hero-title mb-4">
              Hi, I&apos;m <span>{profile.name}</span>.
            </h1>
            <p className="hero-role mb-3">{profile.title}</p>
            <p className="hero-summary mb-4">{profile.intro}</p>
            <div className="d-flex flex-wrap gap-3">
              <AppButton href="#contact" size="lg">
                Contact me
              </AppButton>
              <AppButton
                className="hero-work-button"
                color="outline-dark"
                href="#work"
                size="lg"
              >
                See my work
              </AppButton>
              <AppButton
                color="outline-primary"
                download="Abed-Khan-Noori-CV.pdf"
                href="/Abed-Khan-Noori-CV.pdf"
                size="lg"
              >
                <Download aria-hidden="true" className="me-2" size={18} />
                Download CV
              </AppButton>
            </div>
          </AppCol>
          <AppCol md={6}>
            <div className="hero-visual mx-auto">
              <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
              <div className="hero-profile-card">
                <span className="hero-card-label">Profile preview</span>
                {hasProfileImage ? (
                  <img
                    alt={profile.name}
                    className="hero-initials hero-profile-image"
                    onError={() => setHasProfileImage(false)}
                    src="/cv-pic.png"
                  />
                ) : (
                  <div className="hero-initials" aria-hidden="true">
                    {profile.initials}
                  </div>
                )}
                <p className="hero-card-name mb-1">{profile.name}</p>
                <p className="hero-card-title mb-0">{profile.title}</p>
              </div>
            </div>
          </AppCol>
        </AppRow>
      </AppContainer>
    </section>
  )
}
