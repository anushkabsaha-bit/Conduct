import { Reveal, SectionHead } from "../components/Shared";

const quad = [
  { who: "Engineer", q: "What did we build?", tone: "bg-linen text-ink" },
  { who: "Product", q: "Why does it matter?", tone: "bg-tangelo text-linen" },
  { who: "Customer", q: "What changed?", tone: "bg-botticelli text-ink" },
  { who: "Communications", q: "Can someone understand why this is interesting in 30 seconds?", tone: "border-2 border-linen/60 text-linen" },
];

const questions = [
  "What changed?",
  "What was difficult before?",
  "What's technically interesting?",
  "What would an engineer be proud of?",
  "What would a customer actually care about?",
  "What might people misunderstand?",
  "What's the bit nobody outside this room knows yet?",
  "What's the one sentence someone should remember?",
];

const outputs = [
  "Product explainer",
  "Customer story",
  "Engineer POV",
  "Founder POV",
  "60–90 second video",
  "Technical deep dive",
  "LinkedIn story",
  "White paper",
  "Sales enablement",
  "Event talk",
  "Customer advocacy",
];

const audiences = [
  { who: "Engineer", wants: "How does it work?" },
  { who: "CIO", wants: "Why does this matter?" },
  { who: "Customer", wants: "What changed?" },
  { who: "Candidate", wants: "What kind of people get to build this?" },
  { who: "General tech audience", wants: "Why is enterprise software so weird?" },
];

export default function ProductComms() {
  return (
    <section id="product-comms" data-testid="product-comms-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="07" kicker="Product × communications" dark>
        I'd want to be <span className="text-tangelo">very close to the product.</span>
      </SectionHead>

      <Reveal>
        <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 max-w-2xl mb-12">
          I don't want comms sitting at the end of the product process waiting for an announcement. I want to understand
          what is being built while it is being built.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
        {quad.map((q, i) => (
          <Reveal key={q.who} delay={i * 0.07}>
            <div className={`p-6 h-full ${q.tone}`} data-testid={`product-quad-${q.who.toLowerCase()}`}>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-60 mb-3">{q.who}</p>
              <p className="font-display uppercase text-xl md:text-2xl leading-tight">{q.q}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid md:grid-cols-12 gap-10 mb-14">
        <div className="md:col-span-6">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/50 mb-4">
              The questions I'd be asking in the room
            </p>
          </Reveal>
          <div className="space-y-0 border-t border-linen/20">
            {questions.map((q, i) => (
              <Reveal key={q} delay={Math.min(i * 0.04, 0.3)} y={10}>
                <p className="font-mono text-sm md:text-base text-linen/90 py-3 border-b border-linen/20">
                  <span className="text-tangelo mr-3">Q{i + 1}</span>
                  {q}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="md:col-span-6">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/50 mb-4">What comes out</p>
          </Reveal>
          <div className="flex flex-wrap gap-2">
            {outputs.map((o) => (
              <span
                key={o}
                className="font-mono text-[11px] md:text-xs tracking-[0.1em] uppercase border border-linen/35 px-3 py-2 text-linen/85 hover:bg-tangelo hover:text-linen hover:border-tangelo transition-colors cursor-default"
              >
                {o}
              </span>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-linen leading-[0.95] mt-12">
              Comms isn't distribution at the end. <span className="text-tangelo">It's product storytelling.</span>
            </p>
          </Reveal>
        </div>
      </div>

      <div id="content-engine" data-testid="content-engine-section" className="pt-16 md:pt-24 border-t border-linen/20">
        <SectionHead no="08" kicker="Content + distribution" dark>
          One story should not <span className="text-tangelo">die as one post.</span>
        </SectionHead>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <div className="border-l-2 border-tangelo pl-5 space-y-2 font-mono text-xs md:text-sm text-linen/85">
                {[
                  "Customer story",
                  "Founder POV",
                  "Engineer POV",
                  "Video",
                  "LinkedIn",
                  "Technical deep dive",
                  "Website",
                  "Substack / Medium",
                  "Sales asset",
                  "Event",
                  "Recruiting",
                  "Customer advocacy",
                ].map((s, i) => (
                  <p key={s}>
                    <span className="text-tangelo">{String(i + 1).padStart(2, "0")}</span> — {s}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-serifit italic text-xl md:text-2xl text-linen mb-8">
                I would not copy-paste the same thing everywhere. Different audiences need different versions of the
                same truth.
              </p>
            </Reveal>
            <div className="space-y-3">
              {audiences.map((a, i) => (
                <Reveal key={a.who} delay={i * 0.06}>
                  <div className="flex items-baseline gap-4 border-b border-linen/20 pb-3" data-testid={`audience-row-${i}`}>
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-tangelo w-36 shrink-0">
                      {a.who}
                    </span>
                    <span className="font-mono text-sm text-linen/85">{a.wants}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
