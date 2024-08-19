"use client";
import { useUser } from "@clerk/nextjs";

export default function WelcomeBack() {
  const { user, isLoaded } = useUser();

  return (
    <div className="flex items-center">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Welcome Back{isLoaded ? ", " : ""}
        {user?.lastName} 👋
      </h1>
    </div>
  );
}
