"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "../SectionHeading";
import { projectsData } from "@/lib/constants";
import Project from "../Project";
import React from "react";

const Projects = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-28 my-10"
    >
      <SectionHeading>my projects</SectionHeading>

      <div className="grid lg:grid-cols-2 gap-10 mt-5 lg:mt-16 mx-auto max-w-4xl">
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
