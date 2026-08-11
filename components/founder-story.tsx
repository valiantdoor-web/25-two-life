import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function FounderStory() {
  return (
    <section
      id="story"
      className="relative w-full border-t border-border"
      style={{ paddingBlock: 'clamp(5rem,11vw,10rem)' }}
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        {/* portrait */}
        <div
          className="relative aspect-[3/4] w-full overflow-hidden"
          data-reveal-img
        >
          <Image
            src="/images/founder.png"
            alt="Portrait of the founder in his art studio"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.6) 100%)',
            }}
          />
          <span className="absolute bottom-4 left-4 h-px w-16 rule-orange" />
        </div>

        {/* copy */}
        <div>
          <p className="eyebrow mb-6 text-orange" data-reveal>
            The Man Behind the Number
          </p>

          <h2
            className="display text-off-white"
            style={{ fontSize: 'clamp(2.5rem,5.5vw,5rem)' }}
            data-reveal
          >
            25 years can take
            <br />
            a lot. They can
            <br />
            also <span className="text-orange">teach</span> a lot.
          </h2>

          <div className="my-8 h-px w-20 rule-orange" data-reveal-line />

          <div className="max-w-xl space-y-4 text-pretty text-base leading-relaxed text-muted-gray">
            <p data-reveal>
              Twenty-five years inside is a long time to sit with your choices.
              Long enough to stop making excuses. Long enough to take real
              accountability for the harm done — and to decide who you want to be
              on the other side of it.
            </p>
            <p data-reveal>
              What started as a sentence became an education. Books. Counseling.
              Emotional intelligence earned the hard way. Art as a language for
              the things that were impossible to say out loud. A slow, deliberate
              rebuild.
            </p>
            <p data-reveal>
              Now the mission is simple: give other people the perspective it
              took a quarter of a century to find — and prove that a second
              chance, used right, can change everything.
            </p>
          </div>

          <a
            href="#story"
            className="link-underline eyebrow mt-9 inline-flex items-center gap-3 text-off-white"
            data-reveal
          >
            READ JOHNNY&apos;S STORY
            <ArrowRight className="size-4 text-orange" />
          </a>

          <p className="font-brush mt-8 text-3xl text-muted-gray" data-reveal>
            — built through it
          </p>
        </div>
      </div>
    </section>
  )
}
