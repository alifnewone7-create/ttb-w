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
- Fonts: Outfit (display), Plus Jakarta Sans (body), JetBrains Mono (labels)
- Files: `src/pages/Landing.js`, `src/components/landing/*`, `src/lib/site.js` (all copy + links), `src/hooks/useLenis.js`
- Assets: `public/og-image.png`, `favicon.ico/png`, `logo192/512.png`
- Meta/OG tags in `public/index.html`

## Implemented (June 2026)
- Sticky glass navbar w/ mobile menu, Telegram CTA
- Kinetic hero: masked line-by-line reveal, parallax orbs, 3D tilt signal card w/ animated chart + cycling signal ticker
- Editorial marquee strip
- Bento features grid (5 cards)
- Animated stats counters
- Numbered "chapter" How-it-works w/ sticky heading
- Testimonials slow marquee + 4.9 rating
- FAQ accordion (7 items)
- Final gradient CTA band w/ avatar halo
- Footer w/ Telegram link, risk disclaimer
- Mobile sticky Join CTA

## Backlog
- P1: Real member proof screenshots in testimonials (user to provide)
- P1: Language toggle (Bangla/English)
- P2: Live Telegram member-count via backend
- P2: Analytics on CTA clicks
