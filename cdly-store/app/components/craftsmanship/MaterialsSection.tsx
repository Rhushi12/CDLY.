"use client";

import React, { useState } from "react";

const materials = [
    {
        id: "denim",
        name: "Japanese Denim",
        bgImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbNv48_DmO0L8RmBkoKyamtrXsaXU2gA_9MgQT9x6r6Z30DnIdqXiE0M8ZdJNzEoiBfg7PWD8WFTEanNFQ0yho7mC0kTtd1G7q-BYDSHOy_yHNbvyQcbPX8moSj4oB2xAxoafvCzgDHBU-Regq81cTRSn3KbJQgtyjx0iWnM1rYYuSoBBjTVmgDUH8mBwl0yCT13vW0SD4vOnh98BfCAreSNLORCIdyOz_VX-AEUxqRpl4cBZqM4e0YPKx4rZrMZ7C2uuReXK91qU",
    },
    {
        id: "silk",
        name: "Italian Silk",
        bgImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB3wWZCyBJpL3dRrsh9jWvhFZGBS_Oq9Sn7lH2ukILu5hk7qQJMmmtINMPLVC3uo5nsZtuSgpMJrRzu7VySKlzhtvw4jzCvsgEOrVHX4kjLQCvzHDditlrnIguwnJXM23i-KyVaMNu7QB073bWPxyXa7nKSlFq9xhsEVejTPt606dkWDRJX_AYoXMtkeeAjE_hBGvkUW2iFjUOFqK7dhDZ9QRUig5dG0XWtzBGJHmyj05w-g9Qm_AcU5PGvENpn5rK6hZIoWxeLVFo",
    },
    {
        id: "wool",
        name: "Organic Wool",
        bgImage:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7rWIYUU2OlaoWr1TRpLQMjPtlRWfnKopBAvcwNTcAGMgmhS4bbg6cfK5GuSYvtWSHeJvq_mTa-wvupaTiJMDWBjdrV73IsqyvTa5mD7RvkS2JrAXFkXI1cZP3cKHSz1QFjKvZiV_vCv0qU150OXmSHXe4ehelpkSs-kS0jJy0yEhNBnGO0iLWyEIKfityKBG6oJ6dIQG6XdOULEW2x26BtNpQdx7LF024sts7TcAwUg-Wx1p2AdpWMyJHdQteessETrOrqRCv5w",
    },
];

export default function MaterialsSection() {
    const [hoveredMaterial, setHoveredMaterial] = useState<string | null>(null);

    const activeMaterial = materials.find((m) => m.id === hoveredMaterial);

    return (
        <section className="w-full border-b border-black bg-[#111621] relative overflow-hidden h-[70vh] flex items-center justify-center">
            {/* Material Names */}
            <div className="relative z-30 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                {materials.map((material, index) => (
                    <React.Fragment key={material.id}>
                        <h2
                            className={`cursor-pointer text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all duration-500 ${hoveredMaterial === material.id
                                ? "text-white"
                                : "text-transparent"
                                }`}
                            style={{
                                WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                            }}
                            onMouseEnter={() => setHoveredMaterial(material.id)}
                            onMouseLeave={() => setHoveredMaterial(null)}
                        >
                            {material.name}
                        </h2>
                        {index < materials.length - 1 && (
                            <span className="hidden md:block w-px h-12 bg-white/20" />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Instruction Text */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <span className="text-xs font-[family-name:var(--font-mono)] text-white/50 uppercase tracking-[0.2em] animate-pulse">
                    Select Material to Inspect
                </span>
            </div>

            {/* Background Image on Hover */}
            <div
                className={`absolute inset-0 z-10 transition-opacity duration-700 ease-out pointer-events-none ${activeMaterial ? "opacity-100" : "opacity-0"
                    }`}
            >
                {activeMaterial && (
                    <div
                        className="w-full h-full bg-cover bg-center grayscale contrast-125 brightness-50"
                        style={{ backgroundImage: `url('${activeMaterial.bgImage}')` }}
                    />
                )}
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
            </div>

            {/* Default Background */}
            <div className="absolute inset-0 z-0 bg-[#111621]" />
        </section>
    );
}
