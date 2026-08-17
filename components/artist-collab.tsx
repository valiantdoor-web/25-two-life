import { ArrowRight } from 'lucide-react'

const APPLICATIONS = ['Garment details', 'Prints', 'Packaging', 'Limited creative projects']

export function ArtistCollab() {
  return (
    <section className="relative w-full overflow-hidden border-t border-border bg-black-raised texture-concrete" style={{ paddingBlock: 'clamp(6rem,13vw,12rem)' }}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
        <div><p className="eyebrow mb-8 text-orange" data-reveal>Future Artist Series</p><div className="relative" data-reveal><p className="font-brush leading-none text-off-white" style={{ fontSize: 'clamp(2rem,6vw,4rem)' }}>creative</p><p className="font-brush leading-[0.9] text-orange" style={{ fontSize: 'clamp(3.5rem,13vw,9rem)' }}>collaboration</p></div><div className="my-8 h-px w-24 rule-orange" data-reveal-line /><p className="display text-off-white" style={{ fontSize: 'clamp(1.25rem,2.4vw,2rem)' }} data-reveal>25 Two Life <span className="text-orange">x</span> future collaborators</p><p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-gray" data-reveal>This space preserves the original collaboration layout without presenting an unconfirmed partnership as real. Future artist work will be named here only when the collaboration and assets are ready to publish.</p><a href="/art" className="btn-orange eyebrow mt-9 inline-flex min-h-[52px] items-center gap-3 rounded-sm px-8 py-4" data-reveal>EXPLORE THE ART<ArrowRight className="size-4" /></a></div>
        <div className="border border-border bg-charcoal p-8 md:p-10" data-reveal><p className="eyebrow mb-6 text-muted-gray">Possible Formats</p><ul>{APPLICATIONS.map((a, i) => <li key={a} className="flex items-center justify-between border-b border-border py-5 last:border-b-0"><span className="display text-2xl text-off-white md:text-3xl">{a}</span><span className="eyebrow text-orange">{String(i + 1).padStart(2, '0')}</span></li>)}</ul><p className="font-brush mt-8 text-right text-3xl text-muted-gray">when it&apos;s real</p></div>
      </div></div>
    </section>
  )
}
