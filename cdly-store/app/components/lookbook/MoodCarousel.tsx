"use client";

import SplitText from "../SplitText";

const textures = [
    {
        type: "material",
        label: "Material: Organic Poplin",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
    },
    {
        type: "polaroid",
        label: "Scouting — 14:00",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        rotate: "rotate-2",
    },
    {
        type: "material",
        label: "Detail: Peak Lapel",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
    },
    {
        type: "polaroid",
        label: "Ref: Brutalism",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
        rotate: "-rotate-2",
    },
    {
        type: "material",
        label: "Fiber: Cashmere Blend",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
    },
];

export default function MoodCarousel() {
    return (
        <section className="w-full border-t border-black py-24 md:py-32 bg-white overflow-hidden">
            {/* Header */}
            <div className="max-w-[1920px] mx-auto px-6 mb-16">
                <SplitText
                    text="Mood & Texture"
                    tag="h2"
                    className="text-4xl font-bold tracking-tight uppercase text-[#111318]"
                    splitType="chars"
                    delay={30}
                    duration={0.8}
                    textAlign="left"
                />
            </div>

            {/* Horizontal Scroll */}
            <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-12 px-6 w-fit pb-12">
                    {textures.map((item, index) =>
                        item.type === "material" ? (
                            <div key={index} className="w-[400px] flex-shrink-0 group">
                                <div className="aspect-square border border-black overflow-hidden mb-4">
                                    <img
                                        alt={item.label}
                                        className="w-full h-full object-cover scale-150 group-hover:scale-[1.6] transition-transform duration-700 grayscale contrast-125"
                                        src={item.image}
                                    />
                                </div>
                                <span className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#004aad]">
                                    {item.label}
                                </span>
                            </div>
                        ) : (
                            <div
                                key={index}
                                className={`w-[300px] flex-shrink-0 relative ${index === 1 ? "pt-12" : "pt-8"}`}
                            >
                                <div
                                    className={`bg-white p-4 pb-16 border border-black shadow-xl ${item.rotate} hover:rotate-0 transition-transform duration-300`}
                                >
                                    <div className="aspect-[4/5] bg-gray-100 mb-4 overflow-hidden grayscale">
                                        <img
                                            alt={item.label}
                                            className="w-full h-full object-cover"
                                            src={item.image}
                                        />
                                    </div>
                                    <p className="text-center text-xs font-[family-name:var(--font-mono)] uppercase text-gray-500">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
