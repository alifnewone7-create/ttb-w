import { motion } from "framer-motion";
import { Lightning, ShieldCheck, UsersThree } from "@phosphor-icons/react";
import { TelegramIcon } from "./TelegramIcon";
import { TELEGRAM_URL } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1];
const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export const Hero = () => (
  <section id="top" className="zone-light relative overflow-hidden pt-[112px] pb-16 sm:pt-[128px] sm:pb-20 lg:pt-[140px] lg:pb-24" data-testid="hero-section">

    <div className="relative mx-auto flex w-full max-w-[920px] flex-col items-center px-5 text-center sm:px-8">
      <motion.div
        {...fade(0.1)}
        className="inline-flex items-center gap-2.5 rounded-[104px] border border-[#3d5aff]/25 bg-[#3d5aff]/10 px-4 py-2"
        data-testid="hero-badge"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#57f287] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#57f287]" />
        </span>
        <span className="text-[13px] font-semibold tracking-[0.04em] ink">Live · Free Telegram community</span>
      </motion.div>

      <motion.h1
        {...fade(0.2)}
        className="mt-7 text-[2.25rem] sm:text-[3.4rem] lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold leading-[1.02] ink"
        data-testid="hero-title"
      >
        Learn to trade
        <br />
        binary markets
        <br />
        <span className="grad-text grad-text-deep">with the king</span>
      </motion.h1>

      <motion.p
        {...fade(0.35)}
        className="mt-7 max-w-[620px] text-base md:text-lg fog leading-relaxed"
        data-testid="hero-subtitle"
      >
        TTB KING is a growing binary trading community for market insights, trading strategies, educational content
        and real discussion. Learn, analyze &amp; trade responsibly with the community.
      </motion.p>

      <motion.div {...fade(0.5)} className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-blurple w-full sm:w-auto"
          data-testid="hero-join-telegram-btn"
        >
          <TelegramIcon className="h-5 w-5" /> Join Free Telegram Channel
        </a>
        <a href="#features" className="btn-ghost w-full sm:w-auto !py-[16px] !px-6" data-testid="hero-explore-btn">
          Explore the channel
        </a>
      </motion.div>

      <motion.ul
        {...fade(0.65)}
        className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 text-[15px] fog"
        data-testid="hero-trust-list"
      >
        {[
          [UsersThree, "15,000+ traders"],
          [Lightning, "100+ signals daily"],
          [ShieldCheck, "Risk-first mentorship"],
        ].map(([Icon, t]) => (
          <li key={t} className="flex items-center gap-2.5">
            <Icon size={22} weight="duotone" className="text-[#3d5aff]" /> {t}
          </li>
        ))}
      </motion.ul>
    </div>
  </section>
);
