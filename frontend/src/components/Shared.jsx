import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 32, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Tag = ({ children, tone = "tangelo", className = "" }) => {
  const tones = {
    tangelo: "bg-tangelo text-linen",
    chocolate: "bg-chocolate text-linen",
    botticelli: "bg-botticelli text-chocolate",
    linen: "bg-linen text-chocolate",
    outline: "border border-chocolate/60 text-chocolate",
    "outline-linen": "border border-linen/60 text-linen",
  };
  return (
    <span
      className={`inline-block px-2.5 py-1 font-mono text-[11px] tracking-[0.18em] uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
};

export const SectionHead = ({ no, kicker, children, dark = false }) => (
  <div className="mb-12 md:mb-16">
    <Reveal>
      <div className="flex items-center gap-4 mb-6">
        <span className={`font-mono text-xs tracking-[0.2em] ${dark ? "text-botticelli" : "text-tangelo"}`}>{no}</span>
        <span className={`h-px flex-1 ${dark ? "bg-linen/25" : "bg-chocolate/30"}`} />
        <span className={`font-mono text-[11px] tracking-[0.2em] uppercase ${dark ? "text-linen/60" : "text-chocolate/70"}`}>
          {kicker}
        </span>
      </div>
    </Reveal>
    <Reveal delay={0.08}>
      <h2
        className={`font-display uppercase leading-[0.95] text-4xl sm:text-5xl lg:text-6xl max-w-6xl ${dark ? "text-linen" : "text-chocolate"}`}
      >
        {children}
      </h2>
    </Reveal>
  </div>
);

export const Arrow = ({ className = "" }) => (
  <span className={`inline-block ${className}`} aria-hidden="true">
    →
  </span>
);
