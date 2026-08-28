import { useEffect, useState } from 'react'
import { Send, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import { join, resources, images } from '../content'

export default function Join() {
  const [form, setForm] = useState({ name: '', email: '', stage: '' })
  // 'idle' | 'sending' | 'done' | 'error'
  const [status, setStatus] = useState('idle')

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  /**
   * Hold the thank-you long enough to read, then hand the empty form back so a
   * second person can sign up on a shared phone or laptop. Clearing the fields
   * here rather than on submit keeps the name visible in the message above.
   */
  useEffect(() => {
    if (status !== 'done') return

    const timer = setTimeout(() => {
      setForm({ name: '', email: '', stage: '' })
      setStatus('idle')
    }, 5000)

    return () => clearTimeout(timer)
  }, [status])

  /**
   * Posts the signup to Formspree, which forwards it to the ministry inbox.
   * Nothing opens on the visitor's machine — they stay on the page and see the
   * confirmation. `status` drives which of the three states renders below.
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(join.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          stage: form.stage || 'Not specified',
          _subject: 'Joining the Sisterhood',
        }),
      })

      if (!res.ok) throw new Error(`Formspree responded ${res.status}`)
      setStatus('done')
    } catch (err) {
      // Network failure or a misconfigured endpoint — offer the inbox directly
      // rather than losing the message silently.
      console.error('Signup failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="join" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-sand shadow-xl shadow-bark/5">
            <img
              src={images.join}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-sand via-sand/90 to-sand/70" />

            <div className="relative px-8 py-14 sm:px-14 lg:px-20">
              <div className="mx-auto max-w-xl text-center">
                <span className="eyebrow">{join.eyebrow}</span>
                <h2 className="section-heading mt-4">{join.heading}</h2>
                <p className="mt-5 font-body text-base leading-relaxed text-bark/65">
                  {join.body}
                </p>
              </div>

              {status === 'done' ? (
                <div
                  role="status"
                  className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-clay/20 bg-cream/80 px-8 py-12 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-clay text-cream">
                    <Check size={26} aria-hidden="true" />
                  </span>
                  <p className="font-display text-3xl font-light text-bark">
                    {join.success}
                    {form.name || 'sis'}!
                  </p>
                  <p className="font-body text-sm leading-relaxed text-bark/60">
                    Keep an eye on your inbox — encouragement is on the way.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-10 max-w-xl space-y-5"
                >
                  {status === 'error' && (
                    <p
                      role="alert"
                      className="rounded-2xl border border-clay/25 bg-cream/80 px-5 py-4 font-body text-sm leading-relaxed text-bark/70"
                    >
                      Something went wrong sending that. Please try again, or
                      email us directly at{' '}
                      <a
                        href={`mailto:${join.email}`}
                        className="font-medium text-clay underline underline-offset-4 transition-colors hover:text-bark"
                      >
                        {join.email}
                      </a>
                      .
                    </p>
                  )}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="join-name"
                        className="eyebrow mb-2 block"
                      >
                        {join.nameLabel}
                      </label>
                      <input
                        id="join-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder={join.namePlaceholder}
                        className="w-full rounded-full border border-clay/20 bg-cream px-5 py-3.5 font-body text-sm text-bark placeholder:text-bark/35 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="join-email"
                        className="eyebrow mb-2 block"
                      >
                        {join.emailLabel}
                      </label>
                      <input
                        id="join-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        placeholder={join.emailPlaceholder}
                        className="w-full rounded-full border border-clay/20 bg-cream px-5 py-3.5 font-body text-sm text-bark placeholder:text-bark/35 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="join-stage" className="eyebrow mb-2 block">
                      {join.stageLabel}
                    </label>
                    <select
                      id="join-stage"
                      value={form.stage}
                      onChange={update('stage')}
                      className="w-full rounded-full border border-clay/20 bg-cream px-5 py-3.5 font-body text-sm text-bark focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20"
                    >
                      <option value="">Select what fits you best</option>
                      {resources.stages.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary group w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Sending…' : join.cta}
                    <Send
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
