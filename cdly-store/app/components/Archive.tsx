"use client";

import SplitText from "./SplitText";

const archiveItems = [
    {
        title: "Spring 98",
        volume: "Vol. 02 — Berlin",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
    },
    {
        title: "Winter 05",
        volume: "Vol. 14 — Tokyo",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
    },
    {
        title: "Fall 11",
        volume: "Vol. 21 — Paris",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU",
    },
    {
        title: "Summer 18",
        volume: "Vol. 33 — Milan",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB22YQSyDdp7avTMvT3g3NUxMJk_loM2mwNgs_RPnP5IDzIskT_z32W29JUdDRsop8PWcBm1IIM6uB5nC3Y0qSQChTr0pJFHRgCxy-y1gUnwaKKgsP_6uZSXmX4D3Oopu8eRm_DBWpJ5VU6WK6rr0ztLv5hJwQR6F-5K3D_X4nkOd2RHH1vUlvrh0y57IZ_moF33dsRd5J9C6X0EO5jcsC7PwO7Sup1h_wMiblHqLziwA0IeAnX800ECSDwLVBDBLW4cwFEo4eRFlM",
    },
    {
        title: "Resort 22",
        volume: "Vol. 45 — Antwerp",
        imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
    },
];

export default function Archive() {
    return (
        <section className="w-full border-t border-gray-200 overflow-hidden bg-white reveal-on-scroll">
            <div className="max-w-[1440px] mx-auto">
                <div className="px-6 py-10 md:py-16 border-b border-gray-200">
                    <SplitText
                        text="The Archive"
                        tag="h2"
                        className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-[#111318] leading-none"
                        splitType="chars"
                        delay={30}
                        duration={0.8}
                        textAlign="left"
                    />
                </div>
                <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
                    <div className="flex gap-8 px-6 py-12 w-fit">
                        {archiveItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex-none w-[300px] md:w-[400px] group cursor-pointer ${index === archiveItems.length - 1 ? "pr-6" : ""
                                    }`}
                            >
                                <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative mb-4 border border-transparent group-hover:border-[--primary] transition-colors">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${item.imageUrl}')` }}
                                    />
                                </div>
                                <div className="flex justify-between items-baseline border-t border-black pt-3">
                                    <span className="text-sm font-bold uppercase tracking-widest text-[#111318] group-hover:text-[--primary] transition-colors">
                                        {item.title}
                                    </span>
                                    <span className="text-xs font-[family-name:var(--font-mono)] text-gray-500 uppercase">
                                        {item.volume}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
