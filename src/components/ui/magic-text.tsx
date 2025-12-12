"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface MagicTextProps {
    text: string;
}

interface WordProps {
    children: string;
    progress: any;
    range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span
            className="relative inline-block mr-2 text-xl md:text-3xl leading-tight uppercase"
            style={{ fontFamily: "'Panchang', sans-serif", fontWeight: 700 }}
        >
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity: opacity }}>{children}</motion.span>
        </span>
    );
};

export const MagicText: React.FC<MagicTextProps> = ({ text }) => {
    const container = useRef(null);

    // Adjusted offset so text is fully visible before hitting the top nav
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"],
    });

    const words = text.split(" ");

    return (
        <p ref={container} className="flex flex-wrap p-4 justify-center max-w-4xl mx-auto">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
};
