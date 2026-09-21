import { Star } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { TESTIMONIALS } from "@/lib/site";

const Card = ({ t, i }) => (
  <figure className="glass flex w-[320px] sm:w-[380px] shrink-0 flex-col rounded-3xl p-6 sm:p-7" data-testid={`testimonial-card-${i}`}>
    <div className="flex items-center gap-1 text-cyan-300">
      {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
    </div>
    <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-slate-200">“{t.text}”</blockquote>
    <figcaption className="mt-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 font-display text-sm font-bold text-white">{t.name[0]}</span>
        <div>
          <p className="font-display text-sm font-semibold text-white">{t.name}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{t.role}</p>
        </div>
      </div>
      <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300 whitespace-nowrap">{t.profit}</span>
    </figcaption>
  </figure>
);

export const Testimonials = () => (
  <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32" data-testid="testimonials-section">
    <div className="orb right-[-10%] top-10 h-[480px] w-[480px] bg-blue-600/20" />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <SectionHead id="testimonials" eyebrow="Community" title={<>Real traders. <span className="text-gradient">Real discipline.</span></>} />
      <Reveal delay={0.2} className="flex items-center gap-3" data-testid="testimonials-rating">
        <span className="font-display text-4xl font-extrabold text-gradient">4.9</span>
        <div>
          <div className="flex text-cyan-300">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}</div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">avg member rating</p>
        </div>
      </Reveal>
    </div>

    <div className="marquee relative mt-14" style={{ "--speed": "70s" }} data-testid="testimonials-marquee">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-40 bg-gradient-to-r from-[#040c22]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-40 bg-gradient-to-l from-[#040c22]/80 to-transparent" />
      <div className="marquee-track gap-5 px-5">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => <Card key={i} t={t} i={i} />)}
      </div>
    </div>
  </section>
);
