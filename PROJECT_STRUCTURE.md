# PB.DEV Portfolio V2 — Project Structure

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.7 | App Router, SSR, file-based routing |
| React | 19.2.4 | UI rendering |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | v4 | Utility-first styling via `@theme` system |
| Framer Motion | ^12.40.0 | Animations, scroll-linked parallax, variants |
| Lenis | ^1.3.23 | Smooth scrolling |
| Lucide React | ^1.17.0 | Icon library |
| PostCSS | - | CSS processing (Tailwind plugin) |

## Fonts

- **Sans (body):** Inter (Google Fonts, variable `--font-inter`)
- **Mono (headings/code):** JetBrains Mono (Google Fonts, variable `--font-jetbrains-mono`)

---

## Full File Tree

```
Portfolio/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
│
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── images/pokemon/
│       ├── media__1780560625187.jpg   → Bulbasaur close-up
│       ├── media__1780560625193.jpg   → Squirtle with sunglasses
│       ├── media__1780560625220.jpg   → Chikorita
│       ├── media__1780560625268.jpg   → Snorlax relaxing
│       ├── media__1780560625279.jpg   → Pokémon tower stack
│       ├── media__1780561800593.jpg   → Psyduck confused
│       ├── media__1780561800618.jpg   → Ash battle artwork
│       └── (+ 7 duplicate files)
│
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css              → Design system (colors, glass effects, Lenis)
    │   ├── layout.tsx               → Root layout (fonts, metadata, SmoothScroll wrapper)
    │   ├── not-found.tsx            → Custom 404 page (Psyduck)
    │   └── page.tsx                 → Main page (assembles all sections)
    │
    ├── components/
    │   ├── About.tsx                → About section (5 story cards, Bulbasaur, Chikorita)
    │   ├── Contact.tsx              → Contact section (email, GitHub, <Linkedin)
    │   ├── DSA.tsx                  → DSA journey (profiles, roadmap, Ash artwork)
    │   ├── FloatingParticles.tsx    → Canvas particle animation (Hero background)
    │   ├── Footer.tsx               → Footer (Snorlax, brand, links)
    │   ├── GitHub.tsx               → GitHub repos (real API fetch, fallback data)
    │   ├── GradientBlobs.tsx        → Animated gradient blobs (Hero background)
    │   ├── Hero.tsx                 → Hero section (parallax, CTAs, floating cards)
    │   ├── Navbar.tsx               → Fixed glassmorphism navbar
    │   ├── PokemonEasterEgg.tsx     → Squirtle floating easter egg (Hero)
    │   ├── ProjectCard.tsx          → Rich project card (spotlight hover, gradient header)
    │   ├── Projects.tsx             → Projects grid section
    │   ├── ScrollIndicator.tsx      → Scroll-down arrow indicator
    │   ├── Skills.tsx               → Skills section (animated progress bars)
    │   ├── SmoothScroll.tsx         → Lenis smooth scroll wrapper
    │   └── Timeline.tsx             → Timeline section (progress line, Pokémon tower)
    │
    ├── data/
    │   ├── pokemon.ts               → Pokémon asset path mapping
    │   ├── projects.ts              → 6 project entries with metadata
    │   ├── skills.ts                → 4 skill categories, 17 skills
    │   └── timeline.ts              → 5 timeline milestone events
    │
    └── hooks/
        └── useScrollProgress.ts     → Custom scroll progress hook

```

## Section Order (page.tsx)

1. `<Navbar />`
2. `<Hero />`
3. `<About />`
4. `<Projects />`
5. `<Timeline />`
6. `<Skills />`
7. `<DSA />`
8. `<GitHub />`
9. `<Contact />`
10. `<Footer />`

## Key Dependencies

```json
{
  "dependencies": {
    "framer-motion": "^12.40.0",
    "lenis": "^1.3.23",
    "lucide-react": "^1.17.0",
    "next": "16.2.7",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Git Info

- **Remote:** `https://github.com/pxxad/Portfolio.git`
- **Branch:** `main`
- **Latest commit:** `395a647 feat: rebuild PB.DEV portfolio V2`
