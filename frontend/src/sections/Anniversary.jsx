import { Reveal, SectionHead, Tag } from "../components/Shared";

const testQuestions = [
  "Why did you choose Conduct?",
  "What did Conduct look like when you joined?",
  "What did you think it could become?",
  "What surprised you?",
  "What did you see that others didn't?",
];

const measures = ["Watch time", "Completion", "Comments", "Shares", "Recognition", "Qualitative reaction"];

const firstsGroups = ["The Firsts", "The Believers", "The Builders", "The Customers", "The people who opened doors"];

const firstsQuestions = [
  "Why did you choose Conduct?",
  "What did Conduct look like when you arrived?",
  "What did you think it could become?",
  "What did you see that others didn't?",
  "What surprised you?",
  "What do you think it can become now?",
];

const schedule = [
  ["7:00", "Arrival"],
  ["7:30", "Drinks + food"],
  ["8:00", "The anniversary film"],
  ["8:10", "Conversation cards"],
  ["8:45", "The \"one thing I didn't know\" wall"],
  ["Late", "Dinner, drinks, photos, conversations"],
];

const postEvent = [
  "Anniversary film",
  "Firsts stories",
  "LinkedIn carousel",
  "Website archive",
  "Founder posts",
  "Employer brand",
  "Recruiting",
  "Customer storytelling",
];

export default function Anniversary() {
  return (
    <>
      <section id="anniversary" data-testid="anniversary-section" className="bg-linen text-chocolate border-y border-chocolate/25 px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="16" kicker="One small experiment">
          One small experiment for <span className="text-tangelo">Conduct's third anniversary.</span>
        </SectionHead>

        <Reveal>
          <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90 max-w-2xl mb-14">
            Conduct turns three on <span className="text-tangelo font-bold">8 January 2027</span>. I wouldn't walk in
            assuming I know what the anniversary should be. I'd test the story first.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-3 mb-3">
          <Reveal>
            <div className="border-2 border-chocolate bg-linen p-6 md:p-8 h-full" data-testid="anniversary-hypothesis">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">Hypothesis</p>
              <p className="font-serifit italic text-xl md:text-2xl leading-snug text-chocolate">
                The most interesting anniversary story isn't that Conduct is three. It's the people who took the first
                chances.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-2 border-chocolate bg-linen p-6 md:p-8 h-full" data-testid="anniversary-test">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">The test</p>
              <p className="font-mono text-sm leading-relaxed text-chocolate/90 mb-4">
                Interview 5–8 early Conduct people. Film simply. 30–60 seconds each. Cut one rough montage. Ask:
              </p>
              <ul className="space-y-1.5 font-mono text-xs md:text-sm text-chocolate/85">
                {testQuestions.map((q) => (
                  <li key={q}><span className="text-tangelo mr-2">→</span>{q}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-14">
          <Reveal delay={0.1}>
            <div className="border-2 border-chocolate bg-linen p-6 md:p-8 h-full" data-testid="anniversary-measure">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">Then measure</p>
              <div className="flex flex-wrap gap-2">
                {measures.map((m) => (
                  <Tag key={m} tone="outline">{m}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="border-2 border-chocolate bg-chocolate text-linen p-6 md:p-8 h-full" data-testid="anniversary-decision">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-4">The decision</p>
              <p className="font-display uppercase text-2xl md:text-3xl leading-tight">
                If it works → <span className="text-tangelo">scale it.</span><br />
                If it doesn't → <span className="text-botticelli">change it or kill it.</span>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl text-chocolate">
            I test before <span className="text-tangelo">I spend.</span>
          </p>
        </Reveal>
      </section>

      <section id="firsts" data-testid="firsts-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="17" kicker="If the experiment works">
          Meet the Conduct Firsts<span className="text-tangelo">.</span>
        </SectionHead>

        <Reveal>
          <p className="font-serifit italic text-xl md:text-2xl text-chocolate max-w-2xl mb-10">
            Three years. The people who took the first chances.
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-2 mb-14">
          {firstsGroups.map((g) => (
            <span
              key={g}
              className="font-display uppercase text-lg md:text-2xl border-2 border-chocolate px-4 py-2 text-chocolate hover:bg-tangelo hover:border-tangelo hover:text-linen transition-colors cursor-default"
            >
              {g}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 border-t border-chocolate/30">
            {firstsQuestions.map((q, i) => (
              <Reveal key={q} delay={Math.min(i * 0.04, 0.24)} y={10}>
                <p className="font-mono text-sm md:text-base text-chocolate/90 py-4 border-b border-chocolate/30">
                  <span className="text-tangelo mr-3">Q{i + 1}</span>
                  {q}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="md:col-span-5">
            <Reveal>
              <div className="border-2 border-dashed border-chocolate/50 p-6 md:p-8" data-testid="firsts-placeholder">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-3">Honest placeholder</p>
                <p className="font-mono text-sm leading-relaxed text-chocolate/85">
                  The real faces, names and words go here — actual Conduct people, interviewed with permission. I'm not
                  going to invent quotes for people I haven't met yet. That's rather the point of the experiment.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="dinner" data-testid="dinner-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="18" kicker="The execution" dark>
          The anniversary dinner<span className="text-tangelo">.</span>
        </SectionHead>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-6">
            <Reveal>
              <div
                data-testid="dinner-invitation-card"
                className="spotlight bg-linen text-chocolate border-2 border-chocolate p-6 md:p-10 rotate-[-1deg]"
              >
                <p className="font-mono text-[11px] md:text-xs tracking-[0.14em] uppercase mb-6 max-w-sm">
                  You took a chance on us. Come and see what it turned into.
                </p>
                <span className="inline-block bg-tangelo text-linen font-mono text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 mb-5">
                  Meet the Conduct Firsts
                </span>
                <p className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] border-y-2 border-chocolate py-5 mb-6">
                  8 January 2027
                </p>
                <div className="space-y-5 font-mono text-sm">
                  <div>
                    <span className="inline-block bg-chocolate text-linen text-[10px] tracking-[0.18em] uppercase px-2 py-1 mb-2">Time</span>
                    <p className="tracking-[0.08em]">7:00 PM onwards</p>
                  </div>
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
            <div className="border-t border-linen/25 mb-12">
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
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-4">Post event</p>
              <div className="flex flex-wrap gap-2 mb-12">
                {postEvent.map((p) => (
                  <span key={p} className="font-mono text-[11px] tracking-[0.1em] uppercase border border-linen/40 px-3 py-2 text-linen/85">
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-linen leading-[0.95]">
                The dinner is one night. <span className="text-tangelo">The story isn't.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
