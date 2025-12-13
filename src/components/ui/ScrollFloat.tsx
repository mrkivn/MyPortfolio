"use client";

import { useEffect, useMemo, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
    children: ReactNode;
    scrollContainerRef?: React.RefObject<HTMLElement>;
    containerClassName?: string;
    textClassName?: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
}

const ScrollFloat = ({
    children,
    scrollContainerRef,
    containerClassName = '',
    textClassName = '',
    animationDuration = 1,
    ease = 'back.inOut(2)',
    scrollStart = 'top bottom-=20%',
    scrollEnd = 'bottom center-=20%',
    stagger = 0.03
}: ScrollFloatProps) => {
    const containerRef = useRef<HTMLHeadingElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        // Split by words first, then wrap each word in a span
        return text.split(' ').map((word, wordIndex, arr) => (
            <span key={wordIndex} className="word" style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
                {word.split('').map((char, charIndex) => (
                    <span className="char" key={charIndex}>
                        {char}
                    </span>
                ))}
                {wordIndex < arr.length - 1 && <span className="char">&nbsp;</span>}
            </span>
        ));
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

        const charElements = el.querySelectorAll('.char');

        const ctx = gsap.context(() => {
            gsap.fromTo(
                charElements,
                {
                    opacity: 0,
                    yPercent: 120,
                    scaleY: 2.3,
                    scaleX: 0.7,
                    transformOrigin: '50% 0%'
                },
                {
                    duration: animationDuration,
                    ease: ease,
                    opacity: 1,
                    yPercent: 0,
                    scaleY: 1,
                    scaleX: 1,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: scrollStart,
                        end: scrollEnd,
                        scrub: true
                    }
                }
            );
        }, el);

        // Refresh Start/End positions after a short delay to account for layout shifts
        const refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);

        return () => {
            ctx.revert();
            clearTimeout(refreshTimer);
        };
    }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

    return (
        <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
            <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
        </h2>
    );
};

export default ScrollFloat;
