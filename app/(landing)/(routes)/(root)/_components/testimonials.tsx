import React, { useRef } from "react";
import { testimonials } from "@/db/local-data";
import Feedback from "./feedback";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20">
      <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mt-10 mb-5">
      Meet SumAI users
      </h2>
      <p className="text-2xl text-muted-foreground text-center">
      Screen Studio empowers thousands of people to record beautiful videos and demos of their products and services.
      </p>
      <div className="columns-3xs gap-5 space-y-8 relative h-[600px] md:h-[450px] lg:h-[750px] overflow-hidden mt-20">
        {testimonials.map((testimonial, index) => (
          <Feedback key={index} {...testimonial} />
        ))}
        <div className="w-full h-40 bg-gradient-to-t from-background z-10 via-background to-transparent absolute bottom-0 left-0" />
      </div>
    </section>
  );
}
