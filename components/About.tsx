"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="my-10 lg:my-20 scroll-mt-28"
    >
      <SectionHeading>about me</SectionHeading>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="hidden lg:block">
          <Image
            src="/image/mainIconsdark.svg"
            width={420}
            height={420}
            alt="mainIconsdark"
          />
        </div>

        <div className="text-center lg:text-start leading-8 max-w-lg">
          <p>
            I am <span className="italic">Ali Rezaei</span>, born in 2003. I
            started my activity in the field of programming and IT from 2021 due
            to great interest, and I entered this field professionally from
            2022. I am a front-end developer. I enjoy building websites and
            apps. My favorite part of programming is the problem solving aspect.
            I love the feeling of finally finding a solution to a problem. My
            main stack is <span className="font-medium">React, Next.js</span>. I
            am also familiar with TypeScript. I am always looking to learn new
            technologies. I am currently looking for a{" "}
            <span className="font-medium">part-time</span> position as a
            software developer.
          </p>
          <p>
            When I&rsquo;m not coding, I play video games, watch movies, go to
            the gym, and read books. I also enjoy learning new things.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
