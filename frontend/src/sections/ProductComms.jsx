import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHead } from "../components/Shared";

const audiences = [
  { who: "Engineer", q: "How does it work?", a: "Lead with the technically interesting bit — what was hard, what's clever, what an engineer would be proud of." },
  { who: "CIO", q: "Why should I care?", a: "Lead with risk and time: what breaks without it, and what Monday morning looks like after." },
  { who: "Customer", q: "What changes for me?", a: "Lead with the before/after they can actually feel. Their problem, in their language." },
  { who: "Partner", q: "Where does this fit?", a: "Lead with the joint story — what we can say together that neither of us can say alone." },
  { who: "Candidate", q: "What would I get to build?", a: "Lead with the problem they'd get their hands on. Good people apply to interesting problems." },
  { who: "General tech audience", q: "Why is this interesting?", a: "Lead with the absurdity of enterprise software that everyone secretly recognises." },
];

const lenses = [
  {
    k: "Engineer",
    title: "The technical angle",
    body: "Sit with the engineer until I understand what was actually hard. The story is usually in the constraint nobody outside the room knows about. Translate it until my past self — the one who doesn't write code — finds it interesting.",
  },
  {
    k: "CIO",
    title: "The business angle",
    body: "Same build, different question: what does this cost if ignored, and what does it return if adopted? No adjectives. A CIO has read every launch post ever written; the only currency is specifics.",
  },
  {
    k: "Customer",
    title: "The outcome angle",
    body: "Forget the feature. What problem did someone have on a Tuesday, and what does that Tuesday look like now? If the customer wouldn't say it that way, it doesn't ship that way.",
  },
];

const pipeline = [
  ["Engineering", "What did we build?"],
  ["Product", "What changed?"],
  ["Customer", "Why does it matter?"],
  ["Me", "What's the interesting story?"],
  ["Communications", "How do we make someone care?"],
];

const outputs = ["Customer story", "Video", "Founder POV", "Technical deep dive", "LinkedIn", "Event", "Sales enablement", "Website", "Recruiting"];

const oneStory = [
  "1 hero story",
  "1 customer story",
  "1 engineer explanation",
  "1 founder POV",
  "3 social cuts",
  "1 short video",
  "1 technical deep dive",
  "1 sales asset",
  "1 event talk",
  "1 recruiting asset",
];

export default function ProductComms() {
  const [aud, setAud] = useState(0);
  const [lens, setLens] = useState(0);

  return (
    <section id="product-comms" data-testid="product-comms-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="05" kicker="Same product, different person">
        Same product. <span className="text-tangelo">Different reason to care.</span>
      </SectionHead>

      <div className="grid md:grid-cols-12 gap-8 mb-24 md:mb-32">
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

      <div className="mb-24 md:mb-32">
        <SectionHead no="06" kicker="Product × communications">
          I want to be <span className="text-tangelo">very close to the product.</span>
        </SectionHead>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-sm text-chocolate/85 mb-8 max-w-md">
                Not comms at the end of the process waiting for an announcement. In the room while it's being built.
              </p>
            </Reveal>
            <div className="border-t border-chocolate/30">
              {pipeline.map(([who, q], i) => (
                <Reveal key={who} delay={Math.min(i * 0.05, 0.25)} y={10}>
                  <div className={`flex items-baseline justify-between gap-6 py-4 border-b border-chocolate/30 ${who === "Me" ? "text-tangelo" : ""}`}>
                    <span className="font-display uppercase text-xl md:text-2xl">{who}</span>
                    <span className="font-mono text-xs md:text-sm text-right opacity-80">{q}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 mt-8">
                {outputs.map((o) => (
                  <span key={o} className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] uppercase border border-chocolate/50 px-3 py-2 text-chocolate hover:bg-tangelo hover:text-linen hover:border-tangelo transition-colors cursor-default">
                    {o}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-chocolate/60 mb-4">
                One build, three lenses — pick one
              </p>
              <div className="flex gap-2 mb-6">
                {lenses.map((l, i) => (
                  <button
                    key={l.k}
                    data-testid={`lens-tab-${l.k.toLowerCase()}`}
                    onClick={() => setLens(i)}
                    className={`px-4 py-2.5 border font-mono text-[11px] tracking-[0.16em] uppercase transition-colors ${
                      lens === i ? "bg-tangelo text-linen border-tangelo" : "border-chocolate/40 text-chocolate hover:bg-chocolate hover:text-linen"
                    }`}
                  >
                    {l.k} lens
                  </button>
                ))}
              </div>
            </Reveal>
            <AnimatePresence mode="wait">
              <motion.div
                key={lens}
                data-testid="lens-panel"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-chocolate text-linen p-6 md:p-10"
              >
                <p className="font-display uppercase text-2xl md:text-4xl mb-5 text-botticelli">{lenses[lens].title}</p>
                <p className="font-mono text-sm md:text-base leading-relaxed text-linen/90">{lenses[lens].body}</p>
              </motion.div>
            </AnimatePresence>
            <Reveal delay={0.15}>
              <p className="font-display uppercase text-3xl md:text-4xl text-chocolate leading-[0.95] mt-10">
                Comms isn't distribution at the end. <span className="text-tangelo">It's product storytelling.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div id="one-story" data-testid="one-story-section" className="pt-16 md:pt-24 border-t border-chocolate/30">
        <SectionHead no="07" kicker="Content + distribution">
          One story should not <span className="text-tangelo">die as one post.</span>
        </SectionHead>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="border-t border-chocolate/30">
              {oneStory.map((s, i) => (
                <Reveal key={s} delay={Math.min(i * 0.04, 0.3)} y={10}>
                  <p className="font-display uppercase text-xl md:text-2xl text-chocolate py-3 border-b border-chocolate/30 hover:text-tangelo transition-colors">
                    <span className="font-mono text-xs text-tangelo mr-4">{String(i + 1).padStart(2, "0")}</span>
                    {s}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-serifit italic text-xl md:text-2xl leading-snug text-chocolate border-l-4 border-tangelo pl-5 mb-8">
                One story → multiple audiences → multiple formats. Adapted, never reposted.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-chocolate/60 mb-4">Where it can live</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "LinkedIn",
                  "Substack",
                  "Medium",
                  "Short-form video",
                  "Founder channels",
                  "Employee channels",
                  "Website",
                  "Events",
                  "Community",
                  "Sales enablement",
                  "Employer brand",
                  "Customer advocacy",
                ].map((c) => (
                  <span key={c} className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] uppercase border border-chocolate/50 px-3 py-2 text-chocolate hover:bg-chocolate hover:text-linen transition-colors cursor-default">
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
