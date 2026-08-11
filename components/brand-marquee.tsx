const PHRASES = [
  'REAL RECOGNIZES REAL',
  'DISCIPLINE OVER EVERYTHING',
  'FROM SURVIVAL TO PURPOSE',
  "WE DON'T MAKE EXCUSES",
  'WE MAKE CHANGES',
  'SHARP. RAW. REAL.',
  'STREET BUT NOT FOR EVERYONE',
]

function Row() {
  return (
    <div className="marquee-track flex shrink-0 items-center">
      {PHRASES.map((p) => (
        <span key={p} className="flex items-center">
          <span
            className="display whitespace-nowrap px-6 text-industrial-gray"
            style={{ fontSize: 'clamp(1.75rem,4vw,3.25rem)' }}
          >
            {p}
          </span>
          <span
            aria-hidden
            className="font-brush px-2 text-2xl text-orange"
          >
            25
          </span>
        </span>
      ))}
    </div>
  )
}

export function BrandMarquee() {
  return (
    <div
      className="relative flex w-full overflow-hidden border-y border-border bg-black-raised py-5 select-none"
      aria-hidden
    >
      <Row />
      <Row />
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black-raised to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black-raised to-transparent" />
    </div>
  )
}
