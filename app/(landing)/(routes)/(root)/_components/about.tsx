"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [item, setItem] = useState("0");
  return (
    <section id="about" className="scroll-mt-20 w-full max-w-screen-lg mx-auto">
      <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mt-10 mb-5">
        Record webcam, microphone and system audio
      </h2>
      <p className="text-2xl text-muted-foreground text-center">
        Screen Studio makes it easy to create full-featured courses, tutorials,
        team updates and demos.
      </p>
      <div className="grid md:grid-cols-5 gap-4 md:gap-10 mt-20 w-full">
        <div className="md:col-span-2  ">
          <ul className="flex flex-col gap-4">
            <RadioGroup onValueChange={(e) => setItem(e)} defaultValue="0">
              <div className="flex items-center w-full">
                <RadioGroupItem value="0" id="0" className="sr-only" />
                <Label htmlFor="0">
                  <li
                    className={cn(
                      "p-5 cursor-pointer rounded flex flex-col gap-2",
                      item === "0"
                        ? "bg-muted/50"
                        : "hover:bg-muted/30 transition"
                    )}
                  >
                    <p className="text-lg font-semibold">
                      Record and adjust your webcam
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Your selfie overlays the video and slightly zooms out to
                      avoid covering your mouse cursor.
                    </p>
                  </li>
                </Label>
              </div>

              <div className="flex items-center w-full">
                <RadioGroupItem value="1" id="1" className="sr-only" />
                <Label htmlFor="1">
                  <li
                    className={cn(
                      "p-5 cursor-pointer rounded flex flex-col gap-2",
                      item === "1"
                        ? "bg-muted/50"
                        : "hover:bg-muted/30 transition"
                    )}
                  >
                    <p className="text-lg font-semibold">
                      Record and adjust your webcam
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Your selfie overlays the video and slightly zooms out to
                      avoid covering your mouse cursor.
                    </p>
                  </li>
                </Label>
              </div>

              <div className="flex items-center w-full">
                <RadioGroupItem value="2" id="2" className="sr-only" />
                <Label htmlFor="2">
                  <li
                    className={cn(
                      "p-5 cursor-pointer rounded flex flex-col gap-2",
                      item === "2"
                        ? "bg-muted/50"
                        : "hover:bg-muted/30 transition"
                    )}
                  >
                    <p className="text-lg font-semibold">
                      Record and adjust your webcam
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Your selfie overlays the video and slightly zooms out to
                      avoid covering your mouse cursor.
                    </p>
                  </li>
                </Label>
              </div>

              <div className="flex items-center w-full">
                <RadioGroupItem value="3" id="3" className="sr-only" />
                <Label htmlFor="3">
                  <li
                    className={cn(
                      "p-5 cursor-pointer rounded flex flex-col gap-2",
                      item === "3"
                        ? "bg-muted/50"
                        : "hover:bg-muted/30 transition"
                    )}
                  >
                    <p className="text-lg font-semibold">
                      Record and adjust your webcam
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Your selfie overlays the video and slightly zooms out to
                      avoid covering your mouse cursor.
                    </p>
                  </li>
                </Label>
              </div>
            </RadioGroup>
          </ul>
        </div>
        <div className="md:col-span-3 flex flex-col justify-between">
          <motion.div
            style={{
              order: Number(item) * 2,
            }}
            layout
          >
            <video
              autoPlay
              playsInline
              loop
              muted
              preload="auto"
              className={cn("rounded sticky top-20 ", item !== "0" && "hidden")}
            >
              <source src="/videos/0.mov" type="video/mp4" />
            </video>

            <video
              autoPlay
              playsInline
              loop
              muted
              preload="auto"
              className={cn("rounded sticky top-20 ", item !== "1" && "hidden")}
            >
              <source src="/videos/1.mov" type="video/mp4" />
            </video>

            <video
              autoPlay
              playsInline
              loop
              muted
              preload="auto"
              className={cn("rounded sticky top-20", item !== "2" && "hidden")}
            >
              <source src="/videos/2.mov" type="video/mp4" />
            </video>

            <video
              autoPlay
              playsInline
              loop
              muted
              preload="auto"
              className={cn("rounded sticky top-20", item !== "3" && "hidden")}
            >
              <source src="/videos/3.mov" type="video/mp4" />
            </video>
          </motion.div>
          <div className="order-1" />
          <div className="order-3" />
          <div className="order-5" />
        </div>
      </div>
    </section>
  );
}
