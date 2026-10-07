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
      "What can the new capability do that could not be done before?",
      "What is technically difficult?",
      "What part are you most proud of?",
      "What would be easy for someone outside the team to misunderstand?",
    ],
  },
  {
    who: "Engineering",
    qs: [
      "What is actually happening underneath this?",
      "What sources does the system use?",
      "How is the relationship between process and system reality represented?",
      "What is genuinely new?",
      "What should I absolutely not oversimplify?",
    ],
  },
  {
    who: "Customer / Freudenberg",
    label: "Questions I would ask, if access and approval existed.",
    qs: [
      "What was happening before?",
      "Where did documentation stop being useful?",
      "What did you actually need?",
      "What would make this useful in practice?",
      "What surprised you?",
      "What would you want another enterprise team to understand?",
    ],
  },
];

const outputs = [
  "Long-form product story",
  "LinkedIn post",
  "Short video",
  "Engineer explanation",
  "Founder perspective",
  "Customer story, if approved",
  "Sales enablement version",
];

const channels = [
  ["Conduct website", "Own the full explanation."],
  ["LinkedIn", "Create the first point of interest."],
  ["Founder / leadership LinkedIn", "Add a point of view."],
  ["Engineer / technical channel", "Explain what is technically interesting."],
  ["Sales", "Give the commercial team something useful to send."],
  ["Event / talk", "Turn the product problem into a discussion."],
  ["Recruiting", "Show what Conduct is building and what people get to work on."],
];

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

      <Reveal>
        <p className="font-serifit italic text-xl md:text-2xl text-linen max-w-xl mb-14">
          I'm not starting with the post. I'm starting with the question.
        </p>
      </Reveal>

      <div className="flex flex-wrap gap-4 md:gap-5 mb-16 md:mb-20" data-testid="freudenberg-notes">
        {notes.map((n, i) => (
          <PostIt key={n.t} t={n.t} r={n.r} i={i} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-3 mb-16 md:mb-20">
        <Reveal>
          <div className="bg-linen text-chocolate p-6 md:p-8 h-full spotlight" data-testid="freudenberg-known">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-5">
              What I know from the public material
            </p>
            <div className="space-y-3">
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
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-5">What I don't know yet</p>
            <div className="space-y-3">
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
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">My working hypothesis</p>
          <p className="font-serifit italic text-xl md:text-2xl leading-snug text-linen mb-5">
            Documentation is not interesting because it is documentation. The interesting problem is that businesses
            change faster than the documents that describe them.
          </p>
          <p className="font-mono text-sm text-linen/75">
            I'd want to test whether this is actually the story before writing the final piece.
          </p>
        </div>
      </Reveal>

      <div className="mb-16 md:mb-20">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-6">Who I need before I write</p>
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
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-chocolate/50 mb-1">Notebook page</p>
            <p className="font-display uppercase text-2xl md:text-3xl mb-6">Freudenberg story</p>
            <div className="space-y-4 font-mono text-sm text-chocolate/90">
              <p><span className="text-[10px] tracking-[0.18em] uppercase text-tangelo block mb-1">Primary audience</span>Enterprise / CIO / IT leadership</p>
              <p><span className="text-[10px] tracking-[0.18em] uppercase text-tangelo block mb-1">Secondary</span>Enterprise practitioners, engineers, general technology audience</p>
              <p><span className="text-[10px] tracking-[0.18em] uppercase text-tangelo block mb-1">The main story</span>Problem first. Product second. Evidence third. Implication fourth.</p>
              <div>
                <span className="text-[10px] tracking-[0.18em] uppercase text-tangelo block mb-2">What I would make</span>
                <div className="space-y-1">
                  {outputs.map((o, i) => (
                    <p key={o}><span className="text-tangelo mr-2">{String(i + 1).padStart(2, "0")}</span>{o}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="border border-linen/30 h-full" data-testid="freudenberg-distribution">
            <div className="grid grid-cols-[1fr_1.4fr] border-b border-linen/30 bg-chocolate">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-botticelli px-5 py-3">Channel</p>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-botticelli px-5 py-3">Purpose</p>
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

      <div className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Tag>Artefact</Tag>
              <Tag tone="outline-linen">Anushka's first draft</Tag>
              <Tag tone="botticelli">Not official Conduct copy</Tag>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="bg-linen text-chocolate p-6 md:p-10 spotlight" data-testid="freudenberg-draft">
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
    </section>
  );
}
