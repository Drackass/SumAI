"use client";
import React from "react";
import { Bookmark, Home, LineChart, Search } from "lucide-react";
import { NavButton } from "./nav-button";
import { usePathname } from "next/navigation";

const routes = [
  {
    href: "/dashboard/summaries",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/dashboard/browse",
    label: "Browse",
    icon: Search,
  },
  {
    href: "/dashboard/saved",
    label: "Saved",
    icon: Bookmark,
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: LineChart,
  },
];
export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          icon={route.icon}
          isActive={pathname?.includes(route.href)}
        />
      ))}
    </>
  );
}
