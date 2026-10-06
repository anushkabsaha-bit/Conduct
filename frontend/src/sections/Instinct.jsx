import { Reveal, SectionHead } from "../components/Shared";

const situations = [
  {
    problem: "People don't immediately understand the product.",
    instinct: "Don't just post more. Find out what they actually understand.",
    test: "Black Box.",
    learn: "Where does comprehension break?",
    next: "Change the story, not just the distribution.",
  },
  {
    problem: "A good product announcement becomes one LinkedIn post.",
    instinct: "Why does the story die there?",
    test: "Turn one product story into multiple audience-specific outputs.",
    learn: "Which entry points actually land?",
    next: "Build the loop, not the post.",
  },
  {
    problem: "An idea sounds clever internally.",
    instinct: "Would anyone outside the room care?",
    test: "Pressure-test it with DIANA.",
    learn: "What survives being challenged?",
    next: "Ship it, change it, or kill it without ceremony.",
  },
];

const loopSteps = ["Observe", "Analyse", "Find", "Create", "Challenge", "Execute", "Measure", "Learn", "Repeat"];

const rows = [
  ["Problem", "problem", "text-tangelo"],
  ["My instinct", "instinct", "text-chocolate"],
  ["Test", "test", "text-chocolate"],
  ["Learn", "learn", "text-chocolate"],
  ["Next", "next", "text-chocolate"],
];

export default function Instinct() {
  return (
    <section id="instinct" data-testid="instinct-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="03" kicker="My natural response to problems">
        If I were there, <span className="text-tangelo">what would I do differently?</span>
      </SectionHead>

      <Reveal>
        <p className="font-mono text-sm md:text-base text-chocolate/85 max-w-2xl mb-14">
          I don't just critique things from the sidelines. I put myself in the situation.
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-3 gap-3 mb-20 md:mb-28">
        {situations.map((s, i) => (
          <Reveal key={s.problem} delay={i * 0.08}>
            <div className="border-2 border-chocolate h-full flex flex-col" data-testid={`instinct-card-${i}`}>
              {rows.map(([label, key, tone]) => (
                <div key={label} className="flex-1 border-b border-chocolate/25 last:border-b-0 p-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-chocolate/50 mb-1.5">{label}</p>
                  <p className={`font-mono text-sm leading-relaxed ${tone}`}>{s[key]}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-chocolate/60 mb-6">
          Which is the same loop, every time
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-display uppercase text-xl md:text-3xl text-chocolate" data-testid="operating-loop">
          {loopSteps.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              <span className={i === loopSteps.length - 1 ? "text-tangelo" : ""}>{s}</span>
              {i < loopSteps.length - 1 && <span className="text-tangelo text-base md:text-xl" aria-hidden="true">→</span>}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
