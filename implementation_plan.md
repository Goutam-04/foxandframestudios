# 4 Demo Project Websites — Implementation Plan

Create 4 stunning, fully-realized demo websites inside the existing Next.js app that showcase Fox & Frame's capabilities. Each demo is a **complete single-page website** with its own unique identity — different theme, colors, fonts, layout, navigation, and animations.

## Proposed Changes

### Overview — The 4 Demos

| # | Demo | Route | Theme/Aesthetic | Color Palette | Font Pairing | Navigation |
|---|------|-------|----------------|---------------|-------------|------------|
| 1 | **IRONFORGE Gym** | `/demo/gym` | Dark, aggressive, high-energy brutalist | Jet Black `#0A0A0A` + Electric Lime `#CCFF00` + Charcoal `#1A1A1A` | **Bebas Neue** (display) + **Space Grotesk** (body) | Fixed top bar with hamburger menu + floating CTA |
| 2 | **Essence Restaurant** | `/demo/restaurant` | Warm luxury, editorial, organic | Deep Burgundy `#3D0C11` + Champagne Gold `#C9A96E` + Cream `#FFF8F0` | **Playfair Display** (display) + **Cormorant Garamond** (body) | Centered logo nav with side-sliding menu |
| 3 | **PearlSmile Dental** | `/demo/dental` | Clean, modern, trust-building medical | Ocean Blue `#0066CC` + Soft White `#F8FBFF` + Mint `#E8F5F0` + Navy `#0A1628` | **Plus Jakarta Sans** (display) + **DM Sans** (body) | Sticky transparent nav with appointment CTA button |
| 4 | **Arjun Mehta Portfolio** | `/demo/portfolio` | Creative, experimental, asymmetric, dark editorial | Almost Black `#0D0D0D` + Ivory `#F5F0EB` + Coral Accent `#FF6B4A` | **Syne** (display) + **General Sans/Outfit** (body) | Minimal fixed side-nav with dot indicators |

---

### 1. IRONFORGE Gym — `/demo/gym`

**Aesthetic:** Dark, raw energy, brutalist-meets-modern. Think neon-lit warehouse gym.

**Sections:**
- **Hero** — Full-screen dark background with massive bold typography, animated lime-green accent lines, video-style background grain texture
- **Programs** — Horizontal scrolling cards (Strength, HIIT, CrossFit, Yoga) with hover-reveal descriptions
- **Stats Counter** — Animated counters (500+ Members, 15 Trainers, 24/7 Access) with lime accents
- **Trainers** — Grid of trainer cards with diagonal image crops
- **Membership Pricing** — Three-tier pricing cards with glowing hover effect
- **Testimonials** — Dark carousel with large quotes
- **CTA + Footer** — Bold "Start Your Journey" section

**Unique Elements:** Noise/grain texture overlay, diagonal section dividers, aggressive typography scale, lime-green glow effects on hover

---

### 2. Essence Restaurant — `/demo/restaurant`

**Aesthetic:** Warm, luxurious, editorial. Think Michelin-star dining meets magazine layout.

**Sections:**
- **Hero** — Split-screen: Left side elegant typography, right side hero food image with parallax-like scroll effect
- **About/Philosophy** — Centered text with decorative gold line ornaments
- **Menu Highlights** — Elegant card grid with dish images, gold accent borders, handwriting-style category labels
- **Chef's Story** — Full-width image with text overlay, editorial-style layout
- **Gallery** — Masonry grid of food/interior photos with lightbox-style hover
- **Reservations** — Elegant form with gold-accented inputs
- **Footer** — Minimal with gold accents, operating hours

**Unique Elements:** Serif-heavy typography, gold ornamental dividers, smooth parallax scrolling, warm gradient overlays, elegant hover animations with opacity transitions

---

### 3. PearlSmile Dental Clinic — `/demo/dental`

**Aesthetic:** Clean, modern, trustworthy. Medical-grade professionalism with warmth.

