const ITEMS = [
  "Call / Put Signals",
  "Free Mentorship",
  "Live Sessions",
  "Money Management",
  "Market Structure",
  "Trade Psychology",
  "OTC & Live Pairs",
  "Community Discussion",
];

export const Marquee = () => (
  <div
    className="marquee relative overflow-hidden border-y border-white/10 py-5"
    style={{ "--speed": "55s", background: "linear-gradient(90deg, #1a1c5a 0%, #2a2a7a 50%, #1a1c5a 100%)" }}
    data-testid="marquee-strip"
  >
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#1a1c5a] to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#1a1c5a] to-transparent" />
    <div className="marquee-track">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="flex items-center gap-6 pr-6 font-display text-lg sm:text-2xl font-extrabold text-white">
          {t}
          <span className="h-2 w-2 rounded-full" style={{ backgroundImage: "var(--grad-btn)" }} />
        </span>
      ))}
    </div>
  </div>
);
