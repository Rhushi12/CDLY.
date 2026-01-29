"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        name: "Wool Trench Coat",
        category: "Outerwear",
        price: "$1,250",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        isNew: true,
        slug: "wool-trench-coat",
    },
    {
        name: "Relaxed Pleated Trouser",
        category: "Bottoms",
        price: "$450",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        isNew: false,
        slug: "relaxed-pleated-trouser",
        isMiddle: true,
    },
    {
        name: "Heavyweight Cashmere Knit",
        category: "Knitwear",
        price: "$890",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
        isNew: false,
        slug: "heavyweight-cashmere-knit",
    },
    {
        name: "Structured Poplin Shirt",
        category: "Tops",
        price: "$320",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
        isNew: true,
        slug: "structured-poplin-shirt",
    },
    {
        name: "Technical Parka",
        category: "Outerwear",
        price: "$1,450",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        isNew: false,
        slug: "technical-parka",
        isMiddle: true,
    },
    {
        name: "Polished Leather Derby",
        category: "Footwear",
        price: "$650",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw",
        isNew: false,
        slug: "polished-leather-derby",
    },
    {
        name: "Wide Leg Wool Trouser",
        category: "Bottoms",
        price: "$520",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        isNew: false,
        slug: "wide-leg-wool-trouser",
    },
    {
        name: "Silk Blend Shirt",
        category: "Tops",
        price: "$420",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        isNew: false,
        slug: "silk-blend-shirt",
        isMiddle: true,
    },
    {
        name: "Double Breasted Blazer",
        category: "Tailoring",
        price: "$1,100",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
        isNew: false,
        slug: "double-breasted-blazer",
    },
];

export default function NewArrivalsGrid() {
    const middleCardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const middleCards = middleCardsRef.current.filter(Boolean);
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

        if (!isDesktop || middleCards.length === 0) return;

        middleCards.forEach((card) => {
            if (!card) return;

            gsap.fromTo(
                card,
                { y: 80 },
                {
                    y: -80,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
                {products.map((product, index) => (
                    <div
                        key={product.slug}
                        ref={(el) => {
                            if (product.isMiddle) {
                                middleCardsRef.current[index] = el;
                            }
                        }}
                    >
                        <Link
                            href={`/products/${product.slug}`}
                            className="group cursor-pointer block"
                        >
                            {/* Image */}
                            <div className="relative w-full aspect-[3/4] border border-black overflow-hidden mb-6 bg-gray-100">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${product.imageUrl}')` }}
                                />
                                <div className="absolute inset-0 bg-[#004aad] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                {product.isNew && (
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-[#004aad] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                                            New
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm font-bold uppercase tracking-wider group-hover:text-[#004aad] transition-colors text-[#111318]">
                                    {product.name}
                                </h3>
                                <div className="flex justify-between items-baseline border-t border-black/10 pt-2">
                                    <span className="text-[10px] font-[family-name:var(--font-mono)] text-gray-500 uppercase tracking-widest">
                                        {product.category}
                                    </span>
                                    <span className="text-sm font-[family-name:var(--font-mono)] font-medium text-[#111318]">
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            <div className="mt-24 text-center">
                <button className="inline-block border border-black px-16 py-5 text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#004aad] hover:text-white hover:border-[#004aad] transition-all text-[#111318]">
                    Load More Products
                </button>
            </div>
        </main>
    );
}
