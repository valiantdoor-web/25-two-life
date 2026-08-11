import { ArrowRight } from 'lucide-react'

const APPLICATIONS = [
  'Inside neck print',
  'Garment label',
  'Packaging card',
  'Limited poster',
]

export function ArtistCollab() {
  return (
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

            {/* hand-painted signature */}
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
                ’25
              </span>
            </div>

            <div className="my-8 h-px w-24 rule-orange" data-reveal-line />

            <p
              className="display text-off-white"
              style={{ fontSize: 'clamp(1.25rem,2.4vw,2rem)' }}
              data-reveal
            >
              White Boy Rick <span className="text-orange">x</span> 25 Two Life
            </p>

            <p
              className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-gray"
              data-reveal
            >
              A limited artist capsule. Hand-painted marks, signed and numbered,
              applied where you least expect them — a real fashion collaboration
              with a wink for the ones paying attention.
            </p>

            <a
              href="/art"
              className="btn-orange eyebrow mt-9 inline-flex min-h-[52px] items-center gap-3 rounded-sm px-8 py-4"
              data-reveal
            >
              EXPLORE THE ARTIST SERIES
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* application list as an editorial label card */}
          <div
            className="border border-border bg-charcoal p-8 md:p-10"
            data-reveal
          >
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
  )
}
