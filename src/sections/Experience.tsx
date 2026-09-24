import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8"
      aria-labelledby="experience-title"
    >
      <Reveal>
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where the work happened."
        />
        {experience.some((item) => item.isPlaceholder) ? (
          <p className="mb-10 max-w-xl text-[var(--muted)]">
            Roles below are placeholders - no companies or dates have been invented.
          </p>
        ) : null}
      </Reveal>
      <ol className="relative space-y-0 border-l border-[var(--line)] pl-6 sm:pl-8">
        {experience.map((item, idx) => (
          <Reveal
            key={item.id}
            as="li"
            delay={idx * 100}
            className="group relative pb-12 last:pb-0 transition-all duration-300"
          >
            {/* Timeline node dot with hover pulse */}
            <span
              className="absolute top-1.5 -left-[calc(1.5rem+6px)] size-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[var(--accent)] sm:-left-[calc(2rem+6px)] shadow-xs"
              aria-hidden="true"
            />
            <div className="rounded-lg p-2 -ml-2 transition-colors duration-200 group-hover:bg-[var(--bg-elev)]/40">
              <span className="inline-block rounded-md border border-[var(--line)] bg-[var(--bg-elev)] px-2.5 py-0.5 font-mono text-xs tracking-wide text-[var(--muted)]">
                {item.dates}
              </span>
              <h3 className="mt-2 font-serif text-xl font-medium tracking-tight text-[var(--ink)]">
                {item.role}
                <span className="text-[var(--accent)] font-normal"> · {item.company}</span>
              </h3>
              {item.isPlaceholder ? (
                <p className="mt-1 font-mono text-[10px] tracking-wide text-[var(--accent)] uppercase">
                  Placeholder
                </p>
              ) : null}
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
