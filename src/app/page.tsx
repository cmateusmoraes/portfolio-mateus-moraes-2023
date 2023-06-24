import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/Sections/AboutUs";
import { Portfolio } from "@/components/Sections/Portfolio";

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
