import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHead, Tag } from "../components/Shared";

const artefacts = [
  { no: "01", name: "A 70K-reader Wattpad community", medium: "fiction · audience", href: "#wattpad" },
  { no: "02", name: "Press-on nails for fictional characters", medium: "merch · experiment", href: "#nails" },
  { no: "03", name: "A supper club", medium: "hospitality · belonging", href: "#supper" },
  { no: "04", name: "A Conduct Growth Operating System", medium: "strategy · system", href: "#growth-os" },
  { no: "05", name: "Six specialised agents", medium: "AI · leverage", href: "#agents" },
  { no: "06", name: "A product × communications framework", medium: "storytelling", href: "#product-comms" },
  { no: "07", name: "A content + distribution engine", medium: "editorial", href: "#content-engine" },
  { no: "08", name: "An opportunity radar", medium: "signal", href: "#radar" },
  { no: "09", name: "A Conduct anniversary experiment", medium: "events", href: "#anniversary" },
];

const variables = [
  { k: "posting rhythm", v: "how often the story moved" },
  { k: "amount", v: "how much arrived at once" },
  { k: "day", v: "when people were actually there" },
  { k: "format", v: "what shape the story took" },
];

export default function Built() {
  return (
    <section id="built" data-testid="built-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="01" kicker="What I've built">
        I've always been a builder. <span className="text-tangelo">The medium just keeps changing.</span>
      </SectionHead>

      <div data-testid="artefacts-index" className="border-t border-chocolate/30">
        {artefacts.map((a, i) => (
          <Reveal key={a.no} delay={Math.min(i * 0.04, 0.3)} y={16}>
            <a
              href={a.href}
              data-testid={`artefact-row-${a.no}`}
              className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_auto_40px] items-center gap-4 md:gap-8 py-5 md:py-6 border-b border-chocolate/30 hover:bg-chocolate hover:text-linen transition-colors duration-300 px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <span className="font-mono text-xs text-tangelo group-hover:text-botticelli transition-colors">{a.no}</span>
              <span className="font-display uppercase text-xl sm:text-2xl md:text-4xl leading-none tracking-wide">
                {a.name}
              </span>
              <span className="hidden md:block font-mono text-[11px] tracking-[0.16em] uppercase opacity-60">
                {a.medium}
              </span>
              <ArrowUpRight className="w-5 h-5 justify-self-end transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </Reveal>
        ))}
      </div>

      <div id="wattpad" data-testid="wattpad-section" className="pt-24 md:pt-36 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-display text-[26vw] md:text-[11vw] leading-[0.85] text-tangelo">70,000</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl text-chocolate leading-[0.95] mt-2">
              people started reading<span className="text-tangelo">.</span>
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6">
              <Tag tone="chocolate">Exhibit A — Wattpad</Tag>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-7 space-y-6">
          <Reveal>
            <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
              It started with a creative writing course. I realised I loved stories and fictional worlds, so I started
              writing more — and publishing on Wattpad. Then I did what I always do: I started changing one variable at
              a time and watching what happened.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {variables.map((v, i) => (
              <Reveal key={v.k} delay={0.08 + i * 0.06}>
                <div className="border border-chocolate/40 p-4 hover:border-tangelo transition-colors" data-testid={`wattpad-variable-${v.k.replace(/\s/g, "-")}`}>
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-tangelo mb-2">Experimented with</p>
                  <p className="font-display uppercase text-lg md:text-xl text-chocolate">{v.k}</p>
                  <p className="font-mono text-xs text-chocolate/70 mt-2">{v.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
              I watched what made people return. It grew, organically, to around seventy thousand readers. No ads, no
              growth hacks — just a story people cared about and a rhythm they could rely on.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="font-serifit italic text-xl md:text-2xl text-chocolate border-l-4 border-tangelo pl-5">
              The lesson: I learned through experimentation what made people come back. That instinct has never left.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
