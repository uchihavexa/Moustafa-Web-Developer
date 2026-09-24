import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8" aria-labelledby="about-title">
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-16">
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="About"
            title="A decade around the web, still building with care."
          />
        </Reveal>
        <Reveal delay={150}>
          <div className="space-y-5 text-[var(--muted)] leading-relaxed">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="mt-6 rounded-lg border border-[var(--line)] bg-[var(--bg-elev)]/50 p-4 transition-all duration-200 hover:border-[var(--accent)]/40">
              <p className="font-mono text-xs tracking-wide text-[var(--ink)]">
                <span className="text-[var(--accent)]">✦ </span>
                {profile.experienceNote} · {profile.focus}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
