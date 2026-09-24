import { useEffect, useState } from 'react'
import { navItems } from '../data/nav'
import { profile } from '../data/profile'
import { SocialLinks } from './SocialLinks'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)

      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i]
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [open])

  // Close mobile nav on desktop resize
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768 && open) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  return (
    <header
      className={`header-bar sticky top-0 z-50 border-b ${
        scrolled ? 'border-[var(--line)] shadow-xs' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2 font-serif text-lg tracking-tight transition-transform duration-200 hover:opacity-85"
        >
          <span className="inline-block size-2 rounded-full bg-[var(--accent)] transition-transform duration-300 group-hover:scale-125" />
          <span>{profile.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-md px-3 py-1.5 text-sm transition-all duration-200 ${
                  isActive
                    ? 'font-medium text-[var(--ink)] bg-[var(--line)]/40'
                    : 'text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--line)]/20'
                }`}
              >
                {item.label}
              </a>
            )
          })}
          <div className="ml-2 border-l border-[var(--line)] pl-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className={`relative inline-flex size-10 flex-col items-center justify-center gap-1 rounded-md text-[var(--ink)] transition-colors hover:bg-[var(--line)]/25 ${
              open ? 'burger-active' : ''
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
        </div>
      </div>

      {/* 100% Solid Mobile Drawer (Only mounted when open) */}
      {open ? (
        <div id="mobile-nav" className="mobile-drawer md:hidden" aria-label="Mobile Navigation">
          <nav className="flex-1">
            <p className="mb-4 font-mono text-xs tracking-wider text-[var(--muted)] uppercase">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-serif text-2xl tracking-tight transition-colors ${
                        isActive
                          ? 'bg-[var(--line)]/40 text-[var(--ink)] font-medium'
                          : 'text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--line)]/20 active:bg-[var(--line)]/30'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-[var(--muted)]">0{index + 1}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Bottom section of Mobile Drawer */}
          <div className="border-t border-[var(--line)] pt-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for remote work</span>
            </div>
            <SocialLinks showLabels />
          </div>
        </div>
      ) : null}
    </header>
  )
}
