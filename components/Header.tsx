import Image from "next/image";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="pb-12 px-2 flex flex-col lg:flex-row justify-between items-center pt-24 gap-6 lg:pt-12 lg:gap-0">
      <Logo />
      <Socials />
    </header>
  );
};

export default Header;

const Logo = () => {
  return (
    <Image
      src="/image/ali-logo.png"
      width={60}
      height={30}
      alt=""
      quality={95}
    />
  );
};
