import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightning, ShieldCheck, UsersThree } from "@phosphor-icons/react";
import { MaskedLines } from "./Reveal";
import { TelegramIcon } from "./TelegramIcon";
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
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-24 lg:pt-36"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d2170_0%,#141647_45%,transparent_100%)]" />
      <motion.div style={{ y: glowY }} className="glow glow-blurple left-1/2 top-[-10%] h-[620px] w-[620px] -translate-x-1/2" />
      <div className="glow glow-purple left-[-10%] top-[30%] h-[460px] w-[460px]" />
      <div className="glow glow-pink right-[-10%] top-[35%] h-[460px] w-[460px]" />

      <motion.div
        style={{ y: textY, opacity: fadeOut }}
        className="relative mx-auto flex w-full max-w-[900px] flex-col items-center px-5 text-center sm:px-8"
      >
        <motion.div
          {...fade(0.3)}
          className="inline-flex items-center gap-2.5 rounded-[104px] border border-white/10 bg-white/10 px-4 py-2 backdrop-blur"
          data-testid="hero-badge"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#57f287] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#57f287]" />
          </span>
          <span className="text-[13px] font-medium tracking-[0.04em] text-white">Live · Free Telegram community</span>
        </motion.div>

        <MaskedLines
          as="h1"
          delay={0.45}
          lines={["Learn to trade", "binary markets", "with the king"]}
          className="mt-8 text-[2.25rem] sm:text-[3.6rem] lg:text-[4.5rem] xl:text-[5rem] font-extrabold leading-[0.92] text-white"
          data-testid="hero-title"
        />

        <motion.p
          {...fade(0.95)}
          className="mt-8 max-w-[600px] text-base md:text-lg fog leading-relaxed"
          data-testid="hero-subtitle"
        >
          TTB KING is a growing binary trading community for market insights, trading strategies, educational content
          and real discussion. Learn, analyze &amp; trade responsibly with the community.
        </motion.p>

        <motion.div {...fade(1.1)} className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-blurple w-full sm:w-auto"
            data-testid="hero-join-telegram-btn"
          >
            <TelegramIcon className="h-5 w-5" /> Join Free Telegram Channel
          </a>
          <a href="#features" className="btn-white w-full sm:w-auto" data-testid="hero-explore-btn">
            Explore the channel
          </a>
        </motion.div>

        <motion.ul
          {...fade(1.25)}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 text-[15px] fog"
          data-testid="hero-trust-list"
        >
          {[
            [UsersThree, "15,000+ traders"],
            [Lightning, "100+ signals daily"],
            [ShieldCheck, "Risk-first mentorship"],
          ].map(([Icon, t]) => (
            <li key={t} className="flex items-center gap-2.5">
              <Icon size={22} weight="duotone" className="text-white" /> {t}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};
