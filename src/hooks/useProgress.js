import { useCallback, useEffect, useState } from 'react'

const KEY = 'rr:progress:v1'

/**
 * Tracks lesson completion and journal entries in localStorage.
 *
 * Journal reflections are personal, so they deliberately never leave the
 * device — there is no network call here. If you later add accounts and want
 * entries to sync, treat that as sensitive data and tell users plainly.
 *
 * Shape: {
 *   [slug]: {
 *     done: number[],                        // completed lesson indexes
 *     notes: { [lessonIndex]: string },      // journal reflections
 *     answers: { [lessonIndex]: number },    // chosen quiz option index
 *   }
 * }
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

/**
 * Fills in any missing keys. Entries saved before quizzes existed have no
 * `answers`, so this keeps older saved progress readable instead of crashing.
 */
const withDefaults = (entry) => ({
  done: entry?.done ?? [],
  notes: entry?.notes ?? {},
  answers: entry?.answers ?? {},
})

export default function useProgress() {
  const [progress, setProgress] = useState(read)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress))
    } catch {
      // Storage unavailable or full; progress stays for this session only.
    }
  }, [progress])

  const toggleLesson = useCallback((slug, index) => {
    setProgress((prev) => {
      const entry = withDefaults(prev[slug])
      const done = entry.done.includes(index)
        ? entry.done.filter((i) => i !== index)
        : [...entry.done, index]
      return { ...prev, [slug]: { ...entry, done } }
    })
  }, [])

  const saveNote = useCallback((slug, index, text) => {
    setProgress((prev) => {
      const entry = withDefaults(prev[slug])
      return {
        ...prev,
        [slug]: { ...entry, notes: { ...entry.notes, [index]: text } },
      }
    })
  }, [])

  /** Pass `null` to clear the answer so the question can be retried. */
  const answerQuiz = useCallback((slug, index, optionIndex) => {
    setProgress((prev) => {
      const entry = withDefaults(prev[slug])
      const answers = { ...entry.answers }
      if (optionIndex === null) delete answers[index]
      else answers[index] = optionIndex
      return { ...prev, [slug]: { ...entry, answers } }
    })
  }, [])

  const resetModule = useCallback((slug) => {
    setProgress((prev) => {
      const next = { ...prev }
      delete next[slug]
      return next
    })
  }, [])

  const getModuleProgress = useCallback(
    (slug) => withDefaults(progress[slug]),
    [progress],
  )

  return {
    progress,
    toggleLesson,
    saveNote,
    answerQuiz,
    resetModule,
    getModuleProgress,
  }
}
