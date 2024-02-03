"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { socialMedia } from "@/lib/constants";

const Socials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }}
      className="flex items-center gap-x-5 text-xl"
    >
      {socialMedia.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          target="_blank"
          className="hover:scale-125 transition hover:text-[#a40e4c]"
        >
          {item.icon}
        </Link>
      ))}
    </motion.div>
  );
};

export default Socials;
