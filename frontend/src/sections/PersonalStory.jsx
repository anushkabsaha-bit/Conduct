import { Reveal, SectionHead } from "../components/Shared";

const NAILS_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_28f8e28b-843a-47dd-964d-510eaa7c3e63/artifacts/7025e174823a9df9_IMG_4835.jpeg";

const POLAROID_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_28f8e28b-843a-47dd-964d-510eaa7c3e63/artifacts/df4eee8125baf3c1_9863b8b2-9e0b-40fb-bcab-c819dd7cd52b.jpeg";

export default function PersonalStory() {
  return (
    <section id="community-story" data-testid="personal-story-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-32">
      <SectionHead no="12" kicker="Community" dark>
        Community<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div className="md:col-span-5 space-y-10">
          <Reveal>
            <div>
              <p className="font-display text-6xl md:text-7xl leading-[0.85] text-tangelo">70K</p>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-linen/50 mt-2 mb-4">Wattpad readers</p>
              <p className="font-mono text-sm leading-relaxed text-linen/85 max-w-md">
                I started writing because I loved building fictional worlds. Then I became interested in why people came
                back.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="font-display uppercase text-2xl md:text-3xl text-linen mb-3">Press-on nails</p>
              <p className="font-mono text-sm leading-relaxed text-linen/85 max-w-md">
                I tried taking the world outside the page. It didn't last, and that was the lesson: people came for the
                stories.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7 grid sm:grid-cols-2 gap-6 items-start">
          <Reveal>
            <div className="spotlight border-2 border-linen/60 bg-linen p-3 rotate-[-1.5deg]">
              <img
                src={NAILS_URL}
                alt="Illustrated hand with press-on nail designs inspired by fictional characters"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="tape spotlight bg-white p-3 pb-10 rotate-[2deg]">
              <img
                src={POLAROID_URL}
                alt="Polaroid of the supper club, friends crowded onto a sofa after dinner"
                data-testid="supper-polaroid-image"
                className="w-full h-auto block"
              />
              <p className="font-[Caveat] text-lg text-chocolate/80 pt-3 text-center">
                I was feeling alone. So I started a supper club.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-12">
        <p className="font-mono text-sm text-linen/70 max-w-xl">
          Different projects. Same question: why do people come back?
        </p>
      </Reveal>
    </section>
  );
}
