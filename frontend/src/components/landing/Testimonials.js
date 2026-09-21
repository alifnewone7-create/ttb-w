import { Star } from "@phosphor-icons/react";
import { Reveal, SectionHead } from "./Reveal";
import { TESTIMONIALS } from "@/lib/site";

const Stars = ({ size = 15 }) => (
  <div className="flex items-center justify-center gap-0.5 text-[#fda220]">
    {Array.from({ length: 5 }).map((_, k) => (
      <Star key={k} size={size} weight="fill" />
    ))}
  </div>
);

const Card = ({ t, i }) => (
  <figure
    className="card-grad flex w-[320px] sm:w-[380px] shrink-0 flex-col items-center p-7 text-center"
    data-testid={`testimonial-card-${i}`}
  >
    <Stars />
    <blockquote className="mt-5 text-[15px] sm:text-base leading-relaxed text-white">“{t.text}”</blockquote>
    <figcaption className="mt-7 flex flex-col items-center gap-3">
      <span
        className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-extrabold text-white"
        style={{ backgroundImage: "var(--grad-btn)" }}
      >
        {t.name[0]}
      </span>
      <div>
        <p className="font-display text-sm font-extrabold text-white">{t.name}</p>
        <p className="mt-0.5 text-xs normal-case fog">{t.role}</p>
      </div>
      <span className="rounded-[104px] bg-[#57f287]/15 px-2.5 py-1 text-[11px] font-semibold text-[#57f287] whitespace-nowrap">
        {t.profit}
      </span>
    </figcaption>
  </figure>
);

export const Testimonials = () => (
  <section id="testimonials" className="relative overflow-hidden py-24 sm:py-28 lg:py-[112px]" data-testid="testimonials-section">
    <div className="glow glow-blurple left-1/2 top-[20%] h-[500px] w-[700px] -translate-x-1/2" />
    <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-5 sm:px-8">
      <SectionHead id="testimonials" eyebrow="Community" title={<>Real traders, real discipline</>} />
      <Reveal delay={0.2} className="mt-8 flex items-center gap-4" data-testid="testimonials-rating">
        <span className="font-display text-4xl font-extrabold text-white">4.9</span>
        <div>
          <Stars size={16} />
          <p className="mt-1 text-xs normal-case fog">avg member rating</p>
        </div>
      </Reveal>
    </div>

    <div className="marquee relative mt-14" style={{ "--speed": "70s" }} data-testid="testimonials-marquee">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-32 bg-gradient-to-r from-[#0e0f2d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-32 bg-gradient-to-l from-[#0e0f2d] to-transparent" />
      <div className="marquee-track gap-5 px-5">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <Card key={i} t={t} i={i} />
        ))}
      </div>
    </div>
  </section>
);
