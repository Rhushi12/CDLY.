import Link from "next/link";

const pillars = [
    {
        number: "01",
        icon: "cut",
        title: "Craftsmanship",
        description:
            "Every seam is scrutinized. We partner with heritage ateliers in Italy and Japan to ensure that traditional techniques inform our modern silhouettes. Quality is not an option; it is the foundation.",
        link: "/craftsmanship",
        linkLabel: "Discover Our Craft",
    },
    {
        number: "02",
        icon: "recycling",
        title: "Sustainability",
        description:
            "Responsibility is woven into our fabric. We utilize 100% natural fibers and deadstock materials, minimizing our footprint while maximizing the longevity of every piece we create.",
        link: "/sustainability",
        linkLabel: "Explore Our Ethos",
    },
    {
        number: "03",
        icon: "science",
        title: "Innovation",
        description:
            "We challenge the status quo of garment construction. Through material science and ergonomic study, we push the boundaries of what tailored clothing can achieve in a modern context.",
        link: "/innovation",
        linkLabel: "Future of Form",
    },
];

export default function PillarsSection() {
    return (
        <section className="w-full border-t border-black">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-b border-black bg-white">
                {pillars.map((pillar) => (
                    <div
                        key={pillar.number}
                        className="group relative min-h-[500px] p-8 md:p-12 flex flex-col justify-between hover:bg-gray-50 transition-colors duration-500"
                    >
                        <div className="flex justify-between items-start">
                            <span className="text-6xl md:text-8xl font-black text-gray-200 group-hover:text-[#004aad] transition-colors duration-300">
                                {pillar.number}
                            </span>
                            <span className="material-symbols-outlined text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#004aad]">
                                {pillar.icon}
                            </span>
                        </div>
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 border-b border-black pb-4 inline-block text-[#111318]">
                                {pillar.title}
                            </h3>
                            <p className="text-sm font-[family-name:var(--font-mono)] leading-relaxed text-gray-600 uppercase">
                                {pillar.description}
                            </p>
                            {pillar.link && (
                                <Link
                                    href={pillar.link}
                                    className="inline-flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-widest text-[#004aad] hover:text-[#111318] transition-colors group/link"
                                >
                                    {pillar.linkLabel || "Learn More"}
                                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

