import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/Sections/AboutUs";
import { Portfolio } from "@/components/Sections/Portfolio";
import { AboutSite } from "@/components/Sections/AboutSite";

export default async function Home() {
  return (
    <main role="main">
      <Hero />

      <AboutUs />

      <Portfolio />

      <AboutSite />
    </main>
  );
}
