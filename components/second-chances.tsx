import { ArrowRight } from 'lucide-react'
import { BadgeEmblem } from './badge-emblem'

export function SecondChances() {
  return (
    <section
      id="people"
      className="relative w-full overflow-hidden border-t border-border bg-black-raised texture-concrete"
      style={{ paddingBlock: 'clamp(6rem,13vw,12rem)' }}
    >
      {/* oversized rotating emblem, low opacity, background */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.14]"
        aria-hidden="true"
      >
        <BadgeEmblem spin className="h-[min(120vw,900px)] w-[min(120vw,900px)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 text-center md:px-10">
        <div className="mx-auto mb-10 w-28 md:w-32" data-reveal>
          <BadgeEmblem spin className="h-full w-full" />
        </div>

        <h2
          className="display mx-auto max-w-4xl text-off-white"
          style={{ fontSize: 'clamp(2.75rem,8vw,7rem)' }}
        >
          <span className="block" data-reveal>
            Second chances
          </span>
          <span className="block text-orange" data-reveal>
            change everything.
          </span>
        </h2>

        <p
          className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-gray"
          data-reveal
        >
          We interview, feature and highlight the people who rebuilt their lives
          after difficult circumstances — the underestimated, the written-off,
          the ones who did the work when nobody was watching.
        </p>

        <a
          href="#journal"
          className="btn-orange eyebrow mx-auto mt-10 inline-flex min-h-[52px] items-center gap-3 rounded-sm px-8 py-4"
          data-reveal
        >
          MEET THE PEOPLE
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  )
}
