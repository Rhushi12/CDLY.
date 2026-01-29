const technologies = [
    {
        title: "Seamless\nBonding",
        tech: "Tech.01 — Sonic Weld",
        specs: ["TEMP: 450C", "PRESS: 20BAR"],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCthZ3RckwA3HUeVfJDt2Y2YRPxog7PulbmUYuQMWi46rQ0iFFJeyQJCycx9U5CdK7-5kHBjuHf4ixlnh7-hGCxyoCac8GPIpJwqS_izLTyMCmw282y_Z7dtVm7hYiUiSRwxldCZjwrP4TzgYd167s0JTcPnECgQxFgMs-HwYPO_XMx9x-wvEOq7ZXi-pO9f8h60P8a3HDpHllqNqluY8ljyQhJbjpf6-7E11D2v-L4JD3yG0Id6N3AXFJo3IWNl6j0UX8Qdiu3CeY",
    },
    {
        title: "Ergonomic\nFlow",
        tech: "Tech.02 — Kinetic",
        specs: ["AXIS: 3-D", "FLEX: 200%"],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCjWemkzoryuO8zoe-LjDsC86CmwP7FdsjVcYsfB1vXJ6hcqD1c3EbjZUhTAFvdcGnuo3KkbhZFOkBBk43qulTST_dQlQ_YPHlOrTnmzur-TYF_yMwXaU7FY5Bet6rHUgXaTQ6XeP4YoB5i3o2HSM7CNBbFrywAmNbbIVX136bs9wJw1ZfIq3c3ZpvOApHgrLcVWWr2QIxL1wA4rfoDYSz0Wce3wydJw8nLvUVQ1nwLFfT8CUjDmmZuiXTqy_IuF4OEnX_FbPSOVOE",
    },
    {
        title: "Nanofiber\nMesh",
        tech: "Tech.03 — Porous",
        specs: ["DENS: 0.05G", "AIR: MAX"],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCV8WsEu-raVZFmAsEuwATgBKecsz_FbXIC8rXwHpvrIYfv_81COdlv6CPUlgPfu8gAsxGeku9s44DAww8UDpIt-F3P8lKXyG3tpSwnzNtkVNRyzVjvmxBf73vfbPlnzp2KOZBLEM-Mj_AjtJj28cnybDzz3MrUNMbILdSPKbxI6FBRW51bLeMAt1qkskr6AhEkvdMaYQGh4nKrevY5aRTMddGNIbUUnBCGoA3VYFoWIUkyzQ4RIiiUQ5uRTbnWiEH4knOsf6riPw4",
    },
    {
        title: "Laser\nPrecision",
        tech: "Tech.04 — Cutter",
        specs: ["TOL: 0.01MM", "BEAM: CO2"],
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB-kjkBbt5Lf_7-axVvdFLNMswrgj7jli4cDmmVQ7ys4GOXbc3AFVp8KQoOxrSRr5AHbL7VQPKCEq_c3QfWga_eoy0T0KzRVvQv_EnZeYroOTTEau3fBE3geYsDdn7KzqnoN_Ow4LhBc3xw7TPzOnYJzFoZeNV1adIJwZccKwc7JFA_sYiRcxRlu9N75AtZdH84nY6Qt07JrjpLXDP2XW5cJA9dU9I-Gz1-Aj3iMjzXoki0cFUWAKI7yumt-_hIic-YSxWnl2vkGDc",
    },
];

export default function TechnologyGrid() {
    return (
        <section className="w-full border-b border-black bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-black">
                {technologies.map((tech, index) => (
                    <div
                        key={tech.tech}
                        className={`relative group p-6 flex flex-col gap-6 aspect-[3/4] hover:bg-gray-50 transition-colors duration-500 ${index < 3 ? "border-r border-black sm:border-r-0 lg:border-r" : ""
                            }`}
                    >
                        {/* Image */}
                        <div className="flex-1 w-full bg-gray-100 overflow-hidden relative border border-gray-200">
                            <img
                                alt={tech.title}
                                className="w-full h-full object-cover grayscale mix-blend-multiply contrast-110 opacity-90 group-hover:scale-110 transition-transform duration-700"
                                src={tech.image}
                            />
                            {/* Corner accents */}
                            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#004aad] opacity-50" />
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#004aad] opacity-50" />
                        </div>

                        {/* Info */}
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="text-xl font-bold uppercase leading-none mb-2 tracking-tight text-[#111318] whitespace-pre-line">
                                    {tech.title}
                                </h3>
                                <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase text-gray-400">
                                    {tech.tech}
                                </span>
                            </div>
                            <div className="text-right font-[family-name:var(--font-mono)] text-[10px] text-[#004aad] leading-tight">
                                {tech.specs.map((spec) => (
                                    <span key={spec} className="block">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
