import { Reveal, SectionHead } from "../components/Shared";

const slate = [
  { no: "01", desk: "Customer", item: "Freudenberg × Process Documentation", audience: "Prospects, customers", format: "Long-form story", distribution: "Website, LinkedIn, sales", purpose: "Make the problem felt" },
  { no: "02", desk: "Product", item: "What changed?", audience: "Market, engineers", format: "Explainer", distribution: "Website, LinkedIn", purpose: "Understanding" },
  { no: "03", desk: "Engineering", item: "What's technically difficult here?", audience: "Engineers, candidates", format: "Deep dive", distribution: "Substack / Medium", purpose: "Credibility" },
  { no: "04", desk: "Founder", item: "What does this mean for the future of enterprise systems?", audience: "Market, investors", format: "POV essay / talk", distribution: "Founder channels", purpose: "Belief" },
  { no: "05", desk: "Community", item: "Practitioner conversation", audience: "Practitioners", format: "Event / hackathon + clips", distribution: "Community channels", purpose: "A reason to return" },
  { no: "06", desk: "Talent", item: "What kind of people get to build this?", audience: "Candidates", format: "Behind-the-scenes", distribution: "LinkedIn, careers", purpose: "Applications" },
];

const day = [
  ["09:12", "Ana flags something worth my attention."],
  ["09:35", "I review a customer story with Edith."],
  ["10:20", "Berdine challenges a draft."],
  ["11:10", "I speak to product / engineering."],
  ["12:30", "Catherine finds an event worth investigating."],
  ["14:00", "I turn the product conversation into possible stories."],
  ["15:30", "Diana tries to kill one."],
  ["16:15", "I decide what ships."],
  ["17:40", "Distribution."],
  ["18:10", "Measure → learn → repeat."],
];

export default function Ops() {
  return (
    <section id="ops" data-testid="ops-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="13" kicker="If I were running the desk this month">
        The slate<span className="text-tangelo">.</span>
      </SectionHead>

      <Reveal>
        <div className="border-2 border-chocolate overflow-x-auto mb-24 md:mb-32" data-testid="content-slate">
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

      <div id="day">
        <SectionHead no="14" kicker="A day in my life">
          An operator's day. <span className="text-tangelo">Not a productivity routine.</span>
        </SectionHead>

        <div className="border-t border-chocolate/30 max-w-4xl">
          {day.map(([t, d], i) => (
            <Reveal key={t} delay={Math.min(i * 0.03, 0.28)} y={12}>
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
      </div>
    </section>
  );
}
