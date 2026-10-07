import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { Reveal, SectionHead } from "../components/Shared";

const views = [
  { id: "content", label: "Content", agent: "Live workflow" },
  { id: "today", label: "Today", agent: "Ana" },
  { id: "product", label: "Product", agent: "Edith" },
  { id: "opportunities", label: "Opportunities", agent: "Catherine" },
  { id: "campaigns", label: "Campaigns", agent: "Diana" },
  { id: "experiments", label: "Experiments", agent: "Black Box" },
];

const roster = [
  ["Ana", "Main operating layer. Pulls things together, identifies what needs attention, helps synthesise the other inputs."],
  ["Agatha", "Performance intelligence. Looks at what happened before and whether there is evidence behind an idea."],
  ["Berdine", "Content and editorial. Structure, writing, openings, clarity, whether something is actually interesting."],
  ["Catherine", "Market and opportunity radar. Looks outward for conversations, events, people and things worth paying attention to."],
  ["Diana", "Creative strategy and stress test. Her job is basically to try to kill an idea before I become emotionally attached to it."],
  ["Edith", "Product and customer storytelling. Helps me pull useful stories from product work and customer information."],
];

const workflow = [
  { t: "10:17", from: "Edith", tone: "agent", text: "Freudenberg might have a story here. The interesting bit may not actually be documentation." },
  { t: "10:23", from: "Berdine", tone: "default", text: "The problem is stronger than the feature. Start there." },
  { t: "10:26", from: "Diana", tone: "default", text: "Would anybody care about this if Conduct's name disappeared from the post?" },
  { t: "10:28", from: "Anushka", tone: "operator", text: "Fair." },
  { t: "10:31", from: "Agatha", tone: "default", text: "Similar customer and product stories are stronger when the problem is obvious before the product appears." },
  { t: "10:38", from: "Ana", tone: "agent", text: "Before drafting: 1. Talk to Product. 2. Understand the customer problem. 3. Check what Engineering thinks is technically interesting. 4. Test the editorial angle." },
  { t: "10:41", from: "Anushka", tone: "operator", text: "Good. No post yet. I want the questions first." },
];

const anaItems = [
  { t: "Substack draft needs final edit", why: "Agatha: similar posts held attention longer with a tighter first line. Berdine has a shorter hook ready." },
  { t: "Potential event opportunity", why: "Catherine: relevant audience gathering, deadline this month." },
  { t: "Customer story needs product input", why: "Edith: the story is strong, but two proof points need product sign-off." },
];

const edithDone = [
  "What changed?",
  "What was difficult before?",
  "Who experienced it?",
  "What does the customer care about?",
  "What is technically interesting?",
  "What evidence exists?",
  "What can we say publicly?",
];

const edithTodo = ["Customer approval", "Product review", "Engineer review", "Final copy"];

