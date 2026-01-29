const materials = [
    { name: "Recycled Tech Nylon", ref: "NY-099" },
    { name: "Bio-Based Polymer", ref: "PL-204" },
    { name: "Thermo-Reactive Mesh", ref: "MS-001" },
    { name: "Carbon Fiber Weave", ref: "CF-X10" },
];

export default function MaterialsLibrary() {
    return (
        <section className="w-full py-24 md:py-32 bg-[#111318] text-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-6">
                    <h2 className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#004aad] flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#004aad] block" />
                        Materials Library
                    </h2>
                    <div className="text-right">
                        <span className="block text-xs font-[family-name:var(--font-mono)] text-gray-500">
                            Database v.2024.1
                        </span>
                    </div>
                </div>

                {/* Materials List */}
                <div className="flex flex-col relative">
                    {/* Background Icon */}
                    <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:flex items-center justify-center pointer-events-none opacity-20">
                        <span className="material-symbols-outlined text-[300px] text-gray-800 font-thin animate-pulse">
                            view_in_ar
                        </span>
                    </div>

                    {materials.map((material) => (
                        <div
                            key={material.ref}
                            className="group relative py-10 border-b border-gray-800 cursor-pointer transition-all duration-300 hover:bg-white/5 hover:pl-4"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-white group-hover:text-[#004aad] transition-colors duration-300">
                                    {material.name}
                                </h3>
                                <div className="flex items-center gap-4 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-xs font-[family-name:var(--font-mono)] uppercase text-[#004aad] bg-[#004aad]/10 px-2 py-1">
                                        View Schematic
                                    </span>
                                    <span className="font-[family-name:var(--font-mono)] text-xs text-gray-500">
                                        REF: {material.ref}
                                    </span>
                                </div>
                            </div>
                            {/* Hover glow effect */}
                            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none opacity-0 group-hover:opacity-20 z-0 transition-opacity duration-300 bg-[#004aad] mix-blend-overlay filter blur-3xl rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
