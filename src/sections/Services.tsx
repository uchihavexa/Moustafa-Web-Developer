import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { services } from '../data/services'

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8" aria-labelledby="services-title">
      <Reveal>
        <SectionHeading id="services-title" eyebrow="What I can build" title="Work I take on." />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <Reveal
            key={service.title}
            delay={idx * 100}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-elev)]/50 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--line))] hover:bg-[var(--bg-elev)] hover:shadow-md"
          >
            {/* Top decorative accent indicator */}
            <div className="mb-4 h-0.5 w-6 rounded-full bg-[var(--accent)] opacity-60 transition-all duration-300 group-hover:w-12 group-hover:opacity-100" />
            <div>
              <h3 className="font-serif text-xl font-medium tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
