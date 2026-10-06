import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { Reveal, SectionHead, Tag } from "../components/Shared";

const stats = [
  { n: "38", l: "Conduct LinkedIn posts analysed" },
  { n: "7,079", l: "likes" },
  { n: "1,045", l: "comments" },
  { n: "251", l: "reposts" },
];

const exhibits = [
  {
    id: "sap-score",
    title: "The SAP Score",
    sub: "London Tech Week photo booth idea → Diana pressure-test",
    body: (
      <div className="space-y-4">
        <p>
          The idea: a physical Conduct photo booth at London Tech Week. You get a Polaroid and a completely ridiculous
          "SAP Score" — not a real measurement, just Conduct making fun of the reality of working with massive,
          complicated SAP environments. Score 21% and your SAP is "held together by thoughts and prayers". Score 100%
          and "there's a 100% chance we can get started on your systems within 48 hours".
        </p>
        <p>
          Then I hand it to Diana and ask her to break it: Is the audience right? Where should it actually happen? Does
          the format work? Is it funny enough to travel? What would it cost, what permissions, how much footfall — and
          is there a better way to execute it?
        </p>
        <p>
          Her verdict: authentic to the problem, differentiates the brand, memorable recall with a genuine recruitment
          layer — a cultural signal. <span className="text-tangelo font-bold">"Should move ahead."</span> And there's a
          second layer: if that Polaroid is still on someone's office fridge months later, we get to ask — "Have you met
          Conduct before?"
        </p>
      </div>
    ),
  },
  {
    id: "black-box",
    title: "The Black Box Experiment",
    sub: "Do outsiders actually understand Conduct?",
    body: (
      <div className="space-y-4">
        <p>
          The hypothesis: if people unfamiliar with Conduct can't explain what it does after experiencing our content
          and product, the problem may be how we communicate our value — not just a lack of awareness.
        </p>
        <p>
          The method: film three people — an engineer, an enterprise professional, and someone completely outside this
          space. No prep, no briefing. Before exposure, one question: "What do you think Conduct does?" Then ten minutes
          with Conduct's material. Then we score the response: category recognition, problem recognition, customer
          recognition, value recognition, memorability, confusion, curiosity.
        </p>
        <p>
          Then the loop: Black Box → evidence → Berdine analyses our language → messaging changes → content → test
          again. Success is simple:{" "}
          <span className="text-tangelo font-bold">can an outsider accurately explain Conduct?</span>
        </p>
      </div>
    ),
  },
  {
    id: "ninety-days",
    title: "The First 90 Days",
    sub: "A two-week rhythm, not a hundred random initiatives",
    body: (
      <div className="space-y-4">
        <p>
          <span className="text-tangelo font-bold">Weeks 1–2:</span> Berdine maps Conduct's voice, themes and gaps;
          Agatha finds which formats earn real engagement and which quietly train the algorithm for less. Output: what's
          missing, and what we stop doing immediately.
        </p>
        <p>
          <span className="text-tangelo font-bold">Weeks 3–4:</span> Small experiments. Corporate Crime Scenes about the
          absurdity of enterprise systems. Founder-voice and behind-the-scenes posts — historically Conduct's best
          performers. A LinkedIn video test: is Conduct more memorable when a human explains it?
        </p>
        <p>
          <span className="text-tangelo font-bold">Weeks 5–8:</span> Beyond LinkedIn — Substack, Medium, a real editorial
          calendar. Then Catherine goes live as the opportunity radar: hackathons, partner ecosystems, the rooms where
          clients, talent and partners actually gather. She triggers Ana; Ana briefs me; I filter for overlap,
          distinctiveness and leverage before anything gets escalated.
        </p>
        <p>
          <span className="text-tangelo font-bold">Weeks 9–12:</span> Campaigns with Diana stress-testing before spend.
          Then my favourite bit — Edith turns product and customers into growth assets: hero stories like "Freudenberg's
          journey from problem to solution", five micro-assets, one video format. Plus the first Black Box run.
        </p>
        <p>
          <span className="text-tangelo font-bold">Weeks 13–14:</span> Everything becomes a repeatable loop. By the end
          of month three: clear metrics against the day-one baseline, 2–3 proven formats, a functioning opportunity
          pipeline, a product-customer storytelling system, and a growth loop that shows what stays and what goes.
        </p>
      </div>
    ),
  },
  {
    id: "edith-checklist",
    title: "The Edith Launch Checklist",
    sub: "147 items. Product launch, treated like a story, not a task list",
    body: (
      <div className="space-y-4">
        <p>
          For Conduct's process documentation capability launch with Freudenberg, Edith and I built a 147-item launch
          checklist — because launches fail in the boring details, not the big idea.
        </p>
        <p>
          Product clarity: exact capability name, dates, availability, AI differentiation, use cases, positioning,
          legal. Customer permissions: naming rights, video, quotes, metrics, case study, NDA boundaries, approval
          timeline. Team alignment: product lead, attendees, photographer briefed, agency briefed, approval chain.
        </p>
        <p>
          The goal, in one line:{" "}
          <span className="text-tangelo font-bold">
            capture the real story, show the real impact, and create assets that build trust across customers, prospects
            and talent.
          </span>
        </p>
      </div>
    ),
  },
];

