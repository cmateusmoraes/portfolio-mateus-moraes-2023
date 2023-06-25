import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/Sections/AboutUs";

const Portfolio = dynamic(() =>
  import("../components/Sections/Portfolio").then(module => module.default)
);

export default async function Home() {
  return (
    <main role="main">
      <Hero />

      {/* <Services /> */}

      <AboutUs />

      <Portfolio />
    </main>
  );
}
