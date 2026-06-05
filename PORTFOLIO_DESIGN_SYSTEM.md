# PB.DEV Portfolio V2 — Design System

## Philosophy

Light, premium, Gen-Z aesthetic. White + ice blue palette. Glassmorphism cards. No dark SaaS dashboard look. Inspired by premium developer portfolios (Aayush-style) but fully original.

---

## Color Palette

Defined in `src/app/globals.css` using Tailwind CSS v4 `@theme` directive:

```css
@theme {
  --color-brand-bg: #ffffff;       /* Main background — pure white */
  --color-brand-alt: #f8f9fc;      /* Alternate section background — off-white */
  --color-ice-blue: #e8f0fe;       /* Light blue accent */
  --color-soft-blue: #a8c5f0;      /* Medium blue — shadows, particles */
  --color-sky-blue: #6ba4e8;       /* Primary accent — CTAs, highlights, links */
  --color-soft-violet: #b8a9e8;    /* Secondary accent — gradients, badges */
  --color-lavender: #d4ccf0;       /* Tertiary accent — decorative blurs */
  
  --color-text-primary: #1a1a2e;   /* Main text — near-black with blue undertone */
  --color-text-secondary: #4a4a6a; /* Secondary text — muted violet-gray */
}
```

### Usage Pattern
| Color | Tailwind Class | Use Case |
|---|---|---|
| `#ffffff` | `bg-brand-bg` | Hero, Projects, Skills, GitHub, Footer |
| `#f8f9fc` | `bg-brand-alt` | About, Timeline, DSA |
| `#6ba4e8` | `text-sky-blue`, `bg-sky-blue` | CTAs, badges, progress bars, active states |
| `#b8a9e8` | `text-soft-violet`, `bg-soft-violet` | Gradient endpoints, category indicators |
| `#a8c5f0` | `text-soft-blue` | Decorative blurs, particle colors |
| `#1a1a2e` | `text-text-primary` | Headings, bold text |
| `#4a4a6a` | `text-text-secondary` | Body text, descriptions, subtitles |

---

## Typography

### Fonts
| Font | Variable | Usage |
|---|---|---|
| Inter | `--font-inter` → `font-sans` | Body text, descriptions, buttons |
| JetBrains Mono | `--font-jetbrains-mono` → `font-mono` | Headings, labels, badges, code references |

### Type Scale (Common Patterns)
| Element | Classes |
|---|---|
| Section label | `text-[10px] tracking-[0.2em] font-mono text-sky-blue uppercase font-bold` |
| Section heading | `text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight` |
| Hero name | `text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tight` |
| Card title | `text-base font-bold text-text-primary font-mono` |
| Body text | `text-xs md:text-sm text-text-secondary leading-relaxed font-light` |
| Badge/pill | `text-[10px] font-bold font-mono tracking-wider bg-sky-blue/10 px-2.5 py-1 rounded-full uppercase` |
| Tech tag | `text-[10px] font-mono text-text-secondary bg-black/[0.03] px-2 py-0.5 rounded-md` |

---

## Glassmorphism System

### `.glass-card`
```css
.glass-card {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(168, 197, 240, 0.08);
}
```

### `.glass-navbar`
```css
.glass-navbar {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 30px rgba(168, 197, 240, 0.05);
}
```

### Card Standard Pattern
```
rounded-[24px] or rounded-[32px]
border border-white/50
shadow-sm
hover:shadow-md
hover:bg-white/60 or hover:bg-white/65
hover:translate-y-[-2px]
transition-all duration-300
```

---

## Animation System (Framer Motion)

### Standard Easing
```js
ease: [0.16, 1, 0.3, 1]  // Custom spring-like ease used everywhere
```

### Common Patterns

**Fade-up reveal (section headers):**
```jsx
initial={{ opacity: 0, y: 15 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: 0.1 }}
```

**Stagger children (grids):**
```jsx
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };
```

**Parallax (Hero):**
```jsx
const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
```

**Hover lift:**
```jsx
whileHover={{ y: -6, scale: 1.01 }}
transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
```

---

## Spacing & Layout

| Pattern | Value |
|---|---|
| Section padding | `py-24` (96px top/bottom) |
| Max content width | `max-w-6xl` (1152px) or `max-w-4xl` (896px) |
| Horizontal padding | `px-6` (24px) |
| Section header margin-bottom | `mb-20` or `mb-24` |
| Card padding | `p-6 md:p-8` |
| Grid gap | `gap-6` or `gap-8` |

---

## Decorative Effects

### Background Blurs
Large, positioned `absolute` blurred circles:
```jsx
<div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-soft-violet/10 blur-[80px] -z-10 pointer-events-none" />
```

### Dot Grid Patterns
```jsx
<div className="bg-[radial-gradient(#a8c5f0_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
```

### Selection Color
```css
::selection {
  background-color: rgba(168, 197, 240, 0.3);
  color: #1a1a2e;
}
```

---

## Responsive Breakpoints

Standard Tailwind breakpoints used:
| Breakpoint | Width | Typical Changes |
|---|---|---|
| Default | <640px | Single column, smaller text |
| `sm:` | 640px+ | Larger hero text, flex-row layouts |
| `md:` | 768px+ | 2-column grids, larger headings |
| `lg:` | 1024px+ | 3-column grids, floating cards visible |
| `xl:` | 1280px+ | Pokémon companions visible |
