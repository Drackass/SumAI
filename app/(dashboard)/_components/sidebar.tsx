"use client";

import {
  Bookmark,
  Home,
  LineChart,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import UpgradeProCard from "./upgrade-pro-card";
import Navigation from "./navigation";

export const Sidebar = () => {

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 shrink-0">
          <Link href="/" className="group flex items-center gap-2 font-semibold">
            <Image src="/branding/logo.svg" alt="logo" width={25} height={25} className="group-hover:rotate-180 hover:scale-110 transition duration-1000" />
            <span className="">SumAI</span>
          </Link>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Navigation />
          </nav>
        </div>
        <div className="mt-auto p-4">
          <UpgradeProCard />
        </div>
      </div>
    </div>
  );
};
