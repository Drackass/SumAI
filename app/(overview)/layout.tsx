import type { Metadata } from "next";
import Footer from "./_components/footer";
import { Header } from "./_components/header";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "SumAI | Overview",
  description: "SumAI Overview",
};

const DashboardLayout = ({ children }: Props) => (
  <div className="relative flex min-h-screen flex-col bg-background">
    <Header />
    <main className="flex-1 container relative pt-6">
      {children}
    </main>
    <Footer />

  </div>
);

export default DashboardLayout;
