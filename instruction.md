# Fox & Frame Creative Studios - Project Instructions & Brand Guide

This document serves as the single source of truth for the Fox & Frame website project. Anyone joining this project should read this document first to understand the brand identity, styling conventions, tech stack, and overall goals.

## 1. Brand Identity

- **Brand Name:** Fox & Frame Creative Studios
- **Founder:** Goutam Kumar Nayak
- **Core Goal:** Partner with businesses to build clear, credible digital foundations through structured strategy and thoughtful execution. Built for long-term credibility, not quick wins.

### Mottos & Taglines
- *"Strategy-First Digital Foundations for Growing Businesses"*
- *"Good design without strategy is decoration. Strategy without execution is wasted thinking."*
- *"We don't chase trends. We build digital foundations businesses can grow on."*

### Brand Philosophy
- **The Fox:** Represents intelligence, planning, and adaptability — understanding the business before touching the design.
- **The Frame:** Represents structure, visual clarity, and professional execution — turning ideas into something solid and scalable.

---

## 2. Design System & Theme

The website uses a minimalistic, high-contrast theme built around a strict two-color palette. We avoid generic templates and focus on premium, structured layouts.

### Color Palette
There are only two main colors in this project. Do not introduce extra accent colors unless explicitly requested.
- **Warm Sand (`#EEE9E3`)**: Used primarily as the background color, and occasionally for text on dark sections.
- **Deep Graphite (`#2A2A2A`)**: Used for text (foreground), headings, buttons, and dark sections.

*Note: For now, there is no separate Dark Mode. The brand identity strictly relies on the Warm Sand and Deep Graphite contrast.*

### Typography
- **Primary Font:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Weights: 400, 500, 700)
- **CSS Variable:** `--font-dm-sans`
- **Fallback:** Arial, Helvetica, sans-serif
- **Style:** Clean, readable, with tight tracking on headings (`tracking-tight`) and relaxed line-height on paragraphs (`leading-relaxed`). Headings often use `font-light` to emphasize elegance.

### UI/UX & Style Rules
- **Animations:** Subtle, smooth, and meaningful using `framer-motion`. Avoid overly aggressive or bouncy animations. Use gentle fade-ins (`opacity: 0` to `1`) and slight vertical translations (`y: 20` to `y: 0`).
- **Icons:** Use `lucide-react` for clean, consistent SVG icons.
- **Components:** Built structurally rather than purely decorative. Use the custom Radix/Tailwind components located in `src/components/ui`.
- **Aesthetic:** Minimalist, premium, strategy-first. Whitespace is crucial.

---

## 3. Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (`.tsx`, `.ts`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Linter:** ESLint & Next.js built-in linting

---

## 4. Website Plan & Structure

The website is structured into clear, readable pages with dedicated sections. The entry point layout is `src/app/layout.tsx`.

### Core Pages
- **`/` (Home)**: The central hub. Contains Hero, Stats Marquee, Featured Projects, Tools, Process, Testimonials, and Contact CTA.
- **`/about`**: Details the brand philosophy ("The Fox" & "The Frame") and founder story.
- **`/blog`**: Strategy and value-driven articles.
- **`/careers`**: Job openings and studio culture.
- **`/contact`**: The lead-generation point.

### Component Structure
- `src/app/*`: Next.js App Router pages and layouts.
- `src/components/home/*`: Page-specific structural sections (e.g., `HeroSection.tsx`, `Navbar.tsx`, `Footer.tsx`).
- `src/components/ui/*`: Reusable, generic UI elements (Buttons, Inputs, etc.).

---

## 5. Developer Guide / How to Contribute

1. **Keep it Simple:** Always refer to the `globals.css` and `tailwind.config.ts` for defined CSS variables.
2. **Follow the Theme:** Apply Warm Sand (`bg-[#EEE9E3]`) and Deep Graphite (`text-[#2A2A2A]`) directly via Tailwind classes or variables.
3. **Responsive First:** All pages should look stunning on mobile, tablet, and desktop. Use Tailwind's `md:` and `lg:` prefixes thoughtfully.
4. **Communicate Purpose:** Every section should serve a strategic goal (e.g., building trust, showcasing work, driving contact). Do not add elements just for visual flair.
