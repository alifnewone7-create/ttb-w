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
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: delay + i * stagger, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export const SectionHead = ({ eyebrow, title, body, align = "center", id }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <Reveal>
      <p className="eyebrow" data-testid={id ? `${id}-eyebrow` : undefined}>{eyebrow}</p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2
        className="mt-5 text-[2rem] sm:text-4xl lg:text-[3rem] font-extrabold leading-[1.08] ink"
        data-testid={id ? `${id}-title` : undefined}
      >
        {title}
      </h2>
    </Reveal>
    {body && (
      <Reveal delay={0.16}>
        <p className="mt-6 text-base md:text-lg fog leading-relaxed normal-case">{body}</p>
      </Reveal>
    )}
  </div>
);
