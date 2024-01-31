"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
import SubmitButton from "./SubmitButton";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      ref={ref}
      className="scroll-mt-28 my-10 w-full flex flex-col items-center"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 dark:text-white/80 text-center">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:im1.bitcode@gmail.com">
          im1.bitcode@gmail.com
        </a>{" "}
      </p>

      <Form />
    </motion.section>
  );
};

export default Contact;

const Form = () => {
  return (
    <div className="form-container w-full max-w-xl border-2 border-transparent py-8 px-6 text-sm flex flex-col gap-5 box-border rounded-xl bg-opacity-60 mt-5">
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs text-gray-400">
            Email Adress
          </label>
          <input
            className="w-full py-3 px-2  border border-gray-800 rounded-lg outline-none bg-gray-800/30"
            name="email"
            id="email"
            type="text"
            required
            maxLength={500}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="textarea" className="text-xs text-gray-400">
            Message
          </label>
          <textarea
            className="w-full py-3 px-2  border border-gray-800 rounded-lg outline-none min-h-[150px] bg-gray-800/30"
            id="textarea"
            name="textarea"
            required
            maxLength={5000}
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};
