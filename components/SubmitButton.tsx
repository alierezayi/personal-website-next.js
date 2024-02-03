import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-full sm:w-[8rem] bg-gray-300/90 text-black rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
    >
      Send{" "}
      <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
    </button>
  );
}
