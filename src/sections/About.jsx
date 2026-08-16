import { ArrowLeft, ArrowRight, Quote, Heart, BookOpen, Users, TreePine } from 'lucide-react'
import Reveal from '../components/Reveal'
import { about, images } from '../content'

const icons = { Heart, BookOpen, Users, TreePine }

export default function About({ onBack, onNavigate }) {
  const { founder, chapters, convictions, invitation } = about

  return (
    <article className="bg-cream pb-24 pt-28 lg:pb-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center gap-2 font-body text-sm font-medium text-bark/60 transition-colors hover:text-clay"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {about.backLabel}
        </button>

        <header className="mt-8">
          <span className="eyebrow">{about.eyebrow}</span>
          <h1 className="mt-5 font-display text-4xl font-light leading-tight text-bark md:text-5xl">
            {about.title}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-bark/70">
            {about.intro}
          </p>
        </header>

        {/* Founder portrait and pull-quote */}
        <Reveal>
          <section className="mt-14 grid items-center gap-10 rounded-[2rem] bg-sand/70 p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-honey/25 blur-3xl" />
              <img
                src={images.story}
                alt={about.imageAlt}
                loading="lazy"
                className="relative h-44 w-44 rounded-full object-cover shadow-xl shadow-bark/10 sm:h-52 sm:w-52"
              />
            </div>

            <figure>
              <Quote size={24} className="text-clay" aria-hidden="true" />
              <blockquote className="mt-4 font-display text-2xl font-light italic leading-relaxed text-bark sm:text-3xl">
                {founder.pullQuote}
              </blockquote>
              <figcaption className="mt-5 font-body text-xs font-medium uppercase tracking-widest text-bark/50">
                {founder.name}
                <span className="ml-2 text-clay">{founder.role}</span>
              </figcaption>
            </figure>
          </section>
        </Reveal>

        {/* The testimony, told in movements */}
        <div className="mt-16 space-y-14">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.heading} delay={0.05}>
              <section className="border-l-2 border-clay/25 pl-6 sm:pl-8">
                <div className="flex items-center gap-3">
                  <span
                    className="font-display text-sm text-clay/40"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="eyebrow">{chapter.eyebrow}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-bark sm:text-3xl">
                  {chapter.heading}
                </h2>
                <p className="mt-5 max-w-2xl font-body text-base leading-[1.85] text-bark/75">
                  {chapter.body}
                </p>
              </section>
            </Reveal>
          ))}
        </div>

        {/* What the ministry is committed to */}
        <Reveal>
          <section className="mt-20">
            <span className="eyebrow">{convictions.eyebrow}</span>
            <h2 className="section-heading mt-4">{convictions.heading}</h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {convictions.items.map((item) => {
                const Icon = icons[item.icon] ?? Heart
                return (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-clay/15 bg-sand/50 p-7"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clay/10 text-clay">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-medium text-bark">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-bark/70">
                      {item.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>
        </Reveal>

        {/* Invitation */}
        <Reveal>
          <section className="mt-20 rounded-[2rem] bg-bark px-8 py-14 text-center text-cream sm:px-12">
            <h2 className="font-display text-3xl font-light sm:text-4xl">
              {invitation.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-cream/65">
              {invitation.body}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href="#join"
                onClick={onNavigate('#join')}
                className="btn-primary group"
              >
                {invitation.primaryCta}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#journey"
                onClick={onNavigate('#journey')}
                className="btn-secondary !border-cream/30 !text-cream hover:!bg-cream/10"
              >
                {invitation.secondaryCta}
              </a>
            </div>
          </section>
        </Reveal>
      </div>
    </article>
  )
}
