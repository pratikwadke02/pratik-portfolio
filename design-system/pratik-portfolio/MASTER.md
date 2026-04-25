# Design System — Master File

> **LOGIC:** When building a specific page, first check `design-system/pratik-portfolio/pages/[page-name].md`. If that file exists, its rules override this Master file. Otherwise, strictly follow the rules below.

**Project:** Pratik Portfolio
**Generated:** 2026-04-25
**Tone:** Editorial · Confident · Quietly technical · Engaging without being gimmicky
**Audience:** Senior engineers, recruiters at top-tier firms, engineering managers, peers

---

## 1. Style Direction

**Hybrid: Editorial Minimalism × Exaggerated Minimalism**

- **Exaggerated Minimalism** governs *statement moments*: hero, section openers, "featured project" cards. Oversized serif, extreme whitespace, single accent.
- **Editorial Minimalism (Swiss-discipline × Magazine-layout)** governs *dense content*: experience, project body, skills, education. Asymmetric grid, strong typographic hierarchy, rules and dividers instead of drop-shadows.

This mix gives **impact** where it matters and **density** where content demands it — not one tone across the board.

### Style Keywords
Editorial, confident, typographic, restrained, warm, considered. Asymmetric grid, large serif display, mono metadata, single amber accent. Not: neon, gradients, floating particles, 3D objects, skill bars, Dribbble card-lift.

---

## 2. Color Palette — Dark-First, Light Counterpart

Both themes are first-class citizens. Not a CSS filter flip — each has its own token values.

### Dark Mode (Default)

| Role | Hex | CSS Variable | Notes |
|------|-----|--------------|-------|
| Background | `#0A0A0A` | `--bg` | Near-black, not pure |
| Surface | `#141414` | `--surface` | Cards, elevated panels |
| Surface Muted | `#1C1C1C` | `--surface-muted` | Code blocks, subtle panels |
| Foreground | `#EDEDED` | `--fg` | Primary text |
| Foreground Muted | `#A1A1A1` | `--fg-muted` | Secondary text, metadata |
| Border | `#262626` | `--border` | Dividers, card outlines |
| Border Strong | `#3A3A3A` | `--border-strong` | Emphasis rules |
| Accent | `#E8A94B` | `--accent` | Amber/ochre — the one editorial accent |
| Accent Hover | `#F5BA5C` | `--accent-hover` | Interactive state |
| Ring | `#E8A94B` | `--ring` | Focus ring |

### Light Mode

| Role | Hex | CSS Variable | Notes |
|------|-----|--------------|-------|
| Background | `#FAFAF7` | `--bg` | Warm paper, not pure white |
| Surface | `#FFFFFF` | `--surface` | |
| Surface Muted | `#F2F1EC` | `--surface-muted` | |
| Foreground | `#111111` | `--fg` | |
| Foreground Muted | `#57534E` | `--fg-muted` | Warm-gray, not cool-gray |
| Border | `#E7E5DF` | `--border` | |
| Border Strong | `#D4D2CB` | `--border-strong` | |
| Accent | `#B8821F` | `--accent` | Deeper amber for light-mode contrast |
| Accent Hover | `#A57318` | `--accent-hover` | |
| Ring | `#B8821F` | `--ring` | |

All pairs verified ≥ 4.5:1 WCAG AA on body text; ≥ 3:1 on large/UI text.

**Color rules:**
- One accent only. Never introduce a second color.
- No gradients except one: a single `radial-gradient` noise-hint behind the hero name (5% accent opacity max).
- No glows, no neon. Ambient glow is forbidden except on the amber dot in the status pill (1px inset).

---

## 3. Typography

### Font Stack (loaded via `next/font`)

| Role | Font | Weights | Where |
|------|------|---------|-------|
| Display | **Fraunces** (variable) | 300, 400, 500, 600 + optical-size 9–144 | Name, section openers, pull quotes |
| Body | **Inter** (variable) | 400, 500, 600, 700 | All body copy, UI, nav |
| Mono | **JetBrains Mono** | 400, 500 | Eyebrow labels, dates, tech tags, timestamps, file-path metadata |

All three ship free via Google Fonts → `next/font/google` (zero FOIT, self-hosted).

### Type Scale

