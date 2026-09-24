import { hasHref, profile, type SocialKey } from '../data/profile'
import { IconGithub, IconLinkedin, IconMail } from './icons'

const meta: Record<
  SocialKey,
  { Icon: typeof IconGithub; kind: 'github' | 'linkedin' | 'email' }
> = {
  github: { Icon: IconGithub, kind: 'github' },
  linkedin: { Icon: IconLinkedin, kind: 'linkedin' },
  email: { Icon: IconMail, kind: 'email' },
}

type SocialLinksProps = {
  className?: string
  showLabels?: boolean
}

export function SocialLinks({ className = '', showLabels = false }: SocialLinksProps) {
  const keys: SocialKey[] = ['github', 'linkedin', 'email']

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {keys.map((key) => {
        const item = profile.social[key]
        const { Icon } = meta[key]
        const live = hasHref(item.href)
        const classes =
          'inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm text-[var(--muted)] transition-all duration-200 hover:text-[var(--ink)] hover:-translate-y-0.5 hover:bg-[var(--line)]/20'

        if (!live) {
          return (
            <li key={key}>
              <span
                className={`${classes} cursor-default border-b border-dashed border-[var(--line)]`}
                title={`Add your ${key} in src/data/profile.ts`}
              >
                <Icon />
                {showLabels ? <span>{item.label}</span> : <span className="sr-only">{item.label}</span>}
              </span>
            </li>
          )
        }

        const isEmail = key === 'email'
        const href = isEmail && !item.href.startsWith('mailto:') ? `mailto:${item.href}` : item.href

        return (
          <li key={key}>
            <a
              className={classes}
              href={href}
              {...(isEmail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <Icon />
              {showLabels ? <span>{item.label}</span> : <span className="sr-only">{item.label}</span>}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