const Card = ({ from, tone = "default", children }) => {
  const tones = {
    default: "border-linen/30 text-linen",
    operator: "bg-tangelo border-tangelo text-linen",
    agent: "border-botticelli/50 text-linen",
  };
  const labelTones = { default: "text-botticelli", operator: "text-linen/80", agent: "text-botticelli" };
  return (
    <div className={`border p-5 md:p-6 ${tones[tone]}`}>
      <p className={`font-mono text-[10px] tracking-[0.2em] uppercase mb-3 ${labelTones[tone]}`}>{from}</p>
      <div className="font-mono text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
};

export default function AgentDesk() {
  const [view, setView] = useState("content");
  const [showWhy, setShowWhy] = useState(false);
  const [catherineDecision, setCatherineDecision] = useState(null);
  const [wf, setWf] = useState({ step: 0, running: false, done: false });

  const runWorkflow = () => {
    setWf({ step: 0, running: true, done: false });
    workflow.forEach((_, i) => {
      setTimeout(() => setWf((s) => ({ ...s, step: i + 1 })), 1300 * (i + 1));
    });
    setTimeout(() => setWf({ step: workflow.length, running: false, done: true }), 1300 * workflow.length + 800);
  };

  return (
    <section id="agents" data-testid="agents-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-32">
      <SectionHead no="07" kicker="The live desk" dark>
        The live desk<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="max-w-2xl space-y-5 mb-12">
        <Reveal>
          <p className="font-mono text-sm md:text-base leading-relaxed text-linen/90">
            So I built myself a little operating system. Not because I particularly needed six AI colleagues. There are
            just quite a few things I want to keep an eye on at once.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="font-mono text-sm md:text-base leading-relaxed text-linen/90">
            I built these for the way I work. If I were doing this job at Conduct, this is how I'd use them.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-serifit italic text-xl md:text-2xl text-linen">
            They surface things. They challenge things. They help me connect the dots. I decide what actually ships.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="font-mono text-[11px] text-linen/50 italic">
            A simulation of how the desk runs, not a record of real conversations.
          </p>
        </Reveal>
      </div>

      <div data-testid="agent-desk" className="border-2 border-linen/40 bg-ink/40">
        <div className="grid lg:grid-cols-[240px_1fr]">
          <aside className="border-b lg:border-b-0 lg:border-r border-linen/25 p-5 md:p-6">
            <p className="font-display uppercase text-xl md:text-2xl text-linen leading-none mb-1">Anushka's desk</p>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-linen/50 mb-6">Tuesday · 10:17</p>

            <nav className="flex lg:flex-col flex-wrap gap-1.5 mb-8" aria-label="Desk views">
              {views.map((v) => (
                <button
                  key={v.id}
                  data-testid={`desk-view-${v.id}`}
                  onClick={() => setView(v.id)}
                  className={`text-left px-3 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors ${
                    view === v.id ? "bg-tangelo text-linen" : "text-linen/70 hover:bg-linen/10 hover:text-linen"
                  }`}
                >
                  {v.label}
                  <span className={`block text-[9px] tracking-[0.12em] ${view === v.id ? "text-linen/75" : "text-linen/40"}`}>
                    {v.agent}
                  </span>
                </button>
              ))}
            </nav>

            <div className="border-t border-linen/25 pt-4 hidden lg:block">
              {roster.map(([name, role]) => (
                <p key={name} className="font-mono text-[10px] tracking-[0.06em] text-linen/60 py-1.5">
                  <span className="text-botticelli uppercase tracking-[0.12em]">{name}</span>
                  <span className="block normal-case text-linen/45 mt-0.5 leading-snug">{role}</span>
                </p>
              ))}
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-tangelo pt-3 border-t border-linen/25 mt-3">
                The operator · Anushka
              </p>
            </div>
          </aside>

          <div className="p-5 md:p-8 min-h-[440px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                data-testid="desk-panel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {view === "content" && (
                  <div className="space-y-4 max-w-2xl" data-testid="workflow-view">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-linen/40">
                        One possible story, from signal to decision
                      </p>
                      <button
                        data-testid="workflow-run-button"
                        onClick={runWorkflow}
                        disabled={wf.running}
                        className="shrink-0 font-mono text-[11px] tracking-[0.18em] uppercase border border-tangelo text-tangelo px-4 py-2.5 hover:bg-tangelo hover:text-linen transition-colors disabled:opacity-40"
                      >
                        {wf.step === 0 ? "Run it" : wf.running ? "Running…" : "Run it again"}
                      </button>
                    </div>

                    {wf.step === 0 && !wf.running && (
                      <p className="font-mono text-xs text-linen/50 italic border border-dashed border-linen/30 p-5">
                        The desk is quiet. Press run to watch one story move through the system.
                      </p>
                    )}

                    <AnimatePresence>
                      {workflow.slice(0, wf.step).map((w, i) => (
                        <motion.div
                          key={w.t}
                          initial={{ opacity: 0, y: 18, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <Card from={`${w.from} · ${w.t}`} tone={w.tone}>
                            <p>"{w.text}"</p>
                            {i === workflow.length - 1 && (
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="inline-block font-mono text-[11px] tracking-[0.18em] uppercase bg-botticelli text-ink px-3 py-1.5"
                                data-testid="workflow-status"
                              >
                                Status: researching
                              </motion.span>
                            )}
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {wf.running && wf.step < workflow.length && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.1 }}
                        className="font-mono text-xs text-botticelli pl-1"
                        data-testid="workflow-typing"
                      >
                        {workflow[wf.step].from} is writing…
                      </motion.p>
                    )}

                    {wf.done && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-mono text-xs text-linen/60 pt-2"
                        data-testid="workflow-bridge"
                      >
                        What happens next is on the board below.
                      </motion.p>
                    )}
                  </div>
                )}

                {view === "today" && (
                  <div className="space-y-5 max-w-2xl">
                    <Card from="Ana · main operating layer" tone="agent">
                      <p className="text-botticelli uppercase tracking-[0.14em] text-xs">Today: 3 things worth your attention</p>
                    </Card>
                    {anaItems.map((item, i) => (
                      <div key={item.t} className="border border-linen/25 p-4" data-testid={`ana-item-${i}`}>
                        <p className="font-mono text-sm text-linen">
                          <span className="text-tangelo mr-3">0{i + 1}</span>
                          {item.t}
                        </p>
                        {showWhy && <p className="font-mono text-xs text-linen/60 mt-2 pl-8">{item.why}</p>}
                      </div>
                    ))}
                    <button
                      data-testid="ana-show-why-button"
                      onClick={() => setShowWhy(!showWhy)}
                      className="font-mono text-[11px] tracking-[0.18em] uppercase border border-tangelo text-tangelo px-5 py-3 hover:bg-tangelo hover:text-linen transition-colors"
                    >
                      {showWhy ? "Hide the reasoning" : "Show me why"}
                    </button>
                  </div>
                )}

                {view === "product" && (
                  <div className="max-w-2xl space-y-4">
                    <div className="border border-linen/25 p-5" data-testid="edith-checklist">
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-linen/50 mb-4">
                        Edith · process documentation × customer
                      </p>
                      <div className="grid sm:grid-cols-2 gap-x-6">
                        {[...edithDone.map((t) => ({ t, done: true })), ...edithTodo.map((t) => ({ t, done: false }))].map((item) => (
                          <p key={item.t} className={`flex items-start gap-2.5 py-1.5 font-mono text-xs ${item.done ? "text-linen/85" : "text-linen/45"}`}>
                            {item.done ? <Check className="w-3.5 h-3.5 text-tangelo mt-0.5 shrink-0" /> : <Minus className="w-3.5 h-3.5 mt-0.5 shrink-0" />}
                            {item.t}
                          </p>
                        ))}
                      </div>
                    </div>
                    <Card from="Anushka · the operator" tone="operator">
                      <p>"Good. Let's get the missing inputs."</p>
                    </Card>
                  </div>
                )}

                {view === "opportunities" && (
                  <div className="max-w-2xl space-y-5">
                    <Card from="Catherine · market and opportunity radar" tone="agent">
                      <p>
                        "An enterprise-tech community is gathering next month. Audience overlap looks high. I can pull
                        speakers, deadlines and contacts if this is worth your time."
                      </p>
                      <div className="flex gap-2 mt-2">
                        {["Investigate", "Park it"].map((opt) => (
                          <button
                            key={opt}
                            data-testid={`catherine-decision-${opt.toLowerCase().replace(/\s/g, "-")}`}
                            onClick={() => setCatherineDecision(opt)}
                            className={`px-4 py-2 text-[11px] tracking-[0.16em] uppercase border transition-colors ${
                              catherineDecision === opt ? "bg-tangelo border-tangelo text-linen" : "border-linen/40 text-linen/80 hover:border-linen"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {catherineDecision && (
                        <p className="text-[11px] text-botticelli">
                          {catherineDecision === "Investigate" ? "On it. Full brief by tomorrow morning." : "Logged. I'll flag it if anything changes."}
                        </p>
                      )}
                    </Card>
                  </div>
                )}

                {view === "campaigns" && (
                  <div className="max-w-2xl space-y-4">
                    <Card from="The idea on the table">
                      <p className="font-display uppercase text-xl md:text-2xl text-linen">SAP Score · a photo booth at London Tech Week</p>
                    </Card>
                    <Card from="Diana · creative strategy and stress test" tone="agent">
                      <p>"Could be good. Could also be trying too hard. I'd kill it if the audience doesn't get the joke in three seconds."</p>
                    </Card>
                    <Card from="Anushka · the operator" tone="operator">
                      <p>"Then we test the comprehension first."</p>
                    </Card>
                  </div>
                )}

                {view === "experiments" && (
                  <div className="max-w-2xl space-y-4">
                    <Card from="Black Box" tone="agent">
                      <p className="text-linen/85">
                        "Script ready. Three participants to recruit: an engineer, an enterprise professional, someone
                        completely outside the space. Ten minutes of Conduct material each."
                      </p>
                      <p className="inline-block font-mono text-[11px] tracking-[0.18em] uppercase bg-botticelli text-ink px-3 py-1.5">
                        Status: ready to run
                      </p>
                    </Card>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Reveal className="mt-14">
        <div data-testid="operating-layer-exhibit" className="border-2 border-linen/50 bg-linen p-3 md:p-4 spotlight max-w-4xl">
          <img
            src="https://customer-assets-lxgj4vgw.emergentagent.net/job_notice-ship-learn/artifacts/3fd09ffa6b4d4375_13030139-DE02-4674-A73C-A003CE806EE2.png"
            alt="The operating layer diagram from the Conduct Growth OS, showing Ana delegating to the five agents with insight flowing back"
            className="w-full h-auto block"
          />
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-chocolate/60 pt-3 px-1">
            The actual architecture, from the OS. Shown after the desk, on purpose.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
