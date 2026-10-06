import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { Reveal, SectionHead } from "../components/Shared";

const views = [
  { id: "today", label: "Today", agent: "Ana" },
  { id: "content", label: "Content", agent: "Berdine + Agatha" },
  { id: "product", label: "Product", agent: "Edith" },
  { id: "opportunities", label: "Opportunities", agent: "Catherine" },
  { id: "challenge", label: "Challenge", agent: "Diana" },
];

const roster = [
  ["Ana", "Main Growth Agent / EA"],
  ["Agatha", "Performance Intelligence & Forecasting"],
  ["Berdine", "Content & Tech Intelligence / Editorial"],
  ["Catherine", "Market & Representation Intelligence"],
  ["Diana", "Creative Strategy & Activation"],
  ["Edith", "Product, Customer & Storytelling Intelligence"],
];

const anaItems = [
  { t: "Substack draft needs final edit", why: "Agatha: similar posts held attention longer with a tighter first line. Berdine has a shorter hook ready." },
  { t: "Potential event opportunity", why: "Catherine: relevant audience gathering, deadline this month, speaker list has real overlap with Conduct's buyers." },
  { t: "Customer story needs product input", why: "Edith: the story is strong, but two proof points need product sign-off before anything ships." },
];

const edithDone = [
  "What actually changed?",
  "What problem existed before?",
  "Who experienced it?",
  "What does the customer actually care about?",
  "What is technically interesting?",
  "What evidence do we have?",
  "What metrics / proof points exist?",
  "Who owns each input?",
  "What can we actually say publicly?",
];

const edithTodo = ["Customer approval", "Final quote", "Product screenshots", "Engineer review", "Final CTA"];

const dianaQs = [
  "Is this actually memorable?",
  "Does the audience understand the joke?",
  "Could this make Conduct look gimmicky?",
  "Can we execute it properly?",
  "What would make us kill it?",
];

