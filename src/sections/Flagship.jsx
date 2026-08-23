import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal'
import { flagship } from '../content'

/** One labelled group inside an expanded module. */
function Detail({ label, children }) {
  return (
    <div>
      <p className="eyebrow">{label}</p>
      <div className="mt-2.5">{children}</div>
    </div>
  )
}

const list = 'space-y-1.5 font-body text-sm leading-relaxed text-bark/70'

/**
 * The signature 8-week curriculum. Each module collapses by default — eight
 * modules with five detail groups each is a wall of text when opened at once.
 */
export default function Flagship() {
  const [open, setOpen] = useState(null)

  return (
    <section id="rooted-and-renewed" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2.5rem] bg-sand p-8 shadow-sm shadow-bark/5 sm:p-12 lg:p-16">
            <span className="eyebrow-strong">{flagship.eyebrow}</span>

            <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] text-bark sm:text-5xl">
              {flagship.title}
            </h2>
            <p className="mt-3 font-display text-2xl font-light italic text-clay sm:text-3xl">
              {flagship.subtitle}
            </p>

            <p className="mt-6 inline-flex rounded-full bg-clay/10 px-4 py-2 font-body text-sm font-medium text-clay">
              {flagship.length}
            </p>

            <div className="mt-10 grid gap-8 border-t border-clay/10 pt-10 sm:grid-cols-2">
              <Detail label={flagship.audienceLabel}>
                <p className="font-body text-base leading-relaxed text-bark/70">
                  {flagship.audience}
                </p>
              </Detail>
              <Detail label={flagship.promiseLabel}>
                <p className="font-display text-lg font-light italic leading-relaxed text-bark">
                  &ldquo;{flagship.promise}&rdquo;
                </p>
              </Detail>
            </div>
          </div>
        </Reveal>

        {/* Modules — collapsed by default, one open at a time. */}
        <ul className="mt-8 space-y-4">
          {flagship.modules.map((module, i) => {
            const expanded = open === i
            return (
              <Reveal key={module.number} delay={Math.min(i, 4) * 0.06}>
                <li className="overflow-hidden rounded-[1.75rem] border border-clay/15 bg-sand/60">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? null : i)}
                      aria-expanded={expanded}
                      className="flex w-full items-center gap-5 p-6 text-left transition-colors duration-300 hover:bg-sand sm:p-8"
                    >
                      <span
                        className="font-display text-3xl font-light leading-none text-clay/30"
                        aria-hidden="true"
                      >
                        {module.number}
                      </span>
                      <span className="flex-1 font-display text-xl font-medium text-bark sm:text-2xl">
                        {module.title}
                      </span>
                      <span className="sr-only">
                        {expanded
                          ? flagship.collapseLabel
                          : flagship.expandLabel}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-clay transition-transform duration-300 ${
                          expanded ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  {expanded && (
                    <div className="border-t border-clay/10 px-6 pb-8 pt-7 sm:px-8">
                      <p className="font-body text-base leading-relaxed text-bark/75">
                        {module.objective}
                      </p>

                      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <Detail label={flagship.labels.scriptures}>
                          <ul className="flex flex-wrap gap-2">
                            {module.scriptures.map((verse) => (
                              <li
                                key={verse}
                                className="rounded-full bg-clay/10 px-3.5 py-1.5 font-body text-sm text-clay"
                              >
                                {verse}
                              </li>
                            ))}
                          </ul>
                        </Detail>

                        <Detail label={flagship.labels.topics}>
                          <ul className={list}>
                            {module.topics.map((topic) => (
                              <li key={topic}>{topic}</li>
                            ))}
                          </ul>
                        </Detail>

                        <Detail label={flagship.labels.activities}>
                          <ul className={list}>
                            {module.activities.map((activity) => (
                              <li key={activity}>{activity}</li>
                            ))}
                          </ul>
                        </Detail>

                        {/* Only module 2 carries a labels list. */}
                        {module.labels && (
                          <Detail label={flagship.labels.labelsList}>
                            <ul className="flex flex-wrap gap-2">
                              {module.labels.map((label) => (
                                <li
                                  key={label}
                                  className="rounded-full border border-clay/20 px-3.5 py-1.5 font-body text-sm text-bark/55 line-through decoration-clay/40"
                                >
                                  {label}
                                </li>
                              ))}
                            </ul>
                          </Detail>
                        )}
                      </div>

                      <div className="mt-8 rounded-2xl bg-cream p-5">
                        <p className="eyebrow">{flagship.labels.outcome}</p>
                        <p className="mt-2 font-body text-base leading-relaxed text-bark/80">
                          {module.outcome}
                        </p>
                      </div>
                    </div>
                  )}
                </li>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
