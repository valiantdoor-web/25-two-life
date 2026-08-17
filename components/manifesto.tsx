import Image from 'next/image'

export function Manifesto() {
  return (
    <section
      className="texture-concrete relative mx-auto max-w-[1440px] px-5 md:px-10"
      style={{ paddingBlock: 'clamp(6rem,14vw,13rem)' }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-10 text-muted-gray" data-reveal>The Manifesto</p>

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

        <p className="display mx-auto max-w-xl text-xl text-muted-gray md:text-2xl" data-reveal>
          Accountability first.
          <br />
          <span className="text-off-white">Transformation is what follows.</span>
        </p>

        <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-gray" data-reveal>
          The past can explain how a person arrived somewhere without excusing the harm done there. Change means owning your choices, regulating your emotions, changing your behavior and repeating better decisions long enough for them to become a way of life. A second chance is not an eraser. It is an opportunity to live differently.
        </p>
      </div>
    </section>
  )
}
