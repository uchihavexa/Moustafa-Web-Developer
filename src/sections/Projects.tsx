import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8" aria-labelledby="work-title">
      <Reveal>
        <SectionHeading id="work-title" eyebrow="Selected work" title="Featured projects." />
        {projects.some((project) => project.isPlaceholder) ? (
          <p className="mb-10 max-w-xl text-[var(--muted)]">
            The cards below are marked as placeholders until real projects are added.
          </p>
        ) : null}
      </Reveal>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
