import { Sprout, Heart, Compass } from 'lucide-react'
import Reveal from '../components/Reveal'
import { mission, images } from '../content'

const icons = { Sprout, Heart, Compass }

export default function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden bg-sand py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <span className="eyebrow-strong">{mission.eyebrow}</span>
          <h2 className="section-heading mt-4">{mission.heading}</h2>
          <p className="mt-6 font-body text-base leading-relaxed text-bark/70">
            {mission.body}
          </p>

          <div className="mt-10 space-y-6">
            {mission.pillars.map((pillar) => {
              const Icon = icons[pillar.icon]
              return (
                <div key={pillar.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-bark">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-bark/60">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-mist/30 blur-3xl" />
            <img
              src={images.mission}
              alt={mission.imageAlt}
              loading="lazy"
              /* Matches the source image's 3:2 proportions so the group around
                 the open Bible is not cropped at the edges. */
              className="relative aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-bark/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
