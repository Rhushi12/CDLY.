const stats = [
    { value: "100%", label: "Traceable" },
    { value: "0%", label: "Virgin Plastic" },
    { value: "42", label: "Artisan Partners" },
];

export default function TransparencyStats() {
    return (
        <section className="w-full bg-white border-b border-black py-32">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-24 text-center text-[#111318]">
                    Transparency
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-white p-16 flex flex-col items-center justify-center gap-4 hover:bg-gray-50 transition-colors aspect-square md:aspect-auto"
                        >
                            <span className="text-7xl md:text-9xl font-black text-[#004aad] tracking-tighter">
                                {stat.value}
                            </span>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#111318]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <a
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#004aad] transition-colors group text-[#111318]"
                        href="#"
                    >
                        Download Impact Report 2024
                        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
