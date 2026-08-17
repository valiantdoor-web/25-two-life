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
        <div className="relative aspect-[3/4] w-full overflow-hidden" data-reveal-img>
          <Image
            src="/images/founder/portrait-graded.jpg"
            alt="Portrait of Johnny Sierra, founder of 25 Two Life"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-[center_top]"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(10,10,10,0.7) 100%)' }} />
          <span className="absolute bottom-4 left-4 h-px w-16 rule-orange" />
        </div>

        <div>
          <p className="eyebrow mb-6 text-orange" data-reveal>The Man Behind the Number</p>
          <h2 className="display text-off-white" style={{ fontSize: 'clamp(2.5rem,5.5vw,5rem)' }} data-reveal>
            The number came
            <br />
            from the sentence.
            <br />
            The life came from <span className="text-orange">choice.</span>
          </h2>

          <div className="my-8 h-px w-20 rule-orange" data-reveal-line />

          <div className="max-w-xl space-y-4 text-pretty text-base leading-relaxed text-muted-gray">
            <p data-reveal>
              Johnny Sierra was sentenced to 40 years to life: 15 years to life plus a consecutive 25-year firearm enhancement. The name 25 Two Life comes from that enhancement — not from a claim that the entire sentence was 25 years.
            </p>
            <p data-reveal>
              The conduct that led to prison caused real harm. The story is not about celebrating incarceration or turning a sentence into an accomplishment. It is about taking responsibility, confronting the thinking and behavior that caused harm, and doing the long work of becoming different.
            </p>
            <p data-reveal>
              25 Two Life represents what Johnny chose to make of his life afterward: discipline, emotional growth, accountability, service and consistent action over time. Second chances matter because of what a person does with them.
            </p>
          </div>

          <a href="/story" className="link-underline eyebrow mt-9 inline-flex items-center gap-3 text-off-white" data-reveal>
            READ JOHNNY&apos;S STORY
            <ArrowRight className="size-4 text-orange" />
          </a>

          <p className="font-brush mt-8 text-3xl text-muted-gray" data-reveal>— built through it</p>
        </div>
      </div>
    </section>
  )
}
