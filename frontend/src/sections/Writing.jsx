import { Reveal, SectionHead, Tag } from "../components/Shared";

const edits = [
  ["Cut the announcement theatre", "\u201cWe are excited to announce\u201d tells the reader nothing except that you're excited."],
  ["Moved the reader's problem to line one", "Nobody owes you their attention. Earn it in the first sentence."],
  ["One idea per sentence", "If a sentence is doing three jobs, it's doing none of them."],
];

export default function Writing() {
  return (
    <section id="writing" data-testid="writing-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="08" kicker="Writing + editorial judgement" dark>
        I don't just make content. <span className="text-tangelo">I edit it.</span>
      </SectionHead>

      <Reveal>
        <p className="font-mono text-[11px] text-linen/50 italic mb-12 max-w-2xl">
          Demonstration copy — written for this site to show the edit, not a real Conduct post.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-3 mb-12">
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

      <div className="grid md:grid-cols-12 gap-8 mb-24 md:mb-32">
        <Reveal className="md:col-span-4">
          <div className="border-l-4 border-tangelo pl-5">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-linen/50 mb-2">My question</p>
            <p className="font-serifit italic text-xl md:text-2xl text-linen">
              What is the person actually supposed to care about here?
            </p>
          </div>
        </Reveal>
        <div className="md:col-span-8 border-t border-linen/20">
          {edits.map(([k, v], i) => (
            <Reveal key={k} delay={i * 0.06} y={10}>
              <div className="grid md:grid-cols-[260px_1fr] gap-2 md:gap-6 py-4 border-b border-linen/20">
                <p className="font-mono text-xs tracking-[0.1em] uppercase text-tangelo">{k}</p>
                <p className="font-mono text-sm text-linen/85">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/50 mb-10">
          And three things I'd actually write
        </p>
      </Reveal>

      <div className="space-y-16 md:space-y-20 max-w-5xl">
        <Reveal>
          <article data-testid="writing-sample-explains" className="grid md:grid-cols-[120px_1fr] gap-6">
            <div>
              <p className="font-display text-5xl text-botticelli">01</p>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-linen/50 mt-2">Conduct Explains</p>
            </div>
            <div>
              <p className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl text-linen leading-tight mb-5">
                Why does changing one thing in enterprise software sometimes take months?
              </p>
              <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85">
                Because the "one thing" is never one thing. It's a form, wired to a workflow, owned by a team that
                restructured in 2019, feeding a report somebody's VP reads every Monday. Changing it means finding all
                of that first. The archaeology is the actual job — the software change is the easy part at the end.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article data-testid="writing-sample-treasure" className="grid md:grid-cols-[120px_1fr] gap-6">
            <div>
              <p className="font-display text-5xl text-botticelli">02</p>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-linen/50 mt-2">
                Founder / industry POV — from the OS
              </p>
            </div>
            <div className="border-l-4 border-tangelo pl-6">
              <p className="font-serifit italic text-xl md:text-2xl leading-relaxed text-linen">
                People have been digging for buried treasure for centuries. Most give up. Some spend years. A few get
                lucky. Enterprise companies do the same thing with their own systems. Paying consultants millions to
                excavate what's already inside their software. Months of digging. Occasionally finding something
                useful. Turns out the treasure was always there. It just needed the right tool.
              </p>
              <p className="font-mono text-xs text-tangelo mt-4 tracking-[0.1em]">48 hours. Yes, it's a promise.</p>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article data-testid="writing-sample-crime" className="grid md:grid-cols-[120px_1fr] gap-6">
            <div>
              <p className="font-display text-5xl text-botticelli">03</p>
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-linen/50 mt-2">Corporate Crime Scenes</p>
            </div>
            <div className="border-2 border-linen/40 bg-linen text-chocolate p-6 md:p-8">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-2">Case file #001</p>
              <p className="font-display uppercase text-2xl sm:text-3xl mb-6">
                The spreadsheet nobody remembers creating.
              </p>
              <div className="space-y-2 font-mono text-xs md:text-sm text-chocolate/90">
                <p><span className="text-chocolate/50 uppercase tracking-[0.14em]">Victim —</span> the quarterly forecast</p>
                <p><span className="text-chocolate/50 uppercase tracking-[0.14em]">Weapon —</span> FINAL_v7(1)_USE_THIS_ONE.xlsx</p>
                <p><span className="text-chocolate/50 uppercase tracking-[0.14em]">Suspects —</span> everyone who has ever "just tweaked it"</p>
                <p><span className="text-chocolate/50 uppercase tracking-[0.14em]">Motive —</span> a meeting that should have been an email</p>
                <p><span className="text-chocolate/50 uppercase tracking-[0.14em]">Status —</span> still open. It gets updated every Friday. Nobody knows by whom.</p>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <p className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-linen leading-[0.95]">
            Enterprise technology can be serious <span className="text-tangelo">without being boring.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
