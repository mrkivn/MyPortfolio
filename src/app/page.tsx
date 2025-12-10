"use client"

import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { GetInTouch } from "@/components/get-in-touch";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, FolderGit2, Mail } from "lucide-react";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import ScrollFloat from "@/components/ui/ScrollFloat";

export default function Page() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
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

      <div className="py-10">
        <ScrollVelocity
          texts={['WEB DEVELOPER ✦ UI/UX DESIGNER ✦']}
          velocity={250}
          className="text-white font-bold text-4xl md:text-6xl py-4 uppercase opacity-80"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='top bottom-=10%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.1}
          containerClassName="mb-6 text-center"
          textClassName="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          My Web Creations
        </ScrollFloat>
        <div className="h-1 w-24 bg-white rounded-full"></div>
      </div>

      <div className="w-full relative">
        <ScrollStack
          useWindowScroll={true}
          itemScale={0.05}
          stackPosition="15%"
          itemStackDistance={30}
        >
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

      <div className="-mt-[35vh] relative z-10">
        <Journey />
      </div>

      <div className="py-10">
        <ScrollVelocity
          texts={['Reach out today! ✦ Let\'s work together! ✦ Contact Me! ✦']}
          velocity={250}
          className="text-white font-bold text-4xl md:text-6xl py-4 uppercase opacity-80"
        />
      </div>

      <GetInTouch />
      <Footer />
    </main>
  );
}
