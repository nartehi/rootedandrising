import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero, images } from '../content'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <img
        src={images.hero}
        alt={hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Warm scrim so the display type stays legible over the photo */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{hero.eyebrow}</span>

          <h1 className="mt-5 font-display text-5xl font-light leading-[1.05] text-bark sm:text-6xl lg:text-7xl">
            {hero.titleTop}
            <br />
            <span className="italic text-clay">{hero.titleBottom}</span>
          </h1>

          <blockquote className="mt-7 max-w-xl font-body text-base leading-relaxed text-bark/70 sm:text-lg">
            <p className="italic">{hero.body}</p>
            <cite className="mt-2 block text-sm not-italic text-bark/60">
              — {hero.bodyCitation}
            </cite>
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#journey" className="btn-primary group">
              {hero.primaryCta}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#/about"
              onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
              className="btn-secondary"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
