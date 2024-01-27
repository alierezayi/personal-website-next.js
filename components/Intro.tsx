"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { personalData } from "@/lib/constants";
import Avatar, { MobileAvatar } from "./Avatar";
import ParticlesPattern from "./Particles";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/hooks/useSectionInView";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="w-full relative flex flex-col items-center lg:flex-row scroll-mt-[100rem] my-10 lg:my-20"
    >
      <ParticlesPattern />
      <MobileAvatar />
      <Content />
      <Avatar />
    </section>
  );
};

export default Intro;

const Content = () => {
  return (
    <div className="lg:flex-1 flex flex-col items-center lg:items-start w-full">
      <motion.h2
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-semibold !leading-[1.5] sm:text-4xl text-sky-400"
      >
        Ali Rezaei
      </motion.h2>

      <motion.div
        className="mb-10 mt-2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ReactTyped
          strings={[
            "Software engineer",
            "JavaScript developer",
            "Web developer",
            "Front-End developer",
          ]}
          typeSpeed={60}
          backSpeed={40}
          className="text-white text-3xl font-medium !leading-[1.5] sm:text-5xl"
          loop
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-5 justify-center lg:justify-start w-full mb-12"
      >
        <Link
          className="group h-12 px-7 py-3 flex font-medium items-center gap-2 z-10 rounded-full  outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack bg-white/10"
          href=""
          download
        >
          Download CV
          <HiDownload
            size={20}
            className="opacity-60 group-hover:translate-y-1 transition-transform"
          />
        </Link>
        <Link
          className="p-4 w-12 h-12 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
          href="https://github.com/alierezayi"
          target="_blank"
        >
          <FaGithub />
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.4,
              staggerChildren: 0.7,
            },
          },
        }}
        className="flex flex-col sm:flex-row gap-7 w-full sm:w-auto"
      >
        {personalData.map((item, i) => (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            key={i}
            className="flex flex-col  gap-3 relative pl-3"
          >
            <div className="absolute h-full w-[3px] inset-y-0 left-0 bg-white/50 rounded-full" />

            <span className="text-lg text-white/80">{item.icon}</span>
            <span className="text-sm text-white">{item.info}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
