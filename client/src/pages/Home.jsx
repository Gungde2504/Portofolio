import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Journey from "../components/sections/Journey";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}




