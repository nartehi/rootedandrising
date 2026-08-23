import Reveal from '../components/Reveal'
import { story, images } from '../content'

/**
 * Two columns: the editorial text — display heading with an italic clay
 * accent, lead paragraph, and the before/after pair — beside the portrait.
 */
export default function Story() {
  const columns = [
    { label: story.beforeLabel, items: story.struggles, tone: 'before' },
    { label: story.afterLabel, items: story.outcomes, tone: 'after' },
  ]

  return (
    <section id="story" className="bg-cream py-24 lg:py-32">
      {/* Top-aligned: the text column is much taller than the portrait, so
          centring would strand the image in the middle of the section. */}
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <span className="eyebrow-strong">{story.eyebrow}</span>

            <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-bark sm:text-5xl">
              {story.headingLead}{' '}
              <span className="italic text-clay">{story.headingAccent}</span>{' '}
              {story.headingRest}
            </h2>

            <p className="mt-8 font-body text-lg leading-relaxed text-bark/70">
              {story.body}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {columns.map((column, i) => (
              <Reveal key={column.label} delay={i * 0.12}>
                {/* The "after" card carries a warm clay tint so the pair reads as
                  a progression rather than two equivalent lists. */}
                <div
                  className={`h-full rounded-[2rem] p-8 lg:p-10 ${
                    column.tone === 'after' ? 'bg-clay/[0.06]' : 'bg-sand'
                  }`}
                >
                  <h3 className="font-display text-xl font-semibold text-clay">
                    {column.label}
                  </h3>

                  <ul className="mt-6 space-y-4">
                    {column.items.map((item) => (
                      <li
                        key={item}
                        className="font-body text-base leading-relaxed text-bark/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          {/* Sticky so the portrait stays in view alongside the taller text
              column on large screens. */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:mt-20 lg:sticky lg:top-28">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-honey/20 blur-3xl" />
            <img
              src={images.story}
              alt={story.imageAlt}
              loading="lazy"
              /* Matches the source image's 2:3 proportions, so the sunrise and
                 the path at their feet are not cropped away. */
              className="relative aspect-[2/3] w-full rounded-[2rem] object-cover shadow-xl shadow-bark/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
