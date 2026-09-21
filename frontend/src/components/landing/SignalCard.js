import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TrendUp, TrendDown } from "@phosphor-icons/react";
import { LOGO } from "@/lib/site";

const SIGNALS = [
  { pair: "EUR/USD OTC", dir: "CALL", time: "14:32", exp: "1m", res: "WIN" },
  { pair: "GBP/JPY", dir: "PUT", time: "14:35", exp: "3m", res: "WIN" },
  { pair: "AUD/CAD OTC", dir: "CALL", time: "14:41", exp: "5m", res: "WIN" },
  { pair: "USD/BDT OTC", dir: "PUT", time: "14:46", exp: "1m", res: "WIN" },
];

const PATH =
  "M0 78 L22 70 L44 74 L66 58 L88 62 L110 44 L132 50 L154 36 L176 40 L198 24 L220 30 L242 14 L264 20 L286 8";

export const SignalCard = () => {
  const ref = useRef(null);
  const [idx, setIdx] = useState(0);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SIGNALS.length), 2600);
    return () => clearInterval(t);
  }, []);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const s = SIGNALS[idx];
  const up = s.dir === "CALL";

  return (
    <div className="relative" style={{ perspective: 1200 }} data-testid="hero-signal-card-wrap">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl bg-[#23272a] p-1.5"
        data-testid="hero-signal-card"
      >
        <div className="rounded-xl bg-[#2c2f33] p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-11 w-11 overflow-hidden rounded-full">
                <img src={LOGO} alt="TTB KING" className="h-full w-full object-cover" />
              </span>
              <div>
                <p className="font-display text-sm font-extrabold text-white">TTB KING · Signals</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-xs normal-case text-[#babcd9]">
                  <span className="h-2 w-2 rounded-full bg-[#57f287]" /> Session live
                </p>
              </div>
            </div>
            <span className="rounded-[104px] bg-[#57f287]/15 px-2.5 py-1 text-[11px] font-semibold text-[#57f287]">
              85% WR
            </span>
          </div>

          <div className="mt-6 rounded-xl bg-[#23272a] p-4">
            <div className="flex items-center justify-between text-[13px] text-[#babcd9]">
              <span>{s.pair}</span>
              <span>1m chart</span>
            </div>
            <svg viewBox="0 0 286 90" className="mt-3 h-24 w-full overflow-visible">
              <defs>
                <linearGradient id="sig-line" x1="0" x2="1">
                  <stop offset="0" stopColor="#5865f2" />
                  <stop offset="1" stopColor="#57f287" />
                </linearGradient>
                <linearGradient id="sig-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#5865f2" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#5865f2" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d={`${PATH} L286 90 L0 90 Z`}
                fill="url(#sig-fill)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
              />
              <motion.path
                d={PATH}
                fill="none"
                stroke="url(#sig-line)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.1, ease: "easeInOut" }}
              />
              <motion.circle
                cx="286"
                cy="8"
                r="4"
                fill="#57f287"
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ delay: 3, duration: 1.4, repeat: Infinity }}
              />
            </svg>
          </div>

          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-4 grid grid-cols-3 gap-3"
            data-testid="hero-signal-ticker"
          >
            <div className="rounded-xl bg-[#23272a] p-3">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#babcd9]">Direction</p>
              <p
                className={`mt-1.5 flex items-center gap-1 font-display text-lg font-extrabold ${
                  up ? "text-[#57f287]" : "text-[#de2761]"
                }`}
              >
                {up ? <TrendUp size={18} weight="bold" /> : <TrendDown size={18} weight="bold" />}
                {s.dir}
              </p>
            </div>
            <div className="rounded-xl bg-[#23272a] p-3">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#babcd9]">Entry</p>
              <p className="mt-1.5 font-display text-lg font-extrabold text-white">{s.time}</p>
            </div>
            <div className="rounded-xl bg-[#23272a] p-3">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#babcd9]">Expiry</p>
              <p className="mt-1.5 font-display text-lg font-extrabold text-white">{s.exp}</p>
            </div>
          </motion.div>

          <div className="mt-4 flex items-center justify-between text-[13px] text-[#babcd9]">
            <span>Trade #{2841 + idx}</span>
            <span className="rounded-[104px] bg-[#57f287]/15 px-2.5 py-1 text-[11px] font-semibold text-[#57f287]">
              RESULT · {s.res}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
