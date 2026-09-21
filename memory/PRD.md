# TTB KING — Landing Page PRD

## Original problem statement
Build a landing page: Name TTB KING; Theme Blue & Black (gradient colour grading); OG Title "TTB KING | Join Free Telegram Channel To Learn Trading"; OG Description "Join TTB KING | a growing binary trading community for market insights, trading strategies, educational content, and community discussions. Learn, analyze & trade responsibly with the community."; OG image / favicon = attached anime avatar; reference https://tradingempire.top/; professional design, mobile + desktop friendly, focus on UI design system.

## User choices
- Telegram link: https://t.me/+ZRXVYah_r0c5ZGU1
- Sections: Hero + Features + Stats + How it works + Testimonials + FAQ + Footer
- Footer: Telegram only, standard risk disclaimer

## Architecture
- React (CRA/craco) + Tailwind + shadcn Accordion + framer-motion + lenis (smooth scroll)
- Frontend-only landing page; FastAPI/Mongo template backend untouched
- Design tokens: `/app/design_guidelines.json`, CSS in `/app/frontend/src/index.css`
- Fonts: Sora 800 ALL-CAPS (display), Manrope (body); Phosphor Icons; original Telegram icon for CTAs
- Design rule: Blue & indigo on blue-black gradient theme (#070b1f base, #2563eb→#4f46e5 gradients), everything centered, no side-aligned content, NO smooth-scroll/parallax (Lenis removed per user)
- Files: `src/pages/Landing.js`, `src/components/landing/*`, `src/lib/site.js` (all copy + links), `src/hooks/useLenis.js`
- Assets: `public/og-image.png`, `favicon.ico/png`, `logo192/512.png`
- Meta/OG tags in `public/index.html`

## Implemented (June 2026)
- Discord 2024 gradient theme: deep navy base (#0e0f2d) + blurple→purple→pink radial glows (`.page-bg` fixed layer + per-section `.glow`)
- Gradient primary button (`.btn-blurple` = #5865f2→#7b5cff→#a23bf5), gradient glass cards (`.card-grad`), gradient stat numbers (`.grad-text`)
- ALL content center-aligned (SectionHead default `align="center"`); no left/right split layouts
- Hero: centered badge + ALL-CAPS Nunito 800 title + subtitle + 2 CTAs + trust list (signal card removed per user)
- Features: full-width gradient "signals" card + 2x2 gradient cards, content centered
- Stats: 4 centered gradient cards w/ animated counters
- How it works: gradient panel, 3 centered step cards side-by-side (stacked on mobile)
- Testimonials: centered heading + rating, marquee of gradient cards
- FAQ: centered accordion (max-w-3xl)
- Final CTA: blurple→pink gradient band, avatar on top, centered
- Footer: fully centered (brand, CTA, links, disclaimer)
- Sticky navbar w/ mobile menu, mobile sticky Join CTA
- Testing: iteration_3.json — 100% pass desktop 1920 + mobile 390
- Rev 3: "Midnight Sapphire" aura background (user-provided spec): body #faf8f2, two absolute multiply-blend linear-gradient layers (blur 90/130px) over whole page in `Landing.js`; content in z-1 wrapper. Page is light cream at top → deep sapphire at bottom. Zone tokens `.zone-light` / `.zone-dark` (--ink, --ink-soft, --eyebrow) set text colour per section: Hero/Features/Stats = dark ink; HowItWorks/Testimonials/FAQ/CTA/Footer = white. Cards (`.card-grad`) are solid sapphire w/ white text. Navbar cream when scrolled. Glow blobs + page-bg removed.

## Backlog
- P1: Real member proof screenshots in testimonials (user to provide)
- P1: Language toggle (Bangla/English)
- P2: Live Telegram member-count via backend
- P2: Analytics on CTA clicks
