import {
    FaHtml5, FaCss3Alt, FaJs, FaJava, FaPhp, FaNodeJs, FaReact, FaGithub, FaAppStore
} from "react-icons/fa";
import { SiMysql, SiCplusplus, SiC, SiTailwindcss, SiVite, SiNextdotjs, SiVercel, SiFirebase, SiTypescript, SiFramer } from "react-icons/si";

import AnimatedList from "@/components/ui/AnimatedList";
import ScrollFloat from "@/components/ui/ScrollFloat";

interface ToolItem {
    name: string;
    description: string;
    icon: React.ReactNode;
    link: string;
}

export function ToolsStack() {
    const tools: ToolItem[] = [
        { name: "HTML", description: "Standard Markup Language", icon: <FaHtml5 className="text-orange-500 w-6 h-6" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", description: "Style Sheet Language", icon: <FaCss3Alt className="text-blue-500 w-6 h-6" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", description: "Web Scripting Language", icon: <FaJs className="text-yellow-400 w-6 h-6" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", description: "Typed JavaScript", icon: <SiTypescript className="text-blue-500 w-6 h-6" />, link: "https://www.typescriptlang.org/" },
        { name: "Java", description: "Object-Oriented Language", icon: <FaJava className="text-red-500 w-6 h-6" />, link: "https://www.java.com/" },
        { name: "MySQL", description: "Relational Database", icon: <SiMysql className="text-blue-400 w-6 h-6" />, link: "https://www.mysql.com/" },
        { name: "PHP", description: "Server-Side Scripting", icon: <FaPhp className="text-indigo-400 w-6 h-6" />, link: "https://www.php.net/" },
        { name: "C++", description: "High-Performance Language", icon: <SiCplusplus className="text-blue-600 w-6 h-6" />, link: "https://isocpp.org/" },
        { name: "C", description: "Low-Level Programming", icon: <SiC className="text-gray-400 w-6 h-6" />, link: "https://en.cppreference.com/w/c" },
        { name: "Node.js", description: "JS Runtime Environment", icon: <FaNodeJs className="text-green-500 w-6 h-6" />, link: "https://nodejs.org/" },
        { name: "React", description: "Frontend UI Library", icon: <FaReact className="text-cyan-400 w-6 h-6" />, link: "https://react.dev/" },
        { name: "Tailwind CSS", description: "Utility-First CSS", icon: <SiTailwindcss className="text-cyan-300 w-6 h-6" />, link: "https://tailwindcss.com/" },
        { name: "Framer Motion", description: "Animation Library", icon: <SiFramer className="text-pink-500 w-6 h-6" />, link: "https://www.framer.com/motion/" },
        { name: "Vite", description: "Next Generation Bundler", icon: <SiVite className="text-purple-400 w-6 h-6" />, link: "https://vitejs.dev/" },
        { name: "GitHub", description: "Version Control Platform", icon: <FaGithub className="text-white w-6 h-6" />, link: "https://github.com/" },
        { name: "Next.js", description: "React Framework", icon: <SiNextdotjs className="text-white w-6 h-6" />, link: "https://nextjs.org/" },
        { name: "Vercel", description: "Deployment Platform", icon: <SiVercel className="text-white w-6 h-6" />, link: "https://vercel.com/" },
        { name: "Firebase", description: "Backend-as-a-Service", icon: <SiFirebase className="text-yellow-500 w-6 h-6" />, link: "https://firebase.google.com/" },
    ];

    // Split into three columns
    const columnSize = Math.ceil(tools.length / 3);
    const column1 = tools.slice(0, columnSize);
    const column2 = tools.slice(columnSize, columnSize * 2);
    const column3 = tools.slice(columnSize * 2);

    const renderItem = (item: ToolItem) => (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full focus:outline-none focus:ring-0"
        >
            <div className="flex-shrink-0 p-2 bg-white/5 rounded-lg">
                {item.icon}
            </div>
            <div className="flex flex-col text-left">
                <span className="font-bold text-lg text-white">{item.name}</span>
                <span className="text-sm text-neutral-400">{item.description}</span>
            </div>
        </a>
    );

    return (
        <section className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center mb-10">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='top bottom-=20%'
                        scrollEnd='bottom center'
                        stagger={0.1}
                        containerClassName="mb-6 text-center"
                        textClassName="text-4xl md:text-6xl font-bold text-white leading-tight"
                    >
                        Tools & Stack
                    </ScrollFloat>
                    <div className="h-1 w-24 bg-white rounded-full"></div>
                </div>

                {/* Mobile View - Single List */}
                <div className="md:hidden">
                    <AnimatedList
                        items={tools.map(renderItem)}
                        displayScrollbar={false}
                        showGradients={false}
                        className="w-full full-height"
                    />
                </div>

                {/* Desktop View - Three Columns */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <div>
                        <AnimatedList
                            items={column1.map(renderItem)}
                            displayScrollbar={false}
                            showGradients={false}
                            className="w-full full-height"
                        />
                    </div>
                    <div>
                        <AnimatedList
                            items={column2.map(renderItem)}
                            displayScrollbar={false}
                            showGradients={false}
                            className="w-full full-height"
                        />
                    </div>
                    <div>
                        <AnimatedList
                            items={column3.map(renderItem)}
                            displayScrollbar={false}
                            showGradients={false}
                            className="w-full full-height"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
