import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Shared";
import { Mark } from "../components/Chrome";

export default function Final() {
  return (
    <section id="final" data-testid="final-section" className="bg-ink px-5 md:px-10 pt-24 md:pt-32 pb-10">
      <div className="max-w-2xl space-y-6 mb-16 md:mb-24">
        <Reveal>
          <p className="font-mono text-sm md:text-base leading-relaxed text-linen/90">
            I have been looking at Conduct for a while. Long enough that I kept catching myself thinking about what I'd
            do if I were actually there. What I'd ask. What I'd change. What I'd test. What I'd probably get wrong
            first.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-mono text-sm md:text-base leading-relaxed text-linen/90">
            At some point, making a website about it seemed slightly more useful than continuing to think about it in my
            Notes app. So I built this.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="font-serifit italic text-xl md:text-2xl leading-snug text-linen">
            Anyway, I clearly want the job enough to build the website before I have it. I think the next sensible step
            is probably a conversation.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-8 mb-16 md:mb-24">
        <Reveal>
          <p className="font-display uppercase leading-[0.9] text-[14vw] md:text-[9vw] text-linen">
            conduct<span className="text-tangelo">/</span>
          </p>
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-linen/60 mt-3">Anushka Saha</p>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.a
            href="mailto:Anushkabsaha@gmail.com"
            data-testid="final-contact-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-4 bg-tangelo text-linen px-8 py-6 font-display uppercase text-2xl md:text-3xl tracking-wide hover:bg-linen hover:text-chocolate transition-colors"
          >
            Let's talk
            <ArrowUpRight className="w-7 h-7 transition-transform duration-300 group-hover:rotate-45" />
          </motion.a>
        </Reveal>
      </div>

      <footer className="border-t border-linen/20 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Mark className="w-5 h-5" />
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-linen/70">
            Anushka Saha · Communications Strategist, Conduct
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
