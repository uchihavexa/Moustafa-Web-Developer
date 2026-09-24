import { useEffect, useRef, type CSSProperties, type ReactNode, type RefObject } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article' | 'header'
  delay?: number
  direction?: 'up' | 'left' | 'fade'
}

export function Reveal({
  children,
  className = '',
  as = 'div',
  delay = 0,
  direction = 'up',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      el.classList.add('is-in')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in')
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = `reveal ${className}`.trim()
  const style: CSSProperties = delay > 0 ? { transitionDelay: `${delay}ms` } : {}

  if (as === 'li') {
    return (
      <li
        ref={ref as RefObject<HTMLLIElement>}
        className={classes}
        style={style}
        data-direction={direction}
      >
        {children}
      </li>
    )
  }

  if (as === 'article') {
    return (
      <article
        ref={ref as RefObject<HTMLElement>}
        className={classes}
        style={style}
        data-direction={direction}
      >
        {children}
      </article>
    )
  }

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={classes}
      style={style}
      data-direction={direction}
    >
      {children}
    </div>
  )
}
