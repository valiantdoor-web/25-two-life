'use client'

import { useEffect } from 'react'

/**
 * Observes every element carrying a `data-reveal*` attribute and adds the
 * `is-in` class the first time it scrolls into view. Runs once on mount and
 * re-scans if the DOM changes, so all sections share a single observer.
 */
export function Reveal() {
  useEffect(() => {
    const selector = '[data-reveal],[data-reveal-line],[data-reveal-img]'

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    const observed = new WeakSet<Element>()
    const scan = () => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el)
          observer.observe(el)
        }
      })
    }

    scan()

    const mo = new MutationObserver(scan)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
