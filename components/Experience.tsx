"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/constants";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#1e293b",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem",
                borderRadius: "12px",
                position: "relative",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgb(255, 255, 255)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "#64748b",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize rounded">{item.title}</h3>
              <p className="font-normal !mt-0 !text-sm">{item.location}</p>
              <p className="!mt-4 !font-normal text-white/60">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
