"use client";

import { useLayoutEffect, useRef, useCallback, ReactNode } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

// Interface for item props
interface ScrollStackItemProps {
    children: ReactNode;
    itemClassName?: string;
}

// Item Component
export const ScrollStackItem = ({
    children,
    itemClassName = "",
}: ScrollStackItemProps) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

// Interface for ScrollStack props
interface ScrollStackProps {
    children: ReactNode;
    className?: string;
    itemDistance?: number;
    itemScale?: number;
    itemStackDistance?: number;
    stackPosition?: string | number; // allow string for '%'
    scaleEndPosition?: string | number;
    baseScale?: number;
    scaleDuration?: number;
    rotationAmount?: number;
    blurAmount?: number;
    useWindowScroll?: boolean;
    onStackComplete?: () => void;
}

// Helper types for Lenis and scrolling
interface ScrollData {
    scrollTop: number;
    containerHeight: number;
    scrollContainer: HTMLElement;
}

interface ItemTransform {
    translateY: number;
    scale: number;
    rotation: number;
    blur: number;
}


const ScrollStack = ({
    children,
    className = "",
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = "20%",
    scaleEndPosition = "10%",
    baseScale = 0.85,
    scaleDuration = 0.5,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = false,
    onStackComplete,
}: ScrollStackProps) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const stackCompletedRef = useRef(false);
    const animationFrameRef = useRef<number | null>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const cardsRef = useRef<(HTMLElement | null)[]>([]);
    const lastTransformsRef = useRef<Map<number, ItemTransform>>(new Map());
    const isUpdatingRef = useRef(false);

    // Helper to normalize stackPosition and others that can be strings
    const parsePercentage = useCallback(
        (value: string | number, containerHeight: number) => {
            if (typeof value === "string" && value.includes("%")) {
                return (parseFloat(value) / 100) * containerHeight;
            }
            return value as number;
        },
        []
    );

    const calculateProgress = useCallback(
        (scrollTop: number, start: number, end: number) => {
            if (scrollTop < start) return 0;
            if (scrollTop > end) return 1;
            return (scrollTop - start) / (end - start);
        },
        []
    );

    const getScrollData = useCallback((): ScrollData => {
        if (useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight,
                scrollContainer: document.documentElement,
            };
        } else {
            const scroller = scrollerRef.current;
            if (!scroller) {
                return {
                    scrollTop: 0,
                    containerHeight: 0,
                    scrollContainer: document.documentElement
                }
            }

            return {
                scrollTop: scroller.scrollTop,
                containerHeight: scroller.clientHeight,
                scrollContainer: scroller,
            };
        }
    }, [useWindowScroll]);

    const getElementOffset = useCallback(
        (element: HTMLElement): number => {
            if (useWindowScroll) {
                const rect = element.getBoundingClientRect();
                return rect.top + window.scrollY;
            } else {
                return element.offsetTop;
            }
        },
        [useWindowScroll]
    );

    const updateCardTransforms = useCallback(() => {
        if (!cardsRef.current.length || isUpdatingRef.current) return;

        isUpdatingRef.current = true;

        const { scrollTop, containerHeight, scrollContainer } = getScrollData();
        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

        const endElement = useWindowScroll
            ? document.querySelector(".scroll-stack-end")
            : scrollerRef.current?.querySelector(".scroll-stack-end");

        const endElementTop =
            endElement && endElement instanceof HTMLElement
                ? getElementOffset(endElement)
                : 0;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const cardTop = getElementOffset(card);
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;

            const scaleProgress = calculateProgress(
                scrollTop,
                triggerStart,
                triggerEnd
            );
            const targetScale = baseScale + i * itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount) {
                let topCardIndex = 0;
                for (let j = 0; j < cardsRef.current.length; j++) {
                    const c = cardsRef.current[j];
                    if (c) {
                        const jCardTop = getElementOffset(c);
                        const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
                        if (scrollTop >= jTriggerStart) {
                            topCardIndex = j;
                        }
                    }
                }

                if (i < topCardIndex) {
                    const depthInStack = topCardIndex - i;
                    blur = Math.max(0, depthInStack * blurAmount);
                }
            }

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                translateY =
                    scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY =
                    pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            const newTransform: ItemTransform = {
                translateY: Math.round(translateY * 100) / 100,
                scale: Math.round(scale * 1000) / 1000,
                rotation: Math.round(rotation * 100) / 100,
                blur: Math.round(blur * 100) / 100,
            };

            const lastTransform = lastTransformsRef.current.get(i);
            const hasChanged =
                !lastTransform ||
                Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
                Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
                Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
                Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

            if (hasChanged) {
                const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
                const filter =
                    newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

                card.style.transform = transform;
                card.style.filter = filter;

                lastTransformsRef.current.set(i, newTransform);
            }

            if (i === cardsRef.current.length - 1) {
                const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                if (isInView && !stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete?.();
                } else if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        });

        isUpdatingRef.current = false;
    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        rotationAmount,
        blurAmount,
        useWindowScroll,
        onStackComplete,
        calculateProgress,
        parsePercentage,
        getScrollData,
        getElementOffset,
    ]);

    const handleScroll = useCallback(() => {
        updateCardTransforms();
    }, [updateCardTransforms]);

    const setupLenis = useCallback(() => {
        // Note: We're using standard Lenis options here.
        if (useWindowScroll) {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                // smoothWheel: true, // Deprecated in recent versions, enabled by default
                touchMultiplier: 2,
                infinite: false,
                // wheelMultiplier: 1, // Deprecated/Removed
                lerp: 0.1,
                // syncTouch: true,
                // syncTouchLerp: 0.075,
            });

            lenis.on("scroll", handleScroll);

            const raf = (time: number) => {
                lenis.raf(time);
                animationFrameRef.current = requestAnimationFrame(raf);
            };
            animationFrameRef.current = requestAnimationFrame(raf);

            lenisRef.current = lenis;
            return lenis;
        } else {
            const scroller = scrollerRef.current;
            if (!scroller) return;

            // For element scrolling, we need to pass wrapper and content
            // Note: check your Lenis version if wrapper/content are supported directly in options
            // or if you simply instantiate Lenis normally and it auto-detects if scrolling on body
            const lenis = new Lenis({
                wrapper: scroller,
                content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                // smoothWheel: true,
                touchMultiplier: 2,
                infinite: false,
                // gestureOrientationHandler: true,
                // normalizeWheel: true,
                // wheelMultiplier: 1,
                // touchInertiaMultiplier: 35,
                lerp: 0.1,
                // syncTouch: true,
                // syncTouchLerp: 0.075, // These might be removed in newer Lenis
                // touchInertia: 0.6,
            });

            lenis.on("scroll", handleScroll);

            const raf = (time: number) => {
                lenis.raf(time);
                animationFrameRef.current = requestAnimationFrame(raf);
            };
            animationFrameRef.current = requestAnimationFrame(raf);

            lenisRef.current = lenis;
            return lenis;
        }
    }, [handleScroll, useWindowScroll]);

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;

        // If not using window scroll, wait for ref
        if (!useWindowScroll && !scroller) return;

        // Select cards
        let cards: HTMLElement[] = [];
        if (useWindowScroll) {
            cards = Array.from(document.querySelectorAll(".scroll-stack-card"));
        } else if (scroller) {
            cards = Array.from(scroller.querySelectorAll(".scroll-stack-card"));
        }

        cardsRef.current = cards;
        const transformsCache = lastTransformsRef.current;

        // Initial styles
        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
            card.style.willChange = "transform, filter";
            card.style.transformOrigin = "top center";
            card.style.backfaceVisibility = "hidden";
            card.style.transform = "translateZ(0)";
            // card.style.webkitTransform = 'translateZ(0)'; // Not needed in strictly typed TS if using style object, but okay
            card.style.perspective = "1000px";
            // card.style.webkitPerspective = '1000px';
        });

        setupLenis();
        updateCardTransforms();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
            stackCompletedRef.current = false;
            cardsRef.current = [];
            transformsCache.clear();
            isUpdatingRef.current = false;
        };
    }, [
        itemDistance,
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        scaleDuration,
        rotationAmount,
        blurAmount,
        useWindowScroll,
        onStackComplete,
        setupLenis,
        updateCardTransforms,
    ]);

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
