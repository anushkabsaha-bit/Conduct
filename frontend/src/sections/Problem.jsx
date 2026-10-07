import { Reveal, SectionHead } from "../components/Shared";

const steps = [
  "Understand what Product and Engineering are actually building.",
  "Understand what changed for the customer.",
  "Find the interesting story inside it.",
  "Decide who needs to hear it.",
  "Decide how it should be told.",
  "Decide whether it is worth shipping at all.",
];

export default function Problem() {
  return (
    <section id="problem" data-testid="problem-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-32">
      <SectionHead no="05" kicker="What comms means here" dark>
        The actual job<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="max-w-2xl">
        <Reveal>
          <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 mb-10">
            Conduct is building something technically complex. Communications can't simply mean making more content.
            The way I think about it, someone has to:
          </p>
        </Reveal>

        <div className="border-t border-linen/20 mb-10">
          {steps.map((s, i) => (
            <Reveal key={s} delay={Math.min(i * 0.05, 0.3)} y={10}>
              <p className="font-mono text-sm md:text-base text-linen/90 py-4 border-b border-linen/20" data-testid={`problem-step-${i}`}>
                <span className="text-tangelo mr-4">{String(i + 1).padStart(2, "0")}</span>
                {s}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-serifit italic text-xl md:text-2xl text-linen">
            None of those steps is optional, and each one can quietly ruin the next.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
