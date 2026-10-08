import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, SectionHead } from "../components/Shared";

const L = ({ children, tone = "text-tangelo" }) => (
  <p className={`font-mono text-[10px] tracking-[0.2em] uppercase mb-3 ${tone}`}>{children}</p>
);

const Chips = ({ items, dark = false }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((i) => (
      <span
        key={i}
        className={`font-mono text-[11px] tracking-[0.06em] px-3 py-2 border ${
          dark ? "border-linen/35 text-linen/85" : "border-chocolate/40 text-chocolate/85"
        }`}
      >
        {i}
      </span>
    ))}
  </div>
);

const Note = ({ children, rotate = "-1deg" }) => (
  <p className="font-[Caveat] text-xl md:text-2xl text-chocolate/80 max-w-md" style={{ rotate }}>
    {children}
  </p>
);

const BriefRows = ({ rows }) => (
  <div className="border-t border-chocolate/25">
    {rows.map(([k, v]) => (
      <div key={k} className="grid md:grid-cols-[240px_1fr] gap-1 md:gap-6 py-3.5 border-b border-chocolate/25">
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-tangelo pt-0.5">{k}</p>
        <p className="font-mono text-xs md:text-sm text-chocolate/90 leading-relaxed">{v}</p>
      </div>
    ))}
  </div>
);

const sapBuildQs = [
  "What does the person answer?",
  "How many questions?",
  "How long should it take?",
  "What makes the score funny?",
  "What makes it recognisably about SAP?",
  "What connects it back to Conduct?",
  "What gets printed?",
  "Can people share it?",
  "Does the person leave with something physical?",
  "How do we avoid it feeling like every other conference booth?",
];

