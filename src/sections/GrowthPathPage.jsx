import { ArrowLeft } from 'lucide-react'
import Journey from './Journey'
import Join from './Join'
import { journey } from '../content'

/**
 * Standalone Growth Path page (#/growth-path-phases). Wraps the Journey
 * section, reused unchanged so edits apply wherever else it renders.
 */
export default function GrowthPathPage({ onBack }) {
  return (
    <article className="bg-sand pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <button type="button" onClick={onBack} className="btn-badge group">
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {journey.backLabel}
        </button>
      </div>

      <Journey />
      <Join />
    </article>
  )
}
