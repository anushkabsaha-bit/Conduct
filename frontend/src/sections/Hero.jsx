import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Tag } from "../components/Shared";

const CONDUCT_LOGO_URL =
  "https://customer-assets-jt897jd0.emergentagent.net/job_28f8e28b-843a-47dd-964d-510eaa7c3e63/artifacts/acf2885f8dfbe92e_IMG_4800.jpeg";

const MaskLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
    <motion.span
      className="block will-change-transform"
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const float = (i, r = 0) => ({
  animate: { y: [0, -4, 0], rotate: [r, r + 0.7, r] },
  transition: { repeat: Infinity, duration: 5.5 + i * 0.9, ease: "easeInOut" },
});

const TapeStrip = ({ className = "" }) => (
  <span
    aria-hidden="true"
    className={`absolute w-14 h-4 bg-botticelli/50 shadow-sm ${className}`}
  />
);

const Tack = ({ className = "" }) => (
  <span
    aria-hidden="true"
    className={`absolute w-3 h-3 rounded-full bg-tangelo shadow-md ${className}`}
  />
);

const Portrait = ({ seed, className = "" }) => {
  const tones = [
    { bg: "#8DB6C7", head: "#663924", body: "#D54C15" },
    { bg: "#F9E8D4", head: "#D54C15", body: "#663924" },
    { bg: "#663924", head: "#F9E8D4", body: "#8DB6C7" },
    { bg: "#D54C15", head: "#F9E8D4", body: "#663924" },
  ];
  const t = tones[seed % tones.length];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect width="100" height="100" fill={t.bg} />
      <circle cx={42 + (seed % 3) * 8} cy={34 + (seed % 2) * 4} r="15" fill={t.head} />
      <path d={`M18 100 Q50 ${52 + (seed % 3) * 6} 82 100 Z`} fill={t.body} />
      <rect x="70" y="12" width="16" height="3" fill={t.head} opacity="0.6" />
      <rect x="70" y="19" width="10" height="3" fill={t.head} opacity="0.4" />
    </svg>
  );
};

