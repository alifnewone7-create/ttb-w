import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "", once = true, ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const MaskedLines = ({ lines, className = "", delay = 0, stagger = 0.12, as = "h1", ...rest }) => {
  const Tag = motion[as];
  return (
    <Tag className={className} {...rest}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <motion.span
            className="block"
            initial={{ y: "115%", rotate: 2 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{ duration: 1.1, delay: delay + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const SectionHead = ({ eyebrow, title, body, align = "left", id }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <Reveal>
      <p className="eyebrow" data-testid={id ? `${id}-eyebrow` : undefined}>{eyebrow}</p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] text-white" data-testid={id ? `${id}-title` : undefined}>
        {title}
      </h2>
    </Reveal>
    {body && (
      <Reveal delay={0.16}>
        <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed">{body}</p>
      </Reveal>
    )}
  </div>
);
