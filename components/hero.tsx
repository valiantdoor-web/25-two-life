import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] w-full items-end overflow-hidden"
    >
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/founder/hero-graded.jpg"
          alt="Johnny, the founder of 25 Two Life, standing above the city with his arms raised"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_26%]"
        />
        {/* top-down darkening tames the bright daytime sky into the near-black theme */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 26%, rgba(10,10,10,0.1) 48%, rgba(10,10,10,0.2) 74%, rgba(10,10,10,0.7) 100%)',
          }}
        />
        {/* left-to-right black gradient keeps the headline legible over the image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.72) 34%, rgba(10,10,10,0.15) 62%, rgba(10,10,10,0.35) 100%)',
          }}
        />
        {/* cinematic vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 60% 42%, transparent 42%, rgba(10,10,10,0.65) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background: 'linear-gradient(0deg, #0a0a0a 0%, transparent 100%)',
          }}
        />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 pt-32 md:px-10 md:pb-28">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 text-muted-gray" data-reveal>
            25 years of lessons.
            <br />A lifetime to live.
          </p>

          <h1 className="display text-off-white" aria-label="25 Two Life">
            <span
              className="block text-[clamp(4.5rem,20vw,13rem)]"
              style={{ lineHeight: 0.78 }}
              data-reveal
            >
              25
            </span>
            <span
              className="font-brush block text-orange"
              style={{
                fontSize: 'clamp(3.5rem,15vw,10rem)',
                lineHeight: 0.8,
              }}
              data-reveal
            >
              two
            </span>
            <span
              className="block text-[clamp(4.5rem,20vw,13rem)]"
              style={{ lineHeight: 0.78 }}
              data-reveal
            >
              life
            </span>
          </h1>

          <div className="my-8 h-px w-28 rule-orange" data-reveal-line />

          <p
            className="display max-w-md text-lg text-off-white md:text-2xl"
            style={{ lineHeight: 1.05 }}
            data-reveal
          >
            More than your sentence.
            <br />
            This is your 2nd life.
          </p>

          <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-gray md:text-base" data-reveal>
            A story of consequence, growth, discipline, art and second chances.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal>
            <a
              href="#story"
              className="btn-orange eyebrow flex min-h-[52px] items-center justify-center rounded-sm px-8 py-4"
            >
              EXPLORE THE STORY
            </a>
            <a
              href="#shop"
              className="btn-ghost eyebrow flex min-h-[52px] items-center justify-center rounded-sm px-8 py-4"
            >
              SHOP THE FIRST DROP
            </a>
          </div>
        </div>
      </div>

      {/* bottom rule + markers */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 pb-5 md:px-10 md:pb-6">
          <span className="eyebrow flex items-center gap-3 text-muted-gray">
            <span className="relative hidden h-8 w-px overflow-hidden bg-white/15 sm:block">
              <span className="scroll-spark absolute inset-x-0 top-0 h-3 bg-orange" />
            </span>
            Scroll to discover
          </span>
          <span className="eyebrow text-muted-gray">Est. Second Chance</span>
        </div>
        <div className="h-px w-full bg-white/10" />
      </div>
    </section>
  )
}
