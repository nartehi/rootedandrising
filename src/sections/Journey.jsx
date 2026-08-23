import { Sprout, Heart, Sun, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { journey, images } from '../content'

const icons = { Sprout, Heart, Sun }

/**
 * Each phase carries its own tint so the three read as a progression —
 * grounded clay, restorative mist, rising honey.
 */
const TONES = {
  clay: {
    card: 'bg-clay/[0.07]',
    icon: 'bg-clay/10 text-clay',
    label: 'text-clay',
    dot: 'bg-clay',
    link: 'text-clay decoration-clay/40',
  },
  mist: {
    card: 'bg-mist/[0.18]',
    icon: 'bg-mist/25 text-mist',
    label: 'text-mist',
    dot: 'bg-mist',
    link: 'text-bark/70 decoration-mist',
  },
  honey: {
    card: 'bg-honey/[0.14]',
    icon: 'bg-honey/20 text-honey',
    label: 'text-honey',
    dot: 'bg-honey',
    link: 'text-clay decoration-honey',
  },
}

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-sand py-24 lg:py-32">
      {/* The landscape sits far back — texture, not a picture to look at. */}
      <img
        src={images.journey}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <span className="eyebrow-strong">{journey.eyebrow}</span>
          <hr className="mt-5 border-clay/15" />

          <h2 className="mt-10 font-display text-4xl font-light leading-tight text-bark sm:text-5xl">
            {journey.headingLead}{' '}
            <span className="italic text-clay">{journey.headingAccent}</span>
          </h2>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-bark/65">
            {journey.subheading}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {journey.phases.map((phase, i) => {
            const Icon = icons[phase.icon]
            const tone = TONES[phase.tone]
            return (
              <Reveal key={phase.number} delay={i * 0.12}>
                <article
                  className={`flex h-full flex-col rounded-[1.75rem] p-8 lg:p-10 ${tone.card}`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${tone.icon}`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </span>

                  <h3 className="mt-8 font-display text-3xl font-medium text-bark">
                    {phase.name}
                  </h3>
                  <p
                    className={`mt-2 font-body text-xs font-medium uppercase tracking-widest ${tone.label}`}
                  >
                    {phase.subtitle}
                  </p>

                  <p className="mt-6 font-body text-base leading-relaxed text-bark/70">
                    {phase.body}
                  </p>

                  <p className="eyebrow-strong mt-8">{journey.outcomesLabel}</p>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {phase.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 font-body text-base leading-relaxed text-bark/75"
                      >
                        <span
                          className={`mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot}`}
                          aria-hidden="true"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#/signup"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                    className={`group mt-8 inline-flex items-center gap-2 self-start font-body text-xs font-medium uppercase tracking-widest underline underline-offset-4 ${tone.link}`}
                  >
                    {journey.phaseCta}
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