| Step | Size (clamp) | Line-height | Font | Usage |
|------|--------------|-------------|------|-------|
| `hero` | `clamp(3.5rem, 8vw, 7rem)` | 0.95 | Fraunces 400, optical-size 144, tracking `-0.04em` | Name only |
| `display-xl` | `clamp(2.5rem, 5vw, 4.5rem)` | 1.05 | Fraunces 400 | Section openers |
| `display-lg` | `clamp(2rem, 4vw, 3.5rem)` | 1.1 | Fraunces 400 | Project feature titles |
| `display-md` | `clamp(1.5rem, 2.5vw, 2.25rem)` | 1.15 | Fraunces 500 | Sub-section openers |
| `body-lg` | `1.125rem` | 1.6 | Inter 400 | Lede paragraphs, about copy |
| `body` | `1rem` | 1.6 | Inter 400 | Default body |
| `body-sm` | `0.875rem` | 1.55 | Inter 400 | Dense content, cards |
| `label` | `0.75rem` | 1.4 | JetBrains Mono 500, uppercase, tracking `0.15em` | Eyebrow labels, metadata |
| `tag` | `0.6875rem` | 1 | JetBrains Mono 500 | Tech tags, chips |

**Typography rules:**
- Serif (Fraunces) and Mono (JetBrains) signal "editorial" and "engineer" respectively. Never use a serif for code or a mono for body.
- Tabular numerals (`font-variant-numeric: tabular-nums`) on all dates, percentages, and metrics.
- Max line length 66ch for body paragraphs.
- Never justify text. Always left-aligned (right-align only on mono metadata aligned to a right column).

---

## 4. Spacing & Layout

### Spacing Scale (4pt base)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Inline micro-gaps |
| `--space-2` | 8px | Tight |
| `--space-3` | 12px | Card inner tight |
| `--space-4` | 16px | Default padding |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Component gaps |
| `--space-12` | 48px | Section sub-gaps |
| `--space-16` | 64px | Section content spacing |
| `--space-24` | 96px | Between major sections (mobile) |
| `--space-32` | 128px | Between major sections (desktop) |

### Grid

- **Container max-width:** `1280px`, horizontal gutter `clamp(1.5rem, 4vw, 4rem)`
- **Editorial columns:** 12-col grid on ≥1024px, 6-col on 640–1023px, 4-col on <640px
- **Asymmetry rules:** Hero content offsets from the 12-col center (e.g., left-aligned to column 2–10); featured project spans 8 cols, secondary spans 4.

### Radii & Strokes

- Border radius: `0px` on all statement elements (section openers, featured cards). `8px` on buttons, `12px` on secondary cards, `6px` on inline chips.
- Stroke widths: `1px` default border, `2px` for emphasis rule (horizontal editorial divider), `4px` for section-opening full-bleed rule.
- No drop shadows except `--shadow-lift: 0 1px 0 0 var(--border-strong)` — a single-pixel bottom line for subtle lift. Never use blur-shadows.

---

## 5. Component Specs

### Buttons

Two variants only: primary (amber fill) and ghost (text + underline-on-hover).

```css
/* Primary */
.btn-primary {
  background: var(--accent);
  color: var(--bg);
  padding: 14px 24px;
  border-radius: 8px;
  font: 500 0.9375rem/1 Inter;
  letter-spacing: -0.01em;
  transition: background 180ms ease-out;
}
.btn-primary:hover { background: var(--accent-hover); }
.btn-primary:focus-visible { outline: 2px solid var(--ring); outline-offset: 3px; }

/* Ghost */
.btn-ghost {
  color: var(--fg);
  padding: 14px 0;
  font: 500 0.9375rem/1 Inter;
  border-bottom: 1px solid var(--border);
  transition: border-color 180ms ease-out;
}
.btn-ghost:hover { border-color: var(--fg); }
```

### Chips (Tech Tags)

```css
.chip {
  display: inline-flex; align-items: center;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font: 500 0.6875rem/1 "JetBrains Mono";
  color: var(--fg-muted);
  transition: border-color 180ms, color 180ms;
}
.chip:hover { border-color: var(--accent); color: var(--fg); }
```

### Cards (Editorial)

```css
.card-editorial {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  transition: border-color 180ms ease-out;
}
.card-editorial:hover { border-color: var(--border-strong); }
```

No `translateY`, no shadow-lift on hover. The hover move is the *content inside* (reveal a "read more →", brighten the title, or extend a rule).

---

## 6. Patterns (Portfolio-Specific)

