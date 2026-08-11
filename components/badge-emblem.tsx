import { cn } from '@/lib/utils'

/**
 * Circular "Second Chances / 25 Two Life / Change Everything" emblem.
 * Text is set on circular paths so it curves around the ring.
 */
export function BadgeEmblem({
  className,
  spin = false,
}: {
  className?: string
  spin?: boolean
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Second Chances — 25 Two Life — Change Everything"
      className={cn(spin && 'spin-slow', className)}
    >
      <defs>
        <path
          id="badge-top"
          d="M 100,100 m -74,0 a 74,74 0 1,1 148,0"
          fill="none"
        />
        <path
          id="badge-bottom"
          d="M 100,100 m -74,0 a 74,74 0 1,0 148,0"
          fill="none"
        />
      </defs>

      <circle cx="100" cy="100" r="94" fill="none" stroke="var(--gray)" strokeWidth="0.75" opacity="0.5" />
      <circle cx="100" cy="100" r="82" fill="none" stroke="var(--orange)" strokeWidth="1" />
      <circle cx="100" cy="100" r="52" fill="none" stroke="var(--gray)" strokeWidth="0.75" opacity="0.6" />

      <text
        fill="var(--off-white)"
        style={{
          fontFamily: 'var(--font-anton)',
          fontSize: '15px',
          letterSpacing: '5px',
        }}
      >
        <textPath href="#badge-top" startOffset="50%" textAnchor="middle">
          SECOND CHANCES
        </textPath>
      </text>

      <text
        fill="var(--muted-gray)"
        style={{
          fontFamily: 'var(--font-anton)',
          fontSize: '13px',
          letterSpacing: '5px',
        }}
      >
        <textPath href="#badge-bottom" startOffset="50%" textAnchor="middle">
          CHANGE EVERYTHING
        </textPath>
      </text>

      {/* center mark */}
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fill="var(--orange)"
        style={{ fontFamily: 'var(--font-anton)', fontSize: '34px' }}
      >
        25
      </text>
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fill="var(--off-white)"
        style={{ fontFamily: 'var(--font-anton)', fontSize: '13px', letterSpacing: '3px' }}
      >
        TWO LIFE
      </text>
      <text
        x="100"
        y="126"
        textAnchor="middle"
        fill="var(--muted-gray)"
        className="font-brush"
        style={{ fontSize: '11px' }}
      >
        est. 2nd chance
      </text>

      {/* small spark ticks */}
      {Array.from({ length: 4 }).map((_, i) => (
        <line
          key={i}
          x1="100"
          y1="12"
          x2="100"
          y2="20"
          stroke="var(--orange)"
          strokeWidth="1.5"
          transform={`rotate(${i * 90} 100 100)`}
        />
      ))}
    </svg>
  )
}
