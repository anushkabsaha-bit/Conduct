import { Reveal, SectionHead } from "../components/Shared";

const weekPlan = [
  ["Monday", "Product story"],
  ["Tuesday", "Founder perspective"],
  ["Wednesday", "Technical explanation"],
  ["Thursday", "Customer / community"],
  ["Friday", "Experiment / learning"],
];

const slate = [
  { no: "01", desk: "Customer", item: "Freudenberg × process documentation", audience: "Prospects, customers", format: "Long-form story", distribution: "Website, LinkedIn, sales", purpose: "Make the problem felt" },
  { no: "02", desk: "Product", item: "What changed?", audience: "Market, engineers", format: "Explainer", distribution: "Website, LinkedIn", purpose: "Understanding" },
  { no: "03", desk: "Engineering", item: "What's technically difficult here?", audience: "Engineers, candidates", format: "Deep dive", distribution: "Substack / Medium", purpose: "Credibility" },
  { no: "04", desk: "Founder", item: "What does this mean for enterprise systems?", audience: "Market, investors", format: "POV essay / talk", distribution: "Founder channels", purpose: "Belief" },
  { no: "05", desk: "Community", item: "Practitioner conversation", audience: "Practitioners", format: "Event + clips", distribution: "Community channels", purpose: "A reason to return" },
  { no: "06", desk: "Talent", item: "What kind of people get to build this?", audience: "Candidates", format: "Behind-the-scenes", distribution: "LinkedIn, careers", purpose: "Applications" },
];

export default function Ops() {
  return (
    <section id="ops" data-testid="ops-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-32">
      <SectionHead no="11" kicker="If I were running the desk">
        A working week<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-16 md:mb-20" data-testid="working-week">
        {weekPlan.map(([d, focus], i) => (
          <Reveal key={d} delay={i * 0.06}>
            <div className="border-2 border-chocolate p-5 h-full hover:bg-chocolate hover:text-linen transition-colors">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-2">{d}</p>
              <p className="font-display uppercase text-lg md:text-xl leading-tight">{focus}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="border-2 border-chocolate overflow-x-auto" data-testid="content-slate">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-[50px_110px_1.4fr_1fr_1fr_1.2fr_1fr] border-b-2 border-chocolate bg-chocolate text-linen">
              {["", "Desk", "Item", "Audience", "Format", "Distribution", "Purpose"].map((h) => (
                <p key={h} className="font-mono text-[10px] tracking-[0.18em] uppercase px-4 py-3">{h}</p>
              ))}
            </div>
            {slate.map((row, i) => (
              <Reveal key={row.no} delay={Math.min(i * 0.04, 0.24)} y={8}>
                <div
                  className="grid grid-cols-[50px_110px_1.4fr_1fr_1fr_1.2fr_1fr] border-b border-chocolate/25 last:border-b-0 hover:bg-botticelli/20 transition-colors"
                  data-testid={`slate-row-${row.no}`}
                >
                  <p className="font-mono text-xs text-tangelo px-4 py-4">{row.no}</p>
                  <p className="font-display uppercase text-sm px-4 py-4">{row.desk}</p>
                  <p className="font-mono text-xs px-4 py-4 text-chocolate/90">{row.item}</p>
                  <p className="font-mono text-xs px-4 py-4 text-chocolate/80">{row.audience}</p>
                  <p className="font-mono text-xs px-4 py-4 text-chocolate/80">{row.format}</p>
                  <p className="font-mono text-xs px-4 py-4 text-chocolate/80">{row.distribution}</p>
                  <p className="font-mono text-xs px-4 py-4 text-chocolate/90">{row.purpose}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