### Hero
- Oversized Fraunces name, optical-size 144, tracking -0.04em.
- Mono eyebrow above: `SOFTWARE DEVELOPER — DATA ENGINEERING`
- One-line value prop below name in Fraunces italic + em-rules (pull-quote styling).
- Status pill: `● Mumbai · Open to select work` — 8px amber dot, mono text, thin border.
- Subtle grain SVG noise overlay (opacity 0.03).
- No animated background. No particles. No 3D.
- Scroll affordance: small `SCROLL ↓` label in mono, bottom-center, idle-animated vertical rule.

### Experience (Editorial Timeline)
- Two-column: `year range (mono, right-aligned)` · `role (serif) + company + outcome (body)`
- Expand-in-place on click: reveals 3–5 impact bullets, each rewritten as *outcome-first*.
- Current role pre-expanded. Others collapsed with a `+` indicator (rotates to `−` on expand).
- Use `height: auto` via Framer Motion for smooth expand, not `display: none`.

### Projects (Asymmetric Bento)
- Grid: one 2×2 featured + four 1×1 secondary + optional 2×1 row for personal projects.
- Featured card: Fraunces display title, larger image area, full description.
- Secondary cards: smaller Fraunces title, concise blurb, tech chips up top.
- Hover: content reveal (an underlined "VIEW PROJECT →" appears), not card lift.
- Placeholder images: grain-textured panels with a single-letter monogram in amber.

### Skills (Editorial Category Lists)
- Categories as mono eyebrow labels: `CURRENTLY WORKING WITH`, `EXPLORING`, `PRIOR EXPERIENCE`.
- Each skill is a mono chip, hover reveals small tooltip: `Used at Apollo` / `Side projects`.
- No progress bars, no star ratings, no 3D badges.

### Education & Certifications
- Single editorial line per entry: `YYYY–YYYY · Institution · Degree · Note (italic)`.
- Certifications: placeholder card with amber dashed border + mono `// CERTIFICATIONS PLACEHOLDER` label until user adds content.

### Contact
- Short, confident statement in Fraunces display-md.
- Four actions: Email (primary amber button), LinkedIn, GitHub, Download Resume (ghost buttons).
- Each ghost button shows its target on hover (mono text appears below the label).

### Footer
- Minimal: three rows — quick links, colophon, copyright.
- **Colophon** is the creative/engaging moment: `Built with Next.js 14, Framer Motion, and Fraunces by Christian Schwartz-inspired type. Deployed on Vercel.` This delights engineers and signals craft.

---

## 7. Engagement Layer (For Recruiters + Peers + Everyone)

These are the "creative, interesting, engaging" touches. Restrained — not gimmicks.

### Command Palette (⌘K)
- Headless component; mono font; amber highlight on active row.
- Actions: Jump to section · Copy email · Download resume · Open LinkedIn · Open GitHub · Toggle theme · View source (GitHub repo link).
- Opens on `⌘K` / `Ctrl+K` / clicking the `⌘K` hint in nav.

### Custom Cursor (desktop ≥1024px only)
- 8px circle, `mix-blend-mode: difference`, 100ms spring trail.
- On interactive elements: expands to 40px pill with a mono label (`VIEW`, `COPY`, `OPEN →`).
- Disabled automatically on touch devices and when `prefers-reduced-motion`.

### Sticky Nav (Morphing)
- Full-width top bar until 80px scroll → condenses to floating ~60%-width pill, backdrop-blur, thin amber bottom-rule.
- Spring animation on the morph (Framer Motion layout).

### Scroll Progress Indicator
- 1px amber rule across top of viewport, fills with scroll progress. Very subtle; does not compete with content.

### "Currently Building" Card (About section)
- Small live-feeling card: mono label `CURRENTLY` + serif text (e.g., "Semantic search at enterprise scale"). Adds warmth, signals this is a real person, not just a resume dump.
- Content is static/editable in `lib/content.ts` — no live fetch required.

### Marquee Ticker (Optional, subtle)
- Between Experience and Projects: slow-moving horizontal ticker of keywords in mono (`KEYSET PAGINATION · TEMPORAL WORKFLOWS · VECTOR SEARCH · AZURE AKS ·`).
- 60s duration, 10% opacity, respects reduced-motion.

### Easter Egg (One only)
- Typing `snowflake` anywhere triggers a one-off amber snowflake SVG that falls across the viewport for 2s, then vanishes. Delightful, not disruptive. Tied to his actual tech (Snowflake).

### Colophon Hover States
- On hover of the footer colophon, each mentioned technology highlights in amber and shows its version in a tiny tooltip. Craft detail.

