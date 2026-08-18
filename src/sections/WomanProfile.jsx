import { ArrowLeft, ArrowRight, BookOpen, Heart, Quote } from 'lucide-react'
import { women } from '../content'
import { CARD_IMAGE } from './womenArt'

export default function WomanProfile({ profile, onBack, onOpen }) {
  const index = women.profiles.findIndex((p) => p.slug === profile.slug)
  const next = women.profiles[(index + 1) % women.profiles.length]
  const art = profile.image ?? CARD_IMAGE[profile.slug]

  return (
    <article className="bg-cream pb-24 lg:pb-32">
      {/* Hero banner — the card image, now with room to breathe. */}
      <div className="relative h-[22rem] w-full overflow-hidden sm:h-[26rem]">
        {art && (
          <img
            src={art}
            alt=""
            aria-hidden="true"
            /* Portrait artwork in a wide banner: anchor toward the top so
               faces stay in frame. */
            className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/65 to-bark/25" />

        <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-end px-6 pb-10 lg:px-8">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-honey">
            {profile.book}
          </span>
          <h1 className="mt-3 font-display text-5xl font-light leading-[1.05] text-cream md:text-6xl">
            {profile.name}
          </h1>
          {profile.qualifier && (
            <span className="mt-2 font-body text-xs font-medium uppercase tracking-widest text-cream/60">
              {profile.qualifier}
            </span>
          )}
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-cream/75">
            {profile.title}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pt-10 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="btn-badge group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {women.allWomenLabel}
        </button>

        {profile.verse && (
          <figure className="mt-10 rounded-[1.75rem] bg-bark p-8 text-cream sm:p-10">
            <Quote size={22} className="text-honey" aria-hidden="true" />
            <blockquote className="mt-4 font-display text-2xl font-light italic leading-relaxed sm:text-3xl">
              {profile.verse.text}
            </blockquote>
            <figcaption className="mt-5 font-body text-xs font-medium uppercase tracking-widest text-honey">
              {profile.verse.ref}
              <span className="ml-2 normal-case tracking-normal text-cream/35">
                World English Bible
              </span>
            </figcaption>
          </figure>
        )}

        <section className="mt-12">
          <h2 className="eyebrow-strong">
            {women.storyLabel}
          </h2>
          <p className="mt-4 font-body text-lg leading-[1.85] text-bark/75">
            {profile.story}
          </p>
        </section>

        <section className="mt-10 rounded-[1.75rem] border-l-2 border-clay/30 bg-sand/60 p-8">
          <div className="flex items-center gap-2.5">
            <Heart size={17} className="text-clay" aria-hidden="true" />
            <h2 className="eyebrow-strong">{women.encouragementLabel}</h2>
          </div>
          <p className="mt-4 font-body text-base leading-[1.85] text-bark/75">
            {profile.encouragement}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="eyebrow-strong">{women.lessonsLabel}</h2>
          <ul className="mt-6 space-y-5">
            {profile.lessons.map((lesson, i) => (
              <li key={lesson} className="flex items-start gap-4">
                <span
                  className="mt-0.5 font-display text-lg text-clay/45"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-base leading-[1.8] text-bark/75">
                  {lesson}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* References only — a reader opens her own Bible in her own
            translation rather than relying on text quoted here. */}
        <section className="mt-12 border-t border-clay/15 pt-8">
          <div className="flex items-center gap-2.5">
            <BookOpen size={16} className="text-clay" aria-hidden="true" />
            <h2 className="eyebrow-strong">{women.readLabel}</h2>
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {profile.passages.map((ref) => (
              <li key={ref} className="font-body text-sm text-bark/70">
                {ref}
              </li>
            ))}
          </ul>
        </section>

        {/* Keep the reader moving through the collection. */}
        <nav className="mt-14 flex flex-col gap-4 border-t border-clay/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <button type="button" onClick={onBack} className="btn-secondary">
            <ArrowLeft size={15} aria-hidden="true" />
            {women.allWomenLabel}
          </button>

          <button
            type="button"
            onClick={() => onOpen(next.slug)}
            className="btn-primary group"
          >
            {women.nextLabel} {next.name}
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </button>
        </nav>
      </div>
    </article>
  )
}
