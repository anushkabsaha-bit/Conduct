import { Reveal, SectionHead } from "../components/Shared";

const wall = [
  { n: "70K", l: "readers", d: "A community I built around writing.", span: "md:col-span-5", big: true },
  { n: "37 → 7", l: "escalations / week", d: "A decision-triage system I built.", span: "md:col-span-4", big: true },
  { n: "£17K", l: "found", d: "A supplier overcharge I identified.", span: "md:col-span-3", big: true },
  { n: "£50K", l: "commercial deal", d: "A commercial negotiation I helped close.", span: "md:col-span-4", big: false },
  { n: "Conduct", l: "growth os", d: "A system I built because I wanted to understand how Conduct could grow.", span: "md:col-span-4", big: false },
  { n: "6", l: "agents", d: "Specialised intelligence layers I built to help me work faster and think better.", span: "md:col-span-4", big: false },
];

export default function Built() {
  return (
    <section id="built" data-testid="built-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="01" kicker="What I've built">
        I've always been a builder. <span className="text-tangelo">The medium just keeps changing.</span>
      </SectionHead>

      <div data-testid="evidence-wall" className="grid md:grid-cols-12 border-t border-l border-chocolate/30">
        {wall.map((w, i) => (
          <Reveal key={w.l} delay={Math.min(i * 0.05, 0.25)} className={`${w.span} border-r border-b border-chocolate/30`}>
            <div
              data-testid={`evidence-${w.l.replace(/[\s/]+/g, "-")}`}
              className="group p-6 md:p-8 h-full flex flex-col justify-between min-h-[220px] hover:bg-chocolate hover:text-linen transition-colors duration-300"
            >
              <p className={`font-display uppercase leading-[0.85] ${w.big ? "text-6xl md:text-8xl" : "text-5xl md:text-7xl"} text-tangelo`}>
                {w.n}
              </p>
              <div className="mt-8">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-2">{w.l}</p>
                <p className="font-serifit italic text-base md:text-lg opacity-80">{w.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <p className="font-mono text-xs text-chocolate/60 max-w-xl">
          Different mediums, same instinct: notice the problem, build the thing, see what happens.
        </p>
      </Reveal>
    </section>
  );
}
