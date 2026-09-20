import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
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
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled ? "bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent border-b border-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3 group" data-testid="nav-logo-link">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-cyan-400/40 group-hover:ring-cyan-300 transition-[box-shadow] duration-300 shadow-[0_0_18px_rgba(0,240,255,0.25)]">
            <img src={LOGO} alt={`${BRAND} logo`} className="h-full w-full object-cover" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            TTB <span className="text-gradient">KING</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cyan-300 after:transition-[width] after:duration-300 hover:after:w-full"
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hidden sm:inline-flex !py-2.5 !px-5 text-sm" data-testid="nav-telegram-btn">
            <Send className="h-4 w-4" /> Join Telegram
          </a>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="nav-menu-toggle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="md:hidden border-t border-cyan-500/10 bg-[#030712]/95 backdrop-blur-xl"
            data-testid="nav-mobile-menu"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-200 border-b border-white/5" data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full" data-testid="nav-mobile-telegram-btn">
                  <Send className="h-4 w-4" /> Join Free Telegram
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
