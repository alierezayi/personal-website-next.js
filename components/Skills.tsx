"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

const Skills = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section id="skills" ref={ref} className="text-center min-h-[700px]">
      Skills
    </section>
  );
};

export default Skills;
