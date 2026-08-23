import Reveal from '../components/Reveal'
import { purpose } from '../content'

/**
 * A quiet full-width moment between the Hero and Our Story: just the purpose
 * statement, centred, with no card or image competing for attention.
 */
export default function Purpose() {
  return (
    <section id="purpose" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <Reveal>
          {/* Muted blue rather than the usual clay: this eyebrow sits above a
              clay quote, so the two would otherwise flatten into each other. */}
          <span className="font-body text-xs font-medium uppercase tracking-widest text-mist">
            {purpose.eyebrow}
          </span>

          <blockquote className="mt-8 font-display text-3xl font-light italic leading-[1.25] text-clay sm:text-4xl lg:text-[2.75rem]">
            &ldquo;{purpose.quote}&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
