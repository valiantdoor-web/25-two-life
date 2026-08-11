import Image from 'next/image'

const DETAILS = [
  { img: '/images/detail-badge.png', label: 'Chest Badge' },
  { img: '/images/detail-tag.png', label: 'Woven Hem Tag' },
  { img: '/images/detail-neck.png', label: 'Inside Neck Print' },
  { img: '/images/detail-pocket.png', label: 'Carpenter Pocket' },
  { img: '/images/detail-fabric.png', label: 'Fabric & Stitching' },
]

export function DetailStrip() {
  return (
    <section
      className="w-full border-t border-border"
      style={{ paddingBlock: 'clamp(5rem,11vw,9rem)' }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-12 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <h2
            className="display text-off-white"
            style={{ fontSize: 'clamp(2.5rem,7vw,6rem)' }}
            data-reveal
          >
            Details <span className="text-orange">matter.</span>
          </h2>
          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-gray md:pb-3" data-reveal>
            Because the garment should tell the story before you ever explain it.
            The branding is quiet on purpose — it rewards the person who looks
            closely.
          </p>
        </div>
      </div>

      {/* full-bleed horizontal scroll gallery */}
      <div className="flex snap-x snap-mandatory gap-px overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {DETAILS.map((d, i) => (
          <figure
            key={d.label}
            className="group relative aspect-[3/4] w-[72vw] shrink-0 snap-center bg-charcoal sm:w-[42vw] lg:w-[26vw]"
            data-reveal-img
            style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
          >
            <Image
              src={d.img}
              alt={d.label}
              fill
              sizes="(max-width:640px) 72vw, (max-width:1024px) 42vw, 26vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.85) 100%)',
              }}
            />
            <figcaption className="eyebrow absolute bottom-5 left-5 flex items-center gap-3 text-off-white">
              <span className="h-px w-6 rule-orange" />
              {d.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
