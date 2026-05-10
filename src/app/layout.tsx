import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { StatusBar } from "@/components/StatusBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://lecobyte.com"
  ),
  applicationName: "Lecobyte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-white text-black selection:bg-[#FF4D00] selection:text-white`}
      >
        <Navbar />
        <div className="min-h-screen pb-12">{children}</div>
        <Footer />
        <StatusBar />
      </body>
    </html>
  );
}