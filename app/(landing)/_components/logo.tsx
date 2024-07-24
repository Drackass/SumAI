"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link
      href="#intro"
      className="items-center gap-3 font-semibold mr-5 hidden md:flex"
    >
      <motion.div
        initial={{
          rotateZ: -180,
          scale: 0,
          opacity: 0,
        }}
        animate={{
          rotateZ: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 0.75,
          delay: 0.5,
        }}
      >
        <Image
          src="/branding/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="hover:rotate-180 hover:scale-110 transition duration-1000"
        />
      </motion.div>
      <motion.div 
        initial={{
          filter: "blur(10px)",
          opacity: 0,
        }}
        animate={{
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 4,
          delay: 1,
        }}
      className=""
      >SumAI</motion.div>
    </Link>
  );
}
