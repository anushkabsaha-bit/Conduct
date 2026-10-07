import { Minus } from "lucide-react";
import { Reveal, SectionHead, Tag } from "../components/Shared";

const notes = [
  { t: "What's actually interesting here?", r: "-2deg" },
  { t: "Why should anyone care?", r: "1.5deg" },
  { t: "Is documentation the problem, or is it that the business changes faster than its documentation?", r: "-1deg" },
  { t: "Ask Product.", r: "2deg" },
  { t: "Need customer voice.", r: "-1.5deg" },
  { t: "What's technically new?", r: "1deg" },
  { t: "Can I explain this without saying SAP 14 times?", r: "-2deg" },
  { t: "What's the sentence someone remembers?", r: "1.5deg" },
  { t: "Don't make this a feature announcement.", r: "-1deg" },
  { t: "Find the problem first.", r: "2deg" },
];

const known = [
  "Conduct is working with Freudenberg teams on a capability around process documentation.",
  "The problem: documentation can stop reflecting how the business actually works.",
  "Conduct has publicly talked about keeping documentation accurate, current and connected to system reality.",
  "Conduct has also described the broader aim of connecting business processes, system understanding and enterprise IT.",
];

const unknown = [
  "The customer's exact experience.",
  "Internal product decisions.",
  "Technical implementation details.",
  "Customer results that have not been publicly disclosed.",
  "What Freudenberg would actually want to say publicly.",
];

const people = [
  {
    who: "Product",
    qs: [
      "What exactly changed?",
      "What problem were you trying to solve?",
      "What was difficult before?",
      "What surprised you?",
      "What would you want a CIO to understand?",
    ],
  },
  {
    who: "Engineering",
    qs: [
      "What is actually happening under the hood?",
      "What part of this would another engineer find interesting?",
      "What would be easy for me to explain badly?",
      "What can we actually talk about publicly?",
    ],
  },
  {
    who: "Customer / Freudenberg",
    label: "Questions I would ask, if access and approval existed.",
    qs: [
      "What was painful before?",
      "What changed?",
      "What does this make easier?",
      "Who feels that difference day to day?",
      "What would you want another team to understand about this?",
    ],
  },
];

const planRows = [
  ["Primary audience", "Enterprise / CIO / IT leadership"],
  ["Who else might care", "Practitioners, engineers, general tech audience"],
  ["The story might be", "The business changing faster than the documents describing it"],
  ["Most interesting opening", "The wrongness of a perfectly written document"],
  ["What proof do we have", "Only what Conduct has said publicly"],
  ["Still needs verifying", "Customer experience, technical detail, claims"],
];

const outputs = ["LinkedIn", "Customer story", "Product explainer", "Technical deep dive", "Founder / product POV", "Sales material", "Event material"];

const channels = [
  ["LinkedIn", "Reach and conversation"],
  ["Website", "Deeper customer and product context"],
  ["Customer advocacy", "Credibility"],
  ["Sales", "A useful proof point to send"],
  ["Event", "Useful if the technical story deserves discussion"],
];

const prePublish = [
  "Product review",
  "Engineering review",
  "Customer approval",
  "Claims checked",
  "Quotes approved",
  "Screenshots approved",
  "Final edit",
  "Publish",
];

const FactTag = ({ children, tone = "text-tangelo" }) => (
  <span className={`font-[Caveat] text-xl ${tone}`} style={{ rotate: "-2deg", display: "inline-block" }}>
    {children}
  </span>
);

const PostIt = ({ t, r, i }) => (
  <Reveal delay={Math.min(i * 0.05, 0.4)} y={14}>
    <p
      className="font-[Caveat] text-lg md:text-xl text-chocolate/85 bg-[#FFFDF6] border border-chocolate/25 shadow-md px-4 py-3 max-w-[240px]"
      style={{ rotate: r }}
    >
      {t}
    </p>
  </Reveal>
);

