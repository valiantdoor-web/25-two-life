import Image from 'next/image'

type Story = { num: string; category: string; title: string; date: string; teaser: string; img: string }

const STORIES: Story[] = [
  { num: '01', category: 'Perspective', title: 'Second Chances', date: 'Planned', teaser: 'A future reflection on why a second chance carries responsibility, not entitlement.', img: '/images/journal-01.png' },
  { num: '02', category: 'Accountability', title: 'The Work of Change', date: 'Planned', teaser: 'A future piece about moving beyond explanation and changing the behaviors that shape a life.', img: '/images/journal-02.png' },
  { num: '03', category: 'Reentry', title: 'Inside / Outside', date: 'Planned', teaser: 'A future reflection on returning to the community and continuing the work after incarceration.', img: '/images/journal-03.png' },
  { num: '04', category: 'Expression', title: 'Art & Expression', date: 'Planned', teaser: 'A future look at expression, emotional growth and finding constructive ways to communicate.', img: '/images/journal-04.png' },
  { num: '05', category: 'Conversation', title: 'Real Talk', date: 'Planned', teaser: 'Future conversations about anger, relationships, responsibility, freedom and starting over.', img: '/images/journal-05.png' },
  { num: '06', category: 'Practice', title: 'The Rebuild', date: 'Planned', teaser: 'A future piece about the ordinary disciplines that turn intention into long-term behavioral change.', img: '/images/journal-06.png' },
]

export function Journal() {
  return (
    <section id="journal" className="w-full border-t border-border" style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display text-off-white" style={{ fontSize: 'clamp(2.25rem,6vw,5.5rem)' }}>
            <span className="block" data-reveal>Accountability.</span>
            <span className="block" data-reveal>Perspective.</span>
            <span className="block text-orange" data-reveal>The long rebuild.</span>
          </h2>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-gray" data-reveal>The Journal is being developed as a home for original reflections, interviews and lessons. Entries below are editorial directions, not published articles.</p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <article key={s.num} data-reveal style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}>
              <div className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal">
                  <Image src={s.img} alt={`${s.title} concept image`} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(10,10,10,0.85) 100%)' }} />
                  <span className="display absolute left-4 top-4 text-3xl text-off-white/80">{s.num}</span>
                  <span className="eyebrow absolute bottom-4 left-4 text-orange">{s.category}</span>
                </div>
                <div className="mt-5">
                  <div className="flex items-baseline justify-between gap-4"><h3 className="display text-off-white" style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}>{s.title}</h3><span className="eyebrow shrink-0 text-muted-gray">{s.date}</span></div>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-gray">{s.teaser}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
