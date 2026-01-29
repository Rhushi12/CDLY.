const techniques = [
    {
        id: "01.04A",
        title: "Fig 01. Structural Weave",
        description:
            "Double-faced fabric construction allows for unlined finishing and lighter drape.",
        svg: (
            <svg
                className="w-full h-full stroke-black stroke-[0.5] fill-none opacity-60 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 100 100"
            >
                <path d="M20,20 L80,20 L80,80 L20,80 Z" strokeDasharray="2,2" />
                <path d="M20,20 C40,40 60,40 80,20" />
                <line x1="50" x2="50" y1="20" y2="80" />
                <circle cx="50" cy="50" r="2" />
            </svg>
        ),
    },
    {
        id: "02.11B",
        title: "Fig 02. Ergonomic Shoulder",
        description:
            "Rotated shoulder seam shifts tension away from the scapula for movement.",
        svg: (
            <svg
                className="w-full h-full stroke-black stroke-[0.5] fill-none opacity-60 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 100 100"
            >
                <path
                    className="group-hover:stroke-[#004aad] transition-colors"
                    d="M10,50 Q25,25 50,25 T90,50"
                />
                <path d="M10,50 L10,90 L90,90 L90,50" />
                <line strokeDasharray="1,2" x1="50" x2="50" y1="25" y2="90" />
            </svg>
        ),
    },
    {
        id: "03.09X",
        title: "Fig 03. Bonded Seams",
        description:
            "Ultrasonic bonding eliminates thread bulk, creating a hermetic seal against elements.",
        svg: (
            <svg
                className="w-full h-full stroke-black stroke-[0.5] fill-none opacity-60 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 100 100"
            >
                <rect height="60" width="50" x="25" y="20" />
                <path d="M25,30 L75,30" />
                <path d="M35,20 L35,80" strokeDasharray="2,2" />
                <path d="M65,20 L65,80" strokeDasharray="2,2" />
            </svg>
        ),
    },
    {
        id: "04.22Z",
        title: "Fig 04. Laser Etching",
        description:
            "Precision cutting for buttonholes and vents, accurate to the micrometer.",
        svg: (
            <svg
                className="w-full h-full stroke-black stroke-[0.5] fill-none opacity-60 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 100 100"
            >
                <circle cx="50" cy="50" r="30" />
                <circle cx="50" cy="50" r="10" strokeDasharray="2,1" />
                <line x1="20" x2="80" y1="50" y2="50" />
                <line x1="50" x2="50" y1="20" y2="80" />
            </svg>
        ),
    },
];

export default function TechnicalGrid() {
    return (
        <section className="w-full border-b border-black">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black">
                    {techniques.map((tech) => (
                        <div
                            key={tech.id}
                            className="p-8 min-h-[450px] flex flex-col justify-between hover:bg-gray-50 transition-colors group cursor-crosshair"
                        >
                            <div className="w-full aspect-square border border-gray-100 p-8 flex items-center justify-center relative">
                                {tech.svg}
                                <span className="absolute top-2 right-2 font-[family-name:var(--font-mono)] text-[8px] text-gray-400">
                                    {tech.id}
                                </span>
                            </div>
                            <div className="mt-6 border-t border-black pt-4">
                                <h3 className="font-[family-name:var(--font-mono)] text-xs font-bold mb-2 uppercase text-[#004aad]">
                                    {tech.title}
                                </h3>
                                <p className="text-[10px] uppercase leading-relaxed text-gray-500 max-w-[24ch]">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
