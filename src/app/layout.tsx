import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import DarkVeil from "@/components/ui/DarkVeil";
import NoRightClick from "@/components/ui/NoRightClick";

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
  description: "Aspiring Web Developer | UI/UX | Fullstack",
  openGraph: {
    title: "Marck Ivan Deala - Portfolio",
    description: "Aspiring Web Developer. Check out my projects, journey, and skills.",
    url: "https://mrkiv-portfolio.vercel.app", // Replace with your actual domain if different
    siteName: "Marck Ivan Deala",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Marck Ivan Deala Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: '/icon.png',
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased relative min-h-screen`}
      >
        <NoRightClick />
        <div className="fixed inset-0 z-[-1]">
          <DarkVeil />
        </div>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
