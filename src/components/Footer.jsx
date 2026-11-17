import { profile } from '../data/profile.js'
import { AppContainer } from './ui/AppUI.jsx'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer border-top py-4">
      <AppContainer className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span>
          &copy; {currentYear} {profile.name}
        </span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </AppContainer>
    </footer>
  )
}
