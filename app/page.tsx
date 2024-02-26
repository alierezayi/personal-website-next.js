import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import SectionDivider from "@/components/SectionDivider";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-5">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />  
      <Experience />
      <Contact />
    </main>
  );
}
