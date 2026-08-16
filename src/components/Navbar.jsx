import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, images } from '../content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  /**
   * While a full-page view (#/module/… or #/about) is open the homepage
   * sections aren't mounted, so a plain `#values` link would change the hash
   * with nothing to scroll to. Leave the view first, then scroll once the
   * sections have rendered.
   */
  const goToSection = (href) => (e) => {
    setOpen(false)

    // Links to a full-page view are plain hash navigation — just start at the top.
    if (href.startsWith('#/')) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    if (!window.location.hash.startsWith('#/')) return // normal anchor
    e.preventDefault()
    window.location.hash = href
    requestAnimationFrame(() => {
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent the page behind the mobile menu from scrolling while it's open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main"
      >
        <a
          href="#top"
          onClick={goToSection('#top')}
          className="flex items-center gap-3"
        >
          <img
            src={images.logo}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-display text-xl font-medium tracking-wide text-bark">
            Rooted &amp; Rising
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={goToSection(item.href)}
                className="font-body text-sm font-medium text-bark/70 transition-colors hover:text-clay"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join"
              onClick={goToSection('#join')}
              className="btn-primary !px-6 !py-3"
            >
              Join the Sisterhood
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-bark transition-colors hover:bg-clay/10 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-clay/10 bg-cream lg:hidden">
          <ul className="space-y-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={goToSection(item.href)}
                  className="block rounded-lg px-2 py-3 font-body text-base text-bark/80 transition-colors hover:bg-clay/5 hover:text-clay"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#join"
                onClick={goToSection('#join')}
                className="btn-primary w-full"
              >
                Join the Sisterhood
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
