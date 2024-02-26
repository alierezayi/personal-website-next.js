import Intro from "@/app/sections/Intro";
import SectionDivider from "@/components/SectionDivider";
import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Experience from "@/app/sections/Experience";
import Projects from "@/app/sections/Projects";
import Skills from "@/app/sections/Skills";



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
