"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const navLinks = [
    { href: "/collections", label: "Shop" },
    { href: "/lookbook", label: "Lookbook" },
    { href: "/journal", label: "Journal" },
    { href: "/about", label: "About" },
    { href: "/craftsmanship", label: "Craftsmanship" },
    { href: "/sustainability", label: "Sustainability" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const topBarRef = useRef<HTMLSpanElement>(null);
    const middleBarRef = useRef<HTMLSpanElement>(null);
    const bottomBarRef = useRef<HTMLSpanElement>(null);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // GSAP animations
    useEffect(() => {
        if (!menuRef.current || !overlayRef.current) return;

        const menu = menuRef.current;
        const overlay = overlayRef.current;
        const links = linksRef.current.filter(Boolean);

        if (isOpen) {
            // Animate hamburger to X
            gsap.to(topBarRef.current, {
                rotation: 45,
                y: 6,
                duration: 0.3,
                ease: "power2.inOut",
            });
            gsap.to(middleBarRef.current, {
                opacity: 0,
                scaleX: 0,
                duration: 0.2,
                ease: "power2.inOut",
            });
            gsap.to(bottomBarRef.current, {
                rotation: -45,
                y: -6,
                duration: 0.3,
                ease: "power2.inOut",
            });

            // Animate overlay
            gsap.to(overlay, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            });

            // Animate menu slide in
            gsap.to(menu, {
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            // Animate links stagger
            gsap.fromTo(
                links,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    stagger: 0.08,
                    delay: 0.2,
                    ease: "power3.out",
                }
            );
        } else {
            // Animate hamburger back
            gsap.to(topBarRef.current, {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.inOut",
            });
            gsap.to(middleBarRef.current, {
                opacity: 1,
                scaleX: 1,
                duration: 0.2,
                delay: 0.1,
                ease: "power2.inOut",
            });
            gsap.to(bottomBarRef.current, {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.inOut",
            });

            // Animate menu slide out
            gsap.to(menu, {
                x: "100%",
                duration: 0.4,
                ease: "power3.in",
            });

            // Fade out overlay
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [isOpen]);

    return (
        <>
            <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-colors duration-300">
                <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Link
                            className="text-2xl font-bold tracking-tight uppercase text-[#111318] hover:text-[--primary] transition-colors"
                            href="/"
                        >
                            CDLY.
                        </Link>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link
                            className="text-sm font-medium uppercase tracking-widest text-[#111318] hover:text-[--primary] hover:underline underline-offset-4 decoration-1 transition-all"
                            href="/collections"
                        >
                            Shop
                        </Link>
                        <Link
                            className="text-sm font-medium uppercase tracking-widest text-[#111318] hover:text-[--primary] hover:underline underline-offset-4 decoration-1 transition-all"
                            href="/journal"
                        >
                            Journal
                        </Link>
                        <Link
                            className="text-sm font-medium uppercase tracking-widest text-[#111318] hover:text-[--primary] hover:underline underline-offset-4 decoration-1 transition-all"
                            href="/about"
                        >
                            About
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/cart"
                            className="hidden sm:flex text-sm font-medium uppercase tracking-widest text-[#111318] hover:text-[--primary] transition-colors"
                        >
                            Cart (0)
                        </Link>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] z-[60]"
                            aria-label="Toggle menu"
                        >
                            <span
                                ref={topBarRef}
                                className="block w-6 h-[2px] bg-[#111318] origin-center"
                            />
                            <span
                                ref={middleBarRef}
                                className="block w-6 h-[2px] bg-[#111318] origin-center"
                            />
                            <span
                                ref={bottomBarRef}
                                className="block w-6 h-[2px] bg-[#111318] origin-center"
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                ref={overlayRef}
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/60 z-40 md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                style={{ opacity: 0 }}
            />

            {/* Mobile Menu Panel */}
            <div
                ref={menuRef}
                className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-50 md:hidden shadow-2xl"
                style={{ transform: "translateX(100%)" }}
            >
                <div className="flex flex-col h-full pt-24 px-8">
                    {/* Nav Links */}
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                ref={(el) => {
                                    linksRef.current[index] = el;
                                }}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-black uppercase tracking-tight text-[#111318] py-3 border-b border-gray-100 hover:text-[--primary] hover:pl-4 transition-all duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Cart Link (Mobile) */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <Link
                            ref={(el) => {
                                linksRef.current[navLinks.length] = el;
                            }}
                            href="/cart"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 text-lg font-bold uppercase tracking-widest text-[#111318] hover:text-[--primary] transition-colors"
                        >
                            <span className="material-symbols-outlined">
                                shopping_bag
                            </span>
                            Cart (0)
                        </Link>
                    </div>

                    {/* Footer Info */}
                    <div className="mt-auto pb-12">
                        <div className="flex flex-col gap-4 text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest text-gray-500">
                            <a
                                href="mailto:hello@cdly.store"
                                className="hover:text-[--primary] transition-colors"
                            >
                                hello@cdly.store
                            </a>
                            <div className="flex gap-6">
                                <a
                                    href="#"
                                    className="hover:text-[--primary] transition-colors"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-[--primary] transition-colors"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
