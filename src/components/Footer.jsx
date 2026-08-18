import { Instagram, Mail, Heart } from 'lucide-react'
import { footer, nav, images } from '../content'

export default function Footer() {
  return (
    <footer className="bg-bark py-16 text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              {/* Round crop keeps the logo's cream backdrop from reading as a
                  pale square against the dark footer. */}
              <img
                src={images.logo}
                alt=""
                className="h-11 w-11 rounded-full bg-cream object-contain p-1"
              />
              <span className="font-display text-xl font-medium tracking-wide">
                Rooted &amp; Rising
              </span>
            </div>
            <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-cream/55">
              {footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-body text-xs font-medium uppercase tracking-widest text-honey">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-body text-xs font-medium uppercase tracking-widest text-honey">
              Connect
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={footer.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-body text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  <Instagram size={16} aria-hidden="true" />
                  Follow us on Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="inline-flex items-center gap-2 font-body text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  <Mail size={16} aria-hidden="true" />
                  Email us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="font-body text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Rooted &amp; Rising. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 font-body text-xs text-cream/40">
            Made with
            <Heart size={12} className="fill-clay text-clay" aria-hidden="true" />
            for young women rising.
          </p>
        </div>
      </div>
    </footer>
  )
}
