import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { LOGO } from "@/lib/site";

const SIGNALS = [
  { pair: "EUR/USD OTC", dir: "CALL", time: "14:32", exp: "1m", res: "WIN" },
  { pair: "GBP/JPY", dir: "PUT", time: "14:35", exp: "3m", res: "WIN" },
  { pair: "AUD/CAD OTC", dir: "CALL", time: "14:41", exp: "5m", res: "WIN" },
  { pair: "USD/BDT OTC", dir: "PUT", time: "14:46", exp: "1m", res: "WIN" },
];

const PATH = "M0 78 L22 70 L44 74 L66 58 L88 62 L110 44 L132 50 L154 36 L176 40 L198 24 L220 30 L242 14 L264 20 L286 8";

export const SignalCard = () => {
  const ref = useRef(null);
  const [idx, setIdx] = useState(0);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-12, 12]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SIGNALS.length), 2600);
    return () => clearInterval(t);
  }, []);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { mx.set(0.5); my.set(0.5); };

  const s = SIGNALS[idx];
  const up = s.dir === "CALL";

  return (
    <div className="relative" style={{ perspective: 1200 }} data-testid="hero-signal-card-wrap">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-600/30 via-cyan-400/10 to-transparent blur-2xl" />
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="glass relative rounded-[1.75rem] p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]"
        data-testid="hero-signal-card"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="ring-pulse relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-cyan-300/50">
              <img src={LOGO} alt="TTB KING" className="h-full w-full object-cover" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-white">TTB KING · Signals</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-300/80">Session live</p>
            </div>
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-300">85% WR</span>
        </div>

        <div className="mt-6 rounded-2xl border border-cyan-500/10 bg-[#050b18]/80 p-4">
          <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
            <span>{s.pair}</span>
            <span>1m chart</span>
          </div>
          <svg viewBox="0 0 286 90" className="mt-3 h-24 w-full overflow-visible">
            <defs>
              <linearGradient id="lg" x1="0" x2="1">
                <stop offset="0" stopColor="#2563eb" />
                <stop offset="1" stopColor="#00f0ff" />
              </linearGradient>
              <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#00f0ff" stopOpacity="0.25" />
                <stop offset="1" stopColor="#00f0ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path d={`${PATH} L286 90 L0 90 Z`} fill="url(#fill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} />
            <motion.path d={PATH} fill="none" stroke="url(#lg)" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.1, ease: "easeInOut" }} />
            <motion.circle cx="286" cy="8" r="4" fill="#00f0ff" initial={{ scale: 0 }} animate={{ scale: [1, 1.6, 1] }} transition={{ delay: 3, duration: 1.4, repeat: Infinity }} />
          </svg>
        </div>

        <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mt-4 grid grid-cols-3 gap-3" data-testid="hero-signal-ticker">
          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Direction</p>
            <p className={`mt-1 flex items-center gap-1 font-display text-lg font-bold ${up ? "text-emerald-300" : "text-rose-300"}`}>
              {up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}{s.dir}
            </p>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Entry</p>
            <p className="mt-1 font-display text-lg font-bold text-white">{s.time}</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Expiry</p>
            <p className="mt-1 font-display text-lg font-bold text-cyan-200">{s.exp}</p>
          </div>
        </motion.div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span className="font-mono">Trade #{2841 + idx}</span>
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] text-emerald-300">RESULT · {s.res}</span>
        </div>
      </motion.div>
    </div>
  );
};
