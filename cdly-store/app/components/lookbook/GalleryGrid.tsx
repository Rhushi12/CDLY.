"use client";

import Link from "next/link";
import SplitText from "../SplitText";

const looks = [
    {
        id: 1,
        name: "Wool Trench",
        price: "$1,200",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        slug: "wool-trench",
    },
    {
        id: 2,
        name: "Pleated Trouser",
        price: "$450",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        slug: "pleated-trouser",
        aspect: "aspect-[4/3]",
    },
    {
        id: 3,
        name: "Structured Blazer",
        price: "$890",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
        slug: "structured-blazer",
    },
    {
        id: 4,
        name: "Poplin Shirt",
        price: "$320",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
        slug: "poplin-shirt",
    },
    {
        id: 5,
        name: "Silk Scarf",
        price: "$180",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDqLwchKssKhsQ-6GjF98YT7cVOKSHqYgOcPT4A8ygS8HWD552MWX8PbkENViCTnWP-QAazr2Xg-aJ_dySLkghG4tSH_wCcF5HpuprnRJgthUgkBJOq8AFew6B4M4K_T99uLSWG8bukAbaySwG1c9fVujMZzcj9DhXskBlSnbW3UDN8vZiEL5HoqfI6SWUhsFuMGn9G7s3BcAh7fn5nlT-YeB7kMu8dOTPoaulsRcDa9HoV1Z5VJwW-J5fFkRcTJmFeKc3C5aDfPLM",
        slug: "silk-scarf",
        aspect: "aspect-[3/4]",
    },
    {
        id: 6,
        name: "Chelsea Boot",
        price: "$560",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw",
        slug: "chelsea-boot",
    },
];

export default function GalleryGrid() {
    return (
        <section
            className="w-full max-w-[1920px] mx-auto px-6 py-24 md:py-32 bg-white"
            id="lookbook"
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-black pb-8">
                <div>
                    <span className="text-[#004aad] font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest mb-2 block">
                        The Seasonal Edit
                    </span>
                    <SplitText
                        text="The Grid"
                        tag="h2"
                        className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-[#111318]"
                        splitType="chars"
                        delay={30}
                        duration={0.8}
                        textAlign="left"
                    />
                </div>
                <p className="text-sm font-[family-name:var(--font-mono)] uppercase text-right max-w-xs mt-8 md:mt-0 text-[#111318]">
                    A study in form, texture, and the absence of color.
                    <br />
                    Scroll to explore styles 01-06.
                </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
                {looks.map((look) => (
                    <Link
                        key={look.id}
                        href={`/products/${look.slug}`}
                        className="break-inside-avoid group cursor-pointer block"
                    >
                        <div className="relative w-full border border-black overflow-hidden">
                            <img
                                alt={`Look ${look.id.toString().padStart(2, "0")}`}
                                className={`w-full ${look.aspect || "h-auto"} object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105`}
                                src={look.image}
                            />
                            {/* Shop Look Overlay */}
                            <div className="absolute bottom-4 left-4 bg-white border border-black px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#111318]">
                                    Shop Look
                                </span>
                            </div>
                        </div>
                        {/* Info */}
                        <div className="mt-4 flex justify-between items-start">
                            <span className="text-[#004aad] text-sm font-bold font-[family-name:var(--font-mono)] tracking-widest">
                                LOOK {look.id.toString().padStart(2, "0")}
                            </span>
                            <div className="text-right">
                                <h3 className="text-lg font-bold uppercase leading-none text-[#111318]">
                                    {look.name}
                                </h3>
                                <span className="text-xs font-[family-name:var(--font-mono)] text-gray-500">
                                    {look.price}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
