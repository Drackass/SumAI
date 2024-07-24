import Image from "next/image";
import React from "react";

export default function SideAuth() {
  return (
    <div className="relative h-full  border-l border-border hidden lg:flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[50rem] h-[50rem] rounded-full filter blur-[100px] bg-red-400/15"></div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full filter blur-[100px] bg-green-400/15"></div>
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full filter blur-[100px] bg-yellow-400/15"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[50rem] h-[50rem] rounded-full filter blur-[100px] bg-blue-400/15"></div>

      <Image src="/branding/logo.svg" height={100} width={100} alt="Logo" />
    </div>
  );
}
