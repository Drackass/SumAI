"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { HeaderLogo } from "./headerLogo";
import { usePathname } from "next/navigation";
import { NavButton } from "./nav-button";

const routes = [
  {
    href: "/",
    label: "Dashboard",
  },
  {
    href: "/browse",
    label: "Browse",
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <HeaderLogo />
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
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <HeaderLogo />
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
