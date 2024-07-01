import { Header } from "@/components/header";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "SumAI | Dashboard",
  description: "SumAI Dashboard",
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 relative">
        <div className="container relative">
          {children}
        </div>
      </main>
      <footer>
        <div className="max-w-3xl mx-auto py-8 text-center text-muted-foreground">
          <p>Made with 🩵 at Epitech</p>
          <p>&copy; 2024 SumAI. All rights reserved.</p>
          
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
