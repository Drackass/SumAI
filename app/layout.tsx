import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/provider/query-provider";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/provider/theme-provider";
import { CrispProvider } from "@/provider/crisp-provider";
import { ConfettiProvider } from "@/provider/confetti-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SumAI",
  description:
    "SumAI is an innovative SaaS (Software as a Service) application designed to transcribe and summarize various types of rich content, such as websites, images, videos, documents, text, and audio tracks. The application features an intuitive and customizable interface, ensuring a smooth and frustration-free user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: dark
    // }}
    >
      <html lang="en" className="!scroll-smooth">
        <CrispProvider />
        <body className={cn("antialiased bg-background", inter)}>
          <TooltipProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <QueryProvider>
                <ConfettiProvider />
                <Toaster position="bottom-center" />
                <div
                  vaul-drawer-wrapper=""
                  className="bg-background min-h-[100vh]"
                >
                  {children}
                </div>
              </QueryProvider>
            </ThemeProvider>
          </TooltipProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
