import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHead } from "../components/Shared";

const day = [
  ["09:00", "Scan what happened overnight."],
  ["09:15", "Product team posts something interesting."],
  ["09:20", "EDITH flags a potential product/customer story."],
  ["09:40", "Ask product: what actually changed?"],
  ["10:15", "Talk to the engineer: what's the interesting bit?"],
  ["11:00", "Customer / sales context."],
  ["12:00", "Write the story brief."],
  ["13:00", "Industry scan, conversations, research."],
  ["14:00", "Write / shoot / build."],
  ["15:30", "DIANA stress-tests the idea: would anyone actually care?"],
  ["16:00", "Adapt for different audiences."],
  ["17:00", "Publish / distribute."],
  ["17:30", "AGATHA looks at performance."],
  ["18:00", "Capture the learning."],
];

const agents = [
  {
    name: "Ana",
    role: "Operating + synthesis · Main growth agent",
    input: "Everything.",
    does: "Filters, synthesises and prioritises. Delegates when she needs more clarity or deeper investigation.",
    output: "The brief: what matters, what's working, what's not, what to do next.",
    me: "I decide.",
  },
  {
    name: "Agatha",
    role: "Performance intelligence + forecasting",
    input: "Performance data.",
    does: "Finds the signal, forecasts hooks and formats, flags what to kill.",
    output: "Signal.",
    me: "Decision.",
  },
  {
    name: "Berdine",
    role: "Content + editorial intelligence",
    input: "Story / content.",
    does: "Maps voice, themes and gaps. Finds the editorial angle.",
    output: "Editorial angles.",
    me: "I select.",
  },
  {
    name: "Catherine",
    role: "Market + opportunity radar",
    input: "The external environment — LinkedIn, Reddit, X, events, conferences.",
    does: "Scouts where Conduct should show up, who's there, who to contact, deadlines. Triggers Ana.",
    output: "Opportunities.",
    me: "I prioritise. Not everything gets escalated.",
  },
  {
    name: "Diana",
    role: "Creative strategy + stress test",
    input: "The idea.",
    does: "Tries to break it — audience, format, cost, permissions, footfall, is it funny enough to travel.",
    output: "A verdict.",
    me: "Kill / change / ship.",
  },
  {
    name: "Edith",
    role: "Product + customer storytelling",
    input: "Product / customer development.",
    does: "Finds the human story inside the launch — hero stories, micro-assets, video formats.",
    output: "Questions, angles, narrative.",
    me: "I decide whether it's worth pursuing.",
  },
];

export default function DayAgents() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section id="day" data-testid="day-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="09" kicker="What this looks like in practice">
          A day in my life<span className="text-tangelo">.</span>
        </SectionHead>
        <Reveal>
          <p className="font-mono text-xs text-chocolate/60 mb-12">
            Illustrative — not a claim about exact Conduct working hours.
          </p>
        </Reveal>

        <div className="border-t border-chocolate/30 max-w-4xl">
          {day.map(([t, d], i) => (
            <Reveal key={t} delay={Math.min(i * 0.03, 0.3)} y={12}>
              <div
                data-testid={`day-slot-${t.replace(":", "")}`}
                className="group grid grid-cols-[70px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-8 py-3.5 border-b border-chocolate/30 items-baseline hover:bg-botticelli/25 transition-colors px-2 -mx-2"
              >
                <span className="font-mono text-xs md:text-sm text-tangelo">{t}</span>
                <span className="font-mono text-sm md:text-base text-chocolate/90">{d}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl text-chocolate mt-10">
            Tomorrow starts with <span className="text-tangelo">what happened next.</span>
          </p>
        </Reveal>
      </section>

      <section id="agents" data-testid="agents-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="10" kicker="The agents I actually built" dark>
          I'm the operator. <span className="text-botticelli">They're the intelligence layer.</span>
        </SectionHead>

        <Reveal>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] md:text-xs tracking-[0.14em] uppercase text-linen/70 mb-14">
            <span className="text-tangelo">Anushka</span><span>↓</span>
            <span>Ana</span><span>↓</span>
            <span>Agatha / Berdine / Catherine / Diana / Edith</span><span>↓</span>
            <span>Ana synthesis</span><span>↓</span>
            <span className="text-tangelo">Anushka decides</span><span>↓</span>
            <span className="text-botticelli">Execution</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 grid grid-cols-2 gap-3">
            {agents.map((a, i) => (
              <button
                key={a.name}
                data-testid={`agent-button-${a.name.toLowerCase()}`}
                onClick={() => setActive(i)}
                className={`p-5 text-left border transition-colors duration-200 ${
                  active === i
                    ? "bg-tangelo border-tangelo text-linen"
                    : "border-linen/30 text-linen hover:border-botticelli hover:text-botticelli"
                }`}
              >
                <p className="font-display uppercase text-2xl md:text-3xl leading-none mb-2">{a.name}</p>
                <p className={`font-mono text-[10px] tracking-[0.14em] uppercase ${active === i ? "text-linen/80" : "text-linen/50"}`}>
                  {a.role}
                </p>
              </button>
            ))}
          </div>

          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                data-testid="agent-detail-panel"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="border-2 border-linen/40 p-6 md:p-10 h-full"
              >
                <p className="font-display uppercase text-4xl md:text-5xl text-botticelli mb-1">{agents[active].name}</p>
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-linen/60 mb-8">{agents[active].role}</p>
                <div className="space-y-5 font-mono text-sm leading-relaxed">
                  <p><span className="text-tangelo uppercase tracking-[0.14em] text-xs block mb-1">What goes in</span><span className="text-linen/85">{agents[active].input}</span></p>
                  <p><span className="text-tangelo uppercase tracking-[0.14em] text-xs block mb-1">What it does</span><span className="text-linen/85">{agents[active].does}</span></p>
                  <p><span className="text-tangelo uppercase tracking-[0.14em] text-xs block mb-1">What comes out</span><span className="text-linen/85">{agents[active].output}</span></p>
                  <p className="border-t border-linen/25 pt-5"><span className="text-botticelli uppercase tracking-[0.14em] text-xs block mb-1">What Anushka does with it</span><span className="text-linen">{agents[active].me}</span></p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal className="mt-16">
          <p className="font-serifit italic text-xl md:text-2xl text-linen max-w-2xl border-l-4 border-tangelo pl-5">
            I don't want AI replacing judgement. I want it increasing the amount of signal I can process.
          </p>
        </Reveal>
      </section>
    </>
  );
}
