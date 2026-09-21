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
  <div className="marquee relative overflow-hidden bg-[#23272a] py-5" style={{ "--speed": "55s" }} data-testid="marquee-strip">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#23272a] to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#23272a] to-transparent" />
    <div className="marquee-track">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="flex items-center gap-6 pr-6 font-display text-lg sm:text-2xl font-extrabold text-white">
          {t}
          <span className="h-2 w-2 rounded-full bg-[#5865f2]" />
        </span>
      ))}
    </div>
  </div>
);
