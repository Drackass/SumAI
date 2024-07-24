"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


interface TestimonialProps {
  avatar: string;
  name: string;
  message: string;
}
export default function Feedback(testimonial: TestimonialProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
      smooth: 0.1,
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    
  return (
    <motion.div 
    ref={ref}
    style={{ scale: scaleProgess, opacity: opacityProgess }}
    className="bg-muted/50 rounded-2xl p-6 flex flex-col gap-3 z-10 break-inside-avoid-column"
    >
      <div className="flex items-center gap-3">
        <div className="p-5 bg-muted rounded-full" />
        <p className="text-lg font-semibold">{testimonial.name}</p>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{testimonial.message}</p>
      </div>
    </motion.div>
  );
}