**Sections:**
- **Hero** — Bright, clean with smiling patient imagery, blue gradient background, floating appointment button
- **Services** — Icon-based grid (Teeth Whitening, Implants, Orthodontics, Cleaning) with soft card shadows
- **Why Choose Us** — Split layout with checkmarks/icons (Certified, 15+ Years, Pain-Free, Insurance)
- **Doctor Profiles** — Professional cards with credentials and specialties
- **Patient Reviews** — Star-rated testimonial cards on soft blue background
- **Insurance & FAQ** — Accordion-style FAQ with smooth expand animations
- **Contact / Book Appointment** — Map-style layout with form and clinic info

**Unique Elements:** Rounded corners everywhere, soft shadows, calming blue-to-white gradients, smooth micro-interactions, pill-shaped buttons, trust badges

---

### 4. Arjun Mehta Creative Portfolio — `/demo/portfolio`

**Aesthetic:** Dark editorial, creative, asymmetric. Think award-winning designer portfolio.

**Sections:**
- **Hero** — Massive name reveal with staggered letter animation, minimal dark background with coral accent
- **Selected Works** — Large project showcases with full-width images, asymmetric text positioning, hover distortion effects
- **About** — Split layout with portrait and scattered skill tags, typewriter-style text reveal
- **Services** — Horizontal scroll or bento-grid layout with numbered items
- **Marquee** — Infinite scrolling text strip (like on award-winning portfolio sites)
- **Contact** — Minimal dark form with large typography
- **Footer** — Ultra-minimal with social links

**Unique Elements:** Staggered text animations, asymmetric layouts, scroll-triggered reveals, large empty space as design element, cursor-following effects via CSS, mixed-weight typography

---

### FeaturedProjects Component Update

#### [MODIFY] [FeaturedProjects.tsx](file:///c:/Users/pc%2010/Documents/foxandframestudios/src/components/home/FeaturedProjects.tsx)

- Update the 4 project entries to match the new demos:
  1. Gym → IRONFORGE Gym (link to `/demo/gym`)
  2. Restaurant → Essence Restaurant (link to `/demo/restaurant`)  
  3. Change "Agriculture/OLYMP" → PearlSmile Dental Clinic (link to `/demo/dental`)
  4. Change "Food/Les Snoros" → Arjun Mehta Portfolio (link to `/demo/portfolio`)
- Wrap each card in a `<Link>` to navigate to the demo route
- Keep existing animation and styling patterns

---

### New Demo Route Pages

Each demo page is a **standalone full-page experience** — no Fox & Frame navbar/footer. They are complete showcase websites.

#### [NEW] `src/app/demo/gym/page.tsx`
Complete IRONFORGE Gym website with all sections listed above.

#### [NEW] `src/app/demo/restaurant/page.tsx`  
Complete Essence Restaurant website with all sections listed above.

#### [NEW] `src/app/demo/dental/page.tsx`
Complete PearlSmile Dental Clinic website with all sections listed above.

#### [NEW] `src/app/demo/portfolio/page.tsx`
Complete Arjun Mehta Creative Portfolio website with all sections listed above.

---

## Key Design Principles

1. **Each demo is radically different** — No two demos share the same color palette, font, layout pattern, or animation style
2. **Niche-specific** — Every design choice serves the specific industry (dark/aggressive for gym, warm/elegant for restaurant, clean/trustworthy for dental, creative/experimental for portfolio)
3. **Client-mesmerizing quality** — These are portfolio-grade showcase pieces, not templates
4. **Self-contained** — Each demo page loads its own Google Fonts and has its own CSS-in-JSX styles, completely independent from the Fox & Frame main site styles
5. **"Back to Fox & Frame" link** — Each demo will have a subtle floating badge/link to return to the main site

## Verification Plan

### Automated Tests
- Run `npm run build` to verify all pages compile without errors
- Check all 4 routes are accessible

### Manual Verification
- Navigate to each demo route and verify unique styling
- Click project cards on the main site and verify navigation to demos
- Test responsive behavior on mobile/tablet/desktop viewports
