const processSteps = [
    {
        number: "01",
        title: "Sourcing",
        description: "Direct partnerships with regenerative farms. No middlemen.",
    },
    {
        number: "02",
        title: "Spinning",
        description: "Water-free dyeing technologies and renewable energy mills.",
    },
    {
        number: "03",
        title: "Assembly",
        description: "Hand-finished in local ateliers with full fair wage audits.",
    },
    {
        number: "04",
        title: "Logistics",
        description: "Plastic-free packaging and carbon neutral delivery.",
    },
];

export default function ProcessGrid() {
    return (
        <section className="w-full border-b border-black bg-white py-32">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-black pb-6">
                    <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-[#111318]">
                        Process
                    </h2>
                    <span className="font-[family-name:var(--font-mono)] text-xs md:text-sm uppercase tracking-widest text-right max-w-xs leading-relaxed mt-6 md:mt-0 text-gray-600">
                        A linear journey towards
                        <br />
                        circular existence.
                    </span>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 border-l border-black">
                    {processSteps.map((step) => (
                        <div
                            key={step.number}
                            className="group relative min-h-[320px] p-8 border-r border-b border-black border-t md:border-t-0 flex flex-col justify-between hover:bg-gray-50 transition-colors duration-300"
                        >
                            <span className="text-sm font-[family-name:var(--font-mono)] text-[#004aad]">
                                {step.number}
                            </span>
                            <div>
                                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-[#111318]">
                                    {step.title}
                                </h3>
                                <p className="text-xs font-[family-name:var(--font-mono)] leading-relaxed text-gray-600 uppercase">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
