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

const evidence = ["70K readers", "37 → 7 weekly escalations", "£17K overcharge found", "£50K commercial deal", "1 Conduct Growth OS", "6 specialised agents"];

export default function Hero() {
  const { scrollY } = useScroll();
  const yBig = useTransform(scrollY, [0, 900], [0, -140]);
  const yMark = useTransform(scrollY, [0, 900], [0, 110]);

  return (
    <section id="top" data-testid="hero-section" className="relative min-h-screen flex flex-col justify-between pt-24 md:pt-28 overflow-hidden bg-ink">
      <motion.div
        style={{ y: yMark }}
        className="pointer-events-none absolute -right-8 top-10 font-display text-[50vw] md:text-[34vw] leading-none text-chocolate/40 select-none"
        aria-hidden="true"
      >
        ?
      </motion.div>

      <div className="px-5 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 mb-8 md:mb-12"
        >
          <Tag>Anushka Saha</Tag>
          <Tag tone="outline-linen">Communications Strategist</Tag>
          <Tag tone="botticelli">Conduct · London / NYC</Tag>
        </motion.div>

        <motion.h1
          style={{ y: yBig }}
          data-testid="hero-kinetic-headline"
          className="font-display uppercase leading-[0.92] text-[11.5vw] md:text-[8vw] tracking-[0.005em]"
        >
          <MaskLine delay={0.35}>
            <span className="text-linen">I have a slightly</span>
          </MaskLine>
          <MaskLine delay={0.5}>
            <span className="text-tangelo">annoying habit.</span>
          </MaskLine>
          <MaskLine delay={0.72}>
            <span className="text-linen">When I see a problem,</span>
          </MaskLine>
          <MaskLine delay={0.87}>
            <span className="text-linen">I start asking what I'd have</span>
          </MaskLine>
          <MaskLine delay={1.02}>
            <span className="outline-text-linen">done differently.</span>
          </MaskLine>
        </motion.h1>
      </div>

      <div className="relative z-10 px-5 md:px-10 pb-14 pt-14 md:pt-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-end">
          <div className="md:col-span-6">
            <Reveal>
              <div className="space-y-1.5 mb-8 font-mono text-xs md:text-sm tracking-[0.12em] uppercase">
                <p data-testid="hero-question-1" className="text-tangelo">Why didn't that work?</p>
                <p data-testid="hero-question-2" className="text-linen">What was missing? What would I test?</p>
                <p data-testid="hero-question-3" className="text-linen">If I were in the room, what would I do?</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-serifit italic text-xl md:text-2xl leading-snug text-linen max-w-lg">
                Not self-blame. Ownership. I tend to end up building the thing I wish existed.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal delay={0.16}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/50 mb-4">
                The habit, with receipts
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8" data-testid="hero-evidence-strip">
                {evidence.map((e) => (
                  <span key={e} className="font-mono text-[11px] md:text-xs tracking-[0.1em] uppercase text-linen/80">
                    <span className="text-tangelo mr-1.5">✳</span>
                    {e}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href="#built"
                data-testid="hero-built-cta"
                className="group inline-flex items-center gap-3 bg-tangelo text-linen font-mono text-xs md:text-sm tracking-[0.18em] uppercase px-6 py-4 hover:bg-linen hover:text-chocolate transition-colors"
              >
                Here's the evidence
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
