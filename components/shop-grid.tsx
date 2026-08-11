'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { PRODUCTS, type Product } from '@/lib/products'

export function ShopGrid() {
  const [active, setActive] = useState<Product | null>(null)

  return (
    <>
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-2">
        {PRODUCTS.map((p, i) => (
          <article key={p.slug} className="group relative bg-charcoal" data-reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
              <Image
                src={p.img}
                alt={p.name}
                fill
                sizes="(max-width:640px) 100vw, 50vw"
                className="object-contain p-10 transition-transform duration-700 ease-out group-hover:scale-[1.04] md:p-16"
              />
              <span className="eyebrow absolute left-5 top-5 text-muted-gray">
                {String(i + 1).padStart(2, '0')}
              </span>
              {p.tag && (
                <span className="eyebrow absolute right-5 top-5 text-orange">
                  {p.tag}
                </span>
              )}
              <button
                type="button"
                onClick={() => setActive(p)}
                className="btn-ghost eyebrow absolute inset-x-5 bottom-5 flex min-h-[48px] items-center justify-center rounded-sm opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
              >
                QUICK VIEW
              </button>
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-border p-6">
              <div>
                <p className="eyebrow text-muted-gray">{p.category}</p>
                <h3 className="display mt-2 text-2xl text-off-white">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-gray">{p.color}</p>
              </div>
              <span className="display shrink-0 text-xl text-orange">{p.price}</span>
            </div>
          </article>
        ))}
      </div>

      {/* quick-view drawer */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} quick view`}
        >
          <button
            type="button"
            aria-label="Close quick view"
            onClick={() => setActive(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <div className="relative ml-auto flex h-full w-full max-w-xl flex-col overflow-y-auto bg-black-raised">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <span className="eyebrow text-orange">{active.tag}</span>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="flex size-11 items-center justify-center text-off-white transition-colors hover:text-orange"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="relative aspect-square bg-charcoal">
              <Image
                src={active.img}
                alt={active.name}
                fill
                sizes="576px"
                className="object-contain p-12"
              />
            </div>

            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h3 className="display text-3xl text-off-white">{active.name}</h3>
              <div className="mt-4 flex items-center gap-4">
                <span className="display text-2xl text-orange">{active.price}</span>
                <span className="h-4 w-px bg-border" />
                <span className="eyebrow text-muted-gray">{active.color}</span>
              </div>

              <div className="my-7 h-px w-16 rule-orange" />

              <ul className="space-y-3">
                {active.details.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 text-sm leading-relaxed text-muted-gray"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 bg-orange" />
                    <span className="text-pretty">{d}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="btn-orange eyebrow mt-auto flex min-h-[56px] items-center justify-center gap-3 rounded-sm"
              >
                ADD TO CART — {active.price}
                <ArrowRight className="size-4" />
              </button>
              <p className="mt-4 text-center text-xs text-muted-gray">
                Drop 001 ships in the order it&apos;s earned. Free returns on all
                pieces.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
