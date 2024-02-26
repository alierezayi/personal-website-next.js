"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/lib/constants";
import Image from "next/image";

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.07 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-28 my-10"
    >
      <SectionHeading>my skills</SectionHeading>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-lg text-gray-800 max-w-4xl mx-auto mt-5 lg:mt-16">
        {skillsData.map((skill, i) => (
          <motion.li
            className="rounded-xl px-5 py-3.5 bg-gray-700/90 text-white/80 flex justify-center items-center text-sm gap-3"
            key={i}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
          >
            <Image src={skill.image} width={25} height={23} alt="" />
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
