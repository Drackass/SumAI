import { UserButton } from "@clerk/nextjs";
import { HeaderLogo } from "./headerLogo";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import Image from "next/image";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <header className="sticky top-0 h-16 items-center gap-4 px-4 md:px-6 border-b border-border/40 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-2xl  h-full flex items-center justify-between mx-auto">
        <Navigation />
        <UserButton />
      </div>
    </header>
  );
};
