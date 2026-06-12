import { useEffect, useRef } from 'react'

/**
 * Wraps children in a scroll-triggered reveal animation.
 * Uses IntersectionObserver - zero deps, no layout jank.
 *
 * @param {number}  delay     - stagger delay in ms (0, 100, 200, …)
 * @param {string}  variant   - 'up' (default) | 'scale' | 'fade'
 * @param {number}  threshold - 0–1, how much of the element must be visible
 */
export default function Reveal({ children, delay = 0, variant = 'up', threshold = 0.12, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -32px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const cls = variant === 'scale' ? 'reveal-scale' : 'reveal'

  return (
    <div
      ref={ref}
      className={`${cls} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}
