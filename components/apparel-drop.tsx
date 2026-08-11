'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/lib/products'

export function ApparelDrop() {
  const [index, setIndex] = useState(0)
  const product = PRODUCTS[index]

  const go = (dir: number) =>
    setIndex((i) => (i + dir + PRODUCTS.length) % PRODUCTS.length)

  return (
    <section
      id="shop"
      className="w-full border-t border-border bg-black-raised"
      style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5 text-orange" data-reveal>
              25 Two Life / Drop 001
            </p>
            <h2
              className="display text-off-white"
              style={{ fontSize: 'clamp(2.5rem,7vw,6rem)' }}
            >
              <span className="block" data-reveal>
                Built to work.
              </span>
              <span className="block text-orange" data-reveal>
                Built to live.
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-gray" data-reveal>
            Heavyweight workwear with the story stitched in. Branding that
            rewards a closer look.
          </p>
        </div>

        <div className="grid items-stretch gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {/* image */}
          <div className="relative aspect-square bg-charcoal md:aspect-auto">
            <Image
              key={product.img}
              src={product.img}
              alt={product.name}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain p-8 md:p-16"
            />
            <span className="eyebrow absolute left-5 top-5 text-muted-gray">
              {String(index + 1).padStart(2, '0')} / {String(PRODUCTS.length).padStart(2, '0')}
            </span>
          </div>

          {/* info */}
          <div className="flex flex-col justify-between gap-10 bg-charcoal p-8 md:p-14">
            <div>
              <h3
                className="display text-off-white"
                style={{ fontSize: 'clamp(2rem,4vw,3.25rem)' }}
              >
                {product.name}
              </h3>
              <div className="mt-4 flex items-center gap-4">
                <span className="display text-2xl text-orange">{product.price}</span>
                <span className="h-4 w-px bg-border" />
                <span className="eyebrow text-muted-gray">{product.color}</span>
              </div>

              <div className="my-8 h-px w-16 rule-orange" />

              <ul className="space-y-3">
                {product.details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-gray">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-orange" />
                    <span className="text-pretty">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="btn-ghost eyebrow flex min-h-[52px] items-center justify-center rounded-sm px-6 py-4"
              >
                QUICK VIEW
              </button>

              <div className="flex items-center justify-between border-t border-border pt-6">
                <div className="flex gap-2">
                  {PRODUCTS.map((p, i) => (
                    <button
                      key={p.name}
                      type="button"
                      aria-label={`Show ${p.name}`}
                      onClick={() => setIndex(i)}
                      className="h-1 w-8 transition-colors"
                      style={{
                        backgroundColor:
                          i === index ? 'var(--orange)' : 'rgba(255,255,255,0.18)',
                      }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous product"
                    onClick={() => go(-1)}
                    className="flex size-11 items-center justify-center border border-border text-off-white transition-colors hover:border-orange hover:text-orange"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next product"
                    onClick={() => go(1)}
                    className="flex size-11 items-center justify-center border border-border text-off-white transition-colors hover:border-orange hover:text-orange"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center" data-reveal>
          <a
            href="/shop"
            className="btn-orange eyebrow inline-flex min-h-[52px] items-center gap-3 rounded-sm px-10 py-4"
          >
            SHOP DROP 001
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
