import { Reveal, SectionHead } from "../components/Shared";

const pillars = [
  ["Communication", "I like finding the sentence that makes a complicated idea click."],
  ["Product", "I want to understand what was actually built before deciding what the story should be."],
  ["Community", "I've built audiences and spaces because I am fascinated by why people come back."],
  ["Growth", "I naturally ask what is working, what isn't, and what I'd test next."],
  ["Operations", "I like turning an idea into something that actually runs."],
  ["Creative", "I care whether something is memorable, not just whether it technically communicates."],
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
        <SectionHead no="03" kicker="Why this role">
          Why this role<span className="text-tangelo">?</span>
        </SectionHead>

        <Reveal>
          <p className="font-mono text-sm md:text-base text-chocolate/90 max-w-2xl mb-14">
            I haven't had "Communications Strategist" neatly printed on my CV. But I keep finding myself doing pieces of
            this work anyway.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
          {pillars.map(([k, v], i) => (
            <Reveal key={k} delay={Math.min(i * 0.05, 0.25)}>
              <div className="border-2 border-chocolate p-6 h-full" data-testid={`why-pillar-${k.toLowerCase()}`}>
                <p className="font-display uppercase text-xl md:text-2xl text-tangelo mb-3">{k}</p>
                <p className="font-mono text-sm leading-relaxed text-chocolate/90">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl text-chocolate leading-[0.98] max-w-5xl mb-8">
            I think I'm fascinated by the space between something being built and people actually{" "}
            <span className="text-tangelo">understanding why it matters.</span>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-mono text-sm md:text-base text-chocolate/85 max-w-2xl mb-6">
            That is what makes this role interesting to me.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="font-serifit italic text-xl md:text-2xl text-chocolate max-w-2xl mb-24 md:mb-32">
            I don't just want to communicate what Conduct builds. I want to understand it deeply enough to find the
            story inside it.
          </p>
        </Reveal>

        <div id="why-conduct" className="mb-24 md:mb-32">
          <SectionHead no="04" kicker="Why Conduct">
            Conduct has been <span className="text-tangelo">the company for me.</span>
          </SectionHead>
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-6">
              <Reveal>
                <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90 max-w-xl">
                  I came across Conduct when the team was still much smaller. What caught me wasn't just the technology.
                  It was the problem. Something incredibly complicated was being turned into something people could
                  actually understand and act on. And I kept thinking:{" "}
                  <span className="text-tangelo font-bold">I want to be part of that.</span>
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90 max-w-xl">
                  When the Growth Generalist role came up, I asked myself the same question I always ask when something
                  interests me: "If I were there, what would I do?" So I built the Growth Operating System.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90 max-w-xl">
                  This role made me ask the question again. Only this time the answer was: I want to work at the
                  intersection of product, communication, community and growth.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={0.14}>
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
          <SectionHead no="05" kicker="About the title">
            I haven't had the title. <span className="text-tangelo">I've been building towards the work.</span>
          </SectionHead>
          <Reveal>
            <p className="font-mono text-sm md:text-base text-chocolate/85 max-w-2xl mb-6">
              I don't have ten years of enterprise communications experience. I also don't think pretending I do would
              make this portfolio more interesting. What I do have is a habit of getting close to unfamiliar problems,
              figuring out what matters, and building something to test my thinking.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono text-sm md:text-base text-chocolate/85 max-w-2xl">
              That is exactly what I did with Conduct — the Growth OS is below. And it is what I'd want to do with
              communications — the rest of this page is that.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="why-fit" data-testid="role-fit-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-36">
        <SectionHead no="06" kicker="The role, translated" dark>
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
