import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Grain, Marquee, Nav } from "@/components/Chrome";
import Hero from "@/sections/Hero";
import Built from "@/sections/Built";
import WhyRole from "@/sections/WhyRole";
import GrowthOS from "@/sections/GrowthOS";
import Problem from "@/sections/Problem";
import ProductComms from "@/sections/ProductComms";
import AgentDesk from "@/sections/AgentDesk";
import Freudenberg from "@/sections/Freudenberg";
import ExperimentLab from "@/sections/ExperimentLab";
import Ops from "@/sections/Ops";
import PersonalStory from "@/sections/PersonalStory";
import Final from "@/sections/Final";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App bg-ink text-linen min-h-screen">
      <Grain />
      <Nav />
      <Hero />
      <Marquee
        tone="orange"
        items={[
          "What happened?",
          "Why?",
          "If I were there…",
          "What would I do differently?",
          "Test it",
          "Learn",
          "Repeat",
        ]}
      />
      <Built />
      <WhyRole />
      <GrowthOS />
      <Problem />
      <ProductComms />
      <AgentDesk />
      <Freudenberg />
      <ExperimentLab />
      <Ops />
      <PersonalStory />
      <Marquee
        tone="dark"
        items={["Observe", "Analyse", "Find", "Create", "Challenge", "Execute", "Measure", "Learn", "Repeat"]}
      />
      <Final />
    </div>
  );
}

export default App;
