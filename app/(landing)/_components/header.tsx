"use client"
import { Button } from "@/components/ui/button";
import { Navigation } from "./navigation";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedOut,
  SignedIn,
  UserButton,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import {
  ArrowRight,
  ChevronRight,
  LayoutDashboard,
  MoveRight,
} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Logo from "./logo";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="sticky top-0 h-16 items-center gap-4 px-4 md:px-6 border-b border-border/40 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-2xl  h-full flex items-center justify-between mx-auto">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-4 ml-auto">
          <SignedOut>
            <SignInButton>
              <Button
                size="sm"
                variant="ghost"
                className="flex items-center gap-2"
              >
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button
                size="sm"
                variant="secondary"
                className="flex items-center gap-2"
              >
                Sign up
                <ArrowRight size={15} />
              </Button>
            </SignUpButton>
            <ModeToggle />
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard/summaries">
              <Button variant="outline" className="flex items-center gap-2">
                <LayoutDashboard size={15} />
                Dashboard
              </Button>
            </Link>
            <ModeToggle />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </motion.header>
  );
};
