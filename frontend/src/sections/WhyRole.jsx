import { Reveal, SectionHead } from "../components/Shared";

const threeThings = [
  {
    k: "Communication",
    d: "Taking something complicated, finding the interesting idea inside it, and making someone actually care.",
  },
  {
    k: "Community",
    d: "Understanding why people come back, participate, contribute and feel like they belong.",
  },
  {
    k: "Movement",
    d: 'Taking an idea from "someone should do something about this" to "I actually built it."',
  },
];

const gravitation = [
  ["Writing", "I like finding the sentence that makes the idea click."],
  ["Product", "I want to understand what is actually being built before deciding how to talk about it."],
  ["Community", "I've built audiences and spaces where people wanted to come back."],
  ["Growth", "I think about why something is working, why it isn't and what to test next."],
  ["Operations", "I know how to turn an idea into an actual system and get it moving."],
  ["Creative", "I care about how something feels, not just whether it technically communicates the information."],
];

const roleMe = [
  ["Translate technical ideas.", "I like figuring out what the interesting human idea is inside something technically complicated."],
  ["Work with founders.", "I like turning a person's actual point of view into something people want to hear."],
  ["Work closely with product and engineering.", "I want to understand what was built before deciding what the story should be."],
  ["Build community.", "I've built a 70K-reader audience and later created a supper club because I wanted to create spaces where people came back."],
  ["Build content and distribution.", "I think about the story, the audience, the format and where it should live."],
  ["Move quickly and execute.", "I tend to build the thing rather than write a five-page proposal about building it."],
  ["Build the Conduct brand from scratch.", "That's exactly the part I find exciting."],
];

const moves = [
  ["A good story", "can move a customer."],
  ["A good product story", "can move understanding."],
  ["A good community", "can move participation."],
  ["A good campaign", "can move attention."],
  ["A good internal message", "can move a team."],
  ["A good founder story", "can move belief."],
];

const overlap = ["Communication", "Community", "Product", "Growth", "Operations", "Creative"];

