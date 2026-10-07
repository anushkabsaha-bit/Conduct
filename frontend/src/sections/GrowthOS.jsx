import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHead } from "../components/Shared";

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
  "Customer → Product → Story",
  "Opportunity radar",
  "Repeatable content loop",
];

export default function GrowthOS() {
  return (
    <section id="growth-os" data-testid="growth-os-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-32">
      <SectionHead no="04" kicker="The work sample">
        The Growth OS<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="max-w-2xl space-y-6 mb-14">
        <Reveal>
          <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
            The question I started with: do people actually understand Conduct? I wanted to know whether the problem was
            simply reach, or whether there was a comprehension problem underneath it. So I analysed every Conduct
            LinkedIn post from April to 28 August 2026 and built a slightly ridiculous Growth Operating System out of
            what I found.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <a
            href="https://conduct-growth-os.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="growth-os-live-link"
            className="group inline-flex items-center gap-3 bg-chocolate text-linen font-mono text-xs md:text-sm tracking-[0.18em] uppercase px-6 py-4 hover:bg-tangelo transition-colors"
          >
            Read the full OS
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
        </Reveal>
      </div>

      <div data-testid="growth-os-stats" className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-chocolate/30 mb-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.06} className="border-r border-b border-chocolate/30">
            <div className="p-6 md:p-8">
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-tangelo leading-none">{s.n}</p>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-chocolate/70 mt-3">{s.l}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="font-mono text-xs text-chocolate/60 mb-16 md:mb-20">Roughly 8,375 interactions in total.</p>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
        <div className="md:col-span-5">
          <Reveal>
            <div className="border-2 border-chocolate p-6 md:p-8" data-testid="outsider-test">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">The outsider test</p>
              <p className="font-mono text-sm leading-relaxed text-chocolate/90 mb-5">
                I showed Conduct to <span className="font-bold">10 people</span> who weren't familiar with the company.
                On average it took <span className="font-bold">five posts</span> before they could explain what Conduct
                does.
              </p>
              <p className="font-mono text-[11px] text-chocolate/60 italic">
                An observation, not a verdict. A hypothesis worth testing properly.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">
              Black Box · give someone Conduct material for ten minutes, then ask
            </p>
          </Reveal>
          <div className="border-t border-chocolate/30">
            {blackBoxQs.map((q, i) => (
              <Reveal key={q} delay={Math.min(i * 0.04, 0.28)} y={10}>
                <p className="font-mono text-sm text-chocolate/90 py-3 border-b border-chocolate/30">
                  <span className="text-tangelo mr-3">Q{i + 1}</span>
                  {q}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="font-mono text-xs text-chocolate/60 mt-5">
              Then score it: do they understand, remember, care, act?
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-chocolate/60 mb-5">
          What's inside the OS
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="flex flex-wrap gap-2" data-testid="growth-os-ideas">
          {ideas.map((idea) => (
            <span
              key={idea}
              className="font-mono text-[11px] md:text-xs tracking-[0.1em] uppercase border border-chocolate/50 px-3 py-2 text-chocolate/85 hover:bg-tangelo hover:text-linen hover:border-tangelo transition-colors cursor-default"
            >
              {idea}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
