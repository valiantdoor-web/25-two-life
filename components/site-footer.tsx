import Link from 'next/link'

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
        {/* giant wordmark */}
        <div className="border-b border-border pb-12">
          <h2
            className="display leading-[0.8] text-off-white"
            style={{ fontSize: 'clamp(3.5rem,16vw,13rem)' }}
          >
            25 <span className="font-brush text-orange">two</span> life
          </h2>
          <p className="eyebrow mt-4 text-muted-gray">More than your sentence.</p>
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
