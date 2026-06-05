# PB.DEV Portfolio V2 — Projects Section Design

## Overview

The Projects section (`src/components/Projects.tsx` and `src/components/ProjectCard.tsx`) houses the gallery of B Prasad's launch-grade engineering projects, libraries, and simulation tools. The design is clean, using a minimal light background grid combined with high-fidelity interactive elements, glassmorphic cards, and custom cursor-tracking spotlight shaders.

---

## Background & Layout Grid

### 1. Light Radial Grid Background
To ground the cards in a modern grid structure, the section background incorporates a repeating, low-opacity radial mesh:
```css
bg-[radial-gradient(#a8c5f0_1px,transparent_1px)] [background-size:32px_32px] opacity-15
```
This renders tiny ice blue nodes every 32px, creating a blueprint or technical drawing aesthetic without introducing heavy borders.

### 2. Card Grid
The grid adapts responsively to screen widths:
- **Mobile:** 1 column (`grid-cols-1`)
- **Tablet:** 2 columns (`grid-cols-2`)
- **Desktop:** 3 columns (`grid-cols-3`)
- **Spacing:** Large gaps (`gap-8`) to give card hover transformations plenty of breathing room.

---

## Staggered Entrance Animations

The cards transition smoothly into view as the user scrolls down:
- **Container Variants:** Uses a container that staggers the reveal of its children by `0.1s` (`staggerChildren: 0.1`).
- **Child Transition:** Cards start invisible and displaced (`opacity: 0, y: 30`) and ease upward into position (`opacity: 1, y: 0`).
- **Easing Curve:** Uses a custom cubic bezier ease-out curve (`ease: [0.16, 1, 0.3, 1]`) spanning `0.8s` for a fluid deceleration.
- **Viewport Trigger:** Invoked when `100px` of the grid enters the viewport (`viewport={{ once: true, margin: "-100px" }}`).

---

## The Interactive Project Card

The `ProjectCard.tsx` component is engineered with several micro-interactions and styling layers to achieve a premium, tactile feel.

### 1. Cursor-Tracking Spotlight (Interactive Shader)
Each card tracks the user's cursor dynamically on hover to create a subtle glow overlay:
- **Calculations:** On `onMouseMove`, the card calculates the coordinates (`mouseX` and `mouseY`) of the cursor relative to the card's bounding rectangle:
  ```typescript
  const { left, top } = card.getBoundingClientRect();
  mouseX.set(e.clientX - left);
  mouseY.set(e.clientY - top);
  ```
- **Shader Effect:** Uses Framer Motion's `useMotionTemplate` to construct a dynamic CSS radial gradient:
  ```typescript
  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(168, 197, 240, 0.25),
      transparent 80%
    )
  `;
  ```
- **Display:** This gradient overlay is hidden by default and fades in smoothly (`group-hover:opacity-100 transition-opacity duration-300`) as the cursor moves over the card, highlighting the text and border under the mouse.

### 2. Card Lift & Hover Scale
When hovered, the card lifts up (`y: -6`) and scales up extremely slightly (`scale: 1.01`) over `0.4s` using a smooth cubic bezier, casting a larger shadow overlay.

### 3. Visual Header / Thumbnail Gradient
Each project features a unique color gradient matching its identity:
- **Gradients:** Configured in `src/data/projects.ts` (e.g., standard slate-to-blue for PB.DEV, violet-to-indigo for stdlib, white-to-violet for Dynamic QR).
- **Background Details:** Covered with a secondary white dot matrix (`bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]`) at 20% opacity.
- **Overlay Text:** Contains the uppercase title in heavy monospace (`font-mono font-extrabold tracking-widest drop-shadow-md`). The text scales up and becomes more opaque when the card is hovered.

### 4. Card Metadata & Typography
- **Category Badge:** Upper-case badge in light blue (`text-[9px] font-bold text-sky-blue bg-sky-blue/10 px-2.5 py-1 rounded-full uppercase`).
- **Title:** Font family matches the monospace theme (`font-mono text-xl font-bold`). Changes color to `sky-blue` on card hover.
- **Description:** Small, clean, and highly readable gray text (`text-xs md:text-sm text-text-secondary leading-relaxed font-light`).
- **Tech Stack Badges:** Minimalistic inline badges (`text-[10px] font-mono text-text-secondary bg-black/[0.03] px-2 py-0.5 rounded-md border border-black/[0.05]`).

### 5. Code & Live Demo Action Bar
Located at the bottom of the card content:
- **Code:** Git link displaying a `GitBranch` icon. Hovering transitions color to the primary dark shade.
- **Live Demo:** External link displaying an `ExternalLink` icon and utilizing the signature `text-sky-blue` color. Dynamically hidden if `liveUrl` is `null`.
