import { Reveal, SectionHead } from "../components/Shared";

const overlap = ["Communication", "Product", "Community", "Growth"];

export default function WhyRole() {
  return (
    <>
      <section id="why" data-testid="why-role-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-32">
        <SectionHead no="02" kicker="Why this role">
          Why this role<span className="text-tangelo">.</span>
        </SectionHead>

        <div className="max-w-2xl space-y-6">
          <Reveal>
            <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
              I have not had the Communications Strategist title. But I keep finding myself drawn towards the work.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
              I like understanding what someone is building. I like figuring out what is interesting about it. I like
              working out why someone should care. I like writing it. I like finding other ways to tell it. And I like
              making something actually happen afterwards.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-serifit italic text-xl md:text-2xl leading-snug text-chocolate">
              That is probably why I keep gravitating towards roles where communication, product, community and growth
              overlap. This role feels like a very natural version of that.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex flex-wrap gap-2 pt-2" data-testid="overlap-chips">
              {overlap.map((o) => (
                <span key={o} className="font-mono text-[11px] tracking-[0.14em] uppercase border border-chocolate/50 px-3 py-2 text-chocolate/80">
                  {o}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="why-conduct" data-testid="why-conduct-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-32">
        <SectionHead no="03" kicker="Why Conduct" dark>
          Why Conduct<span className="text-tangelo">.</span>
        </SectionHead>

        <div className="max-w-2xl space-y-6">
          <Reveal>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/90">
              I have been looking at Conduct for a while, since it was still a much smaller team. What kept pulling me
              back was the problem itself. The technology was interesting, but the bigger question was how you make
              something this complicated understandable enough for people to actually work with it.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/90">
              When I saw the Growth Generalist role, I started thinking about what I would do if I were already there.
              So I built the Growth Operating System.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/90">
              When I saw this role, I had the same reaction. I wanted to see what I would actually do.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="font-serifit italic text-xl md:text-2xl text-botticelli">
              That is probably the clearest explanation of why Conduct keeps pulling me back.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
