import {
  ArrowLeft,
  Compass,
  Heart,
  Sparkles,
  Sun,
  Unlock,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import Flagship from './Flagship'
import Resources from './Resources'
import ProgramActivity from './ProgramActivity'
import useActivities from '../hooks/useActivities'
import { programs } from '../content'

const icons = { Compass, Heart, Sparkles, Sun, Unlock }

/**
 * Programs page (#/programs). Follows the same shape as the other full-page
 * views — back badge, page header, then the five programs as alternating
 * cream/sand bands, each with its module list and interactive activity.
 */
export default function Programs({ onBack, onOpenModule }) {
  const { get, save } = useActivities()

  return (
    <article className="bg-cream pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <button type="button" onClick={onBack} className="btn-badge group">
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {programs.backLabel}
        </button>

        <header className="mt-8 max-w-2xl">
          <span className="eyebrow-strong">{programs.eyebrow}</span>
          <h1 className="mt-5 font-display text-4xl font-light leading-[1.05] text-bark sm:text-5xl md:text-6xl">
            {programs.heading}
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-bark/65">
            {programs.intro}
          </p>
        </header>
      </div>

      {/* The Wisdom Well opens the page — same section as before, so edits to
          it still apply wherever else it renders. */}
      <div className="mt-12 lg:mt-16">
        <Resources onOpenModule={onOpenModule} />
      </div>

      {/* Then the signature curriculum, and the shorter programs after it. */}
      <Flagship />

      <div className="bg-cream pt-24 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">{programs.moreHeading}</h2>
            <p className="mt-5 font-body text-base leading-relaxed text-bark/60">
              {programs.moreIntro}
            </p>
          </Reveal>
        </div>

        {programs.items.map((program, i) => {
          const Icon = icons[program.icon]
          return (
            <section
              key={program.slug}
              id={program.slug}
              className={`py-20 lg:py-24 ${
                i % 2 === 0 ? 'bg-cream' : 'bg-sand'
              }`}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Reveal>
                  {/* Number, title and blurb, then the modules beside the
                      activity so the two read as one program. */}
                  <div
                    className={`grid gap-10 lg:gap-16 ${
                      program.activity
                        ? 'lg:grid-cols-[1fr_1.1fr]'
                        : 'max-w-2xl'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-4">
                        <span
                          className="font-display text-5xl font-light leading-none text-clay/25"
                          aria-hidden="true"
                        >
                          {program.number}
                        </span>
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay">
                          <Icon size={20} aria-hidden="true" />
                        </span>
                      </div>

                      <h2 className="mt-6 font-display text-3xl font-medium leading-tight text-bark sm:text-4xl">
                        {program.title}
                      </h2>
                      <p className="mt-4 font-body text-base leading-relaxed text-bark/65">
                        {program.body}
                      </p>

                      <p className="eyebrow-strong mt-8">
                        {program.modules.length} {programs.moduleLabel}
                      </p>

                      <ol className="mt-5 space-y-2.5">
                        {program.modules.map((module, n) => (
                          <li
                            key={module}
                            className="flex items-start gap-3 font-body text-base leading-relaxed text-bark/80"
                          >
                            <span
                              className="mt-0.5 w-5 shrink-0 font-body text-sm text-clay/60"
                              aria-hidden="true"
                            >
                              {String(n + 1).padStart(2, '0')}
                            </span>
                            {module}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <ProgramActivity
                      program={program}
                      saved={get(program.slug)}
                      onSave={save}
                    />
                  </div>
                </Reveal>
              </div>
            </section>
          )
        })}
      </div>
    </article>
  )
}
