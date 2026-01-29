"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

interface AnimatedQuoteProps {
    text: string;
    className?: string;
    duration?: number;
    delay?: number;
    ease?: string;
    staggerDelay?: number;
}

export default function AnimatedQuote({
    text,
    className = "",
    duration = 1,
    delay = 0,
    ease = "power4.out",
    staggerDelay = 0.08,
}: AnimatedQuoteProps) {
    const ref = useRef<HTMLQuoteElement>(null);
    const animationCompletedRef = useRef(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if (document.fonts.status === "loaded") {
            setFontsLoaded(true);
        } else {
            document.fonts.ready.then(() => {
                setFontsLoaded(true);
            });
        }
    }, []);

    useGSAP(
        () => {
            if (!ref.current || !text || !fontsLoaded) return;
            if (animationCompletedRef.current) return;

            const el = ref.current as HTMLElement & {
                _quoteSplitInstance?: GSAPSplitText;
            };

            if (el._quoteSplitInstance) {
                try {
                    el._quoteSplitInstance.revert();
                } catch {
                    /* noop */
                }
                el._quoteSplitInstance = undefined;
            }

            // Split by words for quote animation
            const splitInstance = new GSAPSplitText(el, {
                type: "words",
                wordsClass: "quote-word",
            });

            // Initial state: words are invisible and shifted
            gsap.set(splitInstance.words, {
                opacity: 0,
                y: 60,
                rotationX: -45,
                transformOrigin: "center bottom",
            });

            // Animate words on scroll
            gsap.to(splitInstance.words, {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration,
                ease,
                stagger: staggerDelay,
                delay,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    once: true,
                },
                onComplete: () => {
                    animationCompletedRef.current = true;
                },
            });

            el._quoteSplitInstance = splitInstance;

            return () => {
                ScrollTrigger.getAll().forEach((st) => {
                    if (st.trigger === el) st.kill();
                });
                try {
                    splitInstance.revert();
                } catch {
                    /* noop */
                }
                el._quoteSplitInstance = undefined;
            };
        },
        {
            dependencies: [text, duration, delay, ease, staggerDelay, fontsLoaded],
            scope: ref,
        }
    );

    return (
        <blockquote
            ref={ref}
            className={`${className}`}
            style={{
                perspective: "1000px",
            }}
        >
            {text}
        </blockquote>
    );
}
