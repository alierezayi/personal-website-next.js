import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col text-gray-500 mb-10 gap-5">
      <p className="text-xs">
        © 2024 Ali Rezaei. All rights reserved.
      </p>

      <div className="flex gap-5 items-center text-sm">
        <span>Follow Me</span>
        <span className="w-4 h-[2px] bg-gray-500 rounded-full" />
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
