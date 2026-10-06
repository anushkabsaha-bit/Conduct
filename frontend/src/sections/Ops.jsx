import { Reveal, SectionHead } from "../components/Shared";

const week = [
  ["Substack", "Draft → Edit → Publish → Distribution", "in edit"],
  ["LinkedIn", "3 posts in testing", "testing"],
  ["Video", "1 filming session", "booked"],
  ["Customer story", "Awaiting product review", "blocked, politely"],
  ["Event", "2 opportunities being investigated", "scouting"],
];

const filming = ["1 hero video", "3 short clips", "1 founder post", "1 LinkedIn carousel", "1 blog section", "1 recruitment asset"];

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
      <SectionHead no="10" kicker="The desk in motion">
        What the week <span className="text-tangelo">actually looks like.</span>
      </SectionHead>

      <div className="grid md:grid-cols-12 gap-10 mb-24 md:mb-32">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-chocolate/60 mb-4">This week — an illustration of how the desk runs</p>
          </Reveal>
          <div className="border-t border-chocolate/30" data-testid="content-desk-board">
            {week.map(([k, v, s], i) => (
              <Reveal key={k} delay={Math.min(i * 0.04, 0.2)} y={10}>
                <div className="grid grid-cols-[130px_1fr_auto] gap-4 py-4 border-b border-chocolate/30 items-baseline">
                  <span className="font-display uppercase text-lg md:text-xl">{k}</span>
                  <span className="font-mono text-xs md:text-sm text-chocolate/85">{v}</span>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-tangelo">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <Reveal>
            <div className="border-2 border-chocolate p-6 md:p-8" data-testid="filming-multiplier">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-3">One filming session</p>
              <p className="font-display uppercase text-3xl md:text-4xl mb-6">becomes</p>
              <div className="space-y-0 border-t border-chocolate/25">
                {filming.map((f, i) => (
                  <p key={f} className="font-mono text-sm py-2.5 border-b border-chocolate/25 text-chocolate/90">
                    <span className="text-tangelo mr-3">0{i + 1}</span>
                    {f}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div id="day">
        <SectionHead no="11" kicker="A day in my life">
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