export default function GrowthOS() {
  const [open, setOpen] = useState("black-box");

  return (
    <section id="growth-os" data-testid="growth-os-section" className="bg-chocolate text-linen px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="04" kicker="The Conduct work" dark>
        I didn't want to just tell you I could do the job.{" "}
        <span className="text-botticelli">I built a slightly ridiculous Growth Operating System for Conduct.</span>
      </SectionHead>

      <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 mb-6">
              Conduct has something much harder to manufacture than attention: a genuinely interesting product solving a
              difficult enterprise problem, and a story that gets more compelling the deeper you go. So I analysed every
              Conduct LinkedIn post from April to 28 August 2026 and turned what I found into a system.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="https://conduct-growth-os.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="growth-os-live-link"
              className="group inline-flex items-center gap-3 border border-linen/50 font-mono text-xs md:text-sm tracking-[0.18em] uppercase px-6 py-4 hover:bg-tangelo hover:border-tangelo transition-colors"
            >
              Read the full OS — it's live
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </Reveal>
        </div>
        <div className="md:col-span-5">
          <Reveal delay={0.12}>
            <div className="border border-linen/30 p-6">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-botticelli mb-4">The outsider test</p>
              <p className="font-mono text-sm leading-relaxed text-linen/85">
                I showed Conduct to <span className="text-tangelo font-bold">10 people</span> who weren't familiar with
                the company. On average, it took them{" "}
                <span className="text-tangelo font-bold">five posts</span> to understand what Conduct actually does.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div data-testid="growth-os-stats" className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-linen/25 mb-6">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.06} className="border-r border-b border-linen/25">
            <div className="p-6 md:p-8">
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl text-tangelo leading-none">{s.n}</p>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-linen/70 mt-3">{s.l}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="font-mono text-xs text-linen/60 mb-16 md:mb-24">
          ≈ 8,375 total interactions · average per post: 186 likes · 27.5 comments · 6.6 reposts
        </p>
      </Reveal>

      <div className="mb-16 md:mb-24">
        <Reveal>
          <p className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] text-linen max-w-4xl mb-6">
            Do people actually <span className="text-tangelo">understand</span> Conduct?
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-sm md:text-base leading-relaxed text-linen/85 max-w-2xl mb-8">
            That's the strategic question. How do we reduce the distance between what Conduct is building and what
            someone thinks Conduct does? The answer is not "post more". The answer is:
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-3">
          {["Make the complexity understandable.", "Make the interesting part memorable.", "Make people want to keep looking."].map((m, i) => (
            <Reveal key={m} delay={0.12 + i * 0.07}>
              <p className="font-serifit italic text-lg md:text-xl text-botticelli border-t-2 border-tangelo pt-4">{m}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-linen/60 mb-6">
          Evidence from inside the OS — open an exhibit
        </p>
      </Reveal>
      <div data-testid="growth-os-exhibits" className="border-t border-linen/25">
        {exhibits.map((e) => (
          <div key={e.id} className="border-b border-linen/25">
            <button
              data-testid={`exhibit-toggle-${e.id}`}
              onClick={() => setOpen(open === e.id ? null : e.id)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
              <div>
                <p className="font-display uppercase text-xl sm:text-2xl md:text-3xl text-linen group-hover:text-tangelo transition-colors">
                  {e.title}
                </p>
                <p className="font-mono text-xs text-linen/60 mt-1">{e.sub}</p>
              </div>
              {open === e.id ? (
                <Minus className="w-5 h-5 shrink-0 text-tangelo" />
              ) : (
                <Plus className="w-5 h-5 shrink-0 text-linen/60 group-hover:text-tangelo transition-colors" />
              )}
            </button>
            <AnimatePresence initial={false}>
              {open === e.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    data-testid={`exhibit-body-${e.id}`}
                    className="pb-8 pr-2 md:pr-24 font-mono text-xs md:text-sm leading-relaxed text-linen/80"
                  >
                    {e.body}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="flex flex-wrap gap-2">
          <Tag>38 posts analysed</Tag>
          <Tag tone="botticelli">Outsider test</Tag>
          <Tag>Black Box</Tag>
          <Tag tone="botticelli">SAP Score</Tag>
          <Tag>Opportunity radar</Tag>
          <Tag tone="botticelli">Measurement loop</Tag>
        </div>
      </Reveal>
    </section>
  );
}
