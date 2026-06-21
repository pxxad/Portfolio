# PB.DEV Portfolio V2 — Component Overview

Every component is a `"use client"` React component using Framer Motion for animations.

---

## Page-Level Components

### `page.tsx` — Main Page
Assembles all sections in order: Navbar → Hero → About → Projects → Timeline → Skills → DSA → GitHub → Contact → Footer.

### `layout.tsx` — Root Layout
- Loads **Inter** (sans) and **JetBrains Mono** (mono) from Google Fonts
- Sets metadata (title, description, OpenGraph, Twitter cards)
- Wraps children in `<SmoothScroll>` (Lenis)

### `not-found.tsx` — Custom 404 Page
- Uses **Psyduck** confused artwork as mascot
- Animated question marks, "Page Not Found" messaging
- "Back to Home" CTA with gradient blobs background

---

## Section Components

### `Hero.tsx` (167 lines)
**Purpose:** Landing section with parallax scroll effects.

**Features:**
- Parallax via `useScroll` + `useTransform` (text, cards, background move at different speeds)
- "Available for Internships" status pill with ping animation
- "B Prasad" large typography with gradient text
- Two CTAs: "Explore My Work" (scroll) + "Get in Touch" (anchor)
- Two floating info cards (Language Focus, Degree Focus) — desktop only
- Squirtle easter egg via `<PokemonEasterEgg />`
- Background: `<GradientBlobs />` + `<FloatingParticles />`
- Bottom: `<ScrollIndicator />`

**Props:** None  
**Data:** Hardcoded  

---

### `About.tsx` (144 lines)
**Purpose:** Personal story told through 5 narrative cards.

**Features:**
- 5 story cards with icon + title + description (staggered reveal)
- Each card has glassmorphism styling with hover lift
- **Bulbasaur** companion — positioned bottom-right (xl screens), hover tooltip "Bulba! 🌱"
- **Chikorita** mascot — positioned top-left (xl screens), faded, hover reveals

**Data:** Hardcoded `stories` array with icons: GraduationCap, Code, BrainCircuit, HeartHandshake, Rocket

---

### `Projects.tsx` (85 lines)
**Purpose:** Project showcase grid.

**Features:**
- Section header with subtitle
- 3-column responsive grid (1 col mobile → 2 md → 3 lg)
- Staggered reveal animation via container/item variants
- Delegates to `<ProjectCard />` for each project

**Data:** Imported from `@/data/projects.ts`

---

### `ProjectCard.tsx` (121 lines)
**Purpose:** Individual rich project card.

**Features:**
- **Cursor spotlight effect** — radial gradient follows mouse position via `useMotionValue`
- Gradient-colored header area with project title overlay
- Category pill badge
- Long description text
- Tech stack tag badges
- Action links: Code (GitHub) + Live Demo
- Hover: lift (-6px), scale (1.01), shadow increase
- Glassmorphism card styling

**Props:** `{ project: Project }`

---

### `Timeline.tsx` (176 lines)
**Purpose:** Vertical timeline of milestones.

**Features:**
- Animated progress line that grows as user scrolls (scaleY linked to scrollYProgress)
- Alternating left/right cards on desktop, left-aligned on mobile
- Category icons per event (GraduationCap, Award, Briefcase, Calendar)
- Each card has year badge, title, subtitle, description
- Hover: lift, shadow, opacity changes
- **Pokémon tower stack** — sticky sidebar on right (lg screens), floating animation
- Glass card tooltip below tower: "Balancing work, academics, and side projects like..."

**Data:** Imported from `@/data/timeline.ts` + `@/data/pokemon.ts`

---

### `Skills.tsx` (125 lines)
**Purpose:** Technical skillset display.

**Features:**
- 4 category cards in 2x2 grid (Languages, Frontend & UI, Tools & OS, Core & Focus)
- Each category has icon, title, and skill list
- Each skill has animated progress bar (gradient sky-blue → soft-violet)
- Proficiency percentage revealed on hover
- Staggered card reveal animations

**Data:** Imported from `@/data/skills.ts`

---

### `DSA.tsx` (178 lines)
**Purpose:** DSA/algorithmic journey section.

**Features:**
- Narrative text about problem-solving philosophy
- LeetCode + Codeforces profile cards (link to real profiles @pxxad)
- **Ash battle artwork** as training mascot (right column) with pulsing aura ring
- 4-step "Solving Path" roadmap cards (Arrays→DP progression)
- **No fake stats** — just profile links and narrative

**Data:** Hardcoded `dsaRoadmap` array + real profile URLs

---

### `GitHub.tsx` (201 lines)
**Purpose:** Live GitHub repository showcase.

**Features:**
- **Real API fetch** from `https://api.github.com/users/pxxad/repos?sort=updated&per_page=6`
- Skeleton loading state with pulse animation
- Fallback repos if API rate-limited (Portfolio, stdlib, gprMax)
- Shows: repo name, description, language badge, stars, forks
- "visit github profile" CTA button
- "view repo" hover text per card

**Data:** Live from GitHub API + fallback array

---

### `Contact.tsx` (143 lines)
**Purpose:** Contact information and call-to-action.

**Features:**
- Headline: "Have an idea or a collaboration in mind?"
- 4 contact method cards: Email, GitHub, <Linkedin, Resume
- "Send an Email" primary CTA button
- Each card has icon, label, and external link

**Data:** Hardcoded contact links (pxxad@iiitl.ac.in, github.com/pxxad, <Linkedin.com/in/pxxad)

---

### `Footer.tsx` (89 lines)
**Purpose:** Page footer with branding.

**Features:**
- **Snorlax** sleeping illustration with "Zzz..." bouncing text
- "PB.DEV" brand name
- "B Prasad · Software Engineer · IIIT Lucknow" tagline
- Navigation links: Back to Top, Projects, Contact
- Copyright notice (dynamic year)

---

## Utility Components

### `Navbar.tsx` (143 lines)
- Fixed glassmorphism navbar with backdrop blur
- Nav links: Home, About, Projects, Timeline, Skills, DSA, GitHub, Contact
- "Connect" CTA button
- Mobile hamburger menu
- Active section highlighting

### `PokemonEasterEgg.tsx` (61 lines)
- Floating Squirtle in glass orb (Hero section)
- Starts at 25% opacity, full opacity on hover
- Speech bubble tooltip: "Squirtle is chilling! 😎"
- Continuous vertical float animation

### `FloatingParticles.tsx` (98 lines)
- HTML canvas-based particle system
- Small translucent circles with random movement
- Responds to window resize

### `GradientBlobs.tsx` (84 lines)
- Multiple animated gradient spheres
- Continuous position/scale animations via Framer Motion
- Used in Hero and 404 pages

### `ScrollIndicator.tsx` (40 lines)
- Animated downward arrow/chevron
- Gentle bouncing animation
- Used at bottom of Hero section

### `SmoothScroll.tsx` (31 lines)
- Wraps children in Lenis smooth scroll
- Integrates with Framer Motion's animation frame
- Provides butter-smooth scrolling across the entire page
