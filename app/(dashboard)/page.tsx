"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Github } from "lucide-react";

export default function Home() {
  const { user, isLoaded } = useUser();
  return (
    <section className="mx-auto flex flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 max-w-3xl bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-balance">
        Welcome Back{isLoaded ? ", " : ""}
        {user?.lastName} 👋
      </h1>
      <span className="max-w-[750px] text-center text-lg font-light text-foreground">
        Summarize everythings !
      </span>
      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
        <Button>My Summaries</Button>
        <a href="https://github.com/Drackass/sumai" target="_blank">
          <Button variant={"outline"} className="flex gap-2">
            <Github size={13} />
            Github
          </Button>
        </a>
      </div>
    </section> 
  );
}
