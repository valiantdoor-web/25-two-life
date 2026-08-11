import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'The Art — 25 Two Life',
  description:
    'The things you can’t say out loud, you can draw. Original black-and-grey work and the White Boy Rick artist capsule from 25 Two Life.',
}

const PIECES = [
  { img: '/images/art-01.png', label: 'Unchained', ratio: 'aspect-[4/5]', note: 'Ink on paper' },
  { img: '/images/art-04.png', label: 'Free Hands', ratio: 'aspect-[3/4]', note: 'Ink on paper' },
  { img: '/images/art-03.png', label: 'Scarred / Calm', ratio: 'aspect-[3/4]', note: 'Graphite study' },
  { img: '/images/art-02.png', label: 'Time & Roots', ratio: 'aspect-[4/5]', note: 'Ink on paper' },
  { img: '/images/art-05.png', label: 'Doorway', ratio: 'aspect-[4/5]', note: 'Ink on paper' },
  { img: '/images/journal-04.png', label: 'The Studio', ratio: 'aspect-[3/4]', note: 'Process' },
]

const APPLICATIONS = ['Inside neck print', 'Garment label', 'Packaging card', 'Limited poster']

export default function ArtPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main className="pt-[68px]">
        {/* intro */}
        <section
          className="w-full border-b border-border"
          style={{ paddingBlock: 'clamp(4rem,10vw,8rem)' }}
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <p className="eyebrow text-orange" data-reveal>
              The Art
            </p>
            <h1
              className="display mt-5 text-balance text-off-white"
              style={{ fontSize: 'clamp(2.5rem,9vw,8rem)', lineHeight: 0.84, letterSpacing: '-0.03em' }}
              data-reveal
            >
              THE THINGS YOU CAN&apos;T
              <br />
              SAY OUT LOUD,{' '}
              <span className="text-orange">YOU CAN DRAW.</span>
            </h1>
            <p
              className="mt-8 max-w-2xl text-pretty leading-relaxed text-muted-gray md:text-lg"
              data-reveal
            >
              Art was the first language of the rebuild. Every line here was made
              inside the work of becoming someone new — heavy shading, honest
              subjects, and a hand that learned patience the hard way.
            </p>
          </div>
        </section>

        {/* gallery */}
        <section
          className="w-full bg-black-raised"
          style={{ paddingBlock: 'clamp(3rem,7vw,6rem)' }}
        >
          <div className="mx-auto max-w-[1300px] px-5 md:px-10">
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
              {PIECES.map((p, i) => (
                <figure
                  key={p.label}
                  className="group relative block w-full break-inside-avoid overflow-hidden border border-border bg-charcoal"
                  data-reveal-img
                  style={{ ['--reveal-delay' as string]: `${(i % 3) * 80}ms` }}
                >
                  <div className={`relative w-full ${p.ratio}`}>
                    <Image
                      src={p.img}
                      alt={p.label}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="eyebrow flex items-center gap-3 text-off-white">
                      <span className="h-px w-6 rule-orange" />
                      {p.label}
                    </span>
                    <span className="eyebrow text-muted-gray">{p.note}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* artist capsule */}
        <section
          className="relative w-full overflow-hidden border-t border-border bg-black-raised texture-concrete"
          style={{ paddingBlock: 'clamp(6rem,13vw,12rem)' }}
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
              <div>
                <p className="eyebrow mb-8 text-orange" data-reveal>
                  Artist Series 001
                </p>
                <div className="relative" data-reveal>
                  <p
                    className="font-brush leading-none text-off-white"
                    style={{ fontSize: 'clamp(2rem,6vw,4rem)' }}
                  >
                    artiste
                  </p>
                  <p
                    className="font-brush leading-[0.9] text-orange"
                    style={{ fontSize: 'clamp(3.5rem,13vw,9rem)' }}
                  >
                    White Boy Rick
                  </p>
                  <span
                    className="font-brush absolute -right-1 top-0 text-muted-gray"
                    style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)' }}
                  >
                    &rsquo;25
                  </span>
                </div>

                <div className="my-8 h-px w-24 rule-orange" data-reveal-line />

                <p
                  className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-gray"
                  data-reveal
                >
                  A limited artist capsule. Hand-painted marks, signed and numbered,
                  applied where you least expect them — a real fashion collaboration
                  with a wink for the ones paying attention.
                </p>

                <Link
                  href="/shop"
                  className="btn-orange eyebrow mt-9 inline-flex min-h-[52px] items-center gap-3 rounded-sm px-8 py-4"
                  data-reveal
                >
                  SHOP THE CAPSULE
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="border border-border bg-charcoal p-8 md:p-10" data-reveal>
                <p className="eyebrow mb-6 text-muted-gray">Applied On</p>
                <ul>
                  {APPLICATIONS.map((a, i) => (
                    <li
                      key={a}
                      className="flex items-center justify-between border-b border-border py-5 last:border-b-0"
                    >
                      <span className="display text-2xl text-off-white md:text-3xl">
                        {a}
                      </span>
                      <span className="eyebrow text-orange">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-brush mt-8 text-right text-3xl text-muted-gray">
                  limited capsule
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
