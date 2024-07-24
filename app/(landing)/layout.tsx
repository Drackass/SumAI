import type { Metadata } from "next";
import Footer from "./_components/footer";
import { Header } from "./_components/header";
import { CrispProvider } from "@/provider/crisp-provider";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "SumAI | Overview",
  description: "SumAI Overview",
};

const DashboardLayout = ({ children }: Props) => (
  <div className="flex min-h-screen flex-col bg-background">
    <div className="pointer-events-none fixed left-0 bottom-0 z-50 h-12 w-full bg-gradient-to-t from-background to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)] "></div>
    <Header />
    <main className="flex-1 container relative pt-6">{children}</main>
    <Footer />
  </div>
);

export default DashboardLayout;
