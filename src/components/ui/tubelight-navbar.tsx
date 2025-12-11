"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

import GlassSurface from "@/components/ui/GlassSurface"

export function NavBar({ items, className }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate which section is currently most visible
            let currentSection = items[0].name;
            let maxVisibility = 0;

            items.forEach((item) => {
                const id = item.url.replace('#', '');
                const element = document.getElementById(id);

                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementHeight = rect.height;

                    // Caclulate visible height of the section
                    const visibleTop = Math.max(0, rect.top);
                    const visibleBottom = Math.min(windowHeight, rect.bottom);
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                    // Calculate percentage of viewport occupied by this section
                    const visibilityScore = visibleHeight / windowHeight;

                    // Prioritize section if it covers significant portion of screen 
                    // or if it's near the top (for scrolling down)
                    if (visibilityScore > maxVisibility) {
                        maxVisibility = visibilityScore;
                        currentSection = item.name;
                    }
                }
            });

            // Fallback for very top of page
            if (scrollY < 100) {
                setActiveTab(items[0].name);
            } else {
                setActiveTab(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);

    return (
        <div className={cn("fixed top-6 left-1/2 -translate-x-1/2 z-50", className)}>
            <GlassSurface
                borderRadius={40}
                brightness={50}
                opacity={0.3}
                blur={15}
                className="p-1.5"
            >
                <div className="flex space-x-1 relative z-10">
                    {items.map((item) => {
                        const isActive = activeTab === item.name
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.name}
                                href={item.url}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item.url.startsWith('#')) {
                                        const element = document.querySelector(item.url);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }
                                }}
                                className={cn(
                                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                                    "text-foreground/80 hover:text-primary",
                                    isActive && "bg-muted/50 text-foreground"
                                )}
                            >
                                <span className="hidden md:inline">{item.name}</span>
                                <span className="md:hidden">
                                    <Icon size={18} strokeWidth={2.5} />
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="lamp"
                                        className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                                            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                                            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                                            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                                        </div>
                                    </motion.div>
                                )}
                            </Link>
                        )
                    })}
                </div>
            </GlassSurface>
        </div>
    )
}
