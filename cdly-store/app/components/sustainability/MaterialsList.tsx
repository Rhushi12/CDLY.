const materials = [
    { name: "Organic Cotton", cert: "Certified GOTS" },
    { name: "Deadstock Silk", cert: "Zero Waste" },
    { name: "Hemp Blend", cert: "Carbon Negative" },
    { name: "Recycled Wool", cert: "Circular" },
];

export default function MaterialsList() {
    return (
        <section className="w-full max-w-[1440px] mx-auto border-b border-black">
            <div className="flex flex-col lg:flex-row min-h-[800px]">
                {/* Left: Image */}
                <div className="w-full lg:w-1/2 relative border-b lg:border-b-0 lg:border-r border-black overflow-hidden group">
                    <img
                        alt="Sustainable Material Texture"
                        className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqveEZ90I4_u_zAThqMu-efgbd4wptio8zdgIJQ8-jj5ANEfrGNU5WiW52EiZkEiXouI2oI_8VHhzr61cO43LrCPZkc8swFO0G8BvszBxI1Z5IO82dnla8iP6lnGPnOPNeJadnuqy2gLq_36TWv2ygyKdMzY4LTyVrpnPpp8_nu2qQjAwucwyB55p-Mt0nckASnjHRfPdBC4Kb2m1GlqXbzgk2GzV7CRWlJgzHRxrO1OA69SCGdHWT-lYGhXERiUyLLtcjfiPkhN8"
                    />
                    <div className="absolute bottom-0 left-0 p-6 bg-white border-t border-r border-black">
                        <span className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-widest text-[#004aad]">
                            Fig. 01 — Raw Materiality
                        </span>
                    </div>
                </div>

                {/* Right: Materials List */}
                <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center p-8 lg:p-20">
                    <span className="block text-[#004aad] text-xs font-bold tracking-[0.2em] mb-6 uppercase">
                        Our Fabric
                    </span>
                    <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-16 text-[#111318]">
                        Materials
                    </h2>
                    <div className="flex flex-col w-full border-t border-black">
                        {materials.map((material) => (
                            <div
                                key={material.name}
                                className="flex justify-between items-baseline py-8 border-b border-black group cursor-pointer hover:bg-gray-50 transition-colors px-2"
                            >
                                <span className="text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:text-[#004aad] transition-colors text-[#111318]">
                                    {material.name}
                                </span>
                                <span className="font-[family-name:var(--font-mono)] text-xs text-gray-400 uppercase tracking-widest">
                                    {material.cert}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
