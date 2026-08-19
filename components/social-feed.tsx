import Image from 'next/image'

const POSTS = [
  { img: '/images/social-01.png', tag: 'Story' },
  { img: '/images/social-02.png', tag: 'Brand' },
  { img: '/images/social-03.png', tag: 'People' },
  { img: '/images/social-04.png', tag: 'Behind the Mission' },
]

export function SocialFeed() {
  return (
    <section className="w-full border-t border-border" style={{ paddingBlock: 'clamp(5rem,11vw,9rem)' }}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="display text-off-white" style={{ fontSize: 'clamp(2.25rem,6vw,5rem)' }}><span className="block" data-reveal>25 Two Life</span><span className="block text-orange" data-reveal>visual direction.</span></h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-gray" data-reveal>Story, identity, people and purpose, a visual language built around the work of change and the life that follows.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{POSTS.map((p, i) => (
          <figure key={p.img} className="group relative block aspect-[9/16] overflow-hidden bg-charcoal" data-reveal-img style={{ ['--reveal-delay' as string]: `${(i % 4) * 70}ms` }}><Image src={p.img} alt={`25 Two Life, ${p.tag}`} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" /><div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, transparent 30%, rgba(10,10,10,0.8) 100%)' }} /><figcaption className="eyebrow absolute inset-x-3 bottom-3 text-off-white">{p.tag}</figcaption></figure>
        ))}</div>
      </div>
    </section>
  )
}
