import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { Reveal, SectionHead } from "./Reveal";
import { STATS } from "@/lib/site";

const Counter = ({ value, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="grad-text font-display text-5xl sm:text-6xl font-extrabold leading-[0.86] tabular-nums">
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsBar = () => (
  <section id="stats" className="relative overflow-hidden py-24 sm:py-28 lg:py-[112px]" data-testid="stats-section">
    <div className="glow glow-pink right-[-10%] top-[0%] h-[460px] w-[460px]" />
    <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
      <SectionHead id="stats" eyebrow="Track record" title={<>Numbers that come from discipline, not luck</>} />
      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="card-grad flex flex-col items-center p-8 text-center"
            data-testid={`stat-card-${i}`}
          >
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            <p className="mt-5 font-display text-lg font-extrabold text-white">{s.label}</p>
            <p className="mt-1.5 text-sm normal-case fog">{s.note}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
