import { useState } from "react";
import { Reveal, SectionHead } from "../components/Shared";

const NAILS_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_28f8e28b-843a-47dd-964d-510eaa7c3e63/artifacts/7025e174823a9df9_IMG_4835.jpeg";

const POLAROID_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_28f8e28b-843a-47dd-964d-510eaa7c3e63/artifacts/df4eee8125baf3c1_9863b8b2-9e0b-40fb-bcab-c819dd7cd52b.jpeg";

const nailNotes = [
  "For the morally grey character. Obviously.",
  "For the one who deserved a better chapter.",
  "Every fictional world needs an establishing shot.",
  "Constellations. Subtlety was never the brief.",
  "Cottagecore protagonist energy.",
];

export default function PersonalStory() {
  const [nail, setNail] = useState(1);

  return (
    <section id="community-story" data-testid="personal-story-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="12" kicker="Where the instinct comes from" dark>
        I've always been interested in <span className="text-tangelo">why people come back.</span>
      </SectionHead>

      <div className="space-y-20 md:space-y-28">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-4">
            <Reveal>
              <p className="font-display text-7xl md:text-8xl leading-[0.85] text-tangelo">70K</p>
              <p className="font-display uppercase text-2xl md:text-3xl text-linen mt-2">readers</p>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-linen/50 mt-2">Wattpad</p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.08}>
              <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 max-w-xl">
                I started writing as part of a creative writing course. I kept experimenting with what I published, when
                I published it and how I built the world around the stories. I watched what made people return. It grew,
                organically, to around seventy thousand readers.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <button
                data-testid="nails-object-button"
                onClick={() => setNail((nail + 1) % nailNotes.length)}
                className="relative block w-full spotlight border-2 border-linen/60 bg-linen p-3 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={NAILS_URL}
                  alt="Illustrated hand with five press-on nail designs inspired by fictional characters"
                  className="w-full h-auto block"
                />
                <span className="block font-mono text-[10px] tracking-[0.14em] uppercase text-chocolate/60 pt-3 text-left">
                  Fig. 12b — tap to rotate through the set
                </span>
              </button>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.08}>
              <p className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl text-linen leading-[0.95] mb-4">
                Yes, I made merch <span className="text-tangelo">for fictional characters.</span>
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="font-serifit italic text-xl text-botticelli mb-5 min-h-[2rem]" data-testid="nail-note">
                {nailNotes[nail]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-mono text-sm leading-relaxed text-linen/85 max-w-xl">
                I wanted the world to exist outside the page. Was it necessary? No. Did I do it anyway? Obviously. The
                experiment didn't last forever — people came for the stories.{" "}
                <span className="text-tangelo">The story was the product.</span>
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 md:order-1 order-2">
            <Reveal>
              <p className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl text-linen leading-[0.95] mb-5">
                I was feeling alone. <span className="text-tangelo">So I made a room.</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-sm leading-relaxed text-linen/85 max-w-xl mb-6">
                After moving to the UK, I felt lonely. So I made a small supper club with friends. Different medium,
                same question: what makes people want to belong? What makes them come back?
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="font-serifit italic text-xl md:text-2xl text-linen border-l-4 border-tangelo pl-5 max-w-xl">
                Why they care. Why they feel like they belong. That's the whole job, everywhere I've done it.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:order-2 order-1">
            <Reveal>
              <div className="tape spotlight bg-white p-4 pb-14 rotate-[2deg] max-w-sm mx-auto">
                <img
                  src={POLAROID_URL}
                  alt="Polaroid of the supper club — friends crowded onto a sofa after dinner"
                  data-testid="supper-polaroid-image"
                  className="w-full h-auto block"
                />
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-chocolate/60 pt-4 text-center">
                  The actual supper club. Real photo, real people.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
