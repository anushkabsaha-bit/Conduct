import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, SectionHead } from "../components/Shared";

const loop = [
  {
    k: "Scout",
    d: "Slack, product, engineering, customers, sales, partnerships, founders, industry news, LinkedIn, X, competitors, conferences, research, internal conversations.",
    q: "Is there something here worth making bigger?",
  },
  {
    k: "Find",
    d: "What changed? Why now? Who cares? Who doesn't understand it? What's technically interesting? What's commercially interesting? What's human? What's surprising?",
    q: "Where is the actual story?",
  },
  { k: "Frame", d: "Find the angle that makes someone stop scrolling.", q: "Why would anyone care?" },
  { k: "Make", d: "Choose the right format. Post, film, essay, white paper, event — the story decides, not the calendar.", q: "What shape should this take?" },
  { k: "Distribute", d: "Put it where the relevant audience already is. Don't make them come to you.", q: "Where do these people actually live?" },
  { k: "Measure", d: "Did people understand? Remember? Share? Ask? Return? Act?", q: "What actually happened?" },
  { k: "Learn", d: "Feed the result into the next decision. Kill what isn't working without ceremony.", q: "What does this change?" },
  { k: "Repeat", d: "Tomorrow starts with what happened next.", q: "What's the next story?" },
];

const signals = [
  { s: "SAP announcement", n: "The conversation is already happening.", d: "Find Conduct's useful perspective and add it while anyone still cares." },
  { s: "Customer win", n: "There's a deeper story beneath the announcement.", d: "Interview the customer and the product team. Find the human bit." },
  { s: "Engineer ships something interesting", n: "Outsiders may not understand why it matters.", d: "Sit with the engineer and translate it until my past self would get it." },
  { s: "Founder says something interesting", n: "Potential POV.", d: "Test it small first — post, essay, talk or video." },
  { s: "Conference announced", n: "A relevant audience is gathering.", d: "Pitch a talk, a panel, or a small activation." },
  { s: "Competitor launches", n: "The conversation already exists.", d: "Decide honestly whether Conduct has something genuinely useful to add. If not, skip it." },
  { s: "Customer pain repeats", n: "An emerging pattern.", d: "Investigate. Patterns are stories wearing a disguise." },
  { s: "New partner", n: "New audience plus borrowed credibility.", d: "Find the joint story both sides actually want to tell." },
  { s: "Internal conversation explodes", n: "Something is resonating.", d: "Investigate why. The best external stories start as internal ones." },
];

export default function RunComms() {
  const [stage, setStage] = useState(0);
  const [openSignal, setOpenSignal] = useState(1);

  return (
    <section id="comms-loop" data-testid="comms-loop-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="05" kicker="How I'd actually run comms">
        I wouldn't wait <span className="text-tangelo">for a comms brief.</span>
      </SectionHead>

      <Reveal>
        <p className="font-mono text-sm md:text-base text-chocolate/90 max-w-2xl mb-12">
          I'd build a system for finding the stories myself. Pick a stage.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-8 mb-24 md:mb-36">
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-chocolate/30">
          {loop.map((l, i) => (
            <button
              key={l.k}
              data-testid={`loop-stage-${l.k.toLowerCase()}`}
              onClick={() => setStage(i)}
              className={`border-r border-b border-chocolate/30 p-4 md:p-5 text-left transition-colors duration-200 ${
                stage === i ? "bg-tangelo text-linen" : "hover:bg-chocolate hover:text-linen"
              }`}
            >
              <span className={`block font-mono text-[10px] tracking-[0.18em] mb-2 ${stage === i ? "text-linen/80" : "text-tangelo"}`}>
                0{i + 1}
              </span>
              <span className="font-display uppercase text-lg md:text-2xl leading-none">{l.k}</span>
            </button>
          ))}
        </div>
        <div className="md:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              data-testid="loop-detail-panel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-chocolate p-6 md:p-8 h-full bg-linen"
            >
              <p className="font-display uppercase text-3xl md:text-4xl text-tangelo mb-4">{loop[stage].k}</p>
              <p className="font-mono text-sm leading-relaxed text-chocolate/90 mb-6">{loop[stage].d}</p>
              <p className="font-serifit italic text-xl text-chocolate border-t border-chocolate/30 pt-4">
                {loop[stage].q}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div id="radar" data-testid="radar-section">
        <SectionHead no="06" kicker="Opportunity radar">
          I want to notice the opportunity <span className="text-tangelo">before someone has to give me the brief.</span>
        </SectionHead>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 border-t border-chocolate/30">
            {signals.map((sig, i) => (
              <button
                key={sig.s}
                data-testid={`radar-signal-${i}`}
                onClick={() => setOpenSignal(i)}
                className={`w-full flex items-center justify-between gap-4 py-4 px-2 border-b border-chocolate/30 text-left transition-colors duration-200 ${
                  openSignal === i ? "bg-chocolate text-linen" : "hover:bg-botticelli/30"
                }`}
              >
                <span className="font-mono text-xs md:text-sm tracking-[0.08em] uppercase">{sig.s}</span>
                <Plus
                  className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openSignal === i ? "rotate-45 text-tangelo" : "text-chocolate/50"}`}
                />
              </button>
            ))}
          </div>

          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={openSignal}
                data-testid="radar-detail-panel"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-3 border-2 border-chocolate h-full"
              >
                <div className="p-6 border-b sm:border-b-0 sm:border-r border-chocolate/40 bg-chocolate text-linen">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-botticelli mb-3">Signal</p>
                  <p className="font-display uppercase text-xl md:text-2xl leading-tight">{signals[openSignal].s}</p>
                </div>
                <div className="p-6 border-b sm:border-b-0 sm:border-r border-chocolate/40">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-tangelo mb-3">What I notice</p>
                  <p className="font-mono text-sm leading-relaxed text-chocolate/90">{signals[openSignal].n}</p>
                </div>
                <div className="p-6 bg-botticelli/25">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-tangelo mb-3">What I do</p>
                  <p className="font-mono text-sm leading-relaxed text-chocolate/90">{signals[openSignal].d}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
