import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Grain, Marquee, Nav } from "@/components/Chrome";
import Hero from "@/sections/Hero";
import Built from "@/sections/Built";
import WhyRole from "@/sections/WhyRole";
import GrowthOS from "@/sections/GrowthOS";
import Scenarios from "@/sections/Scenarios";
import ProductComms from "@/sections/ProductComms";
import Freudenberg from "@/sections/Freudenberg";
import NotShips from "@/sections/NotShips";
import AgentDesk from "@/sections/AgentDesk";
import Ops from "@/sections/Ops";
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
      <WhyRole />
      <GrowthOS />
      <Scenarios />
      <ProductComms />
      <Freudenberg />
      <NotShips />
      <AgentDesk />
      <Ops />
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
