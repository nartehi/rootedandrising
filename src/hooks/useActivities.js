import { useCallback, useEffect, useState } from 'react'

const KEY = 'rr:activities:v1'

/**
 * Stores the Programs page activity responses in localStorage.
 *
 * These answers are personal — an emotion check-in, a purpose statement — so
 * like the journal reflections in useProgress they deliberately never leave
 * the device. There is no network call here.
 *
 * Shape: { [programSlug]: { …fields for that activity } }
 */
const read = () => {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    // Private browsing or corrupted value — fall back to in-memory only.
    return {}
  }
}

export default function useActivities() {
  const [activities, setActivities] = useState(read)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(activities))
    } catch {
      // Storage unavailable or full; answers stay for this session only.
    }
  }, [activities])

  /** Merges one or more fields into a program's saved answers. */
  const save = useCallback((slug, patch) => {
    setActivities((prev) => ({ ...prev, [slug]: { ...prev[slug], ...patch } }))
  }, [])

  const get = useCallback((slug) => activities[slug] ?? {}, [activities])

  const clear = useCallback((slug) => {
    setActivities((prev) => {
      const next = { ...prev }
      delete next[slug]
      return next
    })
  }, [])

  return { activities, save, get, clear }
}
