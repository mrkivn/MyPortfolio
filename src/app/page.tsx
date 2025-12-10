"use client"

import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { GetInTouch } from "@/components/get-in-touch";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, FolderGit2, Mail } from "lucide-react";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

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

      <div className="py-10">
        <ScrollVelocity
          texts={['WEB DEVELOPER > UI/UX DESIGNER >']}
          velocity={100}
          className="text-white font-bold text-4xl md:text-6xl py-4 uppercase opacity-80"
        />
      </div>

      <div className="h-[800px] w-full relative">
        <ScrollStack itemDistance={50} itemScale={0.05}>
          <ScrollStackItem>
            <img src="/images/ginhawa.png" alt="Ginhawa Project" className="w-full h-full object-cover rounded-[40px]" />
          </ScrollStackItem>
          <ScrollStackItem>
            <img src="/images/cosmos.png" alt="Cosmos Project" className="w-full h-full object-cover rounded-[40px]" />
          </ScrollStackItem>
          <ScrollStackItem>
            <img src="/images/daniela.png" alt="Daniela Bakes Project" className="w-full h-full object-cover rounded-[40px]" />
          </ScrollStackItem>
          <ScrollStackItem>
            <img src="/images/mid-profile.png" alt="MID Profile" className="w-full h-full object-cover rounded-[40px]" />
          </ScrollStackItem>
        </ScrollStack>
      </div>

      <div className="py-10">
        <ScrollVelocity
          texts={['Reach out today! > Let’s work together! > Get in Touch!']}
          velocity={100}
          className="text-white font-bold text-4xl md:text-6xl py-4 uppercase opacity-80"
        />
      </div>

      <GetInTouch />
      <Footer />
    </main>
  );
}
