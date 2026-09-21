import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { TelegramIcon } from "./TelegramIcon";
import { LOGO, TELEGRAM_URL } from "@/lib/site";

const PERKS = ["Join free, no cost", "50 - 100 signals every day", "Free mentorship & live sessions"];

export const FinalCTA = () => (
  <section className="relative px-5 sm:px-8 py-10 sm:py-16" data-testid="final-cta-section">
    <Reveal
      className="panel relative mx-auto max-w-[1200px] overflow-hidden border border-white/10 px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
      style={{ background: "linear-gradient(135deg, #3442d9 0%, #5865f2 35%, #8a3ff2 70%, #eb459e 100%)" }}
    >
      <div className="glow left-1/2 top-[-30%] h-[400px] w-[400px] -translate-x-1/2 bg-white/20" />
      <div className="relative flex flex-col items-center text-center">
        <motion.div
          className="float-slow"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-full ring-4 ring-white/30">
            <img src={LOGO} alt="TTB KING" className="h-full w-full object-cover" />
          </span>
        </motion.div>
        <p className="eyebrow mt-8 !text-white/80">Ready when you are</p>
        <h2
          className="mt-5 font-display text-[2rem] sm:text-4xl lg:text-[3.5rem] font-extrabold leading-[1] text-white max-w-[18ch]"
          data-testid="final-cta-title"
        >
          Your next binary trade starts in Telegram
        </h2>
        <p className="mt-7 max-w-xl text-base md:text-lg text-white/85 leading-relaxed">
          One tap and you're in with thousands of traders. No fee, no funnel, no pitch. Just the signals, the reasoning
          behind them and a community that trades responsibly.
        </p>
        <ul className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8" data-testid="final-cta-perks">
          {PERKS.map((p) => (
            <li key={p} className="flex items-center gap-2.5 text-[15px] text-white">
              <CheckCircle size={22} weight="duotone" className="text-[#57f287]" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-11 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white w-full sm:w-auto !rounded-2xl !py-[18px]"
            data-testid="final-cta-telegram-btn"
          >
            <TelegramIcon className="h-5 w-5" /> Join Free Telegram Channel
          </a>
          <a href="#features" className="btn-ghost w-full sm:w-auto !rounded-2xl !py-[17px] !px-6" data-testid="final-cta-secondary-btn">
            See what you get
          </a>
        </div>
      </div>
    </Reveal>
  </section>
);
