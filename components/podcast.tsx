import Image from 'next/image'
import { Play, ArrowRight } from 'lucide-react'

const EPISODES = [
  { ep: 'EP. 03', title: 'Accountability', theme: 'Owning the harm you caused' },
  { ep: 'EP. 02', title: 'Fatherhood From a Distance', theme: 'Parenting through the glass' },
  { ep: 'EP. 01', title: 'Starting Over at Zero', theme: 'The first 90 days of freedom' },
]

const THEMES = [
  'Relationships',
  'Anger',
  'Accountability',
  'Freedom',
  'Fatherhood',
  'Reentry',
  'Emotional Intelligence',
  'Second Chances',
]

export function Podcast() {
  return (
    <section
      id="podcast"
      className="w-full border-t border-border bg-black-raised"
      style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2
            className="display text-off-white"
            style={{ fontSize: 'clamp(2.5rem,7vw,6.5rem)' }}
          >
            <span className="block" data-reveal>
              25 years.
            </span>
            <span className="block text-orange" data-reveal>
              A lot to talk about.
            </span>
          </h2>

          <div className="flex flex-wrap gap-2" data-reveal>
            {THEMES.map((t) => (
              <span
                key={t}
                className="eyebrow rounded-sm border border-border px-3 py-2 text-muted-gray"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* player */}
        <div className="group relative aspect-video w-full overflow-hidden bg-charcoal" data-reveal-img>
          <Image
            src="/images/podcast.png"
            alt="Founder recording the 25 Two Life podcast"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <button
            type="button"
            aria-label="Play latest episode"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex size-20 items-center justify-center rounded-full bg-orange text-black transition-transform duration-300 group-hover:scale-110 md:size-24">
              <Play className="size-8 translate-x-0.5" fill="currentColor" />
            </span>
          </button>
          <span className="eyebrow absolute bottom-5 left-5 text-off-white">
            Latest Episode — The Reentry Diaries
          </span>
        </div>

        {/* episode list */}
        <div className="mt-12 border-t border-border">
          {EPISODES.map((e) => (
            <a
              key={e.ep}
              href="#podcast"
              className="group flex items-center justify-between gap-4 border-b border-border py-6"
            >
              <div className="flex items-baseline gap-5 md:gap-8">
                <span className="eyebrow w-14 shrink-0 text-orange">{e.ep}</span>
                <div>
                  <h3 className="display text-2xl text-off-white md:text-4xl">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-gray">{e.theme}</p>
                </div>
              </div>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-off-white transition-colors group-hover:border-orange group-hover:text-orange">
                <Play className="size-4 translate-x-0.5" fill="currentColor" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12" data-reveal>
          <a
            href="#podcast"
            className="btn-ghost eyebrow inline-flex min-h-[52px] items-center gap-3 rounded-sm px-8 py-4"
          >
            WATCH / LISTEN
            <ArrowRight className="size-4 text-orange" />
          </a>
        </div>
      </div>
    </section>
  )
}
