"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"
// import { usePathname } from "next/navigation";

export const CrispChat = () => {
    // const pathname   = usePathname();
    // const isDashboard = pathname?.includes("/dashboard");

    useEffect(() => {
        Crisp.configure("4c8928a4-977f-45fd-876c-44ab09ec4c58");
        // isDashboard ? Crisp.chat.hide() : Crisp.chat.show();
    }, []);

    return null;
}