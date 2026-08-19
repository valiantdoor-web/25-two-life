import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const THEMES = [
  'Relationships',
  'Anger',
  'Accountability',
  'Freedom',
  'Fatherhood',
  'Reentry',
  'Emotional Growth',
  'Second Chances',
]

export function Podcast() {
  return (
    <section id="conversations" className="w-full border-t border-border bg-black-raised" style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="display text-off-white" style={{ fontSize: 'clamp(2.5rem,7vw,6.5rem)' }}>
            <span className="block" data-reveal>Real conversations.</span>
            <span className="block text-orange" data-reveal>Built on lived experience.</span>
          </h2>

          <div className="flex flex-wrap gap-2" data-reveal>
            {THEMES.map((t) => (
              <span key={t} className="eyebrow rounded-sm border border-border px-3 py-2 text-muted-gray">{t}</span>
            ))}
          </div>
        </div>

        <div className="group relative aspect-video w-full overflow-hidden bg-charcoal" data-reveal-img>
          <Image src="/images/podcast.png" alt="25 Two Life Conversations" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <div className="max-w-2xl">
              <p className="eyebrow text-orange">Conversations / Coming Soon</p>
              <p className="display mt-4 text-3xl text-off-white md:text-5xl">Real stories. Real experience. Real change.</p>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-gray md:text-base">Conversations is being built as a space for honest discussions about accountability, emotional growth, relationships, reentry, fatherhood, freedom and the work required to change a life.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border">
          {['Accountability', 'Reentry & Responsibility', 'Relationships & Emotional Growth'].map((title, i) => (
            <div key={title} className="flex items-center justify-between gap-4 border-b border-border py-6">
              <div className="flex items-baseline gap-5 md:gap-8"><span className="eyebrow w-14 shrink-0 text-orange">0{i + 1}</span><div><h3 className="display text-2xl text-off-white md:text-4xl">{title}</h3><p className="mt-1 text-sm text-muted-gray">A core theme for future 25 Two Life conversations.</p></div></div>
            </div>
          ))}
        </div>

        <div className="mt-12" data-reveal><a href="#join" className="btn-ghost eyebrow inline-flex min-h-[52px] items-center gap-3 rounded-sm px-8 py-4">FOLLOW THE PROJECT<ArrowRight className="size-4 text-orange" /></a></div>
      </div>
    </section>
  )
}
