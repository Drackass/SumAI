import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { Atom, BookCopy, PanelLeft, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UpgradeProCard from "./upgrade-pro-card";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold ml-2.5 pb-10"
            >
              <Image src="/branding/logo.png" alt="logo" width={42} height={42} />
              <span className="sr-only">SumAI</span>
            </Link>
            <Link
              href="/"
              className=" sm:hidden flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <BookCopy size={22} className="h-5 w-5 md:h-4 md:w-4" />
              Overview
            </Link>
            <Navigation />
          </nav>
          <div className="mt-auto">
            <UpgradeProCard />
          </div>
        </SheetContent>
      </Sheet>

      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <Badge variant="credit">
          5
          <Atom size={15} />
        </Badge>
        <Link href="/" className="hidden sm:block">
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-2"
          >
            <BookCopy size={15} />
            Overview
          </Button>
        </Link>
        <UserButton />
      </div>
    </header>
  );
}
