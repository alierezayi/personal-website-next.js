"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="pb-5 px-2 flex flex-col lg:flex-row justify-between items-center pt-28 gap-8 lg:pt-12 lg:gap-0">
      <Logo />
      <Socials />
    </header>
  );
};

export default Header;

const Logo = () => {
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
    >
      <Image
        src="/image/ali-logo.png"
        width={60}
        height={30}
        alt=""
        quality={95}
      />
    </motion.div>
  );
};
