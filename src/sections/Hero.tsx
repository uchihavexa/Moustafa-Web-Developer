import { profile } from '../data/profile'
import { IconArrow } from '../components/icons'
import { SocialLinks } from '../components/SocialLinks'
import { Reveal } from '../components/Reveal'

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 -z-10 h-[380px] w-full max-w-3xl opacity-40 dark:opacity-25 blur-3xl"
        aria-hidden="true"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-tr from-[var(--accent)]/40 via-[var(--accent)]/15 to-transparent animate-ambient-pulse" />
      </div>

      {/* Available status pill */}
      <Reveal delay={50}>
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--line)] bg-[var(--bg-elev)]/80 backdrop-blur-xs px-3.5 py-1.5 text-xs font-mono text-[var(--muted)] shadow-xs transition-transform duration-200 hover:scale-[1.02]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">Available for remote work · {profile.location}</span>
        </div>
      </Reveal>

      {/* Headline & Title */}
      <Reveal delay={120}>
        <h1 className="mt-6 font-serif text-6xl leading-[0.94] font-medium tracking-tight sm:text-7xl md:text-8xl">
          {profile.name}
        </h1>
      </Reveal>

      <Reveal delay={180}>
        <p className="mt-3 font-serif text-2xl text-[var(--muted)] sm:text-3xl font-light">
          {profile.role}
        </p>
      </Reveal>

      <Reveal delay={240}>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          {profile.headline}
        </p>
      </Reveal>

      {/* Action buttons */}
      <Reveal delay={300}>
        <div className="mt-10 flex flex-wrap items-center gap-3.5">
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-md bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          >
            <span>View My Work</span>
            <IconArrow className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--bg-elev)]/50 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ink)] hover:bg-[var(--bg-elev)] active:translate-y-0"
          >
            Get In Touch
          </a>
        </div>
      </Reveal>

      <Reveal delay={360}>
        <div className="mt-10 border-t border-[var(--line)]/60 pt-6">
          <SocialLinks showLabels />
        </div>
      </Reveal>
    </section>
  )
}
