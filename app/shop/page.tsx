import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ShopGrid } from '@/components/shop-grid'

export const metadata: Metadata = {
  title: 'Shop — Drop 001 | 25 Two Life',
  description:
    'Heavyweight workwear with the story stitched in. Drop 001 from 25 Two Life — built to work, built to live.',
}

export default function ShopPage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main className="pt-[68px]">
        <section
          className="w-full border-b border-border"
          style={{ paddingBlock: 'clamp(4rem,10vw,8rem)' }}
        >
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <p className="eyebrow text-orange" data-reveal>
              25 Two Life / Drop 001
            </p>
            <h1
              className="display mt-5 text-balance text-off-white"
              style={{ fontSize: 'clamp(3rem,10vw,9rem)', lineHeight: 0.82, letterSpacing: '-0.03em' }}
              data-reveal
            >
              BUILT TO WORK.
              <br />
              <span className="text-orange">BUILT TO LIVE.</span>
            </h1>
            <p
              className="mt-8 max-w-xl text-pretty leading-relaxed text-muted-gray md:text-lg"
              data-reveal
            >
              Heavyweight pieces with the story stitched in — branding that rewards
              a closer look. Every detail earned.
            </p>
          </div>
        </section>

        <section
          className="w-full bg-black-raised"
          style={{ paddingBlock: 'clamp(3rem,7vw,6rem)' }}
        >
          <div className="mx-auto max-w-[1200px] px-5 md:px-10">
            <ShopGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
