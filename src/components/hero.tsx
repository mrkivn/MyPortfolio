'use client'

import { Spotlight } from "@/components/ui/spotlight"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import ProfileCard from "@/components/ui/ProfileCard"
import TextType from "@/components/ui/TextType"

export function Hero() {
    return (
        <section id="home" className="min-h-screen relative overflow-hidden">
            {/* Spotlight Effect */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Gradient Background Mesh */}
            {/* Gradient Background Mesh - Removed to show DarkVeil */}

            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-4 lg:py-0">
                    {/* Greeting */}
                    <p className="text-neutral-400 text-lg md:text-xl mb-4 animate-fade-in">
                        Hello, I&apos;m
                    </p>

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-white">
                        Marck Ivan
                        <br />
                        Deala
                    </h1>

                    {/* Title */}
                    <div className="text-3xl md:text-5xl text-neutral-300 mb-4 animate-fade-in-up animation-delay-200 h-16">
                        <TextType
                            text={[
                                "Aspiring Web Developer",
                                "Aspiring UI/UX Developer",
                                "Aspiring Fullstack Developer",
                                "Aspiring Game Developer"
                            ]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            className="inline-block"
                        />
                    </div>

                    {/* Tagline */}
                    <p className="text-neutral-400 max-w-lg mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
                        From building Minecraft servers to crafting real-world applications.
                        Passionate about turning creative ideas into functional code.
                    </p>
                </div>

                {/* Right Content - Profile Card */}
                <div className="flex-1 flex items-center justify-center px-8 pt-0 pb-24 lg:p-0">
                    <ProfileCard
                        name="Marck Ivan Deala"
                        title="Aspiring Web Developer"
                        handle="mrkivn"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/images/profile-cutout.png"
                        iconUrl="/images/iconpattern.png"
                        grainUrl="/images/grain.webp"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        behindGlowEnabled={true}
                        behindGlowColor="rgba(147, 51, 234, 0.5)"
                        onContactClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    />
                </div>
            </div>

            {/* Scroll Indicator - Removed */}
        </section>
    )
}
