import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHead } from "../components/Shared";

const categories = [
  {
    k: "Product",
    why: "The thing being built is usually the best story in the building — and the least told.",
    who: "Customers, prospects, candidates, engineers who want their work understood.",
    make: "A story that starts from what changed, not from the feature name.",
    where: "LinkedIn, website, sales conversations, launch moments.",
    measure: "Can someone explain it back? Do they ask follow-up questions?",
  },
  {
    k: "Customer",
    why: "A customer win is never the announcement. It's the problem that made the win necessary.",
    who: "Other people with the same problem who haven't met Conduct yet.",
    make: "The before/after, told in the customer's language — with their permission.",
    where: "Website, sales enablement, events, customer advocacy.",
    measure: "Do prospects recognise themselves in it?",
  },
  {
    k: "Event",
    why: "A room full of the right people is a distribution channel you don't have to fight an algorithm for.",
    who: "CIOs, enterprise practitioners, partners, future talent.",
    make: "A talk, a panel, or a small activation with one memorable idea.",
    where: "The event itself — then every clip and quote comes home.",
    measure: "Conversations started. Follow-ups. Did anyone repeat the line back?",
  },
  {
    k: "Community",
    why: "Audiences watch. Communities come back — and they tell you things audiences never will.",
    who: "Developers, practitioners, AI builders, customers.",
    make: "A reason to return: a session, a dinner, a question worth answering together.",
    where: "Wherever they already gather. Don't make them come to you first.",
    measure: "Return rate. Unprompted replies. Who brings a friend.",
  },
  {
    k: "Founder",
    why: "Founders say the most interesting things in the building, usually once, usually in passing.",
    who: "The market, candidates, investors — anyone deciding what Conduct is.",
    make: "The argument underneath the remark: post, essay, talk or video.",
    where: "Founder's own channels first, then adapted outward.",
    measure: "Does it travel? Do people quote it back?",
  },
  {
    k: "Partner",
    why: "A partner brings an audience and credibility you haven't earned yet.",
    who: "The partner's customers, joint prospects.",
    make: "The story both sides genuinely want to tell — not a logo swap.",
    where: "Both channels, joint events, co-branded content.",
    measure: "Shared reach, inbound mentions, partner asking to do it again.",
  },
  {
    k: "Culture",
    why: "How a company works is a story — and candidates read it long before they apply.",
    who: "Future talent, new joiners, the team itself.",
    make: "New-joiner stories, behind-the-scenes builds, the honest bits.",
    where: "LinkedIn, careers page, candidate materials, all-hands.",
    measure: "Do candidates mention it in interviews?",
  },
  {
    k: "Competitor",
    why: "When a competitor launches, the conversation already exists. The only question is whether Conduct belongs in it.",
    who: "Everyone comparing notes this week.",
    make: "A genuinely useful perspective — or silence. Both are decisions.",
    where: "LinkedIn, founder channels, sales talking points.",
    measure: "Did we add something, or just noise?",
  },
  {
    k: "Industry",
    why: "Big announcements shift what buyers worry about. That's a door opening.",
    who: "Everyone suddenly re-asking the question.",
    make: "Conduct's useful angle on the thing everyone is discussing.",
    where: "Fast channels first — LinkedIn, X — then the considered essay.",
    measure: "Speed to ship. Engagement from the right people, not everyone.",
  },
];

const fields = [
  ["Why this matters", "why"],
  ["Who cares", "who"],
  ["What I would make", "make"],
  ["Where I would distribute it", "where"],
  ["What I would measure", "measure"],
];

export default function Radar() {
  const [active, setActive] = useState(0);

  return (
    <section id="radar" data-testid="radar-section" className="bg-ink border-y border-linen/15 px-5 md:px-10 py-24 md:py-36">
      <SectionHead no="04" kicker="Opportunity radar" dark>
        I don't wait <span className="text-tangelo">for a comms brief.</span>
      </SectionHead>

      <Reveal>
        <p className="font-mono text-sm md:text-base text-linen/85 max-w-2xl mb-4">
          I notice things. I investigate them. I decide whether they matter. Then I turn them into something useful.
        </p>
        <p className="font-mono text-[11px] text-linen/50 mb-12 italic">
          Pick a signal — this is how I'd read it. A demonstration of thinking, not a claim about Conduct's plans.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-0 md:border-t md:border-linen/20 content-start">
          {categories.map((c, i) => (
            <button
              key={c.k}
              data-testid={`radar-category-${c.k.toLowerCase()}`}
              onClick={() => setActive(i)}
              className={`text-left px-4 py-3 md:py-4 font-mono text-[11px] md:text-sm tracking-[0.14em] uppercase transition-colors duration-200 md:border-b md:border-linen/20 border ${
                active === i
                  ? "bg-tangelo text-linen border-tangelo"
                  : "border-linen/25 text-linen/80 hover:bg-linen hover:text-chocolate"
              }`}
            >
              {c.k}
            </button>
          ))}
        </div>

        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              data-testid="radar-detail-panel"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="border-2 border-linen/40"
            >
              <div className="bg-chocolate px-6 md:px-8 py-5 border-b border-linen/20">
                <p className="font-display uppercase text-3xl md:text-4xl text-linen">
                  {categories[active].k} <span className="text-tangelo">signal</span>
                </p>
              </div>
              {fields.map(([label, key], i) => (
                <div
                  key={label}
                  className={`grid md:grid-cols-[220px_1fr] gap-2 md:gap-6 px-6 md:px-8 py-5 ${
                    i < fields.length - 1 ? "border-b border-linen/20" : ""
                  }`}
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-botticelli pt-1">{label}</p>
                  <p className="font-mono text-sm leading-relaxed text-linen/90">{categories[active][key]}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
