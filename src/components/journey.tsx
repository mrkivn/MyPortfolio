'use client'

import { Timeline } from "@/components/ui/timeline"
import Image from "next/image"

export function Journey() {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
                        Currently pursuing my IT studies while building real-world applications.
                        Developed ordering systems and expanded into web development technologies.
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
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs">C++</span>
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs">JavaScript</span>
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs">HTML/CSS</span>
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-base font-normal mb-8">
                        Transitioned from gaming to serious programming. Started learning C++ and building
                        console applications like the McDo and Jollibai ordering systems.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/images/web-project.jpg"
                            alt="Web Development Project"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg border border-neutral-800"
                        />
                        <Image
                            src="/images/profile.jpg"
                            alt="Marck Ivan"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg border border-neutral-800"
                        />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs">C++ Console Apps</span>
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs">Git & GitHub</span>
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
        <section id="journey" className="bg-neutral-950">
            <Timeline data={data} />
        </section>
    )
}
