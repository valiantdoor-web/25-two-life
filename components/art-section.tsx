import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const PIECES = [
  { img: '/images/art-01.png', label: 'Unchained', ratio: 'aspect-[4/5]' },
  { img: '/images/art-03.png', label: 'Scarred / Calm', ratio: 'aspect-[3/4]' },
  { img: '/images/art-02.png', label: 'Time & Roots', ratio: 'aspect-[4/5]' },
  { img: '/images/journal-04.png', label: 'The Studio', ratio: 'aspect-[3/4]' },
]

export function ArtSection() {
  return (
    <section
      id="art"
      className="w-full border-t border-border"
      style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 max-w-4xl">
          <p className="eyebrow mb-8 text-orange" data-reveal>
            The Art
          </p>
          <h2
            className="display text-off-white"
            style={{ fontSize: 'clamp(2.25rem,6.5vw,6rem)' }}
          >
            <span className="block" data-reveal>
              The things you can&apos;t
            </span>
            <span className="block" data-reveal>
              say out loud,
            </span>
            <span className="block text-orange" data-reveal>
              you can draw.
            </span>
          </h2>
        </div>

        {/* masonry via CSS columns */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {PIECES.map((p, i) => (
            <figure
              key={p.label}
              className="group relative block w-full break-inside-avoid overflow-hidden bg-charcoal"
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
              </div>
              <figcaption className="eyebrow absolute bottom-4 left-4 flex items-center gap-3 text-off-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="h-px w-6 rule-orange" />
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12" data-reveal>
          <a
            href="#art"
            className="link-underline eyebrow inline-flex items-center gap-3 text-off-white"
          >
            VIEW THE ART
            <ArrowRight className="size-4 text-orange" />
          </a>
        </div>
      </div>
    </section>
  )
}
