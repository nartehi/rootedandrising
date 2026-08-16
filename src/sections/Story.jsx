import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import { story, images } from '../content'

export default function Story() {
  return (
    <section id="story" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-honey/20 blur-3xl" />
            <img
              src={images.story}
              alt={story.imageAlt}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-bark/10"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="eyebrow">{story.eyebrow}</span>
          <h2 className="section-heading mt-4">{story.heading}</h2>
          <p className="mt-6 font-body text-base leading-relaxed text-bark/70">
            {story.body}
          </p>

          {/* Before / after framing: where she is, and where she's going */}
          <div className="mt-10 grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
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