export default function WhyRole() {
  return (
    <>
      <section id="why" data-testid="why-role-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="WHY" kicker="The honest bit">
          Why this role<span className="text-tangelo">?</span>
        </SectionHead>

        <Reveal>
          <p className="font-serifit italic text-2xl md:text-3xl leading-snug text-chocolate max-w-3xl mb-16">
            I've realised I'm most interested in the space between{" "}
            <span className="text-tangelo not-italic font-display uppercase">something being built</span> and{" "}
            <span className="text-tangelo not-italic font-display uppercase">people understanding why it matters.</span>
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-3 mb-14">
          {threeThings.map((t, i) => (
            <Reveal key={t.k} delay={i * 0.08}>
              <div className="border-2 border-chocolate p-6 md:p-8 h-full" data-testid={`why-pillar-${t.k.toLowerCase()}`}>
                <p className="font-display uppercase text-2xl md:text-3xl text-tangelo mb-4">{t.k}</p>
                <p className="font-mono text-sm leading-relaxed text-chocolate/90">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-mono text-sm md:text-base text-chocolate/85 max-w-xl mb-24 md:mb-32">
            That combination is basically what pulled me towards this role.
          </p>
        </Reveal>

        <div id="why-conduct" className="mb-24 md:mb-32">
          <SectionHead no="WHY" kicker="Why Conduct">
            Conduct has been <span className="text-tangelo">the company for me.</span>
          </SectionHead>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-6">
              <Reveal>
                <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90 max-w-xl">
                  I came across Conduct when it was still a much smaller team. What caught me wasn't just the
                  technology. It was the problem. I could see you were trying to make something incredibly complicated
                  understandable and actionable. And I kept thinking:{" "}
                  <span className="text-tangelo font-bold">I want to be part of that.</span>
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90 max-w-xl">
                  As Conduct grew, I kept coming back to the same question: if I were there, what would I do with all of
                  this? That is what eventually led to the Growth Operating System.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={0.12}>
                <div className="border-l-4 border-tangelo pl-6">
                  <p className="font-display uppercase text-3xl md:text-4xl text-chocolate leading-[0.95] mb-3">
                    I wasn't given a brief. I was curious.
                  </p>
                  <p className="font-serifit italic text-2xl md:text-3xl text-tangelo">So I built one.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div id="why-title">
          <SectionHead no="WHY" kicker="About the title">
            I haven't had the title. <span className="text-tangelo">I've been doing the work.</span>
          </SectionHead>
          <Reveal>
            <p className="font-mono text-sm md:text-base text-chocolate/85 max-w-2xl mb-10">
              I haven't spent the last few years with "Communications Strategist" written neatly on my CV. But when I
              look at what I naturally gravitate towards, the pattern is pretty obvious.
            </p>
          </Reveal>
          <div className="border-t border-chocolate/30 mb-10">
            {gravitation.map(([k, v], i) => (
              <Reveal key={k} delay={Math.min(i * 0.04, 0.24)} y={10}>
                <div className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-8 py-4 border-b border-chocolate/30 items-baseline" data-testid={`gravitation-${k.toLowerCase()}`}>
                  <span className="font-display uppercase text-xl md:text-2xl text-chocolate">{k}</span>
                  <span className="font-mono text-sm text-chocolate/85">{v}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="font-serifit italic text-xl md:text-2xl text-chocolate">
              That combination is why this role makes sense to me.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="why-fit" data-testid="role-fit-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="WHY" kicker="The role, translated" dark>
          The job description, <span className="text-botticelli">in things I already care about.</span>
        </SectionHead>

        <div className="border-t border-linen/25 mb-24 md:mb-32">
          {roleMe.map(([role, me], i) => (
            <Reveal key={role} delay={Math.min(i * 0.04, 0.28)} y={10}>
              <div className="grid md:grid-cols-2 border-b border-linen/25" data-testid={`role-me-${i}`}>
                <div className="py-5 md:pr-10 md:border-r border-linen/25">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli mb-1.5">The role</p>
                  <p className="font-mono text-sm md:text-base text-linen/90">{role}</p>
                </div>
                <div className="py-5 md:pl-10">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-tangelo mb-1.5">Me</p>
                  <p className="font-mono text-sm md:text-base text-linen/90">{me}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mb-24 md:mb-32">
          <Reveal>
            <p className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-linen leading-[0.98] max-w-5xl mb-12">
              I think I'm fascinated by roles where communication is not just about communicating.{" "}
              <span className="text-tangelo">It is about making things move.</span>
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
            {moves.map(([a, b], i) => (
              <Reveal key={a} delay={Math.min(i * 0.05, 0.25)}>
                <p className="font-mono text-sm text-linen/90 border border-linen/30 px-5 py-4">
                  <span className="text-botticelli">{a}</span> {b}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="font-serifit italic text-xl md:text-2xl text-linen">That is the kind of work I want to do.</p>
          </Reveal>
        </div>

        <div data-testid="overlap-section">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-8">Where I sit</p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex flex-wrap items-center justify-center gap-3 border-2 border-linen/30 p-8 md:p-14 mb-8">
              {overlap.slice(0, 3).map((o) => (
                <span key={o} className="font-display uppercase text-xl md:text-3xl border-2 border-linen/50 text-linen px-5 py-3">
                  {o}
                </span>
              ))}
              <span className="font-display uppercase text-2xl md:text-4xl bg-tangelo text-linen px-6 py-4" data-testid="overlap-anushka">
                Anushka
              </span>
              {overlap.slice(3).map((o) => (
                <span key={o} className="font-display uppercase text-xl md:text-3xl border-2 border-linen/50 text-linen px-5 py-3">
                  {o}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-mono text-sm md:text-base text-linen/85 max-w-2xl mx-auto text-center">
              This is the bit I find interesting. Not any one of these in isolation —{" "}
              <span className="text-tangelo">the space where they make each other work.</span>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
