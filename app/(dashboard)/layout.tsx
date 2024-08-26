import type { Metadata } from "next";
import { Sidebar } from "./_components/sidebar";
import Header from "./_components/header";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "SumAI | Dashboard",
  description: "SumAI Dashboard",
};

const DashboardLayout = ({ children }: Props) => (
  <div className="grid min-h-screen overflow-hidden w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <Sidebar />
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-y-scroll">
        {children}
      </main>
    </div>
  </div>
);

export default DashboardLayout;
