'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'
import { PRODUCTS, type Product } from '@/lib/products'

export function ShopGrid() {
  const [active, setActive] = useState<Product | null>(null)
  const [shot, setShot] = useState(0)
  const open = (p: Product) => { setActive(p); setShot(0) }
  const gallery = active?.gallery?.length ? active.gallery : active ? [active.img] : []
  const activeImg = gallery[Math.min(shot, Math.max(gallery.length - 1, 0))]

  return (
    <><div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-2">{PRODUCTS.map((p, i) => (
      <article key={p.slug} className="group relative bg-charcoal" data-reveal><div className="product-stage relative aspect-[4/5] overflow-hidden"><Image src={p.img} alt={`${p.name} concept`} fill sizes="(max-width:640px) 100vw, 50vw" className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04] md:p-10" /><span className="eyebrow absolute left-5 top-5 text-muted-gray">{String(i + 1).padStart(2, '0')}</span>{p.tag && <span className="eyebrow absolute right-5 top-5 text-orange">{p.tag}</span>}<button type="button" onClick={() => open(p)} className="btn-ghost eyebrow absolute inset-x-5 bottom-5 flex min-h-[48px] items-center justify-center rounded-sm opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100">VIEW CONCEPT</button></div><div className="flex items-start justify-between gap-4 border-t border-border p-6"><div><p className="eyebrow text-muted-gray">{p.category}</p><h3 className="display mt-2 text-2xl text-off-white">{p.name}</h3><p className="mt-2 text-sm text-muted-gray">{p.color}</p></div><span className="eyebrow shrink-0 text-orange">{p.price}</span></div></article>
    ))}</div>

    {active && <div className="fixed inset-0 z-[60] flex" role="dialog" aria-modal="true" aria-label={`${active.name} concept view`}><button type="button" aria-label="Close concept view" onClick={() => setActive(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" /><div className="relative ml-auto flex h-full w-full max-w-xl flex-col overflow-y-auto bg-black-raised"><div className="flex items-center justify-between border-b border-border px-6 py-5"><span className="eyebrow text-orange">{active.tag}</span><button type="button" onClick={() => setActive(null)} aria-label="Close" className="flex size-11 items-center justify-center text-off-white transition-colors hover:text-orange"><X className="size-6" /></button></div><div className="product-stage relative aspect-square"><Image key={activeImg} src={activeImg} alt={`${active.name}, concept view ${shot + 1}`} fill sizes="576px" className="object-contain p-8 duration-500 animate-in fade-in" /></div>{gallery.length > 1 && <div className="flex gap-2 overflow-x-auto border-b border-border p-3">{gallery.map((g, i) => <button key={g} type="button" aria-label={`View ${i + 1} of ${active.name}`} aria-pressed={i === shot} onClick={() => setShot(i)} className="product-stage relative aspect-square h-16 w-16 shrink-0 overflow-hidden rounded-sm border transition-colors" style={{ borderColor: i === shot ? 'var(--orange)' : 'rgba(255,255,255,0.12)' }}><Image src={g} alt="" fill sizes="64px" className="object-contain p-1" /></button>)}</div>}<div className="flex flex-1 flex-col p-6 md:p-8"><h3 className="display text-3xl text-off-white">{active.name}</h3><div className="mt-4 flex items-center gap-4"><span className="eyebrow text-orange">{active.price}</span><span className="h-4 w-px bg-border" /><span className="eyebrow text-muted-gray">{active.color}</span></div><div className="my-7 h-px w-16 rule-orange" /><ul className="space-y-3">{active.details.map((d) => <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-gray"><span className="mt-2 h-1 w-1 shrink-0 bg-orange" /><span className="text-pretty">{d}</span></li>)}</ul><div className="mt-auto border border-border p-5"><p className="eyebrow text-orange">Concept Only</p><p className="mt-2 text-sm leading-relaxed text-muted-gray">This item is not presented as available for purchase. Live pricing, inventory and fulfillment will be added only when confirmed.</p></div></div></div></div>}
    </>
  )
}
