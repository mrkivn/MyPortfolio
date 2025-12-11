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
    titleRef?: React.RefObject<any>;
}

const ScrollStack = ({
    children,
    className = "",
    itemScale = 0.05,
    blurAmount = 0,
    titleRef,
}: ScrollStackProps) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const mutationRef = useRef<MutationObserver | null>(null);

    const ticking = useRef(false);

    const handleScroll = useCallback(() => {
        if (!ticking.current) {
            window.requestAnimationFrame(() => {
                const cards = Array.from(document.querySelectorAll<HTMLElement>(".scroll-stack-card"));
                const windowHeight = window.innerHeight;
                // Standard sticky top position (25vh - matches CSS)
                const stickyTop = windowHeight * 0.25;

                let firstCardTop = windowHeight; // default to below screen
                if (cards.length > 0) {
                    firstCardTop = cards[0].getBoundingClientRect().top;
                }

                // Title Logic
                if (titleRef?.current) {
                    const titleEl = titleRef.current;
                    // Get current transform if any
                    const currentTransform = titleEl.style.transform;
                    const match = currentTransform.match(/translateY\(([-\d.]+)px\)/);
                    const currentY = match ? parseFloat(match[1]) : 0;

                    const rect = titleEl.getBoundingClientRect();
                    // Recover the "visual" position without our artificial offset
                    const rawTop = rect.top - currentY;

                    // We want the title (bottom edge) to be above the stack top with some gap
                    // targetBottom <= firstCardTop - gap
                    // targetTop + height <= firstCardTop - gap
                    // targetTop <= firstCardTop - gap - height

                    const gap = 40; // Space between title and images
                    const limit = firstCardTop - rect.height - gap;

                    // The title wants to stick at rawTop (e.g. 96px).
                    // But if limit < rawTop, we must push it up.
                    // We only push UP (negative Y).

                    const delta = Math.min(0, limit - rawTop);

                    if (delta !== currentY) {
                        titleEl.style.transform = `translateY(${delta}px)`;
                    }
                }

                // Phase 1: READ (Measure all items first to avoid layout thrashing)
                const updates = cards.map((card, i) => {
                    const rect = card.getBoundingClientRect();
                    const isStuck = rect.top <= stickyTop + 1;

                    let scale = 1;
                    let blur = 0;

                    if (isStuck) {
                        // Calculate how many cards are covering this one
                        // We only look at cards AFTER the current one
                        let coveredAmount = 0;

                        // Only chek the next few cards for performance
                        // (Usually only immediate neighbors matter for scale)
                        for (let j = i + 1; j < cards.length; j++) {
                            const c = cards[j];
                            const cRect = c.getBoundingClientRect();
                            const cTop = cRect.top;

                            // If next card is entering the "stack zone"
                            // stack zone is from windowHeight down to stickyTop
                            if (cTop < windowHeight) {
                                const distToStick = cTop - stickyTop;
                                const totalDist = windowHeight - stickyTop;
                                let progress = 1 - (distToStick / totalDist);
                                progress = Math.max(0, Math.min(1, progress));
                                coveredAmount += progress;
                            }
                        }

                        scale = 1 - (coveredAmount * itemScale);
                        blur = coveredAmount * blurAmount;
                    }

                    return { card, scale, blur };
                });

                // Phase 2: WRITE (Apply all styles at once)
                updates.forEach(({ card, scale, blur }) => {
                    card.style.transform = `scale(${scale}) translateZ(0)`;
                    if (blurAmount) {
                        card.style.filter = `blur(${blur}px)`;
                    }
                });

                ticking.current = false;
            });

            ticking.current = true;
        }
    }, [itemScale, blurAmount, titleRef]);

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
