import { Reveal, SectionHead } from "./Reveal";
import { TelegramIcon } from "./TelegramIcon";
import { STEPS, TELEGRAM_URL } from "@/lib/site";

export const HowItWorks = () => (
  <section id="how-it-works" className="relative px-5 sm:px-8 py-10 sm:py-16" data-testid="how-it-works-section">
    <div
      className="relative mx-auto max-w-[1200px] panel overflow-hidden border border-white/10 px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
      style={{ background: "var(--grad-panel)" }}
    >
      <div className="glow glow-pink right-[-10%] top-[-20%] h-[400px] w-[400px]" />
      <div className="relative flex flex-col items-center">
        <SectionHead
          id="how-it-works"
          eyebrow="The process"
          title={<>From zero to your first disciplined trade</>}
          body="Three chapters. No shortcuts. Every member walks the same path, and the community walks it with you."
        />

        <div className="mt-14 grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="h-full">
              <article
                className="card-grad group flex h-full flex-col items-center p-8 text-center sm:p-9"
                data-testid={`step-${s.n}`}
              >
                <span className="num-stamp font-display text-6xl sm:text-7xl font-black leading-none transition-colors duration-500 group-hover:text-white select-none">
                  {s.n}
                </span>
                <p className="eyebrow mt-6">Chapter {s.n}</p>
                <h3 className="mt-3 font-display text-2xl sm:text-[1.6rem] font-extrabold leading-[1.08] text-white">
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] sm:text-base leading-relaxed fog">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-blurple"
            data-testid="how-telegram-btn"
          >
            <TelegramIcon className="h-5 w-5" /> Start chapter 01
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);
