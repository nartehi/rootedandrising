import { Instagram, Youtube, Mail, Heart } from 'lucide-react'
import { footer, nav, images } from '../content'

/* Lucide ships no TikTok glyph, so the mark is inlined to match the sizing
   and currentColor behaviour of its siblings. */
function TikTok({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.5 2h-3v13.2a2.7 2.7 0 1 1-2.2-2.65V9.5a5.8 5.8 0 1 0 5.2 5.77V8.94a6.6 6.6 0 0 0 3.9 1.27V7.14A3.7 3.7 0 0 1 16.5 2Z" />
    </svg>
  )
}

const socialIcons = { instagram: Instagram, youtube: Youtube, tiktok: TikTok }

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
              {footer.socials.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 font-body text-sm text-cream/60 transition-colors hover:text-cream"
                    >
                      <Icon size={18} aria-hidden="true" />
                      {social.label}
                    </a>
                  </li>
                )
              })}
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="inline-flex items-center gap-2 font-body text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  <Mail size={18} aria-hidden="true" />
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
