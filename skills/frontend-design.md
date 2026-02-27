---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces for Scripty. Use this skill when the user asks to build web components, pages, or UI elements. Follows a dark luxury bubble aesthetic with glassmorphism.
---

This skill guides creation of production-grade frontend interfaces for the Scripty project. Every UI element follows a cohesive dark luxury aesthetic.

## Project Context
- **Stack**: Next.js 14 + React + Tailwind CSS + DaisyUI v5
- **Theme**: DaisyUI dark theme configured in CSS (Tailwind v4)
- **Icons**: Lucide React
- **No TypeScript** — JavaScript only

## Core Aesthetic: Dark Luxury Bubble

The visual identity is **dark, transparent, rounded, elegant** — like floating glass bubbles on a dark canvas.

### Color System
- **Background**: Pure black to near-black (`#000`, `#0a0a0a`, `#111`)
- **Surfaces**: Transparent/translucent — never solid colored cards. Use `bg-white/5`, `bg-white/[0.03]`, `bg-white/[0.06]`
- **Borders**: Subtle white borders — `border-white/10`, `border-white/[0.08]`. Visible enough to define shapes, soft enough to not scream
- **Text**: White (`text-white`) for primary, `text-white/50` for secondary, `text-white/30` for muted
- **Accent**: The DaisyUI primary color for CTAs and highlights only — used sparingly

### Buttons
- **Primary**: `btn btn-primary` — solid accent, used for ONE main action per view
- **Secondary/Ghost**: Transparent background + white border + white text. On hover: subtle white fill (`hover:bg-white/10`). Example: `bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-2xl`
- **Shape**: Always very rounded — `rounded-2xl` or `rounded-full` for pill buttons
- **Never**: Solid gray buttons, flat buttons without borders, sharp corners

### Cards & Containers
- **Glass effect**: `bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-3xl`
- **Generous padding**: `p-6` minimum, `p-8` for hero cards
- **Rounded**: `rounded-2xl` minimum, `rounded-3xl` for main containers
- **Hover states**: Subtle border brightening `hover:border-white/20` or gentle glow
- **No solid backgrounds** — everything breathes with transparency

### Typography
- Clean sans-serif from DaisyUI theme
- Headlines: Bold, white, generous size
- Body: `text-white/70` — never pure white for body text
- Subtle hierarchy through opacity, not color changes

### Motion & Interactions
- Smooth transitions on everything: `transition-all duration-300`
- Hover: borders brighten, subtle scale (`hover:scale-[1.02]`), or gentle glow
- Loading states: DaisyUI `loading loading-spinner` with primary color
- Entrance animations: gentle fade-up for cards, staggered when in groups

### Spacing & Layout
- Generous whitespace — let elements breathe
- Consistent gaps: `gap-4` for lists, `gap-6` for sections, `space-y-6` for stacked content
- Max widths on content: `max-w-2xl` for forms, `max-w-4xl` for main content
- Center everything: `mx-auto`

### Inputs & Forms
- `input-bordered` with transparent background
- Rounded: `rounded-xl`
- Focus: accent border glow
- Textareas: same treatment, resize-none

### Badges & Tags
- Small, rounded-full, transparent with white border: `badge badge-ghost border-white/20`
- Status badges: use DaisyUI semantic colors (`badge-success`, `badge-warning`, `badge-error`)

## What to AVOID
- Solid colored backgrounds on cards (use transparency instead)
- Sharp corners (`rounded-md`, `rounded-lg` are too subtle — go `rounded-2xl`+)
- Flat buttons without borders on dark backgrounds
- Gray tones for surfaces — use white with low opacity instead
- Cluttered layouts — when in doubt, add more space
- Generic DaisyUI defaults without the glass/transparency treatment
- Colored text for body content — use white with opacity variations

## Example Pattern

```jsx
{/* Card with glass bubble effect */}
<div className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-6 hover:border-white/20 transition-all">
  <h2 className="text-xl font-bold text-white">Title</h2>
  <p className="text-white/50 text-sm mt-1">Description</p>

  <div className="flex gap-3 mt-4">
    <button className="btn btn-primary rounded-2xl">Main Action</button>
    <button className="bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-2xl px-4 py-2 transition-all">
      Secondary
    </button>
  </div>
</div>
```
