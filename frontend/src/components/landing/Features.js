import { motion } from "framer-motion";
import { Broadcast, Crosshair, GraduationCap, Robot, Scales } from "@phosphor-icons/react";
import { Reveal, SectionHead } from "./Reveal";
import { TelegramIcon } from "./TelegramIcon";
import { FEATURES, TELEGRAM_URL } from "@/lib/site";

const ICONS = { signals: Crosshair, bot: Robot, risk: Scales, mentorship: GraduationCap, live: Broadcast };

const SKINS = {
  signals: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #4f46e5 100%)",
  bot: "linear-gradient(160deg, #1e1b4b 0%, #312e81 50%, #0b1030 100%)",
  risk: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #1d4ed8 100%)",
  mentorship: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 55%, #0ea5e9 100%)",
  live: "linear-gradient(135deg, #312e81 0%, #4338ca 50%, #1e40af 100%)",
};

const Card = ({ f, i }) => {
  const Icon = ICONS[f.id];
  return (
    <Reveal delay={i * 0.07} className={f.big ? "md:col-span-2 lg:col-span-4" : "lg:col-span-2"}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="zone-dark panel relative flex h-full flex-col items-center overflow-hidden border border-white/10 p-8 text-center shadow-[0_28px_60px_-30px_rgba(20,25,60,0.6)] sm:p-10"
        style={{ background: SKINS[f.id] }}
        data-testid={`feature-card-${f.id}`}
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">{f.tag}</span>
        <span className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white">
          <Icon size={32} weight="duotone" />
        </span>
        <h3
          className={`mt-7 font-extrabold leading-[1.08] text-white ${
            f.big ? "text-[1.75rem] sm:text-4xl lg:text-[2.75rem]" : "text-xl sm:text-2xl"
          }`}
        >
          {f.title}
        </h3>
        <p className="mt-4 max-w-[520px] text-[15px] sm:text-base leading-relaxed text-white/85">{f.body}</p>
        {f.big && (
          <div className="mt-10 flex w-full flex-col items-center">
            <div className="mb-8 grid w-full max-w-sm grid-cols-3 gap-3">
              {["1m", "3m", "5m"].map((e) => (
                <div key={e} className="rounded-xl bg-black/25 p-3 text-center">
                  <p className="font-display text-2xl font-extrabold text-white">{e}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-white/70">expiry</p>
                </div>
              ))}
            </div>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
              data-testid="feature-signals-telegram-btn"
            >
              <TelegramIcon className="h-5 w-5" /> Join Free Telegram Channel
            </a>
          </div>
        )}
      </motion.article>
    </Reveal>
  );
};

export const Features = () => (
  <section id="features" className="zone-light relative overflow-hidden py-24 sm:py-28 lg:py-[112px]" data-testid="features-section">
    <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
      <SectionHead
        id="features"
        eyebrow="Why TTB KING"
        title={<>Trade with precision,<br className="hidden sm:block" /> win with confidence</>}
        body="Everything a serious binary trader needs, taught openly in one Telegram channel. No paywall, no pitch."
      />
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Card key={f.id} f={f} i={i} />
        ))}
      </div>
    </div>
  </section>
);
