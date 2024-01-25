import Link from "next/link";

import { socialMedia } from "@/lib/constants";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      {socialMedia.map((item) => (
        <Link key={item.name} href={item.href} target="_blank" className="hover:scale-125 transition hover:text-[#a40e4c]">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
