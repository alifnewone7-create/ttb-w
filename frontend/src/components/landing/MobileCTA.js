import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/site";

export const MobileCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-x-4 bottom-4 z-40 sm:hidden" data-testid="mobile-sticky-cta">
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full shadow-[0_10px_40px_rgba(0,0,0,0.6)]" data-testid="mobile-sticky-telegram-btn">
            <Send className="h-4 w-4" /> Join Free Telegram Channel
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
