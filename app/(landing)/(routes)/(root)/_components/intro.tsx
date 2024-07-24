"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { School } from "lucide-react";
import BtnGetStarted from "./btnGetStarted";
import BtnGithub from "./btnGithub";

export default function Intro() {
  return (
    <section id="intro" className="scroll-mt-[100rem]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 1,
          delay: 0,
        }}
        className="relative mx-auto flex flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 max-w-3xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        <Badge
          variant="outline"
          className="bg-muted-foreground/95 border-border/40 border backdrop-blur supports-[backdrop-filter]:bg-muted/25 px-4 py-2 flex gap-2 items-center"
        >
          <School size={15} /> Epitech 2024 end-of-year project
        </Badge>
        <h1 className="relative text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-balance">
          Welcome to SumAI 👋
        </h1>
        <span className="relative max-w-[750px] text-center text-lg font-light text-foreground">
          Turn audio & video into <b className="text-lg font-semibold">notes</b>
          , <b className="text-lg font-semibold">flashcards</b>,{" "}
          <b className="text-lg font-semibold">quizzes</b>, and more.
        </span>
        <div className="relative flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <BtnGetStarted />
          <BtnGithub />
        </div>
      </motion.div>
    </section>
  );
}
