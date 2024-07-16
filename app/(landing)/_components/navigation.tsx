"use client";

import { PanelLeft } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet";
import { usePathname } from "next/navigation";
import { NavButton } from "./nav-button";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/documentation",
    label: "Documentation",
  },
  {
    href: "/features",
    label: "Features",
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/">
          <Image src="/branding/logo.png" alt="logo" width={25} height={25} />
        </Link>
        {routes.map((route) => (
          <NavButton
            key={route.href}
            href={route.href}
            label={route.label}
            isActive={pathname === route.href}
          />
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/">
              <Image src="/branding/logo.png" alt="logo" width={25} height={25} />
            </Link>
            {routes.map((route) => (
              <NavButton
                key={route.href}
                href={route.href}
                label={route.label}
                isActive={pathname === route.href}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};
