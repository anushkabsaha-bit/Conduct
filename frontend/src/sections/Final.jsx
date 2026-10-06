import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Shared";
import { Mark } from "../components/Chrome";

const lines = [
  ["I've built audiences.", "text-linen"],
  ["I've built systems.", "text-linen"],
  ["I've built communities.", "text-linen"],
  ["I've built slightly ridiculous things.", "outline-text-linen"],
];

export default function Final() {
  return (
    <section id="final" data-testid="final-section" className="bg-ink px-5 md:px-10 pt-24 md:pt-36 pb-10">
      <div className="mb-16 md:mb-24">
        {lines.map(([text, tone], i) => (
          <Reveal key={text} delay={i * 0.08}>
            <p className={`font-display uppercase leading-[0.95] text-[8.5vw] md:text-[5.5vw] ${tone}`}>{text}</p>
          </Reveal>
        ))}
      </div>

      <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
        <div className="md:col-span-7 space-y-6">
          <Reveal>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 max-w-xl">
              And whenever I see something that could be better, my first thought is usually:{" "}
              <span className="text-tangelo">"If I were there, what would I do differently?"</span> That's probably why
              I keep building things.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serifit italic text-xl md:text-2xl text-linen max-w-xl">
              I'd love to find out what I'd build at Conduct.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-5 flex md:justify-end items-start">
          <Reveal delay={0.16}>
            <motion.a
              href="mailto:Anushkabsaha@gmail.com"
              data-testid="final-contact-cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-4 bg-tangelo text-linen px-8 py-6 font-display uppercase text-2xl md:text-3xl tracking-wide hover:bg-linen hover:text-chocolate transition-colors"
            >
              I'd love to talk
              <ArrowUpRight className="w-7 h-7 transition-transform duration-300 group-hover:rotate-45" />
            </motion.a>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-linen/20 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Mark className="w-5 h-5" />
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-linen/70">
            Anushka Saha — Communications Strategist, Conduct
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.16em] uppercase text-linen/50">
          <a href="mailto:Anushkabsaha@gmail.com" data-testid="footer-email-link" className="underline-grow hover:text-tangelo transition-colors">
            Anushkabsaha@gmail.com
          </a>
          <span>Built by Anushka. Obviously.</span>
          <span>© 2026</span>
        </div>
      </footer>
    </section>
  );
}
