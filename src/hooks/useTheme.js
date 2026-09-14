import { useCallback, useEffect, useState } from 'react'

export const THEME_KEY = 'tejays-theme'

export function getStoredTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    const saved = window.localStorage.getItem(THEME_KEY)
    return saved === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function applyTheme(theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#07100D' : '#075B3A')
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getStoredTheme)

  useEffect(() => {
    applyTheme(theme)
    try {
      const existing = window.localStorage.getItem(THEME_KEY)
      if (existing !== null && existing !== theme) {
        window.localStorage.setItem(THEME_KEY, theme)
      }
    } catch {
      // storage unavailable — theme still applies for the session
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, setTheme, toggleTheme }
}