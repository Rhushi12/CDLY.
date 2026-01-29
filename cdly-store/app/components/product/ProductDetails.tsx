interface ProductDetail {
    label: string;
    value: string;
}

interface ProductDetailsProps {
    details: ProductDetail[];
    careInstructions: string;
}

export default function ProductDetails({
    details,
    careInstructions,
}: ProductDetailsProps) {
    return (
        <section className="w-full border-b border-gray-200 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Details */}
                <div className="p-10 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r border-gray-200">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-10 text-[#111318]">
                        Details
                    </h3>
                    <ul className="space-y-6">
                        {details.map((detail, index) => (
                            <li
                                key={index}
                                className="flex items-baseline justify-between border-b border-gray-100 pb-2"
                            >
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                    {detail.label}
                                </span>
                                <span className="text-sm font-[family-name:var(--font-mono)] uppercase text-[#111318]">
                                    {detail.value}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Care Instructions */}
                <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-10 text-[#111318]">
                            Care Instructions
                        </h3>
                        <p className="text-sm md:text-base font-[family-name:var(--font-body)] leading-relaxed text-gray-600 mb-8 max-w-sm">
                            {careInstructions}
                        </p>
                    </div>
                    <div className="flex gap-6 text-gray-400">
                        <span className="material-symbols-outlined text-3xl">dry_cleaning</span>
                        <span className="material-symbols-outlined text-3xl">do_not_touch</span>
                        <span className="material-symbols-outlined text-3xl">iron</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
