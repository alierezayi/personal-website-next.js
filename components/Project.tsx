"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/constants";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  tags,
  imageUrl,
  deployment,
  source,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group border border-black/5 rounded-xl overflow-hidden relative transition text-white bg-gray-700 pt-4 pb-7 px-5 sm:pt-7 flex flex-col gap-10 max-w-xl"
    >
      <Image
        width={400}
        height={300}
        src={imageUrl}
        className="w-full rounded-lg"
        alt=""
      />
      <div className="flex flex-col justify-between h-full">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <ul className="flex flex-wrap my-5 gap-2">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-400">Deployment</div>
            <div className="flex gap-2">
              <FiGlobe />
              <Link
                href={deployment}
                target="_blank"
                className="text-xs underline truncate"
              >
                {deployment}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-400">Source</div>
            <div className="flex gap-2">
              <FiGithub />
              <Link
                href={source}
                target="_blank"
                className="text-xs underline truncate"
              >
                {source}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
