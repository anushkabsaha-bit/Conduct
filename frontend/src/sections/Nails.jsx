import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHead, Tag } from "../components/Shared";

const NAILS_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_28f8e28b-843a-47dd-964d-510eaa7c3e63/artifacts/7025e174823a9df9_IMG_4835.jpeg";

const designs = [
  { id: "zebra", name: "The Zebra", note: "For the morally grey character. Obviously." },
  { id: "dragon", name: "The Dragon", note: "For the one who deserved a better chapter." },
  { id: "castle", name: "The Castle", note: "Every fictional world needs an establishing shot." },
  { id: "night", name: "The Night Sky", note: "Constellations. Subtlety was never the brief." },
  { id: "garden", name: "The Garden", note: "Cottagecore protagonist energy." },
];

export default function Nails() {
  const [active, setActive] = useState(designs[1]);

  return (
    <section id="nails" data-testid="nails-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="02" kicker="The press-on nail experiment" dark>
        Yes, I made merch <span className="text-tangelo">for fictional characters.</span>
      </SectionHead>

      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div className="md:col-span-6">
          <Reveal>
            <div className="relative spotlight border-2 border-linen/60 bg-linen p-3 rotate-[-1.5deg]">
              <img
                src={NAILS_URL}
                alt="Illustrated hand with five press-on nail designs inspired by fictional characters"
                data-testid="nails-artwork-image"
                className="w-full h-auto block"
              />
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-chocolate/60 pt-3">
                Fig. 02 — five fictional characters, rendered as nail art
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6">
          <Reveal>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 mb-8">
              I briefly decided my fictional characters needed nail art. Hover or tap a design.
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Nail designs">
            {designs.map((d) => (
              <button
                key={d.id}
                data-testid={`nail-design-${d.id}`}
                onMouseEnter={() => setActive(d)}
                onClick={() => setActive(d)}
                className={`font-mono text-[11px] tracking-[0.16em] uppercase px-4 py-2.5 border transition-colors duration-200 ${
                  active.id === d.id
                    ? "bg-tangelo text-linen border-tangelo"
                    : "border-linen/40 text-linen/85 hover:bg-linen hover:text-chocolate hover:border-linen"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              data-testid="nail-detail-panel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-chocolate bg-linen p-6 md:p-8"
            >
              <p className="font-display uppercase text-2xl md:text-3xl text-chocolate mb-2">{active.name}</p>
              <p className="font-serifit italic text-lg md:text-xl text-tangelo mb-6">{active.note}</p>
              <div className="space-y-2 font-mono text-xs md:text-sm text-chocolate/85">
                <p><span className="text-chocolate/50 uppercase tracking-[0.14em]">Inspired by —</span> a fictional character I cared about too much</p>
                <p><span className="text-chocolate/50 uppercase tracking-[0.14em]">Necessary —</span> no</p>
                <p><span className="text-chocolate/50 uppercase tracking-[0.14em]">Regrets —</span> none</p>
                <p><span className="text-chocolate/50 uppercase tracking-[0.14em]">Status —</span> retired, with honours</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6 space-y-3">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-linen/50">Was this necessary?</p>
            <p className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl text-linen">No.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-linen/50 pt-6">Did I do it anyway?</p>
            <p className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl text-tangelo">Obviously.</p>
          </Reveal>
        </div>
        <div className="md:col-span-6 space-y-6">
          <Reveal>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85">
              Now the serious part. The experiment didn't last forever. People came for the stories —{" "}
              <span className="text-tangelo font-bold">the story was the product.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serifit italic text-xl md:text-2xl leading-snug text-linen border-l-4 border-tangelo pl-5">
              You can't manufacture community by adding random things around an audience. People return because there is
              something they actually care about.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-wrap gap-2">
              <Tag>Experimentation</Tag>
              <Tag tone="linen">Creative taste</Tag>
              <Tag tone="outline-linen">Audience understanding</Tag>
              <Tag tone="botticelli">Learning from failure</Tag>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
