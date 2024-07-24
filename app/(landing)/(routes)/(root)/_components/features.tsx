"use client";
import React from "react";
import { motion } from "framer-motion";
import { features } from "@/db/local-data";

const fadeInAnimationVariants = {
  initial: {
    y: 10,
    filter: "blur(3px)",
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.25,
      delay: index * 0.15,
    },
  }),
};

export default function Features() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 -mt-10 sm:-mt-14 md:-mt-20 lg:-mt-40 z-10 w-full max-w-screen-lg mx-auto scroll-m-24" id="features">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          className="bg-muted/50 rounded p-4 sm:p-6 flex flex-col gap-1 sm:gap-3 z-10"
        >
          <div className="text-2xl bg-accent rounded w-12 h-12 flex justify-center items-center">
            {feature.emoji}
          </div>
          <p className="text-lg font-semibold">{feature.title}</p>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </section>
  );
}
