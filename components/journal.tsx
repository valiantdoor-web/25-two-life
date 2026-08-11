import Image from 'next/image'

type Story = {
  num: string
  category: string
  title: string
  date: string
  teaser: string
  img: string
}

const STORIES: Story[] = [
  {
    num: '01',
    category: 'Perspective',
    title: 'Second Chances',
    date: 'Vol. 001',
    teaser:
      'What a real second chance actually costs — and why most people waste the first one they get.',
    img: '/images/journal-01.png',
  },
  {
    num: '02',
    category: 'Reflection',
    title: 'Lessons From 25',
    date: 'Vol. 001',
    teaser:
      'A quarter century of hard-won lessons on patience, accountability and time.',
    img: '/images/journal-02.png',
  },
  {
    num: '03',
    category: 'Reentry',
    title: 'Inside / Outside',
    date: 'Vol. 001',
    teaser:
      'The distance between the man who went in and the one who walked back out.',
    img: '/images/journal-03.png',
  },
  {
    num: '04',
    category: 'Art',
    title: 'Art & Expression',
    date: 'Vol. 002',
    teaser:
      'The things you can’t say out loud have to go somewhere. For him, they went on paper.',
    img: '/images/journal-04.png',
  },
  {
    num: '05',
    category: 'Conversation',
    title: 'Real Talk',
    date: 'Vol. 002',
    teaser:
      'Honest conversations about anger, fatherhood, freedom and starting over.',
    img: '/images/journal-05.png',
  },
  {
    num: '06',
    category: 'Comeback',
    title: 'The Rebuild',
    date: 'Vol. 002',
    teaser:
      'Brick by brick — what it actually takes to build a life back from nothing.',
    img: '/images/journal-06.png',
  },
]

export function Journal() {
  return (
    <section
      id="journal"
      className="w-full border-t border-border"
      style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2
            className="display text-off-white"
            style={{ fontSize: 'clamp(2.25rem,6vw,5.5rem)' }}
          >
            <span className="block" data-reveal>
              Real people.
            </span>
            <span className="block" data-reveal>
              Real consequences.
            </span>
            <span className="block text-orange" data-reveal>
              Real comebacks.
            </span>
          </h2>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-gray" data-reveal>
            The Journal — stories, interviews and lessons from people who chose
            to rebuild.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <article key={s.num} data-reveal style={{ ['--reveal-delay' as string]: `${(i % 3) * 90}ms` }}>
              <a href="#journal" className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, transparent 45%, rgba(10,10,10,0.85) 100%)',
                    }}
                  />
                  <span className="display absolute left-4 top-4 text-3xl text-off-white/80">
                    {s.num}
                  </span>
                  <span className="eyebrow absolute bottom-4 left-4 text-orange">
                    {s.category}
                  </span>
                </div>

                <div className="mt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3
                      className="display text-off-white"
                      style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)' }}
                    >
                      {s.title}
                    </h3>
                    <span className="eyebrow shrink-0 text-muted-gray">{s.date}</span>
                  </div>
                  <span className="mt-3 block h-px w-full origin-left scale-x-0 bg-orange transition-transform duration-500 group-hover:scale-x-100" />
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-gray">
                    {s.teaser}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
