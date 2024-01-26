import Image from "next/image";
import { motion } from "framer-motion";

export default function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className="hidden lg:flex relative"
    >
      <Image
        src={"/image/avatar.png"}
        width={500}
        height={400}
        alt=""
        className=""
      />
      <div className="absolute inset-x-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-slate-900 to-transparent" />
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
        src={"/image/avatar.png"}
        width={300}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </motion.div>
  );
};
