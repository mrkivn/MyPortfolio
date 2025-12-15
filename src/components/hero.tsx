'use client'

import { ChevronDown } from "lucide-react"
import Link from "next/link"
import ProfileCard from "@/components/ui/ProfileCard"
import TextType from "@/components/ui/TextType"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function Hero() {
    const [isIntro, setIsIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIntro(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);



    return (
        <section id="home" className="min-h-screen relative overflow-hidden">
            {/* Intro Overlay */}
            {isIntro && (
                <motion.div
                    className="fixed inset-0 z-50 pointer-events-none"
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center md:items-start">
                            <motion.p
                                layoutId="hello-text"
                                className="text-neutral-400 text-4xl md:text-6xl lg:text-7xl font-bold mb-4 w-fit inline-block leading-none"
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            >
                                Hello, I&apos;m
                            </motion.p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5">
                                <motion.h1
                                    layoutId="name-marck"
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight w-fit inline-block"
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                >
                                    Marck
                                </motion.h1>
                                <motion.h1
                                    layoutId="name-ivan"
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight w-fit inline-block"
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                >
                                    Ivan
                                </motion.h1>
                                <motion.h1
                                    layoutId="name-deala"
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight w-fit inline-block"
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                >
                                    Deala
                                </motion.h1>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-[65%] left-0 right-0 flex justify-center">
                        <motion.p
                            layoutId="welcome-text"
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-300 tracking-wide text-center"
                        >
                            Welcome to my Portfolio Website
                        </motion.p>
                    </div>
                </motion.div>
            )}

            {/* Main Content (Final State) */}
            <div className={`relative z-10 flex flex-col lg:flex-row min-h-screen items-center`}>
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-4 lg:py-0">
                    {/* Greeting */}
                    {!isIntro && (
                        <div className="mb-4">
                            <motion.p
                                layoutId="hello-text"
                                className="text-neutral-400 text-lg md:text-xl font-bold w-fit inline-block leading-none"
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            >
                                Hello, I&apos;m
                            </motion.p>
                        </div>
                    )}

                    {/* Name */}
                    {!isIntro && (
                        <div className="mb-6">
                            <div className="flex gap-3 md:gap-5">
                                <motion.h1
                                    layoutId="name-marck"
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight w-fit inline-block"
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                >
                                    Marck
                                </motion.h1>
                                <motion.h1
                                    layoutId="name-ivan"
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight w-fit inline-block"
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                >
                                    Ivan
                                </motion.h1>
                            </div>
                            <motion.h1
                                layoutId="name-deala"
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight w-fit inline-block"
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            >
                                Deala
                            </motion.h1>
                        </div>
                    )}

                    {/* Title */}
                    {!isIntro && (
                        <motion.div
                            className="text-3xl md:text-5xl text-neutral-300 mb-4 h-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <TextType
                                text={[
                                    "Web Developer",
                                    "UI/UX Developer"
                                ]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                className="inline-block"
                            />
                        </motion.div>
                    )}

                    {/* Tagline */}
                    {!isIntro && (
                        <motion.p
                            className="text-neutral-400 max-w-lg mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            I specialize in building high-quality, responsive websites and applications.
                            My focus is on delivering seamless user experiences and robust functionality for modern businesses.
                        </motion.p>
                    )}
                </div>

                {/* Right Content - Profile Card */}
                {!isIntro && (
                    <motion.div
                        className="flex-1 flex items-center justify-center px-8 pt-0 pb-24 lg:p-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <ProfileCard
                            className="full-profile-image"
                            name="Marck Ivan Deala"
                            title="Web Developer"
                            handle="mrkivn"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl="/images/mid-face.png"
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
                    </motion.div>
                )}

                {!isIntro && (
                    <div className="absolute top-[65%] left-0 right-0 flex justify-center pointer-events-none">
                        <motion.p
                            layoutId="welcome-text"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-300 tracking-wide text-center"
                        >
                            Welcome to my Portfolio Website
                        </motion.p>
                    </div>
                )}
            </div>
        </section>
    )
}
