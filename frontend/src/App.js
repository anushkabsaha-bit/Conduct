import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Grain, Marquee, Nav } from "@/components/Chrome";
import Hero from "@/sections/Hero";
import Built from "@/sections/Built";
import Nails from "@/sections/Nails";
import SupperClub from "@/sections/SupperClub";
import GrowthOS from "@/sections/GrowthOS";
import RunComms from "@/sections/RunComms";
import ProductComms from "@/sections/ProductComms";
import DayAgents from "@/sections/DayAgents";
import Proof from "@/sections/Proof";
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
          "I find the story",
          "I figure out why it matters",
          "I make it",
          "I put it in front of the right people",
          "I see what happens",
          "I learn",
          "Then I find the next story",
        ]}
      />
      <Built />
      <Nails />
      <SupperClub />
      <GrowthOS />
      <RunComms />
      <ProductComms />
      <DayAgents />
      <Proof />
      <Marquee
        tone="dark"
        items={["Scout", "Find", "Frame", "Make", "Distribute", "Measure", "Learn", "Repeat"]}
      />
      <Anniversary />
      <Final />
    </div>
  );
}

export default App;
