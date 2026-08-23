import { Check } from 'lucide-react'
import { programs } from '../content'

const pill =
  'rounded-full border px-4 py-2 font-body text-sm transition-all duration-300'
const active = 'border-clay bg-clay text-cream shadow-sm shadow-clay/20'
const idle = 'border-clay/20 bg-cream text-bark/70 hover:border-clay/50 hover:text-clay'

const field =
  'w-full rounded-2xl border border-clay/20 bg-cream px-5 py-3.5 font-body text-sm text-bark placeholder:text-bark/35 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20'

/**
 * The interactive exercise attached to a program. Every answer is saved
 * on-device through useActivities — nothing is sent anywhere.
 */
export default function ProgramActivity({ program, saved, onSave }) {
  const { activity, slug } = program
  if (!activity) return null

  const label = (
    <div className="flex items-center justify-between gap-3">
      <h4 className="font-display text-xl font-medium text-bark">
        {activity.title}
      </h4>
      <span className="eyebrow shrink-0">{programs.activityLabel}</span>
    </div>
  )

  return (
    <div className="mt-8 rounded-[1.5rem] border border-clay/15 bg-sand/70 p-6 sm:p-8">
      {label}

      {activity.kind === 'lie' && (
        <div className="mt-5">
          <p className="font-display text-2xl font-light italic text-clay">
            {activity.prompt}
          </p>
          <p className="mt-5 font-body text-sm font-medium text-bark">
            {activity.question}
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {activity.options.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={saved.truth === option}
                onClick={() =>
                  onSave(slug, {
                    truth: saved.truth === option ? '' : option,
                  })
                }
                className={`${pill} text-left ${
                  saved.truth === option ? active : idle
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <label className="mt-4 block">
            <span className="sr-only">{activity.question}</span>
            <textarea
              rows={3}
              value={saved.truthNote ?? ''}
              onChange={(e) => onSave(slug, { truthNote: e.target.value })}
              placeholder={activity.placeholder}
              className={`${field} resize-none`}
            />
          </label>
        </div>
      )}

      {activity.kind === 'scale' && (
        <div className="mt-5">
          <p className="font-body text-sm font-medium text-bark">
            {activity.question}
          </p>

          {/* Asked twice — at the start and again later — so growth is visible. */}
          {['start', 'end'].map((phase) => (
            <div key={phase} className="mt-5">
              <p className="eyebrow">
                {phase === 'start' ? activity.startLabel : activity.endLabel}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    aria-label={`${n}${
                      n === 1
                        ? ` — ${activity.minLabel}`
                        : n === 5
                          ? ` — ${activity.maxLabel}`
                          : ''
                    }`}
                    aria-pressed={saved[phase] === n}
                    onClick={() =>
                      onSave(slug, { [phase]: saved[phase] === n ? null : n })
                    }
                    className={`h-11 w-11 rounded-full border font-body text-sm transition-all duration-300 ${
                      saved[phase] === n ? active : idle
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 flex justify-between font-body text-xs text-bark/45">
            <span>1 — {activity.minLabel}</span>
            <span>5 — {activity.maxLabel}</span>
          </div>

          {saved.start && saved.end && (
            <p className="mt-4 font-body text-sm text-clay">
              {saved.end > saved.start
                ? `You have moved from ${saved.start} to ${saved.end}. That is real growth.`
                : saved.end === saved.start
                  ? `Still at ${saved.start} — steady ground counts too.`
                  : `From ${saved.start} to ${saved.end}. Honest is better than tidy.`}
            </p>
          )}

          <p className="mt-4 font-body text-xs leading-relaxed text-bark/50">
            {activity.note}
          </p>
        </div>
      )}

      {activity.kind === 'checkin' && (
        <div className="mt-5">
          <p className="font-body text-sm font-medium text-bark">
            {activity.question}
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {activity.options.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={saved.emotion === option}
                onClick={() =>
                  onSave(slug, {
                    emotion: saved.emotion === option ? '' : option,
                  })
                }
                className={`${pill} ${saved.emotion === option ? active : idle}`}
              >
                {option}
              </button>
            ))}
          </div>

          <label className="mt-5 block">
            <span className="font-body text-sm font-medium text-bark">
              {activity.followUp}
            </span>
            <textarea
              rows={3}
              value={saved.bring ?? ''}
              onChange={(e) => onSave(slug, { bring: e.target.value })}
              placeholder={activity.placeholder}
              className={`${field} mt-3 resize-none`}
            />
          </label>
        </div>
      )}

      {activity.kind === 'gifts' && (
        <div className="mt-5">
          <p className="font-body text-sm font-medium text-bark">
            {activity.question}
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {activity.options.map((option) => {
              const chosen = (saved.gifts ?? []).includes(option)
              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={chosen}
                  onClick={() => {
                    const current = saved.gifts ?? []
                    onSave(slug, {
                      gifts: chosen
                        ? current.filter((g) => g !== option)
                        : [...current, option],
                    })
                  }}
                  className={`${pill} inline-flex items-center gap-2 ${
                    chosen ? active : idle
                  }`}
                >
                  {chosen && <Check size={14} aria-hidden="true" />}
                  {option}
                </button>
              )
            })}
          </div>

          <div className="mt-7 border-t border-clay/15 pt-6">
            <h5 className="font-display text-lg font-medium text-bark">
              {activity.statementTitle}
            </h5>
            <p className="mt-4 font-body text-sm leading-loose text-bark/70">
              {activity.statementLead}{' '}
              <input
                type="text"
                value={saved.calling ?? ''}
                onChange={(e) => onSave(slug, { calling: e.target.value })}
                placeholder={activity.callingPlaceholder}
                aria-label={activity.statementLead}
                className="mx-1 w-full max-w-xs border-b border-clay/40 bg-transparent px-1 pb-1 font-body text-sm text-clay placeholder:text-bark/30 focus:border-clay focus:outline-none sm:w-auto"
              />{' '}
              {activity.statementMid}{' '}
              <input
                type="text"
                value={saved.outcome ?? ''}
                onChange={(e) => onSave(slug, { outcome: e.target.value })}
                placeholder={activity.outcomePlaceholder}
                aria-label={activity.statementMid}
                className="mx-1 w-full max-w-xs border-b border-clay/40 bg-transparent px-1 pb-1 font-body text-sm text-clay placeholder:text-bark/30 focus:border-clay focus:outline-none sm:w-auto"
              />
            </p>
          </div>
        </div>
      )}

      <p className="mt-6 font-body text-xs text-bark/45">
        {programs.savedLabel}
      </p>
    </div>
  )
}
