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
              <a href="https://hci-u6jv.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                <img src="/images/ginhawa.png" alt="Ginhawa Project" className="w-full h-full object-cover rounded-[40px]" />
              </a>
            </ScrollStackItem>
            <ScrollStackItem>
              <a href="https://visual-astronomy-navigator.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                <img src="/images/cosmos.png" alt="Visual Astronomy Navigator" className="w-full h-full object-cover rounded-[40px]" />
              </a>
            </ScrollStackItem>
            <ScrollStackItem>
              <a href="https://danielabakes.xo.je/" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                <img src="/images/daniela.png" alt="Daniela Bakes Project" className="w-full h-full object-cover rounded-[40px]" />
              </a>
            </ScrollStackItem>
            <ScrollStackItem>
              <a href="https://vb.xo.je" target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                <img src="/images/vb.png" alt="Voting System" className="w-full h-full object-cover rounded-[40px]" />
              </a>
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
              <span className="text-purple-400">REACH OUT TODAY!</span>{" "}
              <span className="text-white">✦</span>{" "}
              <span className="text-cyan-400">LET'S WORK TOGETHER!</span>{" "}
              <span className="text-white">✦</span>{" "}
              <span className="text-blue-400">CONTACT ME!</span>{" "}
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
