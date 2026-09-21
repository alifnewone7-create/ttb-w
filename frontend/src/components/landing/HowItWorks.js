import { Reveal, SectionHead } from "./Reveal";
import { TelegramIcon } from "./TelegramIcon";
import { STEPS, TELEGRAM_URL } from "@/lib/site";

export const HowItWorks = () => (
  <section id="how-it-works" className="relative px-5 sm:px-8 py-10 sm:py-16" data-testid="how-it-works-section">
    <div className="mx-auto max-w-[1200px] panel overflow-hidden bg-[#1a1c45] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHead
              id="how-it-works"
              eyebrow="The process"
              title={<>From zero to your first disciplined trade</>}
              body="Three chapters. No shortcuts. Every member walks the same path, and the community walks it with you."
            />
            <Reveal delay={0.2} className="mt-9">
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

        <div className="lg:col-span-7 flex flex-col">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <article
                className="group grid grid-cols-[auto,1fr] gap-6 sm:gap-10 border-t border-white/10 py-10 sm:py-12 last:border-b"
                data-testid={`step-${s.n}`}
              >
                <span className="num-stamp font-display text-6xl sm:text-7xl font-black leading-none transition-colors duration-500 group-hover:text-white select-none">
                  {s.n}
                </span>
                <div>
                  <p className="eyebrow">Chapter {s.n}</p>
                  <h3 className="mt-3 font-display text-2xl sm:text-[1.75rem] font-extrabold leading-[0.95] text-white">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-[15px] sm:text-base leading-relaxed fog">{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
