import { useState } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { ThemeToggle } from './ThemeToggle.jsx'
import {
  AppCollapse,
  AppNav,
  AppNavbar,
  AppNavbarBrand,
  AppNavbarToggler,
  AppNavItem,
  AppNavLink,
} from './ui/AppUI.jsx'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const sectionHref = (section) => (pathname === '/' ? `#${section}` : `/#${section}`)
  const closeNav = () => setIsOpen(false)

  return (
    <AppNavbar className="site-navbar bg-white border-bottom" expand="md" light sticky="top">
      <AppNavbarBrand className="fw-bold" tag={RouterLink} to="/">
        {profile.name}
      </AppNavbarBrand>
      <AppNavbarToggler
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((open) => !open)}
      />
      <AppCollapse isOpen={isOpen} navbar>
        <AppNav className="ms-auto align-items-md-center" navbar>
          <AppNavItem>
            <AppNavLink
              onClick={closeNav}
              tag={RouterLink}
              to="/about"
            >
              About
            </AppNavLink>
          </AppNavItem>
          <AppNavItem>
            <AppNavLink href={sectionHref('work')} onClick={closeNav}>
              Work
            </AppNavLink>
          </AppNavItem>
          <AppNavItem>
            <AppNavLink href={sectionHref('contact')} onClick={closeNav}>
              Contact
            </AppNavLink>
          </AppNavItem>
          <AppNavItem>
            <AppNavLink
              onClick={closeNav}
              tag={RouterLink}
              to="/courses"
            >
              Courses
            </AppNavLink>
          </AppNavItem>
          <AppNavItem className="ms-md-2">
            <ThemeToggle />
          </AppNavItem>
        </AppNav>
      </AppCollapse>
    </AppNavbar>
  )
}
