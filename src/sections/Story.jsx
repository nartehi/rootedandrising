import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import { story, images } from '../content'

export default function Story() {
  return (
    <section id="story" className="bg-cream py-24 lg:py-32">
      {/* Top-aligned rather than centred: the portrait is much taller than the
          text column, so centring left uneven whitespace above the heading. */}
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          {/* Capped width so the 2:3 portrait does not tower over the text
              column on wide screens. */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-honey/20 blur-3xl" />
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

        <Reveal delay={0.15}>
          <span className="eyebrow">{story.eyebrow}</span>
          <h2 className="section-heading mt-4">{story.heading}</h2>
          <p className="mt-6 font-body text-base leading-relaxed text-bark/70">
            {story.body}
          </p>
          <p className="mt-5 font-body text-base leading-relaxed text-bark/70">
            {story.bodyTwo}
          </p>

          <p className="eyebrow mt-10">{story.listLabel}</p>

          {/* Before / after framing: where she is, and where she's going */}
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <ul className="space-y-3">
              {story.struggles.map((item) => (
                <li
                  key={item}
                  className="font-body text-sm leading-relaxed text-bark/50"
                >
                  {item}
                </li>
              ))}
            </ul>

            <ArrowRight
              size={20}
              className="hidden shrink-0 text-clay/40 sm:block"
              aria-hidden="true"
            />

            <ul className="space-y-3">
              {story.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-sm font-medium leading-relaxed text-bark"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-clay"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
