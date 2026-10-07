import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";
import { Reveal, SectionHead, Tag } from "../components/Shared";

const steps = [
  {
    id: "understand",
    no: "01",
    title: "Understand",
    sub: "Speak to Product / Engineering first.",
    qs: [
      "What actually changed?",
      "What was difficult before?",
      "What does the new capability make possible?",
      "What is technically interesting?",
      "What would an engineer be proud of?",
      "What could a customer misunderstand?",
      "What should we absolutely NOT claim?",
    ],
  },
  {
    id: "customer",
    no: "02",
    title: "Understand the customer",
    sub: "Then the people living with the problem.",
    qs: [
      "What does the customer experience today?",
      "Where does documentation become unreliable?",
      "What happens when reality and documentation diverge?",
      "What would make this genuinely useful?",
      "What evidence can we publicly share?",
    ],
  },
  {
    id: "story",
    no: "03",
    title: "Find the story",
    sub: "One question.",
    qs: ["What is the human problem hiding inside the technical problem?"],
  },
  {
    id: "make",
    no: "04",
    title: "Make the story",
    sub: "Then build the actual assets.",
    qs: ["Long-form product story", "LinkedIn cut", "60-second video", "Engineer deep dive", "CIO version", "Customer story"],
  },
];

const scenes = [
  { id: "doc", dur: 5000 },
  { id: "business", dur: 5000 },
  { id: "system", dur: 4500 },
  { id: "gap", dur: 5000 },
  { id: "problem", dur: 4000 },
  { id: "conduct", dur: 7000 },
  { id: "because", dur: 6000 },
  { id: "question", dur: 6500 },
  { id: "end", dur: 6000 },
];

