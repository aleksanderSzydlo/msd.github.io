import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Philosophy from "./components/sections/Philosophy";
import Projects from "./components/sections/Projects";
import Offer from "./components/sections/Offer";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Philosophy />
      <Projects />
      <Offer />
      <Contact />
    </main>
  );
}
