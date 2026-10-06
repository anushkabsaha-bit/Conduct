import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Reveal, Tag } from "../components/Shared";

const MaskLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
    <motion.span
      className="block will-change-transform"
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const threads = [
  "psychology",
  "writing",
  "community",
  "hospitality",
  "operations",
  "commercial work",
  "growth",
  "AI",
  "communications",
];

export default function Hero() {
  const { scrollY } = useScroll();
  const yBig = useTransform(scrollY, [0, 900], [0, -140]);
  const yMark = useTransform(scrollY, [0, 900], [0, 110]);

  return (
    <section id="top" data-testid="hero-section" className="relative min-h-screen flex flex-col justify-between pt-24 md:pt-28 overflow-hidden bg-ink">
      <motion.div
        style={{ y: yMark }}
        className="pointer-events-none absolute -right-10 top-16 md:top-10 font-display text-[42vw] md:text-[30vw] leading-none text-chocolate/40 select-none"
        aria-hidden="true"
      >
        A·S
      </motion.div>

      <div className="px-5 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 mb-8 md:mb-12"
        >
          <Tag>Application</Tag>
          <Tag tone="outline-linen">Communications Strategist</Tag>
          <Tag tone="botticelli">Conduct · London / NYC</Tag>
        </motion.div>

        <motion.h1
          style={{ y: yBig }}
          data-testid="hero-kinetic-headline"
          className="font-display uppercase leading-[0.9] text-[15.5vw] md:text-[10.5vw] tracking-[0.005em]"
        >
          <MaskLine delay={0.35}>
            <span className="text-linen">I have built</span>
          </MaskLine>
          <MaskLine delay={0.5}>
            <span className="text-tangelo">audiences.</span>
          </MaskLine>
          <MaskLine delay={0.65}>
            <span className="text-linen">I have built</span>
          </MaskLine>
          <MaskLine delay={0.8}>
            <span className="text-botticelli">things.</span>
          </MaskLine>
          <MaskLine delay={0.95}>
            <span className="text-linen">I have built</span>
          </MaskLine>
          <MaskLine delay={1.1}>
            <span className="outline-text-linen">legos.</span>
          </MaskLine>
        </motion.h1>
      </div>

      <div className="relative z-10 px-5 md:px-10 pb-14 pt-16 md:pt-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-linen leading-[0.95] mb-6">
                I'm Anushka<span className="text-tangelo">.</span>
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-mono text-sm md:text-base leading-relaxed text-linen/80 max-w-xl mb-6">
                I tend to end up in places where I keep asking:
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="space-y-1.5 mb-8 font-mono text-xs md:text-sm tracking-[0.12em] uppercase">
                <p data-testid="hero-question-1" className="text-tangelo">What else could we do?</p>
                <p data-testid="hero-question-2" className="text-linen">Why does this work? Why doesn't it?</p>
                <p data-testid="hero-question-3" className="text-linen">What happens if we try something slightly different?</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-1.5 max-w-xl">
                {threads.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase border border-linen/30 px-2 py-1 text-linen/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.26}>
              <p className="font-serifit italic text-lg md:text-xl leading-snug text-linen mb-5">
                The common thread: I like figuring out why something matters, finding the interesting bit inside it, and
                building a way for people to understand it, care about it, and come back.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="font-mono text-xs md:text-sm leading-relaxed text-linen/75 mb-8">
                Conduct is solving the problem of making complicated enterprise systems understandable. I'm fascinated
                by the other side of that problem:{" "}
                <span className="text-tangelo font-bold">
                  how do you make Conduct itself understandable, memorable and impossible to ignore?
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.38}>
              <a
                href="#built"
                data-testid="hero-built-cta"
                className="group inline-flex items-center gap-3 bg-tangelo text-linen font-mono text-xs md:text-sm tracking-[0.18em] uppercase px-6 py-4 hover:bg-linen hover:text-chocolate transition-colors"
              >
                Here's what I've built
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
