import Link from 'next/link'
import Image from 'next/image'

const NAV = [
  { label: 'STORY', href: '/story' },
  { label: 'JOURNAL', href: '/#journal' },
  { label: 'PEOPLE', href: '/#people' },
  { label: 'SHOP', href: '/shop' },
  { label: 'ART', href: '/art' },
  { label: 'CONVERSATIONS', href: '/#conversations' },
  { label: 'CONTACT', href: '/#join' },
]

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-black-raised">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col items-start gap-6 border-b border-border pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Image src="/images/brand/logo-hero.png" alt="25 Two Life" width={436} height={272} className="h-40 w-auto md:h-56" />
            <p className="eyebrow mt-4 text-muted-gray">More than your sentence.</p>
          </div>
          <Image src="/images/brand/badge-hero-trim.png" alt="Second Chances Change Everything" width={178} height={172} className="h-24 w-auto opacity-80 md:h-28" />
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-5 text-orange">Explore</p>
            <ul className="space-y-3">{NAV.map((n) => <li key={n.label}><Link href={n.href} className="link-underline text-sm tracking-wide text-muted-gray transition-colors hover:text-off-white">{n.label}</Link></li>)}</ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-orange">Follow</p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-gray">Official social links will be added here as they are confirmed. No placeholder profiles or simulated activity.</p>
          </div>

          <div>
            <p className="eyebrow mb-5 text-orange">The Movement</p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-gray">Second chances change everything. Accountability, personal responsibility, discipline and service give them meaning.</p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <p className="font-brush text-4xl text-off-white">live the change.</p>
            <p className="eyebrow text-muted-gray">Words matter. Actions prove them.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="eyebrow text-muted-gray">© 25 Two Life</span>
          <span className="eyebrow text-muted-gray">Second chances change everything.</span>
          <span className="font-brush text-lg text-muted-gray">accountability · growth · service</span>
        </div>
      </div>
    </footer>
  )
}
