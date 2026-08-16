import { Sparkles, BookOpen, Users, TreePine } from 'lucide-react'
import Reveal from '../components/Reveal'
import { values } from '../content'

const icons = { Sparkles, BookOpen, Users, TreePine }

export default function Values() {
  return (
    <section id="values" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{values.eyebrow}</span>
          <h2 className="section-heading mt-4">{values.heading}</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="group h-full rounded-[1.75rem] border border-clay/10 bg-sand/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-clay/25 hover:shadow-lg hover:shadow-bark/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-cream">
                    <Icon size={22} aria-hidden="true" />
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
      </div>
    </section>
  )
}
