import { Reveal, SectionHead, Tag } from "../components/Shared";

const stats = [
  { n: "38", l: "Conduct LinkedIn posts analysed" },
  { n: "7,079", l: "likes" },
  { n: "1,045", l: "comments" },
  { n: "251", l: "reposts" },
];

const blackBoxQs = [
  "What does Conduct do?",
  "Who is it for?",
  "What problem does it solve?",
  "Why does it matter?",
  "What do you remember?",
  "What confused you?",
  "What made you curious?",
];

const ideas = [
  "Corporate Crime Scenes",
  "Black Box",
  "SAP Score",
  "Founder / Conduct voice",
  "LinkedIn video",
  "Substack / Medium",
  "Short-form video",
  "Customer → Product → Story",
  "Opportunity radar",
  "Repeatable content loop",
];

export default function GrowthOS() {
  return (
    <section id="growth-os" data-testid="growth-os-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="02" kicker="The Conduct work" dark>
        I didn't wait <span className="text-botticelli">for a comms brief.</span>
      </SectionHead>

      <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 mb-6 max-w-2xl">
              I wasn't waiting for someone to give me a brief. I was curious about Conduct. So I started investigating —
              every Conduct LinkedIn post from April to 28 August 2026 — and asking the question I'd ask if I were
              already on the team:{" "}
              <span className="text-tangelo font-bold">do people actually understand Conduct?</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="https://conduct-growth-os.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="growth-os-live-link"
              className="group inline-flex items-center gap-3 border border-linen/50 font-mono text-xs md:text-sm tracking-[0.18em] uppercase px-6 py-4 hover:bg-tangelo hover:border-tangelo transition-colors"
            >
              Read the full OS — it's live
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-45">↗</span>
            </a>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="border-l-4 border-tangelo pl-5 mt-10 max-w-xl">
              <p className="font-mono text-sm leading-relaxed text-linen/85 mb-4">
                I'd been interested in Conduct for a long time. When I saw the role, I became curious about what I would
                actually do if I were already on the team. So I built it. That is probably the best explanation of how I
                work.
              </p>
              <p className="font-serifit italic text-xl md:text-2xl text-botticelli">
                I don't always wait for the brief. Sometimes the question is enough.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={0.12}>
            <div className="border border-linen/30 p-6" data-testid="outsider-test">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-botticelli mb-4">The outsider test</p>
              <p className="font-display text-6xl md:text-7xl text-tangelo leading-none mb-1">10</p>
              <p className="font-mono text-xs text-linen/70 mb-4">people who didn't know Conduct</p>
              <p className="font-display text-6xl md:text-7xl text-linen leading-none mb-1">5</p>
              <p className="font-mono text-xs text-linen/70 mb-4">posts, on average, before they could explain what Conduct does</p>
              <p className="font-mono text-[11px] text-linen/50 italic">
                An observation, not a verdict — a hypothesis worth testing properly.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div data-testid="growth-os-stats" className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-linen/25 mb-6">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.06} className="border-r border-b border-linen/25">
            <div className="p-6 md:p-8">
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-tangelo leading-none">{s.n}</p>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-linen/70 mt-3">{s.l}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="font-mono text-xs text-linen/60 mb-16 md:mb-24">≈ 8,375 total interactions</p>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
        <div className="md:col-span-6">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-botticelli mb-4">The Black Box</p>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 mb-6">
              Give someone Conduct material for ten minutes. No prep, no briefing. Then ask:
            </p>
          </Reveal>
          <div className="space-y-0 border-t border-linen/25">
            {blackBoxQs.map((q, i) => (
              <Reveal key={q} delay={Math.min(i * 0.04, 0.28)} y={10}>
                <p className="font-mono text-sm text-linen/90 py-3 border-b border-linen/25">
                  <span className="text-tangelo mr-3">Q{i + 1}</span>
                  {q}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col justify-between">
          <Reveal delay={0.1}>
            <div className="space-y-0 mb-10">
              {["Understand", "Remember", "Care", "Act"].map((s, i) => (
                <div key={s} className="flex items-center gap-4 py-3 border-b border-linen/25">
                  <span className="font-mono text-xs text-tangelo w-6">0{i + 1}</span>
                  <span className="font-display uppercase text-2xl md:text-3xl text-linen">{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="font-serifit italic text-xl md:text-2xl leading-snug text-botticelli border-l-4 border-tangelo pl-5">
              Maybe the opportunity isn't simply getting more attention. Maybe it's making what Conduct already does
              easier to understand, remember and talk about.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-5">
          Ideas inside the OS — each one built to be tested, not admired
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex flex-wrap gap-2" data-testid="growth-os-ideas">
          {ideas.map((idea) => (
            <span
              key={idea}
              className="font-mono text-[11px] md:text-xs tracking-[0.1em] uppercase border border-linen/40 px-3 py-2 text-linen/85 hover:bg-tangelo hover:border-tangelo transition-colors cursor-default"
            >
              {idea}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-14">
        <div className="flex flex-wrap gap-2">
          <Tag>Observation</Tag>
          <Tag tone="botticelli">Hypothesis</Tag>
          <Tag>Test</Tag>
          <Tag tone="botticelli">Learn</Tag>
        </div>
      </Reveal>
    </section>
  );
}
