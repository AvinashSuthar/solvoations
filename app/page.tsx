import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import Hero from "@/components/Hero";
import { NavbarR } from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-black">
      <NavbarR />
      <Hero />
      <About />
      <Faq />
      <Projects />
      <Services />
      <Contact/>
    </div>
  );
}
