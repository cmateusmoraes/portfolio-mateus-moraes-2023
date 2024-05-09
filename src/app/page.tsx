import { AboutSite } from "@/components/Sections/AboutSite";
import { AboutUs } from "@/components/Sections/AboutUs";
import { Hero } from "@/components/Sections/Hero";
import { Portfolio } from "@/components/Sections/Portfolio";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutUs />

      <Portfolio />

      <AboutSite />
    </main>
  );
}
