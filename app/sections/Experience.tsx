"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
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
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mt-10 mb-20 lg:mb-36"
    >
      <SectionHeading>My experience</SectionHeading>

      <VerticalTimeline lineColor="#e5e7eb3e">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            {item.title ? (
              <VerticalTimelineElement
                contentStyle={{
                  background: "#374151e0",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem",
                  borderRadius: "8px",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "#64748b",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize rounded">
                  {item.title}
                </h3>

                <p className="font-normal !mt-1 !text-sm">{item.location}</p>
                <p className="!mt-5 !font-normal text-gray-300">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ) : (
              <VerticalTimelineElement
                iconStyle={{
                  background: "#64748b",
                  fontSize: "1.5rem",
                }}
                icon={item.icon}
              />
            )}
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
