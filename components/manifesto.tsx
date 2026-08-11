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

        <h2 className="display text-off-white">
          <span
            className="block text-[clamp(3rem,11vw,9rem)]"
            data-reveal
          >
            They gave me
          </span>
          <span
            className="block text-orange text-[clamp(5rem,20vw,16rem)]"
            style={{ lineHeight: 0.8 }}
            data-reveal
          >
            25.
          </span>
        </h2>

        <p
          className="font-brush mx-auto mt-6 text-orange"
          style={{ fontSize: 'clamp(3rem,12vw,8rem)', lineHeight: 0.9 }}
          data-reveal
        >
          I chose life.
        </p>

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
