import { images } from '../content'

/**
 * Card and banner artwork for the Women of The Bible pages.
 *
 * Uses the same mechanic as the rest of the site: the shared `images` map in
 * content.js, referenced by key. These are the evocative scenes carried over
 * from the original build — horizons, wheat, windows — rather than depictions
 * of the women themselves, so each is paired to the theme of her story.
 *
 * A profile's own `image` field overrides this. When real per-woman artwork
 * lands in public/images/women/, set it there and this map stops applying.
 */
export const CARD_IMAGE = {
  sarah: images.hero, // horizon at golden hour — the long wait
  rebekah: images.journey, // a road taken without knowing where
  miriam: images.story, // a shared walking scene
  ruth: images.mission, // wheat grass — she gleaned in the fields
  hannah: images.story, // a shared walking scene
  esther: images.hero, // looking toward what she must walk into
  elizabeth: images.journey, // a wildflower through cracked earth — late bloom
  'mary-mother-of-jesus': images.resources, // quiet, treasured things
  'mary-magdalene': images.hero, // dawn at the tomb
}
