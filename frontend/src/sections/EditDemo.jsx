import { Reveal, SectionHead } from "../components/Shared";

export default function EditDemo() {
  return (
    <section id="edit" data-testid="edit-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="10" kicker="Writing + editorial judgement" dark>
        I don't just make content. <span className="text-tangelo">I edit it.</span>
      </SectionHead>

      <Reveal>
        <p className="font-mono text-[11px] text-linen/50 italic mb-12 max-w-2xl">
          Demonstration copy — written for this site to show the edit, not a real Conduct post.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-3 mb-10">
        <Reveal>
          <div className="border-2 border-linen/30 p-6 md:p-8 h-full" data-testid="edit-before">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-4">Before — the draft</p>
            <p className="font-mono text-sm leading-relaxed text-linen/60">
              "We are excited to announce that our new process documentation capability empowers enterprises to unlock
              greater visibility into their SAP landscapes, driving efficiency, alignment and transformation across
              complex system environments."
            </p>
            <p className="font-mono text-[11px] text-tangelo mt-5">42 words. Zero of them survive.</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="bg-linen text-chocolate p-6 md:p-8 h-full spotlight" data-testid="edit-after">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-4">After — the ship</p>
            <p className="font-serifit italic text-xl md:text-2xl leading-snug">
              The way your company actually works lives inside your SAP system — and nowhere else. This writes it down.
            </p>
            <p className="font-mono text-[11px] text-chocolate/60 mt-5">22 words. One idea. A reason to keep reading.</p>
          </div>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <Reveal className="md:col-span-5">
          <div className="border-l-4 border-tangelo pl-5">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-linen/50 mb-2">My question</p>
            <p className="font-serifit italic text-xl md:text-2xl text-linen">
              What is the person actually supposed to care about?
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-7">
          <p className="font-mono text-sm text-linen/85">
            <span className="text-tangelo uppercase tracking-[0.14em] text-xs block mb-2">Why the edit works</span>
            Specific problem first. Product second. Implication third.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
