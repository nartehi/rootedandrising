import { Sprout, Heart, Compass, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import { journey, images } from '../content'

const icons = { Sprout, Heart, Compass }

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-bark py-24 text-cream lg:py-32"
    >
      <img
        src={images.journey}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bark via-bark/95 to-bark" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-honey">
            {journey.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-cream md:text-5xl">
            {journey.heading}
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-cream/60">
            {journey.subheading}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {journey.phases.map((phase, i) => {
            const Icon = icons[phase.icon]
            return (
              <Reveal key={phase.number} delay={i * 0.12}>
                <article className="relative h-full rounded-[1.75rem] border border-cream/10 bg-cream/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-honey/40">
                  <span
                    className="font-display text-6xl font-light leading-none text-cream/10"
                    aria-hidden="true"
                  >
                    {phase.number}
                  </span>

                  <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-honey/15 text-honey">
                    <Icon size={22} aria-hidden="true" />
                  </span>

                  <h3 className="mt-6 font-display text-2xl font-medium text-cream">
                    {phase.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-cream/60">
                    {phase.body}
                  </p>

                  <div className="mt-7 border-t border-cream/10 pt-6">
                    <p className="font-body text-xs font-medium uppercase tracking-widest text-honey/80">
                      What you&rsquo;ll discover
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {phase.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 font-body text-sm leading-relaxed text-cream/75"
                        >
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0 text-honey"
                            aria-hidden="true"
                          />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
