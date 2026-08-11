import Image from 'next/image'

const GRAPHICS = [
  {
    src: '/images/brand/past-made-me.png',
    alt: 'Past made me. Pain didn\u2019t break me.',
    w: 220,
    h: 300,
  },
  {
    src: '/images/brand/built-through-it.png',
    alt: 'Built through it \u2014 25 Two Life',
    w: 210,
    h: 152,
  },
  {
    src: '/images/brand/not-my-past.png',
    alt: 'Not my past. My purpose. \u2014 25 Two Life',
    w: 224,
    h: 150,
  },
]

export function BrandGraphics() {
  return (
    <section className="w-full border-y border-border bg-black-raised py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[0.9fr_1.4fr] md:px-10 lg:gap-20">
        <div>
          <p className="eyebrow text-orange" data-reveal>
            Brand Language
          </p>
          <h2
            className="display mt-5 text-4xl leading-[0.95] text-off-white md:text-5xl"
            data-reveal
          >
            REAL RECOGNIZES REAL.
          </h2>
          <div className="mt-6 max-w-md space-y-1.5 text-sm leading-relaxed text-muted-gray" data-reveal>
            <p>Discipline over everything.</p>
            <p>From survival to purpose.</p>
            <p>We don&apos;t make excuses. We make changes.</p>
          </div>
          <p className="eyebrow mt-8 text-gray-ind" data-reveal>
            Workwear roots. Street culture edge. Purpose driven.
          </p>
        </div>

        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3">
          {GRAPHICS.map((g) => (
            <div
              key={g.src}
              className="flex items-center justify-center first:col-span-2 first:justify-start sm:first:col-span-1"
              data-reveal
            >
              <Image
                src={g.src || '/placeholder.svg'}
                alt={g.alt}
                width={g.w}
                height={g.h}
                className="h-auto w-full max-w-[260px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
