# PB.DEV Portfolio V2 — Pokémon Integration Guide

## Overview

Pokémon artworks are used as personality-driven easter eggs and mascots throughout the portfolio. They are NOT functional UI elements — they are decorative companions that add character and charm.

---

## Asset Registry

All Pokémon assets are managed via `src/data/pokemon.ts`:

```typescript
export const pokemonAssets = {
  squirtle: "/images/pokemon/media__1780560625193.jpg",
  pokemonTower: "/images/pokemon/media__1780560625279.jpg",
  ashAura: "/images/pokemon/media__1780561800618.jpg",
  bulbasaur: "/images/pokemon/media__1780560625187.jpg",
  chikorita: "/images/pokemon/media__1780560625220.jpg",
  snorlax: "/images/pokemon/media__1780560625268.jpg",
  psyduck: "/images/pokemon/media__1780561800593.jpg"
};
```

Images are stored at: `public/images/pokemon/`

---

## Placement Map

### 1. Squirtle with Sunglasses → Hero Easter Egg

**File:** `src/components/PokemonEasterEgg.tsx`  
**Section:** Hero (top-right corner, desktop only)  
**Behavior:**
- Floats continuously (y: 0 → -12 → 0, 4s loop)
- Starts at 25% opacity (subtle / discoverable)
- Full opacity on hover
- Glass orb container (rounded-full, border, shadow)
- Speech bubble appears on hover: "Squirtle is chilling! 😎"
- AnimatePresence for smooth tooltip enter/exit

**Design Intent:** Hidden-in-plain-sight easter egg that rewards curious users.

---

### 2. Pokémon Tower Stack → Timeline Companion

**File:** `src/components/Timeline.tsx` (lines 134-169)  
**Section:** Timeline (right sidebar column, lg screens only)  
**Behavior:**
- Sticky positioning (`sticky top-36`)
- Continuous floating animation (y: 0 → -10 → 0, 6s loop)
- Scale up on hover (group-hover:scale-105)
- Drop shadow for depth
- Glass card tooltip below: "Balancing work, academics, and side projects like..."

**Layout:** 12-column grid → Timeline occupies 8 cols, tower occupies 4 cols

**Design Intent:** Visual metaphor for "stacking" achievements. Stays visible as user scrolls through timeline events.

---

### 3. Chikorita → About Section Companion

**File:** `src/components/About.tsx` (lines 124-139)  
**Section:** About (left side, xl screens only)  
**Behavior:**
- Positioned absolute left-[-100px], top 10%
- Starts at 40% opacity
- Full opacity on hover
- Scale-in entrance animation

**⚠️ Known Gap:** Should also appear in Footer with "i be-leaf in you" motivational text. Currently only in About section.

---

### 4. Bulbasaur Close-up → About Section Companion

**File:** `src/components/About.tsx` (lines 101-122)  
**Section:** About (bottom-right corner, xl screens only)  
**Behavior:**
- Spring entrance animation (scale 0.8 → 1, rotate 10° → 0°)
- Drop shadow for depth
- Hover tooltip: "Bulba! 🌱" (slides in from right)
- Scale up on hover (hover:scale-115)

**Design Intent:** Friendly companion that appears after reading about the developer's story.

---

### 5. Ash Battle Artwork → DSA Journey Section

**File:** `src/components/DSA.tsx` (lines 122-140)  
**Section:** DSA (right column, training mascot)  
**Behavior:**
- Scale-in entrance animation (0.9 → 1)
- Pulsing aura ring behind the artwork (bg-sky-blue/10, animate-pulse)
- Drop shadow (drop-shadow-2xl) for dramatic depth
- Scale up on hover (group-hover:scale-105)

**Design Intent:** "Training mascot" — Ash represents the grind and discipline of competitive programming, paralleling the DSA journey narrative.

---

### 6. Psyduck Confused → 404 Page

**File:** `src/app/not-found.tsx`  
**Section:** Entire 404 page (centered)  
**Behavior:**
- Spring entrance animation (scale 0.9 → 1, rotate -5° → 0°)
- Two animated question marks floating above (bounce animation with stagger)
- Scale up on hover (group-hover:scale-105)
- Gradient blobs background (same as Hero)

**Design Intent:** Humorous, personality-driven 404 page. Psyduck's confusion mirrors the user's situation.

---

### 7. Snorlax Relaxing → Footer Illustration

**File:** `src/components/Footer.tsx` (lines 18-36)  
**Section:** Footer (centered, above branding)  
**Behavior:**
- Fade-up entrance animation
- Scale up on hover (group-hover:scale-105)
- "Zzz..." text floating above with bounce animation

**Design Intent:** Cozy, end-of-page companion. Signals "you've reached the end" in a warm, playful way.

---

## Integration Pattern

All Pokémon integrations follow this consistent pattern:

```tsx
import Image from "next/image";
import { pokemonAssets } from "@/data/pokemon";

// In JSX:
<Image
  src={pokemonAssets.squirtle}
  alt="Descriptive Alt Text"
  width={128}   // or use fill with relative parent
  height={128}
  className="object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
/>
```

### Common Animation Wrapping
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative w-48 h-48 cursor-pointer group"
>
  <Image src={pokemonAssets.xxx} ... />
</motion.div>
```

---

## Visibility Rules

| Asset | Mobile | Tablet (md) | Desktop (lg) | Wide (xl) |
|---|---|---|---|---|
| Squirtle | Hidden | Visible | Visible | Visible |
| Pokémon Tower | Hidden | Hidden | Visible | Visible |
| Chikorita | Hidden | Hidden | Hidden | Visible |
| Bulbasaur | Hidden | Hidden | Hidden | Visible |
| Ash Artwork | Visible | Visible | Visible | Visible |
| Psyduck (404) | Visible | Visible | Visible | Visible |
| Snorlax | Visible | Visible | Visible | Visible |
