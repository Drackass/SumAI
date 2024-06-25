import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="logo" width={25} height={25} className="lg:hidden" />
      <Image src="/sumai.png" alt="logo" width={85} height={25} className="hidden lg:flex" />
    </Link>
  );
};
