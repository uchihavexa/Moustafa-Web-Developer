import { useEffect, useState } from 'react'
import { IconMoon, IconSun } from './icons'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggle() {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-10 items-center justify-center rounded-sm text-[var(--muted)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--ink)]"
      aria-label={dark ? 'Switch to light appearance' : 'Switch to dark appearance'}
    >
      {dark ? <IconSun /> : <IconMoon />}
    </button>
  )
}
