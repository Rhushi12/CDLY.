"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedQuote from "../AnimatedQuote";

gsap.registerPlugin(ScrollTrigger);

export default function ChapterVision() {
    const middleCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!middleCardRef.current) return;
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        if (!isDesktop) return;

        gsap.fromTo(
            middleCardRef.current,
            { y: 80 },
            {
                y: -80,
                ease: "none",
                scrollTrigger: {
                    trigger: middleCardRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-40">
            {/* Chapter Marker */}
            <div className="w-full border-t border-[#111318] pt-4 flex justify-between items-start mb-16 lg:mb-24">
                <span className="text-[#004aad] font-[family-name:var(--font-mono)] text-sm tracking-widest">
                    CHAPTER 03
                </span>
                <span className="font-[family-name:var(--font-mono)] text-sm tracking-widest text-gray-400">
                    VISION
                </span>
            </div>

            {/* Full Width Quote */}
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-32">
                <span className="material-symbols-outlined text-6xl text-[#004aad] mb-8 opacity-50">
                    format_quote
                </span>
                <AnimatedQuote
                    text='"Modernity is not about the new. It is about the eternal refined to its sharpest point."'
                    className="text-3xl lg:text-5xl font-serif italic leading-tight text-[#111318] mb-8"
                />
                <cite className="font-[family-name:var(--font-mono)] text-sm tracking-widest uppercase not-italic text-gray-600">
                    — ELENA ROSSI, CREATIVE DIRECTOR
                </cite>
            </div>

            {/* Triptych Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 h-auto lg:h-[600px]">
                <div className="h-[400px] lg:h-full bg-gray-100 overflow-hidden relative group cursor-pointer">
                    <img
                        alt="Abstract fashion portrait with motion blur"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAIToIivImPFtgTQgP3bkfJtsKy4huWYVThR0ehP3LsdfzOsaU82G7wC3ZmbCKFbvcL5sMwVXQtkpHvdwYclftooIewGOzfSKWi16dKoya5MHnuJ9E6cdVbD-bugDBwbNmG-TpKlP4DYb7Rz4Gn4zCCYu_xkCxDeEhmYUa9iP_i0kL996b4nJ5qbCv9SxLU8IHYoKnlRX6mE-xMiP5WHaK2YgLOgUJDSPQ8A4xvXYsA5ZbYGjzBXEuGXAHmf-phkvyPbkp33E4yx8"
                    />
                    <div className="absolute inset-0 bg-[#004aad]/0 group-hover:bg-[#004aad]/80 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-[family-name:var(--font-mono)] text-xl font-bold tracking-widest">
                            COLLECTION I
                        </span>
                    </div>
                </div>

                <div
                    ref={middleCardRef}
                    className="h-[400px] lg:h-full bg-gray-100 overflow-hidden relative group cursor-pointer"
                >
                    <img
                        alt="Model walking in minimalist setting wearing black"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwwQ8ljPgL9EFA24-3uaHi-PLnLkgyPZHkh1k08FtDDl-cN5bHjJ4s6ox7BTeDxV7GiPXDpuyh8XH3p7Nv5mMEZB-2bgkGFm0CI-YA_Jkm9PY9iqOMc6STg-08k7ZxpVdsxwWUpWvdC8WTbwnoqZI-eF6gVZQeyy0_KytEWdoJ41Dou59IOgShTHh-ruhY9v8Jor4Ign5jW9XPr5g8bjJQRConVcKBxWHZsG5W131SyVo3VbqItJzRoF5PB-5WEnYDbmKkOZs7aTw"
                    />
                    <div className="absolute inset-0 bg-[#004aad]/0 group-hover:bg-[#004aad]/80 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-[family-name:var(--font-mono)] text-xl font-bold tracking-widest">
                            COLLECTION II
                        </span>
                    </div>
                </div>

                <div className="h-[400px] lg:h-full bg-gray-100 overflow-hidden relative group cursor-pointer md:mt-0">
                    <img
                        alt="Close up of fabric texture with high contrast lighting"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnDGXTCAoxZuEZnqgyixpDURWFprqo6s0JWhXYqDu-8b1urt6qnm0Bfxy49SY-G5YVY9XmOzbnInsVwgqCX57HOH3knZprGuQxEUGyhEJiiy7wm-45kOTxZDPpaUHNHuZGPWPB-6CF4esQiFlaDNdXBVEMt6T7Di9bGdBhE8KEu4H7NsRGbh9foBVXrFBzuSoHpK65_VLnDU9FgvR2jiKfByijzslkUads-5PnpYp4ezAq26P8U3kqnr_hvsA2ruqMm-74dZ6yS2w"
                    />
                    <div className="absolute inset-0 bg-[#004aad]/0 group-hover:bg-[#004aad]/80 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-[family-name:var(--font-mono)] text-xl font-bold tracking-widest">
                            COLLECTION III
                        </span>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-20 flex justify-center">
                <Link
                    href="/collections"
                    className="group relative px-12 py-6 bg-[#111318] text-white font-bold tracking-widest overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-4 text-lg">
                        EXPLORE THE ARCHIVE
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                            arrow_forward
                        </span>
                    </span>
                    <div className="absolute inset-0 bg-[#004aad] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                </Link>
            </div>
        </section>
    );
}
