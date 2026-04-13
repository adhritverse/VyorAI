# VyorAI — Project Context

> Single source of truth for the VyorAI website redesign.
> Last updated: 2026-04-14 (Mobile & Visual Polish Phase)

---

## 🏢 Company

| Field         | Value                                    |
|---------------|------------------------------------------|
| **Name**      | VyorAI                                   |
| **Website**   | https://vyorai.com                       |
| **Tagline**   | *AI that understands and executes.*      |
| **Repo**      | https://github.com/deepanshu076/Vyor-AI  |
| **Built in**  | India 🇮🇳                                |

### Team
- **Hritik Jaiswal** — Founder & CEO (`/Founder.png`)
- **Rishabh Kushwah** — Co-Founder (`/Co-Founder.png`)

### Socials
- LinkedIn: https://www.linkedin.com/company/vyorai/
- GitHub: TBD
- Twitter/X: TBD

---

## 🛠️ Tech Stack

| Layer        | Technology                                              |
|--------------|---------------------------------------------------------|
| Framework    | Next.js 16 (App Router)                                 |
| Language     | TypeScript                                              |
| Styling      | TailwindCSS v3.4                                        |
| Animation    | Framer Motion (primary), CSS keyframes (Marquee/Infinity)|
| Icons        | Lucide React                                            |
| Font         | Inter (Google Fonts via Next.js)                         |
| Deployment   | Vercel Edge / Netlify                                   |

### Dependencies (package.json)
- `framer-motion` ^11.18.2
- `lucide-react` ^0.395.0
- `clsx` ^2.1.1
- `tailwind-merge` ^2.3.0
- `class-variance-authority` ^0.7.1

### Custom Animations (tailwind.config.ts)
- `marquee`: Infinite horizontal scrolling for social proof.
- `spin-slow`: Decelerated rotation for background elements.

---

## 🎨 Design System — "Cosmic Emerald"

### Background Tiers
| Token              | Hex        | Usage                              |
|--------------------|------------|-------------------------------------|
| `bg-primary`       | `#050505`  | Page body, deepest layer            |
| `bg-primary-alt`   | `#0A0A0F`  | Subtle variation for sections       |
| `bg-surface`       | `#0D1117`  | Cards, modals, elevated panels      |
| `bg-surface-hover` | `#111827`  | Hover states, raised surfaces       |

### Accent Colors
| Token              | Hex        | Usage                              |
|--------------------|------------|-------------------------------------|
| `accent-primary`   | `#3ECF8E`  | CTAs, active states, main highlights |
| `accent-secondary` | `#00DDB3`  | Glows, hover effects, gradients     |
| `accent-tertiary`  | `#10B981`  | Borders, secondary indicators       |

### Card Styles (Professional Polish)
- Clean glassmorphism with `backdrop-blur-3xl`.
- Professional, non-cluttered typography.
- Consistent border radius: `rounded-[2rem]`.

---

## 📄 Page Sections (Top → Bottom)

### Section 1 — Navbar
- Custom **CardNav** implementation with glassmorphic mobile menu.
- Fixed pill navigation with staggered Framer Motion entrance.
- Links: Products, Developer API, About, Careers.

### Section 2 — Hero
- Infinity ∞ SVG animated background.
- Clean text overlay: "AI that understands and executes."
- *Mobile*: Optimized vertical rhythm and font scaling for high-fidelity mobile experience.

### Section 3 — Marquee
- Horizontal strip of high-level AI capabilities.

### Section 4 — Products (Service Grid) ⭐
- **Virtual Try-On API**: B2B e-commerce solution.
- **Infinity Plugin SDK**: LLM-powered product discovery (India-localized data).
- **Intelligent Wellness**: Stress & emotion AI.
- **Vyor Omni-Engine**: Restore code-based **SVG animation with life-like "pumping" circuit traces**.
- *Mobile Optimization*: Bento grid reconfiguration and asset scaling.

### Section 5 — Developer API Sandbox (New)
| File | `components/ApiPlatform.tsx` |
|------|--------------------------------|
| **Features** | Live code typing animation, request/response cycle simulation. |
| **Logic** | Mobile-responsive header with centered endpoint pill (`omni-engine-v2.1`). |

### Section 6 — Testimonials
| File | `components/Testimonials.tsx` |
|------|--------------------------------|
| **Mobile** | Optimized for single-row marquee for better visual focus on handhelds. |
| **Data** | 10+ Indian-centric developer/CEO profiles. |

### Section 7 — About & Careers
| File | `components/About.tsx` |
|------|-------------------------|
| **Recruitment** | Clean, professional enterprise-grade "Vercel-style" CTA. |

### Section 8 — Footer
- Premium SaaS-style footer with improved vertical rhythm and typography.
- Built in India credit and social icon suite with hover glows.

---

## ✅ Recent Progress & Resolutions

- [x] **Omni-Engine Restoration**: Reimplemented pure-code SVG visual with "life-like" circuit pumping animation.
- [x] **Mobile Responsiveness**: Achieved full responsive parity for Hero, Bento Grid, and API Sandbox.
- [x] **Logo Visibility**: Removed conflicting filters from Navbar and Footer for clean brand presentation.
- [x] **API Header Fix**: Resolved "cities overflow" by implementing responsive endpoint pills.
- [x] **Testimonial Optimization**: Streamlined marquee to single-row on mobile for visual clarity.
- [x] **Build Stability**: Resolved Windows file lock issues and Turbopack expression errors.

---

## 📁 Updated File Structure

```
Vyor-AI/
├── app/
│   ├── globals.css          # Global styles + Infinity/Marquee keyframes
│   ├── layout.tsx           # Inter font + Root layout
│   └── page.tsx             # Main assembly
├── components/
│   ├── Navbar.tsx           # Assembly
│   ├── CardNav.tsx          # Core Navigation logic & Mobile Menu
│   ├── Hero.tsx             # Main Hero section
│   ├── Marquee.tsx          # Section 3 capability strip
│   ├── Products.tsx         # Service cards (Omni-Engine visuals)
│   ├── ApiPlatform.tsx      # Developer Sandbox & Code Demo
│   ├── Testimonials.tsx     # Indian social proof marquee
│   ├── About.tsx            # Team + Professional Careers section
│   └── Footer.tsx           # Premium site footer
├── context.md               # ← Updated source of truth
└── tailwind.config.ts       # Added marquee & spin animations
```
