import Image from 'next/image'
import { Heart, Play } from 'lucide-react'

const POSTS = [
  { img: '/images/social-01.png', tag: '@25twolife', likes: '2.4k' },
  { img: '/images/social-02.png', tag: 'Drop 001', likes: '1.1k' },
  { img: '/images/social-03.png', tag: 'The People', likes: '3.8k' },
  { img: '/images/social-04.png', tag: 'Behind It', likes: '982' },
]

export function SocialFeed() {
  return (
    <section
      className="w-full border-t border-border"
      style={{ paddingBlock: 'clamp(5rem,11vw,9rem)' }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2
            className="display text-off-white"
            style={{ fontSize: 'clamp(2.25rem,6vw,5rem)' }}
          >
            <span className="block" data-reveal>
              25 Two Life
            </span>
            <span className="block text-orange" data-reveal>
              in the wild.
            </span>
          </h2>
          <a
            href="#top"
            className="link-underline eyebrow text-muted-gray transition-colors hover:text-off-white"
            data-reveal
          >
            FOLLOW @25TWOLIFE
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {POSTS.map((p, i) => (
            <a
              key={p.img}
              href="#top"
              className="group relative block aspect-[9/16] overflow-hidden bg-charcoal"
              data-reveal-img
              style={{ ['--reveal-delay' as string]: `${(i % 4) * 70}ms` }}
            >
              <Image
                src={p.img}
                alt={`Social post — ${p.tag}`}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, transparent 30%, rgba(10,10,10,0.8) 100%)',
                }}
              />
              <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-black/40 text-off-white backdrop-blur-sm">
                <Play className="size-3.5 translate-x-px" fill="currentColor" />
              </span>
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                <span className="eyebrow text-off-white">{p.tag}</span>
                <span className="flex items-center gap-1 text-xs text-off-white">
                  <Heart className="size-3.5 text-orange" fill="currentColor" />
                  {p.likes}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
