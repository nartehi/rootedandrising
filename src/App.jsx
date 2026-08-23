import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Story from './sections/Story'
import Purpose from './sections/Purpose'
import Mission from './sections/Mission'
import Values from './sections/Values'
import Interlude from './sections/Interlude'
import Mentoring from './sections/Mentoring'
import Programs from './sections/Programs'
import GrowthPathPage from './sections/GrowthPathPage'
import Join from './sections/Join'
import ModuleView from './sections/ModuleView'
import About from './sections/About'
import Signup from './sections/Signup'
import GrowthPath from './sections/GrowthPath'
import Women from './sections/Women'
import WomanProfile from './sections/WomanProfile'
import { women } from './content'
import { getModule } from './modules'

// Full-page views live behind #/… hashes so they are linkable and the browser
// back button works, without pulling in a router for two extra views.
const readRoute = () => {
  const { hash } = window.location
  const m = hash.match(/^#\/module\/([\w-]+)$/)
  if (m) return { view: 'module', slug: m[1] }
  const w = hash.match(/^#\/women\/([\w-]+)$/)
  if (w) return { view: 'woman', slug: w[1] }
  if (hash === '#/about') return { view: 'about', slug: null }
  if (hash === '#/signup') return { view: 'signup', slug: null }
  if (hash === '#/growth-path') return { view: 'growth-path', slug: null }
  if (hash === '#/mentoring') return { view: 'mentoring', slug: null }
  if (hash === '#/programs') return { view: 'programs', slug: null }
  if (hash === '#/growth-path-phases')
    return { view: 'growth-path-phases', slug: null }
  if (hash === '#/women') return { view: 'women', slug: null }
  // '', '#', and '#/home' all resolve to home so old links keep working.
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

  const openWoman = useCallback((next) => {
    window.location.hash = `#/women/${next}`
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const closeWoman = useCallback(() => {
    window.location.hash = '#/women'
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const closeModule = useCallback(() => {
    // Return to the Wisdom Well rather than the top of the page.
    window.location.hash = '#/programs'
  }, [])

  // Shared by the About and Signup pages — both return to the top of home.
  const goHome = useCallback(() => {
    window.location.hash = '#/home'
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const active = view === 'module' ? getModule(slug) : null
  const activeWoman =
    view === 'woman'
      ? women.profiles.find((p) => p.slug === slug)
      : null

  // An unknown slug (stale link, typo) should not render a blank page.
  useEffect(() => {
    if (view === 'module' && !active) window.location.hash = '#/programs'
    if (view === 'woman' && !activeWoman) window.location.hash = '#/women'
  }, [view, active, activeWoman])

  return (
    <>
      <Navbar />
      {active ? (
        <main>
          <ModuleView module={active} onBack={closeModule} />
        </main>
      ) : view === 'about' ? (
        <main>
          <About onBack={goHome} />
        </main>
      ) : view === 'signup' ? (
        <main>
          <Signup onBack={goHome} />
        </main>
      ) : view === 'growth-path' ? (
        <main>
          <GrowthPath onBack={goHome} onOpenModule={openModule} />
        </main>
      ) : view === 'women' ? (
        <main>
          <Women onBack={goHome} onOpen={openWoman} />
        </main>
      ) : view === 'growth-path-phases' ? (
        <main>
          <GrowthPathPage onBack={goHome} />
        </main>
      ) : view === 'programs' ? (
        <main>
          <Programs onBack={goHome} onOpenModule={openModule} />
        </main>
      ) : view === 'mentoring' ? (
        <main>
          <Mentoring onBack={goHome} />
        </main>
      ) : activeWoman ? (
        <main>
          <WomanProfile
            profile={activeWoman}
            onBack={closeWoman}
            onOpen={openWoman}
          />
        </main>
      ) : (
        <main>
          <Hero />
          <Purpose />
          <Story />
          <Mission />
          <Values />
          <Interlude />
          <Join />
        </main>
      )}
      <Footer />
    </>
  )
}
