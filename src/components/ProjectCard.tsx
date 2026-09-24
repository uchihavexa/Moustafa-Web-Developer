import { hasHref } from '../data/profile'
import type { Project } from '../data/projects'
import { IconExternal, IconGithub } from './icons'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const live = hasHref(project.liveUrl)
  const repo = hasHref(project.githubUrl)

  return (
    <article className="card-hover-lift group relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--accent)_55%,var(--line))]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg)]">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={960}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle overlay gradient on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-elev)]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {project.isPlaceholder ? (
          <p className="pointer-events-none absolute top-3 left-3 rounded-full bg-[var(--bg)]/90 backdrop-blur-xs px-2.5 py-1 font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase shadow-xs">
            Placeholder
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="font-serif text-2xl font-medium tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)]">
            {project.name}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--muted)]">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-[var(--line)] bg-[var(--bg)]/50 px-2.5 py-1 font-mono text-xs text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)]/50 hover:text-[var(--ink)]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-1 flex flex-wrap items-center gap-3">
          {live ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-md bg-[var(--ink)] px-4 py-2 text-sm font-medium text-[var(--bg)] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            >
              <span>Live demo</span>
              <IconExternal className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 rounded-md border border-dashed border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]"
              title="Add a live URL in src/data/projects.ts when ready"
            >
              Live demo
            </span>
          )}

          {repo ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--bg-elev)] px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ink)] hover:bg-[var(--line)]/15 active:translate-y-0"
            >
              <IconGithub className="size-4" />
              <span>GitHub</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 rounded-md border border-dashed border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)]"
              title="Add githubUrl in src/data/projects.ts"
            >
              GitHub
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
