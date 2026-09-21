import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { LOGO, TELEGRAM_URL } from "@/lib/site";

const PERKS = ["Join free, no cost", "50 - 100 signals every day", "Free mentorship & live sessions"];

export const FinalCTA = () => (
  <section className="relative px-5 sm:px-8 py-16 sm:py-24" data-testid="final-cta-section">
    <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-cyan-400/20 p-8 sm:p-14 lg:p-20" style={{ background: "linear-gradient(135deg, #0b1a3d 0%, #0a2a5e 45%, #04121f 100%)" }}>
      <div className="orb -right-24 -top-24 h-[420px] w-[420px] bg-cyan-400/30" />
      <div className="orb -left-24 -bottom-24 h-[380px] w-[380px] bg-blue-600/40" />

      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.02] text-white" data-testid="final-cta-title">
            Your next binary trade <br className="hidden sm:block" /> starts in <span className="text-gradient">Telegram.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg text-slate-300/90 leading-relaxed">
            One tap and you're in with thousands of traders. No fee, no funnel, no pitch. Just the signals, the reasoning behind them and a community that trades responsibly.
          </p>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8" data-testid="final-cta-perks">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-slate-200">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-200"><Check className="h-3 w-3" /></span>{p}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base sm:text-lg !px-8 !py-4" data-testid="final-cta-telegram-btn">
              <Send className="h-5 w-5" /> Join Free Telegram Channel
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <motion.div className="float-slow relative" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-3xl" />
            <span className="ring-pulse relative block h-40 w-40 sm:h-52 sm:w-52 overflow-hidden rounded-full ring-2 ring-cyan-300/60 shadow-[0_0_60px_rgba(0,240,255,0.35)]">
              <img src={LOGO} alt="TTB KING" className="h-full w-full object-cover" />
            </span>
          </motion.div>
        </div>
      </div>
    </Reveal>
  </section>
);