const flow = [
  ["New Conduct product update", "the raw material"],
  ["Edith", "What actually changed?"],
  ["Berdine", "What's the interesting story?"],
  ["Agatha", "What has historically worked?"],
  ["Catherine", "Where are people already talking about this?"],
  ["Diana", "Is this actually interesting enough?"],
  ["Ana", "What matters? What should we do next?"],
  ["Anushka", "DECISION"],
  ["Ship", ""],
];

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
      <div className="font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export default function AgentDesk() {
  const [view, setView] = useState("today");
  const [posted, setPosted] = useState(null);
  const [showWhy, setShowWhy] = useState(false);
  const [catherineDecision, setCatherineDecision] = useState(null);

  return (
    <section id="agents" data-testid="agents-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="09" kicker="The agents I actually built" dark>
        I'm the operator. <span className="text-botticelli">They're the intelligence layer.</span>
      </SectionHead>

      <Reveal>
        <p className="font-serifit italic text-xl md:text-2xl text-linen max-w-2xl mb-4">
          I built the system. The agents give me more eyes. I make the call.
        </p>
        <p className="font-mono text-[11px] text-linen/50 italic mb-14 max-w-2xl">
          What follows is a demonstration of how the desk runs — not historical results.
        </p>
      </Reveal>

      <Reveal className="mb-14">
        <div data-testid="operating-layer-exhibit" className="border-2 border-linen/50 bg-linen p-3 md:p-4 spotlight">
          <img
            src="https://customer-assets-lxgj4vgw.emergentagent.net/job_notice-ship-learn/artifacts/3fd09ffa6b4d4375_13030139-DE02-4674-A73C-A003CE806EE2.png"
            alt="The operating layer diagram from the Conduct Growth OS — Ana delegating to Agatha, Berdine, Catherine, Diana and Edith, with insight flowing back through synthesis"
            className="w-full h-auto block"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-3 pt-3 px-1">
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-chocolate/60">
              Fig. 09 — the actual operating layer, straight from the OS. Not a redraw.
            </p>
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-chocolate/60">
              Delegation ↓ · Insight ↑ · Collaboration ↔ · I make the final call
            </p>
          </div>
        </div>
      </Reveal>

      <div data-testid="agent-desk" className="border-2 border-linen/40 bg-ink/40">
        <div className="grid lg:grid-cols-[260px_1fr]">
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
                <p key={name} className="font-mono text-[10px] tracking-[0.12em] uppercase text-linen/60 py-1">
                  <span className="text-botticelli">{name}</span> — {role}
                </p>
              ))}
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-tangelo pt-3 border-t border-linen/25 mt-3">
                The operator — Anushka
              </p>
            </div>
          </aside>

          <div className="p-5 md:p-8 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                data-testid="desk-panel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {view === "today" && (
                  <div className="space-y-5 max-w-2xl">
                    <Card from="Ana — main growth layer" tone="agent">
                      <p className="mb-3 text-linen/85">
                        Filters everything. Tells me what matters, what's working, what's not, what others are finding
                        and what to do next. Delegates when she needs more clarity or deeper investigation.
                      </p>
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

                {view === "content" && (
                  <div className="space-y-4 max-w-2xl">
                    <Card from="Ana → Anushka" tone="agent">
                      <p>"Did you post the Substack piece yet?"</p>
                      <div className="flex gap-2 mt-3">
                        {["Yes", "Not yet"].map((opt) => (
                          <button
                            key={opt}
                            data-testid={`desk-reply-${opt.toLowerCase().replace(/\s/g, "-")}`}
                            onClick={() => setPosted(opt)}
                            className={`px-4 py-2 text-[11px] tracking-[0.16em] uppercase border transition-colors ${
                              posted === opt ? "bg-tangelo border-tangelo text-linen" : "border-linen/40 text-linen/80 hover:border-linen"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {posted && <p className="text-[11px] text-botticelli mt-3">Noted. {posted === "Yes" ? "Agatha will watch the first hour." : "Berdine's edit is below whenever you're ready."}</p>}
                    </Card>
                    <Card from="Berdine">
                      "I think the opening is doing too much. The idea is strong. I'd test the shorter hook first."
                    </Card>
                    <Card from="Agatha">
                      "Similar posts have performed better when the first line creates a clear tension. Worth testing."
                    </Card>
                    <Card from="Anushka — the operator" tone="operator">
                      <p>"Let's test the shorter version."</p>
                      <p className="text-[11px] tracking-[0.18em] uppercase mt-3 text-linen/85">Status: ready to ship</p>
                    </Card>
                  </div>
                )}

                {view === "product" && (
                  <div className="max-w-2xl space-y-5">
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-botticelli">
                      New product story — process documentation × customer
                    </p>
                    <div className="border border-linen/25 p-5" data-testid="edith-checklist">
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-linen/50 mb-4">Edith checklist</p>
                      <div className="grid sm:grid-cols-2 gap-x-6">
                        {[...edithDone.map((t) => ({ t, done: true })), ...edithTodo.map((t) => ({ t, done: false }))].map((item) => (
                          <p key={item.t} className={`flex items-start gap-2.5 py-1.5 font-mono text-xs ${item.done ? "text-linen/85" : "text-linen/45"}`}>
                            {item.done ? <Check className="w-3.5 h-3.5 text-tangelo mt-0.5 shrink-0" /> : <Minus className="w-3.5 h-3.5 mt-0.5 shrink-0" />}
                            {item.t}
                          </p>
                        ))}
                      </div>
                    </div>
                    <Card from="Edith → Berdine" tone="agent">
                      "There is a customer story here. I'd lead with the problem rather than the feature."
                    </Card>
                    <Card from="Berdine → Anushka">"Agree. I'd make the customer problem the opening."</Card>
                    <Card from="Anushka — the operator" tone="operator">
                      <p className="tracking-[0.14em] uppercase text-xs">Decision: build story</p>
                    </Card>
                  </div>
                )}

                {view === "opportunities" && (
                  <div className="max-w-2xl space-y-5">
                    <Card from="Catherine — market + opportunity radar" tone="agent">
                      <p className="mb-3 text-linen/85">
                        Scouts events, communities, companies, people and moments across the UK & Europe where Conduct
                        should be represented. Looks at who will be there, tech concentration, relevance, contacts,
                        permissions and practical requirements.
                      </p>
                    </Card>
                    <Card from="Catherine → Anushka">
                      <p className="mb-2">
                        "Signal: an enterprise-tech community is gathering next month. Audience overlap looks high. I
                        can pull speakers, deadlines and contacts if this is worth your time."
                      </p>
                      <div className="flex gap-2 mt-4">
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
                        <p className="text-[11px] text-botticelli mt-3">
                          {catherineDecision === "Investigate" ? "On it — full brief by tomorrow morning." : "Logged. I'll flag it if anything changes."}
                        </p>
                      )}
                    </Card>
                  </div>
                )}

                {view === "challenge" && (
                  <div className="max-w-2xl space-y-5">
                    <Card from="The idea" tone="default">
                      <p className="font-display uppercase text-xl md:text-2xl text-linen">SAP Score — a photo booth at London Tech Week</p>
                      <p className="text-linen/70 mt-2 text-xs">
                        A Polaroid plus a completely ridiculous "SAP Score" for your enterprise landscape.
                      </p>
                    </Card>
                    <div className="border border-linen/25 p-5">
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-4">
                        Diana — creative strategy + stress test. Her job is to try to kill it.
                      </p>
                      {dianaQs.map((q) => (
                        <p key={q} className="font-mono text-sm text-linen/85 py-2 border-b border-linen/15 last:border-b-0">
                          <span className="text-tangelo mr-2">→</span>"{q}"
                        </p>
                      ))}
                    </div>
                    <Card from="Diana — verdict" tone="agent">
                      <p className="font-display uppercase text-xl text-botticelli">Keep testing.</p>
                      <p className="text-linen/80 mt-2 text-xs">Authentic to the problem, differentiates the brand, memorable recall. Should move ahead — with tighter execution answers.</p>
                    </Card>
                    <p className="font-serifit italic text-lg md:text-xl text-linen/85 border-l-4 border-tangelo pl-5">
                      I don't want agents that simply agree with me. I want systems that challenge me.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-8">
            How information moves through the system
          </p>
        </Reveal>
        <div className="max-w-3xl">
          {flow.map(([who, what], i) => (
            <Reveal key={who + i} delay={Math.min(i * 0.04, 0.3)} y={10}>
              <div className="flex items-baseline gap-4 md:gap-6 py-3 border-b border-linen/20" data-testid={`flow-step-${i}`}>
                <span className="font-mono text-[10px] text-linen/40 w-6">{String(i).padStart(2, "0")}</span>
                <span
                  className={`font-display uppercase text-lg md:text-2xl ${
                    who === "Anushka" ? "text-tangelo" : who === "Ship" ? "text-botticelli" : i === 0 ? "text-linen/60" : "text-linen"
                  }`}
                >
                  {who}
                </span>
                {what && <span className="font-mono text-xs md:text-sm text-linen/70 ml-auto text-right">{what}</span>}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="font-serifit italic text-xl md:text-2xl text-linen max-w-2xl border-l-4 border-tangelo pl-5">
            I don't want AI replacing judgement. I want it increasing the amount of signal I can process.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
