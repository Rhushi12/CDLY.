"use client";

import { useState } from "react";

const seasons = [
    { name: "All Seasons", id: "all" },
    { name: "Fall/Winter", id: "fw" },
    { name: "Spring/Summer", id: "ss" },
    { name: "Campaigns", id: "campaigns" },
];

export default function SeasonNav() {
    const [activeSeason, setActiveSeason] = useState("all");

    return (
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 w-full transition-all">
            <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center justify-start gap-8 md:gap-16 overflow-x-auto scrollbar-hide">
                {seasons.map((season) => (
                    <button
                        key={season.id}
                        className={`text-xs font-bold uppercase tracking-[0.15em] hover:text-[#004aad] whitespace-nowrap transition-colors ${activeSeason === season.id ? "text-[#004aad]" : "text-[#111318]"
                            }`}
                        onClick={() => setActiveSeason(season.id)}
                    >
                        {season.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
