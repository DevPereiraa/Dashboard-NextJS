import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";

import { Sidebar } from '@/components/ui/Sidebar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard com Next JS e Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen  font-sans antialiased",
          inter.className
        )

        }>
          <Sidebar/>
          {children}
      </body>
    </html>
  );
}