export default function Freudenberg() {
  return (
    <section id="freudenberg" data-testid="freudenberg-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-32">
      <SectionHead no="08" kicker="Conduct × Freudenberg" dark>
        Freudenberg<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="max-w-2xl space-y-4 mb-14">
        <Reveal>
          <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85">
            So I tried it on something real. The Freudenberg collaboration seemed like a good place to start.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="font-serifit italic text-xl md:text-2xl text-linen">
            I'm not starting with the post. I'm starting with the question.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <p className="font-[Caveat] text-xl text-botticelli mb-5" style={{ rotate: "-1deg" }}>questions, mostly:</p>
      </Reveal>
      <div className="flex flex-wrap gap-4 md:gap-5 mb-16 md:mb-20" data-testid="freudenberg-notes">
        {notes.map((n, i) => (
          <PostIt key={n.t} t={n.t} r={n.r} i={i} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-16 md:mb-20">
        <Reveal>
          <div className="bg-linen text-chocolate p-6 md:p-8 h-full spotlight relative" data-testid="freudenberg-known">
            <FactTag>FACT · from public material</FactTag>
            <div className="space-y-3 mt-4">
              {known.map((k) => (
                <p key={k} className="font-mono text-sm leading-relaxed text-chocolate/90 border-l-2 border-botticelli pl-4">
                  {k}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border-2 border-dashed border-linen/40 p-6 md:p-8 h-full" data-testid="freudenberg-unknown">
            <FactTag tone="text-botticelli">NEED TO VERIFY · don't know yet</FactTag>
            <div className="space-y-3 mt-4">
              {unknown.map((u) => (
                <p key={u} className="font-mono text-sm leading-relaxed text-linen/70 border-l-2 border-linen/25 pl-4">
                  {u}
                </p>
              ))}
            </div>
            <p className="font-[Caveat] text-xl text-tangelo mt-6" style={{ rotate: "-1deg" }}>
              Fact, hypothesis, question, claim. The difference matters.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="border-2 border-tangelo p-6 md:p-10 max-w-3xl mb-16 md:mb-20" data-testid="freudenberg-hypothesis">
          <FactTag>HYPOTHESIS · mine, not Conduct's</FactTag>
          <p className="font-serifit italic text-xl md:text-2xl leading-snug text-linen mt-4 mb-5">
            Documentation isn't interesting because it's documentation. The interesting problem might be that businesses
            change faster than the documents describing them.
          </p>
          <p className="font-mono text-sm text-linen/75">
            I'd want to test whether this is actually the story before writing the final piece.
          </p>
        </div>
      </Reveal>

      <div className="mb-16 md:mb-20">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-2">Who I need to talk to</p>
          <p className="font-[Caveat] text-xl text-botticelli mb-6" style={{ rotate: "1deg" }}>
            trying to understand something before writing about it
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-3">
          {people.map((p, i) => (
            <Reveal key={p.who} delay={i * 0.08}>
              <div className="border border-linen/30 p-6 h-full" data-testid={`freudenberg-talk-${p.who.split(" ")[0].toLowerCase()}`}>
                <p className="font-display uppercase text-xl md:text-2xl text-linen mb-1">{p.who}</p>
                {p.label && <p className="font-mono text-[10px] text-botticelli mb-3 italic">{p.label}</p>}
                <div className="space-y-2 mt-4">
                  {p.qs.map((q) => (
                    <p key={q} className="font-mono text-xs md:text-sm text-linen/85">
                      <span className="text-tangelo mr-2">→</span>
                      {q}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-16 md:mb-20">
        <Reveal>
          <div className="bg-linen text-chocolate p-6 md:p-8 h-full spotlight" data-testid="freudenberg-plan">
            <FactTag>the board starts becoming a plan</FactTag>
            <p className="font-display uppercase text-2xl md:text-3xl mt-3 mb-6">Freudenberg story</p>
            <div className="space-y-4 font-mono text-sm text-chocolate/90">
              {planRows.map(([k, v]) => (
                <p key={k}>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-tangelo block mb-1">{k}</span>
                  {v}
                </p>
              ))}
              <div>
                <span className="text-[10px] tracking-[0.18em] uppercase text-tangelo block mb-2">What it might become</span>
                <div className="flex flex-wrap gap-2">
                  {outputs.map((o) => (
                    <span key={o} className="border border-chocolate/40 px-2.5 py-1.5 text-xs uppercase tracking-[0.08em] text-chocolate/85">
                      {o}
                    </span>
                  ))}
                </div>
                <p className="font-[Caveat] text-xl text-chocolate/75 mt-4" style={{ rotate: "-1deg" }}>
                  The format follows the story. Not everything becomes everything.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border border-linen/30 h-full" data-testid="freudenberg-distribution">
            <div className="grid grid-cols-[1fr_1.4fr] border-b border-linen/30 bg-chocolate">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-botticelli px-5 py-3">Where it could live</p>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-botticelli px-5 py-3">Why</p>
            </div>
            {channels.map(([c, p]) => (
              <div key={c} className="grid grid-cols-[1fr_1.4fr] border-b border-linen/20 last:border-b-0">
                <p className="font-mono text-xs md:text-sm text-linen px-5 py-3.5">{c}</p>
                <p className="font-mono text-xs md:text-sm text-linen/70 px-5 py-3.5">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-start mb-16 md:mb-20">
        <div className="md:col-span-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Tag>Artefact</Tag>
              <Tag tone="outline-linen">Anushka's first draft</Tag>
              <Tag tone="botticelli">Not official Conduct copy · based only on publicly available information</Tag>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="bg-linen text-chocolate p-6 md:p-10 spotlight" data-testid="freudenberg-draft">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-chocolate/50 mb-2">First attempt</p>
              <p className="font-mono text-base text-chocolate/50 line-through decoration-tangelo decoration-2 mb-6">
                Process documentation is changing.
              </p>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">Better</p>
              <div className="space-y-4 font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
                <p className="text-lg text-chocolate">
                  Your process documentation can be perfectly written and still be wrong.
                </p>
                <p>Not because the document was badly written. Because the business changed.</p>
                <p>
                  People change processes. Systems get reconfigured. Exceptions become rules. The file that explains how
                  it all works keeps describing a company that no longer exists.
                </p>
                <p>
                  That is the problem Conduct is exploring with Freudenberg: a capability designed to keep process
                  documentation accurate, current and connected to reality, built hand-in-hand with the teams who feel
                  the problem every day.
                </p>
                <p className="text-tangelo">
                  What breaks first in your organisation when the map stops matching the territory?
                </p>
              </div>
            </article>
          </Reveal>
        </div>
        <div className="md:col-span-4 space-y-5">
          <Reveal delay={0.1}>
            <p className="font-[Caveat] text-xl md:text-2xl text-linen/85" style={{ rotate: "-1.5deg" }}>
              Is this actually interesting to the audience I want?
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-[Caveat] text-xl md:text-2xl text-botticelli" style={{ rotate: "1deg" }}>
              Ask Product. Ask Engineering. Check customer approval. Then publish.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="border border-linen/30 p-6 md:p-8 max-w-3xl" data-testid="freudenberg-prepublish">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-linen/60 mb-5">
            Before anything ships · the boring but important bit
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-6">
            {prePublish.map((item, i) => (
              <p key={item} className={`flex items-start gap-2.5 py-1.5 font-mono text-xs ${i === prePublish.length - 1 ? "text-tangelo" : "text-linen/55"}`}>
                {i === prePublish.length - 1 ? (
                  <span className="text-tangelo mt-0 shrink-0">→</span>
                ) : (
                  <Minus className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                )}
                {item}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
