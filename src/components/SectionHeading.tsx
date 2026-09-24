type SectionHeadingProps = {
  eyebrow?: string
  title: string
  id?: string
}

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <header className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs tracking-[0.18em] text-[var(--muted)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="font-serif text-3xl font-medium tracking-tight text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
    </header>
  )
}
