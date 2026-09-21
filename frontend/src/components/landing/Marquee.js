const ITEMS = ["Call / Put Signals", "Free Mentorship", "Live Sessions", "Money Management", "Market Structure", "Trade Psychology", "OTC & Live Pairs", "Community Discussion"];

export const Marquee = () => (
  <div className="marquee relative overflow-hidden border-y border-cyan-500/10 bg-[#050b18]/60 py-5" style={{ "--speed": "55s" }} data-testid="marquee-strip">
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#040c22]/80 to-transparent z-10" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#040c22]/80 to-transparent z-10" />
    <div className="marquee-track">
      {[...ITEMS, ...ITEMS].map((t, i) => (
        <span key={i} className="flex items-center gap-6 pr-6 font-display text-lg sm:text-2xl font-semibold uppercase tracking-tight text-slate-300/80">
          {t}
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />
        </span>
      ))}
    </div>
  </div>
);
