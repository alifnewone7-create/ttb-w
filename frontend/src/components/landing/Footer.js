import { TelegramIcon } from "./TelegramIcon";
import { BRAND, LOGO, NAV_LINKS, TELEGRAM_URL } from "@/lib/site";

export const Footer = () => (
  <footer className="relative bg-[#03050f]" data-testid="footer">
    <div className="mx-auto flex max-w-[1200px] flex-col items-center px-5 sm:px-8 py-16 text-center">
      <a href="#top" className="flex items-center gap-3" data-testid="footer-logo-link">
        <span className="h-11 w-11 overflow-hidden rounded-full">
          <img src={LOGO} alt={`${BRAND} logo`} className="h-full w-full object-cover" />
        </span>
        <span className="font-display text-xl font-extrabold text-white">TTB KING</span>
      </a>
      <p className="mt-6 max-w-lg text-base leading-relaxed fog">
        A growing binary trading community for market insights, trading strategies, educational content and community
        discussions. Learn, analyze &amp; trade responsibly.
      </p>
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-blurple mt-8 !py-3.5 !px-6 !text-[15px]"
        data-testid="footer-telegram-link"
      >
        <TelegramIcon className="h-5 w-5" /> Join TTB KING on Telegram
      </a>

      <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-base fog hover:text-white transition-colors duration-200"
              data-testid={`footer-link-${l.label.toLowerCase()}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-12 max-w-3xl text-[13px] leading-relaxed text-[#babcd9]/70" data-testid="footer-disclaimer">
        <span className="font-semibold text-white/80">Risk disclaimer: </span>
        Trading binary options and other financial instruments involves significant risk and may not be suitable for all
        investors. You could lose some or all of your invested capital. Past performance, win rates and member results
        shown are not indicative of future results and are not a guarantee of profit. All content shared by {BRAND} is
        for educational and informational purposes only and does not constitute financial advice. Never trade with
        money you cannot afford to lose. Trade responsibly.
      </p>

      <div className="mt-10 flex w-full flex-col items-center gap-2 border-t border-white/10 pt-7">
        <p className="text-sm fog" data-testid="footer-copyright">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
        <p className="text-sm fog">Learn · Analyze · Trade responsibly</p>
      </div>
    </div>
  </footer>
);
