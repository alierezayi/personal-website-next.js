"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
import SubmitButton from "./SubmitButton";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

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
      className="scroll-mt-28 my-10 w-full flex flex-col items-center mb-20 sm:mb-28"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-white/80 text-center">
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
    <form
      className="flex flex-col gap-5 w-full max-w-xl mt-5"
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }}
    >
      <input
        className="w-full py-3 px-2 border rounded-xl outline-none bg-gray-950/95 border-gray-800 hover:border-gray-700 transition"
        type="text"
        name="senderEmail"
        placeholder="Email Adress"
        required
        maxLength={500}
      />

      <textarea
        className="w-full py-3 px-2 border rounded-xl outline-none min-h-[200px] bg-gray-950/95 border-gray-800 hover:border-gray-700 transition"
        name="message"
        placeholder="Message"
        required
        maxLength={5000}
      />

      <SubmitButton />
    </form>
  );
};
