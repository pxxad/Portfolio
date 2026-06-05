# PB.DEV Portfolio V2 — Timeline Design

## Overview

The Timeline section (`src/components/Timeline.tsx`) showcases B Prasad's career milestones, education, open-source work, and key engineering achievements. It is structured as a vertical chronological timeline split into two main sections: a scroll-responsive milestone list (left) and a sticky, floating mascot stack tower (right).

---

## Visual Layout & Columns

The layout uses a 12-column grid (`grid-cols-1 lg:grid-cols-12`) at desktop sizes, reverting to a single-column layout on smaller screens.

1. **Left/Center Timeline Column (`lg:col-span-8`):**
   - Features a centered vertical axis line on desktop (alternating layout) and a left-aligned vertical line on mobile.
   - Houses chronological milestone cards alternating left and right on desktop.
2. **Right Column (`lg:col-span-4`):**
   - Sticky element (`sticky top-36`) that contains a floating Pokémon mascot tower.
   - Hidden on mobile (`hidden lg:flex`).

---

## Scroll-Linked Progress Line

The center timeline line is dynamic and fills as the user scrolls through the milestones:
- **Background track:** A static light gray line (`w-[2px] bg-black/[0.05]`).
- **Foreground line:** A growing progress bar in ice blue (`w-[2px] bg-sky-blue`).
- **Scroll Tracking:**
  - Uses Framer Motion's `useScroll` hook targetting the timeline container.
  - The offset is configured as `["start center", "end center"]` so the line builds up naturally as the center of the viewport moves through the timeline.
  - The vertical scale `scaleY` is transformed directly from `scrollYProgress` using `useTransform(scrollYProgress, [0, 1], [0, 1])` with the scale origin set to the top (`originY: 0`).

---

## Event Cards & Icons

Each timeline node consists of an interactive icon representing the category and a glassmorphism text card.

### 1. Categories & Interactive Icons
The timeline resolves icons based on the `category` property in `src/data/timeline.ts`:
- **`education`**: Renders `GraduationCap` from `lucide-react` with `text-sky-blue`.
- **`opensource`**: Renders `Award` from `lucide-react` with `text-amber-600` (representing open-source contributions).
- **`project`**: Renders `Briefcase` from `lucide-react` with `text-rose-500` (representing practical project accomplishments).
- **`default/coding`**: Renders `Calendar` from `lucide-react` with `text-soft-violet`.

The icon container is a clean white circle positioned directly on the vertical timeline axis (`-translate-x-1/2 z-20`) with a subtle border and shadow.

### 2. Glassmorphism Card Style
Cards are styled using Tailwind utility classes overlaying the custom styling system:
- **Class:** `glass-card p-6 md:p-8 rounded-[24px] border border-white/50 shadow-sm`
- **Interactions:**
  - Transition duration is 300ms.
  - On hover, cards lift up (`hover:translate-y-[-2px]`), increase background opacity (`hover:bg-white/65`), and add depth (`hover:shadow-md`).
- **Typography:**
  - Year tag: High-contrast mono badge (`text-[10px] font-bold text-sky-blue bg-sky-blue/10 px-2.5 py-1 rounded-full uppercase`).
  - Title: Crisp mono text in primary color (`text-base font-bold text-text-primary mb-1 font-mono`).
  - Subtitle: Secondary gray mono text (`text-xs font-mono font-medium text-text-secondary mb-3`).
  - Description: Light, readable body copy (`text-xs md:text-sm text-text-secondary leading-relaxed font-light`).

---

## Animations

Timeline cards slide and fade into view as they enter the screen, providing a premium feel:
- **Trigger:** Framer Motion's `whileInView` with a viewport margin of `"-100px"` to trigger slightly before the card hits the center.
- **Directional Slide:** 
  - Cards on the left slide in from the left (`x: -40` to `0`).
  - Cards on the right slide in from the right (`x: 40` to `0`).
- **Transition Curve:** Smooth spring-like easeout (`duration: 0.8, ease: [0.16, 1, 0.3, 1]`).

---

## The Pokémon Tower Mascot

On desktop viewports, the right column balances the timeline layout with a floating illustration:
- **Visuals:** Loads `pokemonAssets.pokemonTower` (a custom stack of Gen-1 starters/classic Pokémon).
- **Idle Float Animation:** An infinite keyframe loop that floats the image up and down (`y: [0, -10, 0]`) over `6` seconds with `easeInOut` transition curves.
- **Interactive Hover:** When the cursor hovers over the mascot stack, the image scales up (`group-hover:scale-105`) and increases drop-shadow visibility.
- **Context Card:** Below the mascot, a glassmorphic callout card says: *"Balancing work, academics, and side projects like..."* to tie the mascot theme into the professional timeline theme.
