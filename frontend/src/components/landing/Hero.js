import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightning, ShieldCheck, UsersThree } from "@phosphor-icons/react";
import { MaskedLines } from "./Reveal";
import { SignalCard } from "./SignalCard";
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
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-24 lg:pt-36"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_20%_-10%,#1d2168,transparent_65%)]" />
      <motion.div style={{ y: glowY }} className="glow left-[-12%] top-[-8%] h-[520px] w-[520px] bg-[#404eed]/40" />
      <div className="glow right-[-16%] top-[18%] h-[560px] w-[560px] bg-[#2b2f6e]/60" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <motion.div style={{ y: textY, opacity: fadeOut }} className="lg:col-span-7">
          <motion.div
            {...fade(0.3)}
            className="inline-flex items-center gap-2.5 rounded-[104px] bg-white/10 px-4 py-2"
            data-testid="hero-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#57f287] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#57f287]" />
            </span>
            <span className="text-[13px] font-medium tracking-[0.04em] text-white">
              Live · Free Telegram community
            </span>
          </motion.div>

          <MaskedLines
            as="h1"
            delay={0.45}
            lines={["Learn to trade", "binary markets", "with the king"]}
            className="mt-7 text-[2.5rem] sm:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.8rem] font-extrabold leading-[0.86] text-white"
            data-testid="hero-title"
          />

          <motion.p
            {...fade(0.95)}
            className="mt-8 max-w-[440px] text-base md:text-lg fog leading-relaxed"
            data-testid="hero-subtitle"
          >
            TTB KING is a growing binary trading community for market insights, trading strategies, educational
            content and real discussion. Learn, analyze &amp; trade responsibly with the community.
          </motion.p>

          <motion.div {...fade(1.1)} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blurple"
              data-testid="hero-join-telegram-btn"
            >
              <TelegramIcon className="h-5 w-5" /> Join Free Telegram Channel
            </a>
            <a href="#features" className="btn-white" data-testid="hero-explore-btn">
              Explore the channel
            </a>
          </motion.div>

          <motion.ul
            {...fade(1.25)}
            className="mt-11 flex flex-wrap gap-x-8 gap-y-3.5 text-[15px] fog"
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

        <motion.div style={{ y: cardY }} className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
            className="w-full max-w-md"
          >
            <SignalCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
