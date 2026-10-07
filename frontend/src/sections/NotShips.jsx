import { Reveal, SectionHead } from "../components/Shared";

const ideas = [
  {
    name: "SAP Score",
    status: "Keep testing",
    tone: "text-botticelli border-botticelli",
    why: "Memorable and potentially very Conduct, but audience, location and execution still need testing.",
  },
  {
    name: "The internal meme format",
    status: "Kill",
    tone: "text-tangelo border-tangelo",
    why: "Amusing internally. No strong external reason to care.",
  },
  {
    name: "The practitioner dinner series",
    status: "Park",
    tone: "text-linen/80 border-linen/50",
    why: "Genuinely good idea. Simply wrong for the current moment.",
  },
];

export default function NotShips() {
  return (
    <section id="judgement" data-testid="not-ships-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-32">
      <SectionHead no="09" kicker="Judgement">
        Not everything ships<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="grid md:grid-cols-3 gap-3 mb-10">
        {ideas.map((idea, i) => (
          <Reveal key={idea.name} delay={i * 0.08}>
            <div className="border-2 border-chocolate p-6 md:p-8 h-full flex flex-col" data-testid={`not-ships-idea-${i}`}>
              <p className="font-display uppercase text-xl md:text-2xl text-chocolate mb-5 leading-tight">{idea.name}</p>
              <span className={`self-start font-mono text-[11px] tracking-[0.18em] uppercase border-2 px-3 py-1.5 mb-5 ${idea.tone}`}>
                {idea.status}
              </span>
              <p className="font-mono text-sm leading-relaxed text-chocolate/85 mt-auto">{idea.why}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="font-[Caveat] text-2xl md:text-3xl text-chocolate/85 max-w-xl" style={{ rotate: "-1deg" }}>
          "I'd rather kill an idea early than fall in love with it because I made it."
        </p>
      </Reveal>
      <Reveal className="mt-5">
        <p className="font-mono text-xs text-chocolate/60">Ideas two and three are illustrative. The statuses are the point.</p>
      </Reveal>
    </section>
  );
}
