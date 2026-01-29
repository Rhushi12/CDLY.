const stats = [
    { value: "100%", label: "Organic Materials" },
    { value: "03", label: "Global Ateliers" },
    { value: "Zero", label: "Waste Production" },
];

export default function StatsSection() {
    return (
        <section className="border-b border-black bg-white reveal-on-scroll">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-12 md:p-16 flex flex-col items-center justify-center text-center gap-4 hover:bg-gray-50 transition-colors group ${index < 2 ? "border-b md:border-b-0 md:border-r border-black" : ""
                                }`}
                        >
                            <h3 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-[#111318] group-hover:text-[#004aad] transition-all duration-300">
                                {stat.value}
                            </h3>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#111318]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
