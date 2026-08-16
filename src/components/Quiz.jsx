import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, Check, X, RotateCcw } from 'lucide-react'

const LETTERS = ['A', 'B', 'C', 'D']

/**
 * A single check-your-understanding question.
 *
 * Every option carries feedback, so choosing wrongly teaches something rather
 * than just scoring zero. The answer stays selectable after a wrong attempt —
 * this is a learning check, not an exam.
 */
export default function Quiz({ quiz, selected, onSelect, onReset }) {
  const answered = selected !== null && selected !== undefined
  const chosen = answered ? quiz.options[selected] : null
  const isCorrect = chosen?.correct === true

  return (
    <section className="mt-6 rounded-[1.75rem] border border-clay/15 bg-cream p-8">
      <div className="flex items-center gap-2.5">
        <HelpCircle size={17} className="text-clay" aria-hidden="true" />
        <h3 className="eyebrow">Check your understanding</h3>
      </div>

      <p
        className="mt-4 font-body text-base font-medium leading-relaxed text-bark"
        id="quiz-question"
      >
        {quiz.question}
      </p>

      <div
        className="mt-6 space-y-3"
        role="radiogroup"
        aria-labelledby="quiz-question"
      >
        {quiz.options.map((option, i) => {
          const active = selected === i
          const showAsCorrect = answered && option.correct
          const showAsWrong = active && !option.correct

          return (
            <button
              key={option.label}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onSelect(i)}
              className={`flex w-full items-start gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                showAsCorrect
                  ? 'border-clay bg-clay/10'
                  : showAsWrong
                    ? 'border-bark/25 bg-bark/5'
                    : 'border-clay/15 bg-sand/50 hover:border-clay/40 hover:bg-sand'
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-body text-xs font-semibold transition-colors ${
                  showAsCorrect
                    ? 'bg-clay text-cream'
                    : showAsWrong
                      ? 'bg-bark/30 text-cream'
                      : 'bg-clay/10 text-clay'
                }`}
                aria-hidden="true"
              >
                {showAsCorrect ? (
                  <Check size={13} />
                ) : showAsWrong ? (
                  <X size={13} />
                ) : (
                  LETTERS[i]
                )}
              </span>
              <span className="font-body text-sm leading-relaxed text-bark/85">
                {option.label}
              </span>
            </button>
          )
        })}
      </div>

      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-5 rounded-2xl border px-5 py-4 ${
              isCorrect
                ? 'border-clay/30 bg-clay/5'
                : 'border-honey/50 bg-honey/10'
            }`}
            role="status"
          >
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-clay">
              {isCorrect ? "That's it" : 'Not quite — here’s why'}
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-bark/80">
              {chosen.feedback}
            </p>

            {!isCorrect && (
              <button
                type="button"
                onClick={onReset}
                className="mt-4 inline-flex items-center gap-1.5 font-body text-xs font-medium text-clay hover:underline"
              >
                <RotateCcw size={13} aria-hidden="true" />
                Try again
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
