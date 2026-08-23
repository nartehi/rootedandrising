import { useState } from 'react'
import {
  ArrowRight,
  Check,
  BookOpen,
  Brain,
  Briefcase,
  Cloud,
  Compass,
  Feather,
  Flag,
  Gift,
  HandHeart,
  Heart,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Users,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import { resources } from '../content'
import { modules } from '../modules'
import useProgress from '../hooks/useProgress'

// Every icon a module in modules.js can declare.
const icons = {
  BookOpen,
  Brain,
  Briefcase,
  Cloud,
  Compass,
  Feather,
  Flag,
  Gift,
  HandHeart,
  Heart,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Users,
}

export default function Resources({ onOpenModule }) {
  const [stage, setStage] = useState(resources.stages.options[0])
  const { getModuleProgress } = useProgress()

  // The stage tabs are a real filter, not decoration — each module declares
  // which stages it is appropriate for in modules.js.
  const visible = modules.filter((m) => m.stages.includes(stage))

  return (
    <section id="resources" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{resources.eyebrow}</span>
          <h2 className="section-heading mt-4">{resources.heading}</h2>
          <p className="mt-5 font-body text-base leading-relaxed text-bark/60">
            {resources.subheading}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <fieldset className="text-center">
            <legend className="eyebrow mb-5 w-full">
              {resources.stages.label}
            </legend>
            <div className="flex flex-wrap justify-center gap-3">
              {resources.stages.options.map((option) => {
                const active = option === stage
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setStage(option)}
                    aria-pressed={active}
                    className={`rounded-full border px-5 py-2.5 font-body text-sm transition-all duration-300 ${
                      active
                        ? 'border-clay bg-clay text-cream shadow-md shadow-clay/20'
                        : 'border-clay/20 bg-cream/60 text-bark/70 hover:border-clay/50 hover:text-clay'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </fieldset>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {visible.map((module, i) => {
            const Icon = icons[module.icon]
            const { done } = getModuleProgress(module.slug)
            const total = module.lessons.length
            const started = done.length > 0
            const finished = done.length === total

            return (
              <Reveal key={module.slug} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-[1.75rem] border border-clay/10 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-clay/25 hover:shadow-lg hover:shadow-bark/5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-clay/10 text-clay">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <span className="eyebrow">{module.category}</span>
                    </div>

                    {finished ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-clay/10 px-3 py-1 font-body text-xs font-medium text-clay">
                        <Check size={12} aria-hidden="true" />
                        Complete
                      </span>
                    ) : started ? (
                      <span className="rounded-full bg-honey/25 px-3 py-1 font-body text-xs font-medium text-bark/70">
                        {done.length}/{total}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-medium leading-snug text-bark">
                    {module.title}
                  </h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-bark/60">
                    {module.summary}
                  </p>

                  <p className="mt-5 font-body text-xs uppercase tracking-widest text-bark/40">
                    {module.duration}
                  </p>

                  <button
                    type="button"
                    onClick={() => onOpenModule(module.slug)}
                    className="mt-6 inline-flex items-center gap-2 self-start font-body text-sm font-medium text-clay"
                  >
                    {finished
                      ? 'Revisit module'
                      : started
                        ? 'Continue module'
                        : 'Start module'}
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </article>
              </Reveal>
            )
          })}
        </div>

        {visible.length === 0 && (
          <p className="mt-14 text-center font-body text-sm text-bark/50">
            More modules for this stage are on the way.
          </p>
        )}
      </div>
    </section>
  )
}
