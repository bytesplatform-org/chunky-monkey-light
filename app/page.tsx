import { Adventure } from "@/components/sections/Adventure";
import { FinalCta, Footer } from "@/components/sections/FinalCta";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Parties } from "@/components/sections/Parties";
import { Playground } from "@/components/sections/Playground";
import { Rides } from "@/components/sections/Rides";
import { Scoreboard } from "@/components/sections/Scoreboard";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Adventure />
        <Scoreboard />
        <Rides />
        <Parties />
        <Playground />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
