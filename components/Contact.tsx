"use client";

import { useSectionInView } from "@/hooks/useSectionInView";

const Contact = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <div id="contact" ref={ref} className="text-center min-h-[700px]">
      Contact
    </div>
  );
};

export default Contact;
