import { Reveal, SectionHead, Tag } from "../components/Shared";

const testQuestions = [
  "Why did you choose Conduct?",
  "What did Conduct look like when you joined?",
  "What did you think it could become?",
  "What surprised you?",
];

const measures = ["Watch time", "Completion", "Shares", "Comments", "Recall", "Qualitative reaction"];

const firstsGroups = ["The Firsts", "The Believers", "The Builders", "The Customers", "The people who opened doors"];

const archiveCols = ["Photo", "Name", "Role", "Year", "Quote", "Video"];

const schedule = [
  ["7:00", "Arrival"],
  ["7:30", "Drinks + food"],
  ["8:00", "The anniversary film"],
  ["8:10", "Conversation cards"],
  ["8:45", "Dinner"],
  ["Late", "Drinks, photos, conversations"],
];

const cards = [
  "Find someone you don't normally work with.",
  "Find out one thing you didn't know about them.",
  "What should Conduct be doing three years from now?",
];

const postEvent = ["Anniversary film", "Firsts stories", "LinkedIn carousel", "Website archive", "Founder posts", "Employer brand", "Recruiting", "Customer stories"];

export default function Anniversary() {
  return (
    <>
      <section id="anniversary" data-testid="anniversary-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-32">
        <SectionHead no="13" kicker="One example of how I work">
          The anniversary<span className="text-tangelo">.</span>
        </SectionHead>

        <Reveal>
          <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90 max-w-2xl mb-12">
            Conduct turns three on 8 January 2027. I wouldn't start by assuming I know what the anniversary should be.
            I'd test the story first.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="border-2 border-chocolate p-6 md:p-8 max-w-3xl mb-16 md:mb-20" data-testid="anniversary-test">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">The test</p>
            <p className="font-mono text-sm leading-relaxed text-chocolate/90 mb-4">
              Interview a small group of early Conduct people. Film simple 30 to 60 second answers. Cut one small
              montage. Ask:
            </p>
            <ul className="space-y-1.5 font-mono text-xs md:text-sm text-chocolate/85 mb-6">
              {testQuestions.map((q) => (
                <li key={q}><span className="text-tangelo mr-2">→</span>{q}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {measures.map((m) => (
                <Tag key={m} tone="outline">{m}</Tag>
              ))}
            </div>
            <p className="font-mono text-sm text-chocolate/90">
              If it works, scale it. If it doesn't, change it or kill it.
            </p>
          </div>
        </Reveal>

        <div id="firsts">
          <Reveal>
            <h3 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-chocolate mb-4">
              Meet the Conduct Firsts<span className="text-tangelo">.</span>
            </h3>
            <p className="font-serifit italic text-xl md:text-2xl text-chocolate/85 max-w-2xl mb-8">
              If the test works, it becomes an archive. Three years. The people who took the first chances.
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-2 mb-10">
            {firstsGroups.map((g) => (
              <span key={g} className="font-display uppercase text-base md:text-xl border-2 border-chocolate px-4 py-2 text-chocolate hover:bg-tangelo hover:border-tangelo hover:text-linen transition-colors cursor-default">
                {g}
              </span>
            ))}
          </div>

          <Reveal>
            <div className="border-2 border-chocolate overflow-x-auto" data-testid="firsts-archive">
              <div className="grid grid-cols-[100px_repeat(5,minmax(120px,1fr))] min-w-[760px]">
                {archiveCols.map((c) => (
                  <p key={c} className="font-mono text-[10px] tracking-[0.2em] uppercase text-chocolate/60 border-b border-r border-chocolate/25 last:border-r-0 px-4 py-3">
                    {c}
                  </p>
                ))}
                {[0, 1].map((row) =>
                  archiveCols.map((c, ci) => (
                    <div key={`${row}-${c}`} className="border-b border-r border-chocolate/25 last:border-r-0 px-4 py-6 min-h-[64px] flex items-center">
                      <span className="font-mono text-[11px] text-chocolate/40 italic">
                        {ci === 4 ? "[ their words, not mine ]" : "[ to be filled by a real person ]"}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-5">
            <p className="font-mono text-xs text-chocolate/60 max-w-xl">
              Deliberately empty. Real names and words, collected with permission during the test.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="dinner" data-testid="dinner-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-32">
        <SectionHead no="14" kicker="If it scales" dark>
          The dinner<span className="text-tangelo">.</span>
        </SectionHead>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-6">
            <Reveal>
              <div data-testid="dinner-invitation-card" className="spotlight bg-linen text-chocolate border-2 border-chocolate p-6 md:p-10 rotate-[-1deg]">
                <p className="font-mono text-[11px] md:text-xs tracking-[0.14em] uppercase mb-6 max-w-sm">
                  You took a chance on us. Come and see what it turned into.
                </p>
                <span className="inline-block bg-tangelo text-linen font-mono text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 mb-5">
                  Meet the Conduct Firsts
                </span>
                <p className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] border-y-2 border-chocolate py-5 mb-2">
                  Friday 8 January 2027
                </p>
                <p className="font-mono text-xs tracking-[0.14em] uppercase text-chocolate/70 mb-6">7pm until late</p>
                <div className="space-y-5 font-mono text-sm">
                  <div>
                    <span className="inline-block bg-chocolate text-linen text-[10px] tracking-[0.18em] uppercase px-2 py-1 mb-2">Where</span>
                    <p className="tracking-[0.08em]">Conduct London HQ</p>
                  </div>
                  <div>
                    <span className="inline-block bg-chocolate text-linen text-[10px] tracking-[0.18em] uppercase px-2 py-1 mb-2">Dress code</span>
                    <p className="font-serifit italic text-lg normal-case">Whatever you wore on your first day.</p>
                  </div>
                </div>
                <p className="font-serifit italic text-tangelo text-lg mt-8">Three years. The people who took the first chances.</p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-4">The night</p>
            </Reveal>
            <div className="border-t border-linen/25 mb-10">
              {schedule.map(([t, d], i) => (
                <Reveal key={t} delay={Math.min(i * 0.04, 0.24)} y={10}>
                  <div className="grid grid-cols-[70px_1fr] gap-6 py-3.5 border-b border-linen/25 items-baseline" data-testid={`dinner-slot-${i}`}>
                    <span className="font-mono text-xs text-botticelli">{t}</span>
                    <span className="font-mono text-sm md:text-base text-linen/90">{d}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-4">The conversation cards</p>
              <div className="space-y-2 mb-10">
                {cards.map((c, i) => (
                  <div key={c} className="border border-linen/40 p-4 font-serifit italic text-base md:text-lg text-linen/90" data-testid={`conversation-card-${i}`}>
                    <span className="font-mono not-italic text-[10px] tracking-[0.2em] uppercase text-tangelo block mb-1">Card 0{i + 1}</span>
                    "{c}"
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-4">Afterwards</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {postEvent.map((p) => (
                  <span key={p} className="font-mono text-[11px] tracking-[0.1em] uppercase border border-linen/40 px-3 py-2 text-linen/85">
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-display uppercase text-3xl sm:text-4xl text-linen leading-[0.95]">
                The dinner is one night. <span className="text-tangelo">The story isn't.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
