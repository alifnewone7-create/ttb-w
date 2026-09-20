import { Send } from "lucide-react";
import { BRAND, LOGO, NAV_LINKS, TELEGRAM_URL } from "@/lib/site";

export const Footer = () => (
  <footer className="relative border-t border-cyan-500/10 bg-[#020610]" data-testid="footer">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#top" className="flex items-center gap-3" data-testid="footer-logo-link">
            <span className="h-11 w-11 overflow-hidden rounded-full ring-1 ring-cyan-400/40">
              <img src={LOGO} alt={`${BRAND} logo`} className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight text-white">TTB <span className="text-gradient">KING</span></span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            A growing binary trading community for market insights, trading strategies, educational content and community discussions. Learn, analyze &amp; trade responsibly.
          </p>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white transition-colors duration-300" data-testid="footer-telegram-link">
            <Send className="h-4 w-4" /> t.me/TTB KING Channel
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-300" data-testid={`footer-link-${l.label.toLowerCase()}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Risk disclaimer</p>
          <p className="mt-4 text-xs leading-relaxed text-slate-500" data-testid="footer-disclaimer">
            Trading binary options and other financial instruments involves significant risk and may not be suitable for all investors. You could lose some or all of your invested capital. Past performance, win rates and member results shown are not indicative of future results and are not a guarantee of profit. All content shared by {BRAND} is for educational and informational purposes only and does not constitute financial advice. Never trade with money you cannot afford to lose. Trade responsibly.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-slate-600" data-testid="footer-copyright">© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
        <p className="font-mono text-[11px] uppercase tracking-widest text-slate-600">Learn · Analyze · Trade responsibly</p>
      </div>
    </div>
  </footer>
);
