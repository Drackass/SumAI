"use client";
// libs
import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import SideAuth from "../../_components/side-auth";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

const Page = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcom Back!
          </h1>
          <p className="leading-7 text-muted-foreground">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
              }}
              path="/sign-in"
            />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <SideAuth />
    </div>
  );
};

export default Page;