const Polaroid = ({ name, note, seed, rotate = 0, delay = 0, className = "", slide = false, testid }) => (
  <motion.div
    data-testid={testid}
    initial={{ opacity: 0, y: 24, x: slide ? 50 : 0, rotate: rotate - 4 }}
    animate={{ opacity: 1, y: 0, x: 0, rotate }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute ${className}`}
  >
    <motion.div {...float(seed, rotate)} className="bg-white p-2 pb-3 shadow-lg w-32 md:w-36">
      <Tack className="-top-1.5 left-1/2 -translate-x-1/2 z-10" />
      <Portrait seed={seed} className="w-full h-auto block" />
      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-chocolate mt-2 text-center">{name}</p>
      {note && <p className="font-[Caveat] text-sm text-chocolate/70 text-center leading-tight">{note}</p>}
    </motion.div>
  </motion.div>
);

const Scrap = ({ id, title, note, annotation, rotate = 0, delay = 0, active, onClick, className = "", testid }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotate: rotate - 3 }}
    animate={{ opacity: 1, scale: 1, rotate }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    <motion.button
      data-testid={testid}
      onClick={() => onClick(id)}
      {...float(title.length, rotate)}
      whileTap={{ scale: 0.96 }}
      className={`relative block text-left bg-[#FFFDF6] border border-chocolate/30 shadow-md px-4 py-3 w-44 md:w-48 transition-[box-shadow,transform] duration-300 ${
        active ? "scale-110 z-30 shadow-xl" : "z-10"
      }`}
    >
      <TapeStrip className="-top-2 left-1/2 -translate-x-1/2 -rotate-3" />
      <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-chocolate">{title}</span>
      <span className="block font-[Caveat] text-base text-chocolate/70 leading-tight mt-1">{note}</span>
      <AnimatePresenceInline show={active}>
        <span className="block font-[Caveat] text-lg text-tangelo leading-tight mt-2 border-t border-chocolate/20 pt-2">
          {annotation}
        </span>
      </AnimatePresenceInline>
    </motion.button>
  </motion.div>
);

const AnimatePresenceInline = ({ show, children }) =>
  show ? (
    <motion.span
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="block overflow-hidden"
    >
      {children}
    </motion.span>
  ) : null;

const Note = ({ children, rotate = 0, delay = 0, className = "", big = false }) => (
  <motion.p
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay }}
    className={`font-[Caveat] text-chocolate/80 ${big ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} ${className}`}
    style={{ rotate: `${rotate}deg` }}
  >
    {children}
  </motion.p>
);

export default function Hero() {
  const { scrollY } = useScroll();
  const yBig = useTransform(scrollY, [0, 900], [0, -110]);
  const [activeScrap, setActiveScrap] = useState(null);
  const toggle = (id) => setActiveScrap(activeScrap === id ? null : id);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col pt-24 md:pt-28 overflow-hidden bg-linen"
    >
      {/* ---- the wall: right column (desktop) ---- */}
      <div className="hidden md:block" aria-hidden="true">
        <motion.div
          data-testid="wall-logo"
          initial={{ opacity: 0, y: -18, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute top-24 right-[5%] z-10"
        >
          <motion.div {...float(2, 2)} className="bg-[#FFFDF6] border border-chocolate/25 shadow-md p-3 w-28">
            <TapeStrip className="-top-2 left-1/2 -translate-x-1/2 rotate-2" />
            <img src={CONDUCT_LOGO_URL} alt="Conduct logo" className="w-full h-auto block" />
            <p className="font-[Caveat] text-sm text-chocolate/70 text-center mt-1">the company</p>
          </motion.div>
        </motion.div>

        <Polaroid name="Henry" note="CTO / builder" seed={0} rotate={3} delay={1.35} className="top-[34%] right-[3%]" testid="polaroid-henry" />
        <Polaroid name="Philip" note="founder / builder" seed={1} rotate={-2.5} delay={1.5} className="top-[52%] right-[13%]" testid="polaroid-philip" />
        <Polaroid name="JP" note="founder / builder" seed={2} rotate={2} delay={1.65} slide className="top-[70%] right-[4%]" testid="polaroid-jp" />
      </div>

      {/* ---- headline ---- */}
      <div className="px-5 md:px-10 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 mb-8 md:mb-10"
        >
          <Tag>Application</Tag>
          <Tag tone="outline">Communications Strategist</Tag>
          <Tag tone="botticelli">Conduct · London / NYC</Tag>
        </motion.div>

        <motion.h1
          style={{ y: yBig }}
          data-testid="hero-kinetic-headline"
          className="font-display uppercase leading-[0.92] text-[11.5vw] md:text-[7.2vw] tracking-[0.005em] md:max-w-[70%]"
        >
          <MaskLine delay={0.35}>
            <span className="text-chocolate">I have a slightly</span>
          </MaskLine>
          <MaskLine delay={0.5}>
            <span className="text-tangelo">annoying habit.</span>
          </MaskLine>
          <MaskLine delay={0.72}>
            <span className="text-chocolate">When I see a problem,</span>
          </MaskLine>
          <MaskLine delay={0.87}>
            <span className="text-chocolate">I start asking what</span>
          </MaskLine>
          <MaskLine delay={1.02}>
            <span className="outline-text">I'd have done differently.</span>
          </MaskLine>
        </motion.h1>
      </div>

      {/* ---- the wall: bottom band ---- */}
      <div className="relative z-10 px-5 md:px-10 mt-12 md:mt-16 pb-6 flex-1">
        <div className="relative flex flex-wrap items-start gap-x-6 gap-y-8 md:gap-x-10">
          <Note big rotate={-2} delay={1.4} className="max-w-[240px]" data-testid="note-core">
            <span data-testid="note-core-question">
              "If I were there, what would I do differently?"
            </span>
          </Note>

          <div className="relative pt-2">
            <Note rotate={2} delay={1.55}>why?</Note>
            <Note rotate={-1.5} delay={1.65}>who cares?</Note>
          </div>

          <div className="relative pt-2">
            <Note rotate={-2} delay={1.7}>
              <span className="line-through decoration-tangelo decoration-2">just post more.</span>
            </Note>
            <Note rotate={1.5} delay={1.85} className="text-tangelo">make it make sense.</Note>
          </div>

          <div className="relative pt-2">
            <Note rotate={1} delay={1.9}>ask product.</Note>
            <Note rotate={-2} delay={2.0}>test it.</Note>
            <Note rotate={1.5} delay={2.1}>what would I ship?</Note>
          </div>

          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.8 }}
            viewBox="0 0 120 60"
            className="hidden lg:block w-24 text-chocolate/60 self-center"
            aria-hidden="true"
          >
            <path d="M6 50 C 40 55, 70 40, 108 14" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
            <path d="M98 12 L110 12 L104 24" fill="none" stroke="currentColor" strokeWidth="2" />
          </motion.svg>

          <div className="flex flex-wrap gap-5 md:gap-6 items-start">
            <Scrap
              id="os"
              testid="scrap-growth-os"
              title="Conduct Growth OS"
              note="38 posts. one question."
              annotation="I wasn't asked to build this."
              rotate={-1.5}
              delay={1.8}
              active={activeScrap === "os"}
              onClick={toggle}
            />
            <Scrap
              id="blackbox"
              testid="scrap-black-box"
              title="Black Box"
              note="do people actually understand Conduct?"
              annotation="10 unfamiliar people. Could they explain it?"
              rotate={2}
              delay={1.9}
              active={activeScrap === "blackbox"}
              onClick={toggle}
            />
            <Scrap
              id="pxc"
              testid="scrap-product-comms"
              title="Product × Comms"
              note="what's technically interesting?"
              annotation="Understand it before communicating it."
              rotate={-2}
              delay={2.0}
              active={activeScrap === "pxc"}
              onClick={toggle}
            />
            <Scrap
              id="freud"
              testid="scrap-freudenberg"
              title="Freudenberg"
              note="process documentation × reality"
              annotation="If I were telling this story…"
              rotate={1.5}
              delay={2.1}
              active={activeScrap === "freud"}
              onClick={toggle}
            />
          </div>

          <div className="relative pt-2 hidden sm:block">
            <Note rotate={-1} delay={2.2}>anniversary · test before scaling.</Note>
            <Note rotate={2} delay={2.3}>community · why do people come back?</Note>
          </div>

          <motion.div
            data-testid="wall-supper-polaroid"
            initial={{ opacity: 0, y: 24, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 2.5 }}
            transition={{ duration: 0.9, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div {...float(4, 2.5)} className="bg-white p-2 pb-3 shadow-lg w-36 md:w-44">
              <Tack className="-top-1.5 left-1/2 -translate-x-1/2 z-10" />
              <img
                src="https://customer-assets-jt897jd0.emergentagent.net/job_28f8e28b-843a-47dd-964d-510eaa7c3e63/artifacts/df4eee8125baf3c1_9863b8b2-9e0b-40fb-bcab-c819dd7cd52b.jpeg"
                alt="Polaroid of my supper club, friends crowded onto a sofa after dinner"
                className="w-full h-auto block"
              />
              <p className="font-[Caveat] text-sm md:text-base text-chocolate/80 text-center leading-tight mt-2">
                Conduct has its fridge magnet. I have mine. This is a supper club I started.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* mobile polaroids */}
        <div className="flex md:hidden gap-4 mt-10" data-testid="wall-mobile">
          {[
            ["Henry", "CTO / builder", 0],
            ["Philip", "founder / builder", 1],
            ["JP", "founder / builder", 2],
          ].map(([name, note, seed]) => (
            <div key={name} className="bg-white p-1.5 pb-2 shadow-md w-24" style={{ rotate: `${(seed - 1) * 3}deg` }}>
              <Portrait seed={seed} className="w-full h-auto block" />
              <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-chocolate mt-1.5 text-center">{name}</p>
              <p className="font-[Caveat] text-xs text-chocolate/70 text-center leading-tight">{note}</p>
            </div>
          ))}
          <div className="bg-[#FFFDF6] border border-chocolate/25 shadow-md p-2 w-20 self-start" style={{ rotate: "2deg" }}>
            <img src={CONDUCT_LOGO_URL} alt="Conduct logo" className="w-full h-auto block" />
          </div>
        </div>
      </div>

      {/* ---- explanation + name / roles / start here ---- */}
      <div className="relative z-20 px-5 md:px-10 pb-8 max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.7 }}
          className="font-mono text-sm md:text-base leading-relaxed text-chocolate/90"
          data-testid="hero-explanation"
        >
          I tend to put myself in the room. If something isn't working, I want to understand why, what I would change,
          and what I could test.
        </motion.p>
      </div>
      <div className="relative z-20 border-t border-chocolate/30 mx-5 md:mx-10 py-5 mb-2 flex flex-wrap items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.7 }}
          className="font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase text-chocolate"
          data-testid="hero-name-roles"
        >
          Anushka Saha · Builder / Operator / Communications
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.35, duration: 0.7 }}
          href="#built"
          data-testid="hero-start-here"
          className="group inline-flex items-center gap-3 font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase text-tangelo hover:text-chocolate transition-colors"
        >
          Start here
          <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
        </motion.a>
      </div>
    </section>
  );
}
