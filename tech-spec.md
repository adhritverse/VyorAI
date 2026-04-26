# Tech Spec — VyorAI Multi-Page SaaS Website

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Routing | react-router-dom |
| Animation | Framer Motion |
| Icons | Lucide React |
| Build Output | Static (dist/) |

## 2. Dependencies

```bash
# Core (installed by webapp-building skill)
react react-dom
vite typescript tailwindcss

# Routing
react-router-dom

# Animation
framer-motion

# Icons (already included)
lucide-react

# shadcn/ui components (already installed — 40+)
```

## 3. Component Inventory

### 3.1 Layout Components (Shared)

| Component | File | Usage | Notes |
|---|---|---|---|
| Navbar | `components/Navbar.tsx` | All pages | Fixed top, scroll-aware bg, mobile sheet |
| Footer | `components/Footer.tsx` | All pages | Multi-column links, social icons |
| MobileMenu | `components/MobileMenu.tsx` | All pages | Sheet drawer, nav links + CTA |
| PageLayout | `components/PageLayout.tsx` | All pages | Wraps content with Navbar + Footer |
| ScrollToTop | `components/ScrollToTop.tsx` | All pages | Router scroll restoration |
| AnimatedSection | `components/AnimatedSection.tsx` | All sections | Scroll-triggered fade-in-up wrapper |

### 3.2 UI Primitives (Shared)

| Component | File | Source | Customization |
|---|---|---|---|
| Button | `components/ui/button.tsx` | shadcn/ui | Pill variant (rounded-full), custom sizes |
| Input | `components/ui/input.tsx` | shadcn/ui | Rounded-xl variant |
| Textarea | `components/ui/textarea.tsx` | shadcn/ui | — |
| Card | `components/ui/card.tsx` | shadcn/ui | — |
| Badge | `components/ui/badge.tsx` | shadcn/ui | Color variants |
| Sheet | `components/ui/sheet.tsx` | shadcn/ui | Mobile menu |
| Tabs | `components/ui/tabs.tsx` | shadcn/ui | Custom indicator animation |
| Accordion | `components/ui/accordion.tsx` | shadcn/ui | FAQ sections |
| Toggle | `components/ui/toggle.tsx` | shadcn/ui | Pricing toggle |
| Checkbox | `components/ui/checkbox.tsx` | shadcn/ui | Auth forms |
| Separator | `components/ui/separator.tsx` | shadcn/ui | Dividers |

### 3.3 Reusable Section Components

| Component | File | Used In |
|---|---|---|
| HeroSection | `sections/HeroSection.tsx` | Home, Features, Solutions, Pricing, Automation, Product, Blog, Contact |
| StatsRow | `sections/StatsRow.tsx` | Home |
| FeatureGrid | `sections/FeatureGrid.tsx` | Home, Features, Product |
| TestimonialCards | `sections/TestimonialCards.tsx` | Home |
| CTABanner | `sections/CTABanner.tsx` | Home, Features, Product |
| Newsletter | `sections/Newsletter.tsx` | Home, Contact |
| Marquee | `sections/Marquee.tsx` | Home |
| PricingCards | `sections/PricingCards.tsx` | Pricing |
| ComparisonTable | `sections/ComparisonTable.tsx` | Pricing |
| AuthCard | `sections/AuthCard.tsx` | Auth |
| ContactForm | `sections/ContactForm.tsx` | Contact |
| ResourceGrid | `sections/ResourceGrid.tsx` | Blog |

### 3.4 Page Components

| Page | File | Sections |
|---|---|---|
| Home | `pages/Home.tsx` | Hero, Partners, Marquee, Platform Overview, Outcomes, Explore Cards, Stats, Command Centre, Method, Platform Features, Compliance, Testimonials, CTA, Newsletter |
| Features | `pages/Features.tsx` | Hero, Feature Deep Dives, Integrations |
| Solutions | `pages/Solutions.tsx` | Hero, Use Case Cards, Storytelling Blocks |
| Pricing | `pages/Pricing.tsx` | Hero, Toggle, Cards, Comparison Table, FAQ |
| AutomationLibrary | `pages/AutomationLibrary.tsx` | Hero, Category Grid |
| Product | `pages/Product.tsx` | Hero, Dashboard Mockup, Feature Walkthrough, Demo CTA |
| Blog | `pages/Blog.tsx` | Hero, Featured, All Resources |
| Contact | `pages/Contact.tsx` | Contact Hero, Newsletter |
| Auth | `pages/Auth.tsx` | Auth Card (3 tabs) |

## 4. Animation Implementation Plan

| Animation | Library | Implementation Approach | Complexity |
|---|---|---|---|
| Page scroll fade-in | Framer Motion | `useInView` hook + `motion.div` with `opacity: 0→1`, `y: 20→0` | Low |
| Hero stagger entrance | Framer Motion | `staggerChildren: 0.1` on container, individual `motion.div` | Medium |
| Floating elements | Framer Motion | `animate={{ y: [0, -10, 0] }}` with `repeat: Infinity`, varied durations | Medium |
| Navbar scroll effect | Custom hook | `useScrollPosition` hook toggles `scrolled` class for bg/shadow | Low |
| Button hover scale | Tailwind | `hover:scale-105 transition-transform duration-200` | Low |
| Card hover lift | Tailwind | `hover:-translate-y-1 hover:shadow-lg transition-all duration-300` | Low |
| Marquee scroll | CSS | `@keyframes marquee` with `translateX`, `animation: 40s linear infinite` | Low |
| Tab indicator slide | Framer Motion | `layoutId` on indicator div for automatic position animation | Medium |
| Mobile menu slide | Framer Motion + Sheet | Sheet component with `AnimatePresence` | Low |
| Stats counter | Custom | `useCountUp` hook with `requestAnimationFrame` | Medium |
| Pricing toggle | Framer Motion | `layout` prop on sliding indicator pill | Medium |
| FAQ accordion | shadcn Accordion | Built-in open/close with animation | Low |
| Nav link underline | CSS | `after` pseudo-element with `scaleX` transform | Low |
| Cross-page transitions | Framer Motion | `AnimatePresence` in route wrapper with `initial/animate/exit` | Medium |

