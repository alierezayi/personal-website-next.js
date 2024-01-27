"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

const Experience = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <div id="experience" ref={ref} className="text-center min-h-[700px]">
      Experience
    </div>
  );
};

export default Experience;
