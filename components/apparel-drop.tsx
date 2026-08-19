'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'

export function ApparelDrop() {
  const [index, setIndex] = useState(0)
  const [shot, setShot] = useState(0)
  const product = PRODUCTS[index]
  const gallery = product.gallery?.length ? product.gallery : [product.img]
  const activeImg = gallery[Math.min(shot, gallery.length - 1)]
  const go = (dir: number) => { setIndex((i) => (i + dir + PRODUCTS.length) % PRODUCTS.length); setShot(0) }
  const select = (i: number) => { setIndex(i); setShot(0) }

  return (
    <section id="shop" className="w-full border-t border-border bg-black-raised" style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}><div className="mx-auto max-w-[1440px] px-5 md:px-10">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow mb-5 text-orange" data-reveal>25 Two Life / Apparel Concepts</p><h2 className="display text-off-white" style={{ fontSize: 'clamp(2.5rem,7vw,6rem)' }}><span className="block" data-reveal>Mission first.</span><span className="block text-orange" data-reveal>Product second.</span></h2></div><p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-gray" data-reveal>Existing designs are preserved as concepts while real production, inventory and fulfillment details are established.</p></div>
      <div className="grid items-start gap-px overflow-hidden border border-border bg-border md:grid-cols-2"><div className="flex flex-col bg-charcoal"><div className="product-stage relative aspect-square w-full overflow-hidden"><Image key={activeImg} src={activeImg} alt={`${product.name}, concept view ${shot + 1}`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-contain p-4 duration-500 animate-in fade-in md:p-8" priority={index === 0} /><span className="eyebrow pointer-events-none absolute right-5 top-5 rounded-sm bg-black/50 px-2 py-1 text-muted-gray backdrop-blur-sm">{String(index + 1).padStart(2, '0')} / {String(PRODUCTS.length).padStart(2, '0')}</span></div>{gallery.length > 1 && <div className="flex gap-2 overflow-x-auto border-t border-border p-3">{gallery.map((g, i) => <button key={g} type="button" aria-label={`View ${i + 1} of ${product.name}`} aria-pressed={i === shot} onClick={() => setShot(i)} className="product-stage relative aspect-square h-16 w-16 shrink-0 overflow-hidden rounded-sm border transition-colors" style={{ borderColor: i === shot ? 'var(--orange)' : 'rgba(255,255,255,0.12)' }}><Image src={g} alt="" fill sizes="64px" className="object-contain p-1" /></button>)}</div>}</div>
        <div className="flex flex-col justify-between gap-10 bg-charcoal p-8 md:p-14"><div><div className="flex items-center gap-3"><span className="eyebrow text-orange">{product.tag}</span><span className="h-3 w-px bg-border" /><span className="eyebrow text-muted-gray">{product.category}</span></div><h3 className="display mt-4 text-off-white" style={{ fontSize: 'clamp(2rem,4vw,3.25rem)', lineHeight: 1.02 }}>{product.name}</h3><div className="mt-4 flex items-center gap-4"><span className="eyebrow text-orange">{product.price}</span><span className="h-4 w-px bg-border" /><span className="eyebrow text-muted-gray">{product.color}</span></div><div className="my-8 h-px w-16 rule-orange" /><ul className="space-y-3">{product.details.map((d) => <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-gray"><span className="mt-2 h-1 w-1 shrink-0 bg-orange" /><span className="text-pretty">{d}</span></li>)}</ul></div><div className="flex flex-col gap-4"><a href="/shop" className="btn-ghost eyebrow flex min-h-[52px] items-center justify-center rounded-sm px-6 py-4">VIEW APPAREL CONCEPTS</a><div className="flex items-center justify-between border-t border-border pt-6"><div className="flex flex-wrap gap-2">{PRODUCTS.map((p, i) => <button key={p.slug} type="button" aria-label={`Show ${p.name}`} aria-pressed={i === index} onClick={() => select(i)} className="h-1 w-6 transition-colors" style={{ backgroundColor: i === index ? 'var(--orange)' : 'rgba(255,255,255,0.18)' }} />)}</div><div className="flex gap-2"><button type="button" aria-label="Previous product" onClick={() => go(-1)} className="flex size-11 items-center justify-center border border-border text-off-white transition-colors hover:border-orange hover:text-orange"><ArrowLeft className="size-4" /></button><button type="button" aria-label="Next product" onClick={() => go(1)} className="flex size-11 items-center justify-center border border-border text-off-white transition-colors hover:border-orange hover:text-orange"><ArrowRight className="size-4" /></button></div></div></div></div>
      </div>
      <div className="mt-12 flex justify-center" data-reveal><a href="/shop" className="btn-orange eyebrow inline-flex min-h-[52px] items-center gap-3 rounded-sm px-10 py-4">EXPLORE THE CONCEPTS<ArrowRight className="size-4" /></a></div>
    </div></section>
  )
}
