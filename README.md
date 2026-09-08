# Portfolio (Vue 3 + Vite)

A modernized, fully custom-styled portfolio for a creative developer / digital
artist. No Bootstrap CSS — layout, type, color, and motion are hand-built.

## Design system

- **Palette:** Ink `#12121A`, Paper `#ECEEF2`, Indigo `#6C5CE7` (primary),
  Coral `#FF6452` (secondary), Mint `#17B890` (status/accents), Muted gray `#6B7280`.
- **Type:** Space Grotesk (headings), Inter (body copy), JetBrains Mono
  (eyebrows, labels, nav — the "developer" voice throughout the page).
- **Signature elements:** a floating glass nav with a live "available for
  work" status dot, a terminal-style `$ whoami` hero with a blinking-cursor
  role rotator, and bracket-corner framing on the hero portrait.

## Project structure

```
portfolio-vue/
├── index.html                 # HTML entry, loads Space Grotesk / Inter / JetBrains Mono
├── package.json
├── vite.config.js
├── public/
│   └── assets/img/            # put your images here (see README.txt inside)
└── src/
    ├── main.js                # imports Bootstrap Icons + global reset, mounts app
    ├── style.css               # global reset / base styles
    ├── App.vue                 # root component, renders <Portfolio />
    └── components/
        └── Portfolio.vue       # the full page (nav, hero, about, projects, services, contact, footer)
```

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Adding your images

Drop your images into `public/assets/img/` using the filenames listed in
`public/assets/img/README.txt` (or update the `src` paths in
`src/components/Portfolio.vue` to match your own filenames).

## Customizing

All design tokens (colors, fonts, radius) live as CSS custom properties at
the top of `Portfolio.vue`'s `<style>` block under `.page { ... }` — change
them there to retheme the whole page in one place.

## Notes

- Bootstrap Icons is still used for iconography (social links, service
  icons); everything else is custom CSS — no Bootstrap grid or utility
  classes.
- The contact form's `handleSubmit` function in `Portfolio.vue` currently
  just logs the values and shows an alert. Wire it up to your backend or an
  email service (e.g. Formspree, EmailJS) as needed.
- Scroll-based behavior (active nav link, section reveal animations,
  back-to-top button, hero role rotator) is implemented with Vue's
  `ref`/`reactive` state, `IntersectionObserver`, and
  `onMounted`/`onBeforeUnmount` lifecycle hooks — no jQuery/vanilla DOM
  scripts.
- Respects `prefers-reduced-motion`.
