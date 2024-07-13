import { cn } from "@/lib/utils";
import { IconNode, LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
};

export const NavButton = ({ href, label, icon: Icon, isActive }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        isActive && "bg-muted text-primary"
      )}
    >
      <Icon
        size={22}
        className="h-5 w-5 md:h-4 md:w-4"
      />
      {label}
    </Link>
  );
};
