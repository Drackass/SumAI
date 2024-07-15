import { Button } from "@/components/ui/button";
import { Navigation } from "./navigation";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedOut,
  SignedIn,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { LayoutDashboard, MoveRight } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 h-16 items-center gap-4 px-4 md:px-6 border-b border-border/40 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-2xl  h-full flex items-center justify-between mx-auto">
        <Navigation />
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <Button
                size="sm"
                variant="ghost"
                className="flex items-center gap-2"
              >
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button
                size="sm"
                variant="secondary"
                className="flex items-center gap-2"
              >
                Sign up
                <MoveRight size={15} />
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            {/* <BtnGetStarted /> */}
            <Link href="/dashboard">
              <Button
                size="sm"
                variant="outline"
                className="flex items-center gap-2"
              >
                <LayoutDashboard size={15} />
                Dashboard
              </Button>
            </Link>

            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
