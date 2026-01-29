"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: string;
    from?: { opacity?: number; y?: number; x?: number };
    to?: { opacity?: number; y?: number; x?: number };
    threshold?: number;
    rootMargin?: string;
    textAlign?: "left" | "center" | "right";
    tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
    onLetterAnimationComplete?: () => void;
}

const SplitText = ({
    text,
    className = "",
    delay = 50,
    duration = 1.25,
    ease = "power3.out",
    splitType = "chars",
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = "-100px",
    textAlign = "center",
    tag = "p",
    onLetterAnimationComplete,
}: SplitTextProps) => {
    const ref = useRef<HTMLElement>(null);
    const animationCompletedRef = useRef(false);
    const onCompleteRef = useRef(onLetterAnimationComplete);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    // Keep callback ref updated
    useEffect(() => {
        onCompleteRef.current = onLetterAnimationComplete;
    }, [onLetterAnimationComplete]);

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
            // Prevent re-animation if already completed
            if (animationCompletedRef.current) return;
            const el = ref.current as HTMLElement & {
                _rbsplitInstance?: GSAPSplitText;
            };

            if (el._rbsplitInstance) {
                try {
                    el._rbsplitInstance.revert();
                } catch {
                    /* noop */
                }
                el._rbsplitInstance = undefined;
            }

            const startPct = (1 - threshold) * 100;
            const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
            const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
            const sign =
                marginValue === 0
                    ? ""
                    : marginValue < 0
                        ? `-=${Math.abs(marginValue)}${marginUnit}`
                        : `+=${marginValue}${marginUnit}`;
            const start = `top ${startPct}%${sign}`;

            let targets: Element[] | undefined;
            const assignTargets = (self: GSAPSplitText) => {
                if (splitType.includes("chars") && self.chars.length)
                    targets = self.chars;
                if (!targets && splitType.includes("words") && self.words.length)
                    targets = self.words;
                if (!targets && splitType.includes("lines") && self.lines.length)
                    targets = self.lines;
                if (!targets) targets = self.chars || self.words || self.lines;
            };

            const splitInstance = new GSAPSplitText(el, {
                type: splitType,
                linesClass: "split-line",
                wordsClass: "split-word",
                charsClass: "split-char",
                onSplit: (self: GSAPSplitText) => {
                    assignTargets(self);
                    if (!targets || targets.length === 0) return;
                    const tween = gsap.fromTo(
                        targets as gsap.TweenTarget,
                        { ...from },
                        {
                            ...to,
                            duration,
                            ease,
                            stagger: delay / 1000,
                            scrollTrigger: {
                                trigger: el,
                                start,
                                once: true,
                            },
                            onComplete: () => {
                                animationCompletedRef.current = true;
                                onCompleteRef.current?.();
                            },
                        }
                    );
                    return tween;
                },
            });

            el._rbsplitInstance = splitInstance;

            return () => {
                ScrollTrigger.getAll().forEach((st) => {
                    if (st.trigger === el) st.kill();
                });
                try {
                    splitInstance.revert();
                } catch {
                    /* noop */
                }
                el._rbsplitInstance = undefined;
            };
        },
        {
            dependencies: [
                text,
                delay,
                duration,
                ease,
                splitType,
                JSON.stringify(from),
                JSON.stringify(to),
                threshold,
                rootMargin,
                fontsLoaded,
            ],
            scope: ref,
        }
    );

    const style = {
        textAlign,
        overflow: "hidden" as const,
        display: "inline-block" as const,
        whiteSpace: "normal" as const,
        wordWrap: "break-word" as const,
    };
    const classes = `split-parent ${className}`;

    switch (tag) {
        case "h1":
            return (
                <h1
                    ref={ref as React.RefObject<HTMLHeadingElement>}
                    style={style}
                    className={classes}
                >
                    {text}
                </h1>
            );
        case "h2":
            return (
                <h2
                    ref={ref as React.RefObject<HTMLHeadingElement>}
                    style={style}
                    className={classes}
                >
                    {text}
                </h2>
            );
        case "h3":
            return (
                <h3
                    ref={ref as React.RefObject<HTMLHeadingElement>}
                    style={style}
                    className={classes}
                >
                    {text}
                </h3>
            );
        case "h4":
            return (
                <h4
                    ref={ref as React.RefObject<HTMLHeadingElement>}
                    style={style}
                    className={classes}
                >
                    {text}
                </h4>
            );
        case "h5":
            return (
                <h5
                    ref={ref as React.RefObject<HTMLHeadingElement>}
                    style={style}
                    className={classes}
                >
                    {text}
                </h5>
            );
        case "h6":
            return (
                <h6
                    ref={ref as React.RefObject<HTMLHeadingElement>}
                    style={style}
                    className={classes}
                >
                    {text}
                </h6>
            );
        case "span":
            return (
                <span
                    ref={ref as React.RefObject<HTMLSpanElement>}
                    style={style}
                    className={classes}
                >
                    {text}
                </span>
            );
        default:
            return (
                <p
                    ref={ref as React.RefObject<HTMLParagraphElement>}
                    style={style}
                    className={classes}
                >
                    {text}
                </p>
            );
    }
};

export default SplitText;
