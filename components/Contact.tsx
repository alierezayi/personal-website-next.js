"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <div id="contact" ref={ref} className="text-center min-h-[700px]"></div>
  );
};

export default Contact;
