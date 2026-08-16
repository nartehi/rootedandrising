# Rooted & Rising

A safe place for young women seeking true transformation in Christ. Healing, identity, purpose, and authentic community — all rooted in His love.

A React rebuild of the original Base44 site.

## Stack

- **Vite** + **React 18**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  content.js            all site copy and image URLs
  modules.js            learning module content (lessons + scripture)
  App.jsx               page composition + module routing
  hooks/
    useProgress.js      lesson completion & journal entries (localStorage)
  components/
    Navbar.jsx          fixed nav with mobile menu
    Footer.jsx
    Reveal.jsx          shared scroll-reveal wrapper
  sections/
    Hero.jsx            #top
    Story.jsx           #story
    Mission.jsx         #mission
    Values.jsx          #values
    Journey.jsx         #journey
    Resources.jsx       #resources — The Wisdom Well
    ModuleView.jsx      #/module/<slug> — interactive lessons
    Join.jsx            #join
```

## Editing content

All headings, body copy, and image URLs live in [src/content.js](src/content.js).
Change wording there rather than in the components.

## The Wisdom Well (learning modules)

Four interactive modules live in [src/modules.js](src/modules.js). Each has four
lessons, and each lesson carries:

- **a verse** — displayed on a dark quote card
- **a teaching** — short framing of the passage
- **an exposition** — "Understanding the passage": historical context, the
  original Hebrew/Greek wording, and what it meant to its first readers
- **an application** — "In your daily life": three concrete situations to
  practise it in, written for young women
- **a reflection** — a journalling prompt with a saved text area
- **a practice** — one concrete step to try that week
- **a quiz** — "Check your understanding": a multiple-choice question (A/B/C)

### About the quizzes

Each question has **three options rather than two**. With only A and B a guess
lands right half the time, and in faith content the wrong answer is often the
subtly appealing one — a third option leaves room for the near-miss that is
actually worth correcting.

**Every option carries its own feedback**, including the correct one, so a wrong
answer teaches instead of just scoring zero. Questions can be retried, and
nothing is graded or totalled — this is a comprehension check, not an exam.

Users step through lessons, mark them complete, and see a progress bar; finishing
all four unlocks a completion state.

The **stage tabs** (`Brand new to Christ` → `Walking in purpose`) are a real
filter. Each module declares a `stages` array controlling where it appears, so
a new believer isn't handed the calling module first.

### Scripture

All verse text is the **World English Bible (WEB)**, which is public domain.
Every passage was verified word-for-word against `bible-api.com` rather than
quoted from memory.

> If you swap in another translation, check its licence first — **NIV, ESV, NLT
> and The Message are copyrighted** and cannot be embedded without permission.

### Adding a module

Append to the `modules` array in `src/modules.js`. Keep the `duration` label's
lesson count in sync, give it a unique `slug`, and use an icon name that
`ModuleView.jsx` and `Resources.jsx` already import.

Each lesson needs all seven fields listed above. Quizzes must have **exactly one
option with `correct: true`**, and every option needs `feedback`.

### Privacy

Journal reflections and progress are stored in `localStorage` and **never leave
the device** — there is no network call in `useProgress.js`. If you later add
accounts and sync entries to a server, treat them as sensitive personal data and
tell users clearly before doing so.

## Design tokens

Defined in [tailwind.config.js](tailwind.config.js), carried over from the original build:

| Token   | Hex       | Use                        |
| ------- | --------- | -------------------------- |
| `clay`  | `#7A443A` | primary — deep terracotta  |
| `bark`  | `#2D2926` | body text, dark sections   |
| `cream` | `#FDFBF7` | page background            |
| `sand`  | `#F7F3ED` | alternating sections       |
| `honey` | `#E9C46A` | warm gold accent           |
| `mist`  | `#B4C7D0` | muted blue accent          |

Fonts: **Cormorant Garamond** (display) and **Montserrat** (body).

## Known gaps

- **Images** are hotlinked from the Base44 CDN. Download them into `public/` and
  update `images` in `src/content.js` before going live.
- **Newsletter form** (`#join`) validates and shows a confirmation, but does not
  submit anywhere yet — it needs a mailing list provider wired up.
- **Instagram link and contact email** in `src/content.js` are placeholders.
- **Module teaching copy needs a ministry review before launch.** The verse text
  is verified, but the `teaching`, `exposition`, `application` and quiz
  `feedback` fields are interpretation. The exposition in particular makes
  claims about historical context and about Hebrew/Greek wording — someone
  qualified should check those before this is taught to young women. It is all
  in one file, `src/modules.js`, so edits are straightforward.
