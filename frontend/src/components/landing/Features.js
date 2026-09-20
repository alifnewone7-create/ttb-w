import { motion } from "framer-motion";
import { Bot, Crosshair, GraduationCap, Radio, Scale, Send } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { FEATURES, TELEGRAM_URL } from "@/lib/site";

const ICONS = { signals: Crosshair, bot: Bot, risk: Scale, mentorship: GraduationCap, live: Radio };

const Card = ({ f, i }) => {
  const Icon = ICONS[f.id];
  return (
    <Reveal delay={i * 0.07} className={f.big ? "md:col-span-2 lg:row-span-2" : ""}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className={`glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-8 hover:border-cyan-400/40 transition-[border-color] duration-500 ${f.big ? "min-h-[360px]" : ""}`}
        data-testid={`feature-card-${f.id}`}
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/0 blur-3xl transition-[background-color] duration-700 group-hover:bg-cyan-400/15" />
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/20">
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{f.tag}</span>
        </div>
        <h3 className={`mt-8 font-display font-bold tracking-tight text-white ${f.big ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"}`}>{f.title}</h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-400">{f.body}</p>
        {f.big && (
          <div className="mt-auto pt-10">
            <div className="mb-8 grid grid-cols-3 gap-3">
              {["1m", "3m", "5m"].map((e) => (
                <div key={e} className="rounded-xl border border-cyan-500/10 bg-[#050b18]/70 p-3 text-center">
                  <p className="font-display text-2xl font-bold text-gradient">{e}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">expiry</p>
                </div>
              ))}
            </div>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm" data-testid="feature-signals-telegram-btn">
              <Send className="h-4 w-4" /> Join Free Telegram Channel
            </a>
          </div>
        )}
      </motion.article>
    </Reveal>
  );
};

export const Features = () => (
  <section id="features" className="relative overflow-hidden py-24 sm:py-32" data-testid="features-section">
    <div className="orb left-[-15%] top-1/3 h-[480px] w-[480px] bg-cyan-600/15" />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHead
        id="features"
        eyebrow="Why TTB KING"
        title={<>Trade with precision. <span className="text-gradient">Win with confidence.</span></>}
        body="Everything a serious binary trader needs, taught openly in one Telegram channel. No paywall, no pitch."
      />
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr">
        {FEATURES.map((f, i) => <Card key={f.id} f={f} i={i} />)}
      </div>
    </div>
  </section>
);
