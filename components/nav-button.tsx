import Link from "next/link";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <Link
      href={href}
      className={isActive ? "text-foreground" : "text-muted-foreground transition-colors hover:text-foreground"}
    >
      {label}
    </Link>
  );
};
