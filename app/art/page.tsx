import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'The Art — 25 Two Life',
  description: 'Art, expression and visual concepts connected to the 25 Two Life mission. Concept assets remain clearly identified until their provenance and publication details are confirmed.',
}

const PIECES = [
  { img: '/images/art-01.png', label: 'Unchained', ratio: 'aspect-[4/5]' },
  { img: '/images/art-04.png', label: 'Free Hands', ratio: 'aspect-[3/4]' },
  { img: '/images/art-03.png', label: 'Scarred / Calm', ratio: 'aspect-[3/4]' },
  { img: '/images/art-02.png', label: 'Time & Roots', ratio: 'aspect-[4/5]' },
  { img: '/images/art-05.png', label: 'Doorway', ratio: 'aspect-[4/5]' },
  { img: '/images/journal-04.png', label: 'The Studio', ratio: 'aspect-[3/4]' },
]

export default function ArtPage() {
  return (
    <><Reveal /><SiteHeader /><main className="pt-[68px]">
      <section className="w-full border-b border-border" style={{ paddingBlock: 'clamp(4rem,10vw,8rem)' }}>
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="eyebrow text-orange" data-reveal>The Art</p>
          <h1 className="display mt-5 text-balance text-off-white" style={{ fontSize: 'clamp(2.5rem,9vw,8rem)', lineHeight: 0.84, letterSpacing: '-0.03em' }} data-reveal>THE THINGS YOU CAN&apos;T<br />SAY OUT LOUD, <span className="text-orange">YOU CAN DRAW.</span></h1>
          <p className="mt-8 max-w-2xl text-pretty leading-relaxed text-muted-gray md:text-lg" data-reveal>Expression can be part of the work of understanding yourself. This gallery preserves the existing visual direction while the project documents which pieces are original work, concept imagery or future creative assets.</p>
        </div>
      </section>

      <section className="w-full bg-black-raised" style={{ paddingBlock: 'clamp(3rem,7vw,6rem)' }}><div className="mx-auto max-w-[1300px] px-5 md:px-10"><div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">{PIECES.map((p, i) => (
        <figure key={p.label} className="group relative block w-full break-inside-avoid overflow-hidden border border-border bg-charcoal" data-reveal-img style={{ ['--reveal-delay' as string]: `${(i % 3) * 80}ms` }}><div className={`relative w-full ${p.ratio}`}><Image src={p.img} alt={`${p.label} — visual concept`} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" /></div><figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between opacity-0 transition-opacity duration-500 group-hover:opacity-100"><span className="eyebrow flex items-center gap-3 text-off-white"><span className="h-px w-6 rule-orange" />{p.label}</span><span className="eyebrow text-muted-gray">Visual concept</span></figcaption></figure>
      ))}</div></div></section>

      <section className="relative w-full overflow-hidden border-t border-border bg-black-raised texture-concrete" style={{ paddingBlock: 'clamp(6rem,13vw,12rem)' }}><div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow mb-8 text-orange" data-reveal>Future Collaborations</p><h2 className="display text-off-white" style={{ fontSize: 'clamp(2.5rem,7vw,6rem)' }} data-reveal>REAL PARTNERSHIPS.<br /><span className="text-orange">ONLY WHEN THEY&apos;RE REAL.</span></h2><p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-gray" data-reveal>The existing layout is reserved for future artist collaborations. Names, signatures, products and partnership claims will only appear after they are confirmed and ready to publish.</p></div></div></section>
    </main><SiteFooter /></>
  )
}
