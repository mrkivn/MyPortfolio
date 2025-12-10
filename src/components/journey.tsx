'use client'

import { Timeline } from "@/components/ui/timeline"
import Image from "next/image"

export function Journey() {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
                        Leveling up with full-stack development. Built production-ready web applications
                        using PHP, React, TypeScript, and modern frontend technologies.
                    </p>

                    {/* Projects Grid */}
                    <div className="space-y-6">
                        {/* Voting System */}
                        <div className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                <a href="https://vb.xo.je" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-purple-400 transition-colors">
                                    Voting System
                                </a>
                                <span className="px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-300">PHP</span>
                            </div>
                            <p className="text-neutral-400 text-sm">A complete voting system built with PHP - my first full-stack web application.</p>
                        </div>

                        {/* HCI Series */}
                        <div className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                                <a href="https://hci-u6jv.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-orange-400 transition-colors">
                                    HCI Project
                                </a>
                                <span className="px-2 py-0.5 rounded text-xs bg-orange-500/20 text-orange-300">HTML</span>
                            </div>
                            <p className="text-neutral-400 text-sm mb-2">Human-Computer Interaction projects exploring UI/UX principles.</p>
                        </div>

                        {/* Todo App */}
                        <div className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <a href="https://todo-tau-swart.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-400 transition-colors">
                                    Todo App
                                </a>
                                <span className="px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-300">TypeScript</span>
                            </div>
                            <p className="text-neutral-400 text-sm">A modern Todo application built with TypeScript.</p>
                        </div>

                        {/* React Experiments */}
                        <div className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                <a href="https://visual-astronomy-navigator.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-cyan-400 transition-colors">
                                    Visual Astronomy Navigator
                                </a>
                                <span className="px-2 py-0.5 rounded text-xs bg-yellow-500/20 text-yellow-300">JavaScript</span>
                            </div>
                            <p className="text-neutral-400 text-sm">React component experiments and learning playground.</p>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">PHP</span>
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">TypeScript</span>
                        <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">React</span>
                        <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs">HTML/CSS</span>
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
                        It&apos;s just C++.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/ordering-system-code.jpg"
                            alt="McDo Ordering System Code"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg border border-neutral-800"
                        />
                        <Image
                            src="/images/ordering-system-console.jpg"
                            alt="Ordering System Console Output"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg border border-neutral-800"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
                        Minecraft server management and using console to monitor it.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src="/images/web-project.jpg"
                            alt="Minecraft Console"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-40 md:h-60 w-full shadow-lg border border-neutral-800"
                        />
                        {/* Profile image removed as requested */}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs">Minecraft</span>
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">Console Management</span>
                    </div>
                </div>
            ),
        },
        {
            title: "The Beginning",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
                        My programming journey started with Minecraft. Running servers, configuring plugins,
                        and customizing gameplay sparked my curiosity about how code works behind the scenes.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/minecraft-server.jpg"
                            alt="Minecraft Server"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg border border-neutral-800"
                        />
                        <Image
                            src="/images/minecraft-avatar.png"
                            alt="Minecraft Avatar"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg border border-neutral-800"
                        />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs">Minecraft Server</span>
                        <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs">Plugin Config</span>
                        <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs">Server Management</span>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <section id="journey" className="bg-black/60 backdrop-blur-sm">
            <Timeline data={data} />
        </section>
    )
}
