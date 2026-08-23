import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  Heart,
  MessageCircle,
  Sprout,
  Users,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import Join from './Join'
import { mentoring, images } from '../content'

const icons = { BookOpen, Calendar, Check, Heart, MessageCircle, Sprout, Users }

/**
 * Mentoring page (#/mentoring). Follows the same shape as the other full-page
 * views — back badge, page header, then alternating cream/sand sections.
 */
export default function Mentoring({ onBack }) {
  return (
    <article className="bg-cream pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <button type="button" onClick={onBack} className="btn-badge group">
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {mentoring.backLabel}
        </button>

        {/* Header sits beside the portrait so the page opens with an image,
            the way the homepage sections do. */}
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow-strong">{mentoring.eyebrow}</span>
            <h1 className="mt-5 font-display text-4xl font-light leading-[1.05] text-bark sm:text-5xl md:text-6xl">
              {mentoring.heading}
            </h1>
            <p className="mt-6 font-body text-lg leading-relaxed text-bark/65">
              {mentoring.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              {/* Routes, not section anchors — plain hash navigation. */}
              <a
                href="#/signup"
                onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                className="btn-primary"
              >
                {mentoring.primaryCta}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#/growth-path-phases"
                onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                className="btn-secondary"
              >
                {mentoring.secondaryCta}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-honey/20 blur-3xl" />
              <img
                src={images.seedling}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-bark/10"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Who it is for */}
      <section className="mt-24 bg-sand py-24 lg:mt-32 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow-strong">{mentoring.audience.eyebrow}</span>
            <h2 className="section-heading mt-4">
              {mentoring.audience.heading}
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-bark/60">
              {mentoring.audience.intro}
            </p>
          </Reveal>

          <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {mentoring.audience.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <li className="flex items-start gap-3 rounded-2xl border border-clay/10 bg-cream p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay">
                    <Check size={14} aria-hidden="true" />
                  </span>
                  <span className="font-body text-base leading-relaxed text-bark/80">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What you can expect */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow-strong">{mentoring.expect.eyebrow}</span>
            <h2 className="section-heading mt-4">{mentoring.expect.heading}</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mentoring.expect.items.map((item, i) => {
              const Icon = icons[item.icon]
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <article className="group h-full rounded-[1.75rem] border border-clay/10 bg-sand/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-clay/25 hover:shadow-lg hover:shadow-bark/5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-cream">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-medium text-bark">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-bark/60">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>

          {/* Three doors into the ministry. Given more weight than the cards
              above — these carry the actions, those only describe. */}
          <div className="mt-24 lg:mt-28">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow-strong">{mentoring.begin.eyebrow}</span>
              <h2 className="section-heading mt-4">
                {mentoring.begin.heading}
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-bark/60">
                {mentoring.begin.intro}
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {mentoring.begin.items.map((item, i) => {
                const Icon = icons[item.icon]
                return (
                  <Reveal key={item.title} delay={i * 0.1}>
                    <a
                      href={item.href}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'auto' })
                      }
                      className="group flex h-full flex-col rounded-[2rem] border border-clay/15 bg-sand p-8 transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-lg hover:shadow-bark/5 lg:p-10"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-clay/10 text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-cream">
                        <Icon size={24} aria-hidden="true" />
                      </span>
                      <h3 className="mt-6 font-display text-2xl font-medium text-bark">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 font-body text-base leading-relaxed text-bark/60">
                        {item.body}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-2 font-body text-sm font-medium text-clay">
                        {item.cta}
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring options */}
      <section className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow-strong">{mentoring.options.eyebrow}</span>
            <h2 className="section-heading mt-4">
              {mentoring.options.heading}
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-bark/60">
              {mentoring.options.intro}
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {mentoring.options.items.map((item, i) => {
              const Icon = icons[item.icon]
              return (
                <Reveal key={item.title} delay={i * 0.12}>
                  <article className="flex h-full flex-col rounded-[2rem] bg-cream p-8 shadow-sm shadow-bark/5 lg:p-10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-medium text-bark">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 font-body text-base leading-relaxed text-bark/60">
                      {item.body}
                    </p>
                    <a
                      href="#/signup"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'auto' })
                      }
                      className="group mt-7 inline-flex items-center gap-2 self-start font-body text-sm font-medium text-clay"
                    >
                      {mentoring.primaryCta}
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* The homepage Connect section, reused verbatim — it owns its own state,
          so it needs no props here. */}
      <Join />
    </article>
  )
}
