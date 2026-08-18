import { ArrowLeft } from 'lucide-react'
import Mission from './Mission'
import Values from './Values'
import { missionValues } from '../content'

/**
 * Combines the Mission and Values sections into one page (#/mission-values).
 * Both are reused unchanged, so edits to either still apply on the homepage.
 */
export default function MissionValues({ onBack }) {
  return (
    <article className="bg-cream pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <button type="button" onClick={onBack} className="btn-badge group">
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {missionValues.backLabel}
        </button>

        <header className="mt-8 max-w-2xl">
          <span className="eyebrow-strong">{missionValues.eyebrow}</span>
          <h1 className="mt-5 font-display text-5xl font-light leading-[1.05] text-bark md:text-6xl">
            {missionValues.heading}
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-bark/65">
            {missionValues.intro}
          </p>
        </header>
      </div>

      {/* The homepage sections, reused verbatim. Their own padding provides the
          spacing, so no wrapper margins are needed here. */}
      <Mission />
      <Values />
    </article>
  )
}
