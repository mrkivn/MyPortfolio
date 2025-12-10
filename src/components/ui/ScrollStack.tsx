"use client";

import { useLayoutEffect, useRef, useCallback, ReactNode } from "react";
import "./ScrollStack.css";

interface ScrollStackItemProps {
    children: ReactNode;
    itemClassName?: string;
}

export const ScrollStackItem = ({
    children,
    itemClassName = "",
}: ScrollStackItemProps) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
    children: ReactNode;
    className?: string;
    itemDistance?: number;  // Not used in pure sticky mode
    itemScale?: number;     // How much to scale down per step
    itemStackDistance?: number; // Not used in pure sticky
    stackPosition?: string | number; // Not used in pure sticky
    scaleEndPosition?: string | number; // Not used
    baseScale?: number;
    scaleDuration?: number;
    rotationAmount?: number;
    blurAmount?: number;
    useWindowScroll?: boolean; // Always true effectively now
    onStackComplete?: () => void;
}

const ScrollStack = ({
    children,
    className = "",
    itemScale = 0.05,
    blurAmount = 0,
}: ScrollStackProps) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const mutationRef = useRef<MutationObserver | null>(null);

    const handleScroll = useCallback(() => {
        const cards = Array.from(document.querySelectorAll<HTMLElement>(".scroll-stack-card"));

        // We calculate scale based on how many cards are "currently stuck" or overlapping
        // But a simpler visual model for "Stacking" with sticky is:
        // As Card N+1 covers Card N, Card N should scale down.

        cards.forEach((card, i) => {
            if (!card) return;

            const rect = card.getBoundingClientRect();
            // We assume 'top: 15vh' in CSS. 
            // We can read the computed style to be precise, or hardcode/detect.
            const stickyTop = window.innerHeight * 0.15;

            // If the card is at or above the sticky position (accounting for small sub-pixel jitters)
            const isStuck = rect.top <= stickyTop + 1;

            // Check the NEXT card's position to determine how much we are "covered"
            const nextCard = cards[i + 1];
            let scale = 1;
            let blur = 0;

            if (isStuck && nextCard) {
                const nextRect = nextCard.getBoundingClientRect();
                // Distance from bottom of screen or standard scroll entry?
                // Actually, we just care how close the NEXT card is to the stick point.

                const nextCardTop = nextRect.top;
                const distanceToStick = nextCardTop - stickyTop;

                // Define a "stacking zone". 
                // As next card moves from (ScreenHeight) down to (stickyTop),
                // this card should scale from 1 -> (1 - itemScale).

                const windowHeight = window.innerHeight;
                const totalDistance = windowHeight - stickyTop;

                // 0 = next card is at bottom, 1 = next card is at sticky top
                let progress = 1 - (distanceToStick / totalDistance);
                progress = Math.max(0, Math.min(1, progress));

                // Easing?
                // progress = progress * progress; // Optional ease-in

                // We want: 
                // When progress = 0 (next card far away), scale = 1
                // When progress = 1 (next card completely covering), scale = 1 - itemScale
                scale = 1 - (progress * itemScale);

                // Apply blur if requested
                if (blurAmount) {
                    blur = progress * blurAmount;
                }
            } else if (isStuck && !nextCard) {
                // Last card, stays at scale 1
                scale = 1;
            } else {
                // Not stuck yet (coming from bottom), scale 1
                scale = 1;
            }

            // Also handle "Deep Stacking": 
            // If Card N+1 is fully stuck, Card N is now "2 layers deep".
            // The logic above only handles "immediate neighbor" covering.
            // For a robust loop:
            // Iterate all cards BELOW this one.
            // Calculate total overlapping factor? 
            // Simpler: 
            // Just let the recursive nature handle it? 
            // No, because rect based logic is independent.

            // Refined Logic:
            // Global stack index? 
            // Let's stick to simple "Previous cards scale down as simpler cards arrive".
            // Actually, if we just look at the card immediately following, we get 1 level of scale.
            // If Card 2 covers Card 1, Card 1 scales to 0.95.
            // If Card 3 covers Card 2, Card 2 scales to 0.95.
            // Card 1 stays at 0.95? No, Card 1 should go to 0.90.

            // To do this right:
            // Calculate how many cards are "Stuck" *after* this one.
            let cardsOnTop = 0;
            for (let j = i + 1; j < cards.length; j++) {
                const c = cards[j];
                const cRect = c.getBoundingClientRect();
                if (cRect.top <= stickyTop + 50) { // +50 buffer
                    cardsOnTop++;
                } else {
                    // Partially stuck? Add fractional?
                    const cDist = cRect.top - stickyTop;
                    const cTotal = window.innerHeight;
                    let cProg = 1 - (cDist / cTotal);
                    cProg = Math.max(0, Math.min(1, cProg));
                    cardsOnTop += cProg;
                }
            }

            scale = 1 - (cardsOnTop * itemScale);
            blur = cardsOnTop * blurAmount;

            // Apply transform
            // Important: Use translateZ(0) to force GPU layer
            // Do NOT use translateY. CSS Sticky handles position.
            card.style.transform = `scale(${scale}) translateZ(0)`;
            if (blurAmount) {
                card.style.filter = `blur(${blur}px)`;
            }
        });

    }, [itemScale, blurAmount]);

    useLayoutEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        // Initial calc
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [handleScroll]);

    return (
        <div
            className={`scroll-stack-scroller ${className}`.trim()}
            ref={scrollerRef}
        >
            <div className="scroll-stack-inner">
                {children}
                <div className="scroll-stack-end" />
            </div>
        </div>
    );
};

export default ScrollStack;
