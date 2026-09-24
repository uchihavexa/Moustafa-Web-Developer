import { type FormEvent, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { IconExternal, IconGithub, IconLinkedin, IconMail } from '../components/icons'
import { hasHref, profile } from '../data/profile'

export function Contact() {
  const [status, setStatus] = useState('')
  const [copied, setCopied] = useState(false)
  const emailReady = hasHref(profile.social.email.href)
  const rawEmail = profile.social.email.label

  function onCopyEmail() {
    navigator.clipboard.writeText(rawEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!emailReady) {
      setStatus('Add your email in the profile data file before this form can open a message.')
      return
    }

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const from = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const address = profile.social.email.href.replace(/^mailto:/i, '')
    const href = `mailto:${address}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(`${message}\n\n- ${name} (${from})`)}`
    window.location.href = href
    setStatus('Opening your email client…')
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8" aria-labelledby="contact-title">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Direct Info & Quick Actions */}
        <Reveal>
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-[var(--muted)] uppercase">Contact</p>
              <h2 id="contact-title" className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                {profile.contactHeading}
              </h2>
              <p className="mt-3 font-serif text-2xl text-[var(--muted)]">{profile.contactSubheading}</p>
              <p className="mt-4 max-w-lg leading-relaxed text-[var(--muted)]">
                Looking for {profile.lookingFor.toLowerCase()}. Feel free to reach out directly via email, connect on LinkedIn, or drop a note below.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] p-4 transition-all duration-200 hover:border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] hover:shadow-xs">
                <a
                  href={`mailto:${rawEmail}`}
                  className="flex items-center gap-3 overflow-hidden text-left"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--line)]/40 text-[var(--ink)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--bg)]">
                    <IconMail />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-[var(--muted)] uppercase">Email</p>
                    <p className="truncate font-medium text-[var(--ink)]">{rawEmail}</p>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="ml-3 shrink-0 rounded-md border border-[var(--line)] bg-[var(--bg)] px-2.5 py-1.5 font-mono text-xs text-[var(--muted)] transition-all hover:border-[var(--ink)] hover:text-[var(--ink)]"
                  title="Copy email to clipboard"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={profile.social.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] p-4 transition-all duration-200 hover:border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] hover:shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--line)]/40 text-[var(--ink)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--bg)]">
                    <IconLinkedin />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-[var(--muted)] uppercase">LinkedIn</p>
                    <p className="font-medium text-[var(--ink)]">linkedin.com/in/moustafa-asaad</p>
                  </div>
                </div>
                <IconExternal className="size-4 text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* GitHub Card */}
              <a
                href={profile.social.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-[var(--line)] bg-[var(--bg-elev)] p-4 transition-all duration-200 hover:border-[color-mix(in_srgb,var(--accent)_50%,var(--line))] hover:shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[var(--line)]/40 text-[var(--ink)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--bg)]">
                    <IconGithub />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] text-[var(--muted)] uppercase">GitHub</p>
                    <p className="font-medium text-[var(--ink)]">github.com/uchihavexa</p>
                  </div>
                </div>
                <IconExternal className="size-4 text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Interactive Contact Form */}
        <Reveal delay={150}>
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-elev)]/60 p-6 sm:p-8 backdrop-blur-xs shadow-xs">
            <h3 className="font-serif text-2xl font-medium tracking-tight">Send a message</h3>
            <p className="mt-1 text-sm text-[var(--muted)]">Opens your default email client with your prefilled details.</p>

            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  autoComplete="name"
                  className="w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  autoComplete="email"
                  className="w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-[var(--muted)] uppercase tracking-wider">
                  Project Details / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or requirements…"
                  className="w-full resize-y rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--bg)] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!emailReady}
              >
                <span>Send message</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>

              {status ? (
                <p className="rounded-md bg-[var(--line)]/30 px-3 py-2 text-center text-sm font-medium text-[var(--ink)]" role="status">
                  {status}
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
