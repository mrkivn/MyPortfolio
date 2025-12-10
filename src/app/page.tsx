"use client"

import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { GetInTouch } from "@/components/get-in-touch";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, FolderGit2, Mail } from "lucide-react";

export default function Page() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Journey', url: '#journey', icon: User },
    // { name: 'Projects', url: '#projects', icon: FolderGit2 }, // Journey covers projects
    { name: 'Contact', url: '#contact', icon: Mail },
  ];

  return (
    <main className="min-h-screen relative">
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50 mix-blend-difference">
        <img src="/logo.png" alt="MID Logo" className="h-12 w-auto" />
      </div>

      <NavBar items={navItems} />

      <Hero />
      <Journey />
      <GetInTouch />
      <Footer />
    </main>
  );
}
