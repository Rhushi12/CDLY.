const looks = [
    {
        id: 1,
        title: "Look 01 / Urban Utility",
        description: "Wool Trench + Pleated Trouser",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        hotspots: [
            { top: "30%", left: "40%" },
            { bottom: "25%", right: "30%" },
        ],
    },
    {
        id: 2,
        title: "Look 02 / Soft Structure",
        description: "Cashmere Knit + Wide Trouser",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNkr4p_NgJfxwPRvJ0jN_N8zKhVp4ycPhME7gFmndMmINaagEo8ThDEVyzv73XW1bK1hjDLmPM66QGVkI7wI1pP98Ydqr95xANyTzcrl4Eu62S7G4_97RFNyE0zlZyV3PnNAHf_0mY4vX1p24hqZnCo6yD3q4Aylmtayn1ZKX6SLkFAVMc5lYYOcuqbnN6wBrfas5gv31Vc6sJvALDlArYL5rMwiib1jqdGspT2KsB3IODBQUrpHA9NlPOICV-wNah13Ug1bke798",
        hotspots: [{ top: "45%", left: "50%" }],
    },
    {
        id: 3,
        title: "Look 03 / Archive Edit",
        description: "Archive Parka + Combat Boot",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
        hotspots: [{ top: "20%", right: "20%" }],
    },
    {
        id: 4,
        title: "Look 04 / Minimal Form",
        description: "Poplin Shirt + Leather Belt",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo5LMDa2pGV3QFyOto6ex_9Sz1-WNVmRtBxSGVkb9O33tUZ-yyTqBVBzEvXRy_Nvxqi493Q-Dtjoq5TkrARySl4JM3mdmUSY4sScIOsZ8m74nh_h4yIsdjc9R1ELsn7hlzYXgzhNPHYXoJz5ttUtqQHMABsOA3VpC-yrVuVTrz6ApOLhZFzhKxTIheIgN48zMiSAVZ40W6uJlPzsOc0uIAwxrXRrRcpqX_SH2pOkhTBHVBtf1zZ9f3-Cfv-jIy1qvMEjF6pLN2gmw",
        hotspots: [{ bottom: "40%", left: "30%" }],
    },
];

export default function CuratedLooks() {
    return (
        <section className="border-t border-black bg-white reveal-on-scroll">
            <div className="max-w-[1440px] mx-auto">
                <div className="px-6 py-12 border-b border-black flex justify-between items-center">
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#111318]">
                        Curated Looks
                    </h3>
                    <div className="hidden md:flex gap-4">
                        <button className="w-12 h-12 border border-black flex items-center justify-center text-[#111318] hover:bg-black hover:text-white transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button className="w-12 h-12 border border-black flex items-center justify-center text-[#111318] hover:bg-black hover:text-white transition-colors">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="horizontal-scroll flex overflow-x-auto snap-x snap-mandatory scrollbar-hide border-b border-black">
                    {looks.map((look) => (
                        <div
                            key={look.id}
                            className="flex-none w-[85vw] md:w-[60vw] lg:w-[40vw] border-r border-black relative group snap-start"
                        >
                            <div className="aspect-[3/4] w-full relative">
                                <img
                                    alt={look.title}
                                    className="w-full h-full object-cover"
                                    src={look.imageUrl}
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                {look.hotspots.map((hotspot, index) => (
                                    <button
                                        key={index}
                                        className="absolute w-8 h-8 rounded-full bg-[#004aad] text-white flex items-center justify-center animate-pulse hover:animate-none hover:scale-110 transition-transform z-10"
                                        style={hotspot as React.CSSProperties}
                                    >
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                ))}
                            </div>
                            <div className="p-6 border-t border-black flex justify-between items-center bg-white">
                                <div>
                                    <h4 className="text-lg font-bold uppercase text-[#111318]">{look.title}</h4>
                                    <p className="text-xs font-[family-name:var(--font-mono)] text-gray-500 uppercase mt-1">
                                        {look.description}
                                    </p>
                                </div>
                                <a
                                    className="text-xs font-bold uppercase tracking-widest text-[#004aad] underline underline-offset-4"
                                    href="#"
                                >
                                    Shop Look
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
