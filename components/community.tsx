'use client'

import Image from 'next/image'
import { useActionState } from 'react'
import { subscribe, type SubscribeState } from '@/app/actions/subscribe'

const initialState: SubscribeState = { status: 'idle', message: '' }

export function Community() {
  const [state, formAction, pending] = useActionState(subscribe, initialState)
  const joined = state.status === 'success'

  return (
    <section id="join" className="relative w-full overflow-hidden border-t border-border">
      <div className="absolute inset-0">
        <Image
          src="/images/community.png"
          alt="A community of people who rebuilt their lives, standing together"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.9) 100%)',
          }}
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10"
        style={{ paddingBlock: 'clamp(6rem,14vw,13rem)' }}
      >
        <div className="max-w-3xl">
          <h2
            className="display text-off-white"
            style={{ fontSize: 'clamp(2.25rem,6.5vw,6rem)' }}
          >
            <span className="block" data-reveal>
              Your past may
            </span>
            <span className="block" data-reveal>
              explain you.
            </span>
            <span className="mt-4 block text-orange" data-reveal>
              It doesn&apos;t have to
              <br />
              define you.
            </span>
          </h2>

          <p
            className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-gray md:text-lg"
            data-reveal
          >
            25 Two Life is for people who have been counted out, written off,
            underestimated or forced to rebuild.
          </p>

          {joined ? (
            <p className="display mt-10 text-3xl text-orange" data-reveal>
              You&apos;re in. Welcome to your 2nd life.
            </p>
          ) : (
            <form
              action={formAction}
              className="mt-10 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
              data-reveal
            >
              <input type="hidden" name="source" value="community" />
              <label htmlFor="join-email" className="sr-only">
                Your email
              </label>
              <input
                id="join-email"
                name="email"
                type="email"
                required
                placeholder="YOUR EMAIL"
                className="eyebrow min-h-[56px] flex-1 rounded-sm border border-border bg-black/40 px-5 text-off-white outline-none backdrop-blur-sm placeholder:text-muted-gray focus:border-orange"
                style={{ fontSize: '16px', letterSpacing: '0.1em' }}
              />
              <button
                type="submit"
                disabled={pending}
                className="btn-orange eyebrow flex min-h-[56px] items-center justify-center rounded-sm px-10 disabled:opacity-60"
              >
                {pending ? 'JOINING…' : 'JOIN'}
              </button>
            </form>
          )}

          {state.status === 'error' && (
            <p className="eyebrow mt-4 text-orange-bright" role="alert">
              {state.message}
            </p>
          )}

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-gray" data-reveal>
            No spam. No bullshit. Just new stories, drops and conversations worth
            having.
          </p>
        </div>
      </div>
    </section>
  )
}
