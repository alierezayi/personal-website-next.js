"use client";

import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { links } from "@/lib/constants";

const Navbar = () => {
  return (
    <div className="z-[999] fixed top-5 lg:top-[38px] left-1/2 -translate-x-1/2 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute inset-0 w-full border border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full bg-slate-800 border-black/40 bg-opacity-50"
      />
      <nav className="flex justify-center h-12">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex lg:w-full w-9 h-9 items-center justify-center px-3 py-3 transition text-gray-500 hover:text-gray-300"
                  ,{
                    "text-white":
                      "Projects" === link.name,
                  }
                )}
                href={link.hash}
              >
                <span className="inline lg:hidden text-xl z-10">{link.icon}</span>
                <span className="hidden lg:inline z-10">{link.name}</span>

                {link.name === "Projects" && (
                  <motion.span
                    className="rounded-full absolute inset-0 z-0 bg-blue-300/20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
