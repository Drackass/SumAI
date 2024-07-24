"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("4c8928a4-977f-45fd-876c-44ab09ec4c58");
    }, []);

    return null;
}