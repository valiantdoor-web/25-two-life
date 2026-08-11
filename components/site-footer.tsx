import Link from 'next/link'
import Image from 'next/image'

const NAV = [
  { label: 'STORY', href: '/story' },
  { label: 'JOURNAL', href: '/#journal' },
  { label: 'SHOP', href: '/shop' },
  { label: 'ART', href: '/art' },
  { label: 'PODCAST', href: '/#podcast' },
  { label: 'CONTACT', href: '/#join' },
]
const SOCIAL = ['TikTok', 'Instagram', 'YouTube']

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-black-raised">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
        {/* giant wordmark — real 25 Two Life brush lockup */}
        <div className="flex flex-col items-start gap-6 border-b border-border pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Image
              src="/images/brand/logo-hero.png"
              alt="25 Two Life Streetwear"
              width={436}
              height={272}
              className="h-40 w-auto md:h-56"
            />
            <p className="eyebrow mt-4 text-muted-gray">More than your sentence.</p>
          </div>
          <Image
            src="/images/brand/badge.png"
            alt="Second Chances Change Everything"
            width={178}
            height={172}
            className="h-24 w-auto opacity-80 md:h-28"
          />
        </div>

        {/* link columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-5 text-orange">Explore</p>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    className="link-underline text-sm tracking-wide text-muted-gray transition-colors hover:text-off-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-orange">Follow</p>
            <ul className="space-y-3">
              {SOCIAL.map((s) => (
                <li key={s}>
                  <a
                    href="#top"
                    className="link-underline text-sm tracking-wide text-muted-gray transition-colors hover:text-off-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-orange">The Movement</p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-gray">
              Second chances change everything. Built for the counted-out and the
              rebuilt.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <p className="font-brush text-4xl text-off-white">i chose life.</p>
            <p className="eyebrow text-muted-gray">Time served. Life earned.</p>
          </div>
        </div>

        {/* bottom row */}
        <div className="flex flex-col gap-4 border-t border-border pt-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="eyebrow text-muted-gray">© 25 Two Life</span>
          <span className="eyebrow text-muted-gray">
            Second chances change everything.
          </span>
          <span className="font-brush text-lg text-muted-gray">
            artiste — White Boy Rick ’25
          </span>
        </div>
      </div>
    </footer>
  )
}
