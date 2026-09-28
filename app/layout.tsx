import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { ColorSquares } from "@/components/ColorSquares";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Wasi Alam | Portfolio",
  description: "Photography, Videography, and Design Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground relative font-sans"
        style={{ fontFamily: 'var(--font-outfit)' }}
        suppressHydrationWarning={true}
      >
        <ColorSquares />
        <Navbar />
        <main className="flex-grow pt-24 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
