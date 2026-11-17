import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/useTheme.js'
import { AppButton } from './ui/AppUI.jsx'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <AppButton
      aria-label={`Switch to ${nextTheme} theme`}
      className="theme-toggle"
      color="outline-secondary"
      onClick={toggleTheme}
      title={`Switch to ${nextTheme} theme`}
      type="button"
    >
      <Icon aria-hidden="true" size={18} />
    </AppButton>
  )
}
