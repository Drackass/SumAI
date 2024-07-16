"use client";
import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UpgradePlanModalProps {
  children: React.ReactNode;
}

const proFeatures = [
  "Unlock all features",
  "Unlimited credits",
  "Priority support",
];

export default function UpgradePlanModal({ children }: UpgradePlanModalProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="space-y-4 items-center">
            <Image src="/branding/logo.png" alt="logo" width={42} height={42} />
            <DialogTitle>Upgrade to paid plan</DialogTitle>
            <DialogDescription>
              Upgrade to a paid plan to unlock more features.
            </DialogDescription>
          </DialogHeader>
          <Separator className="" />
          <ul className="[&>li]:mt-2 w-full">
            {proFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <CircleCheck size={20} className="text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full mt-5">Upgrade</Button>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer shouldScaleBackground open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent >
        <DrawerHeader className="text-left space-y-2">
          <Image src="/branding/logo.png" alt="logo" width={42} height={42} />
          <DrawerTitle>Upgrade to paid plan</DrawerTitle>
          <DrawerDescription>
            Upgrade to a paid plan to unlock more features.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 py-0">
          <Separator className="mt-2" />
          <ul className="my-6  [&>li]:mt-2 w-full">
            {proFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <CircleCheck size={20} className="text-primary" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full">Upgrade</Button>
        </div>

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
