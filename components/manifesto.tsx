import Image from 'next/image'

export function Manifesto() {
  return (
    <section
      className="texture-concrete relative mx-auto max-w-[1440px] px-5 md:px-10"
      style={{ paddingBlock: 'clamp(6rem,14vw,13rem)' }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-10 text-muted-gray" data-reveal>
          The Manifesto
        </p>

        <div className="mx-auto w-full max-w-[560px]" data-reveal>
          <Image
            src="/images/brand/badge-hero-trim.png"
            alt="Second Chances · 25 Two Life · Change Everything"
            width={857}
            height={857}
            priority
            className="mx-auto h-auto w-[70vw] max-w-[440px]"
          />
        </div>

        <div className="mx-auto my-12 h-px w-24 rule-orange" data-reveal-line />

        <p
          className="display mx-auto max-w-xl text-xl text-muted-gray md:text-2xl"
          data-reveal
        >
          The sentence ended.
          <br />
          <span className="text-off-white">The story didn&apos;t.</span>
        </p>

        <p
          className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-gray"
          data-reveal
        >
          The past is part of the perspective — not a limit on the future. What
          happened is context. What comes next is a choice, made every single
          day, with discipline, honesty and the refusal to be defined by the
          worst chapter of a longer book.
        </p>
      </div>
    </section>
  )
}
