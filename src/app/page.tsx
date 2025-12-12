"use client"

import { useRef } from "react";
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

  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen relative">
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50 mix-blend-difference">
        <img src="/logo.png" alt="MID Logo" className="h-12 w-auto" />
      </div>

      <NavBar items={navItems} className="z-[100]" />

      <Hero />

      <div className="py-10">
        <ScrollVelocity
          texts={[
            <>
              <span className="text-purple-400">WEB DEVELOPER</span>{" "}
              <span className="text-white">✦</span>{" "}
              <span className="text-cyan-400">UI/UX DESIGNER</span>{" "}
              <span className="text-white">✦</span>{" "}
            </>
          ]}
          velocity={100}
          className="font-bold text-4xl md:text-6xl py-4 uppercase opacity-80"
        />
      </div>

      <div className="relative">
        <div ref={titleRef} className="sticky top-24 z-40 flex flex-col items-center justify-center py-4 pointer-events-none">
          <h2 className="mb-2 text-center text-4xl md:text-6xl font-bold text-white leading-tight">
            My Web Creations
          </h2>
          <div className="h-1 w-24 bg-white rounded-full"></div>
        </div>

        <div className="w-full relative z-10">
          <ScrollStack
            useWindowScroll={true}
            itemScale={0.05}
            stackPosition="25%"
            itemStackDistance={30}
            titleRef={titleRef}
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
      </div>

      <div className="-mt-[10vh] relative z-30">
        <Journey />
      </div>

      <div className="py-10">
        <ScrollVelocity
          texts={[
            <>
              <span className="text-green-400">REACH OUT TODAY!</span>{" "}
              <span className="text-white">✦</span>{" "}
              <span className="text-pink-400">LET'S WORK TOGETHER!</span>{" "}
              <span className="text-white">✦</span>{" "}
              <span className="text-yellow-400">CONTACT ME!</span>{" "}
              <span className="text-white">✦</span>{" "}
            </>
          ]}
          velocity={100}
          className="font-bold text-4xl md:text-6xl py-4 uppercase opacity-80"
        />
      </div>

      <GetInTouch />
      <Footer />
    </main>
  );
}
