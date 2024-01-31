"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <section id="contact" ref={ref} className="scroll-mt-28 my-10">
      <SectionHeading>Contact Me</SectionHeading>
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Company Email</label>
            <input required name="email" id="email" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea required id="textarea" name="textarea" />
          </div>
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
