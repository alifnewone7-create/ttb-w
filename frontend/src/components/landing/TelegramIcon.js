// Official Telegram brand mark (blue circle + white paper plane)
export const TelegramIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 240 240" className={className} aria-hidden="true" data-testid="telegram-icon">
    <defs>
      <linearGradient id="tg-grad" x1="120" y1="240" x2="120" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1d93d2" />
        <stop offset="1" stopColor="#38b0e3" />
      </linearGradient>
    </defs>
    <circle cx="120" cy="120" r="120" fill="url(#tg-grad)" />
    <path
      fill="#c8daea"
      d="M98 175c-3.888 0-4.582-1.657-5.923-5.379L80.7 132.44 167 81"
    />
    <path fill="#a9c9dd" d="M98 175c3 0 4.325-1.372 6-2.7l16-15.575-19.95-12.026" />
    <path
      fill="#fff"
      d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.585c-7.89 3.165-7.843 7.567-1.438 9.528l29.816 9.305 68.93-43.476c3.255-1.977 6.244-.914 3.79 1.265"
    />
  </svg>
);

// Monochrome plane, for use on top of coloured buttons
export const TelegramPlane = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 240 240" className={className} fill="currentColor" aria-hidden="true">
    <path d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349L54.99 117.489c-7.89 3.165-7.843 7.567-1.438 9.528l29.816 9.305 68.93-43.476c3.255-1.977 6.244-.914 3.79 1.265l-56.048 50.3z" />
  </svg>
);
