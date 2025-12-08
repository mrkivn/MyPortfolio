'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { Github, Mail, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="min-h-screen relative bg-black overflow-hidden">
            {/* Spotlight Effect */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />

            {/* Gradient Background Mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-0">
                    {/* Greeting */}
                    <p className="text-neutral-400 text-lg md:text-xl mb-4 animate-fade-in">
                        Hello, I&apos;m
                    </p>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
                            Marck Ivan
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                            Deala
                        </span>
                    </h1>

                    {/* Title */}
                    <p className="text-xl md:text-2xl text-neutral-300 mb-4 animate-fade-in-up animation-delay-200">
                        Aspiring Web Developer & IT Student
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-neutral-400 mb-8 animate-fade-in-up animation-delay-300">
                        <MapPin className="w-4 h-4" />
                        <span>Quezon City, Metro Manila</span>
                    </div>

                    {/* Tagline */}
                    <p className="text-neutral-400 max-w-lg mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
                        From building Minecraft servers to crafting real-world applications.
                        Passionate about turning creative ideas into functional code.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-500">
                        <Link
                            href="#projects"
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 border border-neutral-700 rounded-full font-semibold text-white transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:scale-105"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 animate-fade-in-up animation-delay-600">
                        <a
                            href="https://github.com/mrkivn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                            <Github className="w-5 h-5" />
                            <span>@mrkivn</span>
                        </a>
                        <a
                            href="mailto:ivandeala2@gmail.com"
                            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Email</span>
                        </a>
                    </div>
                </div>

                {/* Right Content - 3D Scene */}
                <div className="flex-1 relative min-h-[400px] lg:min-h-0">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-neutral-500" />
            </div>
        </section>
    )
}
