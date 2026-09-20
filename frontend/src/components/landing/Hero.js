import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Send, ShieldCheck, Users, Zap } from "lucide-react";
import { MaskedLines } from "./Reveal";
import { SignalCard } from "./SignalCard";
import { TELEGRAM_URL } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1];
const fade = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden pt-28 pb-20 lg:pt-36" data-testid="hero-section">
      <div className="grid-bg absolute inset-0" />
      <motion.div style={{ y: orbY }} className="orb left-[-10%] top-[-10%] h-[520px] w-[520px] bg-blue-700/30" />
      <motion.div style={{ y: orbY2 }} className="orb right-[-15%] top-[20%] h-[560px] w-[560px] bg-cyan-500/20" />
      <div className="orb left-[40%] bottom-[-30%] h-[500px] w-[500px] bg-blue-900/40" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <motion.div style={{ y: textY, opacity: fadeOut }} className="lg:col-span-7">
          <motion.div {...fade(0.3)} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5" data-testid="hero-badge">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-200">Live · Free Telegram community</span>
          </motion.div>

          <MaskedLines
            as="h1"
            delay={0.45}
            lines={["Learn to trade", "binary markets", <span key="g" className="text-gradient">with the King.</span>]}
            className="mt-7 text-4xl sm:text-5xl lg:text-6xl xl:text-[5.25rem] font-extrabold tracking-[-0.03em] leading-[1.02] text-white"
            data-testid="hero-title"
          />

          <motion.p {...fade(0.95)} className="mt-7 max-w-xl text-base md:text-lg text-slate-400 leading-relaxed" data-testid="hero-subtitle">
            TTB KING is a growing binary trading community for market insights, trading strategies, educational content and real discussion. Learn, analyze &amp; trade responsibly with the community.
          </motion.p>

          <motion.div {...fade(1.1)} className="mt-9 flex flex-col sm:flex-row gap-4">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base" data-testid="hero-join-telegram-btn">
              <Send className="h-4 w-4" /> Join Free Telegram Channel
            </a>
            <a href="#features" className="btn-ghost text-base" data-testid="hero-explore-btn">
              Explore the channel <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.ul {...fade(1.25)} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400" data-testid="hero-trust-list">
            {[
              [Users, "15,000+ traders"],
              [Zap, "100+ signals daily"],
              [ShieldCheck, "Risk-first mentorship"],
            ].map(([Icon, t]) => (
              <li key={t} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-cyan-300" /> {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div style={{ y: cardY }} className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div initial={{ opacity: 0, y: 60, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.2, delay: 0.7, ease: EASE }} className="w-full max-w-md">
            <SignalCard />
          </motion.div>
        </motion.div>
      </div>

      <motion.div style={{ opacity: fadeOut }} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex" data-testid="hero-scroll-hint">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-cyan-300/70 to-transparent" />
      </motion.div>
    </section>
  );
};
