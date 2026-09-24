import { profile } from '../data/profile'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-elev)]/30">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-[var(--accent)]" />
          <p className="text-sm text-[var(--muted)]">
            {profile.name} · {profile.role} © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <SocialLinks />
          <a
            href="#top"
            className="group flex items-center gap-1 font-mono text-xs text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            title="Back to top"
          >
            <span>Top</span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