const DocVideo = () => {
  const [state, setState] = useState("idle"); // idle | playing | done
  const [scene, setScene] = useState(0);

  const play = () => {
    setState("playing");
    setScene(0);
    let t = 0;
    scenes.forEach((s, i) => {
      t += s.dur;
      setTimeout(() => {
        if (i === scenes.length - 1) setState("done");
        else setScene(i + 1);
      }, t);
    });
  };

  const Scene = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
    >
      {children}
    </motion.div>
  );

  return (
    <div data-testid="doc-video" className="relative aspect-video bg-ink border-2 border-chocolate overflow-hidden spotlight">
      <AnimatePresence mode="wait">
        {state === "idle" && (
          <Scene key="idle">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-4">Concept / motion piece — 45s</p>
            <p className="font-display uppercase text-2xl sm:text-4xl md:text-5xl text-linen leading-[0.95] mb-8 max-w-2xl">
              What if your documentation could keep up?
            </p>
            <button
              data-testid="doc-video-play"
              onClick={play}
              className="group inline-flex items-center gap-3 bg-tangelo text-linen font-mono text-xs tracking-[0.18em] uppercase px-6 py-4 hover:bg-linen hover:text-chocolate transition-colors"
            >
              <Play className="w-4 h-4" /> Play
            </button>
            <p className="font-mono text-[10px] text-linen/40 mt-6">Typography + diagrams only. No fake product UI. No fake customer footage.</p>
          </Scene>
        )}

        {state !== "idle" && scene === 0 && (
          <Scene key="s0">
            <div className="border-2 border-linen/50 px-8 py-6 mb-6">
              <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-linen">Process documentation</p>
            </div>
            <p className="font-display uppercase text-3xl md:text-5xl text-tangelo -rotate-3">Updated: 2023</p>
          </Scene>
        )}

        {state !== "idle" && scene === 1 && (
          <Scene key="s1">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-botticelli mb-4">Business:</p>
            <div className="space-y-1">
              {["Updated 2024", "Updated 2025", "Updated 2026"].map((y, i) => (
                <motion.p
                  key={y}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.5 }}
                  className="font-display uppercase text-2xl md:text-4xl text-linen"
                >
                  {y}
                </motion.p>
              ))}
            </div>
          </Scene>
        )}

        {state !== "idle" && scene === 2 && (
          <Scene key="s2">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-botticelli mb-4">System:</p>
            <p className="font-display uppercase text-3xl md:text-5xl text-linen">Updated.</p>
          </Scene>
        )}

        {state !== "idle" && scene === 3 && (
          <Scene key="s3">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-botticelli mb-4">Documentation:</p>
            <p className="font-display text-7xl md:text-9xl text-tangelo leading-none">?</p>
          </Scene>
        )}

        {state !== "idle" && scene === 4 && (
          <Scene key="s4">
            <p className="font-serifit italic text-3xl md:text-5xl text-linen">That's the problem.</p>
          </Scene>
        )}

        {state !== "idle" && scene === 5 && (
          <Scene key="s5">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-5">Conduct × Freudenberg</p>
            <p className="font-mono text-sm md:text-lg leading-relaxed text-linen max-w-2xl">
              Conduct is working with Freudenberg teams on a capability designed around keeping process documentation{" "}
              <span className="text-botticelli">accurate, current and connected to reality.</span>
            </p>
          </Scene>
        )}

        {state !== "idle" && scene === 6 && (
          <Scene key="s6">
            <p className="font-serifit italic text-xl md:text-3xl text-linen max-w-2xl leading-snug">
              Because understanding how a business works shouldn't depend on a document that stopped being true.
            </p>
          </Scene>
        )}

        {state !== "idle" && scene === 7 && (
          <Scene key="s7">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-5">The bigger question</p>
            <p className="font-display uppercase text-xl md:text-3xl text-linen max-w-2xl leading-tight">
              How do you keep organisational knowledge connected to the systems that run the business?
            </p>
          </Scene>
        )}

        {state === "done" && (
          <Scene key="end">
            <p className="font-display uppercase text-2xl md:text-4xl text-linen mb-3">Conduct × Freudenberg</p>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-linen/50 mb-8">
              Concept — Anushka Saha · Not an official Conduct video
            </p>
            <button
              data-testid="doc-video-replay"
              onClick={play}
              className="inline-flex items-center gap-3 border border-linen/50 text-linen font-mono text-xs tracking-[0.18em] uppercase px-6 py-4 hover:bg-tangelo hover:border-tangelo transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Replay
            </button>
          </Scene>
        )}
      </AnimatePresence>

      {state !== "idle" && (
        <div className="absolute bottom-0 inset-x-0 h-1 bg-linen/15">
          <div
            className="h-full bg-tangelo transition-[width] duration-500"
            style={{ width: `${((scene + 1) / scenes.length) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

const lives = [
  "Product story",
  "LinkedIn",
  "60-second video",
  "Engineer deep dive",
  "CIO version",
  "Customer story",
  "Founder POV",
  "Sales enablement",
  "Event talk",
  "Recruiting / employer brand",
];

export default function Freudenberg() {
  const [step, setStep] = useState(0);

  return (
    <section id="freudenberg" data-testid="freudenberg-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="09" kicker="Conduct × Freudenberg — a real artefact" dark>
        The product story <span className="text-botticelli">I would build.</span>
      </SectionHead>

      <Reveal>
        <p className="font-mono text-[11px] text-linen/50 italic mb-12 max-w-2xl">
          If I were telling this story — built only from what Conduct has said publicly. No invented quotes, outcomes or
          screenshots.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
        <div className="md:col-span-7 space-y-6">
          <Reveal>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 max-w-2xl">
              What I see in the public story: Conduct is building a capability around a problem that sounds boring until
              you understand the consequence —{" "}
              <span className="text-tangelo">process documentation stops reflecting reality.</span>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 max-w-2xl">
              So my first question isn't "how do we announce this feature?" It's:{" "}
              <span className="text-botticelli font-bold">
                why should anyone care that documentation is connected to reality?
              </span>
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={0.12}>
            <p className="font-display uppercase text-4xl md:text-5xl text-linen leading-[0.95]">
              That's <span className="text-tangelo">the story.</span>
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mb-20 md:mb-28" data-testid="editorial-angle">
        <Reveal>
          <div className="border border-linen/30 p-6 md:p-8 h-full">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-4">Old assumption</p>
            <p className="font-serifit italic text-xl md:text-2xl text-linen/85">
              Documentation tells you how the business works.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border border-linen/30 p-6 md:p-8 h-full">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-4">Reality</p>
            <p className="font-mono text-sm leading-relaxed text-linen/85">
              The business changes. Systems change. Processes change. Documentation gets left behind.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="bg-tangelo p-6 md:p-8 h-full">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-linen/80 mb-4">Conduct's opportunity — my editorial framing</p>
            <p className="font-mono text-sm leading-relaxed text-linen">
              Connect what the organisation says it does with what its systems actually do.
            </p>
            <p className="font-mono text-[11px] text-linen/70 mt-5 italic">
              That's the part I'd want to explore with Product and Engineering before writing the final story.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-8">My process, in four moves</p>
      </Reveal>
      <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-2 content-start">
          {steps.map((s, i) => (
            <button
              key={s.id}
              data-testid={`freudenberg-step-${s.id}`}
              onClick={() => setStep(i)}
              className={`text-left p-5 border transition-colors duration-200 ${
                step === i ? "bg-tangelo border-tangelo text-linen" : "border-linen/30 text-linen/85 hover:border-botticelli"
              }`}
            >
              <span className={`block font-mono text-[10px] tracking-[0.2em] mb-1 ${step === i ? "text-linen/75" : "text-tangelo"}`}>
                {s.no}
              </span>
              <span className="font-display uppercase text-lg md:text-xl leading-tight">{s.title}</span>
            </button>
          ))}
        </div>
        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              data-testid="freudenberg-step-panel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-linen/40 p-6 md:p-8 h-full"
            >
              <p className="font-serifit italic text-lg md:text-xl text-botticelli mb-6">{steps[step].sub}</p>
              <div className="space-y-0 border-t border-linen/20">
                {steps[step].qs.map((q) => (
                  <p key={q} className="font-mono text-sm md:text-base text-linen/90 py-3 border-b border-linen/20 last:border-b-0">
                    <span className="text-tangelo mr-3">→</span>
                    {q}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mb-20 md:mb-28">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Tag>Artefact 01</Tag>
            <Tag tone="outline-linen">Long-form product story</Tag>
            <Tag tone="botticelli">Anushka's editorial draft — not Conduct copy</Tag>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <article data-testid="longform-draft" className="bg-linen text-chocolate p-6 md:p-12 spotlight max-w-4xl">
            <h3 className="font-display uppercase text-2xl sm:text-3xl lg:text-5xl leading-[0.95] mb-8">
              The documentation that doesn't know your business changed.
            </h3>
            <div className="space-y-5 font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
              <p>
                Somewhere in your company there is a document that explains how a process works. It was written
                carefully, by someone who meant it. It is also, quietly, wrong.
              </p>
              <p>
                Not because anyone did a bad job. Because the business kept moving. People changed the process. The
                system was reconfigured. An exception became the rule. The document stayed the same.
              </p>
              <p>
                That is the strange thing about process documentation: it can be perfectly written and completely out of
                date at the same time. And the gap between the two is where a lot of enterprise pain lives — audits that
                take weeks, transformations that stall, new joiners learning a company that no longer exists.
              </p>
              <p>
                The obvious question is whether AI can simply generate documentation. The more interesting question is
                whether understanding can stay connected to reality. How do you keep what an organisation believes about
                itself in sync with the systems that actually run it?
              </p>
              <p>
                That is the problem Conduct is exploring with Freudenberg. Publicly, Conduct has said it is working with
                teams across Freudenberg's business groups on a new capability aimed at a long-standing SAP problem:
                keeping process documentation accurate, current and connected to reality. The collaboration goes beyond
                Process Discovery — exploring how AI can support teams across the enterprise IT lifecycle, bridging
                technical systems, business processes and organisational knowledge — and it is being designed
                hand-in-hand with customers, including a Process Discovery workshop with Freudenberg teams.
              </p>
              <p>
                What I find interesting is the posture: not "we built a feature, please admire it", but a capability
                being shaped with the people who live with the problem. That is the part of the story I'd want to
                protect all the way from the product room to the published page.
              </p>
              <p className="text-tangelo font-bold">That's the story I'd want to test with the product team before shipping.</p>
            </div>
          </article>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-20 md:mb-28">
        <Reveal>
          <div className="border-2 border-linen/40 p-6 md:p-8 h-full" data-testid="linkedin-artefact">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Tag>Artefact 02</Tag>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-linen/50">LinkedIn · ~160 words</span>
            </div>
            <div className="space-y-4 font-mono text-sm leading-relaxed text-linen/90">
              <p className="text-lg text-linen">Your process documentation can be perfectly written and still be wrong.</p>
              <p>
                Not because someone did a bad job. Because the business kept moving and the document didn't. People
                change processes. Systems get reconfigured. Exceptions become rules. Meanwhile, the file that supposedly
                explains how it all works sits there, confidently describing a company that no longer exists.
              </p>
              <p>
                That's the problem Conduct is exploring with Freudenberg: a capability designed to keep process
                documentation accurate, current and connected to reality — built hand-in-hand with the teams who feel
                the problem every day.
              </p>
              <p>
                The question isn't really "can AI write documentation?" It's whether a company can keep its
                understanding of itself connected to the systems that actually run it.
              </p>
              <p className="text-botticelli">What breaks first in your organisation when the map stops matching the territory?</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Tag>Artefact 03</Tag>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-linen/50">60-second video · conceptual</span>
            </div>
            <DocVideo />
          </div>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mb-20 md:mb-28">
        <Reveal>
          <div className="border border-linen/30 p-6 md:p-8 h-full" data-testid="engineer-artefact">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-3">Artefact 04 — if I were talking to the engineer</p>
            <p className="font-display uppercase text-xl md:text-2xl text-linen mb-5">What actually makes this technically difficult?</p>
            <div className="space-y-2 font-mono text-xs md:text-sm text-linen/85">
              {[
                "What sources does Conduct connect?",
                "How is the relationship between process and system reality represented?",
                "What changed technically?",
                "What is the hardest part?",
                "What is genuinely new?",
                "What would be easy for a non-technical person to misunderstand?",
              ].map((q) => (
                <p key={q}><span className="text-tangelo mr-2">→</span>{q}</p>
              ))}
            </div>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-tangelo mt-6">Output: technical deep dive</p>
            <p className="font-serifit italic text-base text-linen/80 mt-3">
              I don't want to simplify the product until it becomes meaningless. I want to understand it well enough to
              simplify it without losing what matters.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border border-linen/30 p-6 md:p-8 h-full" data-testid="cio-artefact">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-3">Artefact 05 — if I were talking to a CIO</p>
            <p className="font-display uppercase text-xl md:text-2xl text-linen mb-5">Not "how does the feature work?"</p>
            <div className="space-y-2 font-mono text-xs md:text-sm text-linen/85">
              {[
                "What does stale process knowledge cost you?",
                "What becomes harder when the documented process and actual system behaviour diverge?",
                "What could change if business and IT are working from the same understanding?",
              ].map((q) => (
                <p key={q}><span className="text-tangelo mr-2">→</span>{q}</p>
              ))}
            </div>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-tangelo mt-6">Output: executive story</p>
            <p className="font-mono text-xs text-linen/70 mt-3">One sentence. Three proof points. One customer example. One clear implication.</p>
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="border-2 border-dashed border-linen/40 p-6 md:p-8 h-full" data-testid="customer-artefact">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-3">Artefact 06 — if I were talking to the customer</p>
            <div className="space-y-2 font-mono text-xs md:text-sm text-linen/85 mb-6">
              {[
                "What problem were you trying to solve?",
                "What was painful before?",
                "What changed?",
                "What would make this genuinely useful?",
                "What would you tell another enterprise team facing the same problem?",
              ].map((q) => (
                <p key={q}><span className="text-tangelo mr-2">→</span>{q}</p>
              ))}
            </div>
            <p className="font-mono text-xs text-tangelo">[ REAL CUSTOMER INPUT REQUIRED ]</p>
            <p className="font-mono text-[11px] text-linen/60 mt-3 italic">
              Only used if Conduct / Freudenberg publicly provide the answers. A hypothesis is not evidence.
            </p>
          </div>
        </Reveal>
      </div>

      <div data-testid="many-lives">
        <Reveal>
          <p className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-linen leading-[0.95] mb-3">
            One story should not <span className="text-tangelo">die as one post.</span>
          </p>
          <p className="font-mono text-sm text-linen/70 mb-10">
            The audience changes. The reason to care changes. The story doesn't have to.
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs md:text-sm uppercase tracking-[0.08em]">
          {lives.map((l, i) => (
            <Reveal key={l} delay={Math.min(i * 0.04, 0.3)} y={8}>
              <span className="flex items-center gap-3">
                <span className="border border-linen/40 px-3 py-2 text-linen/85">{l}</span>
                {i < lives.length - 1 && <span className="text-tangelo" aria-hidden="true">→</span>}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