const SapPanel = () => (
  <div className="space-y-12">
    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-7 space-y-6">
        <div>
          <L>The observation</L>
          <p className="font-mono text-sm leading-relaxed text-chocolate/90">
            SAP is complicated. The people Conduct wants to reach already know that. The opportunity is to turn a shared
            enterprise pain into something people immediately understand and want to interact with.
          </p>
        </div>
        <Note rotate="-1.5deg">
          "What if you could walk up to a booth at a tech event and get a completely ridiculous score for the state of
          your SAP estate?"
        </Note>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-chocolate text-linen p-6 rotate-[-1deg] spotlight">
            <p className="font-display text-5xl text-tangelo leading-none mb-3">21%</p>
            <p className="font-mono text-xs tracking-[0.1em] uppercase">Your SAP is being held together by thoughts and prayers.</p>
          </div>
          <div className="bg-linen border-2 border-chocolate p-6 rotate-[1deg] spotlight">
            <p className="font-display text-5xl text-chocolate leading-none mb-3">87%</p>
            <p className="font-mono text-xs tracking-[0.1em] uppercase text-chocolate">You may actually know what's going on.</p>
          </div>
        </div>
        <p className="font-mono text-[11px] text-chocolate/60 italic max-w-lg">
          An event experience, not a literal Conduct technical assessment, unless Product tells me the scoring can
          safely say more.
        </p>
      </div>
      <div className="md:col-span-5">
        <L>Why I'd run it</L>
        <p className="font-mono text-sm leading-relaxed text-chocolate/90 mb-5">
          The point isn't the photo. The point is recognition. Someone sees the joke and thinks:{" "}
          <span className="text-tangelo">"unfortunately, that is exactly my life."</span> That gives Conduct an opening
          to talk about the actual problem. The activation should make the problem memorable before the product
          explanation begins.
        </p>
        <L>The event itself</L>
        <Chips items={["Booth", "Camera", "Printed score card", "Conduct branding", "A small prompt", "A shareable image", "QR code, only if there's an actual reason for it"]} />
      </div>
    </div>

    <div>
      <L>How I'd build it, questions first</L>
      <div className="flex flex-wrap gap-3">
        {sapBuildQs.map((q, i) => (
          <p
            key={q}
            className="font-[Caveat] text-lg text-chocolate/85 bg-[#FFFDF6] border border-chocolate/25 shadow-md px-4 py-2.5"
            style={{ rotate: `${(i % 3) - 1}deg` }}
          >
            {q}
          </p>
        ))}
      </div>
    </div>

    <div>
      <L>The brief I'd send internally</L>
      <BriefRows
        rows={[
          ["Objective", "Make enterprise SAP pain memorable and start conversations."],
          ["Audience", "SAP and enterprise practitioners, CIOs and transformation leaders, potential customers, potential talent."],
          ["Creative idea", "SAP Score."],
          ["Key message", "You already know the pain. Let's make it visible."],
          ["What we need", "Creative, design, engineering or product input, event logistics, photography, content capture, approval."],
          ["What I need to know before building", "What can Conduct actually substantiate? What can the scoring logic safely say? What should never be implied? What does Product want the person to do next?"],
        ]}
      />
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <L>What I'd capture</L>
        <Chips
          items={[
            "People seeing their score",
            "Reactions",
            "The score cards",
            "People comparing scores",
            "Short conversations",
            "A few clean photographs",
            "Short vertical clips",
            "Team interactions",
            "People explaining their score",
          ]}
        />
        <Note rotate="1deg">"Not everything needs to become content. Some of it is just useful documentation."</Note>
      </div>
      <div>
        <L>What it could become</L>
        <Chips
          items={[
            "Live event posts",
            "Short clips",
            "Founder post",
            "Photo carousel",
            "Event recap",
            "Customer conversation",
            "Follow-up post",
            "Sales conversation starter",
          ]}
        />
        <p className="font-mono text-[11px] text-chocolate/60 italic mt-4">
          Chosen based on what actually happens at the event, not decided in advance.
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <L>What I'd measure</L>
        <Chips
          items={[
            "Participation",
            "Completion rate",
            "Shares",
            "Photos posted",
            "Conversations started",
            "Inbound interest",
            "Quality of conversations",
            "Recall",
            "Whether people can say what Conduct does afterwards",
          ]}
        />
      </div>
      <div>
        <L>What would make me change it or kill it</L>
        <div className="space-y-2 font-mono text-xs md:text-sm text-chocolate/85">
          {[
            "People take the photo but can't remember Conduct.",
            "The joke becomes more memorable than the problem.",
            "People walk straight past it.",
            "It looks like every other tech event activation.",
            "The logistics cost more than the value.",
          ].map((m) => (
            <p key={m}><span className="text-tangelo mr-2">×</span>{m}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const blackBoxPeople = [
  ["Engineer", "What did they understand?"],
  ["Enterprise person", "What did they understand?"],
  ["Complete outsider", "What did they understand?"],
];

const blackBoxQs = [
  "What do you think Conduct does?",
  "What problem does it solve?",
  "Who do you think it is for?",
  "What do you remember?",
  "What would you tell someone else about it?",
  "What is still confusing?",
];

const BlackBoxPanel = () => (
  <div className="space-y-12">
    <div className="max-w-2xl">
      <L>The problem</L>
      <p className="font-mono text-sm leading-relaxed text-chocolate/90">
        Conduct is solving something complicated. I want to know whether people outside the company can actually explain
        it. The outsider test suggested it takes a few posts. This is how I'd find out where it breaks.
      </p>
    </div>

    <div>
      <L>The test · three people, same material, ten minutes</L>
      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {blackBoxPeople.map(([who, q], i) => (
          <div key={who} className="border-2 border-chocolate p-6" style={{ rotate: `${(i % 3) - 1}deg` }} data-testid={`blackbox-person-${i}`}>
            <p className="font-display uppercase text-xl md:text-2xl text-chocolate mb-2">{who}</p>
            <p className="font-[Caveat] text-lg text-chocolate/70">{q}</p>
          </div>
        ))}
      </div>
      <Chips items={["Understood", "Confused", "Missed", "Remembered", "Curious about"]} />
      <p className="font-mono text-[11px] text-chocolate/60 italic mt-4">
        These are the things I would measure. No results yet. That's the point of running it.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <L>Then ask</L>
        <div className="space-y-2">
          {blackBoxQs.map((q) => (
            <p key={q} className="font-mono text-xs md:text-sm text-chocolate/90 border-b border-chocolate/25 pb-2">
              <span className="text-tangelo mr-2">→</span>"{q}"
            </p>
          ))}
        </div>
      </div>
      <div>
        <L>Why I'd run it</L>
        <p className="font-mono text-sm leading-relaxed text-chocolate/90 mb-4">
          The point isn't to prove Conduct is confusing. It's to find out where the explanation breaks. Maybe people
          understand the product but not the problem. Maybe they understand the problem but not why Conduct is
          different. Maybe they understand it and simply can't remember it.
        </p>
        <p className="font-mono text-sm leading-relaxed text-chocolate/90">
          Each of those is a different communications fix.
        </p>
      </div>
    </div>

    <div>
      <L>The second round</L>
      <p className="font-mono text-sm leading-relaxed text-chocolate/90 max-w-2xl mb-5">
        Take what I learn, change the explanation, run the same test again. Compare:
      </p>
      <Chips items={["Comprehension", "Recall", "Problem recognition", "Curiosity", "Ability to explain Conduct back"]} />
      <p className="font-serifit italic text-xl text-chocolate mt-6 max-w-xl">
        The experiment is complete when I know whether the new version made understanding better. Not because I like the
        copy more.
      </p>
    </div>
  </div>
);

const roomNotes = ["Founders", "Early Conductors", "Current team", "Customers", "Partners", "Early supporters", "People who joined recently"];

const founderQs = [
  "What made you believe in each other enough to start a company together?",
  "What did each of you see that the others didn't?",
  "What made this problem worth spending years on?",
  "What did you disagree about at the beginning?",
  "What almost made you stop?",
  "What do you believe now that you didn't believe three years ago?",
  "What are you still trying to prove?",
  "What does Conduct mean to you now?",
];

const evening = [
  ["Arrival", "Old photos, early Conduct artefacts, pieces of the company's history, Polaroids. Things people recognise."],
  ["Henry", "A short speech. Not three years of milestones. Something personal: why the company exists, what surprised him, what he remembers from the beginning."],
  ["Founders' conversation", "Henry, Jan Philipp and other founder voices where appropriate. A real conversation about why they started together."],
  ["Team", "A few short employee stories. Not everyone gets a microphone. Choose stories that show something about Conduct."],
  ["Customer", "One customer story. What did Conduct mean from their side?"],
  ["The future", 'One question: "Where do you think Conduct will be in another three years?" People write answers. Photograph them. Archive them.'],
];

const roomThinking = [
  "Where people stand",
  "Where people sit",
  "What they see when they arrive",
  "Where old Conduct material appears",
  "Where photographs happen",
  "Where conversations happen",
  "What should feel intimate",
  "What should feel celebratory",
];

const capture = ["Founder conversation clips", "Short founder reflections", "Employee stories", "Customer perspective", "Photographs", "Old Conduct artefacts", "Behind-the-scenes moments", "Written reflections"];

const shotList = ["Arrival", "Room details", "Old Conduct material", "People greeting each other", "Founder conversation", "Audience reactions", "Small candid moments", "Employee stories", "Customer conversation", "End of night"];

const contentTypes = ["15 to 30 second founder clips", "Short event recap", "Longer founder conversation if there's enough substance", "Still photography", "Social cutdowns"];

const timeline = [
  ["8 weeks out", "Venue, guest list, founder conversations, customer invitations, creative direction."],
  ["4 weeks out", "Founder prompts, employee stories, archive material, photography, video brief, run of show."],
  ["1 week out", "Final questions, speeches, room setup, shot list, content permissions."],
  ["On the night", "Who owns what, who is capturing what, what stays private, what moments matter."],
  ["After", "Sort footage, review photographs, pull founder clips, write posts, get approvals, archive everything."],
];

const measures3 = [
  "Did people engage?",
  "Did people comment with their own stories?",
  "Did founder posts start conversations?",
  "Did employees feel proud?",
  "Did customers engage?",
  "Did people learn something about the company they didn't know?",
  "Did the founders enjoy telling the story?",
  "Did we capture stories worth keeping?",
  "Did the evening make Conduct feel more human?",
];

const ThreePanel = () => (
  <div className="space-y-14">
    <div className="max-w-2xl space-y-5">
      <L>The starting thought</L>
      <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
        Three years is a funny point. You're no longer the tiny team who can remember every first. But you're still
        close enough to the beginning that the people who were there remember why it mattered.
      </p>
      <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
        So I wouldn't make this a "three years of growth" presentation. I'd make it a room full of people who can tell
        the story.
      </p>
    </div>

    <div>
      <L>Who I want in the room</L>
      <div className="flex flex-wrap gap-3 mb-4">
        {roomNotes.map((n, i) => (
          <p
            key={n}
            className="font-[Caveat] text-xl text-chocolate/85 bg-[#FFFDF6] border border-chocolate/25 shadow-md px-4 py-2.5"
            style={{ rotate: `${((i % 3) - 1) * 1.5}deg` }}
          >
            {n}
          </p>
        ))}
      </div>
      <Note>"Who remembers something the rest of the company doesn't?"</Note>
    </div>

    <div className="grid md:grid-cols-12 gap-8">
      <div className="md:col-span-5">
        <L>The founders</L>
        <p className="font-mono text-sm leading-relaxed text-chocolate/90 mb-4">
          The company account can explain what Conduct does. The founders can explain why they care.{" "}
          <span className="text-tangelo">That is different.</span> I wouldn't script their answers. I'd bring questions
          worth answering.
        </p>
        <p className="font-mono text-[11px] text-chocolate/60 italic">
          Founder-led content here doesn't mean "founders get more engagement." It means letting the people who built
          the company say why.
        </p>
      </div>
      <div className="md:col-span-7">
        <div className="space-y-2">
          {founderQs.map((q) => (
            <p key={q} className="font-mono text-xs md:text-sm text-chocolate/90 border-b border-chocolate/25 pb-2">
              <span className="text-tangelo mr-2">→</span>"{q}"
            </p>
          ))}
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-7">
        <L>The evening</L>
        <div className="border-t border-chocolate/30">
          {evening.map(([k, v]) => (
            <div key={k} className="grid md:grid-cols-[190px_1fr] gap-2 md:gap-6 py-4 border-b border-chocolate/30">
              <p className="font-display uppercase text-lg text-chocolate">{k}</p>
              <p className="font-mono text-xs md:text-sm text-chocolate/85 leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <L>The room itself</L>
          <Chips items={roomThinking} />
        </div>
      </div>
      <div className="md:col-span-5">
        <L>The invitation</L>
        <div className="spotlight bg-[#FFFDF6] text-chocolate border-2 border-chocolate p-6 rotate-[-1deg]">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase mb-4 max-w-xs">
            You took a chance on us. Come and see what it turned into.
          </p>
          <span className="inline-block bg-tangelo text-linen font-mono text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 mb-4">
            Conduct at Three
          </span>
          <p className="font-display uppercase text-3xl leading-[0.95] border-y-2 border-chocolate py-4 mb-2">
            Friday 8 January 2027
          </p>
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-chocolate/70 mb-4">7pm until late · Conduct London HQ</p>
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-chocolate/50">Dress code</p>
          <p className="font-serifit italic text-base">Whatever you wore on your first day.</p>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <L>What I'd capture</L>
        <Chips items={capture} />
        <Note rotate="1deg">"Some things should stay in the room. We're capturing moments that already exist, not manufacturing them for LinkedIn."</Note>
      </div>
      <div>
        <L>The video brief</L>
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-chocolate/50 mb-2">Shot list</p>
        <Chips items={shotList} />
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-chocolate/50 mt-5 mb-2">Possible outputs</p>
        <Chips items={contentTypes} />
        <p className="font-mono text-[11px] text-chocolate/60 italic mt-4">
          Capture enough to have options. We don't decide before the event that we need a three-minute film. The room
          comes first, the story second, the format after.
        </p>
      </div>
    </div>

    <div>
      <L>The internal brief</L>
      <BriefRows
        rows={[
          ["Objective", "Make three years feel personal."],
          ["Audience", "Conduct team, customers, partners, future talent, the wider enterprise-tech audience."],
          ["What people should feel", "Proud, connected, curious, excited about what's next."],
          ["What they should remember", "Not a list of milestones. The people, the problem, why Conduct exists, and why these people chose to spend years solving it."],
          ["What we need", "Venue, guest list, founder questions, customer invitation, employee stories, photography, video, run of show, content permissions."],
        ]}
      />
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <L>The timeline</L>
        <div className="border-t border-chocolate/30">
          {timeline.map(([k, v]) => (
            <div key={k} className="py-3.5 border-b border-chocolate/30">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-tangelo mb-1">{k}</p>
              <p className="font-mono text-xs md:text-sm text-chocolate/85">{v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <L>Where the material could live</L>
          <Chips items={["Conduct LinkedIn", "Founder LinkedIn", "Website", "Internal channels", "Customer communications", "Event recap", "Future recruiting material"]} />
          <p className="font-mono text-[11px] text-chocolate/60 italic mt-4">
            Not everything goes everywhere. A founder reflection belongs somewhere different from a customer story.
          </p>
        </div>
        <div>
          <L>What I'd measure</L>
          <div className="space-y-2">
            {measures3.map((m) => (
              <p key={m} className="font-mono text-xs md:text-sm text-chocolate/90 border-b border-chocolate/25 pb-2">{m}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const experiments = [
  {
    id: "sap",
    no: "01",
    title: "SAP Score",
    sub: "Can enterprise pain become something people actually want to photograph?",
    Panel: SapPanel,
  },
  {
    id: "blackbox",
    no: "02",
    title: "Black Box",
    sub: "Can someone explain Conduct after ten minutes with the material?",
    Panel: BlackBoxPanel,
  },
  {
    id: "three",
    no: "03",
    title: "Conduct at Three",
    sub: "What if the third anniversary was less about celebrating the company and more about letting people understand it?",
    Panel: ThreePanel,
  },
];

export default function ExperimentLab() {
  const [active, setActive] = useState(0);

  return (
    <section id="lab" data-testid="experiment-lab-section" className="bg-linen text-chocolate px-5 md:px-10 py-24 md:py-32">
      <SectionHead no="09" kicker="Experiment Lab">
        Experiment Lab<span className="text-tangelo">.</span>
      </SectionHead>

      <div className="max-w-2xl space-y-5 mb-14">
        <Reveal>
          <p className="font-serifit italic text-2xl md:text-3xl leading-snug text-chocolate">
            I have a slightly dangerous habit of turning "wouldn't it be funny if…" into a plan. So I gave the ideas
            somewhere to go.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90">
            These aren't campaigns I've already run. They're experiments I'd want to test at Conduct. For each one, I've
            worked through the bit that usually gets skipped: why I think it might work, what I'd actually do, what I'd
            capture, and what would make me stop.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Experiments">
          {experiments.map((e, i) => (
            <button
              key={e.id}
              data-testid={`lab-tab-${e.id}`}
              onClick={() => setActive(i)}
              className={`text-left px-5 py-4 border-2 transition-colors duration-200 ${
                active === i ? "bg-chocolate text-linen border-chocolate" : "border-chocolate/40 text-chocolate hover:border-tangelo hover:text-tangelo"
              }`}
            >
              <span className={`block font-mono text-[10px] tracking-[0.2em] mb-1 ${active === i ? "text-botticelli" : "text-tangelo"}`}>
                {e.no} /
              </span>
              <span className="font-display uppercase text-xl md:text-2xl leading-none">{e.title}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="font-serifit italic text-xl md:text-2xl text-chocolate/85 max-w-3xl mb-12" data-testid="lab-subtitle">
          "{experiments[active].sub}"
        </p>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          data-testid="lab-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          {active === 0 && <SapPanel />}
          {active === 1 && <BlackBoxPanel />}
          {active === 2 && <ThreePanel />}
        </motion.div>
      </AnimatePresence>

      <div className="grid sm:grid-cols-3 gap-3 mt-20 pt-10 border-t-2 border-chocolate" data-testid="lab-summary">
        {[
          ["SAP Score", "Make the problem memorable."],
          ["Black Box", "Make the product understandable."],
          ["Conduct at Three", "Make the company human."],
        ].map(([t, d]) => (
          <div key={t} className="border-2 border-chocolate p-5">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-tangelo mb-2">{t}</p>
            <p className="font-display uppercase text-xl md:text-2xl text-chocolate leading-tight">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
