# 🌸 Birthday Celebration Website

An interactive, romantic, single-page birthday website built with **Next.js (App Router)**, **Tailwind CSS** and **Framer Motion**.
Soft blush-pink graph-paper background, floating stickers, a spinning-vinyl music player, an orbiting memory wheel,
a count-up stats bar, and a blow-out-the-candles finale with confetti and a secret message.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Production build:

```bash
npm run build
npm start
```

Requires Node.js 18.17 or newer.

## Personalise it (start here)

Almost everything is editable in **`data/content.js`**:

| What | Where in `data/content.js` |
| --- | --- |
| Song file and track name | `audioConfig` |
| Start date for the "Days Cherished" counter | `relationshipStart` (YYYY-MM-DD) |
| Nav links, marquee phrases | `navLinks`, `marqueePhrases` |
| Love letter and signature | `letterParagraphs`, `letterSignature` |
| Gallery captions and dates | `moments` |
| Orbit milestones and their secret notes | `orbitNodes` |
| The six "Why You" cards | `reasons` |
| Stats counter | `stats` |
| Secret message in the popup | `secretMessage` |

### Add your photos

Drop images into `public/photos/` named `moment-1.jpg` through `moment-6.jpg`.
Any photo that is missing shows a soft pastel placeholder, so the site never looks broken.
To use different file names, change the `src` values in `moments`.

### Add your song

Put an MP3 at `public/music/song.mp3` and set `trackName` in `audioConfig`.
Browsers block autoplay, so the music starts when she taps the play button or the "CLICK TO PLAY" pill.

## Project structure

```
app/
  layout.jsx        fonts, metadata, audio provider
  page.jsx          assembles all sections
  globals.css       grid background, smooth scroll, reduced-motion rules
components/
  Navbar, AudioProvider, AudioPlayer      navigation + music
  FloatingStickers                        drifting emoji stickers and glows
  Hero, Marquee                           opening section and ticker
  Letter                                  frosted-glass love letter
  Moments, PhotoCard, OrbitWheel          polaroid gallery + orbit wheel
  WhyYou                                  six numbered cards
  LoveStats, CountUp                      animated counters
  Celebration, Cake, Confetti             candle blowing + celebration burst
  Finale, SecretModal                     grand finale card + popup message
  Reveal, SectionHeading                  shared helpers
data/content.js     all editable text and settings
tailwind.config.js  colours, fonts, keyframes
```

## Design system

- **Colours:** blush `#FFF0F5` / `#FDF2F8`, crimson `#E11D48`, wine `#BE123C`, rose gold accents, white glass overlays
- **Fonts:** Playfair Display (headings), Great Vibes (script), Inter (body), loaded through `next/font`
- **Icons:** Lucide React
- **Motion:** Framer Motion for fade-ins, hover effects, cake, confetti and modal; CSS keyframes for the marquee, orbit and floating stickers

## Accessibility

- Visible keyboard focus, labelled buttons, `aria-modal` dialog that closes with Esc
- Motion is reduced automatically for people who prefer reduced motion (confetti is skipped too)

## Deploy

The easiest option is [Vercel](https://vercel.com): push the project to GitHub, import it, and deploy. No extra settings are needed.

Made with love 💕
