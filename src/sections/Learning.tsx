import { Reveal } from '../components/Reveal'
import { profile } from '../data/profile'

export function Learning() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="learning-title">
      <Reveal>
        <div className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] px-6 py-8 sm:px-10 transition-all duration-300 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--line))] shadow-xs">
          {/* Subtle accent corner glow */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[var(--accent)]/10 blur-2xl"
            aria-hidden="true"
          />

          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-[var(--accent)]"></span>
            </span>
            <p className="font-mono text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
              Continuous Growth
            </p>
          </div>

          <h2 id="learning-title" className="mt-4 font-serif text-2xl font-medium sm:text-3xl max-w-2xl leading-snug">
            {profile.learningIntro}
          </h2>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {profile.learningTopics.map((topic, idx) => (
              <span
                key={topic}
                style={{ transitionDelay: `${idx * 40}ms` }}
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] bg-[var(--bg)] px-3.5 py-1.5 font-mono text-xs text-[var(--ink)] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-xs cursor-default"
              >
                <span className="text-[var(--accent)]">✦</span>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
