import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { growthPath, resources, images } from '../content'
import { modules } from '../modules'

/**
 * Pairs each module with the section image already used for its article card,
 * so the rail has photography without introducing new assets.
 */
const cardImage = (slug) =>
  ({
    'identity-in-christ': images.story,
    'breaking-free-from-anxiety': images.mission,
    'how-to-hear-gods-voice': images.resources,
    'discovering-your-calling': images.journey,
  })[slug] ?? images.hero

export default function GrowthPath({ onBack, onOpenModule }) {
  const [active, setActive] = useState(0)
  const selected = modules[active]

  // The article entry carries the short blurb shown under the detail heading.
  const blurb = resources.articles.find(
    (a) => a.title === selected.title,
  )?.body

  return (
    <article className="bg-cream pb-24 pt-28 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="btn-badge group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {growthPath.backLabel}
        </button>

        <header className="mt-8 max-w-2xl">
          <span className="eyebrow">{growthPath.eyebrow}</span>
          <h1 className="mt-5 font-display text-5xl font-light leading-[1.05] text-bark md:text-6xl">
            {growthPath.heading}
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-bark/65">
            {growthPath.intro}
          </p>
        </header>

        {/* Card rail — horizontally scrollable on small screens so the cards
            keep their proportions instead of squashing. */}
        <h2 className="sr-only">{growthPath.selectHint}</h2>
        <div className="-mx-6 mt-14 overflow-x-auto px-6 pb-2 lg:mx-0 lg:overflow-visible lg:px-0">
          <ul className="flex gap-5 lg:grid lg:grid-cols-4">
            {modules.map((module, i) => {
              const current = i === active
              return (
                <li key={module.slug} className="w-64 shrink-0 lg:w-auto">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={current ? 'true' : undefined}
                    className={`group relative block h-64 w-full overflow-hidden rounded-[1.5rem] text-left transition-all duration-300 ${
                      current
                        ? 'ring-2 ring-clay ring-offset-2 ring-offset-cream'
                        : 'hover:-translate-y-1'
                    }`}
                  >
                    <img
                      src={cardImage(module.slug)}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark scrim so the title stays legible over any photo. */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/55 to-bark/10" />

                    <div className="relative flex h-full flex-col justify-end p-6">
                      <span className="font-body text-xs font-medium uppercase tracking-widest text-honey">
                        {growthPath.dayLabels[module.slug]}
                      </span>
                      <span className="mt-2 font-display text-2xl font-light leading-snug text-cream">
                        {module.title}
                      </span>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <hr className="mt-12 border-t border-clay/15" />

        {/* Detail panel for the selected card */}
        <AnimatePresence mode="wait">
          <motion.section
            key={selected.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16"
          >
            <div>
              <span className="eyebrow">{selected.category}</span>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight text-bark md:text-5xl">
                {selected.title}
              </h2>
              <p className="mt-6 max-w-xl font-body text-lg leading-[1.8] text-bark/70">
                {blurb ?? selected.summary}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onOpenModule(selected.slug)}
                  className="btn-primary group"
                >
                  {growthPath.detailCta}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>

                <a
                  href="#/signup"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                  className="font-body text-sm text-bark/50 underline decoration-clay/30 underline-offset-4 transition-colors hover:text-clay"
                >
                  {growthPath.mentorCta}
                </a>
              </div>
            </div>

            {/* What the path covers, drawn from the module's own lessons */}
            <div className="rounded-[1.75rem] bg-sand/70 p-7 sm:p-8">
              <p className="eyebrow">{selected.duration}</p>
              <ul className="mt-5 space-y-4">
                {selected.lessons.map((lesson, i) => (
                  <li key={lesson.title} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 font-display text-sm text-clay/50"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-body text-sm leading-relaxed text-bark/75">
                      {lesson.title}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-clay/15 pt-6">
                <p className="flex items-start gap-2 font-body text-xs leading-relaxed text-bark/50">
                  <Check
                    size={14}
                    className="mt-0.5 shrink-0 text-clay"
                    aria-hidden="true"
                  />
                  Your progress and reflections save on this device — nothing is
                  uploaded.
                </p>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
    </article>
  )
}
