import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Quote,
  PenLine,
  Footprints,
  RotateCcw,
  Lightbulb,
  Sunrise,
  Sparkles,
  Brain,
  BookOpen,
  Briefcase,
  Cloud,
  Compass,
  Feather,
  Flag,
  Gift,
  HandHeart,
  Heart,
  MessageCircle,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import useProgress from '../hooks/useProgress'
import Quiz from '../components/Quiz'

// Every icon a module in modules.js can declare.
const icons = {
  BookOpen,
  Brain,
  Briefcase,
  Cloud,
  Compass,
  Feather,
  Flag,
  Gift,
  HandHeart,
  Heart,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Users,
}

export default function ModuleView({ module, onBack }) {
  const [active, setActive] = useState(0)
  const {
    getModuleProgress,
    toggleLesson,
    saveNote,
    answerQuiz,
    resetModule,
  } = useProgress()

  const { done, notes, answers } = getModuleProgress(module.slug)
  const lesson = module.lessons[active]
  const Icon = icons[module.icon] ?? Sparkles
  const isDone = done.includes(active)
  const completed = done.length
  const total = module.lessons.length
  const allDone = completed === total

  const headingRef = useRef(null)

  // Move focus to the lesson heading on change so keyboard and screen-reader
  // users aren't stranded at the bottom of the previous lesson.
  useEffect(() => {
    headingRef.current?.focus()
  }, [active])

  const go = (next) => {
    if (next >= 0 && next < total) setActive(next)
  }

  return (
    <article className="bg-cream pb-24 pt-28 lg:pb-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center gap-2 font-body text-sm font-medium text-bark/60 transition-colors hover:text-clay"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          Back to The Wisdom Well
        </button>

        <header className="mt-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay/10 text-clay">
              <Icon size={20} aria-hidden="true" />
            </span>
            <span className="eyebrow">{module.category}</span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-light leading-tight text-bark md:text-5xl">
            {module.title}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-bark/65">
            {module.summary}
          </p>

          {/* Progress bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between font-body text-xs font-medium uppercase tracking-widest text-bark/50">
              <span>
                {completed} of {total} complete
              </span>
              <span>{module.duration}</span>
            </div>
            <div
              className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-clay/10"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={completed}
              aria-label="Module progress"
            >
              <motion.div
                className="h-full rounded-full bg-clay"
                initial={false}
                animate={{ width: `${(completed / total) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </header>

        {/* Lesson tabs */}
        <nav className="mt-10 flex flex-wrap gap-2" aria-label="Lessons">
          {module.lessons.map((l, i) => {
            const complete = done.includes(i)
            const current = i === active
            return (
              <button
                key={l.title}
                type="button"
                onClick={() => setActive(i)}
                aria-current={current ? 'step' : undefined}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-body text-xs transition-all duration-300 ${
                  current
                    ? 'border-clay bg-clay text-cream'
                    : complete
                      ? 'border-clay/30 bg-clay/5 text-clay'
                      : 'border-clay/15 bg-cream text-bark/55 hover:border-clay/40 hover:text-clay'
                }`}
              >
                {complete ? (
                  <Check size={13} aria-hidden="true" />
                ) : (
                  <span aria-hidden="true">{i + 1}</span>
                )}
                <span className="max-w-[10rem] truncate">{l.title}</span>
              </button>
            )
          })}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="font-display text-3xl font-medium text-bark outline-none"
            >
              <span className="mr-3 text-clay/40">
                {String(active + 1).padStart(2, '0')}
              </span>
              {lesson.title}
            </h2>

            {/* Verse card */}
            <figure className="mt-8 overflow-hidden rounded-[1.75rem] bg-bark p-8 text-cream sm:p-10">
              <Quote
                size={24}
                className="text-honey"
                aria-hidden="true"
              />
              <blockquote className="mt-5 font-display text-2xl font-light italic leading-relaxed sm:text-3xl">
                {lesson.verse.text}
              </blockquote>
              <figcaption className="mt-5 font-body text-xs font-medium uppercase tracking-widest text-honey">
                {lesson.verse.ref}
                <span className="ml-2 normal-case tracking-normal text-cream/35">
                  World English Bible
                </span>
              </figcaption>
            </figure>

            {/* Teaching */}
            <div className="mt-10">
              <p className="font-body text-base leading-[1.85] text-bark/75">
                {lesson.teaching}
              </p>
            </div>

            {/* Exposition — context and original wording behind the passage */}
            <section className="mt-8 border-l-2 border-clay/25 pl-6">
              <div className="flex items-center gap-2.5">
                <Lightbulb size={17} className="text-clay" aria-hidden="true" />
                <h3 className="eyebrow">Understanding the passage</h3>
              </div>
              <p className="mt-4 font-body text-base leading-[1.85] text-bark/70">
                {lesson.exposition}
              </p>
            </section>

            {/* Application — living it out this week */}
            <section className="mt-8 rounded-[1.75rem] bg-sand/70 p-8">
              <div className="flex items-center gap-2.5">
                <Sunrise size={17} className="text-clay" aria-hidden="true" />
                <h3 className="eyebrow">In your daily life</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {lesson.application.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm leading-relaxed text-bark/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Check your understanding */}
            <Quiz
              quiz={lesson.quiz}
              selected={answers[active] ?? null}
              onSelect={(i) => answerQuiz(module.slug, active, i)}
              onReset={() => answerQuiz(module.slug, active, null)}
            />

            {/* Reflection journal */}
            <section className="mt-10 rounded-[1.75rem] border border-clay/15 bg-sand/60 p-8">
              <div className="flex items-center gap-2.5">
                <PenLine size={17} className="text-clay" aria-hidden="true" />
                <h3 className="eyebrow">Reflect</h3>
              </div>
              <p className="mt-4 font-body text-base leading-relaxed text-bark/75">
                {lesson.reflection}
              </p>

              <label htmlFor={`note-${active}`} className="sr-only">
                Your reflection
              </label>
              <textarea
                id={`note-${active}`}
                rows={5}
                value={notes[active] ?? ''}
                onChange={(e) => saveNote(module.slug, active, e.target.value)}
                placeholder="Take your time. Nobody sees this but you."
                className="mt-5 w-full resize-y rounded-2xl border border-clay/20 bg-cream px-5 py-4 font-body text-sm leading-relaxed text-bark placeholder:text-bark/35 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
              />
              <p className="mt-2.5 font-body text-xs text-bark/45">
                Saved on this device only — your reflections are never uploaded.
              </p>
            </section>

            {/* Practice */}
            <section className="mt-6 rounded-[1.75rem] border border-honey/40 bg-honey/10 p-8">
              <div className="flex items-center gap-2.5">
                <Footprints
                  size={17}
                  className="text-clay"
                  aria-hidden="true"
                />
                <h3 className="eyebrow">This week&rsquo;s practice</h3>
              </div>
              <p className="mt-4 font-body text-base leading-relaxed text-bark/80">
                {lesson.practice}
              </p>
            </section>

            {/* Controls */}
            <div className="mt-10 flex flex-col gap-4 border-t border-clay/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() => toggleLesson(module.slug, active)}
                aria-pressed={isDone}
                className={
                  isDone
                    ? 'btn-secondary !border-clay !bg-clay/10'
                    : 'btn-primary'
                }
              >
                <Check size={15} aria-hidden="true" />
                {isDone ? 'Completed' : 'Mark as complete'}
              </button>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  disabled={active === 0}
                  className="btn-secondary !px-5 !py-3 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ArrowLeft size={15} aria-hidden="true" />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  disabled={active === total - 1}
                  className="btn-secondary !px-5 !py-3 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Next
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Completion state */}
        {allDone && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 rounded-[1.75rem] border border-clay/20 bg-sand px-8 py-12 text-center"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-clay text-cream">
              <Check size={26} aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-3xl font-light text-bark">
              You finished this one, sis.
            </h2>
            <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-bark/60">
              Growth is not instant. Come back to these lessons whenever you
              need them — your reflections will be here waiting.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={onBack} className="btn-primary">
                Explore another module
                <ArrowRight size={15} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => {
                  resetModule(module.slug)
                  setActive(0)
                }}
                className="btn-secondary"
              >
                <RotateCcw size={15} aria-hidden="true" />
                Start over
              </button>
            </div>
          </motion.section>
        )}
      </div>
    </article>
  )
}
