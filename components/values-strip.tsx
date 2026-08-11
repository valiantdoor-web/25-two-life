import { Hammer, Handshake, Globe, Feather } from 'lucide-react'

const VALUES = [
  { icon: Hammer, top: 'BUILT TO WORK', bottom: 'MADE TO LAST' },
  { icon: Handshake, top: 'BUILT TO LIVE', bottom: 'LIVE TO INSPIRE' },
  { icon: Globe, top: '25 TWO LIFE', bottom: 'WORLDWIDE' },
  { icon: Feather, top: 'YOUR STORY', bottom: 'YOUR LEGACY' },
  { badge: true, top: 'SECOND CHANCES', bottom: 'CHANGE EVERYTHING' },
]

export function ValuesStrip() {
  return (
    <section
      className="w-full border-t border-border bg-black"
      style={{ paddingBlock: 'clamp(3rem,6vw,5rem)' }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-6 gap-y-10 px-5 md:grid-cols-3 md:px-10 lg:grid-cols-5">
        {VALUES.map((v) => (
          <div
            key={v.top}
            className="flex flex-col items-center gap-3 text-center"
            data-reveal
          >
            {v.badge ? (
              <span className="flex size-9 items-center justify-center rounded-full border border-orange/60 font-brush text-lg text-orange">
                25
              </span>
            ) : (
              <v.icon className="size-8 text-muted-gray" strokeWidth={1.4} />
            )}
            <div>
              <p className="eyebrow text-off-white">{v.top}</p>
              <p className="eyebrow mt-1 text-medium-gray">{v.bottom}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="eyebrow mt-12 text-center text-medium-gray">
        Workwear roots. Street culture edge.{' '}
        <span className="text-orange">Purpose driven.</span>
      </p>
    </section>
  )
}
