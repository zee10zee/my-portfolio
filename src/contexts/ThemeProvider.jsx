import { useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext.js'

const THEME_STORAGE_KEY = 'reachme-theme'

function getInitialTheme() {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }
  } catch (error) {
    console.error('Unable to read the saved theme preference.', error)
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch (error) {
      console.error('Unable to save the theme preference.', error)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
