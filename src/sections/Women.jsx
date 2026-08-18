import { ArrowLeft } from 'lucide-react'
import { women } from '../content'
import { CARD_IMAGE } from './womenArt'

/**
 * Fallback wash for any profile without artwork, so a new woman added to
 * content.js never renders as a broken card.
 */
const WASHES = [
  'from-[#8C5A3B] via-[#7A443A] to-[#3A2A24]',
  'from-[#6E7F6A] via-[#4F6350] to-[#2C332B]',
  'from-[#8A6E4B] via-[#6B5436] to-[#332A20]',
  'from-[#7C6A86] via-[#5B4C66] to-[#2E2733]',
  'from-[#5E7684] via-[#455C68] to-[#282F34]',
  'from-[#A0714C] via-[#7E5638] to-[#3A2A1F]',
  'from-[#7E5C5C] via-[#614444] to-[#2F2323]',
  'from-[#6B7C8C] via-[#4E5D6B] to-[#272E34]',
  'from-[#8B6B52] via-[#6A503C] to-[#312721]',
]

export default function Women({ onBack, onOpen }) {
  return (
    <article className="bg-cream pb-24 pt-28 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
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
          {women.backLabel}
        </button>

        <header className="mt-8 max-w-2xl">
          <span className="eyebrow">{women.eyebrow}</span>
          <h1 className="mt-5 font-display text-5xl font-light leading-[1.05] text-bark md:text-6xl">
            {women.heading}
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-bark/65">
            {women.intro}
          </p>
        </header>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {women.profiles.map((p, i) => {
            const art = p.image ?? CARD_IMAGE[p.slug]
            return (
              <li key={p.slug}>
                {/* A link, not a button — each woman is her own page, so this
                    is real navigation and should be openable in a new tab. */}
                <a
                  href={`#/women/${p.slug}`}
                  onClick={() => onOpen(p.slug)}
                  className="group relative block h-72 w-full overflow-hidden rounded-[1.75rem] text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-bark/10"
                >
                  {art ? (
                    <img
                      src={art}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      /* Portrait artwork in a landscape card: anchor toward the
                         top so faces are never cropped out. */
                      className="absolute inset-0 h-full w-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        WASHES[i % WASHES.length]
                      }`}
                    >
                      <span
                        className="absolute right-5 top-3 font-display text-[7rem] font-light leading-none text-cream/20"
                        aria-hidden="true"
                      >
                        {p.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Scrim keeps the text legible over any photograph. */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bark via-bark/60 to-bark/10" />

                  <div className="relative flex h-full flex-col justify-end p-6">
                    <span className="font-body text-xs font-medium uppercase tracking-widest text-honey">
                      {p.book}
                    </span>

                    <h2 className="mt-2 font-display text-2xl font-medium text-cream">
                      {p.name}
                      {p.qualifier && (
                        <span className="mt-0.5 block font-body text-xs font-medium uppercase tracking-widest text-cream/60">
                          {p.qualifier}
                        </span>
                      )}
                    </h2>
                    <p className="mt-2 font-body text-sm leading-relaxed text-cream/75">
                      {p.title}
                    </p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}
