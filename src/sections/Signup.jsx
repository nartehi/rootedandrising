import { useState } from 'react'
import { ArrowLeft, Check, UserPlus } from 'lucide-react'
import Reveal from '../components/Reveal'
import { signup, images } from '../content'

// Shared between inputs and the select so every field looks the same.
const FIELD =
  'w-full rounded-full border border-clay/20 bg-cream px-5 py-3.5 font-body text-sm text-bark placeholder:text-bark/35 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20'

const EMPTY = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  city: '',
  focus: '',
}

export default function Signup({ onBack }) {
  const [form, setForm] = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  /**
   * FRONTEND ONLY — no backend, no database, nothing stored or sent anywhere.
   * The values live in component state and are gone on refresh. Replace this
   * with a real account-creation call when a provider is chosen.
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <article className="bg-cream pb-24 pt-28 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
          {signup.backLabel}
        </button>

        <Reveal>
          <div className="relative mt-8 overflow-hidden rounded-[2.5rem] bg-sand shadow-xl shadow-bark/5">
            <img
              src={images.join}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-sand via-sand/90 to-sand/70" />

            <div className="relative px-7 py-12 sm:px-12 lg:px-16">
              <div className="mx-auto max-w-xl text-center">
                <span className="eyebrow">{signup.eyebrow}</span>
                <h1 className="section-heading mt-4">{signup.heading}</h1>
                <p className="mt-5 font-body text-base leading-relaxed text-bark/65">
                  {signup.body}
                </p>
              </div>

              {submitted ? (
                <div
                  role="status"
                  className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-clay/20 bg-cream/80 px-8 py-12 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-clay text-cream">
                    <Check size={26} aria-hidden="true" />
                  </span>
                  <p className="font-display text-3xl font-light text-bark">
                    {signup.successHeading}
                    {form.firstName || 'sis'}!
                  </p>
                  <p className="font-body text-sm leading-relaxed text-bark/60">
                    {signup.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={onBack}
                    className="btn-secondary mt-2"
                  >
                    {signup.successCta}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-10 max-w-xl space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="signup-first-name"
                        className="eyebrow mb-2 block"
                      >
                        {signup.firstNameLabel}
                      </label>
                      <input
                        id="signup-first-name"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={update('firstName')}
                        placeholder={signup.firstNamePlaceholder}
                        className={FIELD}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="signup-last-name"
                        className="eyebrow mb-2 block"
                      >
                        {signup.lastNameLabel}
                      </label>
                      <input
                        id="signup-last-name"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={update('lastName')}
                        placeholder={signup.lastNamePlaceholder}
                        className={FIELD}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="signup-age"
                        className="eyebrow mb-2 block"
                      >
                        {signup.ageLabel}
                      </label>
                      <select
                        id="signup-age"
                        required
                        value={form.age}
                        onChange={update('age')}
                        className={FIELD}
                      >
                        <option value="">{signup.agePlaceholder}</option>
                        {signup.ageOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="signup-city"
                        className="eyebrow mb-2 block"
                      >
                        {signup.cityLabel}
                      </label>
                      <input
                        id="signup-city"
                        type="text"
                        required
                        autoComplete="address-level2"
                        value={form.city}
                        onChange={update('city')}
                        placeholder={signup.cityPlaceholder}
                        className={FIELD}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="signup-email"
                      className="eyebrow mb-2 block"
                    >
                      {signup.emailLabel}
                    </label>
                    <input
                      id="signup-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder={signup.emailPlaceholder}
                      className={FIELD}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="signup-focus"
                      className="eyebrow mb-2 block"
                    >
                      {signup.focusLabel}
                    </label>
                    <select
                      id="signup-focus"
                      required
                      value={form.focus}
                      onChange={update('focus')}
                      className={FIELD}
                    >
                      <option value="">{signup.focusPlaceholder}</option>
                      {signup.focusOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="btn-primary group w-full">
                    {signup.cta}
                    <UserPlus
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>

                  <p className="text-center font-body text-xs leading-relaxed text-bark/45">
                    {signup.privacyNote}
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
