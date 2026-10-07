import { Reveal, SectionHead } from "../components/Shared";

const ideas = [
  {
    name: "SAP Score",
    status: "Keep testing",
    tone: "text-botticelli border-botticelli",
    why: "Potentially memorable. Connected to a real enterprise pain. Needs an audience and execution test before anyone books a photo booth.",
  },
  {
    name: "The internal meme format",
    status: "Kill",
    tone: "text-tangelo border-tangelo",
    why: "Fun internally. Weak reason for anyone outside the building to care. Killed before it ate a week.",
  },
  {
    name: "The practitioner dinner series",
    status: "Park",
    tone: "text-linen/80 border-linen/50",
    why: "Good idea. Wrong moment — no reason to return yet. Parked until the reason exists.",
  },
];

export default function NotShips() {
  return (
    <section id="judgement" data-testid="not-ships-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="11" kicker="Judgement, shown not claimed">
        Not everything ships<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="grid md:grid-cols-3 gap-3 mb-12">
        {ideas.map((idea, i) => (
          <Reveal key={idea.name} delay={i * 0.08}>
            <div className="border-2 border-chocolate p-6 md:p-8 h-full flex flex-col" data-testid={`not-ships-idea-${i}`}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-chocolate/50 mb-3">Idea 0{i + 1}</p>
              <p className="font-display uppercase text-2xl md:text-3xl text-chocolate mb-6 leading-tight">{idea.name}</p>
              <span className={`self-start font-mono text-[11px] tracking-[0.18em] uppercase border-2 px-3 py-1.5 mb-6 ${idea.tone}`}>
                Status: {idea.status}
              </span>
              <p className="font-mono text-sm leading-relaxed text-chocolate/85 mt-auto">{idea.why}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="font-serifit italic text-xl md:text-2xl text-chocolate max-w-2xl border-l-4 border-tangelo pl-5">
          I don't want a system that tells me every idea is good. I want one that makes it harder for me to ship a bad
          one.
        </p>
      </Reveal>
      <Reveal className="mt-6">
        <p className="font-mono text-xs text-chocolate/60">Ideas 02 and 03 are illustrative — the statuses are the point.</p>
      </Reveal>
    </section>
  );
}
