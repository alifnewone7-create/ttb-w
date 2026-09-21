import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { TelegramIcon } from "./TelegramIcon";
import { BRAND, LOGO, NAV_LINKS, TELEGRAM_URL } from "@/lib/site";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`zone-light fixed inset-x-0 top-0 z-50 transition-[background-color] duration-500 ${
        scrolled ? "bg-[#faf8f2]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(20,25,60,0.08)]" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" data-testid="nav-logo-link">
          <span className="h-10 w-10 overflow-hidden rounded-full">
            <img src={LOGO} alt={`${BRAND} logo`} className="h-full w-full object-cover" />
          </span>
          <span className="font-display text-lg font-extrabold ink">TTB KING</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-base font-medium ink opacity-80 hover:opacity-100 transition-opacity duration-200"
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-blurple hidden sm:inline-flex !py-2.5 !px-4 !rounded-2xl !text-[15px]"
            data-testid="nav-telegram-btn"
          >
            <TelegramIcon className="h-[18px] w-[18px]" /> Join Telegram
          </a>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#14193c]/10 ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="nav-menu-toggle"
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#faf8f2]/98 backdrop-blur-xl"
            data-testid="nav-mobile-menu"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium ink border-b border-[#14193c]/10"
                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-5 pb-1">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blurple w-full"
                  data-testid="nav-mobile-telegram-btn"
                >
                  <TelegramIcon className="h-5 w-5" /> Join Free Telegram
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
