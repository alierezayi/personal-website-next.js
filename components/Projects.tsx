"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <div id="projects" ref={ref} className="text-center min-h-[700px]">
      Projects
    </div>
  );
};

export default Projects;
