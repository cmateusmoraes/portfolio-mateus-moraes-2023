import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/Sections/AboutUs";
import { Portfolio } from "@/components/Sections/Portfolio";
import { Experiment } from "@/components/Sections/Experiment";

export default async function Home() {
  return (
    <main role="main">
      <Hero />

      <AboutUs />

      <Portfolio />

      <Experiment />
    </main>
  );
}
