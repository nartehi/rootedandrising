import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Story from './sections/Story'
import Mission from './sections/Mission'
import Values from './sections/Values'
import Journey from './sections/Journey'
import Resources from './sections/Resources'
import Join from './sections/Join'
import ModuleView from './sections/ModuleView'
import About from './sections/About'
import { getModule } from './modules'

// Full-page views live behind #/… hashes so they are linkable and the browser
// back button works, without pulling in a router for two extra views.
const readRoute = () => {
  const { hash } = window.location
  const m = hash.match(/^#\/module\/([\w-]+)$/)
  if (m) return { view: 'module', slug: m[1] }
  if (hash === '#/about') return { view: 'about', slug: null }
  return { view: 'home', slug: null }
}

export default function App() {
  const [route, setRoute] = useState(readRoute)
  const { view, slug } = route

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const openModule = useCallback((next) => {
    window.location.hash = `#/module/${next}`
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const closeModule = useCallback(() => {
    // Return to the Wisdom Well rather than the top of the page.
    window.location.hash = '#resources'
  }, [])

  const closeAbout = useCallback(() => {
    window.location.hash = '#top'
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  /**
   * While a full-page view is open the homepage sections aren't mounted, so a
   * plain `#join` link would change the hash with nothing to scroll to. Switch
   * back to the homepage first, then scroll once the sections have rendered.
   */
  const goToSection = useCallback(
    (href) => (e) => {
      e.preventDefault()
      window.location.hash = href
      requestAnimationFrame(() => {
        document
          .querySelector(href)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    },
    [],
  )

  const active = view === 'module' ? getModule(slug) : null

  // An unknown slug (stale link, typo) should not render a blank page.
  useEffect(() => {
    if (view === 'module' && !active) window.location.hash = '#resources'
  }, [view, active])

  return (
    <>
      <Navbar />
      {active ? (
        <main>
          <ModuleView module={active} onBack={closeModule} />
        </main>
      ) : view === 'about' ? (
        <main>
          <About onBack={closeAbout} onNavigate={goToSection} />
        </main>
      ) : (
        <main>
          <Hero />
          <Story />
          <Mission />
          <Values />
          <Journey />
          <Resources onOpenModule={openModule} />
          <Join />
        </main>
      )}
      <Footer />
    </>
  )
}
