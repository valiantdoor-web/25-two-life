import Image from 'next/image'

type Story = { num: string; category: string; title: string; teaser: string; img: string }

const STORIES: Story[] = [
  { num: '01', category: 'Perspective', title: 'Second Chances', teaser: 'Why a second chance carries responsibility, not entitlement — and what it means to honor the opportunity to live differently.', img: '/images/journal-01.png' },
  { num: '02', category: 'Accountability', title: 'The Work of Change', teaser: 'Moving beyond explanation and into the daily behaviors that make accountability visible.', img: '/images/journal-02.png' },
  { num: '03', category: 'Reentry', title: 'Inside / Outside', teaser: 'Returning to the community is not the end of the work. It is where a different kind of responsibility begins.', img: '/images/journal-03.png' },
  { num: '04', category: 'Expression', title: 'Art & Expression', teaser: 'Expression, emotional growth and learning constructive ways to communicate what once came out through destructive behavior.', img: '/images/journal-04.png' },
  { num: '05', category: 'Conversation', title: 'Real Talk', teaser: 'Honest conversations about anger, relationships, responsibility, freedom and what starting over actually requires.', img: '/images/journal-05.png' },
  { num: '06', category: 'Practice', title: 'The Rebuild', teaser: 'The ordinary disciplines that turn intention into consistency and consistency into long-term behavioral change.', img: '/images/journal-06.png' },
]

export function Journal() {
  return (
    <section id="journal" className="w-full border-t border-border" style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display text-off-white" style={{ fontSize: 'clamp(2.25rem,6vw,5.5rem)' }}><span className="block" data-reveal>Accountability.</span><span className="block" data-reveal>Perspective.</span><span className="block text-orange" data-reveal>The long rebuild.</span></h2>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-gray" data-reveal>The Journal is where 25 Two Life will explore the ideas behind the mission — accountability, reentry, emotional growth, relationships, expression and the discipline of lasting change.</p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{STORIES.map((s, i) => (
          <article key={s.num} data-reveal style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}><div className="group block"><div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal"><Image src={s.img} alt={`${s.title} — 25 Two Life editorial theme`} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" /><div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(10,10,10,0.85) 100%)' }} /><span className="display absolute left-4 top-4 text-3xl text-off-white/80">{s.num}</span><span className="eyebrow absolute bottom-4 left-4 text-orange">{s.category}</span></div><div className="mt-5"><h3 className="display text-off-white" style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}>{s.title}</h3><p className="mt-4 text-pretty text-sm leading-relaxed text-muted-gray">{s.teaser}</p></div></div></article>
        ))}</div>
      </div>
    </section>
  )
}
