import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHead } from "../components/Shared";

const audiences = [
  { who: "Engineer", q: "What is actually happening?", a: "Lead with what was hard and what is clever. The constraint nobody outside the room knows about." },
  { who: "CIO", q: "Why should I care?", a: "Lead with what it costs when the documented process and the real system disagree." },
  { who: "Customer", q: "What changes for me?", a: "Lead with the before and after they can actually feel. Their problem, their language." },
  { who: "Partner", q: "Where does this fit?", a: "Lead with what we can say together that neither of us can say alone." },
  { who: "Candidate", q: "What would I get to build?", a: "Lead with the problem they would get their hands on." },
];

export default function ProductComms() {
  const [aud, setAud] = useState(0);

  return (
    <section id="product-comms" data-testid="product-comms-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-32">
      <SectionHead no="07" kicker="Same product, different person">
        Same product, different person<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4 flex md:flex-col flex-wrap gap-2 content-start">
          {audiences.map((a, i) => (
            <button
              key={a.who}
              data-testid={`audience-tab-${i}`}
              onClick={() => setAud(i)}
              className={`text-left px-4 py-3 border font-mono text-[11px] md:text-xs tracking-[0.14em] uppercase transition-colors duration-200 ${
                aud === i ? "bg-chocolate text-linen border-chocolate" : "border-chocolate/40 text-chocolate hover:bg-tangelo hover:text-linen hover:border-tangelo"
              }`}
            >
              {a.who}
            </button>
          ))}
        </div>
        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={aud}
              data-testid="audience-panel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-chocolate p-6 md:p-10 h-full"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-3">{audiences[aud].who} asks</p>
              <p className="font-display uppercase text-3xl md:text-5xl text-chocolate leading-[0.95] mb-6">
                {audiences[aud].q}
              </p>
              <p className="font-serifit italic text-lg md:text-xl text-chocolate/85 border-t border-chocolate/25 pt-5">
                {audiences[aud].a}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