### Copy-to-Clipboard
- Email, phone, and GitHub URL are click-to-copy. Mono toast appears: `COPIED →`.

---

## 8. Animation & Interaction Principles

| Principle | Value |
|-----------|-------|
| Default duration | 180–300ms |
| Reveal duration | 500–650ms |
| Easing (UI) | `cubic-bezier(0.25, 0.1, 0.25, 1)` (ease-out cubic) |
| Easing (spring) | Framer Motion `{ type: "spring", stiffness: 200, damping: 28 }` |
| Max concurrent animations per view | 2 |
| Scroll reveals | by word (not letter), 40ms stagger, mask-clip reveal |
| Scroll-linked | Hero optical-size 144→96 as user scrolls first 200px |
| Page transitions | None (single page) |
| Section reveals | `whileInView` fade + 8px translateY, 500ms |

**Reduced motion:** All scroll-linked, cursor, stagger, ticker, and morphing animations drop to instant/simple fade. ⌘K remains functional but without entrance animation.

---

## 9. Accessibility Baseline

- Semantic HTML: `<header>`, `<main>`, `<section aria-labelledby>`, `<nav>`, `<footer>`, `<article>`.
- All interactive elements have visible `:focus-visible` states (2px amber outline, 3px offset).
- Keyboard nav: tab order matches visual order; `⌘K` accessible via keyboard; expandable experience items trigger on Enter/Space.
- Screen reader: all icon-only buttons have `aria-label`; decorative SVGs have `aria-hidden="true"`.
- Heading hierarchy: one `<h1>` (hero), `<h2>` per section, `<h3>` per sub-item. No skipping levels.
- Color-blind safety: amber accent never conveys meaning alone (always paired with icon or text).
- `prefers-reduced-motion` respected globally via a single media-query layer.
- `prefers-color-scheme` drives initial theme; user choice persists in `localStorage`.

---

## 10. Performance Baseline (Lighthouse 95+)

- Fonts via `next/font/google` with `display: "swap"`, preload only Fraunces + Inter (not Mono).
- Images: `next/image` with `sizes` attribute; AVIF/WebP with JPG fallback; `priority` on hero/above-fold only.
- Animations: `transform` and `opacity` only. Never animate `width/height/top/left`.
- JS: route-level code splitting; Framer Motion lazy-loaded for sections below the fold.
- Prefetch disabled on external links; enabled on internal section jumps.
- `Cumulative Layout Shift < 0.1` — all images have declared dimensions; font-loading doesn't shift layout (tabular nums + reserved space).

---

## 11. Anti-Patterns (Explicitly Forbidden)

- Neon gradients or gradients on text (except the one hero radial-noise hint)
- Floating particles, animated blobs, 3D objects
- Skill bars with percentages
- Card-lift (translateY on hover) + box-shadow growth
- Generic tech-portfolio blue accent (#3B82F6 and friends)
- Emojis as structural icons
- Rotating/scaling hero names
- "Scroll to explore" arrow bouncing animations
- Purple-pink gradient CTAs
- Hero video backgrounds
- Cursor followers that are larger than 48px or have neon trails
- Justified body text
- More than one accent color
- Drop shadows with blur on any card (replaced by 1px bottom rule)

---

## 12. Pre-Delivery Checklist

- [ ] Both light + dark themes implemented and tested
- [ ] No emojis as icons (Lucide only)
- [ ] `cursor-pointer` on all clickable elements
- [ ] All hover transitions 180–300ms, `transform`/`opacity` only
- [ ] Text contrast ≥ 4.5:1 body / ≥ 3:1 large text (both themes)
- [ ] Focus states visible (2px amber ring, 3px offset)
- [ ] `prefers-reduced-motion` honored
- [ ] `prefers-color-scheme` respected on first load; user choice persisted
- [ ] Responsive at 375 / 768 / 1024 / 1440 / 1920
- [ ] No horizontal scroll at any breakpoint
- [ ] No content hidden behind sticky nav (reserve scroll-margin-top)
- [ ] Lighthouse 95+ on all four categories
- [ ] All `<img>` / `<Image>` have dimensions declared
- [ ] All interactive elements keyboard-reachable; tab order natural
- [ ] `<html lang="en">` + full OG meta + `sitemap.xml` + `robots.txt`
- [ ] Placeholder files committed: `/public/profile.jpg`, `/public/resume.pdf`, `/public/projects/*.jpg`, `/public/og-image.jpg`
