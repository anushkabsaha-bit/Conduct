import { Reveal, SectionHead, Tag } from "../components/Shared";

const communityWho = ["Developers", "Enterprise practitioners", "Customers", "Partners", "AI builders", "Future talent"];
const communityFormats = ["Meetups", "Hackathons", "Technical sessions", "Small dinners", "Founder conversations", "Partner events", "Community content"];

const employerAudiences = [
  ["CIO", "why it matters"],
  ["Engineer", "what you'd get to build"],
  ["Customer", "what changed"],
  ["Partner", "why we're credible"],
  ["Candidate", "who gets to build this"],
  ["Employee", "what we're part of"],
  ["Investor", "where this goes"],
];

const campaignNodes = [
  ["Product", "new capability"],
  ["Communications", "the narrative"],
  ["Sales", "proof + enablement"],
  ["Partnerships", "joint distribution"],
  ["Recruiting", "the employer story"],
  ["Community", "conversation + event"],
];

export default function Proof() {
  return (
    <>
      <section id="writing" data-testid="writing-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="11" kicker="Writing + creative taste">
          I could say I'm a strong writer. <span className="text-tangelo">I'd rather show you.</span>
        </SectionHead>

        <div className="space-y-16 md:space-y-24 max-w-5xl">
          <Reveal>
            <article data-testid="writing-sample-explains" className="grid md:grid-cols-[120px_1fr] gap-6">
              <div>
                <p className="font-display text-5xl text-botticelli">01</p>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-chocolate/60 mt-2">Conduct Explains</p>
              </div>
              <div>
                <p className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl text-chocolate leading-tight mb-5">
                  Why does changing one thing in enterprise software sometimes take months?
                </p>
                <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
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
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-chocolate/60 mt-2">
                  Founder / industry POV — from the OS
                </p>
              </div>
              <div className="border-l-4 border-tangelo pl-6">
                <p className="font-serifit italic text-xl md:text-2xl leading-relaxed text-chocolate">
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
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-chocolate/60 mt-2">Corporate Crime Scenes</p>
              </div>
              <div className="border-2 border-chocolate p-6 md:p-8 bg-linen">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-2">Case file #001</p>
                <p className="font-display uppercase text-2xl sm:text-3xl text-chocolate mb-6">
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
            <p className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-chocolate leading-[0.95]">
              Enterprise technology can be serious <span className="text-tangelo">without being boring.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section id="community" data-testid="community-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="12" kicker="Community" dark>
          Audience ≠ community<span className="text-tangelo">.</span>
        </SectionHead>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6 space-y-8">
            <Reveal>
              <div className="grid grid-cols-2 border-2 border-linen/50">
                <div className="p-6 border-r border-linen/25">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-linen/50 mb-2">Audience</p>
                  <p className="font-display uppercase text-2xl md:text-3xl text-linen">People see you.</p>
                </div>
                <div className="p-6 bg-tangelo text-linen">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-linen/70 mb-2">Community</p>
                  <p className="font-display uppercase text-2xl md:text-3xl">People come back.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85">
                Wattpad taught me what makes readers return. The supper club taught me what makes people show up in
                person. Conduct would be the same question at company scale —{" "}
                <span className="text-tangelo font-bold">give people a reason to come back.</span>
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="flex flex-wrap gap-2">
                {communityWho.map((w) => (
                  <Tag key={w} tone="outline-linen">{w}</Tag>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/50 mb-4">Formats I'd reach for</p>
            </Reveal>
            <div className="border-t border-linen/20">
              {communityFormats.map((f, i) => (
                <Reveal key={f} delay={i * 0.05} y={10}>
                  <p className="font-display uppercase text-xl md:text-2xl text-linen py-3 border-b border-linen/20 hover:text-tangelo transition-colors">
                    <span className="font-mono text-xs text-tangelo mr-4">{String(i + 1).padStart(2, "0")}</span>
                    {f}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="founder" data-testid="founder-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="13" kicker="Founder + leadership comms">
          Founders have the ideas. <span className="text-tangelo">I'd help land them.</span>
        </SectionHead>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="border-t border-chocolate/30">
              {[
                ["Founder has", "an idea, an opinion, an observation — usually at an inconvenient moment."],
                ["I ask", "is there something here? What is it actually about?"],
                ["I help", "find the argument underneath the thought."],
                ["Then", "draft, edit, challenge, adapt. Their voice, made legible — not my voice in their mouth."],
              ].map(([k, v], i) => (
                <Reveal key={k} delay={i * 0.06}>
                  <div className="grid grid-cols-[130px_1fr] gap-6 py-5 border-b border-chocolate/30 items-baseline">
                    <span className="font-display uppercase text-lg md:text-xl text-tangelo">{k}</span>
                    <span className="font-mono text-sm md:text-base text-chocolate/90">{v}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-chocolate/60 mb-4">Output</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["LinkedIn", "Talk", "Keynote", "Interview", "Essay", "Video", "Internal message"].map((o) => (
                  <Tag key={o} tone="chocolate">{o}</Tag>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-serifit italic text-xl md:text-2xl text-chocolate border-l-4 border-tangelo pl-5">
                The same process works for all-hands, offsites and the messages leaders actually need to land.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="employer" data-testid="employer-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="14" kicker="Employer brand + internal comms" dark>
          The same company. Different audience. <span className="text-botticelli">Different story.</span>
        </SectionHead>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6 border-t border-linen/25">
            {employerAudiences.map(([who, story], i) => (
              <Reveal key={who} delay={Math.min(i * 0.04, 0.28)} y={10}>
                <div className="grid grid-cols-[130px_1fr] gap-6 py-4 border-b border-linen/25 items-baseline" data-testid={`employer-row-${who.toLowerCase()}`}>
                  <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-botticelli">{who}</span>
                  <span className="font-serifit italic text-lg md:text-xl text-linen">{story}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="md:col-span-6">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-4">Possible outputs</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {[
                  "Founder all-hands",
                  "Offsites",
                  "New joiner stories",
                  "Engineering culture",
                  "Employer brand film",
                  "Recruiting content",
                  "Candidate materials",
                  "Employee POV",
                  "Behind-the-scenes building stories",
                ].map((o) => (
                  <span key={o} className="font-mono text-[11px] tracking-[0.1em] uppercase border border-linen/40 px-3 py-2 text-linen/85">
                    {o}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl text-linen leading-[0.95]">
                Communications isn't just what Conduct says publicly.{" "}
                <span className="text-tangelo">It's how Conduct makes people understand what it is.</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="campaigns" data-testid="campaigns-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="15" kicker="Integrated campaigns">
          One company story. Multiple teams. <span className="text-tangelo">One coherent narrative.</span>
        </SectionHead>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {campaignNodes.map(([team, role], i) => (
            <Reveal key={team} delay={i * 0.06}>
              <div className="border-2 border-chocolate p-6 hover:bg-tangelo hover:border-tangelo hover:text-linen transition-colors group" data-testid={`campaign-node-${team.toLowerCase()}`}>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-tangelo group-hover:text-linen/80 mb-2">{team}</p>
                <p className="font-display uppercase text-xl md:text-2xl leading-tight">{role}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="font-mono text-xs text-chocolate/60">
            A structure, not a real Conduct campaign — no invented launches here.
          </p>
        </Reveal>
      </section>
    </>
  );
}
