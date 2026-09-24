import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skills } from '../data/skills'

export function Skills() {
  const categories = Object.keys(skills) as Array<keyof typeof skills>

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8" aria-labelledby="skills-title">
      <Reveal>
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Tools I actually use."
        />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, catIdx) => (
          <Reveal
            key={category}
            delay={catIdx * 80}
            className="group rounded-xl border border-[var(--line)] bg-[var(--bg-elev)]/50 p-6 transition-all duration-300 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--line))] hover:bg-[var(--bg-elev)] hover:-translate-y-1 hover:shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[var(--accent)] transition-transform duration-300 group-hover:scale-150" />
              <h3 className="font-mono text-xs font-medium tracking-[0.16em] text-[var(--muted)] uppercase transition-colors group-hover:text-[var(--ink)]">
                {category}
              </h3>
            </div>
            <ul className="mt-5 space-y-2.5">
              {skills[category].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b border-[var(--line)]/60 pb-2 text-sm text-[var(--ink)]/90 transition-all duration-150 hover:border-[var(--accent)]/50 hover:pl-1 hover:text-[var(--accent)]"
                >
                  <span>{item}</span>
                  <span className="text-[10px] text-[var(--muted)] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    •
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
