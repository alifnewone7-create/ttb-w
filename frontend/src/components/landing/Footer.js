import { TelegramIcon } from "./TelegramIcon";
import { BRAND, LOGO, NAV_LINKS, TELEGRAM_URL } from "@/lib/site";

export const Footer = () => (
  <footer className="relative bg-black" data-testid="footer">
    <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#top" className="flex items-center gap-3" data-testid="footer-logo-link">
            <span className="h-11 w-11 overflow-hidden rounded-full">
              <img src={LOGO} alt={`${BRAND} logo`} className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-xl font-extrabold text-white">TTB KING</span>
          </a>
          <p className="mt-6 max-w-sm text-base leading-relaxed fog">
            A growing binary trading community for market insights, trading strategies, educational content and
            community discussions. Learn, analyze &amp; trade responsibly.
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 text-base font-medium text-white hover:text-[#8891f2] transition-colors duration-200"
            data-testid="footer-telegram-link"
          >
            <TelegramIcon className="h-6 w-6" /> t.me/TTB KING Channel
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="text-base font-medium tracking-[0.013em] text-white normal-case">Explore</p>
          <ul className="mt-4 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-base leading-relaxed fog hover:text-white transition-colors duration-200"
                  data-testid={`footer-link-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-base font-medium tracking-[0.013em] text-white normal-case">Risk disclaimer</p>
          <p className="mt-4 text-[13px] leading-relaxed text-[#babcd9]/80" data-testid="footer-disclaimer">
            Trading binary options and other financial instruments involves significant risk and may not be suitable
            for all investors. You could lose some or all of your invested capital. Past performance, win rates and
            member results shown are not indicative of future results and are not a guarantee of profit. All content
            shared by {BRAND} is for educational and informational purposes only and does not constitute financial
            advice. Never trade with money you cannot afford to lose. Trade responsibly.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm fog" data-testid="footer-copyright">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
        <p className="text-sm fog">Learn · Analyze · Trade responsibly</p>
      </div>
    </div>
  </footer>
);
