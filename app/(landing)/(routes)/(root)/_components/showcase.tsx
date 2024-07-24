"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dashboardPic from "@/public/dashboard.png";
import dashboardDarkPic from "@/public/dashboard-dark.png";

export default function Showcase() {
  return (
    <section style={
      {
        perspective: "500px",
      }
    }>
    <motion.div
      initial={{
        y: 200,
        filter: "blur(3px)",
        rotateX: "10deg",
        opacity: 0,
      }}
      animate={{
        y: 0,
        rotateX: "0deg",
        filter: "blur(0px)",
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 1.5,
        delay: 0.75,
      }}
      className="flex justify-center relative -mt-16 lg:-mt-32  max-w-screen-xl mx-auto"
      style={
        {
        transformStyle: "preserve-3d",
        }
      }
    >
      <Image
        src={dashboardPic}
        alt="sumai-dashboard"
        className="rounded w-full border border-border/40 dark:hidden"
        placeholder="blur"
      />
      <Image
        src={dashboardDarkPic}
        alt="sumai-dashboard"
        className="rounded w-full border border-border/40 hidden dark:block"
        placeholder="blur"
      />
      <div className="w-full h-1/2 bg-gradient-to-t from-background via-background to-transparent absolute bottom-0 left-0" />
    </motion.div>
  </section>
  )
}
