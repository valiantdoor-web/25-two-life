import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'The Story — 25 Two Life',
  description:
    'They gave him 25. He chose life. The story of accountability, education, art and rebuilding behind 25 Two Life.',
}

const CHAPTERS = [
  {
    no: '01',
    kicker: 'The Sentence',
    title: 'TWENTY-FIVE YEARS.',
    body: [
      'The number came down like a door closing. Twenty-five years is not a punishment you serve in a moment — it is a life measured out in mornings, in counts, in the slow arithmetic of time you cannot get back.',
      'Most people hear the number and stop there. They think it tells them everything they need to know about a man. It does not. It is where this story starts, not where it ends.',
    ],
  },
  {
    no: '02',
    kicker: 'The Reckoning',
    title: 'ACCOUNTABILITY BEFORE ANYTHING.',
    body: [
      'Nothing changes until you stop explaining it away. The first real work was not about the system, the sentence, or the circumstances. It was about the truth — owning the harm, the choices, and the person he had been.',
      'That reckoning is not a single day. It is a decision made again and again, quietly, with no audience and no reward except the man you slowly become.',
    ],
  },
  {
    no: '03',
    kicker: 'The Education',
    title: 'HE READ HIS WAY OUT.',
    body: [
      'Books first. Then certificates. Then the harder curriculum — emotional intelligence, patience, the discipline to sit with discomfort instead of running from it. He studied himself the way other men study for parole.',
      'Counseling gave him language for things he had only ever felt. Art gave him a way to say what words could not. Both became tools he would later hand to other people.',
    ],
  },
  {
    no: '04',
    kicker: 'The Rebuild',
    title: 'TIME SERVED. LIFE EARNED.',
    body: [
      'Freedom is not the finish line. It is the first honest day of the rest of the work. Rebuilding meant showing up — for family, for work, for the version of himself he had promised he would be.',
      '25 Two Life is what that promise looks like made real: workwear built to last, stories worth telling, and a hand extended to anyone who has been counted out and told to stay down.',
    ],
  },
]

export default function StoryPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main className="pt-[68px]">
        {/* hero */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/founder/hero-graded.jpg"
              alt="Johnny, founder of 25 Two Life, with his arms raised above the city"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_22%]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.95) 100%)',
              }}
            />
          </div>
          <div
            className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10"
            style={{ paddingBlock: 'clamp(6rem,16vw,14rem)' }}
          >
            <p className="eyebrow text-orange" data-reveal>
              The man behind the number
            </p>
            <h1
              className="display mt-5 leading-[0.82] text-off-white"
              style={{ fontSize: 'clamp(3rem,11vw,10rem)', letterSpacing: '-0.03em' }}
              data-reveal
            >
              THEY GAVE ME 25.
              <br />
              <span className="font-brush text-orange">I chose life.</span>
            </h1>
            <p
              className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-gray md:text-lg"
              data-reveal
            >
              The sentence ended. The story didn&apos;t. This is how a number became
              a beginning.
            </p>
          </div>
        </section>

        {/* chapters */}
        <section className="w-full border-t border-border bg-black-raised">
          <div className="mx-auto max-w-[1100px] px-5 md:px-10">
            {CHAPTERS.map((c, i) => (
              <article
                key={c.no}
                className="grid gap-8 border-b border-border py-16 md:grid-cols-[auto_1fr] md:gap-14 md:py-24"
              >
                <div className="flex items-start gap-4 md:flex-col md:gap-2">
                  <span
                    className="display text-orange"
                    style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 0.8 }}
                    data-reveal
                  >
                    {c.no}
                  </span>
                  <span className="eyebrow pt-3 text-muted-gray md:pt-0">
                    {c.kicker}
                  </span>
                </div>
                <div>
                  <h2
                    className="display text-balance text-off-white"
                    style={{ fontSize: 'clamp(1.75rem,4.5vw,3.5rem)', lineHeight: 0.95 }}
                    data-reveal
                  >
                    {c.title}
                  </h2>
                  <div className="mt-6 space-y-5">
                    {c.body.map((p, j) => (
                      <p
                        key={j}
                        className="max-w-2xl text-pretty leading-relaxed text-muted-gray md:text-lg"
                        data-reveal
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* pull quote */}
        <section className="w-full border-b border-border">
          <div
            className="mx-auto max-w-[1000px] px-5 text-center md:px-10"
            style={{ paddingBlock: 'clamp(5rem,12vw,11rem)' }}
          >
            <p
              className="display text-balance text-off-white"
              style={{ fontSize: 'clamp(2rem,6vw,5rem)', lineHeight: 0.95 }}
              data-reveal
            >
              YOUR PAST MAY EXPLAIN YOU.
              <br />
              <span className="text-gray-ind">IT DOESN&apos;T HAVE TO</span>{' '}
              <span className="text-orange">DEFINE YOU.</span>
            </p>
          </div>
        </section>

        {/* legacy image + closing */}
        <section className="w-full bg-black-raised">
          <div className="mx-auto grid max-w-[1440px] items-stretch gap-0 px-0 lg:grid-cols-2">
            <div className="relative min-h-[60vh] overflow-hidden">
              <Image
              src="/images/founder/family-graded.jpg"
              alt="Johnny with family — the legacy he is building"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.6) 100%)',
                }}
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-24">
              <p className="eyebrow text-orange" data-reveal>
                Your story. Your legacy.
              </p>
              <h2
                className="display mt-5 text-balance text-off-white"
                style={{ fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: 0.92 }}
                data-reveal
              >
                25 YEARS DOWN.
                <br />A LIFETIME TO GO.
              </h2>
              <p
                className="mt-7 max-w-md text-pretty leading-relaxed text-muted-gray md:text-lg"
                data-reveal
              >
                The mission now is simple — show the counted-out what the other side
                looks like, and build something they can wear, read, and believe in.
              </p>
              <div className="mt-9 flex flex-wrap gap-4" data-reveal>
                <Link
                  href="/shop"
                  className="btn-orange eyebrow flex min-h-[52px] items-center justify-center rounded-sm px-8"
                >
                  SHOP THE FIRST DROP
                </Link>
                <Link
                  href="/#join"
                  className="btn-ghost eyebrow flex min-h-[52px] items-center justify-center rounded-sm px-8"
                >
                  JOIN THE MOVEMENT
                </Link>
              </div>
              <p className="font-brush mt-12 text-4xl text-orange" data-reveal>
                built through it.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
