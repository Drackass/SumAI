import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BtnGetStarted() {
  return (
    <Link href="/dashboard">
      <Button className="flex items-center gap-1 group">
        Get Started{" "}
        <ChevronRight
          size={15}
          className="group-hover:translate-x-1 transition-transform"
        />
      </Button>
    </Link>
  );
}
