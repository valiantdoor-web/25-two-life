import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'The Story — 25 Two Life',
  description: 'Johnny Sierra was sentenced to 40 years to life: 15 years to life plus a consecutive 25-year firearm enhancement. 25 Two Life is the story of accountability, transformation and service that followed.',
}

const CHAPTERS = [
  {
    no: '01', kicker: 'The Sentence', title: '40 YEARS TO LIFE.', body: [
      'The sentence was 40 years to life: 15 years to life plus a consecutive 25-year firearm enhancement. That distinction matters. The name 25 Two Life comes from the 25-year enhancement — it does not mean the entire sentence was 25 years.',
      'The conduct that led to that sentence caused real harm. This story does not minimize it, excuse it or turn incarceration into an accomplishment. The starting point is responsibility for the choices that put other people in harm’s way and changed lives.',
    ],
  },
  {
    no: '02', kicker: 'The Reckoning', title: 'ACCOUNTABILITY BEFORE ANYTHING.', body: [
      'Explanation is not the same as accountability. Understanding the past can provide context, but change required owning the decisions, the harm and the thinking that made those decisions possible.',
      'That reckoning was not a single breakthrough. It became a practice: honesty, emotional regulation, self-respect, discipline and consistency between words and actions.',
    ],
  },
  {
    no: '03', kicker: 'The Work', title: 'CHANGE HAD TO BECOME BEHAVIOR.', body: [
      'Education, counseling, self-reflection and learning to sit with discomfort became tools for changing long-established patterns. Growth meant more than knowing better. It meant responding differently when old thinking, anger or pressure showed up.',
      'The standard became long-term behavioral change: taking responsibility, following through, accepting correction, serving others and making the next right decision when nobody was watching.',
    ],
  },
  {
    no: '04', kicker: 'The Rebuild', title: 'A SECOND CHANCE IS WHAT YOU DO WITH IT.', body: [
      'Freedom did not erase the past or complete the work. It created a new responsibility: to live in a way that matched the person Johnny said he had become.',
      '25 Two Life grew from that responsibility. The 25 is rooted in the sentence. The Life is about what came afterward — family, purpose, service, work and the commitment to help other people believe that sustained change is possible.',
    ],
  },
]

export default function StoryPage() {
  return (
    <><Reveal /><SiteHeader /><main className="pt-[68px]">
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0"><Image src="/images/founder/hero-graded.jpg" alt="Johnny Sierra, founder of 25 Two Life" fill priority sizes="100vw" className="object-cover object-[center_22%]" /><div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.95) 100%)' }} /></div>
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10" style={{ paddingBlock: 'clamp(6rem,16vw,14rem)' }}>
          <p className="eyebrow text-orange" data-reveal>The man behind the number</p>
          <h1 className="display mt-5 leading-[0.82] text-off-white" style={{ fontSize: 'clamp(3rem,11vw,10rem)', letterSpacing: '-0.03em' }} data-reveal>
            40 YEARS TO LIFE.
            <br /><span className="font-brush text-orange">more than a sentence.</span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-gray md:text-lg" data-reveal>The 25-year firearm enhancement gave the brand its name. Accountability, transformation and service gave the name its purpose.</p>
        </div>
      </section>

      <section className="w-full border-t border-border bg-black-raised"><div className="mx-auto max-w-[1100px] px-5 md:px-10">{CHAPTERS.map((c) => (
        <article key={c.no} className="grid gap-8 border-b border-border py-16 md:grid-cols-[auto_1fr] md:gap-14 md:py-24">
          <div className="flex items-start gap-4 md:flex-col md:gap-2"><span className="display text-orange" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: 0.8 }} data-reveal>{c.no}</span><span className="eyebrow pt-3 text-muted-gray md:pt-0">{c.kicker}</span></div>
          <div><h2 className="display text-balance text-off-white" style={{ fontSize: 'clamp(1.75rem,4.5vw,3.5rem)', lineHeight: 0.95 }} data-reveal>{c.title}</h2><div className="mt-6 space-y-5">{c.body.map((p, j) => <p key={j} className="max-w-2xl text-pretty leading-relaxed text-muted-gray md:text-lg" data-reveal>{p}</p>)}</div></div>
        </article>
      ))}</div></section>

      <section className="w-full border-b border-border"><div className="mx-auto max-w-[1000px] px-5 text-center md:px-10" style={{ paddingBlock: 'clamp(5rem,12vw,11rem)' }}><p className="display text-balance text-off-white" style={{ fontSize: 'clamp(2rem,6vw,5rem)', lineHeight: 0.95 }} data-reveal>YOUR PAST MAY EXPLAIN YOU.<br /><span className="text-gray-ind">IT DOESN&apos;T HAVE TO</span>{' '}<span className="text-orange">DEFINE YOU.</span></p></div></section>

      <section className="w-full bg-black-raised"><div className="mx-auto grid max-w-[1440px] items-stretch gap-0 px-0 lg:grid-cols-2">
        <div className="relative min-h-[60vh] overflow-hidden"><Image src="/images/founder/family-graded.jpg" alt="Johnny with family — part of the life he is building" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /><div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.6) 100%)' }} /></div>
        <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-24"><p className="eyebrow text-orange" data-reveal>Your story. Your legacy.</p><h2 className="display mt-5 text-balance text-off-white" style={{ fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: 0.92 }} data-reveal>THE PAST IS REAL.<br />SO IS THE RESPONSIBILITY TO CHANGE.</h2><p className="mt-7 max-w-md text-pretty leading-relaxed text-muted-gray md:text-lg" data-reveal>The mission is to show that accountability and hope can exist together — and that a changed life is demonstrated through consistent behavior, service and what a person builds from here.</p><div className="mt-9 flex flex-wrap gap-4" data-reveal><Link href="/#join" className="btn-orange eyebrow flex min-h-[52px] items-center justify-center rounded-sm px-8">JOIN THE MOVEMENT</Link><Link href="/#people" className="btn-ghost eyebrow flex min-h-[52px] items-center justify-center rounded-sm px-8">THE PEOPLE</Link></div><p className="font-brush mt-12 text-4xl text-orange" data-reveal>built through it.</p></div>
      </div></section>
    </main><SiteFooter /></>
  )
}
