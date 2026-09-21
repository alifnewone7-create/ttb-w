import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { TelegramIcon } from "./TelegramIcon";
import { LOGO, TELEGRAM_URL } from "@/lib/site";

const PERKS = ["Join free, no cost", "50 - 100 signals every day", "Free mentorship & live sessions"];

export const FinalCTA = () => (
  <section className="relative px-5 sm:px-8 py-10 sm:py-16" data-testid="final-cta-section">
    <Reveal
      className="panel relative mx-auto max-w-[1200px] overflow-hidden px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
      style={{ background: "linear-gradient(135deg, #1a1c45 0%, #2e3475 55%, #14163a 100%)" }}
    >
      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="eyebrow">Ready when you are</p>
          <h2
            className="mt-5 font-display text-[2rem] sm:text-4xl lg:text-[3.5rem] font-extrabold leading-[0.9] text-white max-w-[15ch]"
            data-testid="final-cta-title"
          >
            Your next binary trade starts in Telegram
          </h2>
          <p className="mt-7 max-w-xl text-base md:text-lg fog leading-relaxed">
            One tap and you're in with thousands of traders. No fee, no funnel, no pitch. Just the signals, the
            reasoning behind them and a community that trades responsibly.
          </p>
          <ul className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:gap-x-8" data-testid="final-cta-perks">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-[15px] text-white">
                <CheckCircle size={22} weight="duotone" className="text-[#57f287]" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-11 flex flex-col sm:flex-row gap-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blurple !rounded-2xl"
              data-testid="final-cta-telegram-btn"
            >
              <TelegramIcon className="h-5 w-5" /> Join Free Telegram Channel
            </a>
            <a href="#features" className="btn-white !rounded-2xl" data-testid="final-cta-secondary-btn">
              See what you get
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <motion.div
            className="float-slow relative"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative block h-40 w-40 sm:h-52 sm:w-52 overflow-hidden rounded-full">
              <img src={LOGO} alt="TTB KING" className="h-full w-full object-cover" />
            </span>
          </motion.div>
        </div>
      </div>
    </Reveal>
  </section>
);
