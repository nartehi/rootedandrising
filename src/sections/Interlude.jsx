import Reveal from '../components/Reveal'
import { interlude, images } from '../content'

/**
 * An image band that gives the eye a rest between the Values grid and the
 * Join form. Purely visual — it shares the page container and the height is
 * capped, so it stays a breath between sections rather than a section of
 * its own.
 */
export default function Interlude() {
  return (
    <section className="bg-cream pb-8">
      {/* Same container as the sections above and below, so the image lines up
          with their content rather than running edge to edge. */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <img
            src={images.seedling}
            alt={interlude.imageAlt}
            loading="lazy"
            /* 16:9 source, cropped shorter so it reads as a band. */
            className="h-72 w-full rounded-[2rem] object-cover shadow-xl shadow-bark/10 sm:h-96 lg:h-[28rem]"
          />
        </Reveal>
      </div>
    </section>
  )
}
