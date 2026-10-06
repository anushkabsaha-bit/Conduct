import { Reveal, SectionHead, Tag } from "../components/Shared";

const POLAROID_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_28f8e28b-843a-47dd-964d-510eaa7c3e63/artifacts/df4eee8125baf3c1_9863b8b2-9e0b-40fb-bcab-c819dd7cd52b.jpeg";

export default function SupperClub() {
  return (
    <section id="supper" data-testid="supper-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <Reveal>
            <div className="tape spotlight bg-white p-4 pb-16 rotate-[2deg] max-w-md mx-auto">
              <img
                src={POLAROID_URL}
                alt="Polaroid of the supper club — friends crowded onto a sofa after dinner"
                data-testid="supper-polaroid-image"
                className="w-full h-auto block"
              />
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-chocolate/60 pt-4 text-center">
                Exhibit C — the actual supper club. Real photo, real people, real potatoes.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7 order-1 md:order-2">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs tracking-[0.2em] text-tangelo">03</span>
              <span className="h-px flex-1 bg-chocolate/30" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-chocolate/70">The supper club</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display uppercase leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-chocolate mb-8">
              I was feeling alone. <span className="text-tangelo">So I made a room.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90 max-w-xl mb-6">
              After moving to the UK, I felt lonely. So instead of waiting to be invited somewhere, I made a small
              supper club with friends — a table, a meal, a reason to gather.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="font-serifit italic text-xl md:text-2xl text-chocolate mb-8">
              Different medium. Same instinct.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="space-y-2 font-mono text-xs md:text-sm tracking-[0.12em] uppercase mb-8">
              <p className="text-chocolate">What makes people want to belong?</p>
              <p className="text-tangelo">What makes them come back?</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2">
              <Tag tone="chocolate">Community, offline</Tag>
              <Tag tone="outline">Hospitality as strategy</Tag>
              <Tag>Belonging</Tag>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
