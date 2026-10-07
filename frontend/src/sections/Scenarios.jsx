import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHead } from "../components/Shared";

const scenarios = [
  {
    id: "announcement",
    label: "A product announcement gets published.",
    question: "Is this actually the best story?",
    steps: [
      "I'd speak to product.",
      "I'd speak to the customer.",
      "I'd understand what changed.",
      'Then I\'d ask: "What is the one thing someone should remember?"',
    ],
  },
  {
    id: "low-engagement",
    label: "A post gets low engagement.",
    question: "Is the problem distribution, the idea or the opening?",
    steps: ["I'd diagnose before posting three more versions of the same mistake."],
  },
  {
    id: "clever-idea",
    label: "A clever campaign idea appears.",
    question: "Is this actually useful, or is it just clever?",
    steps: ["I'd ask Diana to try to kill it.", "Then I'd test whatever survives."],
  },
];

export default function Scenarios() {
  const [active, setActive] = useState(0);

  return (
    <section id="if-i-were-there" data-testid="scenarios-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="06" kicker="Three situations" dark>
        If I were there<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-2 content-start">
          {scenarios.map((s, i) => (
            <button
              key={s.id}
              data-testid={`scenario-tab-${s.id}`}
              onClick={() => setActive(i)}
              className={`w-full text-left p-5 border-2 transition-colors duration-200 ${
                active === i ? "bg-tangelo border-tangelo text-linen" : "border-linen/30 text-linen/85 hover:border-botticelli"
              }`}
            >
              <span className={`block font-mono text-[10px] tracking-[0.2em] uppercase mb-2 ${active === i ? "text-linen/75" : "text-tangelo"}`}>
                Scenario 0{i + 1}
              </span>
              <span className="font-display uppercase text-lg md:text-xl leading-tight">{s.label}</span>
            </button>
          ))}
        </div>

        <div className="md:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              data-testid="scenario-panel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-linen/40 h-full"
            >
              <div className="bg-chocolate px-6 md:px-8 py-6 border-b border-linen/20">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-2">My question</p>
                <p className="font-serifit italic text-2xl md:text-3xl text-linen">"{scenarios[active].question}"</p>
              </div>
              <div className="px-6 md:px-8 py-6">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">If I were there</p>
                <div className="space-y-0 border-t border-linen/20">
                  {scenarios[active].steps.map((s, i) => (
                    <p key={i} className="font-mono text-sm md:text-base text-linen/90 py-3 border-b border-linen/20 last:border-b-0">
                      <span className="text-tangelo mr-3">→</span>
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
