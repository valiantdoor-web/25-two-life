'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'STORY', href: '/story' },
  { label: 'JOURNAL', href: '/#journal' },
  { label: 'PEOPLE', href: '/#people' },
  { label: 'SHOP', href: '/shop' },
  { label: 'ART', href: '/art' },
  { label: 'PODCAST', href: '/#podcast' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.10)'
          : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        {/* wordmark */}
        <Link href="/" className="flex items-baseline gap-2" aria-label="25 Two Life home">
          <span className="display text-xl leading-none text-off-white md:text-2xl">25</span>
          <span className="font-brush text-lg leading-none text-orange md:text-xl">two</span>
          <span className="display text-xl leading-none text-off-white md:text-2xl">life</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="link-underline eyebrow text-muted-gray transition-colors hover:text-off-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#join"
            className="eyebrow hidden rounded-sm px-4 py-2.5 text-orange transition-colors hover:bg-orange hover:text-black md:inline-block"
            style={{ border: '1px solid var(--border-orange)' }}
          >
            JOIN THE MOVEMENT
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex size-11 items-center justify-center text-off-white lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-[68px] z-40 flex flex-col bg-background px-5 pb-10 pt-8 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display flex items-center justify-between border-b border-border py-5 text-4xl text-off-white"
              >
                <span>{item.label}</span>
                <span className="eyebrow text-orange">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </Link>
            ))}
          </nav>
          <Link
            href="/#join"
            onClick={() => setOpen(false)}
            className="btn-orange eyebrow mt-8 flex h-14 items-center justify-center rounded-sm"
          >
            JOIN THE MOVEMENT
          </Link>
          <p className="font-brush mt-8 text-2xl text-orange">i chose life.</p>
        </div>
      )}
    </header>
  )
}