### Animation Constants

```typescript
// src/lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};
```

## 5. Project File Structure

```
/mnt/agents/output/app/
├── public/
│   └── images/              # Generated assets (dashboards, avatars, blog)
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Features.tsx
│   │   ├── Solutions.tsx
│   │   ├── Pricing.tsx
│   │   ├── AutomationLibrary.tsx
│   │   ├── Product.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── Auth.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsRow.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── TestimonialCards.tsx
│   │   ├── CTABanner.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Marquee.tsx
│   │   ├── PricingCards.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── AuthCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── ResourceGrid.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── PageLayout.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── Logo.tsx
│   ├── components/ui/         # shadcn/ui components (auto-generated)
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   ├── animations.ts
│   │   └── utils.ts
│   ├── data/
│   │   ├── features.ts        # Feature data arrays
│   │   ├── testimonials.ts    # Testimonial content
│   │   ├── pricing.ts         # Pricing tiers data
│   │   ├── automation.ts      # Automation categories
│   │   ├── blog.ts            # Blog post data
│   │   └── solutions.ts       # Use case content
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 6. Routing Structure

```typescript
// App.tsx router setup
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/features" element={<Features />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/automation-library" element={<AutomationLibrary />} />
    <Route path="/product" element={<Product />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/auth" element={<Auth />} />
  </Routes>
</BrowserRouter>
```

## 7. Key Implementation Notes

### 7.1 Navbar Scroll Behavior

```typescript
// useScrollPosition hook
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 20);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
// Apply: className={cn("fixed top-0 w-full z-50 transition-all", scrolled && "bg-white/95 backdrop-blur shadow-sm")}
```

### 7.2 Dashboard Mockups

Dashboard UI mockups are **coded as React components** using Tailwind — not images. This ensures crisp rendering at all sizes and allows hover interactions.

```typescript
// Example: DashboardMockup component
const DashboardMockup = () => (
  <div className="rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
    {/* Sidebar */}
    <div className="flex h-[400px]">
      <aside className="w-16 bg-gray-900 flex flex-col items-center py-4 gap-4">
        {/* Icons */}
      </aside>
      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50">
        {/* Charts, cards, tables */}
      </main>
    </div>
  </div>
);
```

### 7.3 Marquee Implementation

```css
/* CSS-only marquee */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  animation: marquee 40s linear infinite;
  width: max-content;
}
```

### 7.4 Image Generation Strategy

| Category | Count | Method |
|---|---|---|
| Dashboard mockups | 5 | Code as React components |
| Blog post images | 6 | `generate_image` API |
| Avatars | 3 | `generate_image` API |
| Abstract hero shapes | 1 | CSS/SVG (no image needed) |

**Total generated images: 9**

### 7.5 Color Tokens (Tailwind Config)

```javascript
// tailwind.config.js extend
colors: {
  vyor: {
    50: '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
  }
}
```

## 8. Performance Considerations

1. **Lazy loading**: Use `React.lazy()` for page components
2. **Image optimization**: Use WebP format, responsive sizes
3. **Animation performance**: Use `transform` and `opacity` only (GPU-accelerated)
4. **Font loading**: Use `font-display: swap` for Inter
5. **Code splitting**: Vite handles automatic chunking

## 9. Accessibility

1. **Focus states**: Visible focus rings on all interactive elements
2. **Color contrast**: All text meets WCAG AA (4.5:1 ratio)
3. **Semantic HTML**: Proper heading hierarchy, landmark regions
4. **ARIA labels**: On icon-only buttons, form errors
5. **Reduced motion**: `prefers-reduced-motion` media query support
6. **Keyboard navigation**: Full tab navigation support

## 10. Build & Deploy

```bash
# Development
cd /mnt/agents/output/app && npm run dev

# Production build
cd /mnt/agents/output/app && npm run build

# Deploy dist/ folder
# (Uses mshtools-deploy_website tool)
```

## 11. Responsive Strategy

| Breakpoint | Tailwind Prefix | Key Changes |
|---|---|---|
| < 640px | Default | Single column, stacked layout, hamburger nav |
| 640px+ | `sm:` | Minor spacing adjustments |
| 768px+ | `md:` | 2-column grids appear |
| 1024px+ | `lg:` | Full desktop nav, 3-4 column grids |
| 1280px+ | `xl:` | Max-width container, largest spacing |

## 12. State Management

No global state library needed. Local state with `useState`/`useReducer` is sufficient:

- **Pricing page**: `billingCycle: 'monthly' | 'yearly'`
- **Auth page**: `activeTab: 'login' | 'signup' | 'forgot'`
- **Blog page**: `activeFilter: 'all' | 'blog' | 'case-study' | 'guide'`, `searchQuery: string`
- **Automation Library**: `searchQuery: string`
- **Mobile menu**: `isOpen: boolean`

All state is page-level or component-level — no React Context or Redux required.
