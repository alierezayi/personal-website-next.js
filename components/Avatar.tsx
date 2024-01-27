import Image from "next/image";
import { motion } from "framer-motion";

export default function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.4,
      }}
      className="hidden lg:flex relative rounded-full w-[350px] h-[350px] overflow-hidden"
    >
      <Image
        src={"/image/alirezayi-mobile.jpg"}
        width={400}
        height={400}
        alt=""
        className="w-full h-full"
      />
    </motion.div>
  );
}

export const MobileAvatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className="lg:hidden w-[180px] h-[180px] rounded-full bg-slate-700 overflow-hidden mb-10"
    >
      <Image
        src={"/image/alirezayi-mobile.jpg"}
        width={300}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </motion.div>
  );
};
