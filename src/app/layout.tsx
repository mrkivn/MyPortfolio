import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import DarkVeil from "@/components/ui/DarkVeil";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marck Ivan Deala - Portfolio",
  description: "Aspiring Web Developer",
  icons: {
    icon: '/icon.png', // Explicitly point to the file (Next.js automatically handles src/app/icon.png too)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <div className="fixed inset-0 z-[-1]">
          <DarkVeil />
        </div>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
