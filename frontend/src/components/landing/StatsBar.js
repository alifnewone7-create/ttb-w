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
    const c = animate(0, value, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-gradient tabular-nums">
      {prefix}{n.toLocaleString()}{suffix}
    </span>
  );
};

export const StatsBar = () => (
  <section id="stats" className="relative overflow-hidden py-24 sm:py-32" data-testid="stats-section">
    <div className="orb right-[-10%] top-0 h-[420px] w-[420px] bg-blue-700/20" />
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHead id="stats" eyebrow="Track record" title={<>Numbers that come from <span className="text-gradient">discipline</span>, not luck.</>} />
      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-cyan-500/10 bg-cyan-500/10 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-[#050b18] p-8 sm:p-10 relative group" data-testid={`stat-card-${i}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-400/0 group-hover:from-blue-600/10 group-hover:to-cyan-400/5 transition-[background-image,opacity] duration-500" />
            <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            <p className="mt-4 font-display text-lg font-semibold text-white">{s.label}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-slate-500">{s.note}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
