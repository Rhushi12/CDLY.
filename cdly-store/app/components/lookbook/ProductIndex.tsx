"use client";

import Link from "next/link";
import SplitText from "../SplitText";

const indexItems = [
    {
        id: "01",
        name: "Coat",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        slug: "wool-trench",
    },
    {
        id: "02",
        name: "Pant",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
        slug: "pleated-trouser",
    },
    {
        id: "03",
        name: "Blazer",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
        slug: "structured-blazer",
    },
    {
        id: "04",
        name: "Shirt",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
        slug: "poplin-shirt",
    },
    {
        id: "05",
        name: "Scarf",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDqLwchKssKhsQ-6GjF98YT7cVOKSHqYgOcPT4A8ygS8HWD552MWX8PbkENViCTnWP-QAazr2Xg-aJ_dySLkghG4tSH_wCcF5HpuprnRJgthUgkBJOq8AFew6B4M4K_T99uLSWG8bukAbaySwG1c9fVujMZzcj9DhXskBlSnbW3UDN8vZiEL5HoqfI6SWUhsFuMGn9G7s3BcAh7fn5nlT-YeB7kMu8dOTPoaulsRcDa9HoV1Z5VJwW-J5fFkRcTJmFeKc3C5aDfPLM",
        slug: "silk-scarf",
    },
    {
        id: "06",
        name: "Boot",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBdnUywGjGsg-O66lCbAkqCXmckmoa5gI946IoJe2voCjsh9JskdR3JJZPDf3vq8EKdMZPFZXFmsKA2jSeRPec7GTvqXYqJzTnJ_OK5kK71nFuaGcgDVlBW52oC4uepu_27Aiwk0Z12C9IaeHCyX7_7ajjIU8rAsEdKf2xf0tyO8U64E385S4ZmzHnPzp5a_tvfhNan6gF2UzuVbA2MJB0vYMdjxpyaanCv6PRNfz-Hs0LJ5Bv0ErAAn4t_H12dm1zMeC2-bZsjjFw",
        slug: "chelsea-boot",
    },
];

export default function ProductIndex() {
    return (
        <section className="w-full max-w-[1920px] mx-auto px-6 py-24 md:py-32 bg-white">
            {/* Header */}
            <div className="flex justify-between items-end mb-16">
                <SplitText
                    text="Index"
                    tag="h2"
                    className="text-3xl font-bold tracking-tight uppercase text-[#111318]"
                    splitType="chars"
                    delay={30}
                    duration={0.8}
                    textAlign="left"
                />
                <a
                    className="text-xs font-bold uppercase tracking-[0.2em] hover:text-[#004aad] text-[#111318]"
                    href="#"
                >
                    Download Line Sheet
                </a>
            </div>

            {/* 6-Column Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {indexItems.map((item) => (
                    <Link
                        key={item.id}
                        href={`/products/${item.slug}`}
                        className="group block"
                    >
                        <div className="aspect-[3/4] border border-gray-200 group-hover:border-[#004aad] transition-colors overflow-hidden">
                            <img
                                alt={item.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                src={item.image}
                            />
                        </div>
                        <div className="mt-2 flex justify-between text-[10px] uppercase font-[family-name:var(--font-mono)] tracking-wider">
                            <span className="text-[#111318]">{item.id}</span>
                            <span className="group-hover:text-[#004aad] text-[#111318]">
                                {item.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
