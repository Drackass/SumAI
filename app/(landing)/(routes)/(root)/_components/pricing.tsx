"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20">
      <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mt-10 mb-5">
        Pay once, use forever
      </h2>
      <p className="text-2xl text-muted-foreground text-center">
      Screen Studio is a one-time purchase. You get all the features in every plan.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20">
        <motion.div
          initial={{
            y: 20,
            filter: "blur(3px)",
            opacity: 0,
          }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 1,
          }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "200px",
          }}
          className="h-full"
        >
          <Card className="bg-muted/50 h-full flex flex-col hover:border-indigo-600/40 transition-all">
            <CardHeader>
              <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Free
              </p>
              <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                $0
              </CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                Perfect for passion projects & simple websites.
              </CardDescription>
            </CardHeader>
            <CardContent className="lg:mt-20">
              <ul className="my-6 [&>li]:mt-2 w-full">
                <li className="flex items-center gap-3 ">
                  <CircleCheck
                    size={20}
                    className="text-indigo-600/70 shrink-0"
                  />
                  Unlimited audio recordings, notes, and flashcards
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck
                    size={20}
                    className="text-indigo-600/70 shrink-0"
                  />
                  YouTube video summaries, notes, flashcards, and more
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck
                    size={20}
                    className="text-indigo-600/70 shrink-0"
                  />
                  Unlimited audio recordings, notes, and flashcards
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center mt-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full lg:w-auto "
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{
            y: 20,
            filter: "blur(3px)",
            opacity: 0,
          }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0,
          }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden rounded-lg border border-border p-[1px] shadow-2xl dark:shadow-indigo-950/50 hover: shadow-indigo-600/40 backdrop-blur-3xl"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="inline-flex h-full w-full items-center justify-center rounded-lg bg-background backdrop-blur-3xl">
            <Card className="h-full w-full bg-muted/40 flex flex-col rounded-lg">
              <CardHeader>
                <p className="scroll-m-20 font-semibold tracking-tight inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent">
                  Extended
                </p>
                <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  $189
                </CardTitle>
                <CardDescription className="text-xl text-muted-foreground">
                  Great for multi-devices setups & small teams.
                </CardDescription>
              </CardHeader>
              <CardContent className="lg:mt-20">
                <ul className="my-6 [&>li]:mt-2 w-full">
                  <li className="flex items-center gap-3 ">
                    <CircleCheck
                      size={20}
                      className="text-indigo-600/70 shrink-0"
                    />
                    Unlimited audio recordings, notes, and flashcards
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck
                      size={20}
                      className="text-indigo-600/70 shrink-0"
                    />
                    YouTube video summaries, notes, flashcards, and more
                  </li>
                  <li className="flex items-center gap-3">
                    <CircleCheck
                      size={20}
                      className="text-indigo-600/70 shrink-0"
                    />
                    Unlimited audio recordings, notes, and flashcards
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center mt-auto">
                <Button
                  size="lg"
                  className="bg-indigo-600 text-white  hover:bg-indigo-600/90 w-full lg:w-auto"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>

        <motion.div
          initial={{
            y: 20,
            filter: "blur(3px)",
            opacity: 0,
          }}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.5,
          }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="h-full"
        >
          <Card className="bg-muted/50 h-full flex flex-col hover:border-indigo-600/40 transition-all">
            <CardHeader>
              <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Standard
              </p>
              <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                $89
              </CardTitle>
              <CardDescription className="text-xl text-muted-foreground">
                Pay-once license for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="lg:mt-20">
              <ul className="my-6 [&>li]:mt-2 w-full">
                <li className="flex items-center gap-3 ">
                  <CircleCheck
                    size={20}
                    className="text-indigo-600/70 shrink-0"
                  />
                  Unlimited audio recordings, notes, and flashcards
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck
                    size={20}
                    className="text-indigo-600/70 shrink-0"
                  />
                  YouTube video summaries, notes, flashcards, and more
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck
                    size={20}
                    className="text-indigo-600/70 shrink-0"
                  />
                  Unlimited audio recordings, notes, and flashcards
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center mt-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full lg:w-auto"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
