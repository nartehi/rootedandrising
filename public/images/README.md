# Images

Drop image files here and reference them from `src/content.js`.

Anything in `public/` is served from the site root, so a file at
`public/images/logo/logo.png` is referenced as `/images/logo/logo.png`
— note the leading slash, and no `public` in the path.

## Folders

| Folder      | What goes here                                              |
| ----------- | ----------------------------------------------------------- |
| `logo/`     | The Rooted & Rising logo and any variants (light/dark, icon) |
| `sections/` | Homepage section backgrounds and photos                      |
| `team/`     | Portraits — Jewel's founder photo, future team members       |
| `women/`    | Card artwork for the Women of The Bible page                  |

## Women of The Bible cards

Name each file after the woman's `slug` in `content.js` — `ruth.jpg`,
`esther.jpg`, `mary-mother-of-jesus.jpg` — then set her `image`:

```js
{ slug: 'ruth', name: 'Ruth', image: '/images/women/ruth.jpg', ... }
```

Cards are landscape and text sits across the bottom third over a dark
scrim, so choose images whose lower area is not busy. Portrait artwork is
anchored toward the top (`object-[center_25%]`) so faces are not cropped
out. A profile with no `image` falls back to a clay gradient with her
initial — that is intentional, so the page looks finished while artwork is
still being sourced.

Expected filenames (set in `content.js`, still to be added):

```
sarah.jpg      rebekah.jpg    miriam.jpg     ruth.jpg
hannah.jpg     esther.jpg     elizabeth.jpg
mary-mother-of-jesus.jpg      mary-magdalene.jpg
```

## Using an image

Add the file, then point `content.js` at it. To swap the logo:

```js
// src/content.js
export const images = {
  logo: '/images/logo/logo.png',   // was a media.base44.com URL
  ...
}
```

The site currently hot-links every image from `media.base44.com`. Those
URLs still work, so images can be moved over one at a time — replace a
URL only once the local file is in place.

## Before adding a photo

- **Resize first.** Full-resolution phone photos are often 4–8 MB and will
  make the page slow. Section images need no more than ~2000px on the long
  edge; portraits ~1000px is plenty.
- **Format:** `.jpg` for photographs, `.png` for the logo or anything
  needing transparency, `.webp` if you want smaller files and don't need
  older-browser support.
- **Filenames:** lowercase, hyphens instead of spaces — `jewel-portrait.jpg`,
  not `Jewel Portrait.JPG`. Spaces and capitals cause broken links on the
  live server even when they work locally.
- **Check the rights.** Only add photos the ministry owns or is licensed to
  use, and get permission before publishing a photo of someone.

## Alt text

Every image on the site has an `imageAlt` entry in `content.js` describing
it for screen readers and for when an image fails to load. When you swap in
a new photo, update its alt text to describe the new image.
