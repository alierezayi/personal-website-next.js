"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
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
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full scroll-mt-28 my-10 lg:my-20"
    >
      <SectionHeading>my skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-w-4xl mx-auto">
        {skillsData.map((skill, i) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3.5 dark:bg-white/10 dark:text-white/80 flex gap-2"
            key={i}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
          >
            <Image src={skill.image} width={25} height={25} alt="" />
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
