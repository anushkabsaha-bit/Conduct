import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Grain, Marquee, Nav } from "@/components/Chrome";
import Hero from "@/sections/Hero";
import Built from "@/sections/Built";
import GrowthOS from "@/sections/GrowthOS";
import Instinct from "@/sections/Instinct";
import Scenarios from "@/sections/Scenarios";
import Radar from "@/sections/Radar";
import ProductComms from "@/sections/ProductComms";
import Writing from "@/sections/Writing";
import AgentDesk from "@/sections/AgentDesk";
import Ops from "@/sections/Ops";
import WhyRole from "@/sections/WhyRole";
import PersonalStory from "@/sections/PersonalStory";
import Anniversary from "@/sections/Anniversary";
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
      <GrowthOS />
      <Instinct />
      <Scenarios />
      <Radar />
      <ProductComms />
      <Writing />
      <AgentDesk />
      <Ops />
      <WhyRole />
      <PersonalStory />
      <Marquee
        tone="dark"
        items={["Observe", "Analyse", "Find", "Create", "Challenge", "Execute", "Measure", "Learn", "Repeat"]}
      />
      <Anniversary />
      <Final />
    </div>
  );
}

export default App;
