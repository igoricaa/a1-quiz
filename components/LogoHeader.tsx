import { motion } from "motion/react";
import Image from "next/image";

const LogoHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="size-24 3xl:size-34 absolute top-8 left-8"
    >
      <Image
        src="/a1-logo.png"
        alt="A1 Logo"
        fill
        className="object-contain"
        priority
      />
    </motion.div>
  );
};

export default LogoHeader;
