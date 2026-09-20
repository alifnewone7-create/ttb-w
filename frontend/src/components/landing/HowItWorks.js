import { Send } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { STEPS, TELEGRAM_URL } from "@/lib/site";

export const HowItWorks = () => (
  <section id="how-it-works" className="relative py-24 sm:py-32 bg-[#050b18]/60 border-y border-cyan-500/10" data-testid="how-it-works-section">
    <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-32">
          <SectionHead
            id="how-it-works"
            eyebrow="The process"
            title={<>From zero to your first <span className="text-gradient">disciplined trade.</span></>}
            body="Three chapters. No shortcuts. Every member walks the same path, and the community walks it with you."
          />
          <Reveal delay={0.2} className="mt-8">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" data-testid="how-telegram-btn">
              <Send className="h-4 w-4" /> Start chapter 01
            </a>
          </Reveal>
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <article className="group relative grid grid-cols-[auto,1fr] gap-6 sm:gap-10 border-t border-cyan-500/10 py-10 sm:py-14 last:border-b" data-testid={`step-${s.n}`}>
              <span className="num-outline font-display text-6xl sm:text-8xl font-black leading-none transition-colors duration-500 group-hover:text-cyan-300/90 select-none">{s.n}</span>
              <div>
                <p className="eyebrow">Chapter {s.n}</p>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">{s.title}</h3>
                <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-slate-400">{s.body}</p>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-300 transition-transform duration-700 group-hover:scale-x-100" />
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
